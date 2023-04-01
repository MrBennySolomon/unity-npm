import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import './App.css';

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Build/Test2.loader.js",
    dataUrl: "/Build/Test2.data.unityweb",
    frameworkUrl: "/Build/Test2.framework.js.unityweb",
    codeUrl: "/Build/Test2.wasm.unityweb",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default App;