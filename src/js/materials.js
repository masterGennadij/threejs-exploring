import { MeshStandardMaterial } from "three";

const createMaterals = () => {
  const body = new MeshStandardMaterial({
    color: 0xff3333, // red
    flatShading: true,
  });

  // just as with textures, we need to put colors into linear color space
  body.color.convertSRGBToLinear();

  const detail = new MeshStandardMaterial({
    color: 0x333333, // darkgrey
    flatShading: true,
  });

  detail.color.convertSRGBToLinear();

  return {
    body,
    detail,
  };
};

export default createMaterals;
