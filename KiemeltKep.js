export default class KiemeltKep{
    #eUt;
    #cim;
    #leiras;

    constructor(obj = { src, cim, leiras }, szuloElem) {
        this.#eUt=obj.src;
        this.#cim=obj.cim;
        this.#leiras=obj.leiras;
        this.szuloElem = szuloElem;
        this.megjelenit();
    }

    megjelenit() {
        let kod = `<button class="balgomb">&#8678</button>
            <div class="kartya">
            <img src="${this.#eUt}" alt="${this.#cim}">
            <h3>${this.#cim}</h3>
            <p>${this.#leiras}</p>
        </div>
        <button class="jobbgomb">&#8680</button>`;
        this.szuloElem.insertAdjacentHTML("beforeend", kod);
    }
}