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
/*
<div class="card mb-3" onclick="selecionarAcao(1)">
    <img src="https://i2.wp.com/emotioncard.com.br/wp-content/uploads/2017/07/mensagens-mensagens-de-bom-dia-4.jpg?fit=640%2C640&ssl=1" class="card-img-top" alt="imgs" height="400" width="100">
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
    </div>
</div>
*/
// white-space: nowrap; 
//     width: 12em; 
//     overflow: hidden;
//     text-overflow: ellipsis;

//set attributes from json to html with creating html elements
const appendAcoes = (data) => {

    const lista_cards_acoes = document.getElementById("lista");

    while (lista_cards_acoes.firstChild) {
        lista_cards_acoes.firstChild.remove();
    }

    data.forEach(acao => appendAct(acao));
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
