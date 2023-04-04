import * as THREE from "three";
import WebGL from "three/addons/capabilities/WebGL.js";
const wrapper = document.getElementById("wrapper");

// scene, camera, renderer ===== start
const width = wrapper.getBoundingClientRect().width;
const height = wrapper.getBoundingClientRect().height;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.set(0, 0, 100);
camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
wrapper.appendChild(renderer.domElement);
// scene, camera, renderer ===== end

// creating the figure - geometry, material ====== start
const points = []; // координаты точек на канвасе
points.push(new THREE.Vector3(-10, 0, 0));
points.push(new THREE.Vector3(0, 10, 0));
points.push(new THREE.Vector3(10, 0, 0));
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
const line = new THREE.Line( geometry, material );
scene.add( line );
renderer.render( scene, camera );
// creating the figure - geometry, material ====== start

// run the animation ==== start
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }
// if (WebGL.isWebGLAvailable()) {
//   animate();
// } else {
//   const warning = WebGL.getWebGLErrorMessage();
//   document.getElementById("container").appendChild(warning);
// }
// run the animation ==== end
