class Persona{
    constructor (){
        this.nombre=null;
    }
    update(){
        database.ref("Persona").set({
            "nombre": this.nombre
        })
    }
}