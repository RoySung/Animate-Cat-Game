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
    loader.installPlugin(createjs.Sound);
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
    const restartBtn = document.getElementById('restart-btn')
    const scoreText = document.getElementById('score-wrap__text')

    
    const { catHungry, catTransition, cat, catShock, table, movingCan } = exportRoot
    const catInitPos = { x: cat.x, y: cat.y }
    const tableInitPos = { x: table.x, y: table.y }
    const playCatTransition = () => {
      return new Promise((resolve, reject) => {
        const doms = [startBtn, restartBtn, logo]
        doms.forEach(dom => {
          if (!dom.classList.contains('outside')) dom.classList.add('outside')
        })
        exportRoot.setChildIndex(catTransition, exportRoot.numChildren-1);
        catTransition.play()
        delay(2000).then(() => resolve())
      })
    }
    const getMainPositionForFirstChild = (objInMain) => {
      const child = objInMain.children[0]
      const main = objInMain.parent

      // get real size in main and pos in global
      let childPos = child.getBounds()
      childPos.width = childPos.width*cat.scaleX
      childPos.height = childPos.height*cat.scaleY
      childPos = { ...childPos, ...child.localToGlobal(childPos.x, childPos.y)}
      
      // translate global pos to main
      let posInMain = main.globalToLocal(childPos.x, childPos.y)
      posInMain = {...childPos, ...posInMain}
      posInMain.cx = posInMain.x + posInMain.width/2
      posInMain.cy = posInMain.y + posInMain.height/2

      return posInMain
    }
    cat.jump = () => cat.gotoAndPlay('cat_jump_frame')
    const handleJump = () => {
      if (cat.currentLabel !== 'cat_stand_frame') return
      cat.jump()
      // cat.gotoAndPlay('cat_shock_frame')
    }
    const showCatShock = () => {
      const pos = getMainPositionForFirstChild(cat)
      exportRoot.setChildIndex(catShock, exportRoot.numChildren-1);
      catShock.x = pos.cx
      catShock.y = pos.cy
      catShock.gotoAndPlay(0)     
    }
    const hideCatShock = () => {
      const { width, height } = stage.getBounds()
      catShock.x = width
      catShock.y = height
    }
    const setScore = (score) => {
      scoreText.innerHTML =  score
    }
    
    
    let debugCatRect = null
    class MovingCan {
        
      constructor(movingCanTemplate) {
        this.speed = 1
        this.isMoving = false
        this.count = 0
        this.movingCan = null
        this.canArr = []

        this.movingCan = this.createMovingCan()
        fetchSize(movingCanTemplate)
        this.posInStageCenter = { x: movingCanTemplate.x, y: movingCanTemplate.y }
        this.initX = stage.canvas.width / stage.scale + movingCanTemplate.width/2
        this.initMovingCan()
        this.count = 0
      }

      get rate() {
        const base = (this.initX - this.posInStageCenter.x)
        return base / Math.floor(50 / this.speed)
      }

      randomSpeed() {
        const max = 9
        const min = 6
        this.speed = (Math.floor(Math.random()*(max - min + 1)) + min) / 10
      }

      initMovingCan() {
        fetchSize(this.movingCan)
        this.movingCan.visible = true
        this.movingCan.x = this.initX
        this.isMoving = true
      }
      moveCan() {
        if (this.isMoving) this.movingCan.x -= this.rate
      }

      createMovingCan() {
        const newMovingCan = new lib.moving_can();
        this.count += 1;
        newMovingCan.name = `movingCan-${this.count}`;
        newMovingCan.setTransform(219.75,493.6,0.7872,0.7872,0,0,0,-25.7,-2.4);
        exportRoot.addChild(newMovingCan);
        exportRoot.setChildIndex(cat, exportRoot.numChildren-1);
        if (this.movingCan) this.canArr.push(this.movingCan)
        this.movingCan = newMovingCan
        this.initMovingCan()
        
        return newMovingCan
      }

      removeAllCans() {
        exportRoot.removeChild(this.movingCan)
        this.movingCan = this.createMovingCan()
        this.canArr.forEach(can => {
          exportRoot.removeChild(can) 
        })
        this.canArr = []
      }
    }
    let hanldeTick
    let movingCanControler = new MovingCan(movingCan)
    const initCat = () => {
      hideCatShock()
      cat.visible = true
      cat.x = catInitPos.x
      cat.y = catInitPos.y
      table.x = tableInitPos.x
      table.y = tableInitPos.y
      cat.gotoAndStop('cat_stand_frame')
    }
    const gameStart = () => {
        scene = START
        catHungry.gotoAndPlay('cat_hungry_happy')
        setScore(0)
        delay(400).then(() => {
          catHungry.visible = false
          playCatTransition().then(() => {
            initCat() 
            movingCanControler.removeAllCans()
            createjs.Ticker.removeEventListener("tick", hanldeTick);
            hanldeTick = () => {
              movingCanControler.moveCan()
              
              // check  hit
              if (cat.visible && cat.currentLabel !== 'cat_shock_frame') {
                const isHit = ndgmr.checkRectCollision(movingCanControler.movingCan.can.canRect, cat.children[0])
                const isSafeHit = cat.children[0].safeRect && ndgmr.checkRectCollision(movingCanControler.movingCan.can.canRect, cat.children[0].safeRect)
                if (isHit) {
                  cat.stop()
                  movingCanControler.isMoving = false
                  if (!isSafeHit) {
                    handleGameOver()
                  } else {
                    movingCanControler.movingCan.man.visible = false
                    cat.gotoAndPlay('cat_stand_frame')
                    table.y += 75
                    movingCanControler.createMovingCan()
                    movingCanControler.canArr.forEach(can => {
                      createjs.Tween.get(can).to({y: can.y+75}, 50);
                    })
                    setScore(movingCanControler.canArr.length)
                    movingCanControler.randomSpeed()
                  }
                }
              }
            }
            createjs.Ticker.addEventListener("tick", hanldeTick);
            document.addEventListener('click', handleJump)
          })
        })
    }
    const handleGameOver = () => {
      cat.visible = false
      showCatShock()
      restartBtn.classList.remove('outside')
      document.removeEventListener('click', handleJump)
    }
    startBtn.addEventListener('click', () => {
      gameStart()
    })
    restartBtn.addEventListener('click', () => {
      gameStart()
    })
    

    // delay(1000).then(() =>  {
    //   gameStart()
    // })

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

async function delay (ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms)
  })
}

function fetchSize(obj) {
  const size = obj.getBounds()
  const main = obj.parent
  obj.width = size.width * main.scaleX
  obj.height = size.height* main.scaleY

  return obj
}

function drawRect(stage, rect) {
  debugCatRect = new createjs.Shape();
  debugCatRect.graphics.beginFill('blue');
  debugCatRect.graphics.drawRect(rect.x, rect.y, rect.width, rect.height);
  debugCatRect.graphics.endFill();
  debugCatRect.alpha = 0.5;
  stage.addChild(debugCatRect)
  stage.update()
}

function playSound(id, loop) {
  return createjs.Sound.play(id, {'interrupt':createjs.Sound.INTERRUPT_EARLY, 'loop': loop})
}