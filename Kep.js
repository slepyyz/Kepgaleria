export default class Kep {
    #obj = {};
    #index = 0;
    domElemLista = [];

    constructor(obj = { src, cim, leiras }, index, szuloElem) {
        this.#obj = obj;
        this.#index = index;
        this.szuloElem = szuloElem;
        this.megjelenit();
        this.esemenykezelo();
    }

    megjelenit() {
        let kod = `<div class="kartya">
            <img src="${this.#obj.src}" alt="${this.#obj.cim}">
            <h3>${this.#obj.cim}</h3>
            <p>${this.#obj.leiras}</p>
        </div>`;
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }

    esemenykezelo() {
        let kepElem = document.querySelector(".kartya:last-child");
        kepElem.addEventListener("click", (event) => {
            this.kivalaszt();
        });
        this.domElemLista.push(kepElem);
    }

    kivalaszt() {
        const e = new CustomEvent("kivalaszt", { detail: this.#index });
        window.dispatchEvent(e);
    }
}
