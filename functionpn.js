// console.log("hi");
// const hbtn = document.getElementById("homebtn");
// const cnRightpnbasic = document.getElementById("RcnpnBasic");
// const fnbtn = document.getElementById("functionsbtn");
// const funcCNpn= document.getElementById("functionscnpnbase");
// const funcPN= document.getElementById("functionspnFNCbase");
// hbtn.addEventListener("click", () => {
//     cnRightpnbasic.style.display = "block";
//         funcCNpn.style.display = "none";
//         funcPN.style.display = "none";

// });
// fnbtn.addEventListener("click", () => {
//     cnRightpnbasic.style.display = "none";
//         funcCNpn.style.display = "block";
//         funcPN.style.display = "block";
// });
// console.log("hi")
// console.log(MathLive)

// const textfieldsMATH = document.querySelectorAll(".textcontent");
// const mathfields = [];
// let activemathfield = null;
// textfieldsMATH.forEach((page) => {
//     console.log("mibombo")
//     const mathfieldX = MathLive.makeMathField(page,{
//         virtualKeyboardMode: 'off',
//         smartMode: true
//     });
//     mathfields.push(mathfieldX);
//     page.addEventListener("focusin", () => {
//         activemathfield = mathfieldX;
//     });
// });

// function insertMath(latexFunction) {
//     if (activemathfield !== null){
//         activemathfield.focus();
//         activemathfield.executeCommand('insert', latexFunction)
//     };
// };

// const SupersciprbtnVAR = document.getElementById("Supersciprbtn");
// SupersciprbtnVAR.addEventListener('pointerdown', () => {
//     activemathfield.focus();
// });
// SupersciprbtnVAR.addEventListener("click",insertMath('x^n'));
