class despierto extends state {

    constructor(tamagotchi) {
        super(tamagotchi); // 
        this.tamagotchi = tamagotchi;
    }

    comer() {
        this.tamagotchi.changeState(new comiendo(this.tamagotchi));
        this.miTamagotchi.setMensaje("A comeeer !");
        this.miTamagotchi.setImagen("comiendo");
        Swal.fire({
            icon: "success",
            title: "A Comeeer !",
          });
    }

    dormir() {
        this.miTamagotchi.setMensaje("No quiero dormir !");
        Swal.fire({
            icon: "error",
            title: "No quiero dormir !",
          });
    }

    jugar() {
        this.miTamagotchi.setMensaje("Primero tengo que comer y estudiar !");
        Swal.fire({
            icon: "warning",
            title: "Primero tengo que comer y estudiar !",
          });
    }

    despertarse() {
        this.miTamagotchi.setMensaje("¡Ya estoy despierta!");
        Swal.fire({
            icon: "warning",
            title: "¡Ya estoy despierta!",
          });
    }

    estudiar() {
        this.miTamagotchi.setMensaje("¡Tengo hambre !");
        Swal.fire({
            icon: "warning",
            title: "¡Tengo hambre !",
          });
    }

}