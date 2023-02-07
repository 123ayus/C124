noseX=0;
noseY=0;
difference=0;
leftWristX=0;
rightWristX=0;
function setup(){
    canvas = createCanvas(450,450);
canvas.position(600,120);
  video=createCapture(VIDEO);
  video.size(500,600);
  video.position(50,50)
poseNet=ml5.poseNet(video,modelLoaded());
poseNet.on('pose',gotposes);
}
function modelLoaded(){     
    console.log('model is initialised');
}
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log('noseX = '+noseX + 'noseY = '+noseY);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log('leftWristX = '+ leftWristX + 'rightWristX = '+ rightWristX);
   difference=floor(leftWristX-rightWristX);
    }
}
function draw(){
    background("#f0ff91");
    textSize(difference);
    fill('blue');
    text('Ayush', 50, 400);
}
