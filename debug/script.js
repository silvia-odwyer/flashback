(function () {
    var c = document.getElementById("canvas");
    var img;
    var canvas_list = [];
    var ctx = c.getContext("2d");
    var current_img_url = "pic.PNG"
    var current_canvas;

    var tiles = document.getElementsByClassName("tile is-child box check");
    console.log(tiles);
    document.addEventListener('DOMContentLoaded', init, false);

    function init() {
        var blue_grey_scale = document.getElementById('blue_greyscale');
        blue_grey_scale.addEventListener("click", function () { blueGreyScale(img) }, false);

        // Init default image
        img = document.createElement("img");

        img.onload = function () {
            ctx.drawImage(img, 0, 0, 220, 277);

        }

        img.src = "pic6.PNG"

        document.getElementById('img_uploader').addEventListener('change', readURL, true);



        appendCanvases();

        assembleFilteredPhotos();


    }

    function drawImage2Canvas(img) {


    }

    function appendCanvases() {
        // Create for loop which creates canvases and then appends them to a list. 

        for (i = 0; i < tiles.length; i++) {
            var appended_canvas = document.createElement("canvas");
            appended_canvas.width = c.width;
            appended_canvas.height = c.height;
            var tile_elem = tiles[i];
            canvas_list.push(appended_canvas);
            tile_elem.appendChild(appended_canvas);
        }
        console.log(canvas_list);
    }

    function readURL() {
        file = document.getElementById("img_uploader").files[0];

        console.log(file);

        if (file) {
            ctx.clearRect(0, 0, c.width, c.height);
            img = new Image();
            img.addEventListener("load", function () {
                ctx.drawImage(img, 0, 0, 220, 277);
            });
            img.src = file.name;
            current_img_url = file.name;
            img.crossOrigin = "Anonymous";

            assembleFilteredPhotos();

        }
        else {
            console.log("No image found.")
        }
    }

    function assembleFilteredPhotos() {
        var newImgData;


        const solange_func = function () {
            var new_ctx = current_canvas.getContext("2d");

            console.log("solange called");
            img = new Image();
            img.addEventListener("load", function () {
                new_ctx.drawImage(img, 0, 0, 220, 277);


                newImgData = new_ctx.getImageData(0, 0, current_canvas.width, current_canvas.height);
                console.log(newImgData);

                for (var i = 0; i < newImgData.data.length; i += 4) {
                    newImgData.data[i] = 255 - newImgData.data[i];
                }
                new_ctx.putImageData(newImgData, 0, 0);
                console.log(newImgData)
                return new_canvas;
            });
            img.src = current_img_url;
            img.crossOrigin = "Anonymous";
        }


        const cool_twilight_filtergrid = function () {
            var new_ctx = current_canvas.getContext("2d");

            console.log("solange called");
            img = new Image();
            img.addEventListener("load", function () {
                new_ctx.drawImage(img, 0, 0, 220, 277);


                newImgData = new_ctx.getImageData(0, 0, current_canvas.width, current_canvas.height);
                console.log(newImgData);

                for (var i = 0; i < newImgData.data.length; i += 4) {
                    newImgData.data[i + 1] = 255 - newImgData.data[i + 1];
                }
                new_ctx.putImageData(newImgData, 0, 0);
                console.log(newImgData)
                return new_canvas;
            });
            img.src = current_img_url;
            img.crossOrigin = "Anonymous";
        }

        const blues = function () {
            var new_ctx = current_canvas.getContext("2d");

            console.log("solange called");
            img = new Image();
            img.addEventListener("load", function () {
                new_ctx.drawImage(img, 0, 0, 220, 277);


                newImgData = new_ctx.getImageData(0, 0, current_canvas.width, current_canvas.height);
                console.log(newImgData);

                for (var i = 0; i < newImgData.data.length; i += 4) {
                    newImgData.data[i + 2] = 255 - newImgData.data[i + 2];
                }
                new_ctx.putImageData(newImgData, 0, 0);
                console.log(newImgData)
                return new_canvas;
            });
            img.src = current_img_url;
            img.crossOrigin = "Anonymous";
        }

        const darkify_filtergrid = function () {
            var new_ctx = current_canvas.getContext("2d");

            console.log("solange called");
            img = new Image();
            img.addEventListener("load", function () {
                new_ctx.drawImage(img, 0, 0, 220, 277);
                imgData = new_ctx.getImageData(0, 0, current_canvas.width, current_canvas.height);

                var BRIGHTNESS_ADJ = 20;
                for (var i = 0; i < imgData.data.length; i += 4) {
                    imgData.data[i] -= BRIGHTNESS_ADJ
                    imgData.data[i + 1] -= BRIGHTNESS_ADJ
                    imgData.data[i + 2] -= BRIGHTNESS_ADJ
                }
                new_ctx.putImageData(imgData, 0, 0);

            });
            img.src = current_img_url;
            img.crossOrigin = "Anonymous";
        }

        const incbrightness_filtergrid = function () {
            var new_ctx = current_canvas.getContext("2d");

            console.log("solange called");
            img = new Image();
            img.addEventListener("load", function () {
                new_ctx.drawImage(img, 0, 0, 220, 277);
                imgData = new_ctx.getImageData(0, 0, current_canvas.width, current_canvas.height);

                var BRIGHTNESS_ADJ = 50;
                for (var i = 0; i < imgData.data.length; i += 4) {
                    imgData.data[i] += BRIGHTNESS_ADJ
                    imgData.data[i + 1] += BRIGHTNESS_ADJ
                    imgData.data[i + 2] += BRIGHTNESS_ADJ
                }
                new_ctx.putImageData(imgData, 0, 0);

            });
            img.src = current_img_url;
            img.crossOrigin = "Anonymous";
        }

        const greyscale_filtergrid = function () {
            var new_ctx = current_canvas.getContext("2d");

            console.log("solange called");
            img = new Image();
            img.addEventListener("load", function () {
                new_ctx.drawImage(img, 0, 0, 220, 277);
                imgData = new_ctx.getImageData(0, 0, current_canvas.width, current_canvas.height);

                for (i = 0; i < imgData.data.length; i += 4) {
                    var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
                    imgData.data[i] = avg
                    imgData.data[i + 1] = avg
                    imgData.data[i + 2] = avg
                }
        
                new_ctx.putImageData(imgData, 0, 0);

            });
            img.src = current_img_url;
            img.crossOrigin = "Anonymous";
        }

        const redgreyscale_filtergrid = function () {
            var new_ctx = current_canvas.getContext("2d");

            console.log("solange called");
            img = new Image();
            img.addEventListener("load", function () {
                new_ctx.drawImage(img, 0, 0, 220, 277);
                imgData = new_ctx.getImageData(0, 0, current_canvas.width, current_canvas.height);


                for (var i = 0; i < imgData.data.length; i += 4) {
                    var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
                    imgData.data[i] = avg + 100
                    imgData.data[i + 1] = avg + 40
                    imgData.data[i + 2] = avg + 20
                }
        
                new_ctx.putImageData(imgData, 0, 0);

            });
            img.src = current_img_url;
            img.crossOrigin = "Anonymous";
        }


        const group = [solange_func, cool_twilight_filtergrid, blues, darkify_filtergrid, incbrightness_filtergrid, greyscale_filtergrid, redgreyscale_filtergrid]

        var tile_elem;

        for (var i = 0; i < group.length; i += 1) {
            current_canvas = canvas_list[i];
            console.log(canvas)
            console.log("I is on:", i)
            var new_canvas = group[i]();
        }
    }

    // function darkify(img) {

    //     ctx.drawImage(img, 10, 10, 220, 277);

    //     var imgData = ctx.getImageData(0, 0, c.width, c.height);

    //     var BRIGHTNESS_ADJ = 10;
    //     for (var i = 0; i < imgData.data.length; i += 4) {
    //         imgData.data[i] -= BRIGHTNESS_ADJ
    //         imgData.data[i + 1] -= BRIGHTNESS_ADJ
    //         imgData.data[i + 2] -= BRIGHTNESS_ADJ
    //     }
    //     ctx.putImageData(imgData, 0, 0);
    //}



    function blueGreyScale() {

        ctx.drawImage(img, 0, 0, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg + 20
            imgData.data[i + 1] = avg + 30
            imgData.data[i + 2] = avg + 60
        }
        ctx.putImageData(imgData, 0, 0);
    }


    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})();