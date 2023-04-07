import * as THREE from "three";

function main() {
  const canvas = document.querySelector("#c");
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  const fov = 75;
  const aspect = 2; //
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;
  const scene = new THREE.Scene();

  // этот код для вычисления разрешения для екранов с расширением для
  // дисплеев с высокой плотностью точек на дюйм
  // !! но - это съедает много ресурсов графического процессора, поэтому лучше не использовать
  // 1-й вариант == (но 2-й вариант лучше, так 2-й - более специфичный)
  renderer.setPixelRatio(window.devicePixelRatio);
  // ===============

  // добавляем освещение
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  // cub
  const boxWidth = 1;
  const boxHeight = 1;
  const boxDepth = 1;
  const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

  function makeInstance(geometry, color, x) {
    const material = new THREE.MeshPhongMaterial({ color });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.position.x = x;
    return cube;
  }
  const cubes = [
    makeInstance(geometry, 0x44aa88, 0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844, 2),
  ];

  function resizeRendererToDisplaySize(renderer) {
    // этот код для вычисления разрешения для екранов с расширением для
    // дисплеев с высокой плотностью точек на дюйм
    // !! но - это съедает много ресурсов графического процессора, поэтому лучше не использовать
    // ===== 2-й вариант

    // const canvas = renderer.domElement;
    // const pixelRatio = window.devicePixelRatio;
    // const width = canvas.clientWidth * pixelRatio | 0;
    // const height = canvas.clientHeight * pixelRatio | 0;
    // const needResize = canvas.width !== width || canvas.height !== height;
    // if (needResize) {
    //   renderer.setSize(width, height, false);
    // }
    // return needResize;
    // ====================

    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  // функция для динамического отрендеривания
  function render(time) {
    time *= 0.001; // конвертировать время в секунды
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    cubes.forEach((cube, ndx) => {
      const speed = 1 + ndx * 0.1;
      const rot = time * speed;
      cube.rotation.x = rot;
      cube.rotation.y = rot;
    });
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}

main();
