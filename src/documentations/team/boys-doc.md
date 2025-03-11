# Boys documentations
## Anas hashim - Vinyl cutter
- Multi Layer `vinyl cutter` - 30/10/2019
- ![anas](/src/imgs/documontations/team/anas-doc5.png)
  - First of all, the design was made using `illustrator` program.
  - ![anas](/src/imgs/documontations/team/anas-doc1.jpg)
  - Then export the vector as `PNG` image file.
  - In order to make double layer sticker , I made the two parts separated because every part of the design will be printed with different color.
  - ![anas](/src/imgs/documontations/team/anas-doc2.png)
  - ![anas](/src/imgs/documontations/team/anas-doc3.jpg)
  - Then, i used `inkscape` program to make a trace for each part of these parts.
  - ![anas](/src/imgs/documontations/team/anas-doc12.jpg)
  - ![anas](/src/imgs/documontations/team/anas-doc13.jpg)
  - ![anas](/src/imgs/documontations/team/anas-doc14.jpg)
  - Then export them as `PNG` file.
  - ![anas](/src/imgs/documontations/team/anas-doc16.jpg)
  - ![anas](/src/imgs/documontations/team/anas-doc17.jpg)
  - Upload these files as `PNG` image to the site `fabmodules.org`.
  - ![anas](/src/imgs/documontations/team/anas-doc6.jpg)
  - ![anas](/src/imgs/documontations/team/anas-doc7.jpg)
  - Then use `camm` as output format ex. `File.camm`.
  - ![anas](/src/imgs/documontations/team/anas-doc8.jpg)
  - The last option is the process, it will be `cut vinyl`.
  - ![anas](/src/imgs/documontations/team/anas-doc9.jpg)
  - After setting these options, the site will generate value to cut depending on your choices.
  - Then press on `calculate` then `save`, the file will be downloaded to my computer.
  - ![anas](/src/imgs/documontations/team/anas-doc11.jpg)
  - Set the machine and the roll to print the design.
  - We merged the two layers to stick them as one part using transportatino tape.
  - ![anas](/src/imgs/documontations/team/anas-doc4.jpg)

##  Emad saqr - laser cutter
- Installation steps
    - ![install1](/src/imgs/documontations/team/install1.png)
    - ![install2](/src/imgs/documontations/team/install2.png)
    - ![install3](/src/imgs/documontations/team/install3.png)
    - ![install4](/src/imgs/documontations/team/install4.png)
    - ![install5](/src/imgs/documontations/team/install5.png)
    - ![install6](/src/imgs/documontations/team/install6.png)
    - ![install7](/src/imgs/documontations/team/install7.png)
    - ![install8](/src/imgs/documontations/team/install8.png)
    - ![install9](/src/imgs/documontations/team/install9.png)
- set the document
    - ![two](/src/imgs/documontations/team/two.png)
    - the laser cutter coverts the color mode into a greyscale mode before engraving and cutting, for the most successful results please always use RGB.
    - Whether you open a file or create a new one, you will see your document view when you are prepaing your design for cutting/engraving.
    - If you have set your document to 24” x 12” in size, then you will see a document that represents the entire work area of the laser cutter.
    - The orientation of your document and the laser cutter blate are the same.
    - the X direction is the width of your document and the direction that the X Carriage of the laser cutter travels. Likewise, the Y direction is the height of your document and is the direction that the Y Carriage that the laser cutter travels.
    - The home position for both is the top-left corner.
    - ![three](/src/imgs/documontations/team/three.png)
- Setting up an Object to be Cut
    - Vector cutting is when the machine is tracing the shapes of the vectors cutting through the material.
    - If we want to cut shapes out of our material, this is the mode we want the laser to be in.
    - In order to the machine to cut an object out, we have to set the properties of that object to `No Fill = remove the fill of the object` and `Stroke Color = set the stroke color to black (RGB = #000)` and `Stroke Width = set the stroke width to “hairline”`
    - ![four](/src/imgs/documontations/team/four.png)
- setting up an object to be rastered
    - Rastering is when the machine is engraving a graphic into the material.
    - it is a similar process to an inkjet printer except that it removes materials to create the graphic instead of adding layers of ink.
    - Raster engraving is a bit more forgiving than vectoring, we have some room for experimenting with different settings.
    - This also means there is not a clear path to a “good” engrave, that will determined by you and the job you are trying to do.
    - In general the following properties can be applied for engraving jobs `No Stroke = remove the stroke of the object to avoid accidentally cutting it out` and `Fill Color = set it to black (RGB = #000)`
    - ![five](/src/imgs/documontations/team/five.png)
- print the job on laser
    - Once you have gone through and properly formatted all of your vector cuts and rasters, you are ready to set up the appropriate machine settings based on the material that you are using.
    - This is a very crucial step! Failure to pay attention to all the settings and you may ruin a perfect piece of material.
    - To edit the machine settings to print, first, open "file" then chose print or press "ctrl p"
    - ![six](/src/imgs/documontations/team/six.png)
    - print window appears, Printer should be set to “Epilog Engraver WinX64”
    - then, open up preferences to edit the machine properties.
    - ![seven](/src/imgs/documontations/team/seven.png)
    - Resolution (only if you are engraving)
        - If you are engraving any objects into the material, you need to select the resolution you want the machine to operate at.
        - It has the ability to do high resolution (1200dpi max) for really delicate and detailed engraving, but it also has the ability to do low res work (75 dpi min) for rough sketches or mark making. 300dpi is a good standard resolution to use for most jobs.
        - An important to know if that job time increases significantly with an increase in resolution. If you are just prototyping, its usually best to keep the resolution low.
        - ![eight](/src/imgs/documontations/team/Screenshot_20190827_130610.png)
    - Job Type : There are three different types of job types on the laser cutter
        1. `Raster` : used for only engraving onto material
        2. `Vector` : used for only cutting through a material
        3. `Combined` : used for doing both engraving and cutting in the same job
        - ![nine](/src/imgs/documontations/team/eight.png)
    - Options
        - The only option you ever need to change is “Auto Focus”.
        - By default, this will be set to be off, which means you need to manually focus the machine.
        - If you want to use the auto focus feature on the machine, click on the button to activate it.
        - ![ten](/src/imgs/documontations/team/nine.png)
    - Piece Size
        - This is important, If you do not change this, it will be set to 8.5” x 11” by default.
        - This is not the size of the laser cutter or your document, and it will result in an incorrect job.
        - Change this to 24” x 12” which matches your document, this will give you the best results. And it must be in <b>inches</b>
        - ![elev](/src/imgs/documontations/team/ten.png)
    - Raster Settings (if applicable) : If you are doing any engraving you will need to set :
        1. `Speed` : This controls how fast the machine will engrave into the material. Slower speed will result in more  etching power, because it will be spending more time on the same spot of the material
        2. `Power` : This controls how much power (out of 40 Watts) you use to engrave. higher power means the power of the laser will be higher resulting in the engraving will be deeper.
        - Please refer to Epilog’s Material Settings guide to know the approperiate settings you will need according to the material used
        - ![twel](/src/imgs/documontations/team/elev.png)
        - ![thirt](/src/imgs/documontations/team/twel.png)
        - ![fourt]/src/imgs/documontations/team/(thirt.png)
    - Vector Settings (if applicable) : If you are doing any cutting you will need to set :
        1. `Speed` : This controls how fast the machine will engrave into the material. Slower speed will result in more  etching power, because it will be spending more time on the same spot of the material
        2. `Power` : This controls how much power (out of 40 Watts) you use to engrave. higher power means the power of the laser will be higher resulting in the engraving will be deeper.
        3. `Frequency` : The laser is not a continuous stream of energy, it is actually pulsing down on your material. The rate at which it does so is determined by the frequency. You can set it from 20-5000 Hz (pulses per second).
        4. `Vector Sorting` : You select from “inside-out” which will cut the vectors in your design from the inside out, prevent larger objects with inside cuts to cut first. The other option is “optimize” which will cut your design in the most efficient way.
        - ![fifte](/src/imgs/documontations/team/fourt.png)
    - Sending the Job
        1. nce you have fill in all of the settings you need, double check to make sure everything is okay.
        2. Then press “OK”.
        3. You will then be brought back to the normal print menu, click “Apply” to save the settings in case you need to go back and make some small tweaks, otherwise you’ll have to start from scratch.
        4. Finally, select “Print” on the print menu and your job will be sent to the laser cutter and will show up on the display screen of the machine.
        - ![fift](/src/imgs/documontations/team/fifte.png)
    - Free Laser Cutting Designs
        - [3axis](https://3axis.co/free-vectors/3d+dxf+files+free/page/2/)
        - [youmagine](https://www.youmagine.com/designs/latest)
        - [123rf](https://www.123rf.com/clipart-vector/laser_cut.html?sti=nsbcg4fv6leqkgslot%7C)
        - [thingiverse](https://accounts.thingiverse.com/?redirect=YToyOntzOjQ6InR5cGUiO3M6ODoicmVkaXJlY3QiO3M6NDoiZGF0YSI7czozNzoiaHR0cHM6Ly93d3cudGhpbmdpdmVyc2UuY29tL2Rhc2hib2FyZCI7fQ)
        - [obrary](https://obrary.com/collections/open-designs)
        - [freepik](https://www.freepik.com/)
        - [librarylaser](https://www.librarylaser.com/en/free-designs-36?p=6)
