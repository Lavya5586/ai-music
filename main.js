its_ok = "";
monday = "";

function preload() {
    its_ok = loadSound("Imagine-Dragons-It-s-Ok.mp3");
    monday = loadSound("Imagine_Dragons_-_Monday.mp3");
}

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

scoreRightWrist = 0;
scoreLeftWrist = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is inialized');
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " +scoreRightWrist+ "scoreLeftWrist = " +scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        console.log("LeftWristX = " +leftWristX+ "LeftWristY = " +leftwristY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX = " +rightWristX+ "RightWristY = " +rightWristY);
    }
}

function draw() {
    image(video, 0, 0, 600, 500);

    song_play_left = "";
    song_play_right = "";

    fill("#36f443");
    stroke("#36f443");

    if(scoreLeftWrist > 0.2)
    {
        circle(leftWristX, leftWristY, 20);
        monday.stop();
        if (its_ok.isPlaying() = "False")
        {
            its_ok.play();
            document.getElementById("song_name_playing").innerHTML = "Song playing = It's Ok";
        }
    }

    song_play_right = monday.isPlaying();

    if(scoreRightWrist > 0.2)
    {
        circle(rightWristX, rightWristY, 20);
        its_ok.stop();
        if (song_play_right = "False")
        {
            monday.play();
            document.getElementById("song_name_playing").innerHTML = "Song playing = Monday";
        }
    }
}