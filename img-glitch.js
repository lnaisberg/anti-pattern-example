function glitch1() {
    const s = (myP5Instance) => {


        myP5Instance.setup = () => {
            myP5Instance.createCanvas(1657, 1276);
            myP5Instance.glitch = new Glitch(myP5Instance);
            myP5Instance.loadImage("map1.png", (im)=>{
                myP5Instance.glitch.loadImage(im);
            })
        }
        
        myP5Instance.draw = () => {
            // myP5Instance.background(0);
            myP5Instance.glitch.resetBytes();
            myP5Instance.glitch.replaceBytes(100, 104);
            myP5Instance.glitch.randomBytes(1);
            myP5Instance.glitch.buildImage();
            myP5Instance.image(myP5Instance.glitch.image, 0, 0);
        }
    }
    return new p5(s);
}    



