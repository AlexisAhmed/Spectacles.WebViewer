/**
 * Created by benjamin howes on 12/30/2014.
 */

//contains the jquery document.ready callback, which starts the application

//a global variable to store our running Spectacles App
var mySpectacles;

//fires when everything has loaded
$(document).ready(function(){

    //load our sample JSON file from disk
    $.getJSON("./js/va3c.json", function( data ){

        //once loaded, initialize a Spectacles viewer by passing in the div to bind to, the json data, and a callback function
        //where we can enable application functionality in nice clean chunks
        mySpectacles = new SPECTACLES($("#Spectacles_output"), data, function(app){

            //call the UI / functionality modules
            app.userInterface();
            app.openLocalFiles();
            app.sceneUI();
            app.lightingUI();
            app.viewAndSelectionUI();
            app.viewsUI();
            app.layersUI();
        });
    });
});