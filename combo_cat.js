(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"combo_cat_atlas_", frames: [[1172,1568,364,168],[1172,1396,366,170],[854,0,480,720],[0,0,852,958],[1272,876,55,57],[854,722,480,152],[1336,582,512,410],[1540,1396,25,28],[1172,977,11,12],[1172,876,98,99],[1574,994,434,353],[596,960,574,801],[1172,994,400,400],[1336,0,539,580],[0,960,594,800],[1574,1349,400,358]]}
];


// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["combo_cat_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["combo_cat_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bg = function() {
	this.initialize(ss["combo_cat_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["combo_cat_atlas_"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap20 = function() {
	this.initialize(ss["combo_cat_atlas_"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.cats = function() {
	this.initialize(ss["combo_cat_atlas_"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.initialize(ss["combo_cat_atlas_"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Layer2 = function() {
	this.initialize(ss["combo_cat_atlas_"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Layer3 = function() {
	this.initialize(ss["combo_cat_atlas_"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Layer4 = function() {
	this.initialize(ss["combo_cat_atlas_"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Layer5 = function() {
	this.initialize(ss["combo_cat_atlas_"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.man = function() {
	this.initialize(ss["combo_cat_atlas_"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.pet_food_cat_can = function() {
	this.initialize(ss["combo_cat_atlas_"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.s0097_11_3 = function() {
	this.initialize(ss["combo_cat_atlas_"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.s0097_15_3 = function() {
	this.initialize(ss["combo_cat_atlas_"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.table_chabudai = function() {
	this.initialize(ss["combo_cat_atlas_"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.s0097_11_3();
	this.instance.setTransform(-269.5,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269.5,-290,539,580);


(lib.Tween12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.s0097_11_3();
	this.instance.setTransform(-269.5,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269.5,-290,539,580);


(lib.Tween11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.s0097_11_3();
	this.instance.setTransform(-269.5,-290);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-269.5,-290,539,580);


(lib.trears = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer3();
	this.instance.setTransform(-5.5,-6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.trears, new cjs.Rectangle(-5.5,-6,11,12), null);


(lib.man_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.man();
	this.instance.setTransform(-58.45,-81.6,0.2037,0.2037);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.man_1, new cjs.Rectangle(-58.4,-81.6,116.9,163.2), null);


(lib.cats_transition = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{cats_transition_start_frame:0,cats_transition_end_frame:62});

	// timeline functions:
	this.frame_62 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(62).call(this.frame_62).wait(1));

	// cats_png
	this.instance = new lib.cats();
	this.instance.setTransform(-285,-63,1.1859,1.1859);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(30).to({_off:true},31).wait(1));

	// cats_png
	this.instance_1 = new lib.cats();
	this.instance_1.setTransform(-285,-197,1.1859,1.1859);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).wait(25).to({_off:true},26).wait(6));

	// cats_png
	this.instance_2 = new lib.cats();
	this.instance_2.setTransform(-285,-288,1.1859,1.1859);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).wait(21).to({_off:true},22).wait(10));

	// cats_png
	this.instance_3 = new lib.cats();
	this.instance_3.setTransform(-285,-409,1.1859,1.1859);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(14).to({_off:false},0).wait(17).to({_off:true},18).wait(14));

	// cats_png
	this.instance_4 = new lib.cats();
	this.instance_4.setTransform(-285,-533,1.1859,1.1859);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(18).to({_off:false},0).wait(13).to({_off:true},14).wait(18));

	// cats_png
	this.instance_5 = new lib.cats();
	this.instance_5.setTransform(-285,-604,1.1859,1.1859);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).wait(10).to({_off:true},11).wait(21));

	// cats_png
	this.instance_6 = new lib.cats();
	this.instance_6.setTransform(-285,-678,1.1859,1.1859);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(23).to({_off:false},0).wait(8).to({_off:true},9).wait(23));

	// cats_png
	this.instance_7 = new lib.cats();
	this.instance_7.setTransform(-285,-754,1.1859,1.1859);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({_off:false},0).wait(7).to({_off:true},8).wait(24));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-285,-754,569.3,871.3);


(lib.catstand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.s0097_15_3();
	this.instance.setTransform(-297,-800);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.catstand, new cjs.Rectangle(-297,-800,594,800), null);


(lib.cat_tail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Layer4();
	this.instance.setTransform(-49,-49.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cat_tail, new cjs.Rectangle(-49,-49.5,98,99), null);


(lib.cat_shock_static = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-426,-479);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cat_shock_static, new cjs.Rectangle(-426,-479,852,958), null);


(lib.can_rect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-91,-42,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.can_rect, new cjs.Rectangle(-91,-42,182,84), null);


(lib.cat_shock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_6 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(6).call(this.frame_6).wait(1));

	// Layer_1
	this.instance = new lib.cat_shock_static();
	this.instance.setTransform(27.05,364.9,1,1,0,0,0,-176.2,443.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-176.3,rotation:-23.9888,x:27,y:364.95},6,cjs.Ease.get(1)).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-576.3,-723.1,1205.6,1221.6);


(lib.cat_main = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{cat_stand_frame:0,cat_jump_frame:1,cat_jump_over_frame:34,cat_shock_frame:35});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_34 = function() {
		this.stop()
	}
	this.frame_35 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(1).call(this.frame_35).wait(1));

	// Layer_2
	this.instance = new lib.cat_shock();
	this.instance.setTransform(-0.05,0,1,1,0,0,0,203.2,-79);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).wait(1));

	// Layer_1
	this.instance_1 = new lib.s0097_15_3();
	this.instance_1.setTransform(-294,-400);

	this.instance_2 = new lib.Tween11("synched",0);
	this.instance_2.setTransform(-0.3,-1.3,1.1132,1.1131,0,0,0,0,-0.8);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween12("synched",0);
	this.instance_3.setTransform(-0.3,-608.4,1.1132,1.1131,0,0,0,0,-0.6);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween13("synched",0);
	this.instance_4.setTransform(0.1,-486.15,1.1132,1.1131,0,0,0,0.1,-0.3);

	this.instance_5 = new lib.catstand();
	this.instance_5.setTransform(0,-58.75);
	this.instance_5._off = true;

	this.catStand = new lib.catstand();
	this.catStand.name = "catStand";
	this.catStand.setTransform(0,-58.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},9).to({state:[{t:this.instance_4}]},6).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},5).to({state:[{t:this.catStand}]},5).to({state:[]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(5).to({_off:false},0).to({_off:true,regY:-0.6,y:-608.4},9,cjs.Ease.get(1)).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(5).to({_off:false},9,cjs.Ease.get(1)).to({_off:true,regX:0.1,regY:-0.3,x:0.1,y:-486.15},6,cjs.Ease.get(-1)).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(21).to({_off:false},0).to({scaleY:0.8599},5).to({_off:true,scaleY:1},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-426,-930.5,852,1409.5);


(lib.cat_hungry = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{cat_hungry_start:1,cat_hungry_end:22,cat_hungry_happy:23});

	// timeline functions:
	this.frame_22 = function() {
		this.gotoAndPlay('cat_hungry_start')
	}
	this.frame_23 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(22).call(this.frame_22).wait(1).call(this.frame_23).wait(1));

	// happy_face
	this.instance = new lib.Layer5();
	this.instance.setTransform(-104,-208);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).wait(1));

	// tears_pool
	this.instance_1 = new lib.Bitmap20();
	this.instance_1.setTransform(127.95,220.7,0.7742,0.7103,0,-75.0013,-51.564);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(24));

	// tears_0
	this.instance_2 = new lib.trears();
	this.instance_2.setTransform(85.5,13);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({x:108.6,y:47.65},4).to({x:148.2,y:192.85,alpha:0},10).to({_off:true},3).wait(1));

	// tears_0
	this.instance_3 = new lib.trears();
	this.instance_3.setTransform(85.5,13);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:108.6,y:47.65},4).to({x:148.2,y:192.85,alpha:0},13).to({_off:true},6).wait(1));

	// tears
	this.instance_4 = new lib.Layer2();
	this.instance_4.setTransform(67,-9);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},23).wait(1));

	// main
	this.instance_5 = new lib.Layer1();
	this.instance_5.setTransform(-256,-205);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(24));

	// tail
	this.instance_6 = new lib.cat_tail();
	this.instance_6.setTransform(255.9,101.6,1,1,0,0,0,-32.1,21.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regY:21.2,scaleX:1.0975,skewY:-24.3351,x:250.95,y:100.05},4,cjs.Ease.get(0.5)).to({scaleX:1.1562,skewY:30.1308},3,cjs.Ease.get(1)).to({scaleX:1.0002,scaleY:1.0007,skewX:63.7276,skewY:61.1996,x:242.75,y:103.35},4,cjs.Ease.get(-0.3)).to({regY:21.1,scaleX:1,scaleY:1,skewX:0,skewY:0,x:254.25,y:101.6},3,cjs.Ease.get(0.8)).wait(10));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-256,-208,611.5,439.2);


(lib.can = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.pet_food_cat_can();
	this.instance.setTransform(-114,-149,0.5714,0.3715);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.can_rect = new lib.can_rect();
	this.can_rect.name = "can_rect";
	this.can_rect.setTransform(1,-65.95);

	this.instance_1 = new lib.CachedBmp_1();
	this.instance_1.setTransform(-90.5,-108.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.can_rect}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.can, new cjs.Rectangle(-114,-149,228.6,148.6), null);


(lib.moving_can = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_11 = function() {
		this.gotoAndPlay(0)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(11).call(this.frame_11).wait(1));

	// Layer_2
	this.instance = new lib.man_1();
	this.instance.setTransform(50.45,-2.4,1,1.0296,0,-13.7792,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,skewX:0},3).to({scaleY:1.0534,skewX:18.3189},4).to({scaleY:1,skewX:0},4).wait(1));

	// Layer_1
	this.can = new lib.can();
	this.can.name = "can";
	this.can.setTransform(-66.05,-1,1,1,0,0,0,0.2,-74.7);

	this.timeline.addTween(cjs.Tween.get(this.can).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180.2,-85.1,316.1,165.39999999999998);


(lib.table = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.movingCan.visible = false;
		this.can.visible = false;
	}
	this.frame_34 = function() {
		this.gotoAndPlay(1)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(1));

	// moving_can
	this.movingCan = new lib.moving_can();
	this.movingCan.name = "movingCan";
	this.movingCan.setTransform(38.95,-310.6,1,1,0,0,0,-25.7,-2.5);

	this.timeline.addTween(cjs.Tween.get(this.movingCan).wait(35));

	// cans
	this.can = new lib.can();
	this.can.name = "can";
	this.can.setTransform(-0.05,-221.6,1,1,0,0,0,0.2,-74.7);

	this.timeline.addTween(cjs.Tween.get(this.can).wait(35));

	// Layer_1
	this.instance = new lib.table_chabudai();
	this.instance.setTransform(-200,-358);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200,-392.1,400,392.1);


// stage content:
(lib.combo_cat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.catTransition.stop()
		this.stop()
		this.cat.visible = false
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(35));

	// cats_transition
	this.catTransition = new lib.cats_transition();
	this.catTransition.name = "catTransition";
	this.catTransition.setTransform(187.3,584.2,0.8076,0.8076);

	this.timeline.addTween(cjs.Tween.get(this.catTransition).wait(35));

	// cat
	this.cat = new lib.cat_main();
	this.cat.name = "cat";
	this.cat.setTransform(187.4,467.45,0.1649,0.1649,0,0,0,0.6,0.3);

	this.timeline.addTween(cjs.Tween.get(this.cat).wait(35));

	// hungry_cat
	this.catHungry = new lib.cat_hungry();
	this.catHungry.name = "catHungry";
	this.catHungry.setTransform(187.4,443.2,0.44,0.44,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.catHungry).wait(35));

	// table
	this.table = new lib.table();
	this.table.name = "table";
	this.table.setTransform(187.4,530.9,0.8076,0.8076,0,0,0,0.1,-179);

	this.timeline.addTween(cjs.Tween.get(this.table).wait(35));

	// bg
	this.instance = new lib.bg();
	this.instance.setTransform(-1,0,0.7847,0.9264);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(186.5,333.5,189.2,342);
// library properties:
lib.properties = {
	id: 'E0E9BC29B44D4CD7945D8895FE890F4B',
	width: 375,
	height: 667,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/combo_cat_atlas_.png?1589136654887", id:"combo_cat_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.StageGL();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E0E9BC29B44D4CD7945D8895FE890F4B'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;