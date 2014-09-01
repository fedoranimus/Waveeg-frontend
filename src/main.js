define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Surface = require('famous/core/Surface');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var StateModifier = require('famous/modifiers/StateModifier');
    var View = require('famous/core/View');
    var ScrollView = require('famous/views/Scrollview');
    var MenuView = require('MenuView');

    // create the main context
    var mainContext = Engine.createContext();


    var background = new Surface({
      size: [undefined, undefined],
      properties: {
        backgroundImage: 'url(./img/menu-background.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    });
    mainContext.add(background);

    var title = new Surface({
      size: [true, true],
      content: 'Wave',
      properties: {
        color: '#FFFFFF',
        fontSize: '32pt',
        textAlign: 'center',
      }
    });
    var mod = new StateModifier({
        origin: [0.2, 0.2]
    });

    //mod.add(title);

    mainContext.add(title).add(mod);


    var menuOptions =  {
      direction: 0, //change to 1 for vertical scrolling
      paginated: true
    };

    var scrollView = new ScrollView(menuOptions);

    var surfaces = [];

    scrollView.sequenceFrom(surfaces);

    var selfView = new MenuView({size:[undefined,undefined], title: "Self", subtitle: "Manage your ego", icon: "self"});
    selfView.pipe(scrollView);
    var trainView = new MenuView({size:[undefined,undefined], title: "Train", subtitle: "Train your brain", icon: "train"});
    trainView.pipe(scrollView);
    var monitorView = new MenuView({size:[undefined,undefined], title: "Monitor", subtitle: "Monitor your activity", icon: "monitor"});
    monitorView.pipe(scrollView);
    var shopView = new MenuView({size:[undefined,undefined], title: "Shop", subtitle: "Expand your mind", icon: "shop"});
    shopView.pipe(scrollView);

    surfaces.push(selfView);
    surfaces.push(trainView);
    surfaces.push(monitorView);
    surfaces.push(shopView);

    mainContext.add(scrollView);

});
