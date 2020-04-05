import { HemisphereLight, DirectionalLight, AmbientLight } from "three";

const createLight = (scene) => {
  const hemisphereLight = new HemisphereLight(0xddeeff, 0x0f0e0d, 5);
  const ambientLight = new AmbientLight(0x404040, 7);

  const mainLight = new DirectionalLight(0xffffff, 5);
  mainLight.position.set(10, 10, 10);

  scene.add(ambientLight);
};

export default createLight;
