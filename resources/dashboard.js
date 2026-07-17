(function () {
    var classFields = [
        { key: 'class_1_ha', label: 'IP 1', color: '#4f8f6b' },
        { key: 'class_2_ha', label: 'IP 2', color: '#2f7d9a' },
        { key: 'class_3_ha', label: 'IP 3', color: '#c7a235' },
        { key: 'class_4_ha', label: 'IP 4', color: '#c86f43' },
        { key: 'class_5_ha', label: 'IP 5', color: '#8b5fa8' }
    ];

    var dashboardLayers = [
        { id: 'provinsi', label: 'Provinsi', layer: window.lyr_RekapProvinsi_41, features: window.features_RekapProvinsi_41, nameField: 'WADMPR', maxZoom: 8 },
        { id: 'kabkota', label: 'Kab/Kota', layer: window.lyr_RekapKabKota_40, features: window.features_RekapKabKota_40, nameField: 'WADMKK', maxZoom: 10 },
        { id: 'kecamatan', label: 'Kecamatan', layer: window.lyr_RekapKecamatan_39, features: window.features_RekapKecamatan_39, nameField: 'WADMKC', maxZoom: 12 },
        { id: 'desa', label: 'Desa', layer: window.lyr_RekapDesa_38, features: window.features_RekapDesa_38, nameField: 'WADMKD', maxZoom: 14 }
    ].filter(function (item) {
        return item.layer && item.features && item.features.length;
    });

    var activeId = 'provinsi';
    var searchTerm = '';
    var tabsEl = document.getElementById('dashboard-layer-tabs');
    var kpisEl = document.getElementById('dashboard-kpis');
    var chartEl = document.getElementById('dashboard-chart');
    var tableEl = document.getElementById('dashboard-table');
    var searchEl = document.getElementById('dashboard-search');
    var totalLabelEl = document.getElementById('dashboard-total-label');
    var selectedTableRow = null;
    var adminBlinkOverlay = null;
    var adminBlinkTimeout = null;

    if (!dashboardLayers.length || !tabsEl || !kpisEl || !chartEl || !tableEl) {
        return;
    }

    function toNumber(value) {
        if (value === null || value === undefined || value === '') {
            return 0;
        }
        var parsed = Number(String(value).replace(',', '.'));
        return Number.isFinite(parsed) ? parsed : 0;
    }

    function formatHa(value) {
        return new Intl.NumberFormat('id-ID', {
            maximumFractionDigits: value >= 1000 ? 0 : 1
        }).format(value);
    }

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, function (char) {
            return {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            }[char];
        });
    }

    function getName(feature, config) {
        return feature.get(config.nameField) || feature.get('NAMOBJ') || feature.get('WADMKK') || feature.get('WADMPR') || 'Tanpa nama';
    }

    function readRows(config) {
        return config.features.map(function (feature) {
            var classes = classFields.map(function (field) {
                return {
                    key: field.key,
                    label: field.label,
                    value: toNumber(feature.get(field.key))
                };
            });
            var total = toNumber(feature.get('total_secondary_ha'));
            if (!total) {
                total = classes.reduce(function (sum, item) {
                    return sum + item.value;
                }, 0);
            }
            var dominant = classes.slice().sort(function (a, b) {
                return b.value - a.value;
            })[0];

            return {
                feature: feature,
                name: getName(feature, config),
                total: total,
                dominant: dominant,
                classes: classes
            };
        }).sort(function (a, b) {
            return b.total - a.total;
        });
    }

    function summarize(rows) {
        var classTotals = classFields.map(function (field) {
            return {
                label: field.label,
                color: field.color,
                value: rows.reduce(function (sum, row) {
                    var match = row.classes.find(function (item) {
                        return item.key === field.key;
                    });
                    return sum + (match ? match.value : 0);
                }, 0)
            };
        });
        var total = rows.reduce(function (sum, row) {
            return sum + row.total;
        }, 0);
        var top = rows[0];
        var dominant = classTotals.slice().sort(function (a, b) {
            return b.value - a.value;
        })[0];

        return {
            total: total,
            count: rows.length,
            top: top,
            dominant: dominant,
            classTotals: classTotals
        };
    }

    function setVisibleLayer(config) {
        dashboardLayers.forEach(function (item) {
            item.layer.setVisible(item.id === config.id);
        });
        if (window.lyr_BatasProvinsi_1) window.lyr_BatasProvinsi_1.setVisible(true);
        if (window.lyr_BatasKabKota_2) window.lyr_BatasKabKota_2.setVisible(true);
        if (window.lyr_BatasKecamatan_3) window.lyr_BatasKecamatan_3.setVisible(true);
    }

    function renderTabs(config) {
        tabsEl.innerHTML = '';
        dashboardLayers.forEach(function (item) {
            var button = document.createElement('button');
            button.type = 'button';
            button.className = 'layer-tab' + (item.id === config.id ? ' is-active' : '');
            button.textContent = item.label;
            button.setAttribute('role', 'tab');
            button.setAttribute('aria-selected', item.id === config.id ? 'true' : 'false');
            button.addEventListener('click', function () {
                activeId = item.id;
                render();
            });
            tabsEl.appendChild(button);
        });
    }

    function renderKpis(summary, config) {
        var topName = summary.top ? escapeHtml(summary.top.name) : '-';
        kpisEl.innerHTML = [
            '<div class="kpi-card"><p class="kpi-label">Total Luas</p><p class="kpi-value">' + formatHa(summary.total) + ' ha</p><p class="kpi-note">Layer ' + config.label + '</p></div>',
            '<div class="kpi-card"><p class="kpi-label">Jumlah Wilayah</p><p class="kpi-value">' + formatHa(summary.count) + '</p><p class="kpi-note">fitur pada layer aktif</p></div>',
            '<div class="kpi-card"><p class="kpi-label">Wilayah Teratas</p><p class="kpi-value">' + topName + '</p><p class="kpi-note">' + (summary.top ? formatHa(summary.top.total) + ' ha' : '-') + '</p></div>',
            '<div class="kpi-card"><p class="kpi-label">IP Dominan</p><p class="kpi-value">' + summary.dominant.label + '</p><p class="kpi-note">' + formatHa(summary.dominant.value) + ' ha</p></div>'
        ].join('');
    }

    function renderChart(summary) {
        var max = Math.max.apply(null, summary.classTotals.map(function (item) {
            return item.value;
        })) || 1;
        totalLabelEl.textContent = formatHa(summary.total) + ' ha';
        chartEl.innerHTML = summary.classTotals.map(function (item) {
            var width = Math.max((item.value / max) * 100, item.value > 0 ? 2 : 0);
            return '<div class="bar-row"><div class="bar-name">' + escapeHtml(item.label) + '</div><div class="bar-track"><div class="bar-fill" style="width:' + width + '%; background:' + item.color + '"></div></div><div class="bar-value">' + formatHa(item.value) + '</div></div>';
        }).join('');
    }

    function zoomToFeature(feature, config) {
        if (!window.map || !feature || !feature.getGeometry()) {
            return;
        }
        var extent = feature.getGeometry().getExtent();
        var padding = window.innerWidth <= 820 ? [40, 40, 40, 40] : [70, 70, 70, 430];
        window.map.getView().fit(extent, {
            duration: 450,
            maxZoom: config.maxZoom,
            padding: padding
        });
    }

    function getFeatureCenter(feature) {
        var geometry = feature.getGeometry();
        if (geometry.getType && geometry.getType() === 'Point') {
            return geometry.getCoordinates();
        }
        return ol.extent.getCenter(geometry.getExtent());
    }

    function blinkAdminNameOnMap(row) {
        if (!window.map || !row.feature || !row.feature.getGeometry()) {
            return;
        }
        if (!adminBlinkOverlay) {
            var element = document.createElement('div');
            element.className = 'admin-map-blink';
            adminBlinkOverlay = new ol.Overlay({
                element: element,
                positioning: 'center-center',
                stopEvent: false
            });
            window.map.addOverlay(adminBlinkOverlay);
        }

        clearTimeout(adminBlinkTimeout);
        var overlayElement = adminBlinkOverlay.getElement();
        overlayElement.classList.remove('admin-map-blink');
        void overlayElement.offsetWidth;
        overlayElement.textContent = row.name;
        overlayElement.classList.add('admin-map-blink');
        adminBlinkOverlay.setPosition(getFeatureCenter(row.feature));
        adminBlinkTimeout = setTimeout(function () {
            adminBlinkOverlay.setPosition(undefined);
        }, 3600);
    }

    function blinkAdminName(rowEl) {
        if (selectedTableRow && selectedTableRow !== rowEl) {
            selectedTableRow.classList.remove('is-selected');
        }
        selectedTableRow = rowEl;
        rowEl.classList.remove('is-selected');
        void rowEl.offsetWidth;
        rowEl.classList.add('is-selected');
    }

    function renderTable(rows, config) {
        var filtered = rows.filter(function (row) {
            return row.name.toLowerCase().indexOf(searchTerm) !== -1;
        }).slice(0, 80);

        tableEl.innerHTML = '';
        if (!filtered.length) {
            tableEl.innerHTML = '<tr><td class="empty-row" colspan="3">Tidak ada wilayah yang cocok.</td></tr>';
            return;
        }

        filtered.forEach(function (row) {
            var tr = document.createElement('tr');
            tr.innerHTML = '<td>' + escapeHtml(row.name) + '</td><td>' + formatHa(row.total) + '</td><td>' + escapeHtml(row.dominant.label) + '</td>';
            tr.addEventListener('click', function () {
                blinkAdminName(tr);
                blinkAdminNameOnMap(row);
                zoomToFeature(row.feature, config);
            });
            tableEl.appendChild(tr);
        });
    }

    function render() {
        var config = dashboardLayers.find(function (item) {
            return item.id === activeId;
        }) || dashboardLayers[0];
        var rows = readRows(config);
        var summary = summarize(rows);

        setVisibleLayer(config);
        renderTabs(config);
        renderKpis(summary, config);
        renderChart(summary);
        renderTable(rows, config);
    }

    if (searchEl) {
        searchEl.addEventListener('input', function (event) {
            searchTerm = event.target.value.trim().toLowerCase();
            render();
        });
    }

    render();
})();
