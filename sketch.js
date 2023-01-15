let brick, brick_x, brick_y;
let score = 0;
let paddle_x, paddle_y, paddle_dx, paddle_width, paddle_height;
let ball_x, ball_y, width, ball_diameter, ball_dx, ball_dy;

function setup() {
  createCanvas(400, 400);
  background("black");
  paddle_width = 100;
  score = 0;
  width = 400;
  paddle_x = width / 2 - paddle_width / 2;
  paddle_y = height - 20;
  paddle_height = 20;

  ball_diameter = 20;
  ball_dx = 1;
  ball_dy = 5;
  paddle_dx = 4;
  ball_x = width / 2 - ball_diameter / 2;
  ball_y = height / 2 - ball_diameter / 2;

  brick_width = 300;
  brick_height = 20;
  brick_x = width / 2 - brick_width / 2;
  brick_y = height - 300;
}

function draw() {
  background("black");

  if (ball_x - ball_diameter / 2 < 0) {
    ball_dx = -ball_dx;
  }

  if (ball_y - ball_diameter / 2 < 0) {
    ball_dy = -ball_dy;
  }

  if (ball_x + ball_diameter / 2 > width) {
    ball_dx = -ball_dx;
  }

  if (ball_y + ball_diameter / 2 > height) {
    ball_dy = -ball_dy;
  }

  if (ball_y + ball_diameter / 2 == height) {
    gameover();
  }

  ball_x = ball_x + ball_dx;
  ball_y = ball_y + ball_dy;

  if (keyIsDown(LEFT_ARROW)) {
    if (paddle_x >= 0) paddle_x = paddle_x - paddle_dx;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    if (paddle_x + paddle_width <= width) paddle_x = paddle_x + paddle_dx;
  }

  if (
    ball_x < paddle_x + paddle_width &&
    ball_y < paddle_y + paddle_height / 2 &&
    ball_x > paddle_x &&
    ball_y + ball_diameter / 2 > paddle_y
  ) {
    ball_dy = -ball_dy;
  }

  if (
    ball_x < brick_x + brick_width &&
    ball_y < brick_y + brick_height / 2 &&
    ball_x > brick_x &&
    ball_y + ball_diameter / 2 > brick_y
  ) {
    invisibleBrick();
    score += 10;
    ball_dy = -ball_dy;
  }

  circle(ball_x, ball_y, ball_diameter);
  rect(paddle_x, paddle_y, paddle_width, paddle_height);
  rect(brick_x, brick_y, brick_width, brick_height);
  fill(255);
  updateScore();
}
function gameover() {
  score += 0;
  setup();
}

function invisibleBrick() {
  brick_x = -brick_width;
  brick_y = -brick_height;
}

function updateScore() {
  textSize(15);
  text("Score : " + score, 300, 25);
}
