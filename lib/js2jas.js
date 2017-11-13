'use babel';

import { CompositeDisposable } from 'atom';
import Js2JasFiles from "./Js2JasFiles";

module.exports = {
  config: {
    specPath: {
      type: 'string',
      default: 'spec'
    }
  },

  activate(state) {
    return atom.commands.add('atom-text-editor',
      {'js2jas:toggle-spec-file': event => this.toggleSpecFile()});
  },

  toggleSpecFile() {
    const editor = atom.workspace.getActiveTextEditor();
    const specPath = atom.config.get('js2jas.specPath');
    const root = atom.project.getPaths()[0];
    const file = new Js2JasFiles(root, specPath).toggleSpecFile(editor.getPath());
    if (file != null) { return atom.workspace.open(file); }
  }
};
