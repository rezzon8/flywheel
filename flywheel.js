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
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C6C6C6").ss(2.8).p("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");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#C6C6C6","#878787"],[0,1],-312.6,0,312.6,0).s().p("EgAsAwrQgUgSgDgYIgSjCQg2gBhLgFIgnC+QgEAZgXAOQgUAPgagDQgZgDgRgSQgTgTAAgZIACjCQhEgJg8gMIg6C6QgIAXgWANQgXANgZgGQgYgFgQgUQgRgWADgYIAXjBQhCgQg8gRIhNCxQgJAWgZALQgXAKgZgIQgYgHgOgXQgOgWAGgYIAqi9Qg+gYg7gXIhfCoQgNAXgZAHQgYAHgYgLQgXgJgLgXQgLgZAHgYIA+i3Qg/gfg0gcIhwCeQgOAUgbAFQgZAFgWgNQgWgNgIgYQgKgZALgXIBRiwQg2ghg3gmIiBCSQgQASgaACQgaACgVgOQgVgQgFgZQgGgaAMgVIBjinQgwglg1gtIiPCEQgSARgbgBQgZgBgTgRQgTgRgDgZQgEgbAPgUIB0icQgpgmgyg1IidBzQgUAQgagEQgagEgQgTQgRgTgBgZQgBgbARgSICEiQQgogtgqg3IinBjQgWANgagHQgYgGgPgUQgQgVADgZQACgaASgSICSiAQgqg+gcgvIixBRQgWAKgZgIQgZgKgMgVQgMgWAEgaQAEgaAVgOICdhxQgcg0geg/Ii4A9QgXAJgYgMQgYgLgKgXQgKgXAHgZQAHgaAWgMICphfQgYg8gWg+Ii9ArQgZAFgWgOQgXgNgHgYQgJgZALgXQAKgZAWgJICzhOQgVhHgNg3IjAAXQgZADgVgRQgVgPgFgZQgFgYAMgYQAMgWAZgIIC4g6QgKg0gKhNIjCADQgYAAgUgSQgTgTgCgYQgDgaAPgVQAOgWAZgFIC/gnQgFg8gChFIjBgSQgZgDgSgUQgQgUAAgZQAAgZAQgTQASgVAZgBIDBgTQAChFAFg9Ii/gmQgZgFgOgWQgPgWADgZQADgZASgRQAUgTAYAAIDCACQAKhLAKg1Ii4g5QgZgJgMgXQgMgXAFgYQAGgZAUgPQAVgRAZADIDAAXQAQhEASg6IizhOQgWgJgKgZQgLgXAJgYQAHgZAXgNQAWgOAZAFIC9AqQAWg9AYg8IiphfQgWgMgHgaQgHgZAKgWQAKgYAYgLQAYgMAXAJIC4A9QAehAAcgzIidhxQgVgPgEgZQgEgbAMgVQAMgVAZgJQAZgJAWAKICxBRQAWglAwhIIiSiAQgSgRgCgbQgDgZAQgUQAPgWAYgFQAagGAWAMICnBjQAqg2AogvIiEiPQgRgSABgbQABgZARgTQAQgTAagEQAbgDATAOICdB0QAyg1ApgmIh0icQgPgUAEgaQADgZATgSQATgRAZgBQAbgBASARICPCEQA1gtAwglIhjinQgMgWAGgaQAFgZAVgOQAVgPAaABQAaADAQATICBCRQA3gmA2ghIhRixQgLgWAKgZQAIgZAWgMQAWgNAZAFQAaAFAPAUIBwCeQA0gcA/gfIg+i3QgHgYALgZQALgWAXgKQAYgLAYAHQAZAHANAWIBfCpQA7gYA+gXIgqi9QgGgYAOgWQAOgXAYgHQAYgIAYAKQAZAKAJAWIBNCyQA2gPBIgSIgXjBQgDgYARgVQAQgVAYgFQAYgFAYAMQAWAMAIAZIA6C4QBLgNA1gHIgCjCQAAgYATgUQARgSAZgEQAZgBAVAOQAXAPAEAYIAnC+QBKgEA3gCIASjCQADgYAUgSQAUgQAYgBQAYABAVAQQAUASACAYIASDCQA2ACBMAEIAni+QAEgZAXgOQAUgOAaABQAZAEASASQASAUAAAYIgDDCQA5AHBIANIA5i5QAIgXAYgNQAVgNAaAGQAZAFAPAVQAQAVgCAYIgXDBQBIASA2APIBNiyQAJgWAZgKQAYgKAYAIQAXAIAOAWQAOAVgFAZIgqC9QBFAaA0AVIBfipQANgWAZgHQAYgHAYALQAWAJAMAXQALAZgIAYIg+C3QBAAfA0AcIBwieQAPgUAagFQAYgFAXANQAVAMAKAZQAIAYgKAXIhQCxQA7AlAxAiICBiRQAPgTAcgDQAZgBAVAPQATAOAHAZQAGAagNAWIhiCnQAtAjA3AvICPiEQATgRAaABQAaABATARQASARAEAaQADAagPAUIhzCcQAmAjA2A4ICch0QATgOAaADQAaADARAUQAQASACAaQAAAbgQASIiECPQAtA2AlAvICnhjQAWgMAZAGQAZAFAPAWQAOATgBAaQgDAbgRARIiSCAQAgAvAmA+ICwhRQAXgKAZAJQAYAJANAVQANAWgFAaQgEAZgVAPIieBxQAcAzAgBAIC3g9QAXgJAYAMQAXALALAYQAKAXgIAYQgHAagWAMIioBfQAZA8AVA9IC9gqQAZgFAXAOQAUAMAJAaQAIAYgKAXQgKAZgXAJIiyBOQARA4ARBGIDAgXQAZgDAVARQAVAPAEAZQAGAZgMAWQgNAXgXAJIi6A5QAMA6AIBGIDDgCQAZAAATATQASARADAZQACAagOAVQgPAWgZAFIi+AmQAGBMABA2IDBATQAZABARAVQARATAAAZQAAAYgRAVQgRAUgZADIjBASQgBA2gGBLIC+AnQAZAFAPAWQAOAVgCAaQgDAZgSARQgTASgZABIjDgDQgIBGgMA7IC6A6QAXAIANAWQAMAXgGAZQgFAagUAOQgVARgZgDIjAgWQgSBHgQA2ICyBOQAXAJAKAZQAKAXgIAZQgJAZgUAMQgYAOgYgFIi9grQgVA+gZA8ICoBfQAWAMAIAaQAHAYgKAYQgKAWgYAMQgYAMgXgJIi3g9QggA/gcA0ICeBxQAVAPAEAZQAEAZgMAXQgNAWgYAJQgYAIgXgKIixhRQgmA+ggAvICRCAQASARADAbQABAagOAUQgPAUgZAGQgZAHgWgNIinhjQglAvgtA1ICECQQAQASAAAbQgBAZgRATQgSATgYAEQgaAEgUgQIichzQg2A4gmAjIBzCcQAPATgDAbQgDAagTARQgTARgaABQgaABgTgRIiPiEQgzAsgxAmIBiCnQANAWgGAZQgHAZgTAQQgVAOgZgCQgbgCgQgSIiBiSQgxAig7AlIBQCwQALAXgJAZQgKAYgVANQgXANgYgFQgbgFgNgUIhxieQg0AchAAfIA+C3QAIAZgLAYQgMAXgWAJQgYALgYgHQgZgIgNgVIhfipQg5AXhAAYIAqC9QAFAZgOAVQgNAXgYAHQgYAIgYgKQgYgLgKgWIhNixQg2APhIASIAXDBQADAYgRAWQgQAUgYAFQgaAGgVgNQgYgNgIgXIg5i6Qg6ALhHAKIADDCQAAAYgSAUQgSASgZADQgaADgUgPQgXgOgEgZIgni+QhMAFg2ABIgSDCQgCAZgUARQgVAQgYAAQgZAAgTgQgEgPJgj6Qm/C9lYFZQlaFai8G/QjFHQABH7QgBH8DFHPQC8HAFaFZQFYFaG/C+QHPDDH6ABQH7gBHOjDQHAi+FYlaQFZlZC+nAQDDnPAAn8QAAn7jDnQQi+m/lZlaQlZlZm/i9QnOjFn7AAQn6AAnPDFg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-318.3,-321.5,636.7,643);


(lib.pie_03 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAlQgIgEgIgFIAKgOQAMAKAMgBQAEAAACgCQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgDgEgDQgDgCgFgCIgKgEIgIgDQgJgFAAgLQAAgLAJgGQAJgHANAAQANABAOAIIgIAPQgLgHgKAAQgIAAAAAGQAAADADABIAKAEIAJADIAIAFQAIADAAALQAAAMgIAHQgJAGgNAAQgHAAgKgCg");
	this.shape.setTransform(224.7,110.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAdQgMgLABgSQgBgRAMgLQAMgLAPAAQAPAAAMAKQALAKgBAQIAAALIg2AAQABAGAFAEQAGAEAFAAQAMAAAHgIIAMAOQgNAMgRgBQgRAAgLgKgAARgHQgBgHgFgDQgEgEgGAAQgFAAgGAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_1.setTransform(216.75,110.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgPAlQgIgEgIgFIAKgOQAMAKAMgBQAEAAACgCQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgDgEgDQgDgCgFgCIgKgEIgIgDQgJgFAAgLQAAgLAJgGQAJgHANAAQANABAOAIIgIAPQgLgHgKAAQgIAAAAAGQAAADADABIAKAEIAJADIAIAFQAIADAAALQAAAMgIAHQgJAGgNAAQgHAAgKgCg");
	this.shape_2.setTransform(208.5,110.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAlQgIgEgIgFIAJgOQAMAKANgBQAEAAADgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgDgDgDQgEgCgFgCIgKgEIgHgDQgKgFABgLQgBgLAKgGQAIgHAMAAQAOABANAIIgIAPQgJgHgLAAQgIAAAAAGQAAADADABIAKAEIAKADIAHAFQAIADAAALQAAAMgIAHQgJAGgNAAQgHAAgKgCg");
	this.shape_3.setTransform(201.1,110.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAdQgMgLAAgSQAAgRAMgLQALgLAQAAQAQAAALAKQAKAKABAQIAAALIg3AAQAAAGAGAEQAFAEAHAAQALAAAIgIIALAOQgNAMgRgBQgQAAgMgKgAARgHQgBgHgEgDQgFgEgGAAQgGAAgFAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_4.setTransform(193.15,110.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYAcQgMgKAAgSQAAgRANgKQAMgMAPAAQAIABAJADQAJADAGAHIgLAPQgEgFgFgCQgGgDgFAAQgHAAgGAFQgHAGAAAJQAAAKAHAFQAGAFAHAAQAKAAAJgKIANAOQgPAPgRAAQgRABgMgMg");
	this.shape_5.setTransform(184.625,110.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgQAMgLQAMgMAQAAQASAAALAMQAMALAAAQQAAARgMALQgLALgSAAQgQAAgMgLgAgNgPQgFAHAAAIQAAAJAFAHQAGAFAHAAQAIAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgIgBQgHABgGAFg");
	this.shape_6.setTransform(175.775,110.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVAnIAAhMIAVAAIAAAKQAEgFAGgDQAGgDAGAAIAAAUIgEAAQgJAAgFAHQgEAGAAALIAAAhg");
	this.shape_7.setTransform(168.525,110.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgnA1IAAhoIAWAAIAAAJQAKgKAMAAQAOAAAKALQALALAAARQAAARgLALQgKALgOAAQgOAAgIgLIAAAmgAgMgcQgFAGAAAKQAAAJAFAFQAFAGAHAAQAHAAAFgGQAGgFAAgJQAAgJgFgHQgGgGgHAAQgHAAgFAGg");
	this.shape_8.setTransform(160.775,111.425);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKA1IAAhpIAVAAIAABpg");
	this.shape_9.setTransform(231.675,88.35);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAhQgJgIAAgLQAAgMAJgFQAIgGAPAAIAPAAQAAgMgNAAQgEAAgGACIgLAFIgKgOQAQgLASABQAOgBAJAIQAJAGAAAPIAAAxIgUAAIAAgKQgJALgLAAQgMgBgIgGgAgMAOQAAAEADACQADACAGAAQAEAAAFgEQAEgDAAgGIAAgDIgNAAQgMgBAAAJg");
	this.shape_10.setTransform(225.225,89.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOAnIAAgrQAAgRgMAAQgGAAgEAFQgGAEAAAJIAAAqIgVAAIAAhMIAVAAIAAAIQALgJALAAQALAAAJAIQAIAJAAAOIAAAug");
	this.shape_11.setTransform(216.65,89.75);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgPAMgMQAMgLAQAAQASAAALALQAMAMAAAPQAAARgMALQgLAMgSAAQgQAAgMgMgAgNgOQgFAFAAAJQAAAJAFAGQAGAGAHABQAIgBAGgGQAFgGAAgJQAAgJgFgFQgGgHgIABQgHgBgGAHg");
	this.shape_12.setTransform(207.425,89.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAUAAIAABMgAgIggQgEgDABgGQgBgFAEgEQADgDAFAAQAFAAAEADQADAEAAAFQAAAGgDADQgEAEgFAAQgFAAgDgEg");
	this.shape_13.setTransform(200.75,88.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgKAsQgIgIAAgMIAAgjIgJAAIAAgQIAJAAIAAgXIAVAAIAAAXIASAAIAAAQIgSAAIAAAiQAAAEACACQACADADAAQAGAAAEgGIAIAQQgKAIgLABQgKgBgHgGg");
	this.shape_14.setTransform(195.725,88.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZAhQgJgIAAgLQAAgMAJgFQAIgGAPAAIAPAAQAAgMgNAAQgEAAgGACIgLAFIgKgOQAQgLASABQAOgBAJAIQAJAGAAAPIAAAxIgUAAIAAgKQgJALgLAAQgMgBgIgGgAgMAOQAAAEADACQADACAGAAQAEAAAFgEQAEgDAAgGIAAgDIgNAAQgMgBAAAJg");
	this.shape_15.setTransform(188.025,89.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgVAnIAAhMIAVAAIAAAKQAEgFAGgDQAGgDAGAAIAAAUIgEAAQgJAAgFAGQgEAIAAAJIAAAig");
	this.shape_16.setTransform(181.325,89.75);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgaAdQgLgLAAgSQAAgSALgKQALgKAPAAQAQAAALAJQALAJAAARIAAAKIg3AAQACAHAFAEQAGAEAFAAQAMAAAHgHIANAMQgOANgRAAQgRAAgLgLgAARgHQgBgGgFgFQgEgDgGAAQgFAAgGAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_17.setTransform(173.75,89.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgnA1IAAhoIAWAAIAAAJQAKgKAMAAQAOAAAKALQALALAAARQAAARgLALQgKALgOAAQgOAAgIgLIAAAmgAgMgcQgFAGAAAKQAAAJAFAFQAFAGAHAAQAHAAAFgGQAGgFAAgJQAAgJgFgHQgGgGgHAAQgHAAgFAGg");
	this.shape_18.setTransform(164.775,91.125);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgPAMgMQAMgLAQAAQASAAALALQAMAMAAAPQAAARgMALQgLAMgSAAQgQAAgMgMgAgNgOQgFAFAAAJQAAAJAFAGQAGAGAHABQAIgBAGgGQAFgGAAgJQAAgJgFgFQgGgHgIABQgHgBgGAHg");
	this.shape_19.setTransform(155.175,89.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgaAdQgLgLAAgSQAAgRALgLQAMgLAOAAQAQAAALAKQALAKAAAQIAAALIg3AAQABAGAGAEQAGAEAFAAQAMAAAHgIIANAOQgOAMgRgBQgQAAgMgKgAARgGQgBgIgFgDQgEgEgGAAQgGAAgFAEQgFADgBAIIAhAAIAAAAg");
	this.shape_20.setTransform(227.4,69.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKAmIgfhMIAXAAIASAwIATgwIAWAAIgeBMg");
	this.shape_21.setTransform(218.8,69.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgPAMgMQAMgMAQAAQASAAALAMQAMAMAAAPQAAARgMALQgLALgSAAQgQAAgMgLgAgNgPQgFAHAAAIQAAAKAFAFQAGAHAHgBQAIABAGgHQAFgFAAgKQAAgIgFgHQgGgFgIgBQgHABgGAFg");
	this.shape_22.setTransform(209.975,69.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgVAnIAAhMIAVAAIAAAKQAEgFAGgDQAGgDAGAAIAAAUIgEAAQgJAAgFAHQgEAGAAALIAAAhg");
	this.shape_23.setTransform(202.725,69.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgnA1IAAhoIAWAAIAAAJQAKgKAMAAQAOAAAKALQALALAAARQAAARgLALQgKALgOAAQgOAAgIgLIAAAmgAgMgcQgFAGAAAKQAAAJAFAFQAFAGAHAAQAHAAAFgGQAGgFAAgJQAAgJgFgHQgGgGgHAAQgHAAgFAGg");
	this.shape_24.setTransform(194.975,70.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAnAnIAAgpQAAgSgNAAQgHAAgEAFQgFAEAAAKIAAAoIgVAAIAAgpQAAgJgCgFQgDgEgGAAQgHAAgEAFQgFAEAAAKIAAAoIgWAAIAAhMIAWAAIAAAJQAJgKALAAQAHAAAGAEQAFAEADAGQAFgGAHgFQAIgDAHAAQAOAAAIAIQAJAIAAAPIAAAug");
	this.shape_25.setTransform(183.025,69.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAVAAIAABMgAgIgfQgEgEAAgFQAAgGAEgDQADgEAFAAQAFAAAEAEQADADAAAGQAAAFgDAEQgEADgFAAQgFAAgDgDg");
	this.shape_26.setTransform(173.9,67.95);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgPAMgMQAMgMAQAAQASAAALAMQAMAMAAAPQAAARgMALQgLALgSAAQgQAAgMgLgAgNgPQgFAHAAAIQAAAKAFAFQAGAHAHgBQAIABAGgHQAFgFAAgKQAAgIgFgHQgGgFgIgBQgHABgGAFg");
	this.shape_27.setTransform(163.425,69.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKArQgIgHAAgNIAAgiIgJAAIAAgQIAJAAIAAgWIAVAAIAAAWIASAAIAAAQIgSAAIAAAiQAAAEACADQACACADAAQAGAAAEgGIAIAPQgKAKgLgBQgKABgHgIg");
	this.shape_28.setTransform(155.875,68.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgZAhQgJgIAAgLQAAgMAJgFQAIgGAPAAIAPAAQAAgMgNAAQgEAAgGACIgLAFIgKgOQAQgLASABQAOgBAJAIQAJAGAAAPIAAAwIgUAAIAAgJQgJALgLAAQgMgBgIgGgAgMAOQAAAEADACQADACAGAAQAEAAAFgEQAEgDAAgGIAAgDIgNAAQgMgBAAAJg");
	this.shape_29.setTransform(219.425,49.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgKAsQgIgIAAgMIAAgjIgJAAIAAgPIAJAAIAAgYIAVAAIAAAYIASAAIAAAPIgSAAIAAAhQAAAFACACQACADADAAQAGAAAEgFIAIAPQgKAIgLABQgKgBgHgGg");
	this.shape_30.setTransform(212.425,48.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgZAhQgJgIAAgLQAAgMAJgFQAIgGAPAAIAPAAQAAgMgNAAQgEAAgGACIgLAFIgKgOQAQgLASABQAOgBAJAIQAJAGAAAPIAAAwIgUAAIAAgJQgJALgLAAQgMgBgIgGgAgMAOQAAAEADACQADACAGAAQAEAAAFgEQAEgDAAgGIAAgDIgNAAQgMgBAAAJg");
	this.shape_31.setTransform(204.725,49.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgcAqQgLgMABgRQgBgQALgLQAKgKAOAAQANAAAJAJIAAglIAVAAIAABoIgVAAIAAgKQgJAMgNAAQgNAAgLgMgAgLgBQgGAGAAAJQAAAJAGAHQAFAFAHABQAHgBAFgFQAFgHABgJQgBgJgFgGQgFgFgHAAQgHAAgFAFg");
	this.shape_32.setTransform(195.7,47.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgaAdQgMgLAAgSQAAgSAMgKQAMgKAOAAQARAAAKAJQAMAKAAAQIAAALIg4AAQACAGAFAEQAFAEAHAAQALAAAIgHIAMAMQgOANgRAAQgQAAgMgLgAARgHQgBgHgEgEQgFgDgGAAQgFAAgGAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_33.setTransform(183.05,49.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgPAkQgJgCgHgHIAJgNQANAKAMAAQAEAAADgCQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgCgDgCQgEgDgFgCIgKgDIgHgFQgJgEAAgLQAAgKAJgHQAIgGAMAAQAOgBANAKIgIAOQgKgHgJAAQgJAAAAAFQAAADADACIAJAEIALAEIAHADQAIAEAAAMQAAALgJAHQgHAHgNAAQgIgBgKgDg");
	this.shape_34.setTransform(174.8,49.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgeAmQgMgLAAgVIAAg4IAWAAIAAA2QAAANAGAHQAGAGAIAAQAJAAAGgGQAFgHAAgNIAAg2IAXAAIAAA4QAAAVgMAMQgMAMgTAAQgSAAgMgNg");
	this.shape_35.setTransform(165.875,48.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#919191").s().p("A04myMApIgHRQBSHQhSHPQhRHQjsGZg");
	this.shape_36.setTransform(133.6813,92.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D9317B").s().p("A1/nJMArTgHqQBXHohWHpQhWHoj4Gug");
	this.shape_37.setTransform(140.7688,94.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pie_03, new cjs.Rectangle(0,0,281.6,189.6), null);


(lib.pie_02 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAkQgJgCgHgHIAJgNQANAKAMAAQAEAAADgCQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgCgDgCQgEgDgFgCIgKgDIgHgFQgKgEABgLQgBgKAKgHQAIgGAMAAQAOgBANAKIgIAOQgJgHgLAAQgIAAAAAFQAAADADACIAKAEIAKAEIAHAEQAIADAAAMQAAALgJAHQgHAHgOAAQgHgBgKgDg");
	this.shape.setTransform(206.4,144.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVAnIAAhMIAVAAIAAAKQAEgFAGgDQAGgDAGAAIAAAUIgEAAQgJAAgFAGQgEAHAAAKIAAAig");
	this.shape_1.setTransform(200.175,144.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgaAdQgMgLAAgSQAAgSAMgKQALgKAQAAQAQAAALAJQAKAKABAQIAAAKIg3AAQAAAHAGAEQAFAEAHAAQALAAAIgHIALAMQgNANgRAAQgQAAgMgLgAARgHQgBgHgEgEQgFgDgGAAQgFAAgGAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_2.setTransform(192.6,144.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgPAkQgJgCgHgHIAJgNQANAKAMAAQAEAAADgCQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgCgDgCQgEgDgFgCIgKgDIgHgFQgKgEABgLQgBgKAKgHQAIgGAMAAQAOgBANAKIgIAOQgJgHgLAAQgIAAAAAFQAAADADACIAKAEIAKAEIAHAEQAIADAAAMQAAALgJAHQgHAHgOAAQgHgBgKgDg");
	this.shape_3.setTransform(184.35,144.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaAfQgJgIAAgPIAAguIAVAAIAAApQABARANABQAFgBAFgEQAEgEAAgKIAAgoIAWAAIAABMIgWAAIAAgKQgIALgMAAQgMAAgIgIg");
	this.shape_4.setTransform(176.15,144.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgQAMgLQAMgLAQAAQASAAALALQAMALAAAQQAAARgMALQgLAMgSAAQgQAAgMgMgAgNgPQgFAHAAAIQAAAJAFAHQAGAFAHABQAIgBAGgFQAFgHAAgJQAAgIgFgHQgGgFgIAAQgHAAgGAFg");
	this.shape_5.setTransform(163.225,144.15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgKAsQgIgIAAgMIAAgjIgJAAIAAgPIAJAAIAAgYIAVAAIAAAYIASAAIAAAPIgSAAIAAAhQAAAFACACQACADADAAQAGAAAEgFIAIAPQgKAIgLABQgKgBgHgGg");
	this.shape_6.setTransform(155.675,143.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAPAnIAAgrQgBgRgNAAQgFAAgFAFQgEAEAAAJIAAAqIgWAAIAAhMIAWAAIAAAIQAJgJALAAQAMAAAJAIQAIAJAAAOIAAAug");
	this.shape_7.setTransform(147.85,144.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAVAAIAABMgAgIggQgDgDgBgGQABgFADgEQADgDAFAAQAFAAAEADQADAEABAFQgBAGgDADQgEAEgFAAQgFAAgDgEg");
	this.shape_8.setTransform(141.2,142.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKArQgIgHAAgNIAAgiIgJAAIAAgQIAJAAIAAgWIAVAAIAAAWIASAAIAAAQIgSAAIAAAiQAAAEACADQACACADAAQAGAAAEgGIAIAQQgKAJgLAAQgKAAgHgIg");
	this.shape_9.setTransform(214.025,122.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAOA1IAAgqQABgRgNAAQgGAAgEAFQgGADABAKIAAApIgWAAIAAhpIAWAAIAAAmQAKgKAKAAQANAAAIAJQAIAIAAANIAAAvg");
	this.shape_10.setTransform(206.2,122.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgSAzQgJgDgHgFIAIgQQALAIAMAAQALAAAGgGQAHgGAAgMQgKALgOAAQgPAAgKgKQgLgKAAgQQAAgSALgLQALgKANAAQANAAAJALIAAgKIAWAAIAABCQAAAKgEAIQgEAIgGAFQgMAJgPAAQgIAAgJgDgAgMgeQgFAFAAAKQAAAJAFAFQAGAFAGAAQAIAAAFgFQAFgFAAgJQAAgKgFgFQgFgFgIAAQgGAAgGAFg");
	this.shape_11.setTransform(196.675,125.325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAUAAIAABMgAgIgfQgEgFABgEQgBgGAEgDQADgEAFAAQAFAAAEAEQAEADAAAGQAAAEgEAFQgEADgFAAQgFAAgDgDg");
	this.shape_12.setTransform(190.05,122.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgOAlQgKgEgHgFIAJgOQAMAJANAAQAEAAADgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgEgDgCQgEgCgFgCIgKgEIgHgDQgJgFAAgKQAAgLAJgHQAIgGANgBQANABANAIIgIAPQgJgHgKAAQgJAAAAAGQAAADADABIAJAEIAKADIAIAEQAIAEAAALQAAAMgJAHQgHAGgNABQgIgBgJgCg");
	this.shape_13.setTransform(184.15,123.85);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAOAnIAAgqQABgSgNAAQgGAAgEAEQgGAFAAAJIAAAqIgVAAIAAhMIAVAAIAAAJQALgKAKAAQANAAAIAJQAIAIAAAOIAAAug");
	this.shape_14.setTransform(176.05,123.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAVAAIAABMgAgIgfQgEgFAAgEQAAgGAEgDQADgEAFAAQAFAAAEAEQADADAAAGQAAAEgDAFQgEADgFAAQgFAAgDgDg");
	this.shape_15.setTransform(169.4,122.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAOAnIAAgqQAAgSgMAAQgGAAgEAEQgGAFAAAJIAAAqIgVAAIAAhMIAVAAIAAAJQALgKALAAQALAAAJAJQAIAIAAAOIAAAug");
	this.shape_16.setTransform(159.05,123.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAUAAIAABMgAgIgfQgEgFAAgEQAAgGAEgDQAEgEAEAAQAFAAAEAEQAEADgBAGQABAEgEAFQgEADgFAAQgEAAgEgDg");
	this.shape_17.setTransform(152.4,122.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgZAgQgJgGAAgNQAAgLAJgFQAIgGAPAAIAPAAQAAgNgNAAQgEAAgGACIgLAGIgKgOQAQgKASgBQAOAAAJAHQAJAIAAAOIAAAxIgUAAIAAgKQgJAKgLABQgMAAgIgIgAgMANQAAAEADADQADACAGAAQAEAAAFgDQAEgEAAgGIAAgEIgNAAQgMABAAAHg");
	this.shape_18.setTransform(145.925,123.85);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgSAzQgJgDgHgFIAIgQQALAIAMAAQALAAAGgGQAHgGAAgMQgKALgOAAQgPAAgKgKQgLgKAAgQQAAgSALgLQALgKANAAQANAAAJALIAAgKIAWAAIAABCQAAAKgEAIQgEAIgGAFQgMAJgPAAQgIAAgJgDgAgMgeQgFAFAAAKQAAAJAFAFQAGAFAGAAQAIAAAFgFQAFgFAAgJQAAgKgFgFQgFgFgIAAQgGAAgGAFg");
	this.shape_19.setTransform(136.925,125.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgQAMgLQAMgLAQAAQASAAALALQAMALAAAQQAAARgMALQgLAMgSgBQgQABgMgMgAgNgPQgFAHAAAIQAAAJAFAHQAGAFAHAAQAIAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgIAAQgHAAgGAFg");
	this.shape_20.setTransform(211.275,103.55);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgKAsQgIgIAAgNIAAgiIgJAAIAAgPIAJAAIAAgYIAVAAIAAAYIASAAIAAAPIgSAAIAAAhQAAAFACACQACADADAAQAGAAAEgFIAIAOQgKAJgLAAQgKAAgHgGg");
	this.shape_21.setTransform(203.725,102.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAhQgJgIAAgLQAAgMAJgFQAIgGAPAAIAPAAQAAgMgNAAQgEAAgGACIgLAFIgKgNQAQgLASAAQAOAAAJAGQAJAIAAAPIAAAvIgUAAIAAgJQgJALgLgBQgMAAgIgGgAgMAOQAAAEADACQADACAGAAQAEAAAFgEQAEgDAAgGIAAgDIgNAAQgMAAAAAIg");
	this.shape_22.setTransform(192.275,103.55);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKAsQgIgIAAgNIAAgiIgJAAIAAgPIAJAAIAAgYIAVAAIAAAYIASAAIAAAPIgSAAIAAAhQAAAFACACQACADADAAQAGAAAEgFIAIAOQgKAJgLAAQgKAAgHgGg");
	this.shape_23.setTransform(185.275,102.45);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgZAhQgJgIAAgLQAAgMAJgFQAIgGAPAAIAPAAQAAgMgNAAQgEAAgGACIgLAFIgKgNQAQgLASAAQAOAAAJAGQAJAIAAAPIAAAvIgUAAIAAgJQgJALgLgBQgMAAgIgGgAgMAOQAAAEADACQADACAGAAQAEAAAFgEQAEgDAAgGIAAgDIgNAAQgMAAAAAIg");
	this.shape_24.setTransform(177.575,103.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgcAqQgKgMAAgRQAAgQAKgLQAKgKAPAAQAMAAAJAJIAAglIAWAAIAABoIgWAAIAAgKQgJALgMAAQgOABgLgMgAgLgBQgGAGAAAJQAAAJAGAHQAFAFAGAAQAIAAAFgFQAGgHgBgJQABgJgGgGQgFgFgIAAQgGAAgFAFg");
	this.shape_25.setTransform(168.55,102.15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgaAdQgMgLAAgSQAAgSAMgKQAMgKAPAAQAPAAAMAJQALAKgBAQIAAALIg2AAQABAGAFAEQAFAEAHAAQALAAAHgHIAMAMQgNAMgRAAQgRABgLgLgAARgHQgBgGgEgFQgFgDgGAAQgGAAgFAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_26.setTransform(155.9,103.55);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgPAkQgIgCgIgHIAKgNQALAKANAAQAEAAACgDQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgCgDgDQgEgCgFgCIgKgDIgHgFQgKgEAAgLQAAgKAKgHQAIgHAMABQAOAAANAJIgHAOQgKgHgLAAQgIAAAAAFQAAADADACIAKAEIAKADIAHAFQAIADAAAMQAAALgIAHQgJAHgNgBQgHAAgKgDg");
	this.shape_27.setTransform(147.65,103.55);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgeAmQgMgLAAgWIAAg3IAWAAIAAA2QAAANAGAGQAGAIAIgBQAJABAGgIQAFgGAAgNIAAg2IAXAAIAAA3QAAAWgMAMQgMAMgTgBQgSAAgMgMg");
	this.shape_28.setTransform(138.725,102.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#828282").s().p("AGRv/QFpEuDsGXQDrGXBTHPMgpHAHUg");
	this.shape_29.setTransform(131.6,113.275);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#733B9C").s().p("AGnw2QF8E/D4GtQD4GsBXHnMgrTAHug");
	this.shape_30.setTransform(138.575,107.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pie_02, new cjs.Rectangle(0,0,277.2,215.7), null);


(lib.pie_01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgZAgQgJgGAAgNQAAgLAJgFQAIgGAPAAIAPAAQAAgNgNAAQgEAAgGACIgLAGIgKgOQAQgKASgBQAOAAAJAHQAJAIAAAOIAAAxIgUAAIAAgKQgJAKgLAAQgMABgIgIgAgMANQAAAEADADQADACAGAAQAEAAAFgDQAEgEAAgGIAAgEIgNAAQgMABAAAHg");
	this.shape.setTransform(90.725,-152.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgKArQgIgHAAgNIAAgiIgJAAIAAgQIAJAAIAAgWIAVAAIAAAWIASAAIAAAQIgSAAIAAAiQAAAEACADQACACADAAQAGAAAEgGIAIAPQgKAKgLgBQgKABgHgIg");
	this.shape_1.setTransform(83.725,-153.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZAgQgJgGAAgNQAAgLAJgFQAIgGAPAAIAPAAQAAgNgNAAQgEAAgGACIgLAGIgKgOQAQgKASgBQAOAAAJAHQAJAIAAAOIAAAxIgUAAIAAgKQgJAKgLAAQgMABgIgIgAgMANQAAAEADADQADACAGAAQAEAAAFgDQAEgEAAgGIAAgEIgNAAQgMABAAAHg");
	this.shape_2.setTransform(76.025,-152.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAqQgLgMABgQQgBgRALgLQAKgLAOAAQANAAAJAKIAAgmIAVAAIAABqIgVAAIAAgKQgJALgNgBQgNAAgLgLgAgLAAQgGAFAAAJQAAAKAGAFQAFAHAGgBQAIABAFgHQAFgFAAgKQAAgKgFgEQgFgHgIAAQgGAAgFAHg");
	this.shape_3.setTransform(67,-153.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgSA2IAAg7IgJAAIAAgQIAJAAIAAgFQAAgNAIgHQAHgHALAAQALAAAJAIIgHAPQgFgFgGgBQgDAAgCADQgCACAAAEIAAAGIASAAIAAAQIgSAAIAAA7g");
	this.shape_4.setTransform(56.325,-154);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgPAMgMQAMgMAQAAQASAAALAMQAMAMAAAPQAAARgMALQgLALgSAAQgQAAgMgLgAgNgOQgFAFAAAJQAAAKAFAFQAGAHAHgBQAIABAGgHQAFgFAAgKQAAgJgFgFQgGgHgIAAQgHAAgGAHg");
	this.shape_5.setTransform(48.375,-152.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgnAsIAKgPQAFAFAGAAQADAAACgDQACgDAAgDQAAgEgehKIAXAAIASAwIATgwIAXAAIgkBaQgDAIgGAEQgHAFgIAAQgLAAgKgKg");
	this.shape_6.setTransform(105.675,-171.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgKAsQgIgIAAgNIAAgiIgJAAIAAgPIAJAAIAAgYIAVAAIAAAYIASAAIAAAPIgSAAIAAAhQAAAFACACQACADADAAQAGAAAEgFIAIAOQgKAJgLAAQgKAAgHgGg");
	this.shape_7.setTransform(98.525,-173.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAVAAIAABMgAgIggQgDgDgBgGQABgFADgEQAEgDAEAAQAFAAAEADQADAEABAFQgBAGgDADQgEAEgFAAQgEAAgEgEg");
	this.shape_8.setTransform(93.15,-174.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgKA1IAAhpIAVAAIAABpg");
	this.shape_9.setTransform(88.975,-174.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgZAhQgJgIAAgLQAAgMAJgFQAIgGAPAAIAPAAQAAgMgNAAQgEAAgGACIgLAFIgKgNQAQgLASAAQAOAAAJAGQAJAIAAAPIAAAvIgUAAIAAgJQgJALgLgBQgMAAgIgGgAgMAOQAAAEADACQADACAGAAQAEAAAFgEQAEgDAAgGIAAgDIgNAAQgMAAAAAIg");
	this.shape_10.setTransform(82.525,-172.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbAfQgIgHAAgRIAAgtIAVAAIAAApQAAASAOAAQAFgBAEgEQAFgEABgJIAAgpIAVAAIAABMIgVAAIAAgKQgJALgMAAQgMAAgJgIg");
	this.shape_11.setTransform(73.85,-172.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AASA1IAAgiQgJAHgLAAQgOAAgMgLQgKgLgBgQQAAgSALgLQALgLANAAQAMAAAKAKIAAgJIAWAAIAABogAgMgcQgFAGAAAKQAAAJAFAFQAGAGAHAAQAHAAAFgGQAFgFAAgJQAAgKgFgGQgFgGgHAAQgHAAgGAGg");
	this.shape_12.setTransform(64.35,-171.425);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgcAqQgKgMAAgRQAAgQAKgLQAKgKAPAAQAMAAAJAJIAAglIAWAAIAABoIgWAAIAAgKQgJALgMAAQgOABgLgMgAgLgBQgGAGAAAJQAAAJAGAHQAFAFAGAAQAIAAAFgFQAGgHgBgJQABgJgGgGQgFgFgIAAQgGAAgFAFg");
	this.shape_13.setTransform(51.1,-174.15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAOAnIAAgrQAAgRgMAAQgGAAgEAFQgGAEAAAJIAAAqIgVAAIAAhMIAVAAIAAAIQALgJALAAQALAAAJAIQAIAJAAAOIAAAug");
	this.shape_14.setTransform(42.05,-172.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgZAhQgJgIAAgLQAAgMAJgFQAIgGAPAAIAPAAQAAgMgNAAQgEAAgGACIgLAFIgKgNQAQgLASAAQAOAAAJAGQAJAIAAAPIAAAvIgUAAIAAgJQgJALgLgBQgMAAgIgGgAgMAOQAAAEADACQADACAGAAQAEAAAFgEQAEgDAAgGIAAgDIgNAAQgMAAAAAIg");
	this.shape_15.setTransform(33.075,-172.75);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgnAsIAKgPQAFAFAGAAQADAAACgDQACgDAAgDQAAgEgehKIAXAAIASAwIATgwIAXAAIgkBaQgDAIgGAEQgHAFgIAAQgLAAgKgKg");
	this.shape_16.setTransform(99.275,-191.525);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgKArQgIgHAAgMIAAgjIgJAAIAAgQIAJAAIAAgWIAVAAIAAAWIASAAIAAAQIgSAAIAAAiQAAAEACADQACACADAAQAGAAAEgGIAIAQQgKAJgLAAQgKAAgHgIg");
	this.shape_17.setTransform(92.125,-194.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAVAAIAABMgAgIgfQgDgFgBgEQABgGADgDQADgEAFAAQAFAAAEAEQADADABAGQgBAEgDAFQgEADgFAAQgFAAgDgDg");
	this.shape_18.setTransform(86.75,-194.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgKA1IAAhpIAVAAIAABpg");
	this.shape_19.setTransform(82.575,-194.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAUAAIAABMgAgIgfQgEgFABgEQgBgGAEgDQADgEAFAAQAFAAAEAEQAEADAAAGQAAAEgEAFQgEADgFAAQgFAAgDgDg");
	this.shape_20.setTransform(78.45,-194.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgRArIAAAKIgWAAIAAhqIAWAAIAAAmQAJgKANAAQAOAAAKALQALALAAAQQAAASgLALQgLAMgNAAQgNgBgJgKgAgMAAQgFAEAAAKQAAAKAFAFQAFAHAHAAQAHAAAFgHQAGgFAAgKQAAgJgFgFQgGgHgHAAQgHAAgFAHg");
	this.shape_21.setTransform(71.825,-194.45);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgZAgQgJgGAAgNQAAgLAJgFQAIgGAPAAIAPAAQAAgNgNAAQgEAAgGACIgLAGIgKgOQAQgKASgBQAOAAAJAIQAJAGAAAPIAAAxIgUAAIAAgKQgJALgLAAQgMAAgIgIgAgMANQAAAEADADQADACAGAAQAEAAAFgDQAEgEAAgGIAAgEIgNAAQgMAAAAAIg");
	this.shape_22.setTransform(62.475,-193.05);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAVAAIAABMgAgIgfQgDgFgBgEQABgGADgDQAEgEAEAAQAFAAAEAEQADADAAAGQAAAEgDAFQgEADgFAAQgEAAgEgDg");
	this.shape_23.setTransform(56.35,-194.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKA1IAAhpIAVAAIAABpg");
	this.shape_24.setTransform(52.175,-194.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgaAdQgMgLABgSQgBgRAMgLQAMgLAPAAQAPAAAMAKQALAJgBARIAAAKIg2AAQABAHAFAEQAGAEAFAAQAMAAAHgIIAMAOQgNALgRABQgRAAgLgLgAARgGQgBgHgFgFQgEgDgGAAQgFAAgGAEQgFADgBAIIAhAAIAAAAg");
	this.shape_25.setTransform(45.75,-193.05);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgVAnIAAhMIAVAAIAAAKQAEgEAGgEQAGgDAGAAIAAAUIgEAAQgJAAgFAHQgEAGAAALIAAAhg");
	this.shape_26.setTransform(38.675,-193.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgaAdQgMgLAAgSQAAgRAMgLQAMgLAOABQARgBAKAKQAMAKAAAQIAAALIg4AAQACAGAFAEQAFAEAHAAQALAAAIgHIALAMQgNAMgRAAQgQAAgMgKgAARgHQgBgGgEgEQgFgEgGAAQgFAAgGAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_27.setTransform(95.3,-213.35);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKAmIgfhLIAXAAIASAvIATgvIAWAAIgeBLg");
	this.shape_28.setTransform(86.7,-213.35);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgQAMgLQAMgMAQABQASgBALAMQAMALAAAQQAAARgMALQgLALgSAAQgQAAgMgLgAgNgPQgFAHAAAIQAAAJAFAHQAGAFAHAAQAIAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgIAAQgHAAgGAFg");
	this.shape_29.setTransform(77.875,-213.35);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgVAnIAAhMIAVAAIAAAKQAEgFAGgDQAGgDAGAAIAAAUIgEAAQgJAAgFAGQgEAIAAAJIAAAig");
	this.shape_30.setTransform(70.625,-213.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgnA1IAAhoIAWAAIAAAJQAKgKAMAAQAOAAAKALQALALAAARQAAARgLALQgKALgOAAQgOAAgIgLIAAAmgAgMgcQgFAGAAAKQAAAJAFAFQAFAGAHAAQAHAAAFgGQAGgFAAgJQAAgJgFgHQgGgGgHAAQgHAAgFAGg");
	this.shape_31.setTransform(62.875,-212.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAnAnIAAgpQAAgSgNAAQgHAAgEAFQgFAEAAAJIAAApIgVAAIAAgpQAAgJgCgEQgDgFgGAAQgHAAgEAFQgFAEAAAJIAAApIgWAAIAAhMIAWAAIAAAJQAJgKALAAQAHAAAGAEQAFAEADAHQAFgHAHgFQAIgDAHAAQAOAAAIAIQAJAIAAAPIAAAug");
	this.shape_32.setTransform(50.925,-213.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgKAyIAAhjIAVAAIAABjg");
	this.shape_33.setTransform(41.55,-214.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#747474").s().p("AtZ04QHWAAG6ChQG6ChFpEuMgazAgBg");
	this.shape_34.setTransform(85.8,-133.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#326A94").s().p("AuG1/QHvAAHRCqQHRCoF8E/MgcNAhug");
	this.shape_35.setTransform(90.35,-140.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pie_01, new cjs.Rectangle(0,-281.5,180.7,281.5), null);


(lib.Path_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595A59").s().p("AgzA1QgWgWAAgfQAAgdAWgWQAWgWAdAAQAeAAAWAWQAWAWAAAdQAAAegWAXQgWAVgeAAQgdAAgWgVg");
	this.shape.setTransform(7.4,7.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,14.8,14.8), null);


(lib.Path = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#595A59").s().p("AgzA0QgWgVAAgfQAAgeAWgVQAWgWAdAAQAfAAAVAWQAWAWAAAdQAAAfgWAVQgVAWgfAAQgdAAgWgWg");
	this.shape.setTransform(7.375,7.425);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(0,0,14.8,14.9), null);


(lib.Group_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDCDCD").s().p("AhJBKQgfgfAAgrQAAgrAfgeQAfgfAqAAQAsAAAeAfQAfAeAAArQAAArgfAfQgeAfgsAAQgqAAgfgfgAg8g8QgZAZAAAjQAAAkAZAZQAZAZAjABQAkgBAZgZQAagZAAgkQAAgjgagZQgZgZgkAAQgjAAgZAZg");
	this.shape.setTransform(10.475,10.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,21,21), null);


(lib.Group_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDCDCD").s().p("AhJBKQgfgfAAgrQAAgqAfgfQAfgfAqAAQArAAAfAfQAfAfAAAqQAAArgfAfQgfAfgrAAQgqAAgfgfgAg8g8QgaAZAAAjQAAAkAaAZQAZAaAjAAQAkAAAZgaQAagZAAgkQAAgjgagZQgZgagkAAQgjAAgZAag");
	this.shape.setTransform(10.475,10.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,21,21), null);


(lib.Group_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AEAEAE").s().p("AgEAbQgMgJgCgNQgCgLAGgMQAHgLAKgEIAQBCIgEABQgLAAgIgHg");
	this.shape.setTransform(1.9653,3.5618);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AEAEAE").s().p("AgTggQAOgCAKAIQALAIADAOQACAMgGALQgHALgLAEg");
	this.shape_1.setTransform(5.0097,3.3382);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_2, new cjs.Rectangle(0.1,0,6.9,6.9), null);


(lib.Group_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AEAEAE").s().p("AgEAbQgMgIgCgOQgCgLAGgLQAGgLALgFIAQBCIgFABQgKAAgIgHg");
	this.shape.setTransform(1.9515,3.569);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AEAEAE").s().p("AgSggQANgCAKAIQAMAIACAOQACALgGALQgGALgLAFg");
	this.shape_1.setTransform(4.9985,3.381);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_1, new cjs.Rectangle(0,0,7,7), null);


(lib.Group_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.cog_small = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CDCDCD").s().p("AhoBoQgqgrgBg9QABg8AqgrQAsgrA8AAQA9AAArArQArArAAA8QAAA9grArQgrArg9AAQg8AAgsgrgAhVhVQgkAkAAAxQAAAzAkAjQAjAkAyAAQAzAAAjgkQAjgjAAgzQAAgxgjgkQgjgkgzAAQgyAAgjAkg");
	this.shape.setTransform(0,0.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AEAEAE").s().p("AgGAmQgQgMgDgTQgEgQAKgQQAJgPAPgGIAWBdIgGAAQgQAAgLgJg");
	this.shape_1.setTransform(-2.1721,0.1723);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AEAEAE").s().p("AgaguQATgCAOALQAQAMAEATQADAQgJAQQgJAPgQAGg");
	this.shape_2.setTransform(2.1375,-0.1154);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#595A59").s().p("AhJBKQgegfAAgrQAAgqAegfQAfgeAqAAQArAAAfAeQAeAfAAAqQAAArgeAfQgfAegrAAQgqAAgfgeg");
	this.shape_3.setTransform(0,0.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AEAEAE").s().p("AAnIMQgIgFgBgJIgPhGIgdAAIgPBGQgBAJgIAFQgJAGgIgCQgJgBgGgGQgGgIAAgIIAAhHIgdgGIgdBBQgDAHgJAFQgJADgIgDQgJgDgEgHQgFgIACgJIAPhFIgcgNIgpA6QgEAHgKACQgJACgJgFQgGgEgEgJQgDgJADgIIAehBQgOgJgLgJIg0AwQgGAGgKAAQgJgBgHgFQgHgGgBgJQgBgKAFgHIAqg5IgUgXIg9AlQgIAEgJgCQgJgDgFgHQgFgHAAgJQABgJAGgGIA2gvIgQgbIhDAXQgIADgJgFQgIgDgDgJQgFgJAEgIQACgJAIgEIA+gjIgKgdIhGAIQgKABgHgGQgGgFgDgKQgCgIAEgIQAGgJAIgCIBDgWIgDgeIhHgHQgIAAgHgIQgFgHAAgJQAAgJAFgGQAGgHAJgBIBHgHIADgeIhDgWQgIgCgGgJQgEgIACgIQADgKAGgFQAHgFAKAAIBGAJIAKgeIg+gjQgIgEgCgJQgEgIAFgJQADgIAIgEQAJgEAIACIBDAXIAQgaIg2gwQgGgGgBgJQAAgJAFgHQAFgHAJgDQAJgCAIAFIA9AkQAJgLALgMIgqg5QgFgHABgKQABgJAHgGQAHgFAJgBQAKAAAGAGIA0AwIAZgSIgehBQgDgJADgIQAEgJAGgEQAIgEAKABQAJACAFAHIApA6IAcgNIgPhFQgCgJAFgIQAEgHAJgDQAIgDAJADQAJAEADAIIAdBBIAdgGIAAhHQgBgIAHgIQAHgHAIAAQAJgBAIAFQAIAGABAIIAPBGIAdAAIAPhGQABgJAIgFQAHgFAKABQAHAAAHAHQAHAHAAAJIgBBHIAeAGIAdhBQADgIAJgEQAJgDAIADQAIADAFAHQAFAJgCAIIgPBFIAcANIApg6QAGgHAIgCQAKgBAHAEQAIAEADAJQAEAIgFAJIgdBBIAZASIA0gwQAHgGAJAAQAJABAHAFQAGAGACAJQABAKgGAHIgpA5QAMAMAIALIA9gkQAIgFAJACQAJADAFAHQAFAHAAAJQgCAKgFAFIg2AwIAQAaIBCgXQAKgCAHAEQAJAEADAIQAEAIgCAJQgDAJgIAEIg9AjIAJAeIBGgJQAJAAAHAFQAIAGABAJQADAIgFAIQgFAJgHACIhFAWIADAeIBHAHQAJABAHAHQAFAHABAIQgBAJgFAHQgIAIgIAAIhHAHQAAAPgDAPIBFAWQAHACAFAJQAFAIgDAIQgBAJgIAGQgHAFgJAAIhGgIIgJAdIA9AjQAIAEADAJQACAKgEAHQgDAIgJAEQgIAFgJgDIhCgXIgQAbIA2AvQAFAFACAKQAAAJgFAHQgFAHgJADQgJACgIgEIg9glIgUAXIApA5QAGAHgBAKQgCAJgGAGQgHAFgJABQgKAAgGgGIg0gwQgOALgLAHIAdBBQAEAIgDAJQgDAJgIAEQgHAFgKgCQgKgCgEgHIgpg6IgcANIAPBFQACAIgFAJQgFAHgIADQgIADgJgDQgJgEgDgIIgdhBIgeAGIABBHQAAAJgHAHQgGAHgIAAIgEAAQgHAAgGgEgAg0DwQgXAWAAAfQAAAfAXAXQAWAWAeAAQAfAAAXgWQAVgXAAgfQAAgfgVgWQgXgWgfAAQgeAAgWAWgADvg0QgWAWAAAeQAAAfAWAXQAWAWAfAAQAfAAAXgWQAWgXAAgfQAAgegWgWQgXgWgfAAQgfAAgWAWgAlZg0QgWAWAAAeQAAAfAWAXQAWAWAfAAQAfAAAWgWQAXgXgBgfQABgegXgWQgWgWgfAAQgfAAgWAWgAg0laQgXAXAAAfQAAAfAXAWQAWAWAeAAQAfAAAXgWQAVgWAAgfQAAgfgVgXQgXgWgfAAQgeAAgWAWg");
	this.shape_4.setTransform(0,0.0327);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#595A59").s().p("AnBHDQi7i7AAkIQAAkHC7i6QC6i7EHAAQEIAAC7C7QC6C6AAEHQAAEIi6C7Qi7C6kIAAQkHAAi6i6g");
	this.shape_5.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cog_small, new cjs.Rectangle(-63.7,-63.7,127.4,127.5), null);


(lib.Group_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgxUvQgXgTgCgcIgakOQhLgHhKgTIh0D1QgMAZgcAKQgaAKgbgKQgbgKgOgYQgPgZAHgcIBFkGQhFghg/grIjBC+QgUAUgdAAQgcAAgWgSQgWgTgFgcQgFgcAQgYICajfQg3g4grg9Ij2BxQgaAMgbgKQgbgJgOgZQgPgZAGgcQAFgdAXgQIDdidQghhHgThIIkOAWQgdACgWgTQgWgSgFgcQgFgdAPgYQAOgZAbgIIEGhIQgDgzAAgZQAAgYADgzIkGhIQgbgIgOgZQgPgYAFgdQAFgcAWgSQAXgSAcACIEOAVQAUhJAghGIjdidQgXgQgFgdQgGgcAPgZQAOgZAbgJQAbgKAaAMID2BxQApg6A5g7IiajfQgQgXAFgdQAFgcAWgTQAWgSAcAAQAdAAAUAUIDBC+QBAgrBEghIhFkGQgHgcAPgZQAOgYAbgKQAbgKAaAKQAcAKAMAZIB0D1QBKgTBLgHIAakOQACgcAXgTQAVgSAcAAQAdAAAWASQAWATACAcIAaEOQBLAHBKATIB1j1QAMgZAbgKQAagKAbAKQAcAKAOAYQAOAZgHAcIhEEGQBEAhA/ArIDBi+QAUgUAdAAQAcAAAWASQAXATAEAcQAFAcgQAYIiaDfQA3A4ArA9ID2hxQAagMAbAKQAbAJAOAZQAPAZgFAcQgGAdgXAQIjcCdQAfBGAVBJIEOgVQAcgCAWASQAWASAFAcQAFAdgPAYQgOAZgbAIIkGBIQADAmAAAlQAAAmgDAmIEGBIQAbAIAOAZQAPAYgFAdQgFAcgWASQgWASgcgCIkOgVQgVBIgfBHIDcCdQAXAQAGAdQAFAcgPAZQgOAZgbAJQgbAKgagMIj2hxQgtA/g1A2ICaDfQAQAYgFAcQgEAcgXATQgWASgcAAQgdAAgUgUIjBi+Qg+AqhFAiIBEEGQAHAcgOAZQgOAYgcAKQgbAKgagKQgbgKgMgZIh1j1QhKAThLAHIgaEOQgCAcgWATQgWASgdAAQgcAAgVgSgAixiyQhKBKAABoQAABpBKBKQBKBKBnAAQBpAABJhKQBKhKAAhpQAAhohKhKQhJhKhpAAQhnAAhKBKg");
	this.shape.setTransform(132.375,134.525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_3, new cjs.Rectangle(0,0,264.8,269.1), null);


(lib.Group = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#767778").ss(2.8).p("ALqjTQgFgRAIgQQAJgPARgFQARgFAPAJQAQAJAEARQAFARgIAPQgJAPgRAFQgFACgHAAQgOAAgLgJQgMgIgDgOgAMHAAIAAgBQAAgRAMgNQANgMARgBQASAAAMANQANAMAAASIAAABQAAARgNANQgMAMgSAAQgRAAgNgMQgMgNAAgRgAMIEHQgRgFgJgPQgJgPAFgRQAFgRAPgJQAPgJARAFQARAFAJAPQAJAPgFARQgEAOgLAJQgMAJgOAAQgEAAgHgCgAIOo7QgNgMgBgRQAAgSAMgNQAMgNARAAQASgBANAMQANAMAAASQABASgMAMQgMAOgTAAQgRAAgMgMgAFgq1QgQgIgFgRQgFgRAIgPQAIgQARgFQAQgGAQAIQAQAJAFAQQAFARgIAQQgFAKgLAHQgKAGgMAAQgKAAgJgFgAKUmWQgJgPAEgRQAEgRAPgJQAQgKARAFQARAEAJAPQAJAPgEARQgEARgPAJQgLAGgLAAQgZAAgMgUgACYr8QgSgDgJgPQgKgPAEgRQADgRAPgKQAOgKASAEQARAEAKAOQAKAPgEARQgDAPgMAKQgMAJgPAAgAhpsuQgBgSALgOQALgNASgCQARgBAOALQANALACASQACARgMAOQgLANgRACIgEAAQgRAAgMgLQgMgLgCgQgAlCr3QgGgRAIgQQAIgQARgFQAQgGAQAIQAQAIAFARQAGAQgIAQQgHAQgRAFQgIADgGAAQgNAAgLgIQgMgIgEgNgAoFqJQgKgOADgSQADgRAPgKQAOgKARADQASAEAKAOQAKAOgEASQgDARgOAKQgKAHgOAAQgXAAgMgSgAqhnnQgNgLgCgRQgCgSALgOQALgOARgCQASgCANALQAOAMACARQACARgLAOQgNAQgUAAQgPAAgMgJgAsIkgQgQgGgHgRQgGgQAGgQQAHgQAQgHQARgHAQAHQAQAHAHAQQAGAQgGAQQgFAMgLAHQgLAHgMAAQgIAAgJgDgAs2hEQgRgCgLgOQgLgOACgSQADgRAOgLQAOgKARACQARACALAOQALAOgCARQgCAQgMALQgMAKgQAAgAtaB2QgCgRAKgOQALgOARgCQASgCAOAKQAOALACASQADARgLAOQgLAOgSACIgFABQgQAAgMgLQgMgLgCgQgAseFaQgHgQAHgRQAHgQAQgHQAQgGARAGQAQAHAHAQQAGARgGAQQgHAQgQAHQgIADgJAAQgMAAgLgHQgLgHgFgMgAqmIlQgLgOACgRQACgRAOgLQANgLASABQARACALAOQAMAOgCARQgCASgOALQgMAJgPAAQgVAAgMgQgAn5LGQgOgKgEgRQgDgRAKgPQAKgOASgEQARgDAOAKQAPAKADARQADASgKAOQgMATgXAAQgMAAgMgIgAhANeQgSgCgLgNQgLgOABgRQACgSANgLQAOgMASACQARACALANQAMAOgCARQgBARgNALQgMALgQAAgAklMvQgRgGgIgQQgIgPAGgRQAFgRAQgIQAQgHARAFQAQAGAIAQQAIAPgGARQgEANgLAIQgLAIgOAAQgHAAgGgCgAINJ2QgMgMABgSQAAgSANgMQANgMASABQARAAAMANQAMANAAASQgBARgNAMQgLAMgSAAQgSAAgNgOgAKkHQQgPgJgEgRQgFgSAJgPQAKgPARgEQARgEAPAJQAPAJAEASQAEARgJAPIAAAAQgNAUgXAAQgNAAgJgGgAFQLuQgJgPAGgRQAFgRAQgIQAQgIAQAFQARAGAIAPQAIAQgFARQgGAQgPAIQgJAFgLAAQgLAAgKgGQgLgGgFgLgAB5MvQgEgRAKgPQAJgPASgEQARgDAPAJQAOAKAEARQAEARgKAPQgKAPgRAEQgDAAgGAAQgPAAgLgJQgMgJgDgPg");
	this.shape.setTransform(87.409,87.616);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(-3.2,0.1,184.1,181.20000000000002), null);


(lib.Group_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Group_4();
	this.instance.setTransform(10.5,10.5,1,1,0,0,0,10.5,10.5);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Group_1_2();
	this.instance_1.setTransform(10.5,10.55,1,1,0,0,0,3.5,3.5);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path_0();
	this.instance_2.setTransform(10.5,10.5,1,1,0,0,0,7.4,7.4);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,21,21), null);


(lib.Group_1_0 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Group_2();
	this.instance.setTransform(10.5,10.5,1,1,0,0,0,10.5,10.5);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Group_1_1();
	this.instance_1.setTransform(10.5,10.5,1,1,0,0,0,3.5,3.5);
	this.instance_1.alpha = 0.5;

	this.instance_2 = new lib.Path();
	this.instance_2.setTransform(10.5,10.45,1,1,0,0,0,7.4,7.4);
	this.instance_2.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_1_0, new cjs.Rectangle(0,0,21,21), null);


(lib.cog_medium = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Group();
	this.instance.setTransform(3.15,3.1,1,1,0,0,0,88.9,90.7);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Group_1_3();
	this.instance_1.setTransform(-0.05,0,1,1,0,0,0,132.3,134.5);
	this.instance_1.alpha = 0.1797;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cog_medium, new cjs.Rectangle(-132.4,-134.5,264.9,269.1), null);


(lib.cog_large = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Tween1("synched",0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cog_large, new cjs.Rectangle(-318.3,-321.5,636.7,643), null);


(lib.innerWorkings = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhPAaQgTggAEgXQAFgWAbgQQAbgPAVAIQAUAJATAgIALATIAogXIATAhIiRBSgAgtghQgNAHgBALQgBALAJAPIAKASIAwgcIgLgVQgJgQgKgCIgFAAQgIAAgJAFg");
	this.shape.setTransform(542.8069,96.0745);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWBVQgigKgSggQgTghAJghQAJgiAggTQAhgSAhAKQAiAJASAhQATAggJAiQgJAighASQgVAMgVAAQgLAAgMgDgAgYgrQgTALgHAVQgGATAKATQAKASAVAEQAUAFAUgLQATgLAHgVQAGgTgKgSQgLgSgUgFIgMgBQgOAAgOAHg");
	this.shape_1.setTransform(550.875,110.1614);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhdgkIAdgQIAXAqIB0hDIATAgIh1BCIAXApIgbAQg");
	this.shape_2.setTransform(558.3,127.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgpBMQgTgJgNgWQgIgPgDgRQgEgQADgRIAhADQgDAaALAUQAFAJAHACQAGADAGgEQAHgEAAgHQABgIgHgXQgHgYAEgRQAEgRASgLQAUgLAUAHQAVAIANAYQAUAjgKApIgigGQAHgigLgUQgGgJgGgDQgHgDgHAEQgGAEgBAHQgBAIAFASQAJAcgDARQgDASgUAMQgMAHgMAAQgIAAgJgEg");
	this.shape_3.setTransform(566.6974,137.9036);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhrAPIAcg4QASgjATgJQAUgJAZANQAkASgEAiIBJgLIgVAoIhAAJIgMAXIAwAYIgRAigAghgxQgIAFgIAQIgNAZIAtAVIAMgYQAIgRgDgJQgBgJgMgGQgHgDgGAAQgEAAgDABg");
	this.shape_4.setTransform(15.9,81.182);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhmARIA3hrIAeAPIgmBKIAfAPIAghDIAdAPIgiBBIAgAQIAmhMIAeAPIg4Btg");
	this.shape_5.setTransform(8.375,95);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AheARIAag0QAVgoAegLQAdgMAjARQAjASAKAfQAKAfgVAqIgaAzgAgIgzQgSAGgNAaIgJASIBaAtIALgVQALgXgFgRQgGgTgWgLQgOgHgMAAQgGAAgHADg");
	this.shape_6.setTransform(-0.6163,111.4309);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhSgUIARghICUBKIgRAhg");
	this.shape_7.setTransform(-5.35,122.275);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAGA2QAhgOAKgVQAFgJgCgHQgBgHgHgDQgHgDgGAEQgHADgMAOQgTAWgQAHQgQAIgVgLQgWgKgDgWQgEgUALgXQAIgPAMgMQANgNAPgGIAQAdQgYAMgLAVQgEAIACAHQABAHAHACQAGAEAHgEQAHgDAQgTQAOgTARgGQARgHAUAKQAUAKAFAWQAFAUgNAZQgSAjgoAPg");
	this.shape_8.setTransform(-10.4302,132.625);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhtAgIAQggICEgYIhfgwIARgiICVBLIgRAhIiBAYIBdAvIgRAig");
	this.shape_9.setTransform(-18.275,148.225);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgmBPQghgRgLghQgLghARghQAQgiAigLQAggMAhAQQAhARALAiQALAggQAiQgRAhgiAMQgOAEgNAAQgTAAgTgJgAgRgwQgVAGgJATQgKATAIATQAIAUAUAKQAUAKAUgGQAUgGAKgTQAJgTgIgTQgIgUgUgKQgMgGgMAAQgIAAgHACg");
	this.shape_10.setTransform(-27.162,165.7835);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgmBOQghgRgLgiQgLghARghQASglApgLIANAhQgcAGgLAYQgKASAGATQAFATAVALQAVAKATgGQASgHAJgSQANgXgMgaIAhgKQAQAngSAjQgRAighAMQgOAFgNAAQgTAAgUgKg");
	this.shape_11.setTransform(-35.0629,181.6612);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhDBGIAFgfIAvAGIASiFIAlAFIgTCFIAvAHIgEAgg");
	this.shape_12.setTransform(196.85,590.95);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AgKBVQgngGgOgPQgPgQAEgdQAGgnAhgHIgihBIAuAGIAcA7IAaADIAHg1IAlAFIgXClgAgbAGQgHAFgCAOQgCANAHAGQAGAGARADIAbAEIAHgyIgagEIgLgBQgKAAgGAEg");
	this.shape_13.setTransform(213.8568,592.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgpBWIgwiwIAnAGIALAmIBFAKIAUgiIAnAFIheCbgAgQAnIAbgsIgogHg");
	this.shape_14.setTransform(232.25,594.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhDBHIAEghIAwAHIASiFIAlAGIgTCEIAvAHIgEAgg");
	this.shape_15.setTransform(246.15,597.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgNBWQgRgCgPgIQgQgIgLgNIAXgYQATAUAXADQAIABAHgEQAFgDABgHQABgIgFgFQgHgFgVgJQgXgJgLgNQgMgNADgWQAEgXASgMQATgLAaAEQAoAFAbAiIgZAYQgZgbgWgEQgJgBgHAEQgGADgBAHQgBAIAFAFQAGAGAQAHQAcALANAMQALANgDAXQgDAYgTAKQgOAIgRAAIgNgBg");
	this.shape_16.setTransform(262.1,599.7171);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#B2B2B2","#DADADA"],[0,1],80.2,139.2,-57.4,-101.8).s().p("AiaVoQoPgfnljgQmOi6k+knQk1kejSltIGNjlIfXyDMAlgAVvQkOHPmUFAQmPE8nnCaQmcCDmsAAQhOAAhPgEg");
	this.shape_17.setTransform(275.9,276.25,1,1,0,0,0,3.7,-135.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#878787","#C6C6C6"],[0,1],121.2,-207.4,-120.5,207.5).s().p("EgS0AgWIACgBIAKgHIF6jaQh9jZhMjwQhMjxgXj9QgqnWCPm+QCLmuEjldQEjlcGPjWQGejcHWgqQBfgJBxgBIAAm6IAGAAMAAAArVI9wRIQgSAKgRALInRELIgFgJg");
	this.shape_18.setTransform(154.275,206.025);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#878787","#C6C6C6"],[0,1],90.6,-237.2,-153,181).s().p("EgP2Ag2QgbAAgOgXQgJgRAGgSQAFgSAPgJIACgBIAAAAIgdg3IgCABQgKAFgIgBQgNAAgMgHQgLgHgGgMQgIgRAHgSQAFgSAQgIIACAAIABgBIgag4IgCABQgJADgIAAQgOAAgLgIQgMgIgFgNQgIgRAIgSQAHgSARgHIABAAIAAgBIgWg5IgBAAQgHADgIAAQgOAAgMgIQgNgJgEgOQgHgSAIgRQAJgRASgHIgEgMIgJgeIgFgQIgBgBQgHADgHgBQgPABgLgKQgNgJgEgPQgGgSAJgRQAKgRASgFIgPg8IgBAAIgKABQgQAAgMgKQgNgKgEgQQgFgSAKgQQALgRASgEIABAAIgMg8IgBAAIgIAAQgQAAgNgKQgOgLgDgRQgDgSALgRQALgPAUgDIAAAAIgJg9IgBgBIgFABQgRAAgOgMQgNgMgCgRQgCgTAMgPQALgPAUgCIAAgBIgFg8IgBgBIgDAAQgSABgNgNQgOgNgBgSQgBgUANgNQAMgPATgBIABAAIgCg+IgBAAQgTAAgOgNQgMgOgBgTQAAgTAOgNQANgOATAAIABAAIABg+IAAAAQgUgBgMgOQgNgOABgTQABgUAOgMQAOgNATABIAAAAIAGg9IgBgBQgTgBgMgPQgMgPACgTQACgTAPgMQAOgMATABIABABIAJg+IgBABQgTgDgLgQQgLgQADgTQADgSAQgLQAPgMATADIABAAIALg8IAAgBQgTgEgLgQQgKgQAEgSQAFgTAQgLQAQgKATAEIAAAAIAPg8IgBAAQgSgFgJgPQgKgRAFgTQAGgSAQgKQARgJASAGIABAAIASg7IgBAAQgSgGgIgRQgIgSAGgSQAGgSARgJQARgIASAGIABAAIAVg6IAAAAQgSgHgHgSQgIgRAHgSQAIgSARgHQASgIARAHIAAAAIAag4IgBAAQgRgJgHgSQgHgRAJgSQAHgRATgGQASgHARAIIABAAIAcg3IgBAAQgRgJgFgTQgGgSAJgRQAJgQASgGQATgGARAJIAAABIAfg2IAAAAQgQgKgFgTQgEgTAKgPQAKgRASgEQASgFARAKIAAAAIAigzIgBAAQgPgLgEgTQgDgTALgQQAKgQATgEQATgCAQAKIABABIAkgyQgPgMgCgTQgDgTAMgPQALgPATgCQATgDAQALIAAABIAngvIAAgBQgPgMgBgUQgBgTAMgOQANgPATgBQATgBAOAMIABABIAqguIgBAAQgNgOAAgSQAAgTANgOQANgOATAAQATgBAOAOIAAAAIAtgrIAAAAQgOgOABgTQABgTAPgNQANgOAUACQATAAANAPIAAAAIAvgpIgBAAQgMgOACgTQACgUAPgMQAPgMATACQATACAMAPIAxglIAAgBQgLgPADgTQACgTAQgMQAPgLATADQAUADAKAQIAAAAIA0gjIgBAAQgKgQAEgTQAEgTAQgLQAQgKASAEQATAFALAPIABABIA0ggIgBgBQgJgQAFgTQAFgSAQgKQARgJASAFQATAFAJARIABAAIA1gdIAAgBQgJgRAHgSQAGgSARgJQARgIASAGQATAGAIARIAAAAIA4gaIAAAAQgIgRAHgSQAHgSASgIQASgHASAHQARAHAIARIAAABIA5gYIAAAAQgHgSAIgSQAIgRASgGQATgHAQAJQASAHAGASIABABIA6gUIAAgBQgGgRAJgSQAKgQASgGQASgFASAIQAPAJAGATIABAAIA7gQIAAgBQgEgSAJgRQALgQASgEIAAgBQASgEARAJQARAKAEATIAAAAIA8gMIAAgBQgDgTAKgPQALgQATgEQATgDAQAKQAPALAEATIAAAAIA9gKQgDgTAMgPQALgPATgDQATgCAQALQAPANADASIgBABIA+gHQgBgTAMgOQAMgPATgCQATgBAPANQAOAMACATIAAABIA9gEIABAAQgBgTAOgOQANgOATAAQATAAAOANQAOANAAATIAAABIAHAAIAAAGIAAG6QhxABhfAJQnWAqmeDcQmPDWkjFcQkjFdiLGtQiPG/AqHWQAXD9BMDxQBMDwB9DZIl6DaIgKAHIgCABQgIAFgIAAIgEgBg");
	this.shape_19.setTransform(133.275,203.2151);

	this.text = new cjs.Text("", "14px 'Montserrat-Bold'", "#878787");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.parent = this;
	this.text.setTransform(141.8,-20.1);

	this.instance = new lib.Group_3();
	this.instance.setTransform(534.45,229.2,1,1,-5.0083,0,0,10.6,10.6);
	this.instance.alpha = 0.5;

	this.instance_1 = new lib.Group_1_0();
	this.instance_1.setTransform(451.45,79.05,1,1,-5.0083,0,0,10.6,10.5);
	this.instance_1.alpha = 0.5;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#3C3C3B").s().p("ADJPuQgGlZhmlJQhllLjBkkQimj8jcjMIERkTIA7A5QDTDRClD8QDiFZB3GFQB2GDAEGWg");
	this.shape_20.setTransform(488.6174,151.2987,1,1,-5.0075);

	this.instance_2 = new lib.Group_1();
	this.instance_2.setTransform(273.75,276.05,1,1,0,0,0,129,131.1);
	this.instance_2.alpha = 0.1484;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#878787","#575756"],[0,1],-136.2,0,136.2,0).s().p("A1LKoMgAGgqVIAFgBQAVAAARAPQASAPACAVIAQCnQA5ACA4AEIAhilQAEgVATgNQATgNAVACQAXADAOAQQARAQgBAWIgBCoQAyAHA9ALIAzihQAFgUAVgMQAUgLAVAFQAWAEANASQAPASgDAVIgTCoQA1ANA4AQIBCibQAJgTAVgKQAVgJAVAHQAVAHAMATQALATgEAWIglCkQAxARA4AXIBTiTQALgTAWgGQAVgHAUAJQAVAJAJAUQAKAVgHAUIg1CgQAsAWA4AdIBhiKQANgRAXgEQAWgEASALQASAKAJAVQAHAWgJAUIhECZQArAbAyAiIBvh/QAPgQAXgCQAVgBASAMQASANAGAWQAFAWgLATIhVCRIBXBGIB8hyQAQgPAXABQAWABARAOQAQAPADAWQAEAWgNASIhlCIQAlAiArAtICHhlQAQgMAYACQAWADAPARQAPAQAAAWQABAYgPAPIhxB8QAjAqAjAuICShXQARgKAXAFQAXAGAMARQANARgCAXQgBAXgRAOIh+BwQAYAjAmA7ICZhHQAUgJAWAIQAUAIALASQAMAUgEAVQgEAWgSAOIiKBiQAhA9ASAnIChg3QAUgGAUAJQAVAKAJAUQAIAVgFAUQgHAWgTALIiSBTQATAvAVA6IClglQAUgFAUAMQATAMAHAVQAGAUgHAVQgJAWgUAIIibBEQATA8ALAvICngUQAVgCATAOQARANAFAWQAFAVgLAUQgKAUgWAHIigAzQAKA3AIA4ICogDQAWAAAQAQQARAQACAVQADAWgOASQgMATgWAFIikAiQAEA4ACA4ICnAPQAWACAOASQAPARAAAWQAAAWgOARQgPASgWABIinARQgDBLgDAlIClAhQAWAEAMATQANATgCAVQgCAVgRARQgQAQgWgBIipgBQgGAygLA9IChAyQAUAHAMAUQAKATgEAWQgGAWgQANQgTAPgVgDIingTQgPA+gOAvICbBCQASAIAKAWQAIAVgHAUQgGAVgTAMQgVAMgTgEIilglQgSAxgXA4ICTBTQATALAHAVQAGAVgJAVQgJAVgTAJQgWAKgUgHIigg1QgWAvgcA1ICJBhQASANADAWQAFAWgLATg");
	this.shape_21.setTransform(410.4,207.475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8D8E8E").s().p("AjBBxIGDjhIAAABImDDgg");
	this.shape_22.setTransform(54.7,403.675);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DDDDDD").s().p("AhTgvIAAAAICnBfIAAABg");
	this.shape_23.setTransform(484.65,395.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#DC5D2A").s().p("A/bAUIAzgdIACACIg0AcgAeogUIAAAAIA0AcIgBAAg");
	this.shape_24.setTransform(275.125,390.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#CDCECD").s().p("AgEgCIAJAFIAAAAg");
	this.shape_25.setTransform(470.6375,387.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#878787","#C6C6C6"],[0,1],-460,-27.9,20.2,-27.9).s().p("AiLC7IgEAFIgGAHgAhCBmIAmgwIABAAIAAABIgmAwgAAbgTIAAAAIAkgyIAAAAIACABIgkAyIgCgBgABziRIgBgBIAig0IAAABIACABIghA0IgCgBg");
	this.shape_26.setTransform(495.35,442.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.instance_2},{t:this.shape_20},{t:this.instance_1},{t:this.instance},{t:this.text},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.innerWorkings, new cjs.Rectangle(-55.3,-22.1,641.3,639.9), null);


// stage content:
(lib.Untitled3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		/* Stop at This Frame
		The Animate timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		stop();
		
		
		let tl = gsap.timeline({
		  delay: 0.5,
		  paused: false, // default is false
		  repeat: -1, // number of repeats (-1 for infinite)
		  repeatDelay: 0, // seconds between repeats
		  //onComplete: myFunc,
		  // other callbacks: 
		  // onStart, onUpdate, onRepeat, onReverseComplete
		  // Each callback has a params property as well
		  // i.e. onUpdateParams (Array)
		});
		
		
		/* Rotate Continuously
		Rotates symbol instance continuously by updating its rotation property within an Tick event.
		
		Instructions:
		1. The default rotation of the code as written is clock-wise.
		2. To change the direction of the rotation to counter clock-wise, change the number 10 below to a negative value.
		3. To change the speed at which the symbol instance rotates, change the number 10 below to the number of degrees you want to rotate the symbol instance each frame. Higher numbers cause faster rotation.
		4. Because the animation uses an Tick event, it progresses only when the playhead moves to a new frame. The speed of the animation is also affected by the document frame rate.
		*/
		
		this.addEventListener("tick",fl_RotateContinuously.bind(this));
		
		function fl_RotateContinuously(){  
			this.cog_small.rotation-=0.2;
			this.cog_medium.rotation-=0.1;
			this.cog_large.rotation-=0.1;
		}
		
		
		/* Mouse Click Event
		Clicking on the specified symbol instance executes a function in which you can add your own custom code.
		
		Instructions:
		1. Add your custom code on a new line after the line that says "// Start your custom code" below.
		The code will execute when the symbol instance is clicked.
		*/
		
		this.pie_01.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			// Start your custom code
			const button = document.getElementById("animation_container")
			// This example code displays the words "Mouse clicked" in the Output panel.
			
			gsap.to(this.cog_medium, 3, {rotation: "-360", repeat: -1, ease:Linear.easeNone});
		
			gsap.to(this.innerWorkings, 20, {rotation: "-360", repeat: -1, ease:Linear.easeNone});
			
			tl.to(this.pie_01, 3, {rotation: "-360", repeat: -1, ease:"expo.in"})
				.to(this.pie_02, 3, {rotation: "-360", repeat: -1, ease:"expo.in"})
				.to(this.pie_03, 3, {rotation: "-360", repeat: -1, ease:"expo.in"});
			
			tl.play();
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// innerCogs
	this.cog_small = new lib.cog_small();
	this.cog_small.name = "cog_small";
	this.cog_small.setTransform(315.55,314.85);

	this.cog_medium = new lib.cog_medium();
	this.cog_medium.name = "cog_medium";
	this.cog_medium.setTransform(315,315);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cog_medium},{t:this.cog_small}]}).wait(1));

	// innerWorkings
	this.innerWorkings = new lib.innerWorkings();
	this.innerWorkings.name = "innerWorkings";
	this.innerWorkings.setTransform(315.65,315.15,0.9133,0.9133,120.0003,0,0,275.4,276);

	this.timeline.addTween(cjs.Tween.get(this.innerWorkings).wait(1));

	// innerDisk
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C6C6C6").s().p("EgA9ApwQgcgXgDgiIgJhbQh1gEh3gQIgYBXQgIAgggATQggASghgGQgjgGgWgbQgYgdADghIAHhaQh1gahwgjIgmBQQgPAfgiANQghAMghgLQghgNgRgeQgSggAIghIAWhXQhtgshqg4IgzBIQgTAcglAHQgjAHgegSQgegQgMgjQgNgiAPgfIAlhRQhhg+hihLIg/A/QgZAXgkABQgkAAgagWQgbgXgGgiQgGglATgcIAyhJQhXhQhRhYIhIAyQgdAUgkgHQgigFgXgbQgWgbAAgkQAAgkAYgZIA+g/QhHhahDhoIhPAkQgfAOgigMQghgLgSggQgSgeAHgiQAHglAbgTIBHgzQg3hoguhwIhUAWQghAIgggSQgfgSgLggQgMghAMghQAMgiAggQIBNgkQgkhxgZh2IhWAHQgiACgcgXQgbgWgHgjQgGghASggQATggAhgIIBTgYQgQh4gFh1IhWgJQgigDgXgcQgXgbAAgjQAAgiAWgbQAZgcAhgDIBWgIQAFh2AQh4IhTgXQgigJgSggQgSgfAGgiQAHgiAbgXQAcgXAiADIBWAHQAZh2AkhxIhNglQgfgPgNgjQgMgiAMggQALggAfgSQAhgSAgAIIBUAWQAwh0A1hkIhHgzQgcgTgGglQgGgjARgdQARgeAigNQAigMAfAOIBPAkQBDhoBHhaIg+g/QgYgZAAgkQAAgkAWgaQAWgbAjgGQAlgGAcAUIBIAxQBQhXBYhRIgyhIQgTgdAGgkQAGgjAbgXQAbgXAjACQAlAAAYAXIA/A/QBihLBhg+IglhRQgPgeANgjQAMghAegSQAegRAjAGQAkAHAUAcIAzBJQBqg4BtgtIgWhXQgIghASgfQARgfAhgNQAggLAiAMQAiANAPAfIAmBQQBzgkBygZIgHhZQgDgiAYgdQAXgbAigGQAigGAfASQAfASAJAiIAYBWQBvgPB9gFIAJhaQADgiAcgYQAbgXAiAAQAjAAAbAXQAcAYADAiIAIBaQB9AFBwAPIAXhWQAKgiAfgSQAegSAjAGQAiAGAXAbQAYAdgDAiIgIBZQB6AbBsAiIAmhQQAPgfAigNQAhgMAhALQAhANARAfQATAfgJAhIgXBXQBwAuBoA3IAzhJQAUgcAkgHQAigHAfASQAfASALAhQANAjgPAeIglBRQBmBBBdBIIA/g/QAYgXAlAAQAkgBAaAWQAbAXAGAjQAGAjgTAeIgzBIQBZBQBQBYIBIgxQAcgUAlAGQAjAGAWAbQAWAbAAAjQgBAlgXAYIg+A/QBMBhA9BhIBQgkQAegOAjAMQAiANARAeQARAdgGAjQgHAlgbATIhHAzQA3BpAuBvIBTgWQAigIAfASQAfARAMAhQAMAggMAiQgNAjgfAPIhNAlQAkBxAZB2IBWgHQAigDAcAXQAbAXAGAiQAGAjgRAeQgTAgghAJIhTAXQAQB4AFB2IBWAIQAhADAYAcQAXAbAAAiQAAAjgXAbQgXAcgiADIhWAJQgFB1gQB4IBTAYQAgAIAUAgQARAfgGAiQgGAjgbAWQgcAXgigCIhWgHQgZB2gkBxIBNAkQAfAQANAiQAMAhgMAhQgMAhgfARQgfASgigIIhTgWQgsBsg5BsIBHAzQAbATAHAlQAGAkgRAcQgRAegiANQgjALgegNIhQgkQg9BhhMBhIA+A/QAXAYABAlQAAAkgWAbQgXAbgiAFQgkAHgdgUIhIgyQhSBZhXBPIAzBJQATAcgGAlQgGAigbAXQgaAWgkAAQglgBgYgXIg/g/QhdBIhmBBIAlBRQAPAfgNAiQgMAigeARQgeASgjgHQgkgHgUgcIgzhIQhoA3hwAtIAXBXQAIAggSAhQgSAfggAMQghAMghgMQgjgOgOgfIgmhQQhxAjh1AaIAIBaQADAhgYAdQgXAbgiAGQgiAGgfgSQgfgTgKggIgXhXQh4AQh1AEIgIBbQgDAhgcAYQgbAXgjAAQghAAgcgXg");
	this.shape.setTransform(315.0027,315.0267,1.0409,1.0409);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// pie
	this.pie_03 = new lib.pie_03();
	this.pie_03.name = "pie_03";
	this.pie_03.setTransform(315,315,1,1,0,0,0,0,49);

	this.pie_02 = new lib.pie_02();
	this.pie_02.name = "pie_02";
	this.pie_02.setTransform(315,315,1,1,0,0,0,0,215.7);

	this.pie_01 = new lib.pie_01();
	this.pie_01.name = "pie_01";
	this.pie_01.setTransform(314.95,315);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgaAdQgMgLAAgSQAAgSAMgKQALgKAQAAQAQAAALAJQAKAKABAQIAAAKIg3AAQAAAHAGAEQAFAEAHAAQALAAAIgHIALAMQgNANgRAAQgQAAgMgLgAARgHQgBgHgEgEQgFgDgGAAQgGAAgFAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_1.setTransform(469,490.75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVAnIAAhMIAVAAIAAAKQAEgFAGgDQAGgDAGAAIAAAUIgEAAQgJAAgFAGQgEAIAAAJIAAAig");
	this.shape_2.setTransform(461.925,490.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgaAfQgJgIAAgPIAAguIAVAAIAAApQAAARAOAAQAFAAAEgEQAFgEABgKIAAgoIAVAAIAABMIgVAAIAAgKQgJALgMAAQgMAAgIgIg");
	this.shape_3.setTransform(454.1,490.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgKAsQgIgIAAgMIAAgjIgJAAIAAgQIAJAAIAAgXIAVAAIAAAXIASAAIAAAQIgSAAIAAAiQAAAEACACQACADADAAQAGAAAEgGIAIAQQgKAIgLABQgKgBgHgGg");
	this.shape_4.setTransform(446.625,489.65);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgKA1IAAhpIAVAAIAABpg");
	this.shape_5.setTransform(441.225,489.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgaAfQgJgIAAgPIAAguIAVAAIAAApQABARANAAQAFAAAFgEQAEgEAAgKIAAgoIAWAAIAABMIgWAAIAAgKQgIALgMAAQgMAAgIgIg");
	this.shape_6.setTransform(434.55,490.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgYAcQgMgKAAgSQAAgRANgLQAMgLAPABQAIAAAJACQAJAEAGAHIgLAPQgEgFgFgDQgGgCgFAAQgHAAgGAGQgHAFAAAJQAAAJAHAGQAGAGAHAAQAKAAAJgLIANAOQgPAQgRAAQgRAAgMgMg");
	this.shape_7.setTransform(425.925,490.75);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgSAzQgJgDgHgFIAIgQQALAIAMAAQALAAAGgGQAHgGAAgMQgKALgOAAQgPAAgKgKQgLgKAAgQQAAgSALgLQALgKANAAQANAAAJALIAAgKIAWAAIAABCQAAAKgEAIQgEAIgGAFQgMAJgPAAQgIAAgJgDgAgMgeQgFAFAAAKQAAAJAFAFQAGAFAGAAQAIAAAFgFQAFgFAAgJQAAgKgFgFQgFgFgIAAQgGAAgGAFg");
	this.shape_8.setTransform(472.175,471.925);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAPAnIAAgqQAAgSgOAAQgFAAgFAEQgEAFgBAJIAAAqIgVAAIAAhMIAVAAIAAAJQAKgKAMAAQAMAAAIAJQAIAIAAAOIAAAug");
	this.shape_9.setTransform(463.1,470.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAUAAIAABMgAgIgfQgEgEABgFQgBgGAEgDQADgEAFAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEADgFAAQgFAAgDgDg");
	this.shape_10.setTransform(456.45,468.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAOAnIAAgqQAAgSgNAAQgFAAgEAEQgGAFAAAJIAAAqIgVAAIAAhMIAVAAIAAAJQALgKALAAQAMAAAIAJQAIAIAAAOIAAAug");
	this.shape_11.setTransform(449.85,470.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgVAnIAAhMIAVAAIAAAKQAEgFAGgDQAGgDAGAAIAAAUIgEAAQgJAAgFAHQgEAGAAALIAAAhg");
	this.shape_12.setTransform(442.625,470.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgZAgQgJgGAAgNQAAgLAJgFQAIgGAPAAIAPAAQAAgNgNAAQgEAAgGACIgLAGIgKgNQAQgMASAAQAOABAJAGQAJAHAAAQIAAAvIgUAAIAAgJQgJAKgLAAQgMABgIgIgAgMANQAAAFADACQADACAGAAQAEAAAFgDQAEgEAAgGIAAgEIgNAAQgMABAAAHg");
	this.shape_13.setTransform(435.025,470.45);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgaAdQgMgLAAgSQAAgRAMgLQALgLAQAAQAQAAALAKQAKAKABAQIAAALIg3AAQAAAGAGAEQAFAEAHAAQALAAAIgIIALAOQgNAMgRgBQgQAAgMgKgAARgGQgBgIgEgDQgFgEgGAAQgFAAgGAEQgFADgBAIIAhAAIAAAAg");
	this.shape_14.setTransform(426.6,470.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgKA1IAAhpIAVAAIAABpg");
	this.shape_15.setTransform(420.075,469);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgZAhQgJgIAAgLQAAgMAJgFQAIgGAPAAIAPAAQAAgMgNAAQgEAAgGACIgLAFIgKgOQAQgLASABQAOgBAJAIQAJAGAAAQIAAAvIgUAAIAAgJQgJALgLAAQgMgBgIgGgAgMAOQAAAEADACQADACAGAAQAEAAAFgEQAEgDAAgGIAAgDIgNAAQgMgBAAAJg");
	this.shape_16.setTransform(468.575,450.15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AAOAmIgOgoIgOAoIgVAAIgahLIAVAAIAPAtIAQgtIATAAIAQAtIAOgtIAXAAIgaBLg");
	this.shape_17.setTransform(454.35,450.15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgQAMgLQAMgLAQAAQASAAALALQAMALAAAQQAAARgMALQgLAMgSAAQgQAAgMgMgAgNgPQgFAHAAAIQAAAJAFAHQAGAFAHABQAIgBAGgFQAFgHAAgJQAAgIgFgHQgGgFgIAAQgHAAgGAFg");
	this.shape_18.setTransform(443.275,450.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVAnIAAhMIAVAAIAAAKQAEgEAGgEQAGgDAGAAIAAAUIgEAAQgJAAgFAGQgEAHAAAKIAAAig");
	this.shape_19.setTransform(436.025,450.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgeAlQgPgPgBgWQAAgVAQgPQAPgPAUAAQAWABAQAOIgLAQQgIgFgFgDQgFgCgHAAQgMAAgIAIQgKAJABAOQAAANAIAJQAJAJAKgBQALABAIgFIAAgbIAXAAIAAAjQgPAQgbABQgVAAgOgPg");
	this.shape_20.setTransform(427.4,448.95);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AgnAsIAKgPQAFAFAGAAQADAAACgDQACgDAAgDQAAgEgehKIAXAAIASAwIATgwIAXAAIgkBaQgDAIgGAEQgHAFgIAAQgLAAgKgKg");
	this.shape_21.setTransform(175.375,242.775);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AgKAsQgIgIAAgNIAAgiIgJAAIAAgPIAJAAIAAgYIAVAAIAAAYIASAAIAAAPIgSAAIAAAhQAAAFACACQACADADAAQAGAAAEgFIAIAOQgKAJgLAAQgKAAgHgGg");
	this.shape_22.setTransform(168.225,240.15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgKA2IAAhMIAUAAIAABMgAgIggQgDgDAAgGQAAgFADgEQAEgDAEAAQAFAAAEADQAEAEgBAFQABAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_23.setTransform(162.85,239.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgKA1IAAhpIAVAAIAABpg");
	this.shape_24.setTransform(158.675,239.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgKA2IAAhMIAVAAIAABMgAgIggQgEgDAAgGQAAgFAEgEQADgDAFAAQAFAAAEADQADAEAAAFQAAAGgDADQgEAEgFAAQgFAAgDgEg");
	this.shape_25.setTransform(154.55,239.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("AgRAqIAAAKIgWAAIAAhoIAWAAIAAAlQAJgJANAAQAOAAAKAKQALALAAAQQAAARgLAMQgLAMgNgBQgNAAgJgLgAgMgBQgFAGAAAJQAAAJAFAHQAFAFAHAAQAHAAAFgFQAGgHAAgJQAAgJgFgGQgGgFgHAAQgHAAgFAFg");
	this.shape_26.setTransform(147.925,239.85);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("AgZAhQgJgIAAgLQAAgMAJgFQAIgGAPAAIAPAAQAAgMgNAAQgEAAgGACIgLAFIgKgNQAQgLASAAQAOAAAJAGQAJAIAAAPIAAAvIgUAAIAAgJQgJALgLgBQgMAAgIgGgAgMAOQAAAEADACQADACAGAAQAEAAAFgEQAEgDAAgGIAAgDIgNAAQgMAAAAAIg");
	this.shape_27.setTransform(138.575,241.25);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("AgKA2IAAhMIAUAAIAABMgAgIggQgEgDABgGQgBgFAEgEQADgDAFAAQAFAAAEADQAEAEAAAFQAAAGgEADQgEAEgFAAQgFAAgDgEg");
	this.shape_28.setTransform(132.45,239.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgKA1IAAhpIAVAAIAABpg");
	this.shape_29.setTransform(128.275,239.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgaAdQgMgLAAgSQAAgSAMgKQAMgKAOAAQARAAAKAJQAMAKAAAQIAAALIg4AAQACAGAFAEQAFAEAHAAQALAAAIgHIALAMQgNAMgRAAQgQABgMgLgAARgHQgBgGgEgFQgFgDgGAAQgFAAgGAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_30.setTransform(121.85,241.25);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AgVAnIAAhMIAVAAIAAAKQAEgEAGgEQAGgDAGAAIAAAUIgEAAQgJAAgFAGQgEAIAAAJIAAAig");
	this.shape_31.setTransform(114.775,241.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AgaAdQgLgLAAgSQAAgRALgLQALgLAPAAQAQAAALAKQALAJAAARIAAAKIg3AAQACAHAFAEQAGAEAFAAQAMAAAHgIIANAOQgOALgRABQgRAAgLgLgAARgGQgBgHgFgFQgEgDgGAAQgFAAgGAEQgFADgBAIIAhAAIAAAAg");
	this.shape_32.setTransform(167,220.95);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AgYAdQgMgLAAgSQAAgQANgMQAMgKAPgBQAIAAAJADQAJAEAGAHIgLAOQgEgEgFgDQgGgCgFAAQgHAAgGAGQgHAFAAAJQAAAJAHAGQAGAFAHABQAKAAAJgLIANAOQgPAQgRAAQgRgBgMgKg");
	this.shape_33.setTransform(158.475,220.95);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AgKA2IAAhMIAVAAIAABMgAgIgfQgDgFgBgEQABgGADgDQADgEAFAAQAFAAAEAEQADADAAAGQAAAEgDAFQgEADgFAAQgFAAgDgDg");
	this.shape_34.setTransform(152.2,219.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgKAnIgehNIAWAAIASAwIATgwIAXAAIgfBNg");
	this.shape_35.setTransform(145.95,220.95);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AgVAnIAAhMIAVAAIAAAKQAEgEAGgEQAGgDAGAAIAAAUIgEAAQgJAAgFAHQgEAGAAALIAAAhg");
	this.shape_36.setTransform(139.125,220.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AgaAdQgLgLAAgSQAAgRALgLQAMgLAOAAQAQAAALAKQALAJAAARIAAAKIg3AAQABAHAGAEQAGAEAFAAQAMAAAHgIIANAOQgOALgRABQgQAAgMgLgAARgGQgBgHgFgFQgEgDgGAAQgGAAgFAEQgFADgBAIIAhAAIAAAAg");
	this.shape_37.setTransform(131.55,220.95);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AgOAlQgKgEgHgFIAJgOQAMAJANAAQAEAAADgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgDgEgBQgDgDgFgCIgKgEIgIgDQgIgFgBgKQABgLAIgHQAJgGANgBQANAAAOAJIgIAPQgKgHgKAAQgJAAAAAGQAAACADACIAJAEIAKAEIAIADQAIAEAAALQAAAMgJAHQgHAGgNABQgIAAgJgDg");
	this.shape_38.setTransform(123.3,220.95);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AgaAdQgLgLAAgSQAAgRALgLQAMgLAOABQAQgBALAKQAMAKgBAQIAAALIg3AAQACAGAFAEQAGAEAFAAQAMAAAHgHIANAMQgOAMgRAAQgRAAgLgKgAARgHQgBgGgFgEQgEgEgGAAQgFAAgGAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_39.setTransform(171.85,200.65);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AgOAlQgJgEgIgGIAKgNQAMAKAMAAQAEgBACgCQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgEgEgCQgDgCgFgCIgKgEIgIgEQgIgEgBgLQABgLAIgGQAJgHANABQANAAAOAJIgIAOQgLgHgJAAQgJAAAAAFQAAADADACIAJAEIAKADIAIAFQAIADAAAMQAAALgIAHQgJAHgMgBQgIAAgJgCg");
	this.shape_40.setTransform(163.6,200.65);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AgZAhQgJgIAAgMQAAgLAJgFQAIgGAPAAIAPAAQAAgNgNAAQgEABgGACIgLAFIgKgNQAQgLASAAQAOAAAJAGQAJAIAAAPIAAAvIgUAAIAAgJQgJAKgLAAQgMAAgIgGgAgMANQAAAEADADQADACAGAAQAEAAAFgDQAEgEAAgGIAAgDIgNAAQgMAAAAAHg");
	this.shape_41.setTransform(155.625,200.65);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AgaAdQgLgLAAgSQAAgRALgLQALgLAPABQAQgBALAKQALAKAAAQIAAALIg3AAQACAGAFAEQAGAEAFAAQAMAAAHgHIANAMQgOAMgRAAQgRAAgLgKgAARgHQgBgGgFgEQgEgEgGAAQgFAAgGAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_42.setTransform(147.2,200.65);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AgVAnIAAhMIAVAAIAAAKQAEgFAGgDQAGgDAGAAIAAAUIgEAAQgJAAgFAGQgEAIAAAJIAAAig");
	this.shape_43.setTransform(140.125,200.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AgYAcQgMgKAAgSQAAgQANgLQAMgLAPAAQAIAAAJADQAJADAGAHIgLAPQgEgFgFgCQgGgDgFAAQgHAAgGAFQgHAGAAAJQAAAKAHAFQAGAGAHgBQAKAAAJgKIANAOQgPAPgRAAQgRAAgMgLg");
	this.shape_44.setTransform(132.825,200.65);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AAPAnIAAgqQAAgSgNAAQgGAAgFAEQgEAFAAAJIAAAqIgWAAIAAhMIAWAAIAAAIQAKgJAKAAQAMAAAJAJQAIAIAAAOIAAAug");
	this.shape_45.setTransform(124.1,200.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AgKAyIAAhjIAVAAIAABjg");
	this.shape_46.setTransform(117.2,199.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("AgKAsQgIgIAAgMIAAgjIgJAAIAAgQIAJAAIAAgXIAVAAIAAAXIASAAIAAAQIgSAAIAAAiQAAAEACACQACADADAAQAGAAAEgGIAIAQQgKAIgLABQgKgBgHgGg");
	this.shape_47.setTransform(150.075,368.15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AgaAdQgMgLAAgSQAAgSAMgKQAMgKAPAAQAPAAAMAJQALAJgBARIAAAKIg2AAQABAHAFAEQAFAEAHAAQALAAAHgHIAMAMQgNANgRAAQgRAAgLgLgAARgHQgBgHgEgEQgFgDgGAAQgGAAgFAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_48.setTransform(142.4,369.25);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#666666").s().p("AALA1IgSgdIgHAHIAAAWIgWAAIAAhpIAWAAIAAA1IAXgYIAbAAIgeAeIAfAug");
	this.shape_49.setTransform(134.125,367.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("AgVAnIAAhMIAVAAIAAAKQAEgFAGgDQAGgDAGAAIAAAUIgEAAQgJAAgFAGQgEAIAAAJIAAAig");
	this.shape_50.setTransform(126.825,369.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#666666").s().p("AgZAhQgJgIAAgLQAAgMAJgFQAIgGAPAAIAPAAQAAgMgNAAQgEAAgGABIgLAGIgKgOQAQgLASABQAOgBAJAIQAJAGAAAPIAAAxIgUAAIAAgKQgJALgLAAQgMgBgIgGgAgMAOQAAAEADACQADACAGAAQAEAAAFgEQAEgDAAgGIAAgDIgNAAQgMgBAAAJg");
	this.shape_51.setTransform(119.225,369.25);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#666666").s().p("AAnAnIAAgpQAAgSgNAAQgHAAgEAFQgFAFAAAIIAAApIgVAAIAAgpQAAgJgCgEQgDgFgGAAQgHAAgEAFQgFAFAAAIIAAApIgWAAIAAhMIAWAAIAAAJQAJgKALAAQAHAAAGAEQAFAFADAFQAFgHAHgDQAIgEAHAAQAOAAAIAIQAJAIAAAPIAAAug");
	this.shape_52.setTransform(108.175,369.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#666666").s().p("AgcAcQgMgLAAgRQAAgPAMgMQAMgMAQAAQASAAALAMQAMAMAAAPQAAARgMALQgLALgSAAQgQAAgMgLgAgNgPQgFAHAAAIQAAAKAFAFQAGAHAHgBQAIABAGgHQAFgFAAgKQAAgIgFgHQgGgFgIgBQgHABgGAFg");
	this.shape_53.setTransform(148.675,348.95);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#666666").s().p("AgKArQgIgHAAgNIAAgiIgJAAIAAgQIAJAAIAAgWIAVAAIAAAWIASAAIAAAQIgSAAIAAAiQAAAEACADQACACADAAQAGAAAEgGIAIAPQgKAKgLgBQgKABgHgIg");
	this.shape_54.setTransform(141.125,347.85);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#666666").s().p("AgaAdQgMgLAAgSQAAgRAMgLQALgLAQAAQAQAAALAKQAKAKABAQIAAALIg3AAQAAAGAGAEQAFAEAHAAQALAAAIgIIALAOQgNAMgRgBQgQAAgMgKgAARgGQgBgIgEgDQgFgEgGAAQgFAAgGAEQgFADgBAIIAhAAIAAAAg");
	this.shape_55.setTransform(129.7,348.95);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#666666").s().p("AAnAnIAAgpQAAgSgNAAQgHAAgEAFQgFAEAAAKIAAAoIgVAAIAAgpQAAgJgCgFQgDgEgGAAQgHAAgEAFQgFAEAAAKIAAAoIgWAAIAAhMIAWAAIAAAJQAJgKALAAQAHAAAGAEQAFAEADAGQAFgGAHgFQAIgDAHAAQAOAAAIAIQAJAIAAAPIAAAug");
	this.shape_56.setTransform(118.275,348.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#666666").s().p("AgKA2IAAhMIAUAAIAABMgAgIgfQgDgEAAgFQAAgGADgDQADgEAFAAQAFAAAEAEQAEADAAAGQAAAFgEAEQgEADgFAAQgFAAgDgDg");
	this.shape_57.setTransform(109.15,347.4);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#666666").s().p("AgKArQgIgHAAgNIAAgiIgJAAIAAgQIAJAAIAAgWIAVAAIAAAWIASAAIAAAQIgSAAIAAAiQAAAEACADQACACADAAQAGAAAEgGIAIAPQgKAKgLgBQgKABgHgIg");
	this.shape_58.setTransform(104.125,347.85);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#666666").s().p("AgaAdQgMgLABgSQgBgSAMgKQAMgKAPAAQAPAAAMAJQALAKgBAQIAAAKIg2AAQABAHAFAEQAGAEAGAAQALAAAHgHIAMAMQgNANgRAAQgRAAgLgLgAARgHQgBgHgFgEQgEgDgGAAQgFAAgGAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_59.setTransform(161.85,328.65);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#666666").s().p("AgKAsQgIgIAAgMIAAgjIgJAAIAAgPIAJAAIAAgYIAVAAIAAAYIASAAIAAAPIgSAAIAAAhQAAAFACACQACADADAAQAGAAAEgFIAIAPQgKAIgLABQgKgBgHgGg");
	this.shape_60.setTransform(154.475,327.55);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#666666").s().p("AgZAhQgJgIAAgLQAAgMAJgFQAIgGAPAAIAPAAQAAgMgNAAQgEAAgGACIgLAFIgKgOQAQgLASABQAOgBAJAIQAJAGAAAQIAAAvIgUAAIAAgJQgJALgLAAQgMgBgIgGgAgMAOQAAAEADACQADACAGAAQAEAAAFgEQAEgDAAgGIAAgDIgNAAQgMgBAAAJg");
	this.shape_61.setTransform(146.775,328.65);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#666666").s().p("AgVAnIAAhMIAVAAIAAAKQAEgEAGgEQAGgDAGAAIAAAUIgEAAQgJAAgFAGQgEAHAAAKIAAAig");
	this.shape_62.setTransform(140.075,328.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#666666").s().p("AgaAdQgMgLAAgSQAAgSAMgKQAMgKAPAAQAPAAAMAJQALAKgBAQIAAAKIg2AAQABAHAFAEQAFAEAHAAQALAAAIgHIALAMQgNANgRAAQgRAAgLgLgAARgHQgBgHgFgEQgEgDgGAAQgGAAgFAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_63.setTransform(132.5,328.65);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#666666").s().p("AgKA1IAAhpIAVAAIAABpg");
	this.shape_64.setTransform(125.975,327.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#666666").s().p("AgaAdQgMgLABgSQgBgSAMgKQAMgKAPAAQAPAAAMAJQALAKgBAQIAAAKIg2AAQABAHAFAEQAGAEAFAAQAMAAAHgHIAMAMQgNANgRAAQgRAAgLgLgAARgHQgBgHgFgEQgEgDgGAAQgFAAgGAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_65.setTransform(119.55,328.65);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#666666").s().p("AgYAcQgMgKAAgSQAAgRANgLQAMgLAPABQAIAAAJACQAJAEAGAHIgLAPQgEgFgFgDQgGgCgFAAQgHAAgGAFQgHAGAAAJQAAAJAHAGQAGAGAHgBQAKABAJgLIANAOQgPAPgRABQgRAAgMgMg");
	this.shape_66.setTransform(111.025,328.65);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#666666").s().p("AgYAcQgMgKAAgSQAAgRANgLQAMgLAPABQAIAAAJACQAJAEAGAHIgLAPQgEgFgFgDQgGgCgFAAQgHAAgGAFQgHAGAAAJQAAAJAHAGQAGAGAHgBQAKABAJgLIANAOQgPAPgRABQgRAAgMgMg");
	this.shape_67.setTransform(102.725,328.65);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#666666").s().p("AAeAyIgKgVIgoAAIgJAVIgYAAIArhjIAUAAIAsBjgAAMAJIgMgcIgLAcIAXAAg");
	this.shape_68.setTransform(93.2,327.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#666666").s().p("AgOAlQgJgEgIgFIAKgOQAMAJAMAAQAEAAACgBQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgEgEgCQgDgCgFgCIgKgEIgIgDQgIgFgBgKQABgLAIgHQAJgGANgBQANABAOAIIgIAPQgLgHgJAAQgJAAAAAGQAAADADABIAJAEIAKADIAIAEQAIAEAAALQAAAMgIAHQgJAGgMAAQgIABgJgDg");
	this.shape_69.setTransform(219.85,496.45);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#666666").s().p("AgaAdQgLgLAAgSQAAgRALgLQAMgLAOAAQAQAAALAKQAMAJgBARIAAAKIg3AAQACAHAFAEQAGAEAFAAQAMAAAHgIIANAOQgOAMgRgBQgRAAgLgKgAARgGQgBgIgFgDQgEgEgGAAQgFAAgGAEQgFADgBAIIAhAAIAAAAg");
	this.shape_70.setTransform(211.9,496.45);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#666666").s().p("AgYAdQgMgLAAgSQAAgQANgMQAMgKAPgBQAIAAAJAEQAJADAGAHIgLAOQgEgEgFgCQgGgDgFAAQgHAAgGAGQgHAFAAAJQAAAJAHAGQAGAFAHABQAKAAAJgLIANAOQgPAPgRAAQgRABgMgLg");
	this.shape_71.setTransform(203.375,496.45);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#666666").s().p("AgKA2IAAhMIAVAAIAABMgAgIgfQgDgFgBgEQABgGADgDQAEgEAEAAQAFAAAEAEQADADABAGQgBAEgDAFQgEADgFAAQgEAAgEgDg");
	this.shape_72.setTransform(197.1,494.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#666666").s().p("AgKArQgIgHAAgNIAAgiIgJAAIAAgQIAJAAIAAgWIAVAAIAAAWIASAAIAAAQIgSAAIAAAiQAAAEACADQACACADAAQAGAAAEgGIAIAPQgKAKgLgBQgKABgHgIg");
	this.shape_73.setTransform(192.075,495.35);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#666666").s().p("AgYAdQgMgLAAgSQAAgQANgMQAMgKAPgBQAIAAAJAEQAJADAGAHIgLAOQgEgEgFgCQgGgDgFAAQgHAAgGAGQgHAFAAAJQAAAJAHAGQAGAFAHABQAKAAAJgLIANAOQgPAPgRAAQgRABgMgLg");
	this.shape_74.setTransform(184.675,496.45);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#666666").s().p("AgZAgQgJgGAAgNQAAgLAJgFQAIgGAPAAIAPAAQAAgNgNAAQgEAAgGACIgLAGIgKgOQAQgKASgBQAOAAAJAHQAJAHAAAPIAAAxIgUAAIAAgKQgJAKgLAAQgMABgIgIgAgMANQAAAEADADQADACAGAAQAEAAAFgDQAEgEAAgGIAAgEIgNAAQgMABAAAHg");
	this.shape_75.setTransform(176.075,496.45);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#666666").s().p("AgVAnIAAhMIAVAAIAAAKQAEgEAGgEQAGgDAGAAIAAAUIgEAAQgJAAgFAHQgEAGAAALIAAAhg");
	this.shape_76.setTransform(169.375,496.4);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#666666").s().p("AgnA1IAAhoIAWAAIAAAJQAKgKAMAAQAOAAAKALQALALAAARQAAARgLALQgKALgOAAQgOAAgIgLIAAAmgAgMgcQgFAGAAAKQAAAJAFAFQAFAGAHAAQAHAAAFgGQAGgFAAgJQAAgJgFgHQgGgGgHAAQgHAAgFAGg");
	this.shape_77.setTransform(161.625,497.775);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#666666").s().p("AAOA1IAAgqQABgRgNAAQgGAAgFAFQgEAEAAAIIAAAqIgWAAIAAhpIAWAAIAAAlQAJgJALAAQAMAAAJAIQAIAJAAANIAAAvg");
	this.shape_78.setTransform(216.9,474.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#666666").s().p("AgYAcQgMgKAAgSQAAgRANgKQAMgLAPAAQAIAAAJADQAJADAGAHIgLAPQgEgFgFgDQgGgCgFAAQgHAAgGAFQgHAGAAAJQAAAJAHAGQAGAGAHgBQAKAAAJgKIANAOQgPAPgRAAQgRAAgMgLg");
	this.shape_79.setTransform(208.225,476.15);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#666666").s().p("AgVAnIAAhMIAVAAIAAAKQAEgEAGgEQAGgDAGAAIAAAUIgEAAQgJAAgFAGQgEAIAAAJIAAAig");
	this.shape_80.setTransform(201.375,476.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#666666").s().p("AgZAhQgJgIAAgLQAAgMAJgFQAIgGAPAAIAPAAQAAgMgNAAQgEAAgGACIgLAFIgKgNQAQgLASAAQAOAAAJAGQAJAIAAAPIAAAvIgUAAIAAgJQgJALgLgBQgMAAgIgGgAgMAOQAAAEADACQADACAGAAQAEAAAFgEQAEgDAAgGIAAgDIgNAAQgMAAAAAIg");
	this.shape_81.setTransform(193.775,476.15);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#666666").s().p("AgaAdQgLgLAAgSQAAgSALgKQAMgKAOAAQAQAAALAJQAMAKgBAQIAAALIg3AAQACAGAFAEQAGAEAFAAQAMAAAHgHIANAMQgOAMgRAAQgRABgLgLgAARgHQgBgGgFgFQgEgDgGAAQgFAAgGAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_82.setTransform(185.35,476.15);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#666666").s().p("AgOAkQgJgCgIgHIAKgNQAMAKAMAAQAEAAACgDQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgCgEgDQgDgCgFgCIgKgDIgIgFQgIgEgBgLQABgKAIgHQAJgHANABQANAAAOAJIgIAOQgLgHgJAAQgJAAAAAFQAAADADACIAJAEIAKADIAIAFQAIADAAAMQAAALgIAHQgJAHgMgBQgIAAgJgDg");
	this.shape_83.setTransform(177.1,476.15);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#666666").s().p("AgaAdQgLgLAAgSQAAgSALgKQAMgKAOAAQAQAAALAJQAMAKgBAQIAAALIg3AAQACAGAFAEQAGAEAFAAQAMAAAHgHIANAMQgOAMgRAAQgRABgLgLgAARgHQgBgGgFgFQgEgDgGAAQgFAAgGAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_84.setTransform(169.15,476.15);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#666666").s().p("AgVAnIAAhMIAVAAIAAAKQAEgEAGgEQAGgDAGAAIAAAUIgEAAQgJAAgFAGQgEAIAAAJIAAAig");
	this.shape_85.setTransform(162.075,476.1);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#666666").s().p("AgcAqQgKgLAAgSQAAgQAKgLQAKgLAPAAQAMAAAJAKIAAglIAWAAIAABpIgWAAIAAgKQgJAKgMABQgOAAgLgMgAgLAAQgGAFAAAJQAAAKAGAFQAFAHAGAAQAIAAAFgHQAGgFgBgKQABgKgGgEQgFgHgIAAQgGAAgFAHg");
	this.shape_86.setTransform(224.8,454.45);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#666666").s().p("AAOAnIAAgrQAAgRgMAAQgGAAgEAEQgGAFAAAJIAAAqIgVAAIAAhMIAVAAIAAAJQALgKALAAQALAAAJAJQAIAIAAAOIAAAug");
	this.shape_87.setTransform(215.75,455.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#666666").s().p("AgZAgQgJgGAAgNQAAgLAJgFQAIgGAPAAIAPAAQAAgNgNABQgEgBgGACIgLAGIgKgOQAQgKASgBQAOAAAJAIQAJAGAAAPIAAAxIgUAAIAAgKQgJALgLAAQgMAAgIgIgAgMANQAAAEADADQADACAGAAQAEAAAFgDQAEgEAAgGIAAgEIgNAAQgMAAAAAIg");
	this.shape_88.setTransform(206.775,455.85);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#666666").s().p("AAPAnIAAgrQAAgRgOAAQgFAAgEAEQgFAFgBAJIAAAqIgVAAIAAhMIAVAAIAAAJQAKgKAMAAQAMAAAIAJQAIAIAAAOIAAAug");
	this.shape_89.setTransform(194.45,455.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#666666").s().p("AgSAzQgJgDgHgFIAIgQQALAIAMAAQALAAAGgGQAHgGAAgMQgKALgOAAQgPAAgKgKQgLgKAAgQQAAgSALgLQALgKANAAQANAAAJALIAAgKIAWAAIAABCQAAAKgEAIQgEAIgGAFQgMAJgPAAQgIAAgJgDgAgMgeQgFAFAAAKQAAAJAFAFQAGAFAGAAQAIAAAFgFQAFgFAAgJQAAgKgFgFQgFgFgIAAQgGAAgGAFg");
	this.shape_90.setTransform(184.925,457.325);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#666666").s().p("AgKA2IAAhMIAVAAIAABMgAgIgfQgDgFgBgEQABgGADgDQADgEAFAAQAFAAAEAEQADADABAGQgBAEgDAFQgEADgFAAQgFAAgDgDg");
	this.shape_91.setTransform(178.3,454.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#666666").s().p("AgPAlQgIgEgIgFIAKgOQALAJANAAQAEAAACgBQABgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgDgDgBQgEgDgFgCIgKgEIgHgDQgKgFAAgKQAAgLAKgHQAIgGAMgBQAOAAANAJIgHAPQgKgHgLAAQgIAAAAAGQAAACADACIAKAEIAKAEIAHADQAIAEAAALQAAAMgIAHQgJAGgNABQgHAAgKgDg");
	this.shape_92.setTransform(172.4,455.85);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#666666").s().p("AgaAdQgMgLAAgSQAAgRAMgLQAMgLAPAAQAPAAAMAKQALAJAAARIAAAKIg3AAQABAHAFAEQAFAEAHAAQALAAAIgIIALAOQgNALgRABQgQAAgMgLgAARgGQgBgHgFgFQgEgDgGAAQgGAAgFAEQgFADgBAIIAhAAIAAAAg");
	this.shape_93.setTransform(164.45,455.85);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#666666").s().p("AgcAqQgKgLAAgSQAAgQAKgLQAKgLAPAAQAMAAAJAKIAAglIAWAAIAABpIgWAAIAAgKQgJAKgMABQgOAAgLgMgAgLAAQgGAFAAAJQAAAKAGAFQAFAHAGAAQAIAAAFgHQAGgFgBgKQABgKgGgEQgFgHgIAAQgGAAgFAHg");
	this.shape_94.setTransform(155.05,454.45);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#666666").s().p("AAVAyIgVghIgUAhIgbAAIAhgyIgfgxIAbAAIASAeIATgeIAbAAIggAxIAiAyg");
	this.shape_95.setTransform(222.975,434.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#666666").s().p("AgeAmQgMgLAAgWIAAg3IAWAAIAAA2QAAANAGAGQAGAIAIgBQAJABAGgIQAFgGAAgNIAAg2IAXAAIAAA3QAAAWgMAMQgMALgTAAQgSAAgMgMg");
	this.shape_96.setTransform(212.675,434.45);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#666666").s().p("AgcAqQgKgMAAgQQAAgRAKgLQAKgLAPABQAMgBAJAKIAAgmIAWAAIAABpIgWAAIAAgKQgJALgMAAQgOAAgLgLgAgLgBQgGAGAAAJQAAAJAGAHQAFAFAGAAQAIAAAFgFQAGgHgBgJQABgJgGgGQgFgFgIAAQgGAAgFAFg");
	this.shape_97.setTransform(198.6,434.15);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#666666").s().p("AgaAdQgMgLAAgSQAAgRAMgLQAMgLAOABQARgBAKAKQAMAKAAAQIAAALIg4AAQABAGAGAEQAGAEAFAAQAMAAAIgHIAMAMQgOAMgRAAQgQAAgMgKgAARgHQgBgGgEgEQgFgEgGAAQgGAAgFAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_98.setTransform(189.7,435.55);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#666666").s().p("AgRAqIAAAKIgWAAIAAhpIAWAAIAAAmQAJgKANABQAOgBAKALQALALAAARQAAAQgLAMQgLALgNAAQgNAAgJgLgAgMgBQgFAGAAAJQAAAJAFAHQAFAFAHAAQAHAAAFgFQAGgHAAgJQAAgJgFgGQgGgFgHAAQgHAAgFAFg");
	this.shape_99.setTransform(180.725,434.15);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#666666").s().p("AAnAnIAAgpQAAgSgNAAQgHAAgEAFQgFAEAAAJIAAApIgVAAIAAgpQAAgJgCgEQgDgFgGAAQgHAAgEAFQgFAEAAAJIAAApIgWAAIAAhMIAWAAIAAAJQAJgKALAAQAHAAAGAEQAFAEADAHQAFgHAHgFQAIgDAHAAQAOAAAIAIQAJAIAAAPIAAAug");
	this.shape_100.setTransform(168.775,435.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#666666").s().p("AgkAyIAAhjIBHAAIAAAUIgxAAIAAAUIAsAAIAAASIgsAAIAAAVIAzAAIAAAUg");
	this.shape_101.setTransform(157.275,434.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgSAzQgJgDgHgFIAIgQQALAIAMAAQALAAAGgGQAHgGAAgMQgKALgOAAQgPAAgKgKQgLgKAAgQQAAgSALgLQALgKANAAQANAAAJALIAAgKIAWAAIAABCQAAAKgEAIQgEAIgGAFQgMAJgPAAQgIAAgJgDgAgMgeQgFAFAAAKQAAAJAFAFQAGAFAGAAQAIAAAFgFQAFgFAAgJQAAgKgFgFQgFgFgIAAQgGAAgGAFg");
	this.shape_102.setTransform(369.325,554.525);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAPAnIAAgrQgBgRgNAAQgFAAgFAEQgEAFAAAJIAAAqIgWAAIAAhMIAWAAIAAAJQAJgKALAAQAMAAAJAJQAIAIAAAOIAAAug");
	this.shape_103.setTransform(360.25,553);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAVAAIAABMgAgIgfQgDgFAAgEQAAgGADgDQADgEAFAAQAFAAAEAEQADADABAGQgBAEgDAFQgEADgFAAQgFAAgDgDg");
	this.shape_104.setTransform(353.6,551.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AALA1IgSgdIgHAHIAAAWIgWAAIAAhpIAWAAIAAA2IAXgZIAbAAIgeAeIAfAug");
	this.shape_105.setTransform(347.675,551.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgZAgQgJgGAAgNQAAgLAJgFQAIgGAPAAIAPAAQAAgNgNAAQgEAAgGACIgLAGIgKgOQAQgKASgBQAOAAAJAIQAJAGAAAPIAAAxIgUAAIAAgKQgJALgLAAQgMAAgIgIgAgMANQAAAEADADQADACAGAAQAEAAAFgDQAEgEAAgGIAAgEIgNAAQgMAAAAAIg");
	this.shape_106.setTransform(338.625,553.05);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AAnAnIAAgpQAAgSgNAAQgHAAgEAFQgFAEAAAKIAAAoIgVAAIAAgpQAAgJgCgFQgDgEgGAAQgHAAgEAFQgFAEAAAKIAAAoIgWAAIAAhMIAWAAIAAAJQAJgKALAAQAHAAAGAEQAFAFADAFQAFgHAHgDQAIgEAHAAQAOAAAIAIQAJAIAAAPIAAAug");
	this.shape_107.setTransform(327.575,553);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAPAnIAAgrQAAgRgOAAQgFAAgEAEQgFAFgBAJIAAAqIgVAAIAAhMIAVAAIAAAJQALgKALAAQAMAAAIAJQAIAIAAAOIAAAug");
	this.shape_108.setTransform(312.25,553);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgPAMgMQAMgMAQAAQASAAALAMQAMAMAAAPQAAARgMALQgLAMgSAAQgQAAgMgMgAgNgOQgFAFAAAJQAAAKAFAFQAGAHAHAAQAIAAAGgHQAFgFAAgKQAAgJgFgFQgGgHgIAAQgHAAgGAHg");
	this.shape_109.setTransform(303.025,553.05);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAUAAIAABMgAgIgfQgDgFAAgEQAAgGADgDQADgEAFAAQAFAAAEAEQAEADAAAGQAAAEgEAFQgEADgFAAQgFAAgDgDg");
	this.shape_110.setTransform(296.35,551.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AgPAlQgJgEgHgFIAJgOQANAJAMAAQAEAAADgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgDgDgBQgEgDgFgCIgKgDIgHgEQgJgFAAgKQAAgLAJgHQAIgGAMgBQAOAAANAJIgIAPQgKgHgKAAQgIAAAAAGQAAACADACIAJAEIALAEIAHADQAIAEAAALQAAAMgJAHQgHAGgOABQgHAAgKgDg");
	this.shape_111.setTransform(290.45,553.05);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAUAAIAABMgAgIgfQgDgFAAgEQAAgGADgDQAEgEAEAAQAFAAAEAEQAEADgBAGQABAEgEAFQgEADgFAAQgEAAgEgDg");
	this.shape_112.setTransform(284.8,551.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgYAdQgMgLAAgSQAAgQANgMQAMgKAPgBQAIAAAJADQAJAEAGAHIgLAOQgEgEgFgDQgGgCgFAAQgHAAgGAGQgHAFAAAJQAAAJAHAGQAGAFAHABQAKAAAJgLIANAOQgPAQgRAAQgRgBgMgKg");
	this.shape_113.setTransform(278.625,553.05);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgaAdQgLgLAAgSQAAgRALgLQALgLAPAAQAQAAALAKQALAJAAARIAAAKIg3AAQACAHAFAEQAGAEAFAAQAMAAAHgIIANAOQgOALgRABQgRAAgLgLgAARgGQgBgHgFgFQgEgDgGAAQgFAAgGAEQgFADgBAIIAhAAIAAAAg");
	this.shape_114.setTransform(270.05,553.05);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AgcAqQgLgLAAgSQAAgQALgLQAKgLAOAAQANAAAJAKIAAgmIAWAAIAABqIgWAAIAAgKQgJAKgNABQgNAAgLgMgAgMAAQgFAFAAAJQAAAKAFAFQAGAHAHAAQAHAAAFgHQAGgFAAgKQAAgKgGgEQgFgHgHAAQgHAAgGAHg");
	this.shape_115.setTransform(260.65,551.65);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AAnAnIAAgpQAAgSgNAAQgHAAgEAFQgFAEAAAJIAAApIgVAAIAAgpQAAgJgCgEQgDgFgGAAQgHAAgEAFQgFAEAAAJIAAApIgWAAIAAhMIAWAAIAAAJQAJgKALAAQAHAAAGAEQAFAEADAHQAFgHAHgFQAIgDAHAAQAOAAAIAIQAJAIAAAPIAAAug");
	this.shape_116.setTransform(341.875,532.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgVAnIAAhMIAVAAIAAAKQAEgFAGgDQAGgDAGAAIAAAUIgEAAQgJAAgFAHQgEAHAAAJIAAAig");
	this.shape_117.setTransform(332.175,532.7);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgQAMgLQAMgMAQABQASgBALAMQAMALAAAQQAAARgMALQgLALgSAAQgQAAgMgLgAgNgPQgFAHAAAIQAAAJAFAHQAGAFAHAAQAIAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgIAAQgHAAgGAFg");
	this.shape_118.setTransform(324.325,532.75);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AgSA2IAAg8IgJAAIAAgPIAJAAIAAgFQAAgMAIgIQAHgHALAAQALAAAJAJIgHANQgFgEgGAAQgDAAgCACQgCACAAAFIAAAFIASAAIAAAPIgSAAIAAA8g");
	this.shape_119.setTransform(317.325,531.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AAOAnIAAgqQABgSgNAAQgGAAgFAEQgEAFAAAJIAAAqIgWAAIAAhMIAWAAIAAAIQAKgJAKAAQAMAAAJAIQAIAJAAAOIAAAug");
	this.shape_120.setTransform(309.5,532.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAVAAIAABMgAgIggQgDgEgBgFQABgFADgEQAEgDAEAAQAFAAAEADQADAEABAFQgBAFgDAEQgEAEgFAAQgEAAgEgEg");
	this.shape_121.setTransform(302.85,531.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgQAMgLQAMgMAQABQASgBALAMQAMALAAAQQAAARgMALQgLALgSAAQgQAAgMgLgAgNgPQgFAHAAAIQAAAJAFAHQAGAFAHAAQAIAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgIAAQgHAAgGAFg");
	this.shape_122.setTransform(292.375,532.75);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgKAsQgIgIAAgNIAAgiIgJAAIAAgPIAJAAIAAgYIAVAAIAAAYIASAAIAAAPIgSAAIAAAhQAAAFACACQACADADAAQAGAAAEgFIAIAOQgKAJgLAAQgKAAgHgGg");
	this.shape_123.setTransform(284.825,531.65);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AAOAnIAAgrQABgRgNAAQgGAAgEAFQgGAEAAAJIAAAqIgVAAIAAhMIAVAAIAAAJQALgKAKAAQANAAAIAIQAIAJAAAOIAAAug");
	this.shape_124.setTransform(370.45,512.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgPAMgMQAMgMAQAAQASAAALAMQAMAMAAAPQAAARgMALQgLAMgSAAQgQAAgMgMgAgNgOQgFAFAAAJQAAAKAFAFQAGAHAHAAQAIAAAGgHQAFgFAAgKQAAgJgFgFQgGgHgIAAQgHAAgGAHg");
	this.shape_125.setTransform(361.325,512.45);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAUAAIAABMgAgIgfQgEgFABgEQgBgGAEgDQADgEAFAAQAFAAAEAEQAEADAAAGQAAAEgEAFQgEADgFAAQgFAAgDgDg");
	this.shape_126.setTransform(354.75,510.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgKAsQgIgIAAgMIAAgjIgJAAIAAgQIAJAAIAAgWIAVAAIAAAWIASAAIAAAQIgSAAIAAAiQAAAEACACQACADADAAQAGAAAEgGIAIAQQgKAIgLABQgKAAgHgHg");
	this.shape_127.setTransform(349.825,511.35);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgZAhQgJgIAAgLQAAgMAJgFQAIgGAPAAIAPAAQAAgMgNAAQgEAAgGABIgLAGIgKgOQAQgLASAAQAOAAAJAIQAJAGAAAPIAAAxIgUAAIAAgKQgJALgLAAQgMAAgIgHgAgMAOQAAADADADQADACAGAAQAEAAAFgEQAEgDAAgGIAAgEIgNAAQgMAAAAAJg");
	this.shape_128.setTransform(342.225,512.45);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgKAsQgIgIAAgMIAAgjIgJAAIAAgQIAJAAIAAgWIAVAAIAAAWIASAAIAAAQIgSAAIAAAiQAAAEACACQACADADAAQAGAAAEgGIAIAQQgKAIgLABQgKAAgHgHg");
	this.shape_129.setTransform(335.325,511.35);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AAOAnIAAgrQABgRgNAAQgGAAgFAFQgEAEAAAJIAAAqIgWAAIAAhMIAWAAIAAAJQAJgKALAAQAMAAAJAIQAIAJAAAOIAAAug");
	this.shape_130.setTransform(327.6,512.4);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgaAdQgLgLAAgSQAAgSALgKQAMgLAOAAQAQAAALAKQALAJAAARIAAAKIg3AAQABAHAGAEQAGAEAFAAQAMAAAHgIIANANQgOAMgRABQgRAAgLgLgAARgGQgBgHgFgFQgEgDgGAAQgGAAgFAEQgFADgBAIIAhAAIAAAAg");
	this.shape_131.setTransform(318.75,512.45);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AAnAnIAAgpQAAgSgNAAQgHAAgEAFQgFAEAAAKIAAAoIgVAAIAAgpQAAgJgCgEQgDgFgGAAQgHAAgEAFQgFAEAAAKIAAAoIgWAAIAAhMIAWAAIAAAJQAJgKALAAQAHAAAGAEQAFAFADAFQAFgGAHgEQAIgEAHAAQAOAAAIAIQAJAIAAAPIAAAug");
	this.shape_132.setTransform(307.425,512.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAUAAIAABMgAgIgfQgEgFABgEQgBgGAEgDQADgEAFAAQAFAAAEAEQADADAAAGQAAAEgDAFQgEADgFAAQgFAAgDgDg");
	this.shape_133.setTransform(298.4,510.9);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgVAnIAAhMIAVAAIAAAKQAEgEAGgEQAGgDAGAAIAAAUIgEAAQgJAAgFAGQgEAIAAAJIAAAig");
	this.shape_134.setTransform(293.775,512.4);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgaAdQgMgLAAgSQAAgSAMgKQALgLAQAAQAQAAALAKQAKAJABARIAAAKIg3AAQAAAHAGAEQAFAEAHAAQALAAAIgIIALANQgNAMgRABQgQAAgMgLgAARgGQgBgHgEgFQgFgDgGAAQgFAAgGAEQgFADgBAIIAhAAIAAAAg");
	this.shape_135.setTransform(286.3,512.45);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgnA1IAAhoIAWAAIAAAJQAKgKAMAAQAOAAAKALQALALAAARQAAARgLALQgKALgOAAQgOAAgIgLIAAAmgAgMgcQgFAGAAAKQAAAJAFAFQAFAGAHAAQAHAAAFgGQAGgFAAgJQAAgJgFgHQgGgGgHAAQgHAAgFAGg");
	this.shape_136.setTransform(277.425,513.775);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AAOAnIgOgWIgOAWIgZAAIAbgnIgagmIAaAAIAMAVIANgVIAaAAIgbAmIAcAng");
	this.shape_137.setTransform(268.4,512.45);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgaAdQgMgLABgSQgBgSAMgKQAMgLAPAAQAPAAAMAKQALAJgBARIAAAKIg2AAQABAHAFAEQAGAEAGAAQALAAAHgIIAMANQgNAMgRABQgRAAgLgLgAARgGQgBgHgFgFQgEgDgGAAQgFAAgGAEQgFADgBAIIAhAAIAAAAg");
	this.shape_138.setTransform(259.95,512.45);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AgaAdQgMgLABgSQgBgRAMgLQAMgLAPAAQAPAAAMAKQALAKgBAQIAAALIg2AAQABAGAFAEQAGAEAFAAQAMAAAHgIIAMAOQgNAMgRgBQgRAAgLgKgAARgHQgBgHgFgDQgEgEgGAAQgFAAgGAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_139.setTransform(324.3,492.15);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgPAlQgIgEgIgFIAKgOQAMAKAMgBQAEAAACgCQABAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgDgEgDQgDgCgFgCIgKgEIgIgDQgJgFAAgLQAAgLAJgGQAJgHANAAQANABAOAIIgIAPQgLgHgKAAQgIAAAAAGQAAADADABIAKAEIAJADIAIAFQAIADAAALQAAAMgIAHQgJAGgNAAQgHAAgKgCg");
	this.shape_140.setTransform(316.05,492.15);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgeAnQgMgMAAgWIAAg3IAWAAIAAA2QAAANAGAGQAGAIAIAAQAJAAAGgIQAFgGAAgNIAAg2IAXAAIAAA3QAAAWgMAMQgMALgTAAQgSABgMgMg");
	this.shape_141.setTransform(307.125,491.05);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AgKArQgIgHAAgMIAAgjIgJAAIAAgQIAJAAIAAgWIAVAAIAAAWIASAAIAAAQIgSAAIAAAiQAAAEACADQACACADAAQAGAAAEgGIAIAPQgKAKgLAAQgKAAgHgIg");
	this.shape_142.setTransform(294.625,161.45);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AAPAnIAAgqQgBgSgNAAQgFAAgFAEQgEAFAAAJIAAAqIgWAAIAAhMIAWAAIAAAJQAJgKALAAQAMAAAJAJQAIAIAAAOIAAAug");
	this.shape_143.setTransform(286.8,162.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AgaAdQgMgLAAgSQAAgRAMgLQAMgLAPAAQAPAAAMAKQALAJgBARIAAAKIg2AAQABAHAFAEQAFAEAHAAQALAAAHgIIAMAOQgNAMgRgBQgRABgLgLgAARgGQgBgIgFgDQgEgEgGAAQgGAAgFAEQgFADgBAIIAhAAIAAAAg");
	this.shape_144.setTransform(277.85,162.55);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AAnAnIAAgpQAAgSgNAAQgHAAgEAFQgFAEAAAKIAAAoIgVAAIAAgpQAAgJgCgFQgDgEgGAAQgHAAgEAFQgFAEAAAKIAAAoIgWAAIAAhMIAWAAIAAAJQAJgKALAAQAHAAAGAEQAFAFADAFQAFgHAHgEQAIgDAHAAQAOAAAIAIQAJAIAAAPIAAAug");
	this.shape_145.setTransform(266.425,162.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgaAdQgMgLABgSQgBgRAMgLQAMgLAPAAQAPAAAMAKQALAJgBARIAAAKIg2AAQABAHAFAEQAGAEAFAAQAMAAAHgIIAMAOQgNAMgRgBQgRABgLgLgAARgGQgBgIgFgDQgEgEgGAAQgFAAgGAEQgFADgBAIIAhAAIAAAAg");
	this.shape_146.setTransform(255,162.55);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgSAzQgJgDgHgFIAIgQQALAIAMAAQALAAAGgGQAHgGAAgMQgKALgOAAQgPAAgKgKQgLgKAAgQQAAgSALgLQALgKANAAQANAAAJALIAAgKIAWAAIAABCQAAAKgEAIQgEAIgGAFQgMAJgPAAQgIAAgJgDgAgMgeQgFAFAAAKQAAAJAFAFQAGAFAGAAQAIAAAFgFQAFgFAAgJQAAgKgFgFQgFgFgIAAQgGAAgGAFg");
	this.shape_147.setTransform(245.625,164.025);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgZAgQgJgGAAgNQAAgLAJgFQAIgGAPAAIAPAAQAAgNgNAAQgEAAgGACIgLAGIgKgOQAQgKASgBQAOAAAJAIQAJAHAAAOIAAAxIgUAAIAAgKQgJALgLgBQgMABgIgIgAgMANQAAAEADADQADACAGAAQAEAAAFgDQAEgEAAgGIAAgEIgNAAQgMABAAAHg");
	this.shape_148.setTransform(236.675,162.55);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgSAzQgJgDgHgFIAIgQQALAIAMAAQALAAAGgGQAHgGAAgMQgKALgOAAQgPAAgKgKQgLgKAAgQQAAgSALgLQALgKANAAQANAAAJALIAAgKIAWAAIAABCQAAAKgEAIQgEAIgGAFQgMAJgPAAQgIAAgJgDgAgMgeQgFAFAAAKQAAAJAFAFQAGAFAGAAQAIAAAFgFQAFgFAAgJQAAgKgFgFQgFgFgIAAQgGAAgGAFg");
	this.shape_149.setTransform(227.675,164.025);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AAPAnIAAgqQAAgSgNAAQgGAAgFAEQgEAFAAAJIAAAqIgWAAIAAhMIAWAAIAAAJQAKgKAKAAQAMAAAJAJQAIAIAAAOIAAAug");
	this.shape_150.setTransform(218.6,162.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgaAdQgLgLAAgSQAAgRALgLQAMgLAOAAQAQAAALAKQAMAJgBARIAAAKIg3AAQACAHAFAEQAGAEAFAAQAMAAAHgIIANAOQgOAMgRgBQgRABgLgLgAARgGQgBgIgFgDQgEgEgGAAQgFAAgGAEQgFADgBAIIAhAAIAAAAg");
	this.shape_151.setTransform(209.65,162.55);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgaAdQgMgLAAgSQAAgSAMgKQALgKAQAAQAQAAALAJQAKAKABAQIAAALIg3AAQAAAGAGAEQAFAEAHAAQALAAAIgHIALAMQgNAMgRAAQgQABgMgLgAARgHQgBgGgEgFQgFgDgGAAQgFAAgGAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_152.setTransform(287.1,142.25);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgPAkQgJgCgHgHIAJgNQANAKAMAAQAEAAADgDQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgDgDgDQgEgCgFgCIgKgDIgHgFQgKgEABgLQgBgKAKgHQAIgHAMABQAOAAANAJIgIAOQgJgHgLAAQgIAAAAAFQAAADADACIAKAEIAKADIAHAFQAIADAAAMQAAALgJAHQgHAHgOgBQgHAAgKgDg");
	this.shape_153.setTransform(278.85,142.25);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgZAhQgJgIAAgLQAAgMAJgFQAIgGAPAAIAPAAQAAgMgNAAQgEAAgGACIgLAFIgKgNQAQgLASAAQAOAAAJAGQAJAIAAAPIAAAvIgUAAIAAgJQgJALgLgBQgMAAgIgGgAgMAOQAAAEADACQADACAGAAQAEAAAFgEQAEgDAAgGIAAgDIgNAAQgMAAAAAIg");
	this.shape_154.setTransform(270.875,142.25);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AgaAdQgMgLAAgSQAAgSAMgKQALgKAQAAQAQAAALAJQAKAKABAQIAAALIg3AAQAAAGAGAEQAFAEAHAAQALAAAIgHIALAMQgNAMgRAAQgQABgMgLgAARgHQgBgGgEgFQgFgDgGAAQgGAAgFAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_155.setTransform(262.45,142.25);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AgVAnIAAhMIAVAAIAAAKQAEgEAGgEQAGgDAGAAIAAAUIgEAAQgJAAgFAGQgEAIAAAJIAAAig");
	this.shape_156.setTransform(255.375,142.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgYAcQgMgKAAgSQAAgRANgKQAMgLAPAAQAIAAAJACQAJAEAGAHIgLAPQgEgFgFgDQgGgCgFAAQgHAAgGAFQgHAGAAAJQAAAJAHAGQAGAGAHgBQAKAAAJgKIANAOQgPAPgRAAQgRAAgMgLg");
	this.shape_157.setTransform(248.075,142.25);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AAPAnIAAgqQAAgSgOAAQgFAAgEAFQgFAEgBAJIAAAqIgVAAIAAhMIAVAAIAAAIQALgJALAAQAMAAAIAIQAIAJAAAOIAAAug");
	this.shape_158.setTransform(239.35,142.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AgKA2IAAhMIAUAAIAABMgAgIggQgEgDABgGQgBgFAEgEQADgDAFAAQAFAAAEADQADAEAAAFQAAAGgDADQgEAEgFAAQgFAAgDgEg");
	this.shape_159.setTransform(232.7,140.7);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgcAcQgMgLAAgRQAAgQAMgLQAMgLAQAAQASAAALALQAMALAAAQQAAARgMALQgLAMgSgBQgQABgMgMgAgNgPQgFAHAAAIQAAAJAFAHQAGAFAHAAQAIAAAGgFQAFgHAAgJQAAgIgFgHQgGgFgIAAQgHAAgGAFg");
	this.shape_160.setTransform(222.225,142.25);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgKAsQgIgIAAgNIAAgiIgJAAIAAgPIAJAAIAAgYIAVAAIAAAYIASAAIAAAPIgSAAIAAAhQAAAFACACQACADADAAQAGAAAEgFIAIAOQgKAJgLAAQgKAAgHgGg");
	this.shape_161.setTransform(214.675,141.15);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgPAlQgJgEgHgFIAJgOQANAJAMAAQAEAAADgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgDgDgBQgEgDgFgCIgKgDIgHgEQgJgFAAgKQAAgLAJgHQAIgGAMgBQAOAAANAJIgIAPQgKgHgJAAQgJAAAAAGQAAACADACIAJAEIALAEIAHADQAIAEAAALQAAAMgJAHQgHAGgNABQgIAAgKgDg");
	this.shape_162.setTransform(286.85,121.95);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AgcAqQgLgLAAgSQAAgQALgLQAKgLAOAAQANAAAJAKIAAgmIAVAAIAABqIgVAAIAAgKQgJAKgNABQgNAAgLgMgAgMAAQgFAFAAAJQAAAKAFAFQAGAHAHAAQAHAAAFgHQAFgFABgKQgBgKgFgEQgFgHgHAAQgHAAgGAHg");
	this.shape_163.setTransform(278.3,120.55);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AgaAdQgMgLABgSQgBgRAMgLQAMgLAPAAQAPAAAMAKQALAJgBARIAAAKIg2AAQABAHAFAEQAFAEAGAAQAMAAAHgIIAMAOQgNALgRABQgRAAgLgLgAARgGQgBgHgFgFQgEgDgGAAQgGAAgFAEQgFADgBAIIAhAAIAAAAg");
	this.shape_164.setTransform(269.4,121.95);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgaAdQgLgLAAgSQAAgRALgLQALgLAPAAQAQAAALAKQALAJAAARIAAAKIg3AAQACAHAFAEQAGAEAFAAQAMAAAHgIIANAOQgOALgRABQgRAAgLgLgAARgGQgBgHgFgFQgEgDgGAAQgFAAgGAEQgFADgBAIIAhAAIAAAAg");
	this.shape_165.setTransform(260.6,121.95);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AAOAnIAAgrQABgRgNAAQgGAAgEAFQgGAEAAAJIAAAqIgVAAIAAhMIAVAAIAAAJQALgKAKAAQANAAAIAJQAIAIAAAOIAAAug");
	this.shape_166.setTransform(251.65,121.9);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgVAnIAAhMIAVAAIAAAKQAEgEAGgEQAGgDAGAAIAAAUIgEAAQgJAAgFAHQgEAGAAALIAAAhg");
	this.shape_167.setTransform(240.675,121.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgaAdQgMgLAAgSQAAgRAMgLQALgLAQAAQAQAAALAKQAKAJABARIAAAKIg3AAQAAAHAGAEQAFAEAHAAQALAAAIgIIALAOQgNALgRABQgQAAgMgLgAARgGQgBgHgEgFQgFgDgGAAQgFAAgGAEQgFADgBAIIAhAAIAAAAg");
	this.shape_168.setTransform(233.1,121.95);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgPAlQgJgEgHgFIAJgOQANAJAMAAQAEAAADgBQAAgBABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQAAgDgDgBQgEgDgFgCIgKgDIgHgEQgKgFABgKQgBgLAKgHQAIgGAMgBQAOAAANAJIgIAPQgJgHgLAAQgIAAAAAGQAAACADACIAKAEIAKAEIAHADQAIAEAAALQAAAMgJAHQgHAGgOABQgHAAgKgDg");
	this.shape_169.setTransform(224.85,121.95);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgaAfQgJgIAAgPIAAguIAVAAIAAApQABARANAAQAFABAFgFQAEgEAAgKIAAgoIAWAAIAABMIgWAAIAAgKQgIALgMAAQgMAAgIgIg");
	this.shape_170.setTransform(216.65,122);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgcAqQgLgMAAgQQAAgRALgLQAKgLAOABQANgBAJAKIAAgmIAVAAIAABpIgVAAIAAgKQgJALgNAAQgNAAgLgLgAgMgBQgFAGAAAJQAAAJAFAHQAGAFAHAAQAHAAAFgFQAFgHABgJQgBgJgFgGQgFgFgHAAQgHAAgGAFg");
	this.shape_171.setTransform(288.75,100.25);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AAPAnIAAgqQgBgSgNAAQgFAAgFAEQgEAFAAAJIAAAqIgWAAIAAhMIAWAAIAAAIQAJgJALAAQAMAAAJAIQAIAJAAAOIAAAug");
	this.shape_172.setTransform(279.7,101.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AgZAhQgJgIAAgMQAAgLAJgFQAIgGAPAAIAPAAQAAgNgNAAQgEABgGACIgLAFIgKgNQAQgLASAAQAOAAAJAGQAJAIAAAPIAAAvIgUAAIAAgJQgJAKgLAAQgMAAgIgGgAgMANQAAAEADADQADACAGAAQAEAAAFgEQAEgDAAgGIAAgDIgNAAQgMAAAAAHg");
	this.shape_173.setTransform(270.725,101.65);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AgKAsQgIgIAAgNIAAgiIgJAAIAAgPIAJAAIAAgYIAVAAIAAAYIASAAIAAAPIgSAAIAAAhQAAAFACADQACACADAAQAGAAAEgFIAIAOQgKAJgLAAQgKAAgHgGg");
	this.shape_174.setTransform(263.725,100.55);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgOAkQgKgDgHgFIAJgOQAMAKANAAQAEgBADgCQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAAAQAAgEgDgCQgEgCgFgCIgKgEIgHgEQgJgEAAgLQAAgLAJgGQAIgHAMABQAOAAANAJIgIAOQgKgHgJAAQgJAAAAAGQAAACADACIAJAEIAKADIAIAFQAIADAAAMQAAALgJAHQgHAHgNgBQgIAAgJgDg");
	this.shape_175.setTransform(256.6,101.65);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgVAnIAAhMIAVAAIAAAKQAEgFAGgDQAGgDAGAAIAAAUIgEAAQgJAAgFAGQgEAIAAAKIAAAhg");
	this.shape_176.setTransform(250.375,101.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgaAdQgLgLgBgSQABgRALgLQAMgLAOABQARgBAKAKQAMAKAAAQIAAALIg4AAQABAGAGAEQAGAEAFAAQAMAAAIgHIAMANQgOALgRAAQgQAAgMgKgAARgHQgBgGgEgEQgFgEgGAAQgGAAgFAEQgFAEgBAGIAhAAIAAAAg");
	this.shape_177.setTransform(242.8,101.65);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgcAqQgLgMAAgQQAAgRALgLQAKgLAOABQANgBAJAKIAAgmIAVAAIAABpIgVAAIAAgKQgJALgNAAQgNAAgLgLgAgMgBQgFAGAAAJQAAAJAFAHQAGAFAHAAQAHAAAFgFQAFgHABgJQgBgJgFgGQgFgFgHAAQgHAAgGAFg");
	this.shape_178.setTransform(233.4,100.25);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AAPAnIAAgqQgBgSgNAAQgFAAgFAEQgEAFAAAJIAAAqIgWAAIAAhMIAWAAIAAAIQAJgJALAAQAMAAAJAIQAIAJAAAOIAAAug");
	this.shape_179.setTransform(224.35,101.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgeAnQgMgMAAgWIAAg3IAWAAIAAA2QAAANAGAGQAGAIAIgBQAJABAGgIQAFgGAAgNIAAg2IAXAAIAAA3QAAAWgMAMQgMALgTAAQgSAAgMgLg");
	this.shape_180.setTransform(214.425,100.55);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#595A59").s().p("AnBHCQi7i6AAkIQAAkHC7i7QC6i6EHAAQEHAAC7C6QC7C7AAEHQAAEIi7C6Qi7C7kHAAQkHAAi6i7g");
	this.shape_181.setTransform(314.95,315);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#666666").s().p("AtbrGQFpkuG6iiQG5ihHXgBMAADApxg");
	this.shape_182.setTransform(229.05,181.325);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#DDDDDD").s().p("A0jIvQBSnPDqmXQDrmYFpkvIa3f9g");
	this.shape_183.setTransform(183.35,212.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#CDCDCD").s().p("A0PAdQhSnPBRnQMApJAHOMgkLAU3QjrmXhSnPg");
	this.shape_184.setTransform(181.3124,358.75);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#BEBEBE").s().p("AovMYQlpktjsmYMAkJgU6MgOTAnPQm5ihlokvg");
	this.shape_185.setTransform(199.3,440.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#AEAEAE").s().p("AuQSYMAOQgnQMAORAnQQm6ChnXAAQnVAAm7ihg");
	this.shape_186.setTransform(315.05,448.675);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#9F9F9F").s().p("AyEznMAkJAU5QjrGXlpEvQloEvm5Chg");
	this.shape_187.setTransform(430.725,440.575);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#4394CF").s().p("AuIrsQF7k+HSiqQHQiqHwgBMAAEAr/g");
	this.shape_188.setTransform(224.5,174.25);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#4BA39C").s().p("A1pJMQBWnoD3msQD4mtF7k/MAcTAhpg");
	this.shape_189.setTransform(176.375,207.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#A6C23C").s().p("A1TAeQhXnnBWnpMArUAHmMgmFAV/Qj4muhWnng");
	this.shape_190.setTransform(174.2249,361.1);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#A8CE60").s().p("ApNNDQl8k/j4msMAmDgWBMgPDApUQnRiql7k+g");
	this.shape_191.setTransform(193.175,447.25);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#E5C843").s().p("AvATXMAPAgpVMAPBApUQnRCqnwAAQnugBnSiog");
	this.shape_192.setTransform(315.075,455.75);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#DC5D2A").s().p("AzC0pMAmFAV/Qj5Gtl7E/Ql8E+nQCqg");
	this.shape_193.setTransform(436.85,447.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.pie_01},{t:this.pie_02},{t:this.pie_03}]}).wait(1));

	// mainCog
	this.cog_large = new lib.cog_large();
	this.cog_large.name = "cog_large";
	this.cog_large.setTransform(315,315);

	this.timeline.addTween(cjs.Tween.get(this.cog_large).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(305.4,308.5,363.4,345.20000000000005);
// library properties:
lib.properties = {
	id: '1392B8D961C3473EADEDBB5D2A770B98',
	width: 630,
	height: 630,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
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
an.compositions['1392B8D961C3473EADEDBB5D2A770B98'] = {
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