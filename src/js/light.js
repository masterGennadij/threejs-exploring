import { HemisphereLight, DirectionalLight } from "three";

const createLight = (scene) => {
  const ambientLight = new HemisphereLight(0xddeeff, 0x0f0e0d, 5);

  const mainLight = new DirectionalLight(0xffffff, 5);
  mainLight.position.set(10, 10, 10);

  scene.add(ambientLight, mainLight);
};

export default createLight;
