import {
  MeshStandardMaterial,
  TextureLoader,
  sRGBEncoding,
  DoubleSide,
} from "three";

import backTextureSrc from "../textures/skybox/negx.jpg"; //correct
import bottomTextureSrc from "../textures/skybox/negy.jpg"; // correct
import frontTextureSrc from "../textures/skybox/posx.jpg";
import leftTextureSrc from "../textures/skybox/posz.jpg"; //correct
import rightTextureSrc from "../textures/skybox/negz.jpg";
import topTextureSrc from "../textures/skybox/posy.jpg"; //correct

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

  const textureLoader = new TextureLoader();

  const backTexture = textureLoader.load(backTextureSrc);
  const bottomTexture = textureLoader.load(bottomTextureSrc);
  const frontTexture = textureLoader.load(frontTextureSrc);
  const leftTexture = textureLoader.load(leftTextureSrc);
  const rightTexture = textureLoader.load(rightTextureSrc);
  const topTexture = textureLoader.load(topTextureSrc);

  backTexture.encoding = sRGBEncoding;
  bottomTexture.encoding = sRGBEncoding;
  frontTexture.encoding = sRGBEncoding;
  leftTexture.encoding = sRGBEncoding;
  rightTexture.encoding = sRGBEncoding;
  topTexture.encoding = sRGBEncoding;

  const cubeFrontSideMaterial = new MeshStandardMaterial({
    map: frontTexture,
    side: DoubleSide,
  });

  const cubeBackSideMaterial = cubeFrontSideMaterial.clone();
  cubeBackSideMaterial.setValues({ map: backTexture, side: DoubleSide });

  const cubeTopSideMaterial = cubeFrontSideMaterial.clone();
  cubeTopSideMaterial.setValues({ map: topTexture, side: DoubleSide });

  const cubeBottomSideMaterial = cubeFrontSideMaterial.clone();
  cubeBottomSideMaterial.setValues({ map: bottomTexture, side: DoubleSide });

  const cubeLeftSideMaterial = cubeFrontSideMaterial.clone();
  cubeLeftSideMaterial.setValues({ map: leftTexture, side: DoubleSide });

  const cubeRightSideMaterial = cubeFrontSideMaterial.clone();
  cubeRightSideMaterial.setValues({ map: rightTexture, side: DoubleSide });

  const cubeMaterials = [
    cubeFrontSideMaterial,
    cubeBackSideMaterial,
    cubeTopSideMaterial,
    cubeBottomSideMaterial,
    cubeLeftSideMaterial,
    cubeRightSideMaterial,
  ];

  return {
    body,
    detail,
    cubeMaterials,
  };
};

export default createMaterals;
