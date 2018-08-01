(function () {
    var c = document.getElementById("canvas");
    var img;
    var canvas_list = [];
    var ctx = c.getContext("2d");
    var current_img_url = "media/unsplash.PNG"
    var current_canvas;
    var imgData;
    var original_img_data;
    var change = 0;
    var tiles = document.getElementsByClassName("tile is-child box check");
    console.log(tiles);
    document.addEventListener('DOMContentLoaded', init, false);

    function init() {
        document.getElementById('img_uploader').addEventListener('change', readURL, true);

        addFilterButtonEventListeners();

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
        img.src = current_img_url
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

        const group = [haze_imgdata, pink_aura_imgdata, serenity_imgdata, perfume_imgdata, vintage_imgdata, evening_imgdata, mellow_imgdata, red_min_noise_imgdata, greyscale_imgdata, specksredscale_imgdata, blue_greyscale_imgdata, twenties_imgdata, radio_imgdata, redgreyscale_imgdata, purplescale_imgdata, slate_imgdata, cosmic_imgdata, matrix_imgdata, eclectic_imgdata, green_specks_imgdata, rosetint_imgdata, horizon_imgdata, pink_min_noise_imgdata, confetti_imgdata, retroviolet_imgdata, ocean_imgdata, incbrightness_two_imgdata, noise_centre_imgdata, sat_adj_imgdata, specks_imgdata, yellow_casino_imgdata, casino_imgdata, aeon_imgdata, eon_imgdata, neue_imgdata, zapt_imgdata, solange_imgdata, solange_dark_imgdata, lix_conv, ryo_conv, blues_imgdata, cool_twilight_imgdata, incbrightness_imgdata, greengreyscale_imgdata, add_green_diagonal_lines_imgdata, add_diagonal_lines_imgdata, add_horizontal_line_imgdata, pane_imgdata, min_noise_imgdata, green_med_noise_imgdata, green_min_noise_imgdata, blue_min_noise_imgdata, dark_purple_min_noise_imgdata, lemon_imgdata, coral_imgdata, darkify_imgdata]
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

    function addFilterButtonEventListeners() {

        var enable_filter_stacking = document.getElementById("enable_filter_stacking");
        enable_filter_stacking.addEventListener("click", switchFilterStackingOn(), false);

        var blue_grey_scale = document.getElementById('blue_greyscale');
        blue_grey_scale.addEventListener("click", function () { updateMainCanvas("bluegreyscale") }, false);

        var inc_brightness_elem = document.getElementById('inc_brightness');
        inc_brightness_elem.addEventListener("click", function () { updateMainCanvas("incbrightness") }, false);


        var darkify_el = document.getElementById('darkify');
        darkify_el.addEventListener("click", function () { updateMainCanvas("darkify") }, false);

        var greyscale_elem = document.getElementById('greyscale');
        greyscale_elem.addEventListener("click", function () { updateMainCanvas("greyscale") }, false);

        var red_greyscale_elem = document.getElementById('red_greyscale');
        red_greyscale_elem.addEventListener("click", function () { updateMainCanvas("redgreyscale") }, false);

        var green_greyscale_elem = document.getElementById('green_greyscale');
        green_greyscale_elem.addEventListener("click", function () { updateMainCanvas("greengreyscale") }, false);

        var horizontal_lines_elem = document.getElementById('horizontal_lines');
        horizontal_lines_elem.addEventListener("click", function () { updateMainCanvas("add_horizontal_lines") }, false);

        var diagonal_lines_elem = document.getElementById('diagonal_lines');
        diagonal_lines_elem.addEventListener("click", function () { updateMainCanvas("add_diagonal_lines") }, false);

        var green_diagonal_lines_elem = document.getElementById('green_diagonal_lines');
        green_diagonal_lines_elem.addEventListener("click", function () { updateMainCanvas("add_green_diagonal_lines") }, false);

        var pane_elem = document.getElementById('pane');
        pane_elem.addEventListener("click", function () { updateMainCanvas("pane") }, false);

        var casino_elem = document.getElementById('casino');
        casino_elem.addEventListener("click", function () { updateMainCanvas("casino") }, false);

        var yellow_casino_elem = document.getElementById('yellow_casino');
        yellow_casino_elem.addEventListener("click", function () { updateMainCanvas("yellow_casino") }, false);

        var specks_elem = document.getElementById('specks');
        specks_elem.addEventListener("click", function () { updateMainCanvas("specks") }, false);

        var invert_elem = document.getElementById('invert');
        invert_elem.addEventListener("click", function () { updateMainCanvas("invert") }, false);

        var a_el = document.getElementById('a');
        a_el.addEventListener("click", function () { updateMainCanvas("a") }, false);

        var twenties_el = document.getElementById('twenties');
        twenties_el.addEventListener("click", function () { updateMainCanvas("twenties") }, false);

        var rose_el = document.getElementById("rose");
        rose_el.addEventListener("click", function () { updateMainCanvas("rosetint") }, false);

        var slate_el = document.getElementById("slate");
        slate_el.addEventListener("click", function () { updateMainCanvas("slate") }, false);

        var purplescale_el = document.getElementById("purplescale");
        purplescale_el.addEventListener("click", function () { updateMainCanvas("purplescale") }, false);

        var radio_el = document.getElementById("radio");
        radio_el.addEventListener("click", function () { updateMainCanvas("radio") }, false);

        var ocean_el = document.getElementById("ocean");
        ocean_el.addEventListener("click", function () { updateMainCanvas("ocean") }, false);

        var pixelate_elem = document.getElementById("pixelate");
        pixelate_elem.addEventListener("click", function () { pixelate(img) }, false);

        var solange_elem = document.getElementById("solange");
        solange_elem.addEventListener("click", function () { updateMainCanvas("solange") }, false);

        var zapt_element = document.getElementById("zapt");
        zapt_element.addEventListener("click", function () { updateMainCanvas("zapt") }, false);

        var neue_element = document.getElementById("neue");
        neue_element.addEventListener("click", function () { updateMainCanvas("neue") }, false);

        var ryo_element = document.getElementById("ryo");
        ryo_element.addEventListener("click", function () { updateMainCanvas("ryo") }, false);

        var lix_element = document.getElementById("lix");
        lix_element.addEventListener("click", function () { updateMainCanvas("lix") }, false);

        var eon_element = document.getElementById("eon");
        eon_element.addEventListener("click", function () { updateMainCanvas("eon") }, false);

        var aeon_element = document.getElementById("aeon");
        aeon_element.addEventListener("click", function () { updateMainCanvas("aeon") }, false);

        var cosmic_element = document.getElementById("cosmic");
        cosmic_element.addEventListener("click", function () { updateMainCanvas("cosmic") }, false);

        var retro_violet_elem = document.getElementById("retro_violet");
        retro_violet_elem.addEventListener("click", function () { updateMainCanvas("retroviolet") }, false);

        var haze_elem = document.getElementById("haze");
        haze_elem.addEventListener("click", function () { updateMainCanvas("haze") }, false);

        var pink_aura_elem = document.getElementById("pink_aura");
        pink_aura_elem.addEventListener("click", function () { updateMainCanvas("pink_aura") }, false);

        var serenity_elem = document.getElementById("serenity");
        serenity_elem.addEventListener("click", function () { updateMainCanvas("serenity") }, false);

        var perfume_elem = document.getElementById("perfume");
        perfume_elem.addEventListener("click", function () { updateMainCanvas("perfume") }, false);

        var specks_redscale_elem = document.getElementById("specks_redscale");
        specks_redscale_elem.addEventListener("click", function () { updateMainCanvas("specks_redscale") }, false);

        var noise_centre_elem = document.getElementById("noise_centre");
        noise_centre_elem.addEventListener("click", function () { updateMainCanvas("noise_centre") }, false);

        var mellow_elem = document.getElementById("mellow");
        mellow_elem.addEventListener("click", function () { updateMainCanvas("mellow") }, false);

        var matrix_elem = document.getElementById("matrix");
        matrix_elem.addEventListener("click", function () { updateMainCanvas("matrix") }, false);

        var green_specks_elem = document.getElementById("green_specks");
        green_specks_elem.addEventListener("click", function () { updateMainCanvas("greenspecks") }, false);

        var eclectic_elem = document.getElementById("eclectic");
        eclectic_elem.addEventListener("click", function () { updateMainCanvas("eclectic") }, false);

        var confetti_elem = document.getElementById("confetti");
        confetti_elem.addEventListener("click", function () { updateMainCanvas("confetti") }, false);

        var vintage_elem = document.getElementById("vintage");
        vintage_elem.addEventListener("click", function () { updateMainCanvas("vintage") }, false);

        var horizon_elem = document.getElementById("horizon");
        horizon_elem.addEventListener("click", function () { updateMainCanvas("horizon") }, false);

        var evening_elem = document.getElementById("evening");
        evening_elem.addEventListener("click", function () { updateMainCanvas("evening") }, false);

        var min_noise_elem = document.getElementById("min_noise");
        min_noise_elem.addEventListener("click", function () { updateMainCanvas("min_noise") }, false);

        var lemon_elem = document.getElementById("lemon");
        lemon_elem.addEventListener("click", function () { updateMainCanvas("lemon") }, false);

        var coral_elem = document.getElementById("coral");
        coral_elem.addEventListener("click", function () { updateMainCanvas("coral") }, false);

        var dark_purple_min_noise_elem = document.getElementById("coral");
        dark_purple_min_noise_elem.addEventListener("click", function () { updateMainCanvas("dark_purple_min_noise") }, false);

        var green_med_noise_elem = document.getElementById("green_med_noise");
        green_med_noise_elem.addEventListener("click", function () { updateMainCanvas("green_med_noise") }, false);

        var teal_min_noise = document.getElementById("teal_min_noise");
        teal_min_noise.addEventListener("click", function () { updateMainCanvas("teal_min_noise") }, false);

        var blue_min_noise_elem = document.getElementById("blue_min_noise");
        blue_min_noise_elem.addEventListener("click", function () { updateMainCanvas("blue_min_noise") }, false);

        var green_min_noise_elem = document.getElementById("green_min_noise");
        green_min_noise_elem.addEventListener("click", function () { updateMainCanvas("green_min_noise") }, false);

        var pink_min_noise_elem = document.getElementById("pink_min_noise");
        pink_min_noise_elem.addEventListener("click", function () { updateMainCanvas("pink_min_noise") }, false);

        var red_min_noise_elem = document.getElementById("red_min_noise");
        red_min_noise_elem.addEventListener("click", function () { updateMainCanvas("red_min_noise") }, false);

    }

    function switchFilterStackingOn() {
        isFilterStackingOn = true;
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
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = 255 - imgData.data[i];
        }
        return imgData;
    }

    const solange_grey_imgdata = function () {
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = imgData.data[i + 2];
            imgData.data[i + 1] = imgData.data[i + 1]
            imgData.data[i + 2] = imgData.data[i]

        }
        return imgData;
    }


    const min_noise_imgdata = function () {
        var rand = (0.5 - Math.random()) * 53;

        for (var i = 0; i < imgData.data.length; i += 4) {
            var randomColor1 = 0.6 + Math.random() * 0.4;

            var randomColor2 = 0.6 + Math.random() * 0.4;

            var randomColor3 = 0.6 + Math.random() * 0.4;

            imgData.data[i] = imgData.data[i] * 0.99 * randomColor1; 
            imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomColor2;

            imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomColor3; 
        }
        return imgData;
    }

    const red_min_noise_imgdata = function () {
        var rand = (0.5 - Math.random()) * 1;

        for (var i = 0; i < imgData.data.length; i += 4) {
            var randomColor1 = 0.6 + Math.random() * 0.6;

            var randomColor2 = 0.6 + Math.random() * 0.4;

            var randomColor3 = 0.6 + Math.random() * 0.4;

            imgData.data[i] = imgData.data[i] * 0.99 * randomColor1; 
            imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomColor2;

            imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomColor3; 
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
        for (i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg
            imgData.data[i + 1] = avg
            imgData.data[i + 2] = avg
        }
        return imgData;
    }

    const redgreyscale_imgdata = function () {
        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg + 100
            imgData.data[i + 1] = avg + 40
            imgData.data[i + 2] = avg + 20
        }
        return imgData;
    }



    const greengreyscale_imgdata = function () {
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

    const invert_imgdata = function () {
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

    const matrix2 =  function() {
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
                addition1 = 70;
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
                addition1 = 0;
                addition2 = 30;
            }
            else if (randomNumber > 49 && randomNumber < 100) {
                addition1 = 100;
                addition2 = 90;
            }

            else {
                addition1 = 70;
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
                imgData.data[i + 2] += addition2;
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


    // An experimental function that is used for the testing of image filtering.
    const a = function () {
        var randomNumber;

        for (i = 0; i < imgData.data.length; i += 4) {
            randomNumber = getRandomNumber(0, 200);
            var addition;
            if (randomNumber > 0 && randomNumber < 50) {
                addition1 = 0;
                addition2 = 30;
            }
            else if (randomNumber > 49 && randomNumber < 100) {
                addition1 = 100;
                addition2 = 90;
            }

            else {
                addition1 = 70;
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
                imgData.data[i + 2] += addition2;
            }
        }
        return imgData;
    }

    const pixel_blue_imgdata = function () {
        var randomNumber;

        for (i = 0; i < imgData.data.length; i += 4) {
            randomNumber = getRandomNumber(0, 200);
            var addition;
            if (randomNumber > 0 && randomNumber < 50) {
                addition1 = 0;
                addition2 = 30;
            }
            else if (randomNumber > 49 && randomNumber < 100) {
                addition1 = 100;
                addition2 = 90;
            }

            else {
                addition1 = 70;
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
                imgData.data[i + 2] += addition2;
            }
        }
        return imgData;
    }

    
    const lemon_imgdata = function () {
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i + 1] = imgData.data[i] + 50;
        }
        return imgData;
    }

    const coral_imgdata = function () {
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i + 2] = imgData.data[i + 1] + 50;
        }
        return imgData;
    }

    const frontward_imgdata = function () {
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = imgData.data[i + 2];
            imgData.data[i + 2] = imgData.data[i + 1] + 50;
        }
        return imgData;
    }

    const green_med_noise_imgdata = function () {
        var rand = (0.5 - Math.random()) * 9;

        for (var i = 0; i < imgData.data.length; i += 4) {
            var randomColor1 = 0.6 + Math.random() * 0.5;

            var randomColor2 = 0.6 + Math.random() * 0.5;

            var randomColor3 = 0.6 + Math.random() * 0.5;

            imgData.data[i] = imgData.data[i + 1] * 0.5 * randomColor1; 
            imgData.data[i + 1] = imgData.data[i + 2 ] * 0.99 * randomColor2;

            imgData.data[i + 2] = imgData.data[i] * 0.99 * randomColor3; 
        }
        return imgData;
    }

    const dark_purple_min_noise_imgdata = function () {
        var rand = (0.5 - Math.random()) * 9;

        for (var i = 0; i < imgData.data.length; i += 4) {
            var randomColor1 = 0.6 + Math.random() * 0.5;

            var randomColor2 = 0.6 + Math.random() * 0.5;

            var randomColor3 = 0.6 + Math.random() * 0.5;

            imgData.data[i] = imgData.data[i] * 0.5 * randomColor1; 
            imgData.data[i + 1] = imgData.data[i + 1] * 0.3 * randomColor2;

            imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomColor3; 
        }
        return imgData;
    }

    const teal_min_noise_imgdata = function () {
        var rand = (0.5 - Math.random()) * 1;

        for (var i = 0; i < imgData.data.length; i += 4) {
            var randomColor1 = 0.6 + Math.random() * 0.1;

            var randomColor2 = 0.6 + Math.random() * 0.5;

            var randomColor3 = 0.6 + Math.random() * 0.5;

            imgData.data[i] = imgData.data[i] * 0.99 * randomColor1; 
            imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomColor2;

            imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomColor3; 
        }
        return imgData;
    }

    const purple_min_noise_imgdata = function () {
        var rand = (0.5 - Math.random()) * 1;

        for (var i = 0; i < imgData.data.length; i += 4) {
            var randomColor1 = 0.6 + Math.random() * 0.5;

            var randomColor2 = 0.6 + Math.random() * 0.2;

            var randomColor3 = 0.6 + Math.random() * 0.8;

            imgData.data[i] = imgData.data[i] * 0.99 * randomColor1; 
            imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomColor2;

            imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomColor3; 
        }
        return imgData;
    }

    const blue_min_noise_imgdata = function () {
        var rand = (0.5 - Math.random()) * 1;

        for (var i = 0; i < imgData.data.length; i += 4) {
            var randomColor1 = 0.6 + Math.random() * 0.1;

            var randomColor2 = 0.6 + Math.random() * 0.2;

            var randomColor3 = 0.6 + Math.random() * 0.7;

            imgData.data[i] = imgData.data[i] * 0.99 * randomColor1; 
            imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomColor2;

            imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomColor3; 
        }
        return imgData;
    }

    const green_min_noise_imgdata = function () {
        var rand = (0.5 - Math.random()) * 1;

        for (var i = 0; i < imgData.data.length; i += 4) {
            var randomColor1 = 0.6 + Math.random() * 0.1;

            var randomColor2 = 0.6 + Math.random() * 0.5;

            var randomColor3 = 0.6 + Math.random() * 0.4;

            imgData.data[i] = imgData.data[i] * 0.99 * randomColor1; 
            imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomColor2;

            imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomColor3; 
        }
        return imgData;
    }

    const pink_min_noise_imgdata = function() {
        var rand = (0.5 - Math.random()) * 1;

        for (var i = 0; i < imgData.data.length; i += 4) {
            var randomColor1 = 0.6 + Math.random() * 0.6;

            var randomColor2 = 0.6 + Math.random() * 0.1;

            var randomColor3 = 0.6 + Math.random() * 0.4;

            imgData.data[i] = imgData.data[i] * 0.99 * randomColor1; 
            imgData.data[i + 1] = imgData.data[i + 1] * 0.99 * randomColor2;

            imgData.data[i + 2] = imgData.data[i + 2] * 0.99 * randomColor3; 
        }
        return imgData;
    }
    
    var filter_dict = { "a": a, "invert": invert_imgdata, "lemon" : lemon_imgdata, "coral" : coral_imgdata, "dark_purple_min_noise" : dark_purple_min_noise_imgdata, "green_med_noise" : green_med_noise_imgdata, "teal_min_noise" : teal_min_noise_imgdata, "blue_min_noise" : blue_min_noise_imgdata, "green_min_noise" : green_min_noise_imgdata, "green_med_noise" : green_med_noise_imgdata, "pink_min_noise_imgdata" : pink_min_noise_imgdata, "red_min_noise" : red_min_noise_imgdata, "min_noise": min_noise_imgdata, "pane": pane_imgdata, "add_horizontal_lines": add_horizontal_line_imgdata, "add_diagonal_lines": add_diagonal_lines_imgdata, "add_green_diagonal_lines": add_green_diagonal_lines_imgdata, "greengreyscale": greengreyscale_imgdata, "darkify": darkify_imgdata, "incbrightness": incbrightness_imgdata, "cool_twilight": cool_twilight_imgdata, "blues": blues_imgdata, "ryo_conv": ryo_conv, "lix": lix_conv, "casino": casino_imgdata, "yellow_casino": yellow_casino_imgdata, "specks": specks_imgdata, "sat_adj": sat_adj_imgdata, "noise_centre": noise_centre_imgdata, "greenspecks": green_specks_imgdata, "eclectic": eclectic_imgdata, "matrix": matrix_imgdata, "cosmic": cosmic_imgdata, "solange_dark": solange_dark_imgdata, "solange": solange_imgdata, "zapt": zapt_imgdata, "neue": neue_imgdata, "eon": eon_imgdata, "aeon": aeon_imgdata, "ocean": ocean_imgdata, "confetti": confetti_imgdata, "horizon": horizon_imgdata, "rosetint": rosetint_imgdata, "slate": slate_imgdata, "purplescale": purplescale_imgdata, "redgreyscale": redgreyscale_imgdata, "radio": radio_imgdata, "specks_redscale": specksredscale_imgdata, "twenties": twenties_imgdata, "greyscale": greyscale_imgdata, "mellow": mellow_imgdata, "vintage": vintage_imgdata, "evening": evening_imgdata, "bluegreyscale": blue_greyscale_imgdata, "perfume": perfume_imgdata, "pink_aura": pink_aura_imgdata, "serenity": serenity_imgdata, "bluegreyscale": blue_greyscale_imgdata, "retroviolet": retroviolet_imgdata, "haze": haze_imgdata }


    function updateMainCanvas(chosenFilter) {
        filter_dict = { "a": a, "invert": invert_imgdata, "lemon" : lemon_imgdata, "coral" : coral_imgdata, "dark_purple_min_noise" : dark_purple_min_noise_imgdata, "green_med_noise" : green_med_noise_imgdata, "teal_min_noise" : teal_min_noise_imgdata, "blue_min_noise" : blue_min_noise_imgdata, "green_min_noise" : green_min_noise_imgdata, "pink_min_noise_imgdata" : pink_min_noise_imgdata, "red_min_noise" : red_min_noise_imgdata, "min_noise": min_noise_imgdata, "pane": pane_imgdata, "add_horizontal_lines": add_horizontal_line_imgdata, "add_diagonal_lines": add_diagonal_lines_imgdata, "add_green_diagonal_lines": add_green_diagonal_lines_imgdata, "greengreyscale": greengreyscale_imgdata, "darkify": darkify_imgdata, "incbrightness": incbrightness_imgdata, "cool_twilight": cool_twilight_imgdata, "blues": blues_imgdata, "ryo_conv": ryo_conv, "lix": lix_conv, "casino": casino_imgdata, "yellow_casino": yellow_casino_imgdata, "specks": specks_imgdata, "sat_adj": sat_adj_imgdata, "noise_centre": noise_centre_imgdata, "greenspecks": green_specks_imgdata, "eclectic": eclectic_imgdata, "matrix": matrix_imgdata, "cosmic": cosmic_imgdata, "solange_dark": solange_dark_imgdata, "solange": solange_imgdata, "zapt": zapt_imgdata, "neue": neue_imgdata, "eon": eon_imgdata, "aeon": aeon_imgdata, "ocean": ocean_imgdata, "confetti": confetti_imgdata, "horizon": horizon_imgdata, "rosetint": rosetint_imgdata, "slate": slate_imgdata, "purplescale": purplescale_imgdata, "redgreyscale": redgreyscale_imgdata, "radio": radio_imgdata, "specks_redscale": specksredscale_imgdata, "twenties": twenties_imgdata, "greyscale": greyscale_imgdata, "mellow": mellow_imgdata, "vintage": vintage_imgdata, "evening": evening_imgdata, "bluegreyscale": blue_greyscale_imgdata, "perfume": perfume_imgdata, "pink_aura": pink_aura_imgdata, "serenity": serenity_imgdata, "bluegreyscale": blue_greyscale_imgdata, "retroviolet": retroviolet_imgdata, "haze": haze_imgdata }

        ctx.drawImage(img, 0, 0, 220, 277);
        if (isFilterStackingOn) {
            var imgData = ctx.getImageData(0, 0, c.width, c.height);
        }
        else {
            imgData = ctx.getImageData(0, 0, c.width, c.height); // add var in front to use imgData from previous filter effect.

        }

        var resultingImgData = filter_dict[chosenFilter]();
        console.log(resultingImgData)
        ctx.putImageData(resultingImgData, 0, 0);
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

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})();