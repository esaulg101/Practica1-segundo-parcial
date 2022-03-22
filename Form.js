class Form{
    constructor(){
        this.title=createElement("h2");
        this.nombre=createElement("h3");
        this.input = createInput();
        this.button = createButton("Enviar");
    }
    display(){
        this.title.html("Mi base de datos");
        this.title.position(130,0);
        this.nombre.html("Ingresa tu nombre");
        this.nombre.position(130,100);

        this.input.position(130,160);
        this.button.position(250,200);
        
        this.button.mousePressed(()=>{
            persona.nombre=this.input.value();
            persona.update();
        })
    }
}