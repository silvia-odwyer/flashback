(function () {

    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');
    document.addEventListener('DOMContentLoaded', assembleFilteredPhotos, false);

    var filterFunctions = {
        solange: function () {
            console.log("solange called")
            var canvas_new = document.createElement("canvas");
            var new_ctx = canvas_new.getContext("2d");
            ctx.drawImage(img, 10, 10, 220, 277);
            new_ctx.drawImage(img, 10, 10, 50, 80);
            var imgData = ctx.getImageData(0, 0, c.width, c.height);
            var newImgData = new_ctx.getImageData(0, 0, canvas_new.width, canvas_new.height);

            for (i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i] = 255 - imgData.data[i];
                newImgData.data[i] = 255 - newImgData.data[i];

                // imgData.data[i + 1] = 255 - imgData.data[i + 1];
                // imgData.data[i + 2] = 255 - imgData.data[i + 2];
            }
            new_ctx.putImageData(newImgData, 0, 0);
            ctx.putImageData(imgData, 0, 0);

            return canvas_new;
        },

        foo: function () {
            var canvas_new = document.createElement("canvas");
            var new_ctx = canvas_new.getContext("2d");
            ctx.drawImage(img, 10, 10, 220, 277);
            new_ctx.drawImage(img, 10, 10, 50, 80);
            var imgData = ctx.getImageData(0, 0, c.width, c.height);
            var newImgData = new_ctx.getImageData(0, 0, canvas_new.width, canvas_new.height);

            for (i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i] = 120 - imgData.data[i];
                newImgData.data[i] = 120 - newImgData.data[i];

                // imgData.data[i + 1] = 255 - imgData.data[i + 1];
                // imgData.data[i + 2] = 255 - imgData.data[i + 2];
            }
            new_ctx.putImageData(newImgData, 0, 0);
            ctx.putImageData(imgData, 0, 0);

            return canvas_new;
        }
    };

    var img = document.createElement('img');
    img.src = 'pic6.PNG';
    img.onload = function () {

        var inc_brightness_elem = document.getElementById('inc_brightness');
        inc_brightness_elem.addEventListener("click", function () { incBrightness(img) }, false);

        var blue_grey_scale = document.getElementById('blue_greyscale');
        blue_grey_scale.addEventListener("click", function () { blueGreyScale(img) }, false);

        var darkify_el = document.getElementById('darkify');
        darkify_el.addEventListener("click", function () { darkify(img) }, false);

        var greyscale_elem = document.getElementById('greyscale');
        greyscale_elem.addEventListener("click", function () { greyscale(img) }, false);

        var red_greyscale_elem = document.getElementById('red_greyscale');
        red_greyscale_elem.addEventListener("click", function () { redGreyScale(img) }, false);

        var green_greyscale_elem = document.getElementById('green_greyscale');
        green_greyscale_elem.addEventListener("click", function () { greenGreyScale(img) }, false);

        var horizontal_lines_elem = document.getElementById('horizontal_lines');
        horizontal_lines_elem.addEventListener("click", function () { addHorizontalLines(img) }, false);

        var diagonal_lines_elem = document.getElementById('diagonal_lines');
        diagonal_lines_elem.addEventListener("click", function () { addDiagonalLines(img) }, false);

        var green_diagonal_lines_elem = document.getElementById('green_diagonal_lines');
        green_diagonal_lines_elem.addEventListener("click", function () { addGreenDiagonalLines(img) }, false);

        var pane_elem = document.getElementById('pane');
        pane_elem.addEventListener("click", function () { pane(img) }, false);

        var casino_elem = document.getElementById('casino');
        casino_elem.addEventListener("click", function () { casino(img) }, false);

        var yellow_casino_elem = document.getElementById('yellow_casino');
        yellow_casino_elem.addEventListener("click", function () { yellowCasino(img) }, false);

        var specks_elem = document.getElementById('specks');
        specks_elem.addEventListener("click", function () { specks(img) }, false);

        var invert_elem = document.getElementById('invert');
        invert_elem.addEventListener("click", function () { invert(img) }, false);

        var a_el = document.getElementById('a');
        a_el.addEventListener("click", function () { a(img) }, false);

        var twenties_el = document.getElementById('twenties');
        twenties_el.addEventListener("click", function () { twenties(img) }, false);

        var rose_el = document.getElementById("rose");
        rose_el.addEventListener("click", function () { roseTint(img) }, false);

        var slate_el = document.getElementById("slate");
        slate_el.addEventListener("click", function () { slate(img) }, false);

        var purplescale_el = document.getElementById("purplescale");
        purplescale_el.addEventListener("click", function () { purpleScale(img) }, false);

        var radio_el = document.getElementById("radio");
        radio_el.addEventListener("click", function () { radio(img) }, false);

        var ocean_el = document.getElementById("ocean");
        ocean_el.addEventListener("click", function () { ocean(img) }, false);

        var pixelate_elem = document.getElementById("pixelate");
        pixelate_elem.addEventListener("click", function () { pixelate(img) }, false);

        var solange_elem = document.getElementById("solange");
        solange_elem.addEventListener("click", function () { solange(img) }, false);

        var zapt_element = document.getElementById("zapt");
        zapt_element.addEventListener("click", function () { zapt(img) }, false);


        var neue_element = document.getElementById("neue");
        neue_element.addEventListener("click", function () { neue(img) }, false);

        var ryo_element = document.getElementById("ryo");
        ryo_element.addEventListener("click", function () { ryo(img) }, false);

        var lix_element = document.getElementById("lix");
        lix_element.addEventListener("click", function () { lix(img) }, false);

        var eon_element = document.getElementById("eon");
        eon_element.addEventListener("click", function () { eon(img) }, false);

        var aeon_element = document.getElementById("aeon");
        aeon_element.addEventListener("click", function () { aeon(img) }, false);

        var cosmic_element = document.getElementById("cosmic");
        cosmic_element.addEventListener("click", function () { cosmic(img) }, false);

        var retro_violet_elem = document.getElementById("retro_violet");
        retro_violet_elem.addEventListener("click", function () { retroViolet(img) }, false);

        var haze_elem = document.getElementById("haze");
        haze_elem.addEventListener("click", function () { haze(img) }, false);

        var pink_aura_elem = document.getElementById("pink_aura");
        pink_aura_elem.addEventListener("click", function () { pinkAura(img) }, false);

        var serenity_elem = document.getElementById("serenity");
        serenity_elem.addEventListener("click", function () { serenity(img) }, false);

        var perfume_elem = document.getElementById("perfume");
        perfume_elem.addEventListener("click", function () { perfume(img) }, false);

        var specks_redscale_elem = document.getElementById("specks_redscale");
        specks_redscale_elem.addEventListener("click", function () { specksRedscale(img) }, false);

        var noise_centre_elem = document.getElementById("noise_centre");
        noise_centre_elem.addEventListener("click", function () { noiseCentre(img) }, false);

        var mellow_elem = document.getElementById("mellow");
        mellow_elem.addEventListener("click", function () { mellow(img) }, false);

        var matrix_elem = document.getElementById("matrix");
        matrix_elem.addEventListener("click", function () { matrix(img) }, false);

        var green_specks_elem = document.getElementById("green_specks");
        green_specks_elem.addEventListener("click", function () { greenSpecks(img) }, false);

        var eclectic_elem = document.getElementById("eclectic");
        eclectic_elem.addEventListener("click", function () { eclectic(img) }, false);

        var confetti_elem = document.getElementById("confetti");
        confetti_elem.addEventListener("click", function () { confetti(img) }, false);

        var vintage_elem = document.getElementById("vintage");
        vintage_elem.addEventListener("click", function () { vintage(img) }, false);

        var horizon_elem = document.getElementById("horizon");
        horizon_elem.addEventListener("click", function () { horizon(img) }, false);

        var evening_elem = document.getElementById("evening");
        evening_elem.addEventListener("click", function () { evening(img) }, false);


    }

    function assembleFilteredPhotos() {

        const solange_func = function () {
            console.log("solange called")
            var canvas_new = document.createElement("canvas");
            var new_ctx = canvas_new.getContext("2d");
            ctx.drawImage(img, 10, 10, 220, 277);
            new_ctx.drawImage(img, 10, 10, 50, 80);
            var imgData = ctx.getImageData(0, 0, c.width, c.height);
            var newImgData = new_ctx.getImageData(0, 0, canvas_new.width, canvas_new.height);

            for (i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i] = 255 - imgData.data[i];
                newImgData.data[i] = 255 - newImgData.data[i];

                // imgData.data[i + 1] = 255 - imgData.data[i + 1];
                // imgData.data[i + 2] = 255 - imgData.data[i + 2];
            }
            new_ctx.putImageData(newImgData, 0, 0);
            ctx.putImageData(imgData, 0, 0);

            return canvas_new;
        }



        const cool_twilight = function () {
            console.log("hi");
            var canvas_new = document.createElement("canvas");
            var new_ctx = canvas_new.getContext("2d");
            ctx.drawImage(img, 10, 10, 220, 277);
            new_ctx.drawImage(img, 10, 10, 50, 80);
            var imgData = ctx.getImageData(0, 0, c.width, c.height);
            var newImgData = new_ctx.getImageData(0, 0, canvas_new.width, canvas_new.height);

            for (i = 0; i < imgData.data.length; i += 4) {
                imgData.data[i] = 120 - imgData.data[i];
                newImgData.data[i] = 120 - newImgData.data[i];

                // imgData.data[i + 1] = 255 - imgData.data[i + 1];
                // imgData.data[i + 2] = 255 - imgData.data[i + 2];
            }
            new_ctx.putImageData(newImgData, 0, 0);
            ctx.putImageData(imgData, 0, 0);

            return canvas_new;
        }

        const group = [solange_func, cool_twilight]

        var tiles = document.getElementsByClassName("tile is-child box check");
        console.log(tiles);
        var tile_elem;

        for (var i = 0; i < group.length; i += 1) {
            console.log("I is on:", i)
            // var new_canvas = group[i]();
            // console.log(new_canvas);
            // tile_elem = tiles[i];
            // tile_elem.appendChild(new_canvas)
        }
        var one = group[1]()
        var tile_un = tiles[1]
        tile_un.appendChild(one);

        one = group[0]()
        var tile_un = tiles[0]
        tile_un.appendChild(one);


    }

    function darkify(img) {

        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        var BRIGHTNESS_ADJ = 10;
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] -= BRIGHTNESS_ADJ
            imgData.data[i + 1] -= BRIGHTNESS_ADJ
            imgData.data[i + 2] -= BRIGHTNESS_ADJ
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function incBrightness(img) {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        var BRIGHTNESS_ADJ = 50;
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] += BRIGHTNESS_ADJ
            imgData.data[i + 1] += BRIGHTNESS_ADJ
            imgData.data[i + 2] += BRIGHTNESS_ADJ
        }
        ctx.putImageData(imgData, 0, 0);
        console.log(imgData.data);
    }

    function greyscale() {

        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);


        for (i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg
            imgData.data[i + 1] = avg
            imgData.data[i + 2] = avg
        }
        console.log(imgData.data)
        ctx.putImageData(imgData, 0, 0);

    }

    function redGreyScale() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg + 100
            imgData.data[i + 1] = avg + 40
            imgData.data[i + 2] = avg + 20
        }
        ctx.putImageData(imgData, 0, 0);
    }


    function blueGreyScale() {

        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg + 20
            imgData.data[i + 1] = avg + 30
            imgData.data[i + 2] = avg + 60
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function greenGreyScale() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg + 20
            imgData.data[i + 1] = avg + 70
            imgData.data[i + 2] = avg + 20
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function addHorizontalLines() {

        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);

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
        ctx.putImageData(imgData, 0, 0);
    }

    function addDiagonalLines(img) {
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);

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
        ctx.putImageData(imgData, 0, 0);
    }

    function addGreenDiagonalLines() {
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);

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
        ctx.putImageData(imgData, 0, 0);
    }

    function pane() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

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
        ctx.putImageData(imgData, 0, 0);
    }

    function casino(img) {
        console.log("Casino called.")
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);

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
        ctx.putImageData(imgData, 0, 0);
    }

    function yellowCasino(img) {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

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
        ctx.putImageData(imgData, 0, 0);
    }


    function specks() {

        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);

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
        ctx.putImageData(imgData, 0, 0);
    }

    function incBrightness2() {
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        var BRIGHTNESS_ADJ = 30;
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] += BRIGHTNESS_ADJ
            imgData.data[i + 1] += BRIGHTNESS_ADJ
            imgData.data[i + 2] += BRIGHTNESS_ADJ
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function invert() {
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = 255 - imgData.data[i];
            imgData.data[i + 1] = 255 - imgData.data[i + 1];
            imgData.data[i + 2] = 255 - imgData.data[i + 2];
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function addToPixels(addition) {
        var canvas_new = document.createElement("canvas");
        var new_ctx = canvas_new.getContext("2d");
        ctx.drawImage(img, 10, 10, 220, 277);
        new_ctx.drawImage(img, 10, 10, 50, 80);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);
        var newImgData = new_ctx.getImageData(0, 0, canvas_new.width, canvas_new.height);

        for (i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = 255 - imgData.data[i];
            newImgData.data[i] = 255 - newImgData.data[i];

            // imgData.data[i + 1] = 255 - imgData.data[i + 1];
            // imgData.data[i + 2] = 255 - imgData.data[i + 2];
        }
        new_ctx.putImageData(newImgData, 0, 0);
        ctx.putImageData(imgData, 0, 0);

        return canvas_new;
    }

    function solange() {
        var canvas_new = document.createElement("canvas");
        var new_ctx = canvas_new.getContext("2d");
        ctx.drawImage(img, 10, 10, 220, 277);
        new_ctx.drawImage(img, 10, 10, 50, 80);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);
        var newImgData = new_ctx.getImageData(0, 0, canvas_new.width, canvas_new.height);

        for (i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = 255 - imgData.data[i];
            newImgData.data[i] = 255 - newImgData.data[i];

            // imgData.data[i + 1] = 255 - imgData.data[i + 1];
            // imgData.data[i + 2] = 255 - imgData.data[i + 2];
        }
        new_ctx.putImageData(newImgData, 0, 0);
        ctx.putImageData(imgData, 0, 0);

        return canvas_new;
    }

    function zapt() {
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (i = 0; i < imgData.data.length; i += 4) {
            // imgData.data[i] = 255 - imgData.data[i];
            imgData.data[i + 1] = 255 - imgData.data[i + 1];
            // imgData.data[i + 2] = 255 - imgData.data[i + 2];
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function neue() {
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (i = 0; i < imgData.data.length; i += 4) {
            // imgData.data[i] = 255 - imgData.data[i];
            // imgData.data[i + 1] = 255 - imgData.data[i + 1];
            imgData.data[i + 2] = 255 - imgData.data[i + 2];
        }
        ctx.putImageData(imgData, 0, 0);
    }


    function ryo() {
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = 255 - imgData.data[i];
            // imgData.data[i + 1] = 255 - imgData.data[i + 1];
            imgData.data[i + 2] = 255 - imgData.data[i + 2];
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function lix() {
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] = 255 - imgData.data[i];
            imgData.data[i + 1] = 255 - imgData.data[i + 1];
            //imgData.data[i + 2] = 255 - imgData.data[i + 2];
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function eon() {
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (i = 0; i < imgData.data.length; i += 4) {
            //imgData.data[i] = 255 - imgData.data[i];
            imgData.data[i + 1] = 120 - imgData.data[i + 1];
            imgData.data[i + 2] = 100 - imgData.data[i + 2];
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function aeon() {
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (i = 0; i < imgData.data.length; i += 4) {
            //imgData.data[i] = 255 - imgData.data[i];
            imgData.data[i + 1] = 60 - imgData.data[i + 1];
            imgData.data[i + 2] = 100 - imgData.data[i + 2];
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function roseTint() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg + 80
            imgData.data[i + 1] = avg + 20
            imgData.data[i + 2] = avg + 31
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function slate() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg + 4
            imgData.data[i + 1] = avg + 3
            imgData.data[i + 2] = avg + 12
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function purpleScale() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg + 90
            imgData.data[i + 1] = avg + 40
            imgData.data[i + 2] = avg + 80
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function radio() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg + 5
            imgData.data[i + 1] = avg + 40
            imgData.data[i + 2] = avg + 20
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function twenties() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] = avg + 18
            imgData.data[i + 1] = avg + 12
            imgData.data[i + 2] = avg + 20
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function ocean() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] += 10
            imgData.data[i + 1] += 20
            imgData.data[i + 2] += 90
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function a() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        var SAT_ADJ = 150;
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] -= SAT_ADJ
            imgData.data[i + 1] -= SAT_ADJ
            imgData.data[i + 2] -= SAT_ADJ
        }
        ctx.putImageData(imgData, 0, 0);
        console.log(imgData.data);
    }

    function specksRedscale() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

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
        ctx.putImageData(imgData, 0, 0);
    }

    function noiseCentre() {

        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3;

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

        }
        ctx.putImageData(imgData, 0, 0);
    }

    function perfume() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] += 80
            imgData.data[i + 1] += 40
            imgData.data[i + 2] += 120
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function serenity() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] += 10
            imgData.data[i + 1] += 40
            imgData.data[i + 2] += 90
        }
        ctx.putImageData(imgData, 0, 0);
    }


    function pinkAura() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (var i = 0; i < imgData.data.length; i += 4) {
            var avg = (imgData.data[i] + imgData.data[i + 1] + imgData.data[i + 2]) / 3
            imgData.data[i] += 90
            imgData.data[i + 1] += 10
            imgData.data[i + 2] += 90
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function haze() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] += 90
            imgData.data[i + 1] += 90
            imgData.data[i + 2] += 10
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function pixelate() {
        var size = 27 / 100,
            w = c.width * size,
            h = c.height * size;

        // draw the original image at a fraction of the final size
        ctx.drawImage(img, 0, 0, w, h);

        ctx.msImageSmoothingEnabled = false;
        ctx.webkitImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;

        // enlarge the minimized image to full size    
        ctx.drawImage(c, 0, 0, w, h, 0, 0, c.width, c.height);
    }

    function mellow() {
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i + 2] = 120 - imgData.data[i + 2];
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function greenSpecks() {
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);
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
        ctx.putImageData(imgData, 0, 0);
    }

    function eclectic() {
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);
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
        ctx.putImageData(imgData, 0, 0);
    }

    function matrix() {
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);
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
            // imgData.data[i + 2] += addition2;
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function cosmic() {
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);
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
                addition1 = 10;
                addition2 = 90;
            }

            else {
                addition1 = 30;
                addition2 = 10;
            }

            if (imgData.data[i + 1] + addition2 > 255) {
                imgData.data[i + 1] -= addition2;
            } else {
                imgData.data[i + 1] += addition2;
            }

            if (imgData.data[i + 2] + addition2 > 255) {
                imgData.data[i + 2] -= 130;
            } else {
                imgData.data[i + 2] += 130;
            }
        }
        ctx.putImageData(imgData, 0, 0);
    }

    function retroViolet() {
        ctx.drawImage(img, 10, 10, 220, 277);
        var imgData = ctx.getImageData(0, 0, c.width, c.height);
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
        ctx.putImageData(imgData, 0, 0);
    }

    function vintage() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] += 120
            imgData.data[i + 1] += 70
            imgData.data[i + 2] += 13
        }
        ctx.putImageData(imgData, 0, 0);
        console.log(imgData.data);
    }

    function confetti() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

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
        ctx.putImageData(imgData, 0, 0);
    }

    function horizon() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        var SAT_ADJ = 150;
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] -= SAT_ADJ
            imgData.data[i + 1] -= SAT_ADJ
            imgData.data[i + 2] -= SAT_ADJ
        }
        ctx.putImageData(imgData, 0, 0);
        console.log(imgData.data);
    }

    function evening() {
        ctx.drawImage(img, 10, 10, 220, 277);

        var imgData = ctx.getImageData(0, 0, c.width, c.height);

        var SAT_ADJ = 60;
        for (var i = 0; i < imgData.data.length; i += 4) {
            imgData.data[i] -= SAT_ADJ
            imgData.data[i + 1] -= SAT_ADJ
            imgData.data[i + 2] -= SAT_ADJ
        }
        ctx.putImageData(imgData, 0, 0);
        console.log(imgData.data);
    }

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})();