let pointLight1, pointLight2, pointLight3, pointLight4, pointLight5, pointLight6, pointLight7
let ambientLight
let arrowHelper1, arrowHelper2

function createLights(scene) {

    ambientLight = new THREE.AmbientLight(0xe0ffff, 0.6)
    scene.add(ambientLight)

    pointLight1 = new THREE.PointLight(0xe0ffff, 0.1, 20) 
    pointLight1.position.set(2, 5, 0)
    scene.add(pointLight1)
  
    pointLight3 = new THREE.PointLight(0xe0ffff, 0.1, 20) 
    pointLight3.position.set(-10, 5, 7.6)
    scene.add(pointLight3)

    pointLight8 = new THREE.PointLight(0xe0ffff, 0.1, 20) 
    pointLight8.position.set(-10.2, 5, -7.4)
    scene.add(pointLight8)
    
    pointLight4 = new THREE.PointLight(0xe0ffff, 0.1, 50) 
    pointLight4.position.set(-2, 5, 20)
    scene.add(pointLight4)
  
    //here
    pointLight5 = new THREE.PointLight(0xe0ffff, 0.1, 50) 
    pointLight5.position.set(0, 5, -20)
    scene.add(pointLight5)
  
    pointLight6 = new THREE.PointLight(0xe0ffff, 0.1, 20) 
    pointLight6.position.set(10, 5, 0.1)
    scene.add(pointLight6)
  
    pointLight7 = new THREE.PointLight(0xe0ffff, 0.1, 20) 
    pointLight7.position.set(-5, 5, 0)
    scene.add(pointLight7)

    pointLight9 = new THREE.PointLight(0xe0ffff, 0.1, 50) 
    pointLight9.position.set(25, 3, -20)
    scene.add(pointLight9)
  
    pointLight10 = new THREE.PointLight(0xe0ffff, 0.1, 50) 
    pointLight10.position.set(23, 3, 21)
    scene.add(pointLight10)
  
    pointLight11 = new THREE.PointLight(0xe0ffff, 0.1, 50) 
    pointLight11.position.set(-23, 3, 20)
    scene.add(pointLight11)
  
    pointLight12 = new THREE.PointLight(0xe0ffff, 0.1, 50) 
    pointLight12.position.set(-21, 3, -23)
    scene.add(pointLight12)
  }
  
// function createLightHelpers(scene) {
      
//       const pointLightHelper1 = new THREE.PointLightHelper(pointLight1, 1)
//       scene.add(pointLightHelper1)
    
    
//       const pointLightHelper3 = new THREE.PointLightHelper(pointLight3, 1)
//       scene.add(pointLightHelper3)
    
//       const pointLightHelper8 = new THREE.PointLightHelper(pointLight8, 1)
//       scene.add(pointLightHelper8)

//       const pointLightHelper4 = new THREE.PointLightHelper(pointLight4, 1)
//       scene.add(pointLightHelper4)
    
//       const pointLightHelper5 = new THREE.PointLightHelper(pointLight5, 1)
//       scene.add(pointLightHelper5)
    
//       const pointLightHelper6 = new THREE.PointLightHelper(pointLight6, 1)
//       scene.add(pointLightHelper6)
    
//       const pointLightHelper7 = new THREE.PointLightHelper(pointLight7, 1)
//       scene.add(pointLightHelper7)
// }
    