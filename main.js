function preload() {
video= createVideo("video.mp4");
}

function setup() {
canvas= createCanvas(700, 400);
canvas.position(400, 280);
video.hide();
}

function draw() {
image(video, 0, 0, 450, 500);
}
