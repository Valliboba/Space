import MainRoom from '../js/models/MainRoom.js';
import Modal from '../js/scene/modal.js';

let VR = false
let colliders = MainRoom.colliders;

const scene = new THREE.Scene()
const clock = new THREE.Clock()

const renderer = new THREE.WebGLRenderer({ antialias: false })
const effect = new THREE.StereoEffect(renderer); 

async function init() {

  createScene()
  createLights(scene)
  createPlayer()
  createCamera()
  createJoyStick()  
  createEvents(() => { VR = !VR; onResize()})

  await loadObject()
  await render()

  

}

/// loading 3D objects pipeline
async function loadObject()
{
  [
    new MainRoom(),
  ]
  .forEach(async (model) => {
    await loadModel(model.name, (gltf) => model.build(gltf, scene));
  })

}
  

async function loadModel(url, parameters)
{
  // TODO FIX THIS? noooo, localStorage - для слабаков
  const loader = new THREE.GLTFLoader()
  loader.crossOrigin = true;

  await THREE.Cache.add(url, loader.load(url, parameters));
}

function createScene() {
  renderer.outputEncoding = THREE.sRGBEncoding
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  
  //VR
  renderer.setPixelRatio(window.devicePixelRatio); 
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 5000)
  camera.position.set(-10, 2, 10)
  effect.setSize(window.innerWidth, window.innerHeight); 
  //

  const container = document.querySelector('#container')
  container.appendChild(renderer.domElement)

  window.addEventListener('resize', onResize)
}

async function onResize() {
  const w = window.innerWidth
  const h = window.innerHeight
  camera.aspect = w / h
  await camera.updateProjectionMatrix()
  renderer.setSize(w, h)
}  

function update(dt) {
  updatePlayer(dt, colliders)
  updateCamera(dt)
}

async function render() {
  const dt = clock.getDelta()
  update(dt);
  
  if (VR) {
    effect.render(scene, camera);
  } 
  else{
    await renderer.render(scene, camera)
  }
  Modal.sell()
  window.requestAnimationFrame(render)
}

init()