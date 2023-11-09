"use strict";

// Pratybos (1dalis 70skaidre)

// 1.
let miau = "katinas";
// 1. a.
miau = 13;
// 1. b.
console.log(miau);

// 1.
let didinam = 3;
console.log(didinam);
console.log(didinam++);
console.log(didinam++);
console.log(didinam++);
console.log(didinam);

// 2.
let mazinam = 8;
console.log(mazinam--);
console.log(mazinam--);
console.log(mazinam--);
console.log(mazinam);

// 3.
let keiciam = "23";

keiciam = +"23";
console.log(keiciam);

keiciam = "23";
keiciam = Number("23");
console.log(keiciam);

keiciam = "23";
keiciam = "23" * 1;
console.log(keiciam);

// 1.
let pirmasSkaicius = 3;
// 1. a.
let antrasSkaicius = pirmasSkaicius + 5;
console.log(antrasSkaicius);


//////////////////////////////////////////////////////////////////

// 1.
const zmogus_Vienas_Svoris = 110
const zmogus_Antras_Svoris = 85
const zmogus_Vienas_Ugis_Cm = 173
const zmogus_Antras_Ugis_Cm = 185

function KMI(svoris, ugis){
    const KMI = svoris / ((ugis / 100)**2);
    return KMI
}
const zmogus_Vienas_KMI = KMI(zmogus_Vienas_Svoris, zmogus_Vienas_Ugis_Cm)
const zmogus_Antras_KMI = KMI(zmogus_Antras_Svoris, zmogus_Antras_Ugis_Cm)


// 2.
console.log(`pirmo zmogaus KMI: ${zmogus_Vienas_KMI.toFixed(2)}`)
console.log(`antro zmogaus KMI: ${zmogus_Antras_KMI.toFixed(2)}`)

if (zmogus_Vienas_KMI > zmogus_Antras_KMI){
    console.log('pirmo zmogaus kmi yra didesnis')
} else {
    console.log('antro zmogaus kmi yra didesnis')
}


// 1.
let krastine_a = 5
let krastine_b = 8
const krastine_c = krastine_a + krastine_b
const plotas = 0.5 * krastine_a * krastine_b
console.log(plotas)

// 2.

let temperatura_Celsijus = 25
const farenheito_zenklas = "\u00B0F"
const celsijaus_zenklas = "\u00B0C"
const temperatura_Farenheitas = (temperatura_Celsijus * 9/5) + 32
console.log(`Temperatura celsijum: ${temperatura_Celsijus + celsijaus_zenklas}, si temperatura farenheitais yra: ${temperatura_Farenheitas + farenheito_zenklas}. Tai yra ${typeof temperatura_Farenheitas} tipo kintamasis`)






