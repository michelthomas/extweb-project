const appendAct = (acao) => {
    const {id_acao, titulo, resumo, imagens} = acao;

    const lista_cards_acoes = document.getElementById("lista");

    const container = document.createElement("div");
    const img = document.createElement("img");
    const body = document.createElement("div");
    const h5 = document.createElement("h5");
    const p = document.createElement("p");

    container.classList.add("card");
    container.classList.add("mb-3");
    container.setAttribute("onclick", "selecionarAcao(" + id_acao + ")");

    img.setAttribute("src", imagens[0].link);
    img.classList.add("card-img-top");
    img.setAttribute("height", "400");
    img.setAttribute("width", "100");

    body.classList.add("card-body");
    
    h5.classList.add("card-title");
    h5.innerText = titulo;

    p.classList.add("card-text");
    p.innerText = resumo.substring(0, 100) + "...";

    body.appendChild(h5);
    body.appendChild(p);

    container.appendChild(img);
    container.appendChild(body);
    lista_cards_acoes.appendChild(container);

}

//set attributes from json to html with creating html elements
const appendAcoes = (data) => {

    const lista_cards_acoes = document.getElementById("lista");         //

    while (lista_cards_acoes.firstChild) {      //remove todos os elementos filhos do elemento da lista de projetos
        lista_cards_acoes.firstChild.remove();
    }

    data.forEach(acao => appendAct(acao));
}

//carrega todas as ações do array de ações
const carregarTodasAcoes = () => {
    appendAcoes(acaoArr);
}

//filtragem das ações
const filtrarAcao = () => {
    const filtro = document.querySelector('input[type=radio][name="filtros"]:checked').value;       //pega o valor do botão de rádio selecionado

    if(filtro) {
        const valor_filtro = document.getElementById(filtro + "_filtro").value;         //pega o elemento input com o nome do botão de rádio + filtro

        const acoes_filtradas = acaoArr.filter(acao => {        //
            return acao[filtro].toLowerCase().includes(valor_filtro.toLowerCase().trim());          //retorna a ação, caso a string filtrada corresponda à do campo da ação
        });

        appendAcoes(acoes_filtradas);           //pega a ações retornadas, em caso da filtragem certa
    } else {
        console.log("filtro invalido: " + filtro);
    }

}

const selecionarAcao = (id) => {
    localStorage.setItem("id", id);     //coloca o id da ação no localStorage (dado persiste)

    window.location.assign("visualizar_acao.html");             //chama a página de visualizar ação
}

const calcularNumeroTotalDeAcoes = () => (acaoArr.length);
