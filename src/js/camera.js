import { PerspectiveCamera } from "three";

const createCamera = (container) => {
  // Create a Camera
  const fieldOfView = 35; // AKA Field of View
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1; // the near clipping plane
  const far = 100; // the far clipping plane

  const camera = new PerspectiveCamera(fieldOfView, aspect, near, far);

  // every object is initially created at ( 0, 0, 0 )
  // we'll move the camera back a bit so that we can view the scene
  camera.position.set(-5, 5, 7);

  return camera;
};

export default createCamera;
