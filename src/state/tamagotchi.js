//import ClaseBase from '../proxy/TamagotchiJuego';

class tamagotchi extends TamagotchiJuego {
  constructor() {
    super();
    this.state = new despierto(this);
    this.imagen = "despertarse";
  }

  changeState(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  comer() {
    this.state.comer();
  }

  dormir() {
    this.state.dormir();
  }

  jugar() {
    this.state.jugar();
  }

  despertar() {
    this.state.despertarse();
  }

  estudiar() {
    this.state.estudiar();
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

}

