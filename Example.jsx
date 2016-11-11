import TyperWrapper from "./typer.jsx";
import * as React from "react";
import {render} from "react-dom";
render(
  <div>
   <TyperWrapper words={["Hello!","Bonjour!","你好!","Kamusta!","Cześć!","こんにちは!","नमस्ते!"]} delay={5000} />
  </div>,document.querySelector(".mount"))