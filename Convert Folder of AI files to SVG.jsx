var dir = Folder.selectDialog("Choose the directory that contains the source AI files.");
var files = dir.getFiles("*.ai");

// Get the folder to save the files into
var destFolder = null;
destFolder = Folder.selectDialog( 'Select folder to save the SVG files.');
for(var f = 0; f < files.length; f++){
//for(var f = 0; f < 2; f++){
    var doc = app.open(files[f]);
  	var target = getTargetFile(doc.name, '.svg', destFolder );
    doc.exportFile(target, ExportType.SVG, getOptions());
}
function getOptions() {
	// Create the required options object
	var options = new ExportOptionsSVG();
	// See ExportOptionsSVG in the JavaScript Reference for available options

	// Set the options you want below:

	// For example, uncomment to set the compatibility of the generated svg to SVG Tiny 1.1
	// options.DTD = SVGDTDVersion.SVGTINY1_1;

	// For example, uncomment to embed raster images
  options.embedRasterImages = true;
  //options.preserveEditability = true;
	return options;
}
function getTargetFile(docName, ext, destFolder) {
	var newName = "";

	// if name has no dot (and hence no extension),
	// just append the extension
	if (docName.indexOf('.') < 0) {
		newName = docName + ext;
	} else {
		var dot = docName.lastIndexOf('.');
		newName += docName.substring(0, dot);
		newName += ext;
	}

	// Create the file object to save to
	var myFile = new File( destFolder + '/' + newName );
  /*
	// Preflight access rights
	if (myFile.open("w")) {
		myFile.close();
	}
	else {
		throw new Error('Access to '+destFolder + '/' + newName+ ' is denied');
	}*/
	return myFile;
}
