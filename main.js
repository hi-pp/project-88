var canvas = new fabric.Canvas("myCanvas");

ball_x = 10;
ball_y = 10;
ball_width = 50;
ball_height = 50;

hole_x = 800;
hole_y = 400;

var ball_object = ""
var golf_hole_object = ""

function load_ball_img(){
	fabric.Image.fromURL("golf-h.png", function(Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);	
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(ball_obj);
		});
	new_image();
}

function new_image(){
	fabric.Image.fromURL("ball.png", function(Img) {
	ball_obj = Img;
	ball_obj.scaleToWidth(50);	
	ball_obj.scaleToHeight(50);
	ball_obj.set({
	top:ball_y,
	left:ball_x
	});
	canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x == hole_x)&&(ball_x == hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML = "You have hit the goal!!!"
		document.getElementById("canvas").style.borderColor = "red"
	} else{
		if(keyPressed == '38'){
			up();
			console.log("up");
		}
		if(keyPressed == '40'){
			down();
			console.log("down");
		}
		if(keyPressed == '37'){
			left();
			console.log("left");
		}
		if(keyPressed == '39'){
			right();
			console.log("right");
		}
	}
	
	function up(){
		if(ball_y<=0){
			ball_y = ball_y - ball_height;
			console.log("ball_height = " + ball_height);
			console.log("when down arrow key is pressed , x = " + ball_x + " , y =" + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function down(){
		if(ball_y<=500){
			ball_y = ball_y + ball_height;
			console.log("ball_height = " + ball_height);
			console.log("when down arrow key is pressed , x = " + ball_x + " , y =" + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function left(){
		if(ball_x >0){
			ball_x = ball_x - ball_width;
			console.log("ball_width = " + ball_width);
			console.log("when left arrow key is pressed , x = " + ball_x + " , y =" + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}		

	function right(){
		if(ball_x <=850){
			ball_x = ball_x + ball_width;
			console.log("ball_width = " + ball_width);
			console.log("when left arrow key is pressed , x = " + ball_x + " , y =" + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
}