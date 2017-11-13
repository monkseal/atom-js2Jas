let Js2Jas;
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
(Js2Jas =
class Js2Jas {
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

  findSpecFile(path) {
    for (let specPath of Array.from(this.specPaths)) {
      const file = this.getSpecFile(path, specPath);
      if (fs.existsSync(file)) { return file; }
    }
    return this.getSpecFile(path, this.specDefault);
  }

  // getSpecFile(path, specPath) {
  //   let newPath;
  //   if (path.match(/\.js$/)) {
  //     path = path.replace(/\.js$/, "Spec.js");
  //   } else {
  //     path = path + "Spec.js";
  //   }
  // 
  //   if (path.match(/^\/app\//)) {
  //     newPath = path.replace(/^\/app\//, `/${specPath}/`);
  //   } else {
  //     newPath = path.replace(/^\/lib\//, `/${specPath}/lib/`);
  //   }
  //   return Path.join(this.root, newPath);
  // }
  // 

});
