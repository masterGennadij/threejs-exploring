//import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const createControls = (camera, container) => {
  const controls = new OrbitControls(camera, container);

  return controls;
};

export default createControls;
