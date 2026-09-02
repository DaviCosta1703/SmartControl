const elementoNome = document.querySelector("#nomeCompleto");
const elementoData = document.querySelector("#dataAtual");

if (elementoNome && elementoData) {
    
    const nome = prompt("Digite seu nome:");
    const sobrenome = prompt("Digite seu sobrenome");
    const usuario = `${nome} ${sobrenome}`;

    const diasSemana = [
        "Domingo",
        "Segunda-Feira",
        "Terça-Feira",
        "Quarta-Feira",
        "Quinta-Feira",
        "Sexta-Feira",
        "Sábado",

    ];

    function atualizarSaudacao() {

        const agora = new Date();
        const diaSemana = diasSemana[agora.getDay()];

        const dia = String(agora.getDate()).padStart(2, "0");
        const mes = String(agora.getMonth() + 1).padStart(2, "0");
        const ano = agora.getFullYear();

        const hora = String(agora.getHours()).padStart(2, "0");
        const minuto = String(agora.getMinutes()).padStart(2, "0");
        const segundo = String(agora.getSeconds()).padStart(2, "0");
        const dataatual = `${diaSemana}, ${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundo}`;

        elementoNome.textContent = `Olá, ${usuario}!`;
        elementoData.textContent = `Data e hora atual: ${dataatual}`;
        // console.log(`Olá, ${usuario}!`);
        // console.log(`Data e hora atual: ${dataatual}`);
    }
    
    atualizarSaudacao();    

    setInterval(atualizarSaudacao, 1000);
}

// Parte do Campo de Busca

