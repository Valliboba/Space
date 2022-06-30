let camera, player, activeCamera, raycaster
let speed = 9 
let move = {
  forward: 0,
  turn: 0
}

function createPlayer() {
  const geometry = new THREE.BoxGeometry(1, 2, 1)
  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: true
  })
  player = new THREE.Mesh(geometry, material)
  player.name = 'player'
  geometry.translate(0, 1, 0)
  player.position.set(-27, 0.3, 0)
  //scene.add(player)
}

function createCamera() {
  const back = new THREE.Object3D()
  back.position.set(0, 2, 1)
  back.parent = player
  //player.add(back)
  activeCamera = back
}

function updatePlayer(dt, colliders) {

    const pos = player.position.clone()
    pos.y += 2
    let dir = new THREE.Vector3()
   
    player.getWorldDirection(dir)
    dir.negate()
  
    if (move.forward < 0) dir.negate()
    raycaster = new THREE.Raycaster(pos, dir)
    let blocked = false
  
    if(colliders.length > 0) {
      const intersect = raycaster.intersectObjects(colliders)
      if (intersect.length > 0) {
        if (intersect[0].distance < 1) {
          blocked = true
        }
      }
    }
    
    if(!blocked) {
      if(move.forward !== 0) { 
        if (move.forward > 0) {
          player.translateZ(-dt * speed)
        } else {
          player.translateZ(dt * speed * 0.5)
        }
      }
    }
  
    if(move.turn !== 0) {
      player.rotateY(move.turn * 1.5 * dt)
    }
}
  
function updateCamera(dt) {
  
    camera.position.lerp(
      activeCamera.getWorldPosition(
        new THREE.Vector3()
      ), 
      0.08
    )
    const pos = player.position.clone()
    pos.y += 2 
    camera.lookAt(pos)
}
  