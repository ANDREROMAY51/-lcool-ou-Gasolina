function calcular() {
    let gas = window.document.getElementById("gasolina");
    if (gas.value == "" || isNaN(gas.value)) {
        window.alert("Por favor insira um valor para gasolina.\nColocar  ' . '  em vez de  ' , '");
        gas.value = "";
        gas.focus();
    } else {
        let alc = window.document.getElementById("alcool");
        if (alc.value == "" || isNaN(alc.value)) {
            window.alert("Por favor insira um valor para álcool.\nColocar  ' . '  em vez de  ' , '  ");
            alc.value = "";
            alc.focus();
        } else {
            //cálculos
            let calculo = gas.value * .7
            let perc = Math.round((alc.value / gas.value) * 100)
            let res = window.document.getElementById("resultado");
            if (calculo >= alc.value) {
                res.value = "ÁLCOOL Abaixo de 70% (" + perc + "%)"
                res.style.backgroundColor = "lime"
            } else {
                res.value = "GASOLINA Acima de 70% (" + perc + "%)"
                res.style.backgroundColor = "orange"
            }
        }
    }
}

function limpar() {
    window.document.getElementById("resultado").style.backgroundColor = "white";
    window.document.getElementById("gasolina").value = "";
    window.document.getElementById("alcool").value = "";
    window.document.getElementById("resultado").value = "";
}