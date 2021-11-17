var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg',function(Img){
        block_image_obeject = Img;

        block_image_obeject.scaleToWidth(700);
        block_image_obeject.scaleToHeight(510);
        block_image_obeject,set({
            top:0,
            left:0
        });
        canvas.add(block_image_obeject);
    });
	
}

function playSound()
{
	x.play();
}
