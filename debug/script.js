(function () {
    var c = document.getElementById("canvas");
    var img;
    var canvas_list = [];
    var ctx = c.getContext("2d");
    var current_img_url = "pic.PNG"
    var current_canvas;
    var imgData;
    var original_img_data;
    var change = 0;
    var tiles = document.getElementsByClassName("tile is-child box check");
    console.log(tiles);
    document.addEventListener('DOMContentLoaded', init, false);

    function init() {
        document.getElementById('img_uploader').addEventListener('change', readURL, true);

        var blue_grey_scale = document.getElementById('blue_greyscale');
        blue_grey_scale.addEventListener("click", function () { blueGreyScale(img) }, false);

        // Init default image
        img = document.createElement("img");

        img.onload = function () {
            ctx.drawImage(img, 0, 0, 220, 277);
            original_img_data = ctx.getImageData(0, 0, c.width, c.height);
            console.log(original_img_data)
            if (change === 0) {
                appendCanvases();
                change += 1;
            }
            assembleFilteredPhotos();
        }
        img.src = "pic6.PNG"
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
        var file = document.getElementById("img_uploader").files[0];

        var reader = new FileReader();
        reader.onloadend = function () {
            img.src = reader.result; // Set the global image to the path of the file on the client's PC.
        }
        if (file) {
            reader.readAsDataURL(file);
        } else {
            /// Error message TODO
            console.log("Could not read file. :(")
        }
    }


    function assembleFilteredPhotos() {
        const group = [blue_greyscale_imgdata, evening_imgdata, greyscale_imgdata, horizon_imgdata, confetti_imgdata, vintage_imgdata, retroviolet_imgdata, cosmic_imgdata, matrix_imgdata, eclectic_imgdata, green_specks_imgdata, mellow_imgdata, haze_imgdata, pink_aura_imgdata, serenity_imgdata, perfume_imgdata, noise_centre_imgdata, specksredscale_imgdata, sat_adj_imgdata, ocean_imgdata, twenties_imgdata, radio_imgdata, purplescale_imgdata, slate_imgdata, rosetint_imgdata, aeon_imgdata, eon_imgdata, neue_imgdata, zapt_imgdata, solange_imgdata, solange_dark_imgdata, wyo_imgdata, incbrightness_two_imgdata, specks_imgdata, yellow_casino_imgdata, casino_imgdata, lix_conv, ryo_conv, blues_imgdata, cool_twilight_imgdata, incbrightness_imgdata, redgreyscale_imgdata, darkify_imgdata, greengreyscale_imgdata, add_green_diagonal_lines_imgdata, add_diagonal_lines_imgdata, add_horizontal_line_imgdata, pane_imgdata]
        var listdata = [];
        var tile_elem;

        var resImgData;
        var current_canvas;

        for (let j = 0; j < canvas_list.length; j += 1) {
            current_canvas = canvas_list[j];
            console.log(current_canvas);

            var getctx = current_canvas.getContext("2d");
            imgData = ctx.getImageData(0, 0, c.width, c.height);

            resImgData = group[j]();
            console.log(resImgData);
            getctx.putImageData(resImgData, 0, 0);
        }
    }


    // 48 filters total - 24th July 2018 <silviaod>

    /**
 * Filter Functions 
 * Each of the functions transform the individual RGBA values of each pixel.
 * The for loop iterates over each pixel in the original canvas 
 * and then changes the RGBA values of that pixel. 
 * At the moment, I'm using 8-bit pixel manipulation, but 32-bit pixel manipulation
 * may be faster, so I may use that in the future, although the performance 
 * gains would be very minimal, since the images are static, and are not animating, etc.,
 */

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

    const blue_greyscale_imgdata = function () {
        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg + 20
            imgData.data[i + 1] = avg + 30
            imgData.data[i + 2] = avg + 60
        }
        return imgData;
    }
    const solange_imgdata = function () {
        console.log("Lix conv called")
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = 255 - imgData.data[i];
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

    const eon_imgdata = function () {

        for (i = 0; i < imgData.data.length; i += 4) {
            //imgData.data[i] = 255 - imgData.data[i];
            imgData.data[i + 1] = 120 - imgData.data[i + 1];
            imgData.data[i + 2] = 100 - imgData.data[i + 2];
        }
        return imgData;
    }

    const aeon_imgdata = function () {

        for (i = 0; i < imgData.data.length; i += 4) {
            //imgData.data[i] = 255 - imgData.data[i];
            imgData.data[i + 1] = 60 - imgData.data[i + 1];
            imgData.data[i + 2] = 100 - imgData.data[i + 2];
        }
        return imgData;
    }

    const rosetint_imgdata = function () {

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg + 80
            imgData.data[i + 1] = avg + 20
            imgData.data[i + 2] = avg + 31
        }
        return imgData;
    }

    const slate_imgdata = function () {

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg + 4
            imgData.data[i + 1] = avg + 3
            imgData.data[i + 2] = avg + 12
        }
        return imgData;
    }

    const purplescale_imgdata = function () {

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg + 90
            imgData.data[i + 1] = avg + 40
            imgData.data[i + 2] = avg + 80
        }
        return imgData;
    }

    const radio_imgdata = function () {

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg + 5
            imgData.data[i + 1] = avg + 40
            imgData.data[i + 2] = avg + 20
        }
        return imgData;
    }

    const twenties_imgdata = function () {

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg + 18
            imgData.data[i + 1] = avg + 12
            imgData.data[i + 2] = avg + 20
        }
        return imgData;
    }

    const ocean_imgdata = function () {
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] += 10
            imgData.data[i + 1] += 20
            imgData.data[i + 2] += 90
        }
        return imgData;
    }

    const sat_adj_imgdata = function () {
        var SAT_ADJ = 150;
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] -= SAT_ADJ
            imgData.data[i + 1] -= SAT_ADJ
            imgData.data[i + 2] -= SAT_ADJ
        }
        return imgData;
    }

    const specksredscale_imgdata = function () {
        for (var i = 0; i < imgData.data.length; i += 4) {
            var randomNumber = getRandomNumber(0, 100);
            if (randomNumber > 10 && randomNumber < 13) {
                imgData.data[i] = 120
                imgData.data[i + 1] = 120
                imgData.data[i + 2] = 120
            }
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3

            imgData.data[i] = avg + 100
            imgData.data[i + 1] = avg + 40
            imgData.data[i + 2] = avg + 20
        }
        return imgData;
    }

    const noise_centre_imgdata = function () {

        for (var i = 0; i < imgData.data.length; i += 4) {

            if (i < imgData.data.length / 2) {
                imgData.data[i] += 80
                imgData.data[i + 1] += 40
                imgData.data[i + 2] += 120
            }

            else if (i > (imgData.data.length / 2) + 100 && (i < (imgData.data.length / 2) + 2900)) {
                imgData.data[i] = getRandomNumber(0, 255)
                imgData.data[i + 1] = getRandomNumber(0, 255)
                imgData.data[i + 2] = getRandomNumber(0, 255)
            }

            else {
                imgData.data[i] += 10
                imgData.data[i + 1] += 20
                imgData.data[i + 2] += 90
            }
            return imgData;
        }
    }

    const perfume_imgdata = function () {

        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] += 80
            imgData.data[i + 1] += 40
            imgData.data[i + 2] += 120
        }
        return imgData;
    }

    const serenity_imgdata = function () {

        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] += 10
            imgData.data[i + 1] += 40
            imgData.data[i + 2] += 90
        }
        return imgData;
    }

    const pink_aura_imgdata = function () {
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] += 90
            imgData.data[i + 1] += 10
            imgData.data[i + 2] += 90
        }
        return imgData;
    }

    const haze_imgdata = function () {
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] += 90
            imgData.data[i + 1] += 90
            imgData.data[i + 2] += 10
        }
        return imgData;
    }

    const mellow_imgdata = function () {

        for (i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i + 2] = 120 - imgData.data[i + 2];
        }
        return imgData;
    }

    const green_specks_imgdata = function () {

        var randomNumber;

        for (i = 0; i < imgData.data.length; i += 4) {
            randomNumber = getRandomNumber(0, 200);
            var addition;
            if (randomNumber > 0 && randomNumber < 50) {
                addition1 = 20;
                addition2 = 30;
            }
            else if (randomNumber > 49 && randomNumber < 100) {
                addition1 = 10;
                addition2 = 90;
            }

            else {
                addition1 = 30;
                addition2 = 10;
            }

            imgData.data[i] += addition1;
            imgData.data[i + 1] += addition2;
            imgData.data[i + 2] += addition1;
        }
        return imgData;
    }

    const eclectic_imgdata = function () {

        var randomNumber;

        for (i = 0; i < imgData.data.length; i += 4) {
            randomNumber = getRandomNumber(0, 200);
            var addition;
            if (randomNumber > 0 && randomNumber < 50) {
                addition1 = 20;
                addition2 = 30;
            }
            else if (randomNumber > 49 && randomNumber < 100) {
                addition1 = 10;
                addition2 = 90;
            }

            else {
                addition1 = 30;
                addition2 = 10;
            }

            if (imgData.data[i] + addition > 255) {
                imgData.data[i] -= addition
            }
            else {
                imgData.data[i] += addition
            }

            if (imgData.data[i + 1] + addition > 255) {
                imgData.data[i + 1] -= addition2;
            } else {
                imgData.data[i] += addition2;
            }
            // imgData.data[i + 2] += addition2;
        }
        return imgData;
    }

    const matrix_imgdata = function () {
        var randomNumber;

        for (i = 0; i < imgData.data.length; i += 4) {
            randomNumber = getRandomNumber(0, 200);
            var addition;
            if (randomNumber > 0 && randomNumber < 50) {
                addition1 = 20;
                addition2 = 30;
            }
            else if (randomNumber > 49 && randomNumber < 100) {
                addition1 = 10;
                addition2 = 90;
            }

            else {
                addition1 = 30;
                addition2 = 10;
            }

            if (imgData.data[i] - addition > 255) {
                imgData.data[i] -= addition
            }
            else {
                imgData.data[i] += addition
            }

            if (imgData.data[i + 1] + addition > 255) {
                imgData.data[i + 1] -= addition2;
            } else {
                imgData.data[i + 1] += addition2;
            }
        }
        return imgData;
    }

    const cosmic_imgdata = function () {
        var randomNumber;

        for (i = 0; i < imgData.data.length; i += 4) {
            randomNumber = getRandomNumber(0, 200);
            var addition;
            if (randomNumber > 0 && randomNumber < 50) {
                addition1 = 20;
                addition2 = 30;
            }
            else if (randomNumber > 49 && randomNumber < 100) {
                addition1 = 10;
                addition2 = 90;
            }

            else {
                addition1 = 30;
                addition2 = 10;
            }

            if (imgData.data[i] - addition > 255) {
                imgData.data[i] -= addition
            }
            else {
                imgData.data[i] += addition
            }

            if (imgData.data[i + 1] + addition > 255) {
                imgData.data[i + 1] -= addition2;
            } else {
                imgData.data[i + 1] += addition2;
            }
        }
        return imgData;
    }


    const retroviolet_imgdata = function () {

        var randomNumber;

        for (i = 0; i < imgData.data.length; i += 4) {
            randomNumber = getRandomNumber(0, 200);

            var addition1;
            var addition2;
            if (randomNumber > 0 && randomNumber < 50) {
                addition1 = 20;
                addition2 = 30;
            }
            else if (randomNumber > 49 && randomNumber < 100) {
                addition1 = 20;
                addition2 = 90;
            }

            else {
                addition1 = 10;
                addition2 = 50;
            }

            if (imgData.data[i] - addition1 > 255) {
                imgData.data[i] -= addition1
            }
            else {
                imgData.data[i] += addition1
            }

            if (imgData.data[i + 2] + addition2 > 255) {
                imgData.data[i + 2] -= addition2;
            } else {
                imgData.data[i + 2] += addition2;
            }
        }
        return imgData;
    }

    const vintage_imgdata = function () {

        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] += 120
            imgData.data[i + 1] += 70
            imgData.data[i + 2] += 13
        }

        return imgData;
    }

    const confetti_imgdata = function () {
        for (var i = 0; i < imgData.data.length; i += 4) {

            var randomNumber = getRandomNumber(0, 200);

            if (randomNumber > 0 && randomNumber < 10) {
                imgData.data[i] = getRandomNumber(0, 255)
                imgData.data[i + 1] = getRandomNumber(0, 255)
                imgData.data[i + 2] = getRandomNumber(0, 255)
            }

            else {
                imgData.data[i] += 10
                imgData.data[i + 1] += 20
                imgData.data[i + 2] += 90
            }

        }
        return imgData;
    }

    const horizon_imgdata = function () {
        var SAT_ADJ = 150;
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] -= SAT_ADJ
            imgData.data[i + 1] -= SAT_ADJ
            imgData.data[i + 2] -= SAT_ADJ
        }
        return imgData;
    }

    const evening_imgdata = function () {
        var SAT_ADJ = 60;
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] -= SAT_ADJ
            imgData.data[i + 1] -= SAT_ADJ
            imgData.data[i + 2] -= SAT_ADJ
        }
        return imgData;
    }



    // Canvas-specific functions
    function pixelate() {
        var size = 27 / 100,
            w = c.width * size,
            h = c.height * size;

        ctx.drawImage(img, 0, 0, w, h);

        ctx.msImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;

        ctx.drawImage(c, 0, 0, w, h, 0, 0, c.width, c.height);
    }


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