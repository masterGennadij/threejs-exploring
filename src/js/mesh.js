import {
  MeshStandardMaterial,
  BoxBufferGeometry,
  TextureLoader,
  sRGBEncoding,
  Mesh,
} from "three";
import textureSrc from "../textures/uv_test_bw.png";

const createMeshes = (scene) => {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // create a texture loader.
  const textureLoader = new TextureLoader();

  // Load a texture. See the note in chapter 4 on working locally, or the page
  // https://threejs.org/docs/#manual/introduction/How-to-run-things-locally
  // if you run into problems here
  const texture = textureLoader.load(textureSrc);

  // set the "color space" of the texture
  texture.encoding = sRGBEncoding;

  // reduce blurring at glancing angles
  texture.anisotropy = 16;

  // create a default (white) Basic material
  const material = new MeshStandardMaterial({
    map: texture,
  });

  // create a Mesh containing the geometry and material
  const mesh = new Mesh(geometry, material);

  scene.add(mesh);

  return mesh;
};

export default createMeshes;
