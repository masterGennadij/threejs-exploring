import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AnimationMixer, Vector3, Math as ThreeMath } from "three";
import parrotModel from "../models/Parrot.glb";
import flamingoModel from "../models/Flamingo.glb";
import storkModel from "../models/Stork.glb";

const loadModels = (scene) => {
  const loader = new GLTFLoader();
  const mixers = [];

  // A reusable function to set up the models. We're passing in a position parameter
  // so that they can be individually placed around the scene
  const onLoad = (modelObj, position) => {
    const model = modelObj.scene.children[0];
    model.position.copy(position);
    model.scale.set(0.04, 0.04, 0.04);
    model.rotation.y = ThreeMath.degToRad(270);

    const animation = modelObj.animations[0];

    const mixer = new AnimationMixer(model);
    mixers.push(mixer);

    const action = mixer.clipAction(animation);
    action.play();

    scene.add(model);
  };

  // the loader will report the loading progress to this function
  const onProgress = ({ loaded, total }) => {
    //console.log(`loaded ${loaded} / ${total}`);
  };

  // the loader will send any error messages to this function, and we'll log
  // them to to console
  const onError = (error) => {
    console.log(error);
  };

  // load the first model. Each model is loaded asynchronously,
  // so don't make any assumption about which one will finish loading first
  const parrotPosition = new Vector3(0, 4, 2.5);
  loader.load(
    parrotModel,
    (modelObj) => onLoad(modelObj, parrotPosition),
    onProgress,
    onError
  );

  const flamingoPosition = new Vector3(5.5, 3, -3);
  loader.load(
    flamingoModel,
    (gltf) => onLoad(gltf, flamingoPosition),
    onProgress,
    onError
  );

  const storkPosition = new Vector3(0, 3.5, -7);
  loader.load(
    storkModel,
    (gltf) => onLoad(gltf, storkPosition),
    onProgress,
    onError
  );

  return mixers;
};

export default loadModels;
