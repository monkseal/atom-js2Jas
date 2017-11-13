"use babel";
import Path from "path";

import Js2JasFiles from "../lib/Js2JasFiles";

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.
describe("Js2JasFiles", () =>  {
  const rootPath = Path.join(__dirname, "fixtures");
  const js2JasFiles = new Js2JasFiles(rootPath, "spec");
  
  const jsFile = Path.join(rootPath, "app/javascript/ReactApps/containers/Container1.js");
  const jsFileSpec = Path.join(rootPath, "spec/javascript/ReactApps/containers/Container1Spec.js");
  const jsxFile = Path.join(rootPath, "app/javascript/ReactApps/components/Component.jsx");
  const jsxFileSpec = Path.join(rootPath, "spec/javascript/ReactApps/components/ComponentSpec.jsx");
  
  describe("getJsFile", () => {
    it("returns js file", () => {
      expect(js2JasFiles.getJsFile("/spec/javascript/RunSpec.js")).toBe("/app/javascript/Run.js");
    });

    it("returns js file", () => {
      expect(js2JasFiles.getJsFile(jsFileSpec)).toBe(jsFile);
    });
    
    it("returns jsx file", () =>  {
      expect(js2JasFiles.getJsFile(jsxFileSpec)).toBe(jsxFile);
    });
  })
      
  describe("getSpecFile", () => {
    it("returns spec file", () => {
      expect(js2JasFiles.getSpecFile("/app/javascript/Run.js")).toBe("/spec/javascript/RunSpec.js");
    });
    
    it("returns spec js file", () => {
      expect(js2JasFiles.getSpecFile(jsFile)).toBe(jsFileSpec);
    });
    
    it("returns spec jsx file", () =>  {
      expect(js2JasFiles.getSpecFile(jsxFile)).toBe(jsxFileSpec);
    });
  })
      
  describe("toggleSpecFile", () =>  {
    
    it("returns spec file for tested file", () =>  {
      expect(js2JasFiles.toggleSpecFile(jsFile)).toBe(jsFileSpec);
      expect(js2JasFiles.toggleSpecFile(jsxFile)).toBe(jsxFileSpec);
    });
    
    it("returns tested file for spec file", () =>  {
      expect(js2JasFiles.toggleSpecFile(jsFileSpec)).toBe(jsFile);
      expect(js2JasFiles.toggleSpecFile(jsxFileSpec)).toBe(jsxFile);
    });
  });
});
  
  