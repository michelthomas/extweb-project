//set attributes from json to html with creating html elements
const appendTodasAcoes = (data) => {
    data.forEach(acao => appendAcao(acao));
}

const carregarTodasAcoes = () => {
    appendTodasAcoes(acaoArr);
}

// TODO Filtrar (?)

const selecionarAcao = (id) => {
    console.log("acao_id = " + id);
    localStorage.setItem("id", id);

    window.location.assign("visualizar_acao.html");
}

const calcularNumeroTotalDeAcoes = () => (acaoArr.length)
