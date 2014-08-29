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
        backgroundImage: 'url(./img/wave-logo.svg)',
        //backgroundSize: '100px 100px',
        border: 'black solid thin',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top'
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



    var selfView = new TestView({size:[undefined,undefined], title: "Self", subtitle: "Manage your ego", icon: "self"});
    selfView.pipe(scrollView);
    var trainView = new TestView({size:[undefined,undefined], title: "Train", subtitle: "Train your brain", icon: "train"});
    trainView.pipe(scrollView);
    var monitorView = new TestView({size:[undefined,undefined], title: "Monitor", subtitle: "Monitor your activity", icon: "monitor"});
    monitorView.pipe(scrollView);
    var shopView = new TestView({size:[undefined,undefined], title: "Shop", subtitle: "Expand your mind", icon: "shop"});
    shopView.pipe(scrollView);

    surfaces.push(selfView);
    surfaces.push(trainView);
    surfaces.push(monitorView);
    surfaces.push(shopView);

    device.add(scrollView);

});
