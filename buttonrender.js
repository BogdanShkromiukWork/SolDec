
const buttonsRLpn = document.querySelectorAll('.btn');
buttonsRLpn.forEach((btnpn) => {
    const id = btnpn.id;
    const torender = renderBtnsearch(id);
    const idDiv = id + '-div';
    if (torender != undefined) {
        katex.render(torender, document.getElementById(idDiv));
    }
})
    function renderBtnsearch(id) {
        const idlist = ["Supersciprbtn", "Sunscript"]
        const torenderlist = ['x^n', 'x_n']
        const torenderid = idlist.indexOf(id);
        return torenderlist[torenderid];
    }
