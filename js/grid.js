
//This gets the JSON data from my JSON file
$.getJSON("https://raw.githubusercontent.com/MonkBebs/MonkBebs.github.io/master/js/grid.json", function (data) {
    $.each(data, function (i, d) {

        //For each JSON object - It gets added to my images div, 
        $("#images").append(
            '<a href= ' + d.url + ' target=\"_blank\" >' + //By adding the image url, with a blank target
            '<img src= ' + d.url + ' class=\"thumbnail\">' + //Class is also added so I can easily modify the look through CSS
            '<span class=\"caption\"> ' + d.caption + ' </span></a>' //Span is added within the anchor with a classname. 
        );
    });
});

