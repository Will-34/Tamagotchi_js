class TamagotchiJuego {
    Plantilla( accion, x) {
        let ruta = "../img/";
        let personaje = this.Seleccion();
        if (x === 1) {
           // this.color();
        }

        return ruta + personaje + "/" + accion + ".png";
    }

    Seleccion() {}
    color() { }
    comer() { }
    dormir() { }
    jugar() { }
    despertarse() { }
    estudiar() { }
}

