var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_height.scaleToHeight(block_image_height);
        });

        canvas.add(block_image_object);	
	
}

function playSound(){
	playSound= "bdayaudio.mp3";
}
