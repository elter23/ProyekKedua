// Matter.js setup
const { Engine, Render, Runner, Bodies, World, Events, Mouse, MouseConstraint } = Matter;
const engine = Engine.create();
const world = engine.world;
const width = 800, height = 600;
const render = Render.create({
    element: document.body,
    engine: engine,
    canvas: document.getElementById('world'),
    options: {
        width: width,
        height: height,
        wireframes: false,
        background: 'transparent'
    }
});

// Buat ground dan dinding
const ground = Bodies.rectangle(width/2, height-30, width, 60, { isStatic: true, render: { fillStyle: 'rgba(0,0,0,0)' } });
const wallLeft = Bodies.rectangle(-30, height/2, 60, height, { isStatic: true, render: { fillStyle: 'rgba(0,0,0,0)' } });
const wallRight = Bodies.rectangle(width+30, height/2, 60, height, { isStatic: true, render: { fillStyle: 'rgba(0,0,0,0)' } });

// Buat "box" untuk video
const box = Bodies.rectangle(width/2, 100, 200, 200, { restitution: 0.5, render: { fillStyle: 'rgba(0,0,0,0)' } });
World.add(world, [ground, wallLeft, wallRight, box]);

// Tambahkan mouse control
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.2,
        render: { visible: false }
    }
});
World.add(world, mouseConstraint);
render.mouse = mouse;

Engine.run(engine);
Render.run(render);

// Sinkronkan posisi video dengan box Matter.js
const video = document.getElementById('amiya-video');
Events.on(engine, 'afterUpdate', function() {
    video.style.left = (box.position.x - 100) + 'px';
    video.style.top = (box.position.y - 100) + 'px';
});