
function setup() {
	let cnv = createCanvas(400, 400);

	// sets the canvas at the center of the screen 
	// we offset the canvas by half its width inorder to center the middle of the canvas to the middle of the screen 
	cnv.position((window.innerWidth/2)-width, 200);
	angleMode(DEGREES);
	createCanvas(800, 800);
	noLoop();

}

function draw() {

  translate(width / 2, height / 2);
  background(100);
  strokeWeight(1);
  circle(0,0,700);
  var r = 700/2;
  var centerPoint= [0,0];
  var numberOfPoints = 200;
  var arryOfPoints = [];
  var mutlipler = 0.5;

  
  for(let i= 0; i < numberOfPoints; i++){
    let x2 = centerPoint[0] + (r * cos((360/numberOfPoints) * i));
    let y2 = centerPoint[1] + (r * sin((360/numberOfPoints) * i));
    arryOfPoints[i] = [x2,y2];
    fill(color(65));
    
    circle(x2,y2,10);
  }
  print(arryOfPoints);
  fill(color(255, 204, 0)); 
  drawLines(arryOfPoints,numberOfPoints,false,mutlipler,numberOfPoints);
  


}

function drawLines(arr,numOfPoints,randomColors,mutlipler,numberOfPoints){
  
  
  // for every item in the array 
  //   if index (+1) mutliply by 2 is less than the length of arr
  //     use as an index (-1) and connect the two 
  
  for(let i = 0; i<arr.length; i++){
    let nextPoint = ((i+1)*mutlipler);
    if(randomColors){
       stroke(random(0, 220), random(0, 220), random(0, 220));
    }

    line(arr[i][0],arr[i][1],arr[round((nextPoint-1)%numberOfPoints)][0],arr[round((nextPoint-1)%numberOfPoints)][1])
  
  }
  
}
