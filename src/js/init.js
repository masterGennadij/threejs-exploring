import { Scene, Color } from "three";
import createCamera from "./camera";
import createLight from "./light";
import createMeshes from "./mesh";
import createRenderer from "./renderer";
import createControls from "./controls";

const init = () => {
  const container = document.querySelector("#scene-container");

  const scene = new Scene();
  scene.background = new Color("skyblue");

  const camera = createCamera(container);
  createLight(scene);
  createMeshes(scene);
  const renderer = createRenderer(container);
  const controls = createControls(camera, container);

  return { renderer, container, scene, camera, controls };
};

export default init;
