const touchEnabled = !!('ontouchstart' in window)

class JoyStick {
  
  constructor(options) {
    this.createDom()
    this.maxRadius = options.maxRadius || 40
    this.maxRadiusSquared = this.maxRadius *　this.maxRadius
    this.onMove = options.onMove
    this.game = options.game
    this.origin = {
      left: this.domElement.offsetLeft,
      top: this.domElement.offsetTop
    }
    console.log(this.origin)
    this.rotationDamping = options.rotationDamping || 0.06
    this.moveDamping = options.moveDamping || 0.01
    this.createEvent()
  }

  createEvent() {
    const joystick = this
    if(touchEnabled) {
      this.domElement.addEventListener('touchstart', function(e) {
        if (e.cancelable) e.preventDefault();
        joystick.tap(e)
        e.stopPropagation()
      })
    } else {
      this.domElement.addEventListener('mousedown', function(e) {
        if (e.cancelable) e.preventDefault();
        joystick.tap(e)
        e.stopPropagation()
      })
    }
  }

  getMousePosition(e) {
    let clientX = e.targetTouches ? e.targetTouches[0].pageX : e.clientX
		let clientY = e.targetTouches ? e.targetTouches[0].pageY : e.clientY
		return {
      x:clientX, 
      y:clientY
    }
  }

  tap(e) {
    this.offset = this.getMousePosition(e)
    const joystick = this
    this.onTouchMoved = function(e) {
      //e.preventDefault()
      joystick.move(e)
    }
    this.onTouchEnded = function(e) {
      //e.preventDefault()
      joystick.up(e)
    }
    if(touchEnabled) {
      //{ passive: false }
      document.addEventListener('touchmove', this.onTouchMoved, { passive: false })
      document.addEventListener('touchend', this.onTouchEnded, { passive: false })
    } else {
      document.addEventListener('mousemove', this.onTouchMoved, { passive: false })
      document.addEventListener('mouseup', this.onTouchEnded, { passive: false })
    }
  }

  move(e) {
		const mouse = this.getMousePosition(e)

		let left = mouse.x - this.offset.x
		let top = mouse.y - this.offset.y

		const sqMag = left * left + top * top

		if (sqMag > this.maxRadiusSquared){
			const magnitude = Math.sqrt(sqMag)
			left /= magnitude 
			top /= magnitude
			left *= this.maxRadius
			top *= this.maxRadius
		}

		this.domElement.style.top = `${ top + this.domElement.clientHeight / 2 }px`
		this.domElement.style.left = `${ left + this.domElement.clientWidth / 2 }px`
		
		const forward = -(top - this.origin.top + this.domElement.clientHeight / 2) / this.maxRadius
		const turn = (left - this.origin.left + this.domElement.clientWidth / 2) / this.maxRadius

    if(this.onMove) {
      this.onMove(forward, turn)
    }

  }

  up(e) {
		if (touchEnabled){
      document.removeEventListener('touchmove', this.onTouchMoved)
      document.removeEventListener('touchend', this.onTouchEned)
		}else{
			document.removeEventListener('mousemove', this.onTouchMoved)
      document.removeEventListener('mouseup', this.onTouchEned)
		}
		this.domElement.style.top = `${this.origin.top}px`
		this.domElement.style.left = `${this.origin.left}px`
    if(this.onMove) {
      this.onMove(0, 0)
    }
	}


  createDom() {
  

    const circle = document.createElement('div')
    circle.className = "circle";

    const thumb = document.createElement('div')
    thumb.className = 'thumb';
    
    circle.appendChild(thumb)
    document.body.appendChild(circle)
    this.domElement = thumb
  }
}

function createJoyStick() {
  new JoyStick({
    onMove: function(forward, turn) {
      turn = -turn
      if(Math.abs(forward) < 0.3) forward = 0
      if(Math.abs(turn) < 0.1) turn = 0
      move.forward = forward 
      move.turn = turn 
    }
  })
}