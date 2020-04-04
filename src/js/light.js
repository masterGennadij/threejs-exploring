import { HemisphereLight, DirectionalLight } from "three";

const createLight = (scene) => {
  const mainLight = new DirectionalLight(0xffffff, 5);
  mainLight.position.set(10, 10, 10);

  const ambientLight = new HemisphereLight(
    0xddeeff, // bright sky color
    0x202020, // dim ground color
    5 // intensity
  );

  scene.add(mainLight, ambientLight);
};

export default createLight;
