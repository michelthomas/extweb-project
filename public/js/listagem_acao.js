//set attributes from json to html with creating html elements
const appendAcoes = (data) => {

    /*const lista_cards_acoes = document.getElementById("lista");

    while (lista_cards_acoes.firstChild) {
        lista_cards_acoes.firstChild.remove();
    }*/

    data.forEach(acao => appendAcao(acao));
}

const carregarTodasAcoes = () => {
    appendAcoes(acaoArr);
}

const filtrarAcao = () => {
    const filtro = document.querySelector('input[type=radio][name="filtros"]:checked').value;
    
    console.log("filtro = " + filtro);

    if(filtro) {
        const valor_filtro = document.getElementById(filtro + "_filtro").value;

        console.log("valor_filtro = " + valor_filtro);

        const acoes_filtradas = acaoArr.filter(acao => {
            console.log("acao_titulo = " + acao[filtro]);
            console.log(acao[filtro].toLowerCase().includes(valor_filtro.toLowerCase().trim()));
            return acao[filtro].toLowerCase().includes(valor_filtro.toLowerCase().trim())
        });

        console.log("acoes_filtradas = " + JSON.stringify(acoes_filtradas));
        appendAcoes(acoes_filtradas);
    } else {
        console.log("filtro invalido: " + filtro);
    }

}

const selecionarAcao = (id) => {
    console.log("acao_id = " + id);
    localStorage.setItem("id", id);

    window.location.assign("visualizar_acao.html");
}

const calcularNumeroTotalDeAcoes = () => (acaoArr.length)
