//set attributes from json to html with creating html elements
const appendProjectsData = (data) => {
    data.forEach(acao => appendAcao(acao));
}

const carregarTodosAcoes = () => {
    appendProjectsData(acaoArr);
}

// TODO Filtrar (?)

const selecionarAcao = (id) => {
    console.log("acao_id = " + id);
    localStorage.setItem("id", id);

    window.location.assign("visualizar_acao.html");
}

const calcularNumeroTotalDeAcoes = () => (acaoArr.length)
