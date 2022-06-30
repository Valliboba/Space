import * as _ from '../scene/initScene.js';

export default class MainRoom {
    name = "assets/gallery2.glb";
    static colliders = []
    static positionImg = []

    build(gltf, scene) {
        gltf.scene.traverse(child => {
          child.frustumCulled = false;
        
          switch(child.name) {
            case 'walls':
              initWalls(child)
              break
            case 'stairs':
              initStairs(child)
              break
          }
          
          if(child.name.includes('paint')) {
            initFrames(child)
          }
  
          if(child.name.includes('draw')) {
            initDraws(child)
            MainRoom.positionImg.push(child)
          }
          
          if(child.name.includes('Plane')) {
            MainRoom.colliders.push(child)
          }
        }),

        scene.add(gltf.scene)

        MainRoom.colliders.forEach(item => {
          scene.add(item)
        })
    }
}
