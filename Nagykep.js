import KiemeltKep from "./KiemeltKep.js";

export default class Nagykep {
    #aktindex;
    #lista;
    constructor(index, lista, nagykepelem) {
        this.#aktindex = index;
        this.#lista = lista;
        this.nagykepelem = nagykepelem;
        this.balgombELEM = document.querySelector(".balgomb");
        this.jobbgombELEM = document.querySelector(".jobbgomb");

        this.balgombELEM.addEventListener("click",function(event){
            this.#aktindex--;
            megjelenit();
        })

        this.jobbgombELEM.addEventListener("click",function(event){
            this.#aktindex = this.#aktindex+1;
            megjelenit();
        })
    }

    megjelenit(){
        new KiemeltKep(this.#lista[this.#aktindex],this.nagykepelem)
    }
}
