define(function(require, exports, module) {
    var View          = require('famous/core/View');
    var Surface       = require('famous/core/Surface');
    var Transform     = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    // constructor
    function TestView() {
        View.apply(this, arguments);

        createIcon.call(this);
        createTitle.call(this);
        createSubtitle.call(this);
        createBackground.call(this);
    }

    // prototype
    TestView.prototype = Object.create(View.prototype);
    TestView.prototype.constructor = TestView;

    // options
    TestView.DEFAULT_OPTIONS = {};

    // helper functions
    function createBackground() {
      var surf = new Surface({
        size: [undefined, undefined],
      });
      surf.pipe(this._eventOutput);
      this.add(surf);
    }

    function createIcon() {
      var surf = new Surface({
        size: [100, 100],
        content: this.options.icon,
        properties: {
          backgroundColor: 'green',
          textAlign: 'center'
        }
      });
      var mod = new StateModifier({
          origin: [0.5, 0.45]
      });
      surf.pipe(this._eventOutput);
      this.add(mod).add(surf);

    }

    function createTitle() {
        var surf = new Surface({
            size: [undefined, true],
            content: this.options.title,
            properties: {
                backgroundColor: 'red',
                textAlign: 'center',
            }
        });
        var mod = new StateModifier({
            origin: [0.6, 0.6]
        });
        surf.pipe(this._eventOutput);
        this.add(mod).add(surf);
    }

    function createSubtitle() {
        var surf = new Surface({
            size: [undefined, true],
            content: this.options.subtitle,
            properties: {
                backgroundColor: 'blue',
                textAlign: 'center',
            }
        });
        var mod = new StateModifier({
            origin: [0.7, 0.7]
        });
        surf.pipe(this._eventOutput);
        this.add(mod).add(surf);
    }

    module.exports = TestView;
});
