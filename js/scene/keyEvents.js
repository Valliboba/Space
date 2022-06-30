let turnSpeed = 2;

function keyEventHandle(event, up, left, right, down) {
  switch ( event.code ) {
    case 'ArrowUp':
    case 'KeyW':
      move.forward = up
      break

    case 'ArrowLeft':
    case 'KeyA':
      move.turn = left
      break

    case 'ArrowDown':
    case 'KeyS':
      move.forward = down
      break

    case 'ArrowRight':
    case 'KeyD':
      move.turn = right
      break

  }
}

function createEvents(event) {
    document.getElementById('VR').addEventListener('click', event); // VR

    document.addEventListener('keydown', 
      (event) => keyEventHandle(event, 1, turnSpeed, -turnSpeed, -1)) //onKeyDown)

    document.addEventListener('keyup', 
      (event) => keyEventHandle(event, 0, 0, 0, 0)) //onKeyUp)
      
    document.addEventListener('visibilitychange', () => {
      if(!document.hasFocus())
      {
        move.turn = 0
        move.forward = 0
      }
    });
}