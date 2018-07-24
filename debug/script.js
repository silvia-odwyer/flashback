(function () {
    var c = document.getElementById("canvas");
    var img;
    var canvas_list = [];
    var ctx = c.getContext("2d");
    var current_img_url = "pic.PNG"
    var current_canvas;
    var imgData;
    var original_img_data;
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
            original_img_data = ctx.getImageData(0, 0, c.width, c.height);
            console.log(original_img_data)
            appendCanvases();
            assembleFilteredPhotos();

        }


        img.src = "pic6.PNG"

        document.getElementById('img_uploader').addEventListener('change', readURL, true);





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
                assembleFilteredPhotos();
            });
            img.src = file.name;
            current_img_url = file.name;
            img.crossOrigin = "Anonymous";
        }
        else {
            console.log("No image found.")
        }
    }

    function assembleFilteredPhotos() {

        // Image data converter functions
        // Converts image data of the canvas 
        const lix_conv = function () {
            console.log("Lix conv called")
            for (i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i] = 255 - imgData.data[i];
                imgData.data[i + 1] = 255 - imgData.data[i + 1];
            }
            return imgData;
        }

        const ryo_conv = function () {
            for (i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i] = 255 - imgData.data[i];
                imgData.data[i + 2] = 255 - imgData.data[i + 2];
            }
            return imgData;
        }
        const solange_imgdata = function () {
            console.log("Lix conv called")
            for (var i = 0; i < newImgData.data.length; i += 4) {
                newImgData.data[i] = 255 - newImgData.data[i];
            }
            return imgData;
        }

        const cool_twilight_imgdata = function () {
            for (var i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i + 1] = 255 - imgData.data[i + 1];
            }
            return imgData;
        }

        const blues_imgdata = function () {
            for (var i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i + 2] = 255 - imgData.data[i + 2];
            }
            return imgData;
        }

        const darkify_imgdata = function () {
            var BRIGHTNESS_ADJ = 20;
            for (var i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i] -= BRIGHTNESS_ADJ
                imgData.data[i + 1] -= BRIGHTNESS_ADJ
                imgData.data[i + 2] -= BRIGHTNESS_ADJ
            }
            return imgData;
        }

        const incbrightness_imgdata = function () {
            var BRIGHTNESS_ADJ = 50;
            for (var i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i] += BRIGHTNESS_ADJ
                imgData.data[i + 1] += BRIGHTNESS_ADJ
                imgData.data[i + 2] += BRIGHTNESS_ADJ
            }
            return imgData;
        }

        const greyscale_imgdata = function () {
            var BRIGHTNESS_ADJ = 50;
            for (i = 0; i < imgData.data.length; i += 4) {
                var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
                imgData.data[i] = avg
                imgData.data[i + 1] = avg
                imgData.data[i + 2] = avg
            }
            return imgData;
        }


        const redgreyscale_imgdata = function () {
            var BRIGHTNESS_ADJ = 50;
            for (var i = 0; i < imgData.data.length; i += 4) {
                var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
                imgData.data[i] = avg + 100
                imgData.data[i + 1] = avg + 40
                imgData.data[i + 2] = avg + 20
            }
            return imgData;
        }


        
        const greengreyscale_imgdata = function () {
            var BRIGHTNESS_ADJ = 50;
            for (var i = 0; i < imgData.data.length; i += 4) {
                var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
                imgData.data[i] = avg + 20
                imgData.data[i + 1] = avg + 70
                imgData.data[i + 2] = avg + 20
            }
            return imgData;
        }


        const add_horizontal_line_imgdata = function () {
            var inc = 0;
            for (var i = 0; i < imgData.data.length; i += 4) {
                inc += 1;
                if (inc > 255) {
                    inc = 0;
                }
                var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
                imgData.data[i] = avg + inc;
                imgData.data[i + 1] = avg + 70
                imgData.data[i + 2] = avg + 20
            }
            return imgData;
        }

        const add_diagonal_lines_imgdata = function () {
            var inc = 0;
            for (var i = 0; i < imgData.data.length; i += 4) {
                inc += 20;
                if (inc > 255) {
                    inc = 0;
                }
                var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
                imgData.data[i] = avg + inc;
                imgData.data[i + 1] = avg + 70
                imgData.data[i + 2] = avg + 20
            }
            return imgData;
        }

        const add_green_diagonal_lines_imgdata = function () {
            var inc = 0;
            for (var i = 0; i < imgData.data.length; i += 4) {
                inc += 20;
                if (inc > 255) {
                    inc = 0;
                }
                var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
                imgData.data[i] = avg + 5;
                imgData.data[i + 1] = avg + inc;
                imgData.data[i + 2] = avg + 20
            }
            return imgData;
        }

        const pane_imgdata = function () {
            var inc = 0;
            for (var i = 0; i < imgData.data.length; i += 4) {
                inc += 200;
                if (inc > 255) {
                    inc = 0;
                }
                var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
                imgData.data[i] = avg + 5;
                imgData.data[i + 1] = avg + inc;
                imgData.data[i + 2] = avg + 20
            }
            return imgData;
        }

        
        const casino_imgdata = function () {
          
            var inc = 0;

            for (var i = 0; i < imgData.data.length; i += 4) {
                inc = getRandomNumber(0, 255);
                if (inc > 255) {
                    inc = 0;
                }

                var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
                imgData.data[i] = avg + inc;
                imgData.data[i + 1] = avg + 2;
                imgData.data[i + 2] = avg + 5;
            }
            return imgData;
        }

        const yellow_casino_imgdata = function () {
          
            var inc = 0;
            var inc2 = 0;
            for (var i = 0; i < imgData.data.length; i += 4) {
                inc = getRandomNumber(0, 255);
                inc2 = getRandomNumber(0, 255);

                if (inc > 255) {
                    inc = 0;
                }

                var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
                imgData.data[i] = avg + inc;
                imgData.data[i + 1] = avg + inc2;
                imgData.data[i + 2] = avg + 5;
            }

            return imgData;
        }

        const specks_imgdata = function () {
            var inc = 0;
            var inc2 = 0;
            for (var i = 0; i < imgData.data.length; i += 4) {
                i = getRandomNumber(0, imgData.data.length);
                inc = getRandomNumber(0, 255);
                inc2 = getRandomNumber(0, 255);
                inc3 = getRandomNumber(0, 255)
                if (inc > 255) {
                    inc = 0;
                }

                var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
                imgData.data[i] = (avg + inc);
                imgData.data[i + 1] = avg + inc2;
                imgData.data[i + 2] = avg + 5;
            }
            return imgData;
        }

        const incbrightness_two_imgdata = function () {
            var inc = 0;
            var inc2 = 0;
            for (var i = 0; i < imgData.data.length; i += 4) {
                i = getRandomNumber(0, imgData.data.length);
                inc = getRandomNumber(0, 255);
                inc2 = getRandomNumber(0, 255);
                inc3 = getRandomNumber(0, 255)
                if (inc > 255) {
                    inc = 0;
                }

                var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
                imgData.data[i] = (avg + inc);
                imgData.data[i + 1] = avg + inc2;
                imgData.data[i + 2] = avg + 5;
            }
            return imgData;
        }

        const wyo_imgdata = function () {
            for (i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i] = 255 - imgData.data[i];
                imgData.data[i + 1] = 255 - imgData.data[i + 1];
                imgData.data[i + 2] = 255 - imgData.data[i + 2];
            }
            return imgData;
        }

        const solange_dark_imgdata = function () {
            for (i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i] = 200 - imgData.data[i];

                // imgData.data[i + 1] = 255 - imgData.data[i + 1];
                // imgData.data[i + 2] = 255 - imgData.data[i + 2];
            }
            return imgData;
        }

        const zapt_imgdata = function () {

            for (i = 0; i < imgData.data.length; i += 4) {
                // imgData.data[i] = 255 - imgData.data[i];
                imgData.data[i + 1] = 255 - imgData.data[i + 1];
                // imgData.data[i + 2] = 255 - imgData.data[i + 2];
            }
            return imgData;
        }

        const neue_imgdata = function () {

            for (i = 0; i < imgData.data.length; i += 4) {
                // imgData.data[i] = 255 - imgData.data[i];
                // imgData.data[i + 1] = 255 - imgData.data[i + 1];
                imgData.data[i + 2] = 255 - imgData.data[i + 2];
            }
            return imgData;
        }

        const group = [neue_imgdata, zapt_imgdata, solange_dark_imgdata, wyo_imgdata, incbrightness_two_imgdata, specks_imgdata, yellow_casino_imgdata, casino_imgdata, lix_conv, ryo_conv, blues_imgdata, cool_twilight_imgdata, incbrightness_imgdata, redgreyscale_imgdata, darkify_imgdata, greengreyscale_imgdata, add_green_diagonal_lines_imgdata, add_diagonal_lines_imgdata, add_horizontal_line_imgdata]
        var listdata = [];
        var tile_elem;

        var resImgData;
        var current_canvas;

        for (let j = 0; j < canvas_list.length; j += 1) {
            current_canvas = canvas_list[j]
            console.log(current_canvas);

            var getctx = current_canvas.getContext("2d");
            imgData = ctx.getImageData(0, 0, c.width, c.height);

            resImgData = group[j]();
            console.log(resImgData);
            getctx.putImageData(resImgData, 0, 0);

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