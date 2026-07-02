var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BatasProvinsi_1 = new ol.format.GeoJSON();
var features_BatasProvinsi_1 = format_BatasProvinsi_1.readFeatures(json_BatasProvinsi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasProvinsi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasProvinsi_1.addFeatures(features_BatasProvinsi_1);
var lyr_BatasProvinsi_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasProvinsi_1, 
                style: style_BatasProvinsi_1,
                popuplayertitle: 'Batas Provinsi',
                interactive: true,
                title: '<img src="styles/legend/BatasProvinsi_1.png" /> Batas Provinsi'
            });
var format_BatasKabKota_2 = new ol.format.GeoJSON();
var features_BatasKabKota_2 = format_BatasKabKota_2.readFeatures(json_BatasKabKota_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabKota_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabKota_2.addFeatures(features_BatasKabKota_2);
var lyr_BatasKabKota_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabKota_2, 
                style: style_BatasKabKota_2,
                popuplayertitle: 'Batas Kab/Kota',
                interactive: true,
                title: '<img src="styles/legend/BatasKabKota_2.png" /> Batas Kab/Kota'
            });
var lyr_Indexpertanamanpalawija_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Index pertanaman palawija<br />\
    <img src="styles/legend/Indexpertanamanpalawija_3_0.png" /> 1<br />\
    <img src="styles/legend/Indexpertanamanpalawija_3_1.png" /> 2<br />\
    <img src="styles/legend/Indexpertanamanpalawija_3_2.png" /> 3<br />\
    <img src="styles/legend/Indexpertanamanpalawija_3_3.png" /> 4<br />\
    <img src="styles/legend/Indexpertanamanpalawija_3_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Indexpertanamanpalawija_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11841060.000000, -873346.384536, 12116790.000000, -647489.281550]
        })
    });
var format_RekapDesa_4 = new ol.format.GeoJSON();
var features_RekapDesa_4 = format_RekapDesa_4.readFeatures(json_RekapDesa_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RekapDesa_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RekapDesa_4.addFeatures(features_RekapDesa_4);
cluster_RekapDesa_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_RekapDesa_4
});
var lyr_RekapDesa_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RekapDesa_4, 
                style: style_RekapDesa_4,
                popuplayertitle: 'Rekap Desa',
                interactive: true,
                title: '<img src="styles/legend/RekapDesa_4.png" /> Rekap Desa'
            });
var format_RekapKecamatan_5 = new ol.format.GeoJSON();
var features_RekapKecamatan_5 = format_RekapKecamatan_5.readFeatures(json_RekapKecamatan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RekapKecamatan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RekapKecamatan_5.addFeatures(features_RekapKecamatan_5);
cluster_RekapKecamatan_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_RekapKecamatan_5
});
var lyr_RekapKecamatan_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RekapKecamatan_5, 
                style: style_RekapKecamatan_5,
                popuplayertitle: 'Rekap Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/RekapKecamatan_5.png" /> Rekap Kecamatan'
            });
var format_RekapKabKota_6 = new ol.format.GeoJSON();
var features_RekapKabKota_6 = format_RekapKabKota_6.readFeatures(json_RekapKabKota_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RekapKabKota_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RekapKabKota_6.addFeatures(features_RekapKabKota_6);
var lyr_RekapKabKota_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RekapKabKota_6, 
                style: style_RekapKabKota_6,
                popuplayertitle: 'Rekap Kab/Kota',
                interactive: true,
                title: '<img src="styles/legend/RekapKabKota_6.png" /> Rekap Kab/Kota'
            });
var format_RekapProvinsi_7 = new ol.format.GeoJSON();
var features_RekapProvinsi_7 = format_RekapProvinsi_7.readFeatures(json_RekapProvinsi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RekapProvinsi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RekapProvinsi_7.addFeatures(features_RekapProvinsi_7);
var lyr_RekapProvinsi_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RekapProvinsi_7, 
                style: style_RekapProvinsi_7,
                popuplayertitle: 'Rekap Provinsi',
                interactive: true,
                title: '<img src="styles/legend/RekapProvinsi_7.png" /> Rekap Provinsi'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_BatasProvinsi_1.setVisible(true);lyr_BatasKabKota_2.setVisible(true);lyr_Indexpertanamanpalawija_3.setVisible(true);lyr_RekapDesa_4.setVisible(false);lyr_RekapKecamatan_5.setVisible(false);lyr_RekapKabKota_6.setVisible(true);lyr_RekapProvinsi_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_BatasProvinsi_1,lyr_BatasKabKota_2,lyr_Indexpertanamanpalawija_3,lyr_RekapDesa_4,lyr_RekapKecamatan_5,lyr_RekapKabKota_6,lyr_RekapProvinsi_7];
lyr_BatasProvinsi_1.set('fieldAliases', {'WADMPR': 'WADMPR', });
lyr_BatasKabKota_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'KABPROV': 'KABPROV', });
lyr_RekapDesa_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'WADMKD': 'Desa', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'KDPKAB': 'KDPKAB', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'class_1_ha': 'Luas IP Palawija 1x setahun (ha)', 'class_2_ha': 'Luas IP Palawija 2x setahun (ha)', 'class_3_ha': 'Luas IP Palawija 3x setahun (ha)', 'class_4_ha': 'Luas IP Palawija 4x setahun (ha)', 'class_5_ha': 'Luas IP Palawija 5x setahun (ha)', 'total_secondary_ha': 'Total Luas IP Palawija setahun (ha)', });
lyr_RekapKecamatan_5.set('fieldAliases', {'WADMKC': 'Kecamatan', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'class_1_ha': 'Luas IP Palawija 1x setahun (ha)', 'class_2_ha': 'Luas IP Palawija 2x setahun (ha)', 'class_3_ha': 'Luas IP Palawija 2x setahun (ha)', 'class_4_ha': 'Luas IP Palawija 4x setahun (ha)', 'class_5_ha': 'Luas IP Palawija 5x setahun (ha)', 'total_secondary_ha': 'Total Luas IP Palawija setahun (ha)', });
lyr_RekapKabKota_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'Kab/Kota', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'KABPROV': 'KABPROV', 'class_1_ha': 'Luas IP Palawija 1x setahun (ha)', 'class_2_ha': 'Luas IP Palawija 2x setahun (ha)', 'class_3_ha': 'Luas IP Palawija 3x setahun (ha)', 'class_4_ha': 'Luas IP Palawija 4x setahun (ha)', 'class_5_ha': 'Luas IP Palawija 5x setahun (ha)', 'total_secondary_ha': 'Total Luas IP Palawija setahun (ha)', });
lyr_RekapProvinsi_7.set('fieldAliases', {'WADMPR': 'Provinsi', 'class_1_ha': 'Luas IP Palawija 1x setahun (ha)', 'class_2_ha': 'Luas IP Palawija 2x setahun (ha)', 'class_3_ha': 'Luas IP Palawija 3x setahun (ha)', 'class_4_ha': 'Luas IP Palawija 4x setahun (ha)', 'class_5_ha': 'Luas IP Palawija 5x setahun (ha)', 'total_secondary_ha': 'Luas IP Palawija Total (ha)', });
lyr_BatasProvinsi_1.set('fieldImages', {'WADMPR': 'TextEdit', });
lyr_BatasKabKota_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'KABPROV': 'TextEdit', });
lyr_RekapDesa_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'KDPKAB': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'class_1_ha': 'TextEdit', 'class_2_ha': 'TextEdit', 'class_3_ha': 'TextEdit', 'class_4_ha': 'TextEdit', 'class_5_ha': 'TextEdit', 'total_secondary_ha': 'TextEdit', });
lyr_RekapKecamatan_5.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'class_1_ha': 'TextEdit', 'class_2_ha': 'TextEdit', 'class_3_ha': 'TextEdit', 'class_4_ha': 'TextEdit', 'class_5_ha': 'TextEdit', 'total_secondary_ha': 'TextEdit', });
lyr_RekapKabKota_6.set('fieldImages', {'OBJECTID': 'Range', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'KABPROV': 'TextEdit', 'class_1_ha': 'TextEdit', 'class_2_ha': 'TextEdit', 'class_3_ha': 'TextEdit', 'class_4_ha': 'TextEdit', 'class_5_ha': 'TextEdit', 'total_secondary_ha': 'TextEdit', });
lyr_RekapProvinsi_7.set('fieldImages', {'WADMPR': 'TextEdit', 'class_1_ha': 'TextEdit', 'class_2_ha': 'TextEdit', 'class_3_ha': 'TextEdit', 'class_4_ha': 'TextEdit', 'class_5_ha': 'TextEdit', 'total_secondary_ha': 'TextEdit', });
lyr_BatasProvinsi_1.set('fieldLabels', {'WADMPR': 'no label', });
lyr_BatasKabKota_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'KABPROV': 'no label', });
lyr_RekapDesa_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'WADMKD': 'header label - always visible', 'WIADKD': 'hidden field', 'WADMKC': 'no label', 'WIADKC': 'hidden field', 'WADMKK': 'no label', 'WIADKK': 'hidden field', 'WADMPR': 'no label', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'KDPKAB': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'class_1_ha': 'inline label - visible with data', 'class_2_ha': 'inline label - visible with data', 'class_3_ha': 'inline label - visible with data', 'class_4_ha': 'inline label - visible with data', 'class_5_ha': 'inline label - visible with data', 'total_secondary_ha': 'inline label - visible with data', });
lyr_RekapKecamatan_5.set('fieldLabels', {'WADMKC': 'header label - always visible', 'WADMKK': 'no label', 'WADMPR': 'no label', 'class_1_ha': 'inline label - visible with data', 'class_2_ha': 'inline label - visible with data', 'class_3_ha': 'inline label - visible with data', 'class_4_ha': 'inline label - visible with data', 'class_5_ha': 'inline label - visible with data', 'total_secondary_ha': 'inline label - visible with data', });
lyr_RekapKabKota_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'header label - always visible', 'WADMPR': 'no label', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'KABPROV': 'hidden field', 'class_1_ha': 'inline label - visible with data', 'class_2_ha': 'inline label - visible with data', 'class_3_ha': 'inline label - visible with data', 'class_4_ha': 'inline label - visible with data', 'class_5_ha': 'inline label - visible with data', 'total_secondary_ha': 'inline label - visible with data', });
lyr_RekapProvinsi_7.set('fieldLabels', {'WADMPR': 'header label - always visible', 'class_1_ha': 'inline label - visible with data', 'class_2_ha': 'inline label - visible with data', 'class_3_ha': 'inline label - visible with data', 'class_4_ha': 'inline label - visible with data', 'class_5_ha': 'inline label - visible with data', 'total_secondary_ha': 'inline label - visible with data', });
lyr_RekapProvinsi_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});