const hbtn = document.getElementById("homebtn");
const cnRightpnbasic = document.getElementById("RcnpnBasic");
const fnbtn = document.getElementById("functionsbtn");
const funcCNpn= document.getElementById("functionscnpn");
const funcPN= document.getElementById("functionspnFNCbasic")
hbtn.addEventListener("click", () => {
    cnRightpnbasic.style.display = "block";
        funcCNpn.style.display = "none";
        funcPN.style.display = "none";

})
fnbtn.addEventListener("click", () => {
    cnRightpnbasic.style.display = "none";
        funcCNpn.style.display = "block";
        funcPN.style.display = "block";
})
