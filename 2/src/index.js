import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
const wrapper = document.getElementById("wrapper");

const width = wrapper.getBoundingClientRect().width;
const height = wrapper.getBoundingClientRect().height;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
wrapper.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}

//эта проверка на случай, если браузер не поддерживает функционал библиотеки
// а именно - результат вызова функции WebGL.isWebGLAvailable()
// дает нам такую проверку
if (WebGL.isWebGLAvailable()) {
  // Initiate function or other initializations here
  animate();
} else {
  const warning = WebGL.getWebGLErrorMessage();
  document.getElementById("container").appendChild(warning);
}
