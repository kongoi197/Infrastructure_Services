ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([35.217045, -6.686397, 36.380621, -5.751682]);
var wms_layers = [];


        var lyr_GoogleTerrainHybrid_0 = new ol.layer.Tile({
            'title': 'Google Terrain Hybrid',
            'opacity': 0.753000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var lyr_DOM_CLASSIFIED_2024_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DOM_CLASSIFIED_2024<br />\
    <img src="styles/legend/DOM_CLASSIFIED_2024_1_0.png" /> <= 9<br />\
    <img src="styles/legend/DOM_CLASSIFIED_2024_1_1.png" /> 9 - 10<br />\
    <img src="styles/legend/DOM_CLASSIFIED_2024_1_2.png" /> 10 - 11<br />\
    <img src="styles/legend/DOM_CLASSIFIED_2024_1_3.png" /> 11 - 12<br />\
    <img src="styles/legend/DOM_CLASSIFIED_2024_1_4.png" /> > 12<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DOM_CLASSIFIED_2024_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [3949557.666909, -721488.773187, 4022827.393704, -649976.498742]
        })
    });
var format_Apartments_2 = new ol.format.GeoJSON();
var features_Apartments_2 = format_Apartments_2.readFeatures(json_Apartments_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Apartments_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Apartments_2.addFeatures(features_Apartments_2);
var lyr_Apartments_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Apartments_2, 
                style: style_Apartments_2,
                popuplayertitle: 'Apartments',
                interactive: true,
                title: '<img src="styles/legend/Apartments_2.png" /> Apartments'
            });
var format_Universities_3 = new ol.format.GeoJSON();
var features_Universities_3 = format_Universities_3.readFeatures(json_Universities_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Universities_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Universities_3.addFeatures(features_Universities_3);
var lyr_Universities_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Universities_3, 
                style: style_Universities_3,
                popuplayertitle: 'Universities',
                interactive: true,
                title: '<img src="styles/legend/Universities_3.png" /> Universities'
            });
var format_TertiaryRoad_4 = new ol.format.GeoJSON();
var features_TertiaryRoad_4 = format_TertiaryRoad_4.readFeatures(json_TertiaryRoad_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_TertiaryRoad_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TertiaryRoad_4.addFeatures(features_TertiaryRoad_4);
var lyr_TertiaryRoad_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TertiaryRoad_4, 
                style: style_TertiaryRoad_4,
                popuplayertitle: 'Tertiary Road',
                interactive: true,
                title: '<img src="styles/legend/TertiaryRoad_4.png" /> Tertiary Road'
            });
var format_SecondaryRoad_5 = new ol.format.GeoJSON();
var features_SecondaryRoad_5 = format_SecondaryRoad_5.readFeatures(json_SecondaryRoad_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SecondaryRoad_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SecondaryRoad_5.addFeatures(features_SecondaryRoad_5);
var lyr_SecondaryRoad_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SecondaryRoad_5, 
                style: style_SecondaryRoad_5,
                popuplayertitle: 'Secondary Road',
                interactive: true,
                title: '<img src="styles/legend/SecondaryRoad_5.png" /> Secondary Road'
            });
var format_Railway_Rail_6 = new ol.format.GeoJSON();
var features_Railway_Rail_6 = format_Railway_Rail_6.readFeatures(json_Railway_Rail_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Railway_Rail_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railway_Rail_6.addFeatures(features_Railway_Rail_6);
var lyr_Railway_Rail_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Railway_Rail_6, 
                style: style_Railway_Rail_6,
                popuplayertitle: 'Railway_Rail',
                interactive: true,
                title: '<img src="styles/legend/Railway_Rail_6.png" /> Railway_Rail'
            });
var format_Mosques_7 = new ol.format.GeoJSON();
var features_Mosques_7 = format_Mosques_7.readFeatures(json_Mosques_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mosques_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosques_7.addFeatures(features_Mosques_7);
var lyr_Mosques_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosques_7, 
                style: style_Mosques_7,
                popuplayertitle: 'Mosques',
                interactive: true,
                title: '<img src="styles/legend/Mosques_7.png" /> Mosques'
            });
var format_House_8 = new ol.format.GeoJSON();
var features_House_8 = format_House_8.readFeatures(json_House_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_House_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_House_8.addFeatures(features_House_8);
var lyr_House_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_House_8, 
                style: style_House_8,
                popuplayertitle: 'House',
                interactive: true,
                title: '<img src="styles/legend/House_8.png" /> House'
            });
var format_Hotel_9 = new ol.format.GeoJSON();
var features_Hotel_9 = format_Hotel_9.readFeatures(json_Hotel_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Hotel_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotel_9.addFeatures(features_Hotel_9);
var lyr_Hotel_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotel_9, 
                style: style_Hotel_9,
                popuplayertitle: 'Hotel',
                interactive: true,
                title: '<img src="styles/legend/Hotel_9.png" /> Hotel'
            });
var format_Hospital_10 = new ol.format.GeoJSON();
var features_Hospital_10 = format_Hospital_10.readFeatures(json_Hospital_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Hospital_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospital_10.addFeatures(features_Hospital_10);
var lyr_Hospital_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hospital_10, 
                style: style_Hospital_10,
                popuplayertitle: 'Hospital',
                interactive: true,
                title: '<img src="styles/legend/Hospital_10.png" /> Hospital'
            });
var format_Footway_11 = new ol.format.GeoJSON();
var features_Footway_11 = format_Footway_11.readFeatures(json_Footway_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Footway_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Footway_11.addFeatures(features_Footway_11);
var lyr_Footway_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Footway_11, 
                style: style_Footway_11,
                popuplayertitle: 'Foot way',
                interactive: true,
                title: '<img src="styles/legend/Footway_11.png" /> Foot way'
            });
var format_Churches_12 = new ol.format.GeoJSON();
var features_Churches_12 = format_Churches_12.readFeatures(json_Churches_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Churches_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Churches_12.addFeatures(features_Churches_12);
var lyr_Churches_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Churches_12, 
                style: style_Churches_12,
                popuplayertitle: 'Churches',
                interactive: true,
                title: '<img src="styles/legend/Churches_12.png" /> Churches'
            });
var format_Apartments_13 = new ol.format.GeoJSON();
var features_Apartments_13 = format_Apartments_13.readFeatures(json_Apartments_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Apartments_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Apartments_13.addFeatures(features_Apartments_13);
var lyr_Apartments_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Apartments_13, 
                style: style_Apartments_13,
                popuplayertitle: 'Apartments',
                interactive: true,
                title: '<img src="styles/legend/Apartments_13.png" /> Apartments'
            });
var format_DOM_Urban_14 = new ol.format.GeoJSON();
var features_DOM_Urban_14 = format_DOM_Urban_14.readFeatures(json_DOM_Urban_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DOM_Urban_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DOM_Urban_14.addFeatures(features_DOM_Urban_14);
var lyr_DOM_Urban_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DOM_Urban_14, 
                style: style_DOM_Urban_14,
                popuplayertitle: 'DOM_Urban',
                interactive: true,
                title: '<img src="styles/legend/DOM_Urban_14.png" /> DOM_Urban'
            });

lyr_GoogleTerrainHybrid_0.setVisible(true);lyr_DOM_CLASSIFIED_2024_1.setVisible(true);lyr_Apartments_2.setVisible(true);lyr_Universities_3.setVisible(true);lyr_TertiaryRoad_4.setVisible(true);lyr_SecondaryRoad_5.setVisible(true);lyr_Railway_Rail_6.setVisible(true);lyr_Mosques_7.setVisible(true);lyr_House_8.setVisible(true);lyr_Hotel_9.setVisible(true);lyr_Hospital_10.setVisible(true);lyr_Footway_11.setVisible(true);lyr_Churches_12.setVisible(true);lyr_Apartments_13.setVisible(true);lyr_DOM_Urban_14.setVisible(true);
var layersList = [lyr_GoogleTerrainHybrid_0,lyr_DOM_CLASSIFIED_2024_1,lyr_Apartments_2,lyr_Universities_3,lyr_TertiaryRoad_4,lyr_SecondaryRoad_5,lyr_Railway_Rail_6,lyr_Mosques_7,lyr_House_8,lyr_Hotel_9,lyr_Hospital_10,lyr_Footway_11,lyr_Churches_12,lyr_Apartments_13,lyr_DOM_Urban_14];
lyr_Apartments_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_f': 'building_f', 'type': 'type', 'name': 'name', 'building_l': 'building_l', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', 'addr_city': 'addr_city', });
lyr_Universities_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'surface': 'surface', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'operator_t': 'operator_t', 'name': 'name', 'addr_ward': 'addr_ward', 'addr_subwa': 'addr_subwa', });
lyr_TertiaryRoad_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tunnel': 'tunnel', 'chainage': 'chainage', 'maxspeed': 'maxspeed', 'source_bri': 'source_bri', 'sidewalk': 'sidewalk', 'lanes_forw': 'lanes_forw', 'lanes_back': 'lanes_back', 'flood_pron': 'flood_pron', 'junction': 'junction', 'oneway': 'oneway', 'layer': 'layer', 'bridge': 'bridge', 'source_dat': 'source_dat', 'smoothness': 'smoothness', 'name': 'name', 'lanes': 'lanes', 'surface': 'surface', });
lyr_SecondaryRoad_5.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'tunnel': 'tunnel', 'chainage': 'chainage', 'flood_pron': 'flood_pron', 'maxspeed': 'maxspeed', 'lanes_forw': 'lanes_forw', 'lanes_back': 'lanes_back', 'source_ref': 'source_ref', 'source_dat': 'source_dat', 'ref': 'ref', 'layer': 'layer', 'bridge': 'bridge', 'oneway': 'oneway', 'lane_marki': 'lane_marki', 'ref_alt': 'ref_alt', 'surface': 'surface', 'smoothness': 'smoothness', 'name': 'name', 'lanes': 'lanes', });
lyr_Railway_Rail_6.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'railway': 'railway', 'tunnel': 'tunnel', 'source_dat': 'source_dat', 'source_bri': 'source_bri', 'radius': 'radius', 'railway_po': 'railway_po', 'check_date': 'check_date', 'voltage': 'voltage', 'opening_da': 'opening_da', 'name': 'name', 'maxspeed': 'maxspeed', 'frequency': 'frequency', 'layer': 'layer', 'bridge': 'bridge', 'service': 'service', 'usage': 'usage', 'passenger_': 'passenger_', 'gauge': 'gauge', 'electrifie': 'electrifie', });
lyr_Mosques_7.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_l': 'building_l', 'check_date': 'check_date', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'religion': 'religion', 'name': 'name', 'denominati': 'denominati', 'amenity': 'amenity', });
lyr_House_8.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'layer': 'layer', 'descriptio': 'descriptio', 'roof_colou': 'roof_colou', 'website': 'website', 'religion': 'religion', 'phone': 'phone', 'operator': 'operator', 'opening_ho': 'opening_ho', 'office': 'office', 'name': 'name', 'height': 'height', 'denominati': 'denominati', 'addr_city': 'addr_city', 'addr_stree': 'addr_stree', 'addr_postc': 'addr_postc', 'addr_house': 'addr_house', 'building_l': 'building_l', 'roof_shape': 'roof_shape', 'building_m': 'building_m', });
lyr_Hotel_9.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'tourism': 'tourism', 'name_en': 'name_en', 'check_date': 'check_date', 'nohousenum': 'nohousenum', 'name': 'name', 'building_l': 'building_l', 'type': 'type', });
lyr_Hospital_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'descriptio': 'descriptio', 'opening_ho': 'opening_ho', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'operator_t': 'operator_t', 'name_en': 'name_en', 'addr_ward': 'addr_ward', 'addr_subwa': 'addr_subwa', 'check_date': 'check_date', 'operator': 'operator', 'healthcare': 'healthcare', 'addr_stree': 'addr_stree', 'survey_dat': 'survey_dat', 'building_l': 'building_l', 'emergency': 'emergency', 'designatio': 'designatio', 'name': 'name', 'healthca_1': 'healthca_1', 'building': 'building', });
lyr_Footway_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'flood_pron': 'flood_pron', 'comment': 'comment', 'ford': 'ford', 'motor_vehi': 'motor_vehi', 'horse': 'horse', 'bicycle': 'bicycle', 'maxspeed': 'maxspeed', 'footway': 'footway', 'crossing_m': 'crossing_m', 'crossing': 'crossing', 'informal': 'informal', 'width': 'width', 'tunnel': 'tunnel', 'oneway': 'oneway', 'layer': 'layer', 'noname': 'noname', 'smoothness': 'smoothness', 'lit': 'lit', 'surface': 'surface', 'name': 'name', 'foot': 'foot', 'access': 'access', });
lyr_Churches_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'height': 'height', 'name': 'name', 'addr_city': 'addr_city', 'building_l': 'building_l', });
lyr_Apartments_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'building_f': 'building_f', 'type': 'type', 'name': 'name', 'building_l': 'building_l', 'addr_stree': 'addr_stree', 'addr_house': 'addr_house', 'addr_city': 'addr_city', });
lyr_DOM_Urban_14.set('fieldAliases', {'GID_2': 'GID_2', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'NAME_2': 'NAME_2', 'VARNAME_2': 'VARNAME_2', 'NL_NAME_2': 'NL_NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'CC_2': 'CC_2', 'HASC_2': 'HASC_2', });
lyr_Apartments_2.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_f': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'building_l': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', });
lyr_Universities_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'surface': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'operator_t': 'TextEdit', 'name': 'TextEdit', 'addr_ward': 'TextEdit', 'addr_subwa': 'TextEdit', });
lyr_TertiaryRoad_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'tunnel': 'TextEdit', 'chainage': 'TextEdit', 'maxspeed': 'TextEdit', 'source_bri': 'TextEdit', 'sidewalk': 'TextEdit', 'lanes_forw': 'TextEdit', 'lanes_back': 'TextEdit', 'flood_pron': 'TextEdit', 'junction': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'source_dat': 'TextEdit', 'smoothness': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', 'surface': 'TextEdit', });
lyr_SecondaryRoad_5.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'tunnel': 'TextEdit', 'chainage': 'TextEdit', 'flood_pron': 'TextEdit', 'maxspeed': 'TextEdit', 'lanes_forw': 'TextEdit', 'lanes_back': 'TextEdit', 'source_ref': 'TextEdit', 'source_dat': 'TextEdit', 'ref': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'oneway': 'TextEdit', 'lane_marki': 'TextEdit', 'ref_alt': 'TextEdit', 'surface': 'TextEdit', 'smoothness': 'TextEdit', 'name': 'TextEdit', 'lanes': 'TextEdit', });
lyr_Railway_Rail_6.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'railway': 'TextEdit', 'tunnel': 'TextEdit', 'source_dat': 'TextEdit', 'source_bri': 'TextEdit', 'radius': 'TextEdit', 'railway_po': 'TextEdit', 'check_date': 'TextEdit', 'voltage': 'TextEdit', 'opening_da': 'TextEdit', 'name': 'TextEdit', 'maxspeed': 'TextEdit', 'frequency': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'service': 'TextEdit', 'usage': 'TextEdit', 'passenger_': 'TextEdit', 'gauge': 'TextEdit', 'electrifie': 'TextEdit', });
lyr_Mosques_7.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_l': 'TextEdit', 'check_date': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'religion': 'TextEdit', 'name': 'TextEdit', 'denominati': 'TextEdit', 'amenity': 'TextEdit', });
lyr_House_8.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'layer': 'TextEdit', 'descriptio': 'TextEdit', 'roof_colou': 'TextEdit', 'website': 'TextEdit', 'religion': 'TextEdit', 'phone': 'TextEdit', 'operator': 'TextEdit', 'opening_ho': 'TextEdit', 'office': 'TextEdit', 'name': 'TextEdit', 'height': 'TextEdit', 'denominati': 'TextEdit', 'addr_city': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_postc': 'TextEdit', 'addr_house': 'TextEdit', 'building_l': 'TextEdit', 'roof_shape': 'TextEdit', 'building_m': 'TextEdit', });
lyr_Hotel_9.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'tourism': 'TextEdit', 'name_en': 'TextEdit', 'check_date': 'TextEdit', 'nohousenum': 'TextEdit', 'name': 'TextEdit', 'building_l': 'TextEdit', 'type': 'TextEdit', });
lyr_Hospital_10.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'descriptio': 'TextEdit', 'opening_ho': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'operator_t': 'TextEdit', 'name_en': 'TextEdit', 'addr_ward': 'TextEdit', 'addr_subwa': 'TextEdit', 'check_date': 'TextEdit', 'operator': 'TextEdit', 'healthcare': 'TextEdit', 'addr_stree': 'TextEdit', 'survey_dat': 'TextEdit', 'building_l': 'TextEdit', 'emergency': 'TextEdit', 'designatio': 'TextEdit', 'name': 'TextEdit', 'healthca_1': 'TextEdit', 'building': 'TextEdit', });
lyr_Footway_11.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'highway': 'TextEdit', 'flood_pron': 'TextEdit', 'comment': 'TextEdit', 'ford': 'TextEdit', 'motor_vehi': 'TextEdit', 'horse': 'TextEdit', 'bicycle': 'TextEdit', 'maxspeed': 'TextEdit', 'footway': 'TextEdit', 'crossing_m': 'TextEdit', 'crossing': 'TextEdit', 'informal': 'TextEdit', 'width': 'TextEdit', 'tunnel': 'TextEdit', 'oneway': 'TextEdit', 'layer': 'TextEdit', 'noname': 'TextEdit', 'smoothness': 'TextEdit', 'lit': 'TextEdit', 'surface': 'TextEdit', 'name': 'TextEdit', 'foot': 'TextEdit', 'access': 'TextEdit', });
lyr_Churches_12.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'height': 'TextEdit', 'name': 'TextEdit', 'addr_city': 'TextEdit', 'building_l': 'TextEdit', });
lyr_Apartments_13.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'building': 'TextEdit', 'building_f': 'TextEdit', 'type': 'TextEdit', 'name': 'TextEdit', 'building_l': 'TextEdit', 'addr_stree': 'TextEdit', 'addr_house': 'TextEdit', 'addr_city': 'TextEdit', });
lyr_DOM_Urban_14.set('fieldImages', {'GID_2': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'CC_2': 'TextEdit', 'HASC_2': 'TextEdit', });
lyr_Apartments_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building_f': 'no label', 'type': 'no label', 'name': 'no label', 'building_l': 'no label', 'addr_stree': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', });
lyr_Universities_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'surface': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'operator_t': 'no label', 'name': 'no label', 'addr_ward': 'no label', 'addr_subwa': 'no label', });
lyr_TertiaryRoad_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tunnel': 'no label', 'chainage': 'no label', 'maxspeed': 'no label', 'source_bri': 'no label', 'sidewalk': 'no label', 'lanes_forw': 'no label', 'lanes_back': 'no label', 'flood_pron': 'no label', 'junction': 'no label', 'oneway': 'no label', 'layer': 'no label', 'bridge': 'no label', 'source_dat': 'no label', 'smoothness': 'no label', 'name': 'no label', 'lanes': 'no label', 'surface': 'no label', });
lyr_SecondaryRoad_5.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'tunnel': 'no label', 'chainage': 'no label', 'flood_pron': 'no label', 'maxspeed': 'no label', 'lanes_forw': 'no label', 'lanes_back': 'no label', 'source_ref': 'no label', 'source_dat': 'no label', 'ref': 'no label', 'layer': 'no label', 'bridge': 'no label', 'oneway': 'no label', 'lane_marki': 'no label', 'ref_alt': 'no label', 'surface': 'no label', 'smoothness': 'no label', 'name': 'no label', 'lanes': 'no label', });
lyr_Railway_Rail_6.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'railway': 'no label', 'tunnel': 'no label', 'source_dat': 'no label', 'source_bri': 'no label', 'radius': 'no label', 'railway_po': 'no label', 'check_date': 'no label', 'voltage': 'no label', 'opening_da': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'frequency': 'no label', 'layer': 'no label', 'bridge': 'no label', 'service': 'no label', 'usage': 'no label', 'passenger_': 'no label', 'gauge': 'no label', 'electrifie': 'no label', });
lyr_Mosques_7.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building_l': 'no label', 'check_date': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'religion': 'no label', 'name': 'no label', 'denominati': 'no label', 'amenity': 'no label', });
lyr_House_8.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'layer': 'no label', 'descriptio': 'no label', 'roof_colou': 'no label', 'website': 'no label', 'religion': 'no label', 'phone': 'no label', 'operator': 'no label', 'opening_ho': 'no label', 'office': 'no label', 'name': 'no label', 'height': 'no label', 'denominati': 'no label', 'addr_city': 'no label', 'addr_stree': 'no label', 'addr_postc': 'no label', 'addr_house': 'no label', 'building_l': 'no label', 'roof_shape': 'no label', 'building_m': 'no label', });
lyr_Hotel_9.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'tourism': 'no label', 'name_en': 'no label', 'check_date': 'no label', 'nohousenum': 'no label', 'name': 'no label', 'building_l': 'no label', 'type': 'no label', });
lyr_Hospital_10.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'descriptio': 'no label', 'opening_ho': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'operator_t': 'no label', 'name_en': 'no label', 'addr_ward': 'no label', 'addr_subwa': 'no label', 'check_date': 'no label', 'operator': 'no label', 'healthcare': 'no label', 'addr_stree': 'no label', 'survey_dat': 'no label', 'building_l': 'no label', 'emergency': 'no label', 'designatio': 'no label', 'name': 'no label', 'healthca_1': 'no label', 'building': 'no label', });
lyr_Footway_11.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'flood_pron': 'no label', 'comment': 'no label', 'ford': 'no label', 'motor_vehi': 'no label', 'horse': 'no label', 'bicycle': 'no label', 'maxspeed': 'no label', 'footway': 'no label', 'crossing_m': 'no label', 'crossing': 'no label', 'informal': 'no label', 'width': 'no label', 'tunnel': 'no label', 'oneway': 'no label', 'layer': 'no label', 'noname': 'no label', 'smoothness': 'no label', 'lit': 'no label', 'surface': 'no label', 'name': 'no label', 'foot': 'no label', 'access': 'no label', });
lyr_Churches_12.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'height': 'no label', 'name': 'no label', 'addr_city': 'no label', 'building_l': 'no label', });
lyr_Apartments_13.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'building_f': 'no label', 'type': 'no label', 'name': 'no label', 'building_l': 'no label', 'addr_stree': 'no label', 'addr_house': 'no label', 'addr_city': 'no label', });
lyr_DOM_Urban_14.set('fieldLabels', {'GID_2': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'NAME_2': 'no label', 'VARNAME_2': 'no label', 'NL_NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'CC_2': 'no label', 'HASC_2': 'no label', });
lyr_DOM_Urban_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});