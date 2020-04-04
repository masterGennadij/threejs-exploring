import { CylinderBufferGeometry, BoxBufferGeometry } from "three";

const createGeometries = () => {
  const nose = new CylinderBufferGeometry(0.75, 0.75, 3, 12);

  const cabin = new BoxBufferGeometry(2, 2.25, 1.5);

  const chimney = new CylinderBufferGeometry(0.3, 0.1, 0.5);

  // we can reuse a single cylinder geometry for all 4 wheels
  const wheel = new CylinderBufferGeometry(0.4, 0.4, 1.75, 16);
  wheel.rotateX(Math.PI / 2);

  return { nose, cabin, chimney, wheel };
};

export default createGeometries;
