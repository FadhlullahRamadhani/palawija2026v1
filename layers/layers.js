var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
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
                interactive: false,
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
                interactive: false,
                title: '<img src="styles/legend/BatasKabKota_2.png" /> Batas Kab/Kota'
            });
var format_BatasKecamatan_3 = new ol.format.GeoJSON();
var features_BatasKecamatan_3 = format_BatasKecamatan_3.readFeatures(json_BatasKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_3.addFeatures(features_BatasKecamatan_3);
var lyr_BatasKecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_3, 
                style: style_BatasKecamatan_3,
                popuplayertitle: 'Batas Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/BatasKecamatan_3.png" /> Batas Kecamatan'
            });
var lyr_PapuaSelatan_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Papua Selatan<br />\
    <img src="styles/legend/PapuaSelatan_4_0.png" /> 1<br />\
    <img src="styles/legend/PapuaSelatan_4_1.png" /> 2<br />\
    <img src="styles/legend/PapuaSelatan_4_2.png" /> 3<br />\
    <img src="styles/legend/PapuaSelatan_4_3.png" /> 4<br />\
    <img src="styles/legend/PapuaSelatan_4_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PapuaSelatan_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [15305970.000000, -1020182.435605, 15698280.000000, -506060.132763]
        })
    });
var lyr_PapuaTengah_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Papua Tengah<br />\
    <img src="styles/legend/PapuaTengah_5_0.png" /> 1<br />\
    <img src="styles/legend/PapuaTengah_5_1.png" /> 2<br />\
    <img src="styles/legend/PapuaTengah_5_2.png" /> 3<br />\
    <img src="styles/legend/PapuaTengah_5_3.png" /> 4<br />\
    <img src="styles/legend/PapuaTengah_5_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PapuaTengah_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [14981940.000000, -573651.843294, 15401550.000000, -286236.031868]
        })
    });
var lyr_PapuaPegunungan_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Papua Pegunungan<br />\
    <img src="styles/legend/PapuaPegunungan_6_0.png" /> 1<br />\
    <img src="styles/legend/PapuaPegunungan_6_1.png" /> 2<br />\
    <img src="styles/legend/PapuaPegunungan_6_2.png" /> 3<br />\
    <img src="styles/legend/PapuaPegunungan_6_3.png" /> 4<br />\
    <img src="styles/legend/PapuaPegunungan_6_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PapuaPegunungan_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [15342810.000000, -586906.513210, 15696330.000000, -346009.592290]
        })
    });
var lyr_PapuaBaratDaya_7 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Papua Barat Daya<br />\
    <img src="styles/legend/PapuaBaratDaya_7_0.png" /> 1<br />\
    <img src="styles/legend/PapuaBaratDaya_7_1.png" /> 2<br />\
    <img src="styles/legend/PapuaBaratDaya_7_2.png" /> 3<br />\
    <img src="styles/legend/PapuaBaratDaya_7_3.png" /> 4<br />\
    <img src="styles/legend/PapuaBaratDaya_7_4.png" /> 5<br />\
    <img src="styles/legend/PapuaBaratDaya_7_5.png" /> 6<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PapuaBaratDaya_7.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [14398800.000000, -254317.362240, 14860500.000000, 41940.302239]
        })
    });
var lyr_PapuaBarat_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Papua Barat<br />\
    <img src="styles/legend/PapuaBarat_8_0.png" /> 1<br />\
    <img src="styles/legend/PapuaBarat_8_1.png" /> 2<br />\
    <img src="styles/legend/PapuaBarat_8_2.png" /> 3<br />\
    <img src="styles/legend/PapuaBarat_8_3.png" /> 4<br />\
    <img src="styles/legend/PapuaBarat_8_4.png" /> 5<br />\
    <img src="styles/legend/PapuaBarat_8_5.png" /> 6<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PapuaBarat_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [14676120.000000, -482589.805866, 15065340.000000, -79442.053977]
        })
    });
var lyr_Papua_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Papua<br />\
    <img src="styles/legend/Papua_9_0.png" /> 1<br />\
    <img src="styles/legend/Papua_9_1.png" /> 2<br />\
    <img src="styles/legend/Papua_9_2.png" /> 3<br />\
    <img src="styles/legend/Papua_9_3.png" /> 4<br />\
    <img src="styles/legend/Papua_9_4.png" /> 5<br />\
    <img src="styles/legend/Papua_9_5.png" /> 6<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Papua_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [15056940.000000, -458644.756617, 15556980.000000, -51780.568793]
        })
    });
var lyr_MalukuUtara_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Maluku Utara<br />\
    <img src="styles/legend/MalukuUtara_10_0.png" /> 1<br />\
    <img src="styles/legend/MalukuUtara_10_1.png" /> 2<br />\
    <img src="styles/legend/MalukuUtara_10_2.png" /> 3<br />\
    <img src="styles/legend/MalukuUtara_10_3.png" /> 4<br />\
    <img src="styles/legend/MalukuUtara_10_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MalukuUtara_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13835130.000000, -275875.980441, 14366610.000000, 294584.679106]
        })
    });
var lyr_Maluku_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Maluku<br />\
    <img src="styles/legend/Maluku_11_0.png" /> 1<br />\
    <img src="styles/legend/Maluku_11_1.png" /> 2<br />\
    <img src="styles/legend/Maluku_11_2.png" /> 3<br />\
    <img src="styles/legend/Maluku_11_3.png" /> 4<br />\
    <img src="styles/legend/Maluku_11_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Maluku_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [14016030.000000, -444749.982497, 14587290.000000, -303504.474987]
        })
    });
var lyr_Sulut_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sulut<br />\
    <img src="styles/legend/Sulut_12_0.png" /> 1<br />\
    <img src="styles/legend/Sulut_12_1.png" /> 2<br />\
    <img src="styles/legend/Sulut_12_2.png" /> 3<br />\
    <img src="styles/legend/Sulut_12_3.png" /> 4<br />\
    <img src="styles/legend/Sulut_12_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Sulut_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13703940.000000, 32490.140512, 13953390.000000, 213639.938026]
        })
    });
var lyr_Sultra_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sultra<br />\
    <img src="styles/legend/Sultra_13_0.png" /> 1<br />\
    <img src="styles/legend/Sultra_13_1.png" /> 2<br />\
    <img src="styles/legend/Sultra_13_2.png" /> 3<br />\
    <img src="styles/legend/Sultra_13_3.png" /> 4<br />\
    <img src="styles/legend/Sultra_13_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Sultra_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13454550.000000, -645891.101721, 13728300.000000, -308820.593913]
        })
    });
var lyr_SultengGorontalo_14 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sulteng - Gorontalo<br />\
    <img src="styles/legend/SultengGorontalo_14_0.png" /> 1<br />\
    <img src="styles/legend/SultengGorontalo_14_1.png" /> 2<br />\
    <img src="styles/legend/SultengGorontalo_14_2.png" /> 3<br />\
    <img src="styles/legend/SultengGorontalo_14_3.png" /> 4<br />\
    <img src="styles/legend/SultengGorontalo_14_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/SultengGorontalo_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13294500.000000, -370107.529308, 13768830.000000, 153014.675667]
        })
    });
var lyr_Sulsel_15 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sulsel<br />\
    <img src="styles/legend/Sulsel_15_0.png" /> 1<br />\
    <img src="styles/legend/Sulsel_15_1.png" /> 2<br />\
    <img src="styles/legend/Sulsel_15_2.png" /> 3<br />\
    <img src="styles/legend/Sulsel_15_3.png" /> 4<br />\
    <img src="styles/legend/Sulsel_15_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Sulsel_15.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13274700.000000, -643418.525733, 13562790.000000, -216791.731481]
        })
    });
var lyr_Sulbar_16 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sulbar<br />\
    <img src="styles/legend/Sulbar_16_0.png" /> 1<br />\
    <img src="styles/legend/Sulbar_16_1.png" /> 2<br />\
    <img src="styles/legend/Sulbar_16_2.png" /> 3<br />\
    <img src="styles/legend/Sulbar_16_3.png" /> 4<br />\
    <img src="styles/legend/Sulbar_16_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Sulbar_16.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13212690.000000, -397757.569503, 13344420.000000, -94503.457644]
        })
    });
var lyr_Kalteng_17 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Kalteng<br />\
    <img src="styles/legend/Kalteng_17_0.png" /> 1<br />\
    <img src="styles/legend/Kalteng_17_1.png" /> 2<br />\
    <img src="styles/legend/Kalteng_17_2.png" /> 3<br />\
    <img src="styles/legend/Kalteng_17_3.png" /> 4<br />\
    <img src="styles/legend/Kalteng_17_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Kalteng_17.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12326610.000000, -394751.777962, 12896310.000000, 88082.799714]
        })
    });
var lyr_Kaltara_18 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Kaltara<br />\
    <img src="styles/legend/Kaltara_18_0.png" /> 1<br />\
    <img src="styles/legend/Kaltara_18_1.png" /> 2<br />\
    <img src="styles/legend/Kaltara_18_2.png" /> 3<br />\
    <img src="styles/legend/Kaltara_18_3.png" /> 4<br />\
    <img src="styles/legend/Kaltara_18_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Kaltara_18.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12752940.000000, 123997.810199, 13134390.000000, 491254.996427]
        })
    });
var lyr_Kalsel_19 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Kalsel<br />\
    <img src="styles/legend/Kalsel_19_0.png" /> 1<br />\
    <img src="styles/legend/Kalsel_19_1.png" /> 2<br />\
    <img src="styles/legend/Kalsel_19_2.png" /> 3<br />\
    <img src="styles/legend/Kalsel_19_3.png" /> 4<br />\
    <img src="styles/legend/Kalsel_19_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Kalsel_19.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12729000.000000, -472842.528250, 12986190.000000, -146112.778171]
        })
    });
var lyr_Kaltim_20 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Kaltim<br />\
    <img src="styles/legend/Kaltim_20_0.png" /> 1<br />\
    <img src="styles/legend/Kaltim_20_1.png" /> 2<br />\
    <img src="styles/legend/Kaltim_20_2.png" /> 3<br />\
    <img src="styles/legend/Kaltim_20_3.png" /> 4<br />\
    <img src="styles/legend/Kaltim_20_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Kaltim_20.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12671970.000000, -268339.126316, 13251150.000000, 286085.880871]
        })
    });
var lyr_Kalbar_21 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Kalbar<br />\
    <img src="styles/legend/Kalbar_21_0.png" /> 1<br />\
    <img src="styles/legend/Kalbar_21_1.png" /> 2<br />\
    <img src="styles/legend/Kalbar_21_2.png" /> 3<br />\
    <img src="styles/legend/Kalbar_21_3.png" /> 4<br />\
    <img src="styles/legend/Kalbar_21_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Kalbar_21.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12089100.000000, -341683.313065, 12713310.000000, 231770.991168]
        })
    });
var lyr_NTB_22 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NTB<br />\
    <img src="styles/legend/NTB_22_0.png" /> 1<br />\
    <img src="styles/legend/NTB_22_1.png" /> 2<br />\
    <img src="styles/legend/NTB_22_2.png" /> 3<br />\
    <img src="styles/legend/NTB_22_3.png" /> 4<br />\
    <img src="styles/legend/NTB_22_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NTB_22.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12893130.000000, -1018389.785408, 13275870.000000, -902456.215203]
        })
    });
var lyr_NTT_23 = new ol.layer.Image({
        opacity: 1,
        
    title: 'NTT<br />\
    <img src="styles/legend/NTT_23_0.png" /> 1<br />\
    <img src="styles/legend/NTT_23_1.png" /> 2<br />\
    <img src="styles/legend/NTT_23_2.png" /> 3<br />\
    <img src="styles/legend/NTT_23_3.png" /> 4<br />\
    <img src="styles/legend/NTT_23_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/NTT_23.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [13238880.000000, -1232988.616000, 13936470.000000, -880675.125463]
        })
    });
var lyr_JatimBali_24 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jatim - Bali<br />\
    <img src="styles/legend/JatimBali_24_0.png" /> 1<br />\
    <img src="styles/legend/JatimBali_24_1.png" /> 2<br />\
    <img src="styles/legend/JatimBali_24_2.png" /> 3<br />\
    <img src="styles/legend/JatimBali_24_3.png" /> 4<br />\
    <img src="styles/legend/JatimBali_24_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/JatimBali_24.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12344790.000000, -989050.175503, 12889290.000000, -748018.868953]
        })
    });
var lyr_JatengJogja_25 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jateng - Jogja<br />\
    <img src="styles/legend/JatengJogja_25_0.png" /> 1<br />\
    <img src="styles/legend/JatengJogja_25_1.png" /> 2<br />\
    <img src="styles/legend/JatengJogja_25_2.png" /> 3<br />\
    <img src="styles/legend/JatengJogja_25_3.png" /> 4<br />\
    <img src="styles/legend/JatengJogja_25_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/JatengJogja_25.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12084360.000000, -917306.050695, 12433440.000000, -710696.113525]
        })
    });
var lyr_JawaBarat_26 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jawa Barat<br />\
    <img src="styles/legend/JawaBarat_26_0.png" /> 1<br />\
    <img src="styles/legend/JawaBarat_26_1.png" /> 2<br />\
    <img src="styles/legend/JawaBarat_26_2.png" /> 3<br />\
    <img src="styles/legend/JawaBarat_26_3.png" /> 4<br />\
    <img src="styles/legend/JawaBarat_26_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/JawaBarat_26.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11841060.000000, -873346.384536, 12116790.000000, -647489.281550]
        })
    });
var lyr_Banten_27 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Banten<br />\
    <img src="styles/legend/Banten_27_0.png" /> 1<br />\
    <img src="styles/legend/Banten_27_1.png" /> 2<br />\
    <img src="styles/legend/Banten_27_2.png" /> 3<br />\
    <img src="styles/legend/Banten_27_3.png" /> 4<br />\
    <img src="styles/legend/Banten_27_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Banten_27.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11699640.000000, -783009.430109, 11886690.000000, -652917.365164]
        })
    });
var lyr_Babel_28 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Babel<br />\
    <img src="styles/legend/Babel_28_0.png" /> 1<br />\
    <img src="styles/legend/Babel_28_1.png" /> 2<br />\
    <img src="styles/legend/Babel_28_2.png" /> 3<br />\
    <img src="styles/legend/Babel_28_3.png" /> 4<br />\
    <img src="styles/legend/Babel_28_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Babel_28.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11700600.000000, -364368.028503, 12056040.000000, -166248.821881]
        })
    });
var lyr_KepulauanRiau_29 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Kepulauan Riau<br />\
    <img src="styles/legend/KepulauanRiau_29_0.png" /> 1<br />\
    <img src="styles/legend/KepulauanRiau_29_1.png" /> 2<br />\
    <img src="styles/legend/KepulauanRiau_29_2.png" /> 3<br />\
    <img src="styles/legend/KepulauanRiau_29_3.png" /> 4<br />\
    <img src="styles/legend/KepulauanRiau_29_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/KepulauanRiau_29.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11497020.000000, -89702.957058, 11714280.000000, 155055.270614]
        })
    });
var lyr_Jambi_30 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Jambi<br />\
    <img src="styles/legend/Jambi_30_0.png" /> 1<br />\
    <img src="styles/legend/Jambi_30_1.png" /> 2<br />\
    <img src="styles/legend/Jambi_30_2.png" /> 3<br />\
    <img src="styles/legend/Jambi_30_3.png" /> 4<br />\
    <img src="styles/legend/Jambi_30_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Jambi_30.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11257800.000000, -308490.207431, 11632980.000000, -81302.201660]
        })
    });
var lyr_Bengkulu_31 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Bengkulu<br />\
    <img src="styles/legend/Bengkulu_31_0.png" /> 1<br />\
    <img src="styles/legend/Bengkulu_31_1.png" /> 2<br />\
    <img src="styles/legend/Bengkulu_31_2.png" /> 3<br />\
    <img src="styles/legend/Bengkulu_31_3.png" /> 4<br />\
    <img src="styles/legend/Bengkulu_31_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Bengkulu_31.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11245740.000000, -556484.685365, 11553930.000000, -254827.768528]
        })
    });
var lyr_Sumsel_32 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sumsel<br />\
    <img src="styles/legend/Sumsel_32_0.png" /> 1<br />\
    <img src="styles/legend/Sumsel_32_1.png" /> 2<br />\
    <img src="styles/legend/Sumsel_32_2.png" /> 3<br />\
    <img src="styles/legend/Sumsel_32_3.png" /> 4<br />\
    <img src="styles/legend/Sumsel_32_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Sumsel_32.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11361690.000000, -548836.061222, 11824020.000000, -181104.331005]
        })
    });
var lyr_Lampung_33 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Lampung<br />\
    <img src="styles/legend/Lampung_33_0.png" /> 1<br />\
    <img src="styles/legend/Lampung_33_1.png" /> 2<br />\
    <img src="styles/legend/Lampung_33_2.png" /> 3<br />\
    <img src="styles/legend/Lampung_33_3.png" /> 4<br />\
    <img src="styles/legend/Lampung_33_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Lampung_33.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11531640.000000, -672311.562692, 11795190.000000, -414802.095584]
        })
    });
var lyr_Riau_34 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Riau<br />\
    <img src="styles/legend/Riau_34_0.png" /> 1<br />\
    <img src="styles/legend/Riau_34_1.png" /> 2<br />\
    <img src="styles/legend/Riau_34_2.png" /> 3<br />\
    <img src="styles/legend/Riau_34_3.png" /> 4<br />\
    <img src="styles/legend/Riau_34_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Riau_34.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [11137470.000000, -125558.108738, 11556480.000000, 289269.116057]
        })
    });
var lyr_Sumbar_35 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sumbar<br />\
    <img src="styles/legend/Sumbar_35_0.png" /> 1<br />\
    <img src="styles/legend/Sumbar_35_1.png" /> 2<br />\
    <img src="styles/legend/Sumbar_35_2.png" /> 3<br />\
    <img src="styles/legend/Sumbar_35_3.png" /> 4<br />\
    <img src="styles/legend/Sumbar_35_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Sumbar_35.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [10975710.000000, -395232.698708, 11342670.000000, 100954.215094]
        })
    });
var lyr_Sumut_36 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Sumut<br />\
    <img src="styles/legend/Sumut_36_0.png" /> 1<br />\
    <img src="styles/legend/Sumut_36_1.png" /> 2<br />\
    <img src="styles/legend/Sumut_36_2.png" /> 3<br />\
    <img src="styles/legend/Sumut_36_3.png" /> 4<br />\
    <img src="styles/legend/Sumut_36_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Sumut_36.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [10804380.000000, 19050.028324, 11180340.000000, 479430.843782]
        })
    });
var lyr_Aceh_37 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Aceh<br />\
    <img src="styles/legend/Aceh_37_0.png" /> 1<br />\
    <img src="styles/legend/Aceh_37_1.png" /> 2<br />\
    <img src="styles/legend/Aceh_37_2.png" /> 3<br />\
    <img src="styles/legend/Aceh_37_3.png" /> 4<br />\
    <img src="styles/legend/Aceh_37_4.png" /> 5<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Aceh_37.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [10572210.000000, 220123.684975, 10941330.000000, 669898.265023]
        })
    });
var format_RekapDesa_38 = new ol.format.GeoJSON();
var features_RekapDesa_38 = format_RekapDesa_38.readFeatures(json_RekapDesa_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RekapDesa_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RekapDesa_38.addFeatures(features_RekapDesa_38);
cluster_RekapDesa_38 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_RekapDesa_38
});
var lyr_RekapDesa_38 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RekapDesa_38, 
                style: style_RekapDesa_38,
                popuplayertitle: 'Rekap Desa',
                interactive: true,
                title: '<img src="styles/legend/RekapDesa_38.png" /> Rekap Desa'
            });
var format_RekapKecamatan_39 = new ol.format.GeoJSON();
var features_RekapKecamatan_39 = format_RekapKecamatan_39.readFeatures(json_RekapKecamatan_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RekapKecamatan_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RekapKecamatan_39.addFeatures(features_RekapKecamatan_39);
cluster_RekapKecamatan_39 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_RekapKecamatan_39
});
var lyr_RekapKecamatan_39 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RekapKecamatan_39, 
                style: style_RekapKecamatan_39,
                popuplayertitle: 'Rekap Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/RekapKecamatan_39.png" /> Rekap Kecamatan'
            });
var format_RekapKabKota_40 = new ol.format.GeoJSON();
var features_RekapKabKota_40 = format_RekapKabKota_40.readFeatures(json_RekapKabKota_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RekapKabKota_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RekapKabKota_40.addFeatures(features_RekapKabKota_40);
var lyr_RekapKabKota_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RekapKabKota_40, 
                style: style_RekapKabKota_40,
                popuplayertitle: 'Rekap Kab/Kota',
                interactive: true,
                title: '<img src="styles/legend/RekapKabKota_40.png" /> Rekap Kab/Kota'
            });
var format_RekapProvinsi_41 = new ol.format.GeoJSON();
var features_RekapProvinsi_41 = format_RekapProvinsi_41.readFeatures(json_RekapProvinsi_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RekapProvinsi_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RekapProvinsi_41.addFeatures(features_RekapProvinsi_41);
var lyr_RekapProvinsi_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RekapProvinsi_41, 
                style: style_RekapProvinsi_41,
                popuplayertitle: 'Rekap Provinsi',
                interactive: true,
                title: '<img src="styles/legend/RekapProvinsi_41.png" /> Rekap Provinsi'
            });
var group_Sumatera = new ol.layer.Group({
                                layers: [lyr_Babel_28,lyr_KepulauanRiau_29,lyr_Jambi_30,lyr_Bengkulu_31,lyr_Sumsel_32,lyr_Lampung_33,lyr_Riau_34,lyr_Sumbar_35,lyr_Sumut_36,lyr_Aceh_37,],
                                fold: 'close',
                                title: 'Sumatera'});
var group_JawaBali = new ol.layer.Group({
                                layers: [lyr_JatimBali_24,lyr_JatengJogja_25,lyr_JawaBarat_26,lyr_Banten_27,],
                                fold: 'close',
                                title: 'Jawa - Bali'});
var group_NusaTenggara = new ol.layer.Group({
                                layers: [lyr_NTB_22,lyr_NTT_23,],
                                fold: 'close',
                                title: 'Nusa Tenggara'});
var group_Kalimantan = new ol.layer.Group({
                                layers: [lyr_Kalteng_17,lyr_Kaltara_18,lyr_Kalsel_19,lyr_Kaltim_20,lyr_Kalbar_21,],
                                fold: 'close',
                                title: 'Kalimantan'});
var group_Sulawesi = new ol.layer.Group({
                                layers: [lyr_Sulut_12,lyr_Sultra_13,lyr_SultengGorontalo_14,lyr_Sulsel_15,lyr_Sulbar_16,],
                                fold: 'close',
                                title: 'Sulawesi'});
var group_Maluku = new ol.layer.Group({
                                layers: [lyr_MalukuUtara_10,lyr_Maluku_11,],
                                fold: 'close',
                                title: 'Maluku'});
var group_Papua = new ol.layer.Group({
                                layers: [lyr_PapuaSelatan_4,lyr_PapuaTengah_5,lyr_PapuaPegunungan_6,lyr_PapuaBaratDaya_7,lyr_PapuaBarat_8,lyr_Papua_9,],
                                fold: 'close',
                                title: 'Papua'});

lyr_GoogleHybrid_0.setVisible(true);lyr_BatasProvinsi_1.setVisible(true);lyr_BatasKabKota_2.setVisible(false);lyr_BatasKecamatan_3.setVisible(false);lyr_PapuaSelatan_4.setVisible(true);lyr_PapuaTengah_5.setVisible(true);lyr_PapuaPegunungan_6.setVisible(true);lyr_PapuaBaratDaya_7.setVisible(true);lyr_PapuaBarat_8.setVisible(true);lyr_Papua_9.setVisible(true);lyr_MalukuUtara_10.setVisible(true);lyr_Maluku_11.setVisible(true);lyr_Sulut_12.setVisible(true);lyr_Sultra_13.setVisible(true);lyr_SultengGorontalo_14.setVisible(true);lyr_Sulsel_15.setVisible(true);lyr_Sulbar_16.setVisible(true);lyr_Kalteng_17.setVisible(true);lyr_Kaltara_18.setVisible(true);lyr_Kalsel_19.setVisible(true);lyr_Kaltim_20.setVisible(true);lyr_Kalbar_21.setVisible(true);lyr_NTB_22.setVisible(true);lyr_NTT_23.setVisible(true);lyr_JatimBali_24.setVisible(true);lyr_JatengJogja_25.setVisible(true);lyr_JawaBarat_26.setVisible(true);lyr_Banten_27.setVisible(true);lyr_Babel_28.setVisible(true);lyr_KepulauanRiau_29.setVisible(true);lyr_Jambi_30.setVisible(true);lyr_Bengkulu_31.setVisible(true);lyr_Sumsel_32.setVisible(true);lyr_Lampung_33.setVisible(true);lyr_Riau_34.setVisible(true);lyr_Sumbar_35.setVisible(true);lyr_Sumut_36.setVisible(true);lyr_Aceh_37.setVisible(true);lyr_RekapDesa_38.setVisible(false);lyr_RekapKecamatan_39.setVisible(false);lyr_RekapKabKota_40.setVisible(false);lyr_RekapProvinsi_41.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_BatasProvinsi_1,lyr_BatasKabKota_2,lyr_BatasKecamatan_3,group_Papua,group_Maluku,group_Sulawesi,group_Kalimantan,group_NusaTenggara,group_JawaBali,group_Sumatera,lyr_RekapDesa_38,lyr_RekapKecamatan_39,lyr_RekapKabKota_40,lyr_RekapProvinsi_41];
lyr_BatasProvinsi_1.set('fieldAliases', {'WADMPR': 'WADMPR', 'InPoly_FID': 'InPoly_FID', 'MaxSimpTol': 'MaxSimpTol', 'MinSimpTol': 'MinSimpTol', });
lyr_BatasKabKota_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'KABPROV': 'KABPROV', 'InPoly_FID': 'InPoly_FID', 'MaxSimpTol': 'MaxSimpTol', 'MinSimpTol': 'MinSimpTol', });
lyr_BatasKecamatan_3.set('fieldAliases', {'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'InPoly_FID': 'InPoly_FID', 'MaxSimpTol': 'MaxSimpTol', 'MinSimpTol': 'MinSimpTol', });
lyr_RekapDesa_38.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'WADMKD': 'Desa', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'KDPKAB': 'KDPKAB', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'class_1_ha': 'Luas IP Palawija 1x setahun (ha)', 'class_2_ha': 'Luas IP Palawija 2x setahun (ha)', 'class_3_ha': 'Luas IP Palawija 3x setahun (ha)', 'class_4_ha': 'Luas IP Palawija 4x setahun (ha)', 'class_5_ha': 'Luas IP Palawija 5x setahun (ha)', 'total_secondary_ha': 'Total Luas IP Palawija setahun (ha)', 'class_6_ha': 'class_6_ha', 'layer': 'layer', 'path': 'path', });
lyr_RekapKecamatan_39.set('fieldAliases', {'WADMKC': 'Kecamatan', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'class_1_ha': 'Luas IP Palawija 1x setahun (ha)', 'class_2_ha': 'Luas IP Palawija 2x setahun (ha)', 'class_3_ha': 'Luas IP Palawija 2x setahun (ha)', 'class_4_ha': 'Luas IP Palawija 4x setahun (ha)', 'class_5_ha': 'Luas IP Palawija 5x setahun (ha)', 'total_secondary_ha': 'Total Luas IP Palawija setahun (ha)', 'class_6_ha': 'class_6_ha', 'layer': 'layer', 'path': 'path', });
lyr_RekapKabKota_40.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'Kab/Kota', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'KABPROV': 'KABPROV', 'class_1_ha': 'Luas IP Palawija 1x setahun (ha)', 'class_2_ha': 'Luas IP Palawija 2x setahun (ha)', 'class_3_ha': 'Luas IP Palawija 3x setahun (ha)', 'class_4_ha': 'Luas IP Palawija 4x setahun (ha)', 'class_5_ha': 'Luas IP Palawija 5x setahun (ha)', 'total_secondary_ha': 'Total Luas IP Palawija setahun (ha)', 'class_6_ha': 'class_6_ha', 'layer': 'layer', 'path': 'path', });
lyr_RekapProvinsi_41.set('fieldAliases', {'WADMPR': 'Provinsi', 'class_1_ha': 'Luas IP Palawija 1x setahun (ha)', 'class_2_ha': 'Luas IP Palawija 2x setahun (ha)', 'class_3_ha': 'Luas IP Palawija 3x setahun (ha)', 'class_4_ha': 'Luas IP Palawija 4x setahun (ha)', 'class_5_ha': 'Luas IP Palawija 5x setahun (ha)', 'total_secondary_ha': 'Luas IP Palawija Total (ha)', 'singkatan': 'singkatan', 'class_6_ha': 'class_6_ha', 'layer': 'layer', 'path': 'path', });
lyr_BatasProvinsi_1.set('fieldImages', {'WADMPR': 'TextEdit', 'InPoly_FID': 'TextEdit', 'MaxSimpTol': 'TextEdit', 'MinSimpTol': 'TextEdit', });
lyr_BatasKabKota_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'KABPROV': 'TextEdit', 'InPoly_FID': '', 'MaxSimpTol': '', 'MinSimpTol': '', });
lyr_BatasKecamatan_3.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'InPoly_FID': 'TextEdit', 'MaxSimpTol': 'TextEdit', 'MinSimpTol': 'TextEdit', });
lyr_RekapDesa_38.set('fieldImages', {'OBJECTID': 'TextEdit', 'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'KDPKAB': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'class_1_ha': 'TextEdit', 'class_2_ha': 'TextEdit', 'class_3_ha': 'TextEdit', 'class_4_ha': 'TextEdit', 'class_5_ha': 'TextEdit', 'total_secondary_ha': 'TextEdit', 'class_6_ha': '', 'layer': '', 'path': '', });
lyr_RekapKecamatan_39.set('fieldImages', {'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'class_1_ha': 'TextEdit', 'class_2_ha': 'TextEdit', 'class_3_ha': 'TextEdit', 'class_4_ha': 'TextEdit', 'class_5_ha': 'TextEdit', 'total_secondary_ha': 'TextEdit', 'class_6_ha': '', 'layer': '', 'path': '', });
lyr_RekapKabKota_40.set('fieldImages', {'OBJECTID': 'Range', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'Range', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'KABPROV': 'TextEdit', 'class_1_ha': 'TextEdit', 'class_2_ha': 'TextEdit', 'class_3_ha': 'TextEdit', 'class_4_ha': 'TextEdit', 'class_5_ha': 'TextEdit', 'total_secondary_ha': 'TextEdit', 'class_6_ha': '', 'layer': '', 'path': '', });
lyr_RekapProvinsi_41.set('fieldImages', {'WADMPR': 'TextEdit', 'class_1_ha': 'TextEdit', 'class_2_ha': 'TextEdit', 'class_3_ha': 'TextEdit', 'class_4_ha': 'TextEdit', 'class_5_ha': 'TextEdit', 'total_secondary_ha': 'TextEdit', 'singkatan': '', 'class_6_ha': '', 'layer': '', 'path': '', });
lyr_BatasProvinsi_1.set('fieldLabels', {'WADMPR': 'no label', 'InPoly_FID': 'no label', 'MaxSimpTol': 'no label', 'MinSimpTol': 'no label', });
lyr_BatasKabKota_2.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'KABPROV': 'no label', 'InPoly_FID': 'no label', 'MaxSimpTol': 'no label', 'MinSimpTol': 'no label', });
lyr_BatasKecamatan_3.set('fieldLabels', {'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'InPoly_FID': 'no label', 'MaxSimpTol': 'no label', 'MinSimpTol': 'no label', });
lyr_RekapDesa_38.set('fieldLabels', {'OBJECTID': 'hidden field', 'KDPPUM': 'hidden field', 'NAMOBJ': 'hidden field', 'REMARK': 'hidden field', 'KDPBPS': 'hidden field', 'FCODE': 'hidden field', 'LUASWH': 'hidden field', 'UUPP': 'hidden field', 'SRS_ID': 'hidden field', 'METADATA': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDBBPS': 'hidden field', 'WADMKD': 'header label - always visible', 'WIADKD': 'hidden field', 'WADMKC': 'no label', 'WIADKC': 'hidden field', 'WADMKK': 'no label', 'WIADKK': 'hidden field', 'WADMPR': 'no label', 'WIADPR': 'hidden field', 'TIPADM': 'hidden field', 'KDPKAB': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'class_1_ha': 'inline label - visible with data', 'class_2_ha': 'inline label - visible with data', 'class_3_ha': 'inline label - visible with data', 'class_4_ha': 'inline label - visible with data', 'class_5_ha': 'inline label - visible with data', 'total_secondary_ha': 'inline label - visible with data', 'class_6_ha': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_RekapKecamatan_39.set('fieldLabels', {'WADMKC': 'header label - always visible', 'WADMKK': 'no label', 'WADMPR': 'no label', 'class_1_ha': 'inline label - visible with data', 'class_2_ha': 'inline label - visible with data', 'class_3_ha': 'inline label - visible with data', 'class_4_ha': 'inline label - visible with data', 'class_5_ha': 'inline label - visible with data', 'total_secondary_ha': 'inline label - visible with data', 'class_6_ha': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_RekapKabKota_40.set('fieldLabels', {'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'FCODE': 'hidden field', 'REMARK': 'hidden field', 'METADATA': 'hidden field', 'SRS_ID': 'hidden field', 'KDBBPS': 'hidden field', 'KDCBPS': 'hidden field', 'KDCPUM': 'hidden field', 'KDEBPS': 'hidden field', 'KDEPUM': 'hidden field', 'KDPBPS': 'hidden field', 'KDPKAB': 'hidden field', 'KDPPUM': 'hidden field', 'LUASWH': 'hidden field', 'TIPADM': 'hidden field', 'WADMKC': 'hidden field', 'WADMKD': 'hidden field', 'WADMKK': 'header label - always visible', 'WADMPR': 'no label', 'WIADKC': 'hidden field', 'WIADKK': 'hidden field', 'WIADPR': 'hidden field', 'WIADKD': 'hidden field', 'SHAPE_Leng': 'hidden field', 'SHAPE_Area': 'hidden field', 'KABPROV': 'hidden field', 'class_1_ha': 'inline label - visible with data', 'class_2_ha': 'inline label - visible with data', 'class_3_ha': 'inline label - visible with data', 'class_4_ha': 'inline label - visible with data', 'class_5_ha': 'inline label - visible with data', 'total_secondary_ha': 'inline label - visible with data', 'class_6_ha': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_RekapProvinsi_41.set('fieldLabels', {'WADMPR': 'header label - always visible', 'class_1_ha': 'inline label - visible with data', 'class_2_ha': 'inline label - visible with data', 'class_3_ha': 'inline label - visible with data', 'class_4_ha': 'inline label - visible with data', 'class_5_ha': 'inline label - visible with data', 'total_secondary_ha': 'inline label - visible with data', 'singkatan': 'hidden field', 'class_6_ha': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_RekapProvinsi_41.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});