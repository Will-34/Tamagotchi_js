class estudiando extends state {

    constructor(tamagotchi) {
        super(tamagotchi); // 
        this.tamagotchi = tamagotchi;
    }
    comer() {
        this.miTamagotchi.setMensaje("¡No tengo hambre !");
        Swal.fire({
            icon: "warning",
            title: "¡No tengo hambre !",
          });
    }

    dormir() {
        this.tamagotchi.changeState(new durmiendo(this.tamagotchi));
        this.miTamagotchi.setMensaje("Buenas noches ZZzZz!");
        this.miTamagotchi.setImagen("durmiendo");
        Swal.fire({
            icon: "success",
            title: "¡A Mimir zZZZz!",
          });
    }

    jugar() {
        this.tamagotchi.changeState(new jugando(this.tamagotchi));
        this.miTamagotchi.setMensaje(" Yeeee a jugar :D !");
        this.miTamagotchi.setImagen("jugando");
        Swal.fire({
            icon: "success",
            title: "¡A Jugaaar !",
          });
    }

    despertarse() {
        this.miTamagotchi.setMensaje("¡Ya estoy despierta!");
        Swal.fire({
            icon: "warning",
            title: "¡Ya estoy despierta !",
          });
    }

    estudiar() {
        this.miTamagotchi.setMensaje("¡Estoy estudiando !");
        Swal.fire({
            icon: "warning",
            title: "¡Estoy estudiando !",
          });
    }

}