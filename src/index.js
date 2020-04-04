import { Clock } from "three";
import throttle from "lodash.throttle";
import init from "./js/init";

// Styles
import "./styles/base.css";

const { renderer, scene, camera, container, animationMixers } = init();

const clock = new Clock();

// a function that will be called every time the window gets resized.
// It can get called a lot, so don't put any heavy computation in here!
const onWindowResize = throttle(() => {
  // set the aspect ratio to match the new browser window aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;

  // update the camera's frustum
  camera.updateProjectionMatrix();

  // update the size of the renderer AND the canvas
  renderer.setSize(container.clientWidth, container.clientHeight);
}, 300);

const update = () => {
  const delta = clock.getDelta();

  for (const mixer of animationMixers) {
    mixer.update(delta);
  }
};

const render = () => {
  renderer.render(scene, camera);
};

const play = () => {
  renderer.setAnimationLoop(() => {
    update();
    render();
  });
};

const stop = () => renderer.setAnimationLoop(null);

window.addEventListener("resize", onWindowResize);

play();
