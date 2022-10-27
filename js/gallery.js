
//Creates variables I need to hold the images and for the next and previous buttons. 

var images = document.getElementById('gallery');
var prev = document.getElementById('prev');
var next = document.getElementById('next');


//Gets the data from my JSON file and for each one creates an element with the image url and adds a classname to them. 
$.getJSON("https://raw.githubusercontent.com/panad-a-cwtch/panad-a-cwtch.github.io/master/js/gallery.json", function (data) {
    $.each(data, function (i, d) {

        var image = document.createElement('img');
        image.setAttribute('src', d.url);

        //Adding a class so I can change the size of the images in CSS. 
        image.className = "gallery-img";

        //Adds the images to the images variable which is my gallery div.
        images.appendChild(image);

    });

    //Sets the gallery up by counting the amount of images and coding the next and previous buttons.
    setupGallery(data);
});


function setupGallery(data) {

    //Counts the child elements held in my gallery div (var images)
    var imageCount = images.childElementCount;
    var currentImage = 1;

    //Width of all my images is 800px.
    var imageWidth = 800;

    prev.addEventListener('click', function () {

        //If the images is not the first one
        if (currentImage != 1) {

            // Variable will be decreased
            --currentImage;

            // Previous image will be moved into view by changing the left margin property.
            images.style.marginLeft = imageWidth - (currentImage * imageWidth) + 'px';
        }
    });

    next.addEventListener('click', function () {

        //If the image is not the last one,
        if (currentImage != imageCount) {

            //Varible to track current image will increase
            ++currentImage;

            //And the new image will move into view by changing the left margin property.
            images.style.marginLeft = imageWidth - (currentImage * imageWidth) + 'px';
        }
    });
}

var container = document.getElementById("gallery-container");

//If the users screen is too small to show the full image gallery:
if (screen.width < 800) {
    //They will be alerted,
    alert("Sorry, your screen is too small to view our image gallery.")
    //The hidden classname will get added to the container and hide it from the users view.
    container.className += " hidden";
    
};
