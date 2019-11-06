import { Engine, Render, World, Bodies } from 'matter-js';

const engine = Engine.create();

const render = Render.create({
  element: document.body,
  engine: engine
});

var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(400, 610, 910, 40, { isStatic: true });

// Add all of the bodies to the world.
World.add(engine.world, [boxA, boxB, ground]);


// Engine..
Engine.run(engine);

// Draw everything to canvas.
Render.run(render);