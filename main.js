


const curDisp = document.querySelector('.current_display');
const resDisp = document.querySelector('.resistance_display');


const btnPlus = document.querySelector('.btn_plus');
const btnMinus = document.querySelector('.btn_minus');

const voltage = 12;
let resistance = 10;

const currCalc = () => {
    return voltage / resistance;
}
let current = currCalc().toFixed(2);



btnPlus.addEventListener('click', () => {
    resistance = resistance + 1;
    let current = currCalc().toFixed(2);
    resDisp.innerHTML = `${resistance} Om`;
    curDisp.innerHTML = `${current} A`;
});

btnMinus.addEventListener('click', () => {
    if (resistance <= 0) {
        return;
    }
    resistance = resistance - 1;
    let current = currCalc().toFixed(2);
    resDisp.innerHTML = `${resistance} Om`;
    curDisp.innerHTML = `${current} A`;
});


// btnPlus.addEventListener('click', () => {
//     resistance = resistance + 1;
//     let current = voltage / resistance;
//     resDisp.innerHTML = `${resistance} Om`;
//     curDisp.innerHTML = `${current.toFixed(2)} A`;
// });

// btnMinus.addEventListener('click', () => {
//     if (resistance <= 0) {
//         return;
//     }
//     resistance = resistance - 1;
//     let current = voltage / resistance;
//     resDisp.innerHTML = `${resistance} Om`;
//     curDisp.innerHTML = `${current.toFixed(2)} A`;
// });




