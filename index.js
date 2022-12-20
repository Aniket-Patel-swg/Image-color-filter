var image = null;
var GreyImage = null;
var RedImage = null;
var GreenImage = null;
var BlueImage = null;
var YellowImage = null;
var OrangeImage = null;
var IndigoImage = null;
var VioletImage = null;
var WindowImage = null;
var RainbowImage = null;
var BlurImage = null;
var BlurredImage = null;
var canvasimg = null;
var outputcanvas = null;

function upload(){
  canvasimg = document.getElementById("can1");
  var finput = document.getElementById("input1");
  
  image = new SimpleImage(finput);
  GreyImage = new SimpleImage(finput);
  RedImage = new SimpleImage(finput);
  GreenImage = new SimpleImage(finput);
  BlueImage = new SimpleImage(finput);
  YellowImage = new SimpleImage(finput);
  OrangeImage = new SimpleImage(finput);
  IndigoImage = new SimpleImage(finput);
  VioletImage = new SimpleImage(finput);
  WindowImage = new SimpleImage(finput);
  RainbowImage = new SimpleImage(finput);
  BlurImage = new SimpleImage(finput);
  
  image.drawTo(canvasimg);
}
function LoadImage(img){
  if(img == null || !img.complete()){
    alert("IMAGE IS NOT LOADED");
    return false;
  }
  else{
    return true;
  }
}
function doGrayscale(){
  if(LoadImage(GreyImage)){
    
    makeGrey();
   outputcanvas = document.getElementById("can2")
     GreyImage.drawTo(outputcanvas);
   }
}
function makeGrey(){
  for(var pixel of GreyImage.values()){
    var avg = ((pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3);
    pixel.setRed(avg);
    pixel.setGreen(avg);
    pixel.setBlue(avg);
  }
}
function doRed(){
  if(LoadImage(RedImage)){
    
    makeRed();
    
     outputcanvas = document.getElementById("can2");
    RedImage.drawTo(outputcanvas);
  }
}

function makeRed(){
  for(var pixel of RedImage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3 ;
   if(avg<128){
     pixel.setRed(2*avg);
     pixel.setGreen(0);
     pixel.setBlue(0);
   } 
    else{
      pixel.setRed(240);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(2*avg-255);
    }
  }
}
function doGreen(){
  if(LoadImage(GreenImage)){
    
    makeGreen();
    
    outputcanvas = document.getElementById("can2");
    GreenImage.drawTo(outputcanvas);
  }
}
function makeGreen(){
  for(var pixel of GreenImage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg<128){
      pixel.setRed(0);
      pixel.setGreen(2*avg);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(2*avg-255);
      pixel.setGreen(255);
      pixel.setBlue(2*avg-255);
    }
  }
}
function doBlue(){
  if(LoadImage(BlueImage)){
    makeBlue();
    
    outputcanvas = document.getElementById("can2");
    BlueImage.drawTo(outputcanvas);
  }
}
function makeBlue(){
  for (var pixel of BlueImage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg<128){
      pixel.setRed(0);
      pixel.setGreen(0);
      pixel.setBlue((2)*avg);
    }
    else{
      pixel.setRed(2*avg-255);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(255);
    }
  }
}
function doYellow(){
  if(LoadImage(YellowImage)){
    makeYellow();
    
    outputcanvas = document.getElementById("can2");
    YellowImage.drawTo(outputcanvas);
  }
}
function makeYellow(){
  for(var pixel of YellowImage.values()){
     var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(2*avg);
      pixel.setBlue(0);
     
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(255);
      pixel.setBlue(2*avg-255);
    }
    
    }
  }
function doOrange(){
  if(LoadImage(OrangeImage)){
    makeOrange();
    
    outputcanvas = document.getElementById("can2");
    OrangeImage.drawTo(outputcanvas);
  }
}
function makeOrange(){
  for(var pixel of OrangeImage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg<128){
      pixel.setRed(2*avg);
      pixel.setGreen(0.8*avg);
      pixel.setBlue(0);
    }
    else{
      pixel.setRed(255);
      pixel.setGreen(1.2*avg-51);
      pixel.setBlue(2*avg-255);
    }
  }
}
function doIndigo(){
  if(LoadImage(IndigoImage)){
    makeIndigo();
    
    outputcanvas = document.getElementById("can2");
     IndigoImage.drawTo(outputcanvas); 
  }
}
function makeIndigo(){
  for(var pixel of IndigoImage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    
    if(avg<128){
      pixel.setRed(0.8*avg);
      pixel.setGreen(0);
      pixel.setBlue(2*avg);
    }
    else {
      pixel.setRed(1.2*avg-51);
      pixel.setGreen(2*avg-251);
      pixel.setBlue(255);
    }
  }
}
function doViolet(){
  if(LoadImage(VioletImage)){
      makeViolet();
    
    outputcanvas = document.getElementById("can2");
    VioletImage.drawTo(outputcanvas);
   }
}
function makeViolet(){
  for(var pixel of VioletImage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    if(avg<128){
      pixel.setRed(1.6*avg);
      pixel.setGreen(0);
      pixel.setBlue(1.6*avg);
    }
    else{
      pixel.setRed(0.4*avg+153);
      pixel.setGreen(2*avg-255);
      pixel.setBlue(0.4*avg+153);
    }
  }
}
function makeWindow(){
  if(LoadImage(WindowImage)){
    Window();
    outputcanvas = document.getElementById("can2");
    WindowImage.drawTo(outputcanvas);
  }
}
function Window(){
  for(var pixel of WindowImage.values()){
   var x = pixel.getX();
   var y = pixel.getY();
   var height = WindowImage.getHeight();
   var width = WindowImage.getWidth();
    
   if(x<10 || y< 10){
     pixel.setRed(175);
     pixel.setGreen(238);
     pixel.setBlue(238);
   } 
   if(x>width-10 || y>height-10){
     pixel.setRed(175);
     pixel.setGreen(238);
     pixel.setBlue(238);
   }
   if(y>=height/2-5 && y<=height/2+5 ){
     pixel.setRed(175);
     pixel.setGreen(238);
     pixel.setBlue(238);
   }
   if(x>=width/4-5 && x<= width/4+5){
     pixel.setRed(175);
     pixel.setGreen(238);
     pixel.setBlue(238);
   }
   if(x>=width/4-5 && x<= width/4+5){
     pixel.setRed(175);
     pixel.setGreen(238);
     pixel.setBlue(238);
   }
   if(x>=3*width/4-5 && x<=3*width/4+5){
     pixel.setRed(175);
     pixel.setGreen(238);
     pixel.setBlue(238);
   } 
   if(x>=width/2-5 && x<=width/2+5){
     pixel.setRed(175);
     pixel.setGreen(238);
     pixel.setBlue(238);
   } 
  }
}
function makeRainbow(){
  if(LoadImage(RainbowImage)){
    rainbow();
    
    outputcanvas = document.getElementById("can2");
    RainbowImage.drawTo(outputcanvas);
  }
}
function rainbow(){
  for(var pixel of RainbowImage.values()){
    var avg = (pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3;
    var X = pixel.getX();
    var Y = pixel.getY();
    var height = RainbowImage.getHeight();
    var width = RainbowImage.getWidth();
    if(Y>6*height/7){
     if(avg<128){
       pixel.setRed(1.6*avg);
       pixel.setGreen(0);
       pixel.setBlue(1.6*avg);
     }
     else{
       pixel.setRed(0.4*avg+153);
       pixel.setGreen(2*avg-255);
       pixel.setBlue(0.4*avg+153);
     }
    }
    if(Y>5*height/7 && Y<=6*height/7){
      if(avg<128){
        pixel.setRed(0.8*avg);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }
      else{
        pixel.setRed(1.2*avg-51);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(255);
      }
    }
    if(Y>4*height/7 && Y<=5*height/7){
      if(avg<128){
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2*avg);
      }
     else{
       pixel.setRed(2*avg-255);
       pixel.setGreen(2*avg-255);
       pixel.setBlue(255);
     } 
    } 
    if(Y<height/7){
      if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(2*avg-255);
        pixel.setBlue(2*avg-255);
      }
    }
    if(Y>height/7 && Y<=2*height/7){
      if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(0.8*avg);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(1.2*avg-51);
        pixel.setBlue(2*avg-255);
      }
    }
    if(Y>2*height/7 && Y<=3*height/7){
      if(avg<128){
        pixel.setRed(2*avg);
        pixel.setGreen(2*avg);
        pixel.setBlue(0);
      }
      else{
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avg-255);
                    
      }
    }
   if(Y>3*height/7 && Y<=4*height/7 ){
     if(avg<128){
       pixel.setRed(0);
       pixel.setGreen(2*avg);
       pixel.setBlue(0);
     }
    else{
      pixel.setRed(2*avg-255);
      pixel.setGreen(255);
      pixel.setBlue(2*avg-255);
    } 
   }
      
  } 
}
function clearImage(){
  doClear(canvasimg);
  doClear(outputcanvas);
  
}
function doClear(canvas){
  var ctx = canvas.getContext("2d");
 ctx.clearRect(0,0,canvas.width,canvas.height);
}
function clearFilter(){
  
 doClear(outputcanvas);
  
  var finput = document.getElementById("input1");
  image = new SimpleImage(finput);
  image.drawTo(canvasimg);
}
function makeBlur(){
   if(LoadImage(BlurImage)){
     var width = BlurImage.getWidth();
     var height = BlurImage.getHeight();
     BlurredImage = new SimpleImage(width,height);
     BlurFilter();
     outputcanvas = document.getElementById("can2");
     
     BlurredImage.drawTo(outputcanvas);
   }
 }
function  BlurFilter(){
  for(var pixel of BlurImage.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    if(Math.random()>0.5){
      var newPixel = nearPixel(BlurImage,x,y,20);
      BlurredImage.setPixel(x,y,newPixel);
     }
    else{
      BlurredImage.setPixel(x,y,pixel);
    }
  }
}
function validPixel(coordinate,size){
  if(coordinate<0){
    return 0;
  }
  if(coordinate>=size){
    return size - 1;
  }
    return coordinate;
}
function nearPixel (image, x, y, diameter){
  var dx = Math.random() * diameter - diameter / 2;
  var dy = Math.random() * diameter - diameter / 2;
  var nx = validPixel (x + dx, image.getWidth());
  var ny = validPixel (y + dy, image.getHeight());
  return image.getPixel(nx, ny);
}