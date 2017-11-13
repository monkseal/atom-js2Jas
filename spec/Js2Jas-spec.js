"use babel";
import Path from "path";

import Js2Jas from "../lib/Js2Jas";

// Use the command `window:run-package-specs` (cmd-alt-ctrl-p) to run specs.
//
// To run a specific `it` or `describe` block add an `f` to the front (e.g. `fit`
// or `fdescribe`). Remove the `f` to unfocus the block.
describe("Js2Jas", () =>  {
  const rootPath = Path.join(__dirname, "fixtures");
  const js2Jas = new Js2Jas(rootPath, "spec");
  
  const jsFile = Path.join(rootPath, "app/javascript/ReactApps/containers/Container1.js");
  const jsFileSpec = Path.join(rootPath, "spec/javascript/ReactApps/containers/Container1Spec.js");
  const jsxFile = Path.join(rootPath, "app/javascript/ReactApps/components/Component.jsx");
  const jsxFileSpec = Path.join(rootPath, "spec/javascript/ReactApps/components/ComponentSpec.jsx");
  
  describe("getJsFile", () => {
    it("returns js file", () => {
      expect(js2Jas.getJsFile("/spec/javascript/RunSpec.js")).toBe("/app/javascript/Run.js");
    });

    it("returns js file", () => {
      expect(js2Jas.getJsFile(jsFileSpec)).toBe(jsFile);
    });
    
    it("returns jsx file", () =>  {
      expect(js2Jas.getJsFile(jsxFileSpec)).toBe(jsxFile);
    });
  })
      
  describe("getSpecFile", () => {
    it("returns spec file", () => {
      expect(js2Jas.getSpecFile("/app/javascript/Run.js")).toBe("/spec/javascript/RunSpec.js");
    });
    
    it("returns spec js file", () => {
      expect(js2Jas.getSpecFile(jsFile)).toBe(jsFileSpec);
    });
    
    it("returns spec jsx file", () =>  {
      expect(js2Jas.getSpecFile(jsxFile)).toBe(jsxFileSpec);
    });
  })
      
  describe("toggleSpecFile", () =>  {
    
    it("returns spec file for tested file", () =>  {
      expect(js2Jas.toggleSpecFile(jsFile)).toBe(jsFileSpec);
      expect(js2Jas.toggleSpecFile(jsxFile)).toBe(jsxFileSpec);
    });
    it("returns tested file for spec file", () =>  {
      expect(js2Jas.toggleSpecFile(jsFileSpec)).toBe(jsFile);
      expect(js2Jas.toggleSpecFile(jsxFileSpec)).toBe(jsxFile);
    });
  });
});
  
  