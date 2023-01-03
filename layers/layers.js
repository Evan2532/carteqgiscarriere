var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Contour_DEP70_1 = new ol.format.GeoJSON();
var features_Contour_DEP70_1 = format_Contour_DEP70_1.readFeatures(json_Contour_DEP70_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contour_DEP70_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contour_DEP70_1.addFeatures(features_Contour_DEP70_1);
var lyr_Contour_DEP70_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Contour_DEP70_1, 
                style: style_Contour_DEP70_1,
                interactive: false,
                title: '<img src="styles/legend/Contour_DEP70_1.png" /> Contour_DEP70'
            });
var format_Units_Techniques_2 = new ol.format.GeoJSON();
var features_Units_Techniques_2 = format_Units_Techniques_2.readFeatures(json_Units_Techniques_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Units_Techniques_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Units_Techniques_2.addFeatures(features_Units_Techniques_2);
var lyr_Units_Techniques_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Units_Techniques_2,
maxResolution:28004.466152261964,
 minResolution:28.00446615226196,

                style: style_Units_Techniques_2,
                interactive: false,
                title: '<img src="styles/legend/Units_Techniques_2.png" /> Unités_Techniques'
            });
var format_Carrire_HScarteweb_3 = new ol.format.GeoJSON();
var features_Carrire_HScarteweb_3 = format_Carrire_HScarteweb_3.readFeatures(json_Carrire_HScarteweb_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Carrire_HScarteweb_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Carrire_HScarteweb_3.addFeatures(features_Carrire_HScarteweb_3);
var lyr_Carrire_HScarteweb_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Carrire_HScarteweb_3, 
                style: style_Carrire_HScarteweb_3,
                interactive: true,
    title: 'Carrière_HS (carte web)<br />\
    <img src="styles/legend/Carrire_HScarteweb_3_0.png" /> Active<br />\
    <img src="styles/legend/Carrire_HScarteweb_3_1.png" /> En sommeil<br />\
    <img src="styles/legend/Carrire_HScarteweb_3_2.png" /> Non exploitée<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Contour_DEP70_1.setVisible(true);lyr_Units_Techniques_2.setVisible(true);lyr_Carrire_HScarteweb_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Contour_DEP70_1,lyr_Units_Techniques_2,lyr_Carrire_HScarteweb_3];
lyr_Contour_DEP70_1.set('fieldAliases', {'fid': 'fid', 'NUM_COM': 'NUM_COM', 'NOM_COM': 'NOM_COM', 'SURFACE': 'SURFACE', 'POPULATION': 'POPULATION', });
lyr_Units_Techniques_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'NOM_UT': 'NOM_UT', });
lyr_Carrire_HScarteweb_3.set('fieldAliases', {'Commune': 'Commune', 'Entreprise': 'Entreprise', 'Remblais et corps de chaussée 0/150': 'Remblais et corps de chaussée 0/150', 'Couche de forme 0/63  ou 0/80': 'Couche de forme 0/63  ou 0/80', 'Couche de base et élargissement 0/31.5': 'Couche de base et élargissement 0/31.5', 'Reprofilage 0/20': 'Reprofilage 0/20', 'Enrochement': 'Enrochement', 'Activité': 'Activité', 'Indication emplacement': 'Indication emplacement', });
lyr_Contour_DEP70_1.set('fieldImages', {'fid': 'TextEdit', 'NUM_COM': 'TextEdit', 'NOM_COM': 'TextEdit', 'SURFACE': 'Range', 'POPULATION': 'Range', });
lyr_Units_Techniques_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'NOM_UT': 'TextEdit', });
lyr_Carrire_HScarteweb_3.set('fieldImages', {'Commune': 'TextEdit', 'Entreprise': 'TextEdit', 'Remblais et corps de chaussée 0/150': 'TextEdit', 'Couche de forme 0/63  ou 0/80': 'TextEdit', 'Couche de base et élargissement 0/31.5': 'TextEdit', 'Reprofilage 0/20': 'TextEdit', 'Enrochement': 'TextEdit', 'Activité': 'TextEdit', 'Indication emplacement': 'TextEdit', });
lyr_Contour_DEP70_1.set('fieldLabels', {'fid': 'no label', 'NUM_COM': 'no label', 'NOM_COM': 'no label', 'SURFACE': 'no label', 'POPULATION': 'no label', });
lyr_Units_Techniques_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'NOM_UT': 'no label', });
lyr_Carrire_HScarteweb_3.set('fieldLabels', {'Commune': 'header label', 'Entreprise': 'inline label', 'Remblais et corps de chaussée 0/150': 'inline label', 'Couche de forme 0/63  ou 0/80': 'inline label', 'Couche de base et élargissement 0/31.5': 'inline label', 'Reprofilage 0/20': 'inline label', 'Enrochement': 'inline label', 'Activité': 'inline label', 'Indication emplacement': 'header label', });
lyr_Carrire_HScarteweb_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});