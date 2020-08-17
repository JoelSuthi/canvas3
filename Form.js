class Form {
    constructor(){

        this.button = createButton('Clear');
        this.button.style('width','80px');
        this.button.style('height','50px');
        this.button.style('font-size','20px');
        this.button.style('background-color','peru');
    }

    display(){
        this.button.position(1300,650);
    }

}