import { PerspectiveCamera, Math as ThreeMath, Vector3 } from "three";

const createCamera = (container) => {
  // Create a Camera
  const fieldOfView = 35; // AKA Field of View
  const aspect = container.clientWidth / container.clientHeight;
  const near = 0.1; // the near clipping plane
  const far = 1000; // the far clipping plane

  const camera = new PerspectiveCamera(fieldOfView, aspect, near, far);

  // every object is initially created at ( 0, 0, 0 )
  camera.position.set(0, 5, -20);

  return camera;
};

export default createCamera;
