(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,636);


(lib.bottle = function() {
	this.initialize(img.bottle);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,206,624);


(lib.bubble = function() {
	this.initialize(img.bubble);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,514);


(lib.glass = function() {
	this.initialize(img.glass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,180,497);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,188,101);


(lib.water = function() {
	this.initialize(img.water);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,530);


(lib.water_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.water();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,530);


(lib.logo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.logo();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,188,101);


(lib.glass_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.glass();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180,497);


(lib.bubble_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.bubble();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,514);


(lib.bottle_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.bottle();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206,624);


(lib.bg_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.instance = new lib.bg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,640,636);


// stage content:
(lib._640960 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo_png
	this.instance = new lib.logo_1("synched",0);
	this.instance.setTransform(320,164.05,1,1,0,0,0,94,50.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(71).to({startPosition:0},0).wait(1));

	// glass_png
	this.instance_1 = new lib.glass_1("synched",0);
	this.instance_1.setTransform(989.5,669.45,1,1,0,0,0,90,248.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(34).to({_off:false},0).to({x:412.05},17,cjs.Ease.circOut).wait(20).to({startPosition:0},0).wait(1));

	// bottle_l
	this.instance_2 = new lib.bottle_1("synched",0);
	this.instance_2.setTransform(-120.35,768.5,1,1,6.5099,0,0,103,312.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:239.8,y:566.85},11,cjs.Ease.sineOut).to({x:204.55,y:590.35},8,cjs.Ease.sineOut).wait(4).to({startPosition:0},0).to({regY:312,rotation:0,x:239.75,y:615.7},10).wait(38).to({startPosition:0},0).wait(1));

	// bottle_r
	this.instance_3 = new lib.bottle_1("synched",0);
	this.instance_3.setTransform(808.25,809.45,1,1,-18.7109,0,0,103,312);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:416.75,y:502.15},11,cjs.Ease.sineOut).to({x:457.9,y:527.6},8,cjs.Ease.sineOut).wait(4).to({startPosition:0},0).to({rotation:0,x:410.05,y:615.7},10).to({alpha:0},8).wait(30).to({startPosition:0},0).wait(1));

	// water_png
	this.instance_4 = new lib.water_1("synched",0);
	this.instance_4.setTransform(320.05,465.65,0.0641,0.0641,0,0,0,320.1,264.6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({scaleX:0.727,scaleY:0.727,x:320,y:465.6},4).to({regX:319.9,regY:264.9,scaleX:2.2186,scaleY:2.2186,x:319.95,y:465.45,alpha:0},9).wait(54).to({startPosition:0},0).wait(1));

	// bubble_png_複製
	this.instance_5 = new lib.bubble_1("synched",0);
	this.instance_5.setTransform(319.85,533.2,1.3488,1.3488,0,0,0,319.9,256.9);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(56).to({_off:false},0).wait(1).to({regX:320,regY:257,x:320.05,y:521.15,alpha:0.9558},0).wait(1).to({y:508.9,alpha:0.9111},0).wait(1).to({y:496.55,alpha:0.8661},0).wait(1).to({y:484.2,alpha:0.8213},0).wait(1).to({y:472,alpha:0.7768},0).wait(1).to({y:459.95,alpha:0.7329},0).wait(1).to({x:320.1,y:448.1,alpha:0.6899},0).wait(1).to({y:436.6,alpha:0.6481},0).wait(1).to({y:425.5,alpha:0.6075},0).wait(1).to({y:414.75,alpha:0.5685},0).wait(1).to({y:404.45,alpha:0.531},0).wait(1).to({y:394.65,alpha:0.4952},0).wait(1).to({y:385.25,alpha:0.4612},0).wait(1).to({y:376.4,alpha:0.4289},0).wait(1).to({regX:319.9,regY:256.9,x:319.95,y:367.9,alpha:0.3984},0).wait(1));

	// bubble_png
	this.instance_6 = new lib.bubble_1("synched",0);
	this.instance_6.setTransform(319.85,533.2,1.3488,1.3488,0,0,0,319.9,256.9);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(40).to({_off:false},0).wait(1).to({regX:320,regY:257,x:320.05,y:485.3,alpha:0.8259},0).wait(1).to({y:448.15,alpha:0.6913},0).wait(1).to({y:420.25,alpha:0.59},0).wait(1).to({y:398.9,alpha:0.5126},0).wait(1).to({y:382.15,alpha:0.4518},0).wait(1).to({y:368.65,alpha:0.4029},0).wait(1).to({y:357.5,alpha:0.3626},0).wait(1).to({y:348.2,alpha:0.3289},0).wait(1).to({y:340.35,alpha:0.3002},0).wait(1).to({y:333.55,alpha:0.2755},0).wait(1).to({y:327.6,alpha:0.254},0).wait(1).to({y:322.4,alpha:0.2352},0).wait(1).to({y:317.85,alpha:0.2185},0).wait(1).to({y:313.75,alpha:0.2038},0).wait(1).to({y:310.1,alpha:0.1906},0).wait(1).to({y:306.85,alpha:0.1788},0).wait(1).to({y:303.95,alpha:0.1682},0).wait(1).to({y:301.3,alpha:0.1586},0).wait(1).to({y:298.9,alpha:0.1499},0).wait(1).to({y:296.7,alpha:0.142},0).wait(1).to({y:294.75,alpha:0.1348},0).wait(1).to({y:292.95,alpha:0.1283},0).wait(1).to({y:291.3,alpha:0.1223},0).wait(1).to({y:289.8,alpha:0.1169},0).wait(1).to({y:288.4,alpha:0.1119},0).wait(1).to({y:287.15,alpha:0.1074},0).wait(1).to({y:286,alpha:0.1032},0).wait(1).to({y:284.95,alpha:0.0994},0).wait(1).to({y:284,alpha:0.0959},0).wait(1).to({y:283.15,alpha:0.0928},0).wait(1).to({regX:319.9,regY:256.9,x:319.9,y:282.15,alpha:0.0898},0).wait(1));

	// bg_png
	this.instance_7 = new lib.bg_1("synched",0);
	this.instance_7.setTransform(320,318,1,1,0,0,0,320,318);
	this.instance_7.alpha = 0.8984;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(71).to({startPosition:0},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-69.7,357.8,1149.2,780.2);
// library properties:
lib.properties = {
	id: '979322A4CE6931468A2FE15CEC146227',
	width: 640,
	height: 960,
	fps: 24,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/bg.png", id:"bg"},
		{src:"images/bottle.png", id:"bottle"},
		{src:"images/bubble.png", id:"bubble"},
		{src:"images/glass.png", id:"glass"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/water.png", id:"water"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

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
an.compositions['979322A4CE6931468A2FE15CEC146227'] = {
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
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;