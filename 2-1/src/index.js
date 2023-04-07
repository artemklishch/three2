import * as THREE from "three";

function main() {
  const canvas = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  const fov = 75;
  const aspect = 2; //
  const near = 0.1;
  const far = 5;
  // fov сокращение от field of view, поле зрения. В этом случае 75 градусов в вертикальном измерении.
  // aspect это соотношение сторон холста (англ. aspect ratio). Мы рассмотрим детали в другой статье, но по умолчанию холст имеет размер 300x150 пикселей, значит соотношение сторон 300/150 или 2.
  // near и far представляют пространство перед камерой, которое будет отображаться. Все, что находится до или после этого диапазона, будет обрезано (не нарисовано).
  // Эти 4 параметра определяют усеченную пирамиду "frustum". Frustum это название 3D фигуры, напоминающей пирамиду с отсеченной верхушкой.
  // Другими словами, думайте о слове "frustum" как о трехмерной фигуре, такой как сфера, куб и призма.
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  // Мы поместим наш куб в начало координат (origin), поэтому нам нужно немного отодвинуть камеру назад, чтобы что-то увидеть.
  camera.position.z = 2;
  const scene = new THREE.Scene();
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  // const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 }); // MeshBasicMaterial - нее восприимчив к свету
  const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  renderer.render(scene, camera);

  // добавляем освещение
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  // функция для динамического отрендеривания
  function render(time) {
    time *= 0.001; // конвертировать время в секунды
    cube.rotation.x = time;
    cube.rotation.y = time;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

main();
