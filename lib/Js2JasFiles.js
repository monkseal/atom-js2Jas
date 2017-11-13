let Js2JasFiles;
const fs = require("fs");
const Path = require("path");
// 
const supportedPathsReg = paths => new RegExp(`^\/(app|${paths.join("|")})\/`, "i");
const specAppPathsReg = paths => new RegExp(`^\/(${paths.join('|')})\/`, 'i');
const specAppPathReg = path => new RegExp(`^\/(${path})\/`, 'i');
const replaceLast = (str, what, replacement) => {
  return reverse(reverse(str).replace(new RegExp(reverse(what)), reverse(replacement)));
};

const reverse = (str) => {
  return str.split('').reverse().join('')
};

module.exports =
(Js2JasFiles =
class Js2JasFiles {
  constructor(root, specPath) {
    this.root = root;
    this.specPath = specPath;
  }

  toggleSpecFile(file) {
    // return "";
    // const relativePath = file.substring(this.root.length);
    // if (!relativePath.match(supportedPathsReg(this.specPaths))) { return null; }
    // console.log("relativePath => " + relativePath)
    if (file.match(/Spec\.(js|jsx)$/)) {
      return this.getJsFile(file);
    } else {
      return this.getSpecFile(file);
    }
  }

  getJsFile(path) {
    let jsPath = path.replace(/Spec(\.js|\.jsx)$/, "$1");
    return replaceLast(jsPath, "/spec/", "/app/" )
  }
  
  getSpecFile(path) {
    let jsPath = path.replace(/(\.js|\.jsx)$/, "Spec$1");
    return replaceLast(jsPath, "/app/", "/spec/" )
  }

});
