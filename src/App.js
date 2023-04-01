import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import './App.css';

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Build/final-1.loader.js",
    dataUrl: "/Build/final-1.data.unityweb",
    frameworkUrl: "/Build/final-1.framework.js.unityweb",
    codeUrl: "/Build/final-1.wasm.unityweb",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default App;