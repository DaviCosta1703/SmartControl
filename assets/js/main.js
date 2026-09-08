document.addEventListener("DOMContentLoaded", () => {
    const elementoNome = document.querySelector("#nomeCompleto");
    const elementoData = document.querySelector("#dataAtual");
    const themeToggle = document.querySelector("#themeToggle");
    const menuToggle = document.querySelector("#menu-toggle");
    const sidebar = document.querySelector("#sidebarMenu");
    const campoBusca = document.querySelector("#campoBusca");
    const linhasTabela = document.querySelectorAll("tbody tr");

    if (themeToggle) {
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-theme");
            const temaAtivo = document.body.classList.contains("dark-theme");
            themeToggle.textContent = temaAtivo ? "Light Mode" : "Dark Mode";
        });
    }

    if (menuToggle && sidebar) {
        menuToggle.addEventListener("change", () => {
            const aberto = menuToggle.checked;
            sidebar.classList.toggle("is-open", aberto);
            document.body.classList.toggle("sidebar-open", aberto);
        });
    }

    if (campoBusca && linhasTabela.length) {
        campoBusca.addEventListener("input", () => {
            const termoBusca = campoBusca.value.trim().toLowerCase();

            linhasTabela.forEach((linha) => {
                const textoLinha = linha.textContent.toLowerCase();
                const encontrou = !termoBusca || textoLinha.includes(termoBusca);
                linha.hidden = !encontrou;
            });
        });
    }

    if (elementoNome && elementoData) {
        const nome = prompt("Digite seu nome:", "Usuário") || "Usuário";
        const sobrenome = prompt("Digite seu sobrenome", "Smart") || "Smart";
        const usuario = `${nome} ${sobrenome}`;

        const diasSemana = [
            "Domingo",
            "Segunda-Feira",
            "Terça-Feira",
            "Quarta-Feira",
            "Quinta-Feira",
            "Sexta-Feira",
            "Sábado"
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
            const dataAtual = `${diaSemana}, ${dia}/${mes}/${ano} - ${hora}:${minuto}:${segundo}`;

            elementoNome.textContent = `Olá, ${usuario}!`;
            elementoData.textContent = `Data e hora atual: ${dataAtual}`;
        }

        atualizarSaudacao();
        setInterval(atualizarSaudacao, 1000);
    }
});
