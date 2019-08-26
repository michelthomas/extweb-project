const carregarAcao = () => {
    const acao_id = Number.parseInt(localStorage.getItem("id"));

    console.log("detalhes_acao_id = " + acao_id);

    const acao = acaoArr.find((acao) => acao.id_acao === acao_id);

    localStorage.setItem("acao", acao);

    appendAcao(acao);
}

const appendAcao = (acao) => {
    const {id_acao, titulo, area_principal, tipo_acao, local,
        espaco_realizacao, resumo, periodo_inscricao, vagas,
        programacao, publico_alvo, equipe, imagens} = acao;

    // TODO id_acao ???
    // console.log(JSON.stringify(acao));
    // localStorage.setItem("acao", acao);


    document.getElementById("titulo").innerText = titulo;

    document.getElementById("area_principal").innerText = "Área: " + area_principal;
    document.getElementById("tipo_acao").innerText = "Tipo: " + tipo_acao;


    //set images on carousel
    var carousel = document.getElementById("carrossel");
    var slide_list = document.getElementById("slideList");
    imagens.forEach((imagem, i) => {
       console.log(imagem.link);
       // <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
       var carr = document.createElement("div");
       var slide = document.createElement("li");

       carr.classList.add("carousel-item");
       slide.setAttribute("data-target", "carouselExampleIndicators");
       slide.setAttribute("data-slide-to", i);
       
       if (i == 0)
       {
           carr.classList.add("active");
           slide.classList.add("active");
       }

       var link = document.createElement("img");
       link.setAttribute("src", imagem.link);
       link.setAttribute("height", 500);
       link.setAttribute("width", 1000);
       link.setAttribute("class", "d-block w-100");

       carr.appendChild(link);
       carousel.appendChild(carr);
       slide_list.appendChild(slide);

    });

    document.getElementById("resumo").innerText = resumo;

    const ul = document.getElementById("list_publico_alvo");    
    publico_alvo.map((publico) => {
        const li = document.createElement("li");
        li.innerText = publico;
        ul.appendChild(li);

    });

    document.getElementById("cidade_estado").innerText = local.municipio + '/' + local.estado;
    document.getElementById("espaco_localizacao").innerText = espaco_realizacao;

    document.getElementById("periodo_inscricao").innerText = "De " + periodo_inscricao.data_inicial + " à " + periodo_inscricao.data_final;
    var vagas_disponiveis =  vagas.quantidade_total - vagas.quantidade_ocupada;
    localStorage.setItem("vagas_disponiveis", vagas_disponiveis);

    document.getElementById("vagas_disponiveis").innerText = "Vagas Disponíveis: " + vagas_disponiveis;

    if (vagas_disponiveis > 0)
    {
        const div_inscricao = document.getElementById("div_inscricao");
        const div_btn = document.createElement("div");
        const btn = document.createElement("button");

        div_btn.setAttribute("id", "div_btn");
        btn.classList.add("btn");
        btn.classList.add("btn-dark");
        btn.setAttribute("onclick", "realizarInscricao()");
        btn.innerText = "Realizar Inscrição";

        div_btn.appendChild(btn);
        div_inscricao.appendChild(div_btn);

    }

    // document.getElementById("tipo_curso").innerText = tipo_curso;
    // document.getElementById("modalidade").innerText = modalidade;

    const list_programacao = document.getElementById("list_programacao");
    programacao.map((atual) => {
        const tr = document.createElement("tr");
        const data = document.createElement("td");
        const horario = document.createElement("td");
        const atividades = document.createElement("td");

        data.innerText = atual.data;
        horario.innerText = atual.horario_inicial + " - " + atual.horario_final;
        atividades.innerText = atual.atividades;

        tr.appendChild(data);
        tr.appendChild(horario);
        tr.appendChild(atividades);
        list_programacao.appendChild(tr);
    });

    //document.getElementById("carga_horaria").innerText = carga_horaria;

    const contatos = document.getElementById("contatos");
    
    equipe.map((pessoa) => {

        const elemento_nome = document.createElement("h5");
        elemento_nome.innerText = pessoa.nome;

        const ul = document.createElement("ul");

        const elemento_categoria = document.createElement("li");
        elemento_categoria.innerText = "Categoria: " + pessoa.categoria;

        const elemento_funcao = document.createElement("li");
        elemento_funcao.innerText = "Função: " + pessoa.funcao;

        const elemento_email = document.createElement("li");
        elemento_email.innerText = "E-mail: " + pessoa.email;

        
        ul.appendChild(elemento_categoria);
        ul.appendChild(elemento_funcao);
        ul.appendChild(elemento_email);

        contatos.appendChild(elemento_nome);
        contatos.appendChild(ul);
    });
}

const calcularNumeroDeParticipantes = () => {
    const acao = localStorage.getItem("acao");
    return acao.equipe.length;
}

// Por acao?
const calcularNumeroDeParticipantesDiscentes = () => {
    const acao = localStorage.getItem("acao");
    return acao.equipe.filter(pessoa => pessoa.categoria === "Discente").length;
}

const calcularNumeroDeParticipantesDocentes = () => {
    const acao = localStorage.getItem("acao");
    return acao.equipe.filter(pessoa => pessoa.categoria === "Docente").length;
}

// Só discente recebe bolsa? É
const calcularNumeroDeBolsas = () => {
    return calcularNumeroDeParticipantesDiscentes();
}

const calcularValorTotalPago = () => {
    // TODO Verificar esse preco. É algo fixo? É por acao? Se for por acao, acrescentar no json, ou solicitar agr(prompt)
    const precoBolsa = 0;
    return calcularNumeroDeBolsas() * precoBolsa;
}

// Inscrição de quem? Da equipe? Se for de um participante, n precisa disso aqui, somente mexer nas vagas
const realizarInscricao = () => {
    const nome = prompt("Digite seu nome:");
    const email = prompt("Digite seu email:");

    atualizarInscricoes();

    alert(nome + ", sua inscrição com o e-mail " + email + " foi realizada com sucesso!");
}

// o que isso faz? Deve ser para mexer no DOM...
const atualizarInscricoes = () => {
    var vagas_disponiveis = parseInt(localStorage.getItem("vagas_disponiveis"));

    // acao.vagas.quantidade_ocupada++;

    vagas_disponiveis = vagas_disponiveis - 1;

    localStorage.setItem("vagas_disponiveis", vagas_disponiveis);

    document.getElementById("vagas_disponiveis").innerText = "Vagas Disponíveis: " + vagas_disponiveis;

    if (vagas_disponiveis <= 0)
    {
        document.getElementById("div_btn").innerText = '';   
    }


}