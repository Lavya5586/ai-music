its_ok = "";
monday = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

function preload() {
    its_ok = loadSound("Imagine-Dragons-It-s-Ok.mp3");
    monday = loadSound("Imagine_Dragons_-_Monday.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX = " +leftWristX+ "LeftWristY = " +leftwristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX = " +rightWristX+ "RightWristY = " +rightWristY);
    }
}

function modelLoaded()
{
    console.log('PoseNet is inialized');
}

function draw() {
    image(video, 0, 0, 600, 500);
}