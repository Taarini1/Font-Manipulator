function preload(){

}
 LeftWristX = 0; RightWristX = 0; difference=0;
function setup(){
canvas=createCanvas(600,450)
canvas.position(700,150);
canvas.background("#c85cf2")

video=createCapture(VIDEO)


posenet=ml5.poseNet(video,modelLoaded);

posenet.on("pose",gotPoses);

}

function modelLoaded(){
console.log("Model Loaded ");

}

function gotPoses(results){

    if(results.length>0){
       console.log(results);
       LeftWristX = results[0].pose.leftWrist.x
       RightWristX = results[0].pose.rightWrist.x
       difference=floor(LeftWristX-RightWristX);

       

    }

}


function draw(){

    background("#f09cd1");
    stroke("#5d35f0");
    fill('#89d8f0')
    text("Taarini",50,250);
    textSize(difference)
}

