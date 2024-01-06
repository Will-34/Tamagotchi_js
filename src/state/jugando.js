class jugando extends state {

    constructor(tamagotchi) {
        super(tamagotchi); // 
        this.tamagotchi = tamagotchi;
    }
    comer() { 
        this.tamagotchi.changeState(new comiendo(this.tamagotchi));
        this.miTamagotchi.setMensaje("A comeer !");
        this.miTamagotchi.setImagen("comiendo");
        Swal.fire({
            icon: "success",
            title: "¡A Comeeer uwu !",
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
        this.miTamagotchi.setMensaje(" estoy jugando e.e !");
        Swal.fire({
            icon: "warning",
            title: "¡Ya estoy jugando e.e !",
          });
     }

    despertarse() {
        this.miTamagotchi.setMensaje("¡Ya estoy despierta!");
        Swal.fire({
            icon: "warning",
            title: "¡Ya estoy Despierta e.e !",
          });
     }

    estudiar() { 
        this.miTamagotchi.setMensaje("¡no quiero !");
        Swal.fire({
            icon: "error",
            title: "¡No quiero !",
          });
    }

}