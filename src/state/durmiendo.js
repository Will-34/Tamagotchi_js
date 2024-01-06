class durmiendo extends state {

    constructor(tamagotchi) {
        super(tamagotchi); // 
        this.tamagotchi = tamagotchi;
    }
    comer() { 
        this.miTamagotchi.setMensaje("ZzZzzZZ");
        Swal.fire({
            icon: "info",
            title: "ZZzZZzzz",
          });
    }

    dormir() { 
        this.miTamagotchi.setMensaje("ZzZzzZZ");
        Swal.fire({
            icon: "info",
            title: "ZZzZZzzz",
          });
    }

    jugar() {
        this.miTamagotchi.setMensaje("zzzzzzZzzZ !");
        Swal.fire({
            icon: "info",
            title: "ZZzZZzzz",
          });
     }

    despertarse() {
        this.tamagotchi.changeState(new despierto(this.tamagotchi))
        this.miTamagotchi.setMensaje("¡Buenos dias!");
        this.miTamagotchi.setImagen("despertarse");
        Swal.fire({
            icon: "success",
            title: "¡Buenos dias!",
          });
    
     }

    estudiar() { 
        this.miTamagotchi.setMensaje("ZZzZZzz");
        Swal.fire({
            icon: "info",
            title: "ZZzZZzzz",
          });
    
    }

}