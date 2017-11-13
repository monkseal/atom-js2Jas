const Path = require('path');
const { Workspace } = require('atom');
const Js2jas = require('../lib/js2jas');

describe('js2jas', () =>  {
  let activationPromise = null;
  const currentPath = () => atom.workspace.getActiveTextEditor().getPath();


  // beforeEach(() =>  {
    // atom.commands.dispatch(atom.views.getView(atom.workspace), 'js2jas:toggle-spec-file');
    // waitsForPromise(() =>
    //   activationPromise = atom.packages.activatePackage('js2jas');
    //
    // );

  // });

  describe('when the js2jas:toggle-spec-file event is triggered', () => {
    const file = "Component.jsx";
    beforeEach(() => {
      atom.packages.activatePackage('js2jas');
      waitsForPromise(() => atom.packages.activatePackage('js2jas'));
      waitsForPromise(() =>  atom.workspace.open(file));

    //   atom.workspace.open(file);
    //   const editor = atom.workspace.getActiveTextEditor();
    //   atom.commands.dispatch(atom.views.getView(editor), 'js2jas:toggle-spec-file');
    //   return
    // };
    // }) toggleFile = function(file) {
    });

    it('switches to spec file', () =>  {

      runs(() => {
        const editor = atom.workspace.getActiveTextEditor();
        expect(editor.getPath()).toContain(file)
      });

      // toggleFile('app/javascript/ReactApps/components/Component.jsx');
      // atom.workspace.open(file).

       // runs(() => expect(currentPath()).toBe(Path.join(__dirname, 'fixtures/spec/models/user_spec.rb')));
    })
  });
});
