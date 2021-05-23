const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;
const boxes=[];
const boxes1=[];
const boxes2=[];
const boxes3=[];
const boxes4=[];
const boxes5=[];
const boxes6=[];
const boxes7=[];

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  let canvas = createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(200,800,250);
  rope = new Rope(hero.body, { x: 300, y: 50 });
  monster = new Monster(1100,550,300);

  for (let i = 0; i < 10; i++) {
		boxes[i] = new Box(560, 400 - i * 200, 40, 40);
	}
  for (let i = 0; i < 11; i++) {
		boxes1[i] = new Box(600, 400 - i * 300, 40, 40);
	}
  for (let i = 0; i < 12; i++) {
		boxes2[i] = new Box(640, 400 - i * 400, 40, 40);
	}
  for (let i = 0; i < 13; i++) {
		boxes3[i] = new Box(680, 400 - i * 500, 40, 40);
	}
  for (let i = 0; i < 13; i++) {
		boxes4[i] = new Box(720, 400 - i * 600, 40, 40);
	}
  for (let i = 0; i < 12; i++) {
		boxes5[i] = new Box(760, 400 - i * 700, 40, 40);
	}
  for (let i = 0; i < 11; i++) {
		boxes6[i] = new Box(800, 400 - i * 800, 40, 40);
	}
  for (let i = 0; i < 10; i++) {
		boxes7[i] = new Box(840, 400 - i * 900, 40, 40);
	}


  const mouse = Mouse.create(canvas.elt);
  const options = {
    mouse: mouse
  };

  // A fix for HiDPI displays
  mouse.pixelRatio = pixelDensity();
  let mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

  hero.display();
  rope.display();
  monster.display();

  for (let box of boxes) {
		box.display();
	}
  for (let box of boxes1) {
		box.display();
	}
  for (let box of boxes2) {
		box.display();
	}
  for (let box of boxes3) {
		box.display();
	}
  for (let box of boxes4) {
		box.display();
	}
  for (let box of boxes5) {
		box.display();
	}
  for (let box of boxes6) {
		box.display();
	}
  for (let box of boxes7) {
		box.display();
	}

}
