# Recoloring Scripts
These scripts are for recoloring paths in Illustrator and Photoshop.  Two scripts are included:
- **Open Smart Vector Graphics (Photoshop):** Opens all of the PSD files in a given directory, locates the smart vector graphics in the files, and opens them in Illustrator.
- **Recolor All Open AI Docs (Illustrator):** Asks for a CSV (see example CSV) containing the old and new hex values.  Recolors any open files in Illustrator using the hex values provided in the CSV, and then saves the files.  

You may run the scripts independently of one another.

### Install
On a Mac,
- Download the scripts by clicking "Download Zip" above.  (Or clone the repo).
- Move `Open Smart Vector Graphics.jsx` and into your `/Applications/Adobe Photoshop CC 2017/Presets/Scripts` folder.
- Move `Recolor All Open AI Docs.jsx` into your `/Applications/Adobe Illustrator CC 2017/Presets.localized/en_US/Scripts` folder.  (On my machine there is a Presets.localized folder, but it shows in the Finder as just "Presets").  If you are using an older version of the Adobe Suite, find the corresponding folder in your Applications folder.
- Restart Illustrator and Photoshop.

For PC instructions, refer to [Adobe's Support Portal](https://helpx.adobe.com/photoshop/using/scripting.html) for the install location.

### Create the CSV File
The CSV file can live anywhere on your machine, but must be of the format:

|Old Value|New Value|
|---|---|
|#123456|#654321|
|#444444|#222222|
|...|...|

- Blank rows will be ignored.
- You can add columns to the right of the "New Values" column (if you want to add notes, for example).
- The first row is required
- Any hex values not in the first or second columns will be ignored

### Run the Scripts
##### Open Smart Vector Graphics (Photoshop)
- Copy the PSDs you want to recolor into a folder (be careful not to use the originals!)
- Open Illustrator and Photoshop and be sure there are no open files in either program.
- Navigate to `File > Scripts > Open Smart Vector Graphics` in the Photoshop menu.  If you do not see the script in the menu, be sure you moved the files as mentioned above.  Alternatively, you can click "Other Script" and locate the script as needed.
- The script will ask you for the folder containing the PSD files.  Only `.psd` files will be opened!
- When complete, you should see each smart vector graphic open in Illustrator.

##### Recolor All Open AI Docs (Illustrator)
- With AI files open, run the script by navigating to `File > Scripts > Recolor All Open AI Docs`.  If you do not see the script in the menu, be sure you moved the files as mentioned above.  Alternatively, you can click "Other Script" and locate the script as needed.
- The script will ask you for the CSV containing the old and new hex values.
- When complete, the script should notify you of the number of paths that have changed color.

### Notes
- Illustrator and Photoshop need to be running to run the Photoshop script.
- To avoid mistakes, make copies of the files you are recoloring before running the scripts.  The Illustrator script saves the open files, the Photoshop script does not. (You can Save All as you close the open files).  If you make a mistake, you should still be able to undo the recoloring, but it's not guaranteed.
- For best results, close any open files in both programs before running either script.
- The Illustrator script will recolor **and save** all of the paths for *every* open file; beware of running the script while non-related files are open.
- The Illustrator script only works with hex values at the time being.
