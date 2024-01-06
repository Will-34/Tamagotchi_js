class state {
    constructor(miTamagotchi) {
        if (new.target === state) {
          throw new Error('No puedes instanciar directamente una clase abstracta.');
        }
        this.miTamagotchi = miTamagotchi;
      }
    comer() { }

    dormir() { }

    jugar() { }

    despertarse() { }

    estudiar() { }
}