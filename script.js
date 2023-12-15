function cpfArray(cpf) {
    return cpf.split('');
}

function digitoV1() {
    
    let cpfArray1 = cpfArray();

    let somaDV1 = cpfArray1[0]*10 + cpfArray1[1]*9 + cpfArray1[2]*8 + cpfArray1[3]*7 + cpfArray1[4]*6 + cpfArray1[5]*5 + cpfArray1[6]*4 + cpfArray1[7]*3 + cpfArray1[8]*2;
    let dv1 = 11 - (somaDV1 % 11);

    return dv1;
}

function digitoV2() {
    
    let cpfArray2 = cpfArray();

    let somaDV2 = cpfArray2[0]*11 + cpfArray2[1]*10 + cpfArray2[2]*9 + cpfArray2[3]*8 + cpfArray2[4]*7 + cpfArray2[5]*6 + cpfArray2[6]*5 + cpfArray2[7]*4 + cpfArray2[8]*3 + cpfArray2[9]*2;
    let dv2 = 11 - (somaDV2 % 11);

    return dv2;
}

let menu = parseInt(prompt("CPF-ator 2000 \nEscolha uma das opcôes: \n1. Verificar validade de CPF \n2. Criar CPF válido"))

if (menu == 1) {
    let cpf = prompt("Insira o seu CPF completo (apenas os números)")

    let dvDigitados = array[9] + array[10];
    let dvVerificados = digitoV1(cpf) + digitoV2(cpf);

    if (dvDigitados == dvVerificados) {
        alert("CPF válido")
    } else {
        alert("CPF inválido")
    }

} else if (menu == 2) {
    let cpf = prompt("Insira um número de 9 dígitos");

    digitoV1(cpf);
    cpf = cpf + digitoV1(cpf);

    digitoV2(cpf)
    cpf = cpf + digitoV2(cpf)

    alert(`Para esse ser um CPF válido, os dígitos devem ser ${digitoV1}+${digitoV2} \nCPF válido: ${cpf}`)

} else {
    alert("Opção inválida")
}