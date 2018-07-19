(function () {

    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');


    var img = document.createElement('img');
    img.src = 'pic6.jpg';
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
        invert_elem.addEventListener("click", function () {invert(img) }, false);

        var a_el = document.getElementById('a');
        a_el.addEventListener("click", function () {a(img) }, false);

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

    function a() {
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

    function redPurple() {
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

    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
})();