/**
 * @description 
 *
 * @package
 * @author Alex
 */

"use strict";


const express = require("express")
const app = express();

app.get("/", (req, res)=>{
  res.end("Hello World")
})

app.listen(80)

console.log("Open server ok port 80")