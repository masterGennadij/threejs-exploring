import { WebGLRenderer, sRGBEncoding } from "three";

const createRenderer = (container) => {
  // create the renderer
  const renderer = new WebGLRenderer({
    antialias: true,
  });

  // set the gamma correction so that output colors look
  // correct on our screens
  renderer.gammaFactor = 2.2;
  renderer.outputEncoding = sRGBEncoding;

  renderer.physicallyCorrectLights = true;

  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // add the automatically created <canvas> element to the page
  container.appendChild(renderer.domElement);

  return renderer;
};

export default createRenderer;
