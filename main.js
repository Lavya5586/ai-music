its_ok = "";
monday = ";"

function preload() {
    its_ok = loadSound("Imagine-Dragons-It-s-Ok.mp3");
    monday = loadSound("Imagine_Dragons_-_Monday.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    its_ok.play();
    monday.play();
}