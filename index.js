import { KEPEKLISTA } from "./adat.js";
import Kepek from "./Kepek.js";

const szuloELEM = document.querySelector(".kartyatarto")

new Kepek(KEPEKLISTA,szuloELEM);

window.addEventListener("kivalaszt", function(event) {
    const osszesKartya = document.querySelectorAll(".kartya");
    const aktivalando = osszesKartya[event.detail];
    
    const marKiVoltValasztva = aktivalando.classList.contains("kivalasztott");
    osszesKartya.forEach(kartya => {
        kartya.classList.remove("kivalasztott");
    });

    if (!marKiVoltValasztva) {
        aktivalando.classList.add("kivalasztott");
    }
});