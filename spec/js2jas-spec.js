const Path = require('path');
const { Workspace } = require('atom');
const Js2jas = require('../lib/js2jas');

describe('js2jas', () =>  {
  let activationPromise = null;
  const currentPath = () => atom.workspace.getActiveTextEditor().getPath();

  describe('when the js2jas:toggle-spec-file event is triggered', () => {
    const file = "Component.jsx";
    beforeEach(() => {
      atom.packages.activatePackage('js2jas');
      waitsForPromise(() =>  atom.workspace.open(file));

    });

    it('switches to spec file', () =>  {
      runs(() => {
        const editor = atom.workspace.getActiveTextEditor();
        const editorView = atom.views.getView(editor)
        atom.commands.dispatch(editorView, 'js2jas:toggle-spec-file')
        expect(atom.workspace.getActiveTextEditor().getPath()).toContain("Component.jsx")
      });
    })
  });
});
