window.onload = function() {
  var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
  init()
  this.setTimeout(() => document.getElementById('loading').classList.add('hidden'), 500)
  function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp=AdobeAn.getComposition("E0E9BC29B44D4CD7945D8895FE890F4B");
    var lib=comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
    loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
    var lib=comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
  }
  function handleFileLoad(evt, comp) {
    var images=comp.getImages();	
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
  }
  function handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot = new lib.combo_cat();
    stage = new lib.Stage(canvas);	

    
    // Main
    const MENU = 'Menu'
    const START = 'Start'
    const END = 'End'
    let scene = MENU
    const logo = document.getElementById('logo')
    const startBtn = document.getElementById('start-btn')
    console.log(stage)
    console.log(exportRoot)
    
    const { catHungry, catTransition, cat, table } = exportRoot
    
    console.log(catHungry)
    const handleJump = () => {
      if (cat.currentLabel !== 'cat_stand_frame') return
      console.log(cat.y)
      cat.jump()
      // cat.gotoAndPlay('cat_shock_frame')
    }
    cat.jump = () => cat.gotoAndPlay('cat_jump_frame')
    const gameStart = () => {
      scene = START
      cat.visible = true
      document.addEventListener('click', handleJump)
      console.log(table)
      const { movingCan } = table
      setTimeout(() => {
        movingCan.visible = true
        movingCan.x = stage.width
        movingCan.y = -221.6
        const centerX = stage.width / 2
        const rate = 5
        const distance = stage.width / 2 / rate
        const timer = setInterval(() => {
          const { width } = movingCan.getBounds()
          movingCan.x -= distance
          const canCenterX = movingCan.x + width / 4
          console.log(movingCan.hitTest(stage.width/2, stage.height/2))
          if (canCenterX <= centerX) {
            clearInterval(timer)
            console.log(cat.y)
            cat.gotoAndPlay('cat_shock_frame')
          }
        }, 100)
      }, 2000)
      createjs.Ticker.addEventListener("tick", () => {
        if (cat.currentLabel === 'cat_jump_over_frame') {
          cat.gotoAndPlay('cat_stand_frame')
          table.y += 75

        
        }
        // TODO: check  hit
        // const catRect = cat.getBounds()
        // const canRect = movingCan.getBounds()
        // movingCan.localToLocal(canRect.x, canRect.y, canRect.parent)
      });
    }
    startBtn.addEventListener('click', () => {
      scene = START
      startBtn.classList.add('outside')
      logo.classList.add('outside')
      catHungry.gotoAndPlay('cat_hungry_happy')
      setTimeout(() => {
        catTransition.play()
        setTimeout(() => {
          catHungry.visible = false
          gameStart()
        }, 300)
      }, 400)
      
    })


    //Registers the "tick" event listener.
    fnStartAnimation = function() {
      stage.addChild(exportRoot);
      createjs.Ticker.framerate = lib.properties.fps;
      createjs.Ticker.addEventListener("tick", stage);
      const { width, height } = stage.getBounds()
      stage.width = width
      stage.height = height
    }	    
    //Code to support hidpi screens and responsive scaling.
    AdobeAn.makeResponsive(false,'both',false,1,[canvas,anim_container,dom_overlay_container], stage);	
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
  }
}

function checkIntersection (rect1,rect2) {
  if (
    rect1.x >= rect2.x + rect2.width ||
    rect1.x + rect1.width <= rect2.x ||
    rect1.y >= rect2.y + rect2.height ||
    rect1.y + rect1.height <= rect2.y 
  ) return false;
 
 
  return true;
 
 
 }