// ======================
// TEXTURAS
// ======================

const textureLoader =
  new THREE.TextureLoader();
  
  
  const painting1 =
  textureLoader.load(
    "textures/painting1.jpg"
  );

const painting2 =
  textureLoader.load(
    "textures/painting2.jpg"
  );
  const pixel1 =
  textureLoader.load(
    "textures/pixel1.jpg"
  );
const bookCoverTexture =
  textureLoader.load(
    "textures/bookcover.jpg"
  );
const finalSong =
document.getElementById(
"finalSong"
);

finalSong.volume = 0.35;
const pixel2 =
  textureLoader.load(
    "textures/pixel2.jpg"
  );
  const pixel3 =
  textureLoader.load(
    "textures/pixel3.jpg"
  );

const pixel4 =
  textureLoader.load(
    "textures/pixel4.jpg"
  );

const pixel5 =
  textureLoader.load(
    "textures/pixel5.jpg"
  );

const pixel6 =
  textureLoader.load(
    "textures/pixel6.jpg"
  );
  
  const pi1 =
  textureLoader.load(
    "textures/pi1.png"
  );
  
  const pi2 =
  textureLoader.load(
    "textures/pi2.png"
  );

const floorTexture =
  textureLoader.load(
    "textures/marble.jpg"
  );

const wallTexture =
  textureLoader.load(
    "textures/wall.jpg"
  );

const woodTexture =
  textureLoader.load(
    "textures/wood.jpg"
  );
  const grassTexture =
  textureLoader.load(
    "textures/grass.jpg"
  );

grassTexture.wrapS =
  THREE.RepeatWrapping;

grassTexture.wrapT =
  THREE.RepeatWrapping;

grassTexture.repeat.set(
  40,
  40
);
  floorTexture.wrapS =
  THREE.RepeatWrapping;

floorTexture.wrapT =
  THREE.RepeatWrapping;

floorTexture.repeat.set(8, 8);

// paredes
wallTexture.wrapS =
  THREE.RepeatWrapping;

wallTexture.wrapT =
  THREE.RepeatWrapping;

wallTexture.repeat.set(4, 2);

// madera
woodTexture.wrapS =
  THREE.RepeatWrapping;

woodTexture.wrapT =
  THREE.RepeatWrapping;

woodTexture.repeat.set(1, 1);

const scene = new THREE.Scene();

const cubeLoader = new THREE.CubeTextureLoader();

scene.background = cubeLoader.load([
    "textures/sky/right.png",
    "textures/sky/left.png",
    "textures/sky/top.png",
    "textures/sky/bottom.png",
    "textures/sky/front.png",
    "textures/sky/back.png"
]);

;

  scene.fog = new THREE.Fog(
  0xbfdfff,
  60,
  150
);
  
  const loader = new THREE.GLTFLoader();
  const grassLoader = new THREE.GLTFLoader();
const flowerLoader = new THREE.GLTFLoader();
  
const treePositions = [];

const MUSEUM_RADIUS = 45;
const FOREST_RADIUS = 50;
const TREE_SPACING = 18;
const clearings = [
  { x: 0, z: 0, r: 45 } // espacio libre alrededor del museo
];
loader.load("models/butterfly.glb", function(gltf){

    butterflyModel = gltf.scene;

    for(let i = 0; i < 8; i++){

    const butterfly = butterflyModel.clone();

    butterfly.scale.set(0.3, 0.3, 0.3);

    butterfly.position.set(
    10 + Math.random() * 6, // entre X=22 y X=28
    3 + Math.random() * 2,
    -5 + Math.random() * 2
);

    butterfly.userData = {
        angle: Math.random() * Math.PI * 2,
        radius: 1 + Math.random() * 1.5,
        speed: 0.01 + Math.random() * 0.01,
        centerX: butterfly.position.x,
        centerY: butterfly.position.y,
        centerZ: butterfly.position.z
    };

    scene.add(butterfly);
    butterflies.push(butterfly);

}

});
grassLoader.load("models/grass.glb", function(gltf){

  const grassModel = gltf.scene;

  for(let i = 0; i < 200; i++){

    const grass = grassModel.clone();

    const leftSide = Math.random() < 0.5;

let x;

if(leftSide){
    x = -120 + Math.random() * 102;
}else{
    x = 18 + Math.random() * 102;
}

const z = -45 + Math.random() * 75;

    if(
      x > -35 && x < 35 &&
      z > -55 && z < 45
    ) continue;

    const s = 0.8 + Math.random() * 0.6;

    grass.scale.set(s, s, s);

    grass.position.set(x, 0, z);

    grass.rotation.y = Math.random() * Math.PI * 2;

    scene.add(grass);

  }

});
flowerLoader.load("models/flower.glb", function(gltf){

  const flowerModel = gltf.scene;

  for(let i = 0; i < 70; i++){

    const flower = flowerModel.clone();

    const leftSide = Math.random() < 0.5;

let x;

if(leftSide){
    x = -120 + Math.random() * 102;
}else{
    x = 18 + Math.random() * 102;
}

const z = -45 + Math.random() * 75;

    if(
      x > -35 && x < 35 &&
      z > -55 && z < 45
    ) continue;

    const s = 0.7 + Math.random() * 0.5;

    flower.scale.set(s, s, s);

    flower.position.set(x, 0, z);

    flower.rotation.y = Math.random() * Math.PI * 2;

    scene.add(flower);

  }

});
loader.load("models/forest.glb", function (gltf) {

  const treeModel = gltf.scene;

const treePositions = [];

function addTrees(minX, maxX, minZ, maxZ, amount){

  for(let i = 0; i < amount; i++){

    let x, z;
    let valid = false;

    while(!valid){

      x = minX + Math.random() * (maxX - minX);
      z = minZ + Math.random() * (maxZ - minZ);

      valid = true;

      for(const pos of treePositions){

        const dx = x - pos.x;
        const dz = z - pos.z;

        if(Math.sqrt(dx*dx + dz*dz) < 8){
          valid = false;
          break;
        }

      }

    }

    treePositions.push({x,z});

    const tree = treeModel.clone();

    const scale = 8 + Math.random() * 3;

    tree.scale.set(scale, scale, scale);

    tree.position.set(x, 13, z);

    tree.rotation.y = Math.random() * Math.PI * 2;

    scene.add(tree);

  }

}

// Lado izquierdo
addTrees(-120, -18, -45, 30, 5);

// Lado derecho
addTrees(18, 120, -45, 30, 5);

});
for(let i=0;i<250;i++){

  const x = (Math.random()-0.5)*280;
  const z = (Math.random()-0.5)*280;

  if(
    x>-35 && x<35 &&
    z>-55 && z<45
  ) continue;

  const r = Math.random();

  if(r<0.65){

    createGrass(x,z);

  }else if(r<0.90){

    createFlower(x,z);

  }else{

    createRock(x,z);

  }

}

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// ======================
// JUGADOR
// ======================

const player =
  new THREE.Group();

scene.add(player);

player.add(camera);

player.position.set(0, 1.6, 25);

const renderer = new THREE.WebGLRenderer({
  antialias: true
});
renderer.setPixelRatio(
  Math.min(
    window.devicePixelRatio,
    1.2
  )
);
renderer.shadowMap.enabled = true;

renderer.shadowMap.type =
  THREE.BasicShadowMap;

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ======================
// BRAZO IZQUIERDO
// ======================

const armMaterial =
  new THREE.MeshStandardMaterial({
    color: 0xffcc99
  });


// ======================
// BRAZO DERECHO
// ======================






// luz ambiente

const sunLight =
  new THREE.DirectionalLight(
    0xfff2cc,
    0.01
  );

sunLight.position.set(
  -20,
  15,
  10
);

scene.add(sunLight);

const ambientLight =
  new THREE.AmbientLight(
    0xffffff,
    0.4
  );

scene.add(ambientLight);

// luz principal museo
const mainLight =
  new THREE.PointLight(
    0xffeecc,
    30,
    100
  );

mainLight.castShadow = true;
mainLight.shadow.mapSize.width = 1048;
mainLight.shadow.mapSize.height = 1048;

mainLight.shadow.bias = -0.0001;
mainLight.position.set(0, 4, 2);

scene.add(mainLight);
// ======================
// LUCES SALÓN FINAL
// ======================

const finalLightLeft =
  new THREE.PointLight(
    0xffd28a,
    8,
    12
  );

finalLightLeft.position.set(
  -2,
  6,
  -34
);

scene.add(finalLightLeft);

const finalLightRight =
  new THREE.PointLight(
    0xffd28a,
    8,
    12
  );

finalLightRight.position.set(
  2,
  6,
  -34
);

scene.add(finalLightRight);
const light2 =
  new THREE.PointLight(
    0xffeecc,
    20,
    50
  );

light2.position.set(0, 4, 25);

scene.add(light2);

light2.castShadow = true;

const light3 =
  new THREE.PointLight(
    0xffeecc,
    20,
    50
  );

light3.position.set(0, 4, 15);

scene.add(light3);

light3.castShadow = true;

// Piso
const floor = new THREE.Mesh(

  new THREE.PlaneGeometry(20, 60),

  new THREE.MeshStandardMaterial({

  map: floorTexture,
  
  envMapIntensity: 1,

  roughness: 0.25,

  metalness: 0.1

})

);

floor.rotation.x = -Math.PI / 2;
scene.add(floor);
floor.receiveShadow = true;

const devMode = true;
const walls = [];
const doors = [];
const interactables = [];
function createWall(
  width,
  height,
  depth,
  x,
  y,
  z,
  rotY = 0,
  color = 0x999999
) {

  const wall = new THREE.Mesh(

    new THREE.BoxGeometry(
      width,
      height,
      depth
    ),

new THREE.MeshStandardMaterial({

  map: wallTexture,
  
  envMapIntensity: 1,

  roughness: 0.8,

  metalness: 0.05

})

  );

  wall.position.set(x, y, z);

  wall.rotation.y = rotY;
  
wall.castShadow = true;

wall.receiveShadow = true;

  scene.add(wall);

  walls.push(wall);

}
function createStairs(
  x,
  y,
  z
) {

  for (let i = 0; i < 10; i++) {

    const step =
      new THREE.Mesh(

        new THREE.BoxGeometry(
          4,
          0.4,
          1
        ),

        new THREE.MeshStandardMaterial({

          map: wallTexture

        })

      );

    step.position.set(
      x,
      y + i * 0.4,
      z - i
    );

    scene.add(step);

    

  }

}
// ======================
// ESTANTERÍA FINAL
// ======================

// ======================
// ESTANTERÍA ELEGANTE
// ======================

function createBookshelf(x, y, z) {

  const material =
    new THREE.MeshStandardMaterial({
      map: woodTexture
    });

  // Tablero superior
  const top = new THREE.Mesh(
    new THREE.BoxGeometry(3, 0.15, 1),
    material
  );

  top.position.set(x, y + 1, z);
  top.castShadow = true;
  top.receiveShadow = true;
  scene.add(top);

  // Repisa inferior
  const bottom = new THREE.Mesh(
    new THREE.BoxGeometry(3, 0.15, 1),
    material
  );

  bottom.position.set(x, y + 0.2, z);
  bottom.castShadow = true;
  bottom.receiveShadow = true;
  scene.add(bottom);

  // Patas
  const positions = [
    [-1.35, 0.6, -0.35],
    [ 1.35, 0.6, -0.35],
    [-1.35, 0.6,  0.35],
    [ 1.35, 0.6,  0.35]
  ];

  positions.forEach(p => {

    const leg = new THREE.Mesh(

      new THREE.BoxGeometry(
        0.15,
        1.2,
        0.15
      ),

      material

    );

    leg.position.set(
      x + p[0],
      y + p[1],
      z + p[2]
    );

    leg.castShadow = true;
    leg.receiveShadow = true;

    scene.add(leg);

  });

}
// ======================
// LIBRO
// ======================

// ======================
// LIBRO FINAL
// ======================
let butterflyModel;
const butterflies = [];
let finalBook;
let bookCover;
let coverPivot;

function createFinalBook(x, y, z){

  finalBook = new THREE.Group();

  // páginas
  
  const pages = new THREE.Mesh(

    new THREE.BoxGeometry(
      0.88,
      0.08,
      1
    ),

    new THREE.MeshStandardMaterial({
      color: 0xf5f0dc
    })

  );

  pages.castShadow = true;
  pages.receiveShadow = true;
pages.position.x = -0.30;
  finalBook.add(pages);
  const spine = new THREE.Mesh(
  
  new THREE.BoxGeometry(
    0.02, // grosor
    0.08, // altura
    1 // largo
  ),
  
  new THREE.MeshStandardMaterial({
    color: 0x5b2c06
  })
  
);

spine.position.set(
  -0.75,
  0,
  0
);

finalBook.add(spine);

  // tapa
  coverPivot = new THREE.Group();

coverPivot.position.set(
  -0.7,
  0.065,
  0
);

finalBook.add(coverPivot);

bookCover = new THREE.Mesh(

  new THREE.BoxGeometry(
    0.9,
    0.05,
    1
  ),

  new THREE.MeshStandardMaterial({

    map: bookCoverTexture

  })

);

bookCover.position.x = 0.4;

coverPivot.add(bookCover);

  finalBook.position.set(
    x,
    y,
    z
  );

  scene.add(finalBook);

}
const upperFloor =
  new THREE.Mesh(

    new THREE.BoxGeometry(
      12,
      0.5,
      12
    ),

    new THREE.MeshStandardMaterial({

      map: floorTexture

    })

  );

upperFloor.position.set(
  0,
  3.8,
  -30
);
// ======================
// ALFOMBRA ROJA
// ======================

const carpet = new THREE.Mesh(

  new THREE.PlaneGeometry(
    2.2, // ancho
    10   // largo
  ),

  new THREE.MeshStandardMaterial({

    color: 0x8b0000,
    roughness: 0.8

  })

);

carpet.rotation.x = -Math.PI / 2;

// Ajustaremos la posición si hace falta
carpet.position.set(
  0,
  4.06,
  -30
);

carpet.receiveShadow = true;

scene.add(carpet);

upperFloor.receiveShadow = true;

scene.add(upperFloor);
//walls.push(upperFloor);
// ======================
// CREAR CUADRO
// ======================
function createForest(
  minX,
  maxX,
  minZ,
  maxZ,
  amount
){

  for(let i = 0; i < amount; i++){

    const x =
      minX + Math.random() * (maxX - minX);

    const z =
      minZ + Math.random() * (maxZ - minZ);

    // Dejar libre la zona del museo
    if(
      x > -25 &&
      x < 25 &&
      z > -45 &&
      z < 35
    ){
      i--;
      continue;
    }

    const size =
      1.3 + Math.random() * 1.0;

    

  }

}


function createPainting(
  texture,
  x,
  y,
  z,
  rotationY = 0
) {

  // marco
  const frame =
    new THREE.Mesh(

      new THREE.BoxGeometry(
        4.5,
        3.5,
        0.08
      ),

      new THREE.MeshStandardMaterial({
        color: 0x3a2a1a,
        roughness: 0.7
      })

    );

  frame.position.set(x, y, z);

  frame.rotation.y = rotationY;

  scene.add(frame);

  // imagen
  const painting =
    new THREE.Mesh(

      new THREE.PlaneGeometry(
        4,
        3
      ),

      new THREE.MeshStandardMaterial({

        map: texture

      })

    );

  painting.position.set(
    x,
    y,
    z + (
      rotationY === 0
      ? 0.05
      : 0
    )
  );

  if (rotationY !== 0) {

    painting.position.x +=
      Math.sin(rotationY) * 0.05;

    painting.position.z +=
      Math.cos(rotationY) * 0.05;

  }

  painting.rotation.y = rotationY;

  scene.add(painting);

}
const stairsRoof =
  new THREE.Mesh(

    new THREE.BoxGeometry(
      10,
      0.5,
      20
    ),

    new THREE.MeshStandardMaterial({

      map: wallTexture

    })

  );

stairsRoof.position.set(
  0,
  8.5,
  -20
);

scene.add(stairsRoof);
// ======================
// VENTANA
// ======================
  


 

function addLeafCluster(tree, x, y, z, size) {

  const leaves = new THREE.Mesh(

    new THREE.IcosahedronGeometry(size, 1),

    new THREE.MeshStandardMaterial({
      color: 0x2f7d32
    })

  );

  leaves.position.set(x, y, z);

  tree.add(leaves);

}

  // tronco
  




function createRock(x,z){

  const rock = new THREE.Mesh(

    new THREE.DodecahedronGeometry(
      0.45 + Math.random()*0.4
    ),

    new THREE.MeshStandardMaterial({

      color: 0x7b7b7b

    })

  );

  rock.position.set(
    x,
    0.3,
    z
  );

  rock.rotation.set(

    Math.random(),

    Math.random(),

    Math.random()

  );

  scene.add(rock);

}
function createGrass(x, z) {

  const grass = new THREE.Mesh(

    new THREE.PlaneGeometry(0.35, 0.6),

    new THREE.MeshStandardMaterial({
      color: 0x4f9a3a,
      side: THREE.DoubleSide
    })

  );

  grass.position.set(
    x,
    0.3,
    z
  );

  grass.rotation.y = Math.random() * Math.PI;

  scene.add(grass);

}
function createFlower(x, z){

  const colors = [
    0xff69b4,
    0xffff55,
    0xffffff,
    0xaa66ff
  ];

  const stem = new THREE.Mesh(

    new THREE.CylinderGeometry(
      0.02,
      0.02,
      0.45
    ),

    new THREE.MeshStandardMaterial({
      color: 0x228b22
    })

  );

  stem.position.set(
    x,
    0.22,
    z
  );

  scene.add(stem);

  const flower = new THREE.Mesh(

    new THREE.SphereGeometry(
      0.08,
      6,
      6
    ),

    new THREE.MeshStandardMaterial({

      color: colors[
        Math.floor(Math.random()*colors.length)
      ]

    })

  );

  flower.position.set(
    x,
    0.5,
    z
  );

  scene.add(flower);

}
// ======================
// PEDESTAL
// ======================
const upperCeiling =
  new THREE.Mesh(

    new THREE.BoxGeometry(
      12,
      0.5,
      12
    ),

    new THREE.MeshStandardMaterial({

      map: wallTexture

    })

  );

upperCeiling.position.set(
  0,
  8.8,
  -30
);

scene.add(upperCeiling);
function createPedestal(
  texture,
  x,
  z,
  text
) {

  // columna
  const pedestal =
    new THREE.Mesh(

      new THREE.BoxGeometry(
        1.4,
        1.6,
        1.4
      ),

      new THREE.MeshStandardMaterial({

        color: 0xffffff,

        roughness: 0.7

      })

    );

  pedestal.position.set(
    x,
    0.8,
    z
  );

  pedestal.castShadow = true;
  pedestal.receiveShadow = true;

  scene.add(pedestal);

  // imagen flotante
  const art =
    new THREE.Mesh(

      new THREE.PlaneGeometry(
        1.5,
        1.5
      ),

      new THREE.MeshStandardMaterial({

        map: texture,

        transparent: true

      })

    );

  art.position.set(
    x,
    2.4,
    z
  );

  

  scene.add(art);

interactables.push({

  mesh: pedestal,

  art: art,

  texture: texture,

  text: text

});

}
function createDoor(
  width,
  height,
  depth,
  x,
  y,
  z,
  side = "left",
  color = 0x4a2f1b
) {

  // grupo puerta
  const pivot = new THREE.Group();

  pivot.position.set(x, y, z);

  scene.add(pivot);

  // geometría puerta
  const geometry =
    new THREE.BoxGeometry(
      width,
      height,
      depth
    );

const material =
  new THREE.MeshStandardMaterial({

    map: woodTexture,
    
    envMapIntensity: 1,

    roughness: 0.7,

    metalness: 0.1

  });

  const door =
    new THREE.Mesh(
      geometry,
      material
    );

  // posición según bisagra
  if (side === "left") {

    door.position.x = width / 2;

  }

  else {

    door.position.x = -width / 2;

  }

door.castShadow = true;

door.receiveShadow = true;

  pivot.add(door);

  // datos
  pivot.userData.isOpen = false;

  pivot.userData.side = side;

  pivot.userData.openAngle = 0;

  pivot.userData.doorMesh = door;

  doors.push(pivot);

}

// ======================
// TECHO PRINCIPAL
// ======================

const roof = new THREE.Mesh(

  new THREE.BoxGeometry(
    20,
    0.5,
    45
  ),

  new THREE.MeshStandardMaterial({
    color: 0xffffff
  })

);

roof.position.set(0, 5.5, 12);

scene.add(roof);

// ======================
// MUSEO PRINCIPAL
// ======================

// fondo izquierda
createWall(
  6, 10, 0.5,
  -5, 2.5, -10
);

// fondo derecha
createWall(
  6, 10, 0.5,
  5, 2.5, -10
);

// marco superior
createWall(
  4, 1, 0.5,
  0, 4, -10
);

// puerta fondo
createDoor(
  4, 4, 0.2,
  -2, 2, -10
);

// arriba ventana
createWall(
  0.5, 2, 20,
  -8, 4.5, 0
);

// abajo ventana
createWall(
  0.5, 2, 20,
  -8, 1, 0
);

// frente ventana
createWall(
  0.5, 2, 5,
  -8, 3, -7.5
);

// centro
createWall(
  0.5, 2, 4,
  -8, 3, 0
);

// atrás
createWall(
  0.5, 2, 5,
  -8, 3, 7.5
);

// arriba ventana
createWall(
  0.5, 2, 20,
  8, 4.5, 0
);

// abajo ventana
createWall(
  0.5, 2, 20,
  8, 1, 0
);

// frente ventana
createWall(
  0.5, 2, 5,
  8, 3, -7.5
);

// centro
createWall(
  0.5, 2, 4,
  8, 3, 0
);

// atrás
createWall(
  0.5, 2, 5,
  8, 3, 7.5
);

// entrada izquierda
createWall(
  6, 10, 0.5,
  -5, 2.5, 10
);

// entrada derecha
createWall(
  6, 10, 0.5,
  5, 2.5, 10
);

// marco superior puerta
createWall(
  -6, 3, 0.5,
  0, 5.5, 50
);

// puertas
createDoor(
  2, 5, 0.2,
  -2, 2, 10,
  "left"
);

createDoor(
  2, 5, 0.2,
  2, 2, 10,
  "right"
);

// techo entrada
createWall(
  6, 1, 0.5,
  0, 5, 10
);




createFlower(-8,0);
createFlower(-8.5,1);
createFlower(-8.5,-1);

createFlower(8,0);
createFlower(8.5,1);
createFlower(8.5,-1);

createRock(-19, -21);
createRock(-21, -19);

createRock(21, -16);
createRock(19, -14);

createRock(-14, 19);

createRock(24, 11);


// ======================
// SALA ESCALERAS
// ======================

// izquierda
createWall(
  3, 15, 0.5,
  -3.5, 2.5, -20
);

// derecha
createWall(
  3, 15, 0.5,
  3.5, 2.5, -20
);

// arriba




// pared izquierda
createWall(
  0.5, 15, 10,
  -5, 2.5, -15
);

// pared derecha
createWall(
  0.5, 15, 10,
  5, 2.5, -15
);
createStairs(
  0,
  0.2,
  -15
);
// ======================
// CUADROS EN ESCALERAS
// ======================

// Pared izquierda
createPainting(
  pi2,
  -4.7,   // x
  4,    // altura
  -15,    // z
  Math.PI / 2
);


// Pared derecha
createPainting(
  pi1,
  4.7,
  4,
  -15,
  -Math.PI / 2
);

createBookshelf(
  0,
  4.10,
  -35
);
// pared fondo
createWall(
  12, 5, 0.5,
  0, 6.3, -36
);

// pared izquierda
createWall(
  0.5, 5, 12,
  -6, 6.3, -30
);

// pared derecha
createWall(
  0.5, 5, 12,
  6, 6.3, -30
);
createWall(
  4, 1, 0.5,
  0, 8, -24
);
createWall(
  1, 5, 0.5,
  -2.5, 6.3, -24
);

createWall(
  1, 5, 0.5,
  2.5, 6.3, -24
);
// lateral izquierdo entrada
createWall(
  4, 5, 0.5,
  -5, 6.3, -24
);

// lateral derecho entrada
createWall(
  4, 5, 0.5,
  5, 6.3, -24
);

// marco superior entrada
createWall(
  8, 1, 0.5,
  0, 8.3, -24
);
// pared izquierda escalera
createWall(
  0.5, 15, 4,
  -2.5, 2.5, -22
);

// pared derecha escalera
createWall(
  0.5, 15, 4,
  2.5, 2.5, -22
);
// ======================
// PEDESTALES
// ======================

// fila 1
createPedestal(
  pixel1,
  -4,
  3,
  "Cuando me pasaste esta foto me encantó, estás toda hermosa y tierna, no sé que me hiciste para que me tengas asi mirando esta foto siempre"
);

createPedestal(
  pixel2,
  0,
  3,
  "Esta foto me encanta, fue en el dia que salimos del club de entrenar y fuimos a comer unos panchitos juntos 💝😽🌸"
);

createPedestal(
  pixel3,
  4,
  3,
  "Cuando fuiste a mi casa y probamos cambiar de género, todo un gay mi amor"
);

// fila 2

createPedestal(
  pixel4,
  -4,
  -3,
  "El dia de mi cumpleaños, me puse feliz porque habías ido, y estabas tan preciosa como una princesa"
);

createPedestal(
  pixel5,
  0,
  -3,
  "Esta foto me gustó y quise agregarlo acá, aparte nos vemos re god"
);

createPedestal(
  pixel6,
  4,
  -3,
  "Me encanta como dormías y te tuve que sacar una foto, te ves muy bonita, adorable como mi bebé, ganas de llenarte a besos pero no te quería despertar "
);
// ======================
// CUADROS ENTRADA
// ======================

// izquierda
createPainting(
  painting1,
  -3.7,
  2.2,
  25,
  Math.PI / 2
);

// derecha
createPainting(
  painting2,
  3.7,
  2.2,
  25,
  -Math.PI / 2
);
// ======================
// PASILLO
// ======================

// ======================
// PUERTA INTERIOR
// ======================

// marco izquierdo
createWall(
  2, 10, 0.5,
  -3, 2.5, 20
);

// marco derecho
createWall(
  2, 10, 0.5,
  3, 2.5, 20
);

// marco superior
createWall(
  4, 2, 0.5,
  0, 5, 20
);

// puerta
createDoor(
  4, 4, 0.2,
  -2, 2, 20
);
// izquierda
createWall(
  0.5, 10, 20,
  -4, 2.5, 20
);

// derecha
createWall(
  0.5, 10, 20,
  4, 2.5, 20
);

// fondo
createWall(
  8, 10, 0.5,
  0, 2.5, 30
);
createFinalBook(
  0,
  5.25,
  -35
);

// ======================
// EXTERIOR
// ======================

const outsideFloor =
  new THREE.Mesh(

    new THREE.PlaneGeometry(
      300,
      300
    ),

    new THREE.MeshStandardMaterial({

  map: grassTexture

})
  );

outsideFloor.rotation.x =
  -Math.PI / 2;

outsideFloor.position.y =
  -0.01;

outsideFloor.receiveShadow =
  true;

scene.add(outsideFloor);
// ======================
// VENTANAS
// ======================

// izquierda

// ======================
// JOYSTICK ANALÓGICO
// ======================

const joystick = document.getElementById("joystick");

let moveX = 0;
let moveY = 0;

joystick.addEventListener("touchmove", (e) => {

  e.preventDefault();

  const touch = e.touches[0];
  const rect = joystick.getBoundingClientRect();

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  let x = touch.clientX - rect.left - centerX;
  let y = touch.clientY - rect.top - centerY;

  const maxDistance = 50;

  const distance = Math.sqrt(x * x + y * y);

  if (distance > maxDistance) {
    x = (x / distance) * maxDistance;
    y = (y / distance) * maxDistance;
  }

  // valores entre -1 y 1
  moveX = x / maxDistance;
  moveY = y / maxDistance;

});

joystick.addEventListener("touchend", () => {

  moveX = 0;
  moveY = 0;

});


// ======================
// ROTACIÓN FPS REAL
// ======================

let yaw = 0;   // izquierda/derecha
let pitch = 0; // arriba/abajo

// ======================
// MULTITOUCH FPS
// ======================

let previousTouchX = null;
let previousTouchY = null;

document.addEventListener("touchstart", (e) => {

  for (let touch of e.touches) {

    // dedo derecho controla cámara
    if (touch.clientX > window.innerWidth / 2) {

      previousTouchX = touch.clientX;
      previousTouchY = touch.clientY;

    }

  }

});

document.addEventListener("touchmove", (e) => {

  for (let touch of e.touches) {

    // SOLO lado derecho mueve cámara
    if (touch.clientX > window.innerWidth / 2) {

      if (previousTouchX !== null) {

        const deltaX =
          touch.clientX - previousTouchX;

        const deltaY =
          touch.clientY - previousTouchY;

        // sensibilidad
        targetYaw -= deltaX * 0.004;

targetPitch -= deltaY * 0.004;

        // límite vertical
        const limit = Math.PI / 2 - 0.1;
        
        targetPitch = Math.max(
  -limit,
  Math.min(limit, targetPitch)
);

        pitch = Math.max(
          -limit,
          Math.min(limit, pitch)
        );

      }

      previousTouchX = touch.clientX;
      previousTouchY = touch.clientY;

    }

  }

});

document.addEventListener("touchend", () => {

  previousTouchX = null;
  previousTouchY = null;

});

// aplicar rotación FPS
camera.rotation.order = "YXZ";
camera.rotation.y = yaw;
camera.rotation.x = pitch;
camera.rotation.z = 0;

// ======================
// MOVIMIENTO FPS
// ======================
// ======================
// INTERACTUAR PUERTAS
// ======================

document.addEventListener("dblclick", () => {

  for (const door of doors) {

    const distance =
      player.position.distanceTo(
        door.position
      );

    if (distance < 3) {

      door.userData.isOpen =
        !door.userData.isOpen;

    }

  }

});
let walkTime = 0;
let targetYaw = 0;

let targetPitch = 0;
// ======================
// LIBRO FINAL
// ======================
let bookOpenAmount = 0;


let cinematicState = 0;
let cinematicTimer = 0;
// ======================
// TEXTO CARTA
// ======================

const finalMessage =
`Hola mi bebé hermosa, es la primera vez que hago un tipo juego para alguien, creo que es lo mas largo que hice, aparte que también la hacia re larga pero bueno, quiero que sepas lo mucho que te adoro, te aprecio, te anhelo, te admiro y sobre todo lo mucho que te amo, gracias por llegar a mi vida, se que tenemos diferencias, pensamos distinto en algunas cosas pero aun asi no veo el motivo para no amarte mas de lo que te amo, gracias por sacarme sonrisas, por amarme, por aguantarme, por tenerme paciencia, por soportar algunas cosas mías. Realmente te mereces demasiadas cosas y yo quiero ser el que te de eso, perdón por lo que pasaste conmigo y por lo que pase, mi corazón siempre te va a pertenecer y mi alma siempre te seguirá, sos una mujer increíble, inteligente, carismática, divertida, hermosa, inigualable, unica, perfecta. Tengo tantas palabras para decirte pero con esto ya digo mucho de lo que siento por vos. Me da cosa algunas veces no poder invitarte a desayunar algun lado o ir de viaje por ahi, muchas cosas dan ganas de hacer con vos pero por el momento me detiene, aun asi quiero seguir enamorandote todos los días, semanas, meses, años, siempre. Y la canción que va a sonar cuando cerres esto te la dedico 😽💝. Las fotos que viste son los recuerdos que me gustaron y pienso, más adelante quiero crear mas recuerdos con vos y hacer uno mejor. Aun me acuerdo el dia que te conocí por primera vez, tan sociable y divertida, hablando, conversadora y tan hermosa, no dejaba de mirarte me acuerdo, igual que las veces que te veía, nunca dejas de estar tan preciosa. Me encanta estar con vos, abrazarte, darte besos, darte cariñito, escucharte, verte, tocarte, tenés unos ojos preciosos, un pelo brillante, un cuerpo increíble, una carita tierna, piernas encantadoras, todo de vos me encanta. Estoy feliz de estar con vos y voy a estarlo toda mi vida siempre que estes conmigo y nunca me sueltes la mano, realmente me haces bien. Otra cosa que quiero pedirte es que cuando termine la canción, cerres los ojos. 😽`;

let letterIndex = 0;
let nearBook = false;
let bookOpened = false;
let bookCinematic = false;
let cinematicTarget =
  new THREE.Vector3(
    0,
    5.6,
    -33.8
  );
const interactBtn =
  document.getElementById(
    "interactBtn"
  );

let currentInteractable = null;
const artViewer =
  document.getElementById(
    "artViewer"
  );
  const bookLetter =
document.getElementById(
"bookLetter"
);

const letterText =
document.getElementById(
"letterText"
);
const closeBookBtn =
document.getElementById(
"closeBookBtn"
);
closeBookBtn.addEventListener(
  "click",
  () => {
    finalSong.play();

    bookLetter.style.display =
      "none";

    closeBookBtn.style.display =
      "none";

    bookCinematic = false;

    bookOpened = false;

    bookOpenAmount = 0;

    if (coverPivot) {

      coverPivot.rotation.z = 0;

    }

  }
);

const artImage =
  document.getElementById(
    "artImage"
  );

const artText =
  document.getElementById(
    "artText"
  );

const closeArt =
  document.getElementById(
    "closeArt"
  );
function animate() {

  requestAnimationFrame(animate);

  const speed =
  bookCinematic ? 0 : 0.20;

// aplicar rotación FPS
camera.rotation.order = "YXZ";
camera.rotation.y = yaw;
camera.rotation.x = pitch;
camera.rotation.z = 0;
  // dirección frontal
  const forward = new THREE.Vector3();

  camera.getWorldDirection(forward);

  forward.y = 0;
  forward.normalize();

  // dirección lateral
  const right = new THREE.Vector3();

  right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

// ======================
// MOVIMIENTO + COLISIONES
// ======================



const movement = new THREE.Vector3();

// adelante/atrás
movement.add(
  forward.clone().multiplyScalar(-moveY * speed)
);

// izquierda/derecha
movement.add(
  right.clone().multiplyScalar(moveX * speed)
);

const isMoving =
  movement.length() > 0.001;
// ======================
// MOVIMIENTO + SLIDING
// ======================

const tryPosition =
  player.position.clone().add(movement);
  


// hitbox jugador
function playerBox(pos) {

  return new THREE.Box3(

    new THREE.Vector3(
      pos.x - 0.3,
      pos.y - 1.6,
      pos.z - 0.3
    ),

    new THREE.Vector3(
      pos.x + 0.3,
      pos.y + 0.2,
      pos.z + 0.3
    )

  );

}
interactBtn.addEventListener(
  "click",
  () => {

if (nearBook && !bookOpened) {

  bookOpened = true;
  bookCinematic = true;

  cinematicState = 1;
  cinematicTimer = 0;

  return;

}

    

    // ===== PEDESTALES =====
    if (!currentInteractable)
      return;

    artViewer.style.display =
      "flex";

    artImage.src =
      currentInteractable.art
      .material.map.image.currentSrc;

    artText.innerText =
      currentInteractable.text;

  }
);
closeArt.addEventListener(
  "click",
  () => {

    artViewer.style.display =
      "none";

  }
);


// detectar choque
function collides(pos) {

  const pBox = playerBox(pos);

  // paredes
  for (const wall of walls) {

    const wallBox =
      new THREE.Box3().setFromObject(wall);

    if (wallBox.intersectsBox(pBox)) {

      return true;

    }

  }

  // puertas
  for (const door of doors) {

    if (door.userData.isOpen) continue;

    const mesh =
      door.userData.doorMesh;

    mesh.updateWorldMatrix(
      true,
      false
    );

    const doorBox =
      new THREE.Box3()
      .setFromObject(mesh);

    if (doorBox.intersectsBox(pBox)) {

      return true;

    }

  }

  return false;

}

// mover completo
if ( devMode || !collides(tryPosition)) {

  player.position.copy(tryPosition);
if (
  player.position.z < -14 &&
  player.position.z > -24 &&
  Math.abs(player.position.x) < 2
) {

  // escalera
  player.position.y =
    1.6 +
    (-14 - player.position.z) * 0.2;

}

else if (
  player.position.z <= -24
) {

  // segundo piso
  player.position.y = 4.05;

}

else {

  // planta baja
  player.position.y = 1.6;

}
}

// sliding X
else {

  const slideX =
    player.position.clone();

  slideX.x += movement.x;

  if (!collides(slideX)) {

    player.position.x =
      slideX.x;

  }

  const slideZ =
    player.position.clone();

  slideZ.z += movement.z;

  if (!collides(slideZ)) {

    player.position.z =
      slideZ.z;

  }

}

// ======================
// ANIMAR PUERTAS
// ======================

for (const door of doors) {

  let targetAngle = 0;

  if (door.userData.isOpen) {

    if (door.userData.side === "left") {

      targetAngle = -Math.PI / 2;

    }

    else {

      targetAngle = Math.PI / 2;

    }

  }

  door.rotation.y +=
    (targetAngle - door.rotation.y) * 0.08;

// ======================
// HEAD BOB
// ======================

if (isMoving) {

  walkTime += 0.12;

  // subir/bajar
  camera.position.y =
    1.6 +
    Math.sin(walkTime * 2) * 0.03;

  // inclinación lateral
  camera.rotation.z =
    Math.sin(walkTime) * 0.01;

}

else {

  // volver suave
  camera.position.y +=
    (1.6 - camera.position.y)
    * 1;

  camera.rotation.z +=
    (0 - camera.rotation.z)
    * 0.1;

}
// ======================
// SUAVIZADO CÁMARA
// ======================

yaw +=
  (targetYaw - yaw) * 0.1;

pitch +=
  (targetPitch - pitch) * 0.1;
}
// ======================
// INTERACCIÓN
// ======================

currentInteractable = null;

for (const item of interactables) {

  const distance =
    player.position.distanceTo(
      item.mesh.position
    );

  if (distance < 2.5) {

    currentInteractable = item;

  }

}

if (currentInteractable) {

  interactBtn.style.display =
    "block";

}

else {

  interactBtn.style.display =
    "none";
for (const item of interactables) {

  interactables.forEach(item => {

  item.art.lookAt(
    player.position.x,
    item.art.position.y,
    player.position.z
  );
});
}
// ======================
// DETECTAR LIBRO
// ======================

nearBook = false;

if (finalBook && !bookOpened) {

  const distance =
    player.position.distanceTo(
      finalBook.position
    );

  if (distance < 2.2) {

    nearBook = true;

  }

}
if (nearBook) {

  interactBtn.style.display =
    "block";

  interactBtn.innerText =
    "📖 Abrir libro";

}
// ======================
// CINEMÁTICA LIBRO
// ======================

if (bookCinematic) {

  player.position.lerp(

    cinematicTarget,

    0.03

  );

}

// ======================
// ABRIR LIBRO
// ======================

if (bookCinematic && bookCover) {

  bookOpenAmount +=
    (Math.PI / 3 - bookOpenAmount)
    * 0.05;

  
coverPivot.rotation.z =
  bookOpenAmount;

}
// ======================
// CONTROL CINEMÁTICA
// ======================

if (bookCinematic) {

  cinematicTimer++;

  switch (cinematicState) {

    case 1:

  player.position.lerp(
    cinematicTarget,
    0.03
  );

  camera.lookAt(
    finalBook.position
  );

  // PRUEBA: pasar automáticamente al estado 2
  if (cinematicTimer > 120) {

    console.log("PASÓ A ESTADO 2");

    cinematicState = 2;
    cinematicTimer = 0;

  }

  break;

case 2:

  if (cinematicTimer > 30) {

    console.log("MOSTRANDO CARTA");

    bookLetter.style.display = "flex";

    letterIndex = 0;
    letterText.innerText = "";

    cinematicState = 3;
    cinematicTimer = 0;

  }

  break;
case 3:

  if (
    letterIndex <
    finalMessage.length
  ) {

    letterText.innerText =
      finalMessage.substring(
        0,
        letterIndex
      );

    letterIndex++;

  }
  else{

    closeBookBtn.style.display =
      "block";

  }

  break;
  }


}
if(finalBook){

  finalBook.position.y =
    5.3 + Math.sin(Date.now()*0.0015)*0.03;

}
butterflies.forEach((b) => {

    b.userData.angle += b.userData.speed;

    b.position.x = b.userData.centerX + Math.cos(b.userData.angle) * b.userData.radius;
    b.position.z = b.userData.centerZ + Math.sin(b.userData.angle) * 0.8;
    b.position.y = b.userData.centerY + Math.sin(b.userData.angle * 3) * 0.2;

    b.rotation.y = -b.userData.angle;

});
}

  renderer.render(scene, camera);
}

animate();

console.log(player.position.y);

// Responsive
window.addEventListener("resize", () => {

  camera.aspect =
    window.innerWidth / window.innerHeight;

  camera.updateProjectionMatrix();

  renderer.setSize(
    window.innerWidth,
    window.innerHeight
  );

});