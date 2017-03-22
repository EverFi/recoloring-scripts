﻿//var csvPath = "/Users/csamperisi/Projects/recolorer/colors_old.csv";var csvPath = new File();var csvPath = csvPath.openDlg("Select the path of the CSV containing the new colors:");$.writeln(csvPath);if(csvPath==null) {   alert("Script cancelled, no CSV file specified.");} else {    var colorsCSV = File(csvPath);    colorsCSV.open('r', undefined, undefined);    colorsCSV=colorsCSV.read();    var colors = [];    var parsedCSV = colorsCSV.split('\n');    for(i=1;i<parsedCSV.length-1;i++) {        colors[i-1]={};        colors[i-1]["old"]=parsedCSV[i].split(',')[0];        colors[i-1]["new"]=parsedCSV[i].split(',')[1];    }    for(i=0;i<colors.length;i++) {        var oldHex = colors[i]["old"];        var newHex = colors[i]["new"];        colors[i]["old"] = {};        colors[i]["new"] = {};        colors[i]["old"]["hex"] = oldHex;        colors[i]["new"]["hex"] = newHex;        var oldRGB = convertHex(oldHex);        colors[i]["old"]["r"]=oldRGB.r;        colors[i]["old"]["g"]=oldRGB.g;        colors[i]["old"]["b"]=oldRGB.b;        var newRGB = convertHex(newHex);        colors[i]["new"]["r"]=newRGB.r;        colors[i]["new"]["g"]=newRGB.g;        colors[i]["new"]["b"]=newRGB.b;    }    if(app.documents.length==0) {      alert("Please open the files you'd like to recolor before running the script.");    } else {        $.writeln("Recoloring "+app.activeDocument.name+" using "+app.name);        count = 0;        for(i = 0; i<app.documents.length; i++) {            var doc = app.documents[i];            var item, itemRGB, itemHex;            for(k=0;k<doc.pathItems.length;k++) {                item = doc.pathItems[k];                if(item !=="Object is invalid") {                    if(item.fillColor!==undefined) {                        itemRGB = [];                        itemRGB[1]=item.fillColor.red;                        itemRGB[2]=item.fillColor.green;                        itemRGB[3]=item.fillColor.blue;                        itemHex = rgb2hex(itemRGB);                        for(m=0;m<colors.length;m++) {                            if(itemHex.toUpperCase()==colors[m]["old"]["hex"].toUpperCase()) {                                $.writeln("Changing color "+itemHex+" to "+colors[m]["new"]["hex"]);                                count++;                                item.fillColor.red = colors[m]["new"]["r"];                                item.fillColor.green = colors[m]["new"]["g"];                                item.fillColor.blue = colors[m]["new"]["b"];                            }                        }                    }                }                            }            doc.save();        }        alert("Finished recoloring "+count+" paths.");    }}function rgb2hex(rgb){ return "#" + ("0" + parseInt(rgb[1],10).toString(16)).slice(-2)+("0" + parseInt(rgb[2],10).toString(16)).slice(-2)+("0" + parseInt(rgb[3],10).toString(16)).slice(-2);}function convertHex(hex){    hex = hex.replace('#','');    r = parseInt(hex.substring(0,2), 16);    g = parseInt(hex.substring(2,4), 16);    b = parseInt(hex.substring(4,6), 16);    result = {"r":r,"g":g,"b":b};    return result;}