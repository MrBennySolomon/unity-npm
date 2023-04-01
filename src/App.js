import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import './App.css';

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Build/Test.loader.js",
    dataUrl: "/Build/Test.data.unityweb",
    frameworkUrl: "/Build/Test.framework.js.unityweb",
    codeUrl: "/Build/Test.wasm.unityweb",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default App;