import * as THREE from "three";

// BoxGeometry
// function main() {
//   const canvas = document.createElement("canvas");
//   canvas.classList.add("c");
//   canvas.style.width = "100%";
//   document.body.appendChild(canvas);

//   const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
//   const scene = new THREE.Scene();
//   const fov = 75;
//   const aspect = 2;
//   const near = 0.1;
//   const far = 5;
//   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//   camera.position.z = 2;

//   // light
//   // start ===
//   const color = 0xffffff;
//   const intensity = 1;
//   const light = new THREE.DirectionalLight(color, intensity);
//   light.position.set(-1, 2, 4);
//   scene.add(light);
//   // end ===

//   const figureWidth = 1;
//   const figureHeight = 1;
//   const figureDeepth = 1;
//   const widthSegments = 4;
//   const heightSegments = 4;
//   const depthSegments = 4;
//   const geometry = new THREE.BoxGeometry(
//     figureWidth,
//     figureHeight,
//     figureDeepth,
//     widthSegments, // внутренние сегменты - особенно полезно, если будет неправильная форма
//     heightSegments, // последние три аргумента опционально
//     depthSegments //
//   );
//   const material = new THREE.MeshPhongMaterial({ color: "red" });
//   const figure = new THREE.Mesh(geometry, material);
//   scene.add(figure);

//   function resizeRendererToDisplaySize(renderer) {
//     const canvas = renderer.domElement;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     const needResize = canvas.width !== width || canvas.height !== height;
//     if (needResize) {
//       renderer.setSize(width, height, false);
//     }
//     return needResize;
//   }

//   const render = (time) => {
//     const changedTime = time * 0.0005;
//     if (resizeRendererToDisplaySize(renderer)) {
//       const canvas = renderer.domElement;
//       camera.aspect = canvas.clientWidth / canvas.clientHeight;
//       camera.updateProjectionMatrix();
//     }
//     figure.rotation.x = changedTime;
//     figure.rotation.y = changedTime;
//     renderer.render(scene, camera);
//     requestAnimationFrame(render);
//   };
//   requestAnimationFrame(render);
// }
// =========================

// CircleGeometry ================
// function main() {
//   const canvas = document.createElement("canvas");
//   canvas.classList.add("c");
//   canvas.style.width = "100%";
//   document.body.appendChild(canvas);

//   const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
//   const scene = new THREE.Scene();
//   const fov = 105;
//   const aspect = 2;
//   const near = 0.1;
//   const far = 5;
//   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//   camera.position.z = 2;

//   // light
//   // start ===
//   const color = 0xffffff;
//   const intensity = 1;
//   const light = new THREE.DirectionalLight(color, intensity);
//   light.position.set(-1, 2, 4);
//   scene.add(light);
//   // end ===

//   const radius = 1;
//   const segments = 54;
//   const thetaStart = Math.PI * 0.25; // это отрезает часть круга
//   const thetaLength = Math.PI * 1.5;
//   const geometry = new THREE.CircleGeometry(
//     radius,
//     segments,
//     thetaStart, // последние два аргумента опционально
//     thetaLength
//   );
//   const material = new THREE.MeshPhongMaterial({ color: "red" });
//   const figure = new THREE.Mesh(geometry, material);
//   scene.add(figure);

//   function resizeRendererToDisplaySize(renderer) {
//     const canvas = renderer.domElement;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     const needResize = canvas.width !== width || canvas.height !== height;
//     if (needResize) {
//       renderer.setSize(width, height, false);
//     }
//     return needResize;
//   }

//   const render = (time) => {
//     const changedTime = time * 0.0005;
//     if (resizeRendererToDisplaySize(renderer)) {
//       const canvas = renderer.domElement;
//       camera.aspect = canvas.clientWidth / canvas.clientHeight;
//       camera.updateProjectionMatrix();
//     }
//     figure.rotation.x = changedTime;
//     figure.rotation.y = changedTime;
//     renderer.render(scene, camera);
//     requestAnimationFrame(render);
//   };
//   requestAnimationFrame(render);
// }
// ===============

// ConeGeometry ==============
// function main() {
//   const canvas = document.createElement("canvas");
//   canvas.classList.add("c");
//   canvas.style.width = "100%";
//   document.body.appendChild(canvas);

//   const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
//   const scene = new THREE.Scene();
//   const fov = 105;
//   const aspect = 2;
//   const near = 0.1;
//   const far = 5;
//   const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
//   camera.position.z = 2;

//   // light
//   // start ===
//   const color = 0xffffff;
//   const intensity = 1;
//   const light = new THREE.DirectionalLight(color, intensity);
//   light.position.set(-1, 2, 4);
//   scene.add(light);
//   // end ===

//   const radius = 1;
//   const height = 2;
//   const radialSegments = 56;
//   const heightSegments = 2;
//   const openEnded = true;
//   const thetaStart = Math.PI * 0.25; // это отрезает часть круга
//   const thetaLength = Math.PI * 1.5;
//   const geometry = new THREE.ConeGeometry(
//     radius,
//     height,
//     radialSegments,
//     heightSegments, // аргументы опционально
//     openEnded,
//     thetaStart,
//     thetaLength
//   );
//   const material = new THREE.MeshPhongMaterial({ color: "red" });
//   const figure = new THREE.Mesh(geometry, material);
//   scene.add(figure);

//   function resizeRendererToDisplaySize(renderer) {
//     const canvas = renderer.domElement;
//     const width = canvas.clientWidth;
//     const height = canvas.clientHeight;
//     const needResize = canvas.width !== width || canvas.height !== height;
//     if (needResize) {
//       renderer.setSize(width, height, false);
//     }
//     return needResize;
//   }

//   const render = (time) => {
//     const changedTime = time * 0.0005;
//     if (resizeRendererToDisplaySize(renderer)) {
//       const canvas = renderer.domElement;
//       camera.aspect = canvas.clientWidth / canvas.clientHeight;
//       camera.updateProjectionMatrix();
//     }
//     figure.rotation.x = changedTime;
//     figure.rotation.y = changedTime;
//     renderer.render(scene, camera);
//     requestAnimationFrame(render);
//   };
//   requestAnimationFrame(render);
// }

// CylinderGeometru
function main() {
  const canvas = document.createElement("canvas");
  canvas.classList.add("c");
  canvas.style.width = "100%";
  document.body.appendChild(canvas);

  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas }); // alpha: true white background color
  // renderer.setClearColor( 0xffffff, 0); // background color
  const scene = new THREE.Scene();
  // scene.background = new THREE.Color( 0xff0000 ); // background color
  const fov = 105;
  const aspect = 2;
  const near = 0.1;
  const far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  // light
  // start ===
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);
  // end ===

  const radiusTop = 1;
  const radiusBottom = 1;
  const height = 2;
  const radialSegments = 52;
  const heightSegments = 2;
  const openEnded = false;
  const thetaStart = Math.PI * 0.55;
  const thetaLength = Math.PI * 1.5;
  const geometry = new THREE.CylinderGeometry(
    radiusTop,
    radiusBottom,
    height,
    radialSegments,
    heightSegments, // optional args
    openEnded,
    thetaStart,
    thetaLength
  );
  const material = new THREE.MeshPhongMaterial({ color: "red" });
  const figure = new THREE.Mesh(geometry, material);
  scene.add(figure);

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  const render = (time) => {
    const changedTime = time * 0.0005;
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    figure.rotation.x = changedTime;
    figure.rotation.y = changedTime;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
}

main();
