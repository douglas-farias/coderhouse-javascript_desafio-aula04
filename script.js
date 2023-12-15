function cpfArray(cpf) {
    return cpf.split('');
}

function digitoV1(cpf) {
    let cpfArray1 = cpfArray(cpf);
    let somaDV1 = cpfArray1[0]*10 + cpfArray1[1]*9 + cpfArray1[2]*8 + cpfArray1[3]*7 + cpfArray1[4]*6 + cpfArray1[5]*5 + cpfArray1[6]*4 + cpfArray1[7]*3 + cpfArray1[8]*2;
    let dv1 = 11 - (somaDV1 % 11);
    return dv1;
}

function digitoV2(cpf) {
    let cpfArray2 = cpfArray(cpf);
    let somaDV2 = cpfArray2[0]*11 + cpfArray2[1]*10 + cpfArray2[2]*9 + cpfArray2[3]*8 + cpfArray2[4]*7 + cpfArray2[5]*6 + cpfArray2[6]*5 + cpfArray2[7]*4 + cpfArray2[8]*3 + cpfArray2[9]*2;
    let dv2 = 11 - (somaDV2 % 11);
    return dv2;
}

let menu = parseInt(prompt("CPF-ator 2000 \nEscolha uma das opções: \n1. Verificar validade de CPF \n2. Criar CPF válido"));

if (menu == 1) {
    let cpf = prompt("Insira o seu CPF completo (apenas os números)");
    
    let array = cpfArray(cpf);

    let dvDigitados = parseInt(array[9] + array[10]);
    let dvVerificados = `${digitoV1(cpf)}${digitoV2(cpf)}`;

    if (dvDigitados == dvVerificados) {
        alert("CPF válido");
    } else {
        alert("CPF inválido");
    }

} else if (menu == 2) {
    cpf = prompt("Insira um número de 9 dígitos");

    let dv1 = digitoV1(cpf);
    cpf = cpf + dv1;

    let dv2 = digitoV2(cpf);
    cpf = cpf + dv2;

    alert(`Para esse ser um CPF válido, os dígitos devem ser ${dv1}${dv2} \nCPF válido: ${cpf}`);

} else {
    alert("Opção inválida");
}
