/* * * * * * * * * * * * * * * * * * * * * * * * *
*
* LOADING COLORING AND SAVED IMAGES
*
* * * * * * * * * * * * * * * * * * * * * * * * * */

$(document).ready(function(){
    displayGallery();
    displaySaved();
});

//function to make request for displaying coloring images
function displayGallery(){
    var URL = "http://localhost:8080/display";
    $.ajax({
        type: "GET",
        url: URL,
        dataType: "html",
        success: function(msg){
            //console.log(msg);
            $(".gallery").html(msg);
        },
        error: function(jgXHR, textStatus,errorThrown){
            alert("Error: " + textStatus + " " + errorThrown);
        }
    });
}

//function to make request for displaying saved image
function displaySaved(){
    var URL = "http://localhost:8080/saved";
    $.ajax({
        type: "GET",
        url: URL,
        dataType: "html",
        success: function(msg){
            $(".saved").html(msg);
        },
        error: function(jgXHR, textStatus,errorThrown){
            alert("Error: " + textStatus + " " + errorThrown);
        }
    });
}



/* * * * * * * * * * * * * * * * * * * * * * * * *
*
* SIMPLE COLORING & SAVING & LOADING
*
* * * * * * * * * * * * * * * * * * * * * * * * * */

//function to open image
function openImage(container){
    console.log("image clicked");
    $(".main").attr("hidden", true);
    $(".working_board").attr("hidden", false);
    var image = container.innerHTML;
    var imageID = container.getAttribute("name")
    console.log("id of working image" + imageID)
    $(".working_img").html(image);
    $(".working_img").attr("name",imageID);
}

//change selected colors and coloring
var selected_color = "red";

$("#btRed").click(function(){
    console.log("red");
    selected_color = "red";
});
$("#btBlue").click(function(){
    console.log("blue");
    selected_color = "blue";
});

$(".working_img").click(function(event) {
    event.target.style.fill = selected_color;
});


//save
$("#btSave").click(function(){
    saveImage();
    $(".main").attr("hidden", false);
    $(".working_board").attr("hidden", true);
    displaySaved();
});

function saveImage(){
    console.log("saving in process...");
    var URL = "http://localhost:8080/save";
    params = {
        newSource: $(".working_img").html(),
        imageID: $(".working_img").attr("name")
    }

    $.ajax({
        type: "POST",
        url: URL,
        data: params,
        dataType: "text",
        success: function(msg){
            console.log(msg);
        },
        error: function(jgXHR, textStatus,errorThrown){
            alert("Error: " + textStatus + " " + errorThrown);
        }
    });
}