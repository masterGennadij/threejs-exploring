import {
  MeshStandardMaterial,
  BoxBufferGeometry,
  TextureLoader,
  sRGBEncoding,
  Group,
  Mesh,
} from "three";
import createMaterials from "./materials";
import createGeometries from "./geometries";

// Textures
import textureSrc from "../textures/grass.jpg";

const createMeshes = (scene) => {
  // create a geometry
  const geometry = new BoxBufferGeometry(20, 0.1, 20);

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
    color: 0x6fb76f,
  });

  // create a Mesh containing the geometry and material
  const brick = new Mesh(geometry, material);
  brick.position.y = -0.95;

  scene.add(brick);

  // create a Group to hold the pieces of the train
  const trainGroup = new Group();
  scene.add(trainGroup);

  const materials = createMaterials();
  const geometries = createGeometries();

  const nose = new Mesh(geometries.nose, materials.body);
  nose.rotation.z = Math.PI / 2;
  nose.position.x = -1;

  const cabin = new Mesh(geometries.cabin, materials.body);
  cabin.position.set(1.5, 0.4, 0);

  const chimney = new Mesh(geometries.chimney, materials.detail);
  chimney.position.set(-2, 0.9, 0);

  const smallWheelRear = new Mesh(geometries.wheel, materials.detail);
  smallWheelRear.position.set(0, -0.5, 0);

  const smallWheelCenter = smallWheelRear.clone();
  smallWheelCenter.position.x = -1;

  const smallWheelFront = smallWheelRear.clone();
  smallWheelFront.position.x = -2;

  const bigWheel = smallWheelRear.clone();
  bigWheel.scale.set(2, 2, 1.25);
  bigWheel.position.set(1.5, -0.1, 0);

  trainGroup.add(
    nose,
    cabin,
    chimney,

    smallWheelRear,
    smallWheelCenter,
    smallWheelFront,
    bigWheel
  );
};

export default createMeshes;
