/**
 * Blockly Games: Royshen

/**
 * @author weifen@mijotech.net
 */
'use strict';

goog.provide('Royshen');

goog.require('Royshen.soy');
goog.require('Royshen.Blocks');
goog.require('BlocklyDialogs');
goog.require('BlocklyGames');
goog.require('BlocklyInterface');
goog.require('goog.math');


BlocklyGames.NAME = 'royshen';

/**
 * Initialize Blockly and the pinball(royshen).  Called on page load.
 */
Royshen.init = function() {
  // Render the Soy template.
  document.body.innerHTML = Royshen.soy.start({}, null,
      {lang: BlocklyGames.LANG,
       html: BlocklyGames.IS_HTML});

  BlocklyInterface.init();

  var rtl = BlocklyGames.isRtl();
  var blocklyDiv = document.getElementById('blockly');
  var onresize = function(e) {
    blocklyDiv.style.width = (window.innerWidth - 20) + 'px';
    blocklyDiv.style.height =
        (window.innerHeight - blocklyDiv.offsetTop - 15) + 'px';
  };
  onresize();
  window.addEventListener('resize', onresize);  

  Blockly.inject(document.getElementById('blockly'),
      {toolbox: document.getElementById('toolbox')});

  
};

window.addEventListener('load', Royshen.init);

