import MainRoom from "../../js/models/MainRoom.js";

let positionImg = MainRoom.positionImg
let sell = document.getElementById("sell");
// var raycaster = new THREE.Raycaster();
// var mouse = new THREE.Vector3();

export default class Modal {
    static sell() {
        for (var i = 0; i < positionImg.length; i++) {
            console.log('x '  + raycaster.ray.origin.x)
            console.log('z ' + raycaster.ray.origin.z)
            if (
                (parseInt(raycaster.ray.origin.x) === parseInt(positionImg[i].position.x) && parseInt(raycaster.ray.origin.z) <= parseInt(positionImg[i].position.z + 4)) ||
                (parseInt(raycaster.ray.origin.x) === parseInt(positionImg[i].position.x + 2) && parseInt(raycaster.ray.origin.z) === parseInt(positionImg[i].position.z)) ||
                (parseInt(raycaster.ray.origin.x + 2) === parseInt(positionImg[i].position.x) && parseInt(raycaster.ray.origin.z) === parseInt(positionImg[i].position.z))
            ) {
                sell.setAttribute("href", links[i]), 
                sell.classList.remove("hidden");
                break;
            }
            sell.classList.add("hidden");
        }
    }
}
