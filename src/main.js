define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var StateModifier = require('famous/modifiers/StateModifier');
    //var DeviceView = require('DeviceView');
    var View = require('famous/core/View');
    var ScrollView = require('famous/views/Scrollview');
    var TestView = require('TestView');

    var device;

    function createDevice() {
      var deviceOptions = {
        type: 'iphone',
        height: window.innerHeight - 100
      };

      device = new View(deviceOptions);

      var deviceModifier = new StateModifier({
        //size: device.getSize(),
        size: [300, 400],
        origin: [0.5, 0.5]
      });

      mainContext.add(deviceModifier).add(device);
    }

    // create the main context
    var mainContext = Engine.createContext();

    createDevice();

    var background = new Surface({
      properties: {
        backgroundColor: '#FA5C4F'
      }
    });

    device.add(background);

    var menuOptions =  {
      direction: 1, //Utility.Direction.X
      paginated: true
    };

    var scrollView = new ScrollView(menuOptions);

    var surfaces = [];

    scrollView.sequenceFrom(surfaces);

    for (var i = 0, temp; i < 4; i++) {
        temp = new TestView({size:[undefined,undefined], title: "Title " + i, subtitle: "Subtitle " + i, icon: "Icon " + i});
        temp.pipe(scrollView);
        surfaces.push(temp);
    }

    device.add(scrollView);

});
