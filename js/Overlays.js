Tronc_AP7_VilaS = new L.GeoJSON.AJAX('datos/Tronc_AP7_Vila-Seca.geojson', {
    // maxZoom: 19,
    // minZoom: 5,
    fillColor: "#FFFF00",
    color: "#FF0000",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.6,

    onEachFeature: function (feature, layer) {
        popupContent = "<b>" + "Proyecto:" + feature.properties.PROYECTO + "</b><br>" + "Expediente: " + feature.properties.EXPEDIENTE_EXP + "</b><br>" + "Codigo finca: " + feature.properties.CODI_FINCA + "</b><br>" + "Superfície: " + feature.properties.SUP_EXP_m2 + "m2" + "</b><br> " + "Indemnización económica: " + feature.properties.MA + "</b><br>" + "Titular: " + feature.properties.TITULAR + "</b>";
        layer.bindPopup(popupContent);
    },
});

Tronc_AP7_Vilablareix = new L.GeoJSON.AJAX('datos/Tronc_AP7_Vilablareix.geojson', {
    // maxZoom: 19,
    // minZoom: 5,
    fillColor: "#FFFF00",
    color: "#FF0000",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.6,

    onEachFeature: function (feature, layer) {
        popupContent = "<b>" + "Proyecto: " + feature.properties.PROYECTO + "</b><br>" + "Expediente: " + feature.properties.EXPEDIENTE_EXP + "</b><br>" + "Codigo finca: " + feature.properties.CODI_FINCA + "</b><br>" + "Superfície: " + feature.properties.SUP_EXP_m2 + "m2" + "</b><br> " + "Indemnización económica: " + feature.properties.MA + "</b><br>" + "Titular: " + feature.properties.TITULAR + "</b>";
        layer.bindPopup(popupContent);
    },
});

Remod_EnllaçVS = new L.GeoJSON.AJAX('datos/98-T-9913.geojson', {
    // maxZoom: 19,
    // minZoom: 5,
    fillColor: "#FFFF00",
    color: "#FF0000",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.6,

    onEachFeature: function (feature, layer) {
        popupContent = "<b>" + "Proyecto: " + feature.properties.PROYECTO + "</b><br>" + "Expediente: " + feature.properties.EXPEDIENTE_EXP + "</b><br>" + "Codigo finca: " + feature.properties.CODI_FINCA + "</b><br>" + "Superfície: " + feature.properties.SUP_EXP_m2 + "m2" + "</b><br> " + "Indemnización económica: " + feature.properties.PREU_JUST + "</b><br>" + "Titular: " + feature.properties.TITULAR + "</b>";
        layer.bindPopup(popupContent);
    },
});

GI9903 = new L.GeoJSON.AJAX('datos/98-GI-9903.geojson', {
    // maxZoom: 19,
    // minZoom: 5,
    fillColor: "#FFFF00",
    color: "#FF0000",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.6,

    onEachFeature: function (feature, layer) {
        popupContent = "<b>" + "Proyecto: " + feature.properties.PROYECTO + "</b><br>" + "Expediente: " + feature.properties.EXPEDIENTE_EXP + "</b><br>" + "Codigo finca: " + feature.properties.CODI_FINCA + "</b><br>" + "Superfície: " + feature.properties.SUP_EXP_m2 + "m2" + "</b><br> " + "Indemnización económica 1: " + feature.properties.PREU_JUST1 + "</b><br> " + "Indemnización económica 2: " + feature.properties.PREU_JUST2 + "</b><br>" + "Titular: " + feature.properties.TITULAR + "</b>";
        layer.bindPopup(popupContent);
    },
});

Remod_EnllaçVF = new L.GeoJSON.AJAX('datos/EnllaçosVilaF.geojson', {
    // maxZoom: 19,
    // minZoom: 5,
    fillColor: "#FFFF00",
    color: "#FF0000",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.6,

    onEachFeature: function (feature, layer) {
        popupContent = "<b>" + "Proyecto: " + feature.properties.PROYECTO + "</b><br>" + "Expediente: " + feature.properties.EXPEDIENTE_EXP + "</b><br>" + "Codigo finca: " + feature.properties.CODI_FINCA + "</b><br>" + "Superfície: " + feature.properties.SUP_EXP_m2 + "m2" + "</b><br> " + "Indemnización económica: " + feature.properties.PREU_JUST + "</b><br> " + "Titular: " + feature.properties.TITULAR + "</b>";
        layer.bindPopup(popupContent);
    },
});
Remod_EnllaçSSad = new L.GeoJSON.AJAX('datos/98-B-9003.geojson', {
    // maxZoom: 19,
    // minZoom: 5,
    fillColor: "#FFFF00",
    color: "#FF0000",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.6,

    onEachFeature: function (feature, layer) {
        popupContent = "<b>" + "Proyecto: " + feature.properties.PROYECTO + "</b><br>" + "Expediente: " + feature.properties.EXPEDIENTE_EXP + "</b><br>" + "Codigo finca: " + feature.properties.CODI_FINCA + "</b><br>" + "Superfície: " + feature.properties.SUP_EXP_m2 + "m2" + "</b><br> " + "Indemnización económica: " + feature.properties.PREU_JUST + "</b><br> " + "Titular: " + feature.properties.TITULAR + "</b>";
        layer.bindPopup(popupContent);
    },
});
Remod_EnllaçGelida = new L.GeoJSON.AJAX('datos/98-B-9002.geojson', {
    // maxZoom: 19,
    // minZoom: 5,
    fillColor: "#FFFF00",
    color: "#FF0000",
    weight: 1.5,
    opacity: 1,
    fillOpacity: 0.6,

    onEachFeature: function (feature, layer) {
        popupContent = "<b>" + "Proyecto: " + feature.properties.PROYECTO + "</b><br>" + "Expediente: " + feature.properties.EXPEDIENTE_EXP + "</b><br>" + "Codigo finca: " + feature.properties.CODI_FINCA + "</b><br>" + "Superfície: " + feature.properties.SUP_EXP_m2 + "m2" + "</b><br> " + "Indemnización económica: " + feature.properties.PREU_JUST + "</b><br> " + "Titular: " + feature.properties.TITULAR + "</b><br> " + "Expedient: "+"<a href=" + feature.properties.CONSULTA_EXP + ">" + feature.properties.CONSULTA_EXP + "</a>";
        layer.bindPopup(popupContent);
    },
});
