class TamagotchiProxy extends TamagotchiJuego {

    constructor(miTamagotchi) {
        if (new.target === tamagotchi) {
            throw new Error('No puedes instanciar directamente una clase abstracta.');
        }
        this.miTamagotchi = miTamagotchi;
        this.encendido = 0;
    }


    comer() {
        if (encendido = 1) {
            this.miTamagotchi.comer();
        }

    }

    dormir() {
        if (encendido = 1) {
            this.miTamagotchi.dormir();
        }
    }


    jugar() {
        if (encendido = 1) {
            this.miTamagotchi.jugar();
        }
    }

    despertar() {
        if (encendido = 1) {
            this.miTamagotchi.despertar();
        }
    }

    estudiar() {
        if (encendido = 1) {
            this.miTamagotchi.estudiar();
        }
    }

    setMensaje(mensaje) {
        this.mensaje = mensaje;
    }

    setImagen(imagen) {
        this.imagen = imagen;
    }

    getMensaje() {
        return this.mensaje;
    }

    getImagen() {
        return this.imagen;
    }
    setEncendido(esEncendido)   {
        this.encendido = esEncendido;
    }

    getEncendido() {
        return this.encendido;
    }       
}

