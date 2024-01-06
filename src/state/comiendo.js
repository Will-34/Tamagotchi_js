class comiendo extends state {

    constructor(tamagotchi) {
        super(tamagotchi); // 
        this.tamagotchi = tamagotchi;
    }
    comer() { 
        this.miTamagotchi.setMensaje("Ya estoy comiendo !");
        Swal.fire({
            icon: "warning",
            title: "Ya estoy comiendo !",
          });
    }

    dormir() { 
        this.tamagotchi.changeState(new durmiendo(this.tamagotchi));
        this.miTamagotchi.setMensaje("A dormirr zZZZz!");
        this.miTamagotchi.setImagen("durmiendo");
        Swal.fire({
            icon: "success",
            title: "¡A Mimir zZZZz!",
          });
    }

    jugar() {
        this.miTamagotchi.setMensaje("Primero tengo que estudiar !");
        Swal.fire({
            icon: "error",
            title: "Primero tengo que estudiar !",
          });
     }

    despertarse() {
        this.miTamagotchi.setMensaje("¡Ya estoy despierta!");
        Swal.fire({
            icon: "warning",
            title: "Ya estoy Despierta !",
          });
     }

    estudiar() { 
        this.tamagotchi.changeState(new estudiando(this.tamagotchi));
        this.miTamagotchi.setMensaje("¡A estudiaaar !");
        this.miTamagotchi.setImagen("estudiando");
        Swal.fire({
            icon: "success",
            title: "¡A estudiaaar !",
          });
    }

}