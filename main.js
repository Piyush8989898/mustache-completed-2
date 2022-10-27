noseX=0;
noseY=0;

function preload(){
mustache_nose = loadImage('https://i.postimg.cc/5N1cQQvv/video1111.webp')}
function setup(){
    canvas= createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 
function modelLoaded(){
    console.log('PoseNet Is Intialized');
}




function draw(){
image(video,0, 0, 300, 300);
image(mustache_nose, noseX, noseY, 30, 30);

}

function  take_snapshot(){
    save('myfilterImage.png');
    
}


function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x -15;
        noseY = results[0].pose.nose.y ;
        console.log("nose X = " + results[0].pose.nose.x);
        console.log("nose Y= " + results[0].pose.nose.y);
    }
}