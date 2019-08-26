// Responsável por carregar ação do json à partir do id enviado da outra página via Cookie
const carregarAcao = () => {
    const acao_id = Number.parseInt(localStorage.getItem("id"));

    // Busca no json a ação correspondente ao "id" da session
    const acao = acaoArr.find((acao) => acao.id_acao === acao_id);
    
    localStorage.setItem("acao", JSON.stringify(acao));

    appendAcao(acao);
}

// Responsável por inserir elementos com as informações da ação de forma dinâmica no html
const appendAcao = (acao) => {
    
    // Transforma dados do json em constantes
    const {id_acao, titulo, area_principal, tipo_acao, local,
        espaco_realizacao, resumo, periodo_inscricao, vagas,
        programacao, publico_alvo, equipe, imagens} = acao;         

    // Adiciona a constante titulo dentro da tag html de id "titulo"
    document.getElementById("titulo").innerText = titulo;

    // Inserindo imagens e slide no carousel
    const carousel = document.getElementById("carrossel");        // captura a div "carrossel"
    const slide_list = document.getElementById("slideList");     // captura a div "slideList"

    imagens.forEach((imagem, i) => {
       const carr = document.createElement("div");          //cria um elemento tipo "div"
       const slide = document.createElement("li");

       // Definindo atributos para carr e slide
       carr.classList.add("carousel-item");
       slide.setAttribute("data-target", "carouselExampleIndicators");
       slide.setAttribute("data-slide-to", i);
       
       // Se for o primeiro elemento, define com a classe "active"
       if (i === 0) {
           carr.classList.add("active");
           slide.classList.add("active");
       }

       // Criação e definição de atributos do elemento img "link"
       const link = document.createElement("img");
       link.setAttribute("src", imagem.link);
       link.setAttribute("height", 500);
       link.setAttribute("width", 1000);
       link.setAttribute("class", "d-block w-100");

       // Insere o elemento img "link" dentro do elemento div "carr"
       carr.appendChild(link);

       // Insere o elemento div "carr" dentro do elemento div "carousel"
       carousel.appendChild(carr);

       // Insere o elemento div "slide" dentro do elemento div "slide_list"
       slide_list.appendChild(slide); 

    });

    //bloco das informações gerais do projeto
    const informacoes_gerais = document.getElementById("informacoes_gerais");
    const tipo = document.createElement("li");
    const numero_participantes = document.createElement("li");
    const numero_discentes = document.createElement("li");
    const numero_docentes = document.createElement("li");
    const valor_bolsas = document.createElement("li");

    const n_participantes = calcularNumeroDeParticipantes();
    const n_discentes = calcularNumeroDeParticipantesDiscentes();
    const n_docentes = calcularNumeroDeParticipantesDocentes();
    const v_bolsas = calcularValorTotalPago();

    tipo.innerText = "Tipo: " + tipo_acao;
    numero_participantes.innerText = "Número de Participantes: " + n_participantes;
    numero_discentes.innerText = "Número de discentes: " + n_discentes;
    numero_docentes.innerText = "Número de docentes: " + n_docentes;
    valor_bolsas.innerText = "Valor Total das bolsas: R$" + v_bolsas + ",00";

    informacoes_gerais.appendChild(tipo);
    informacoes_gerais.appendChild(numero_participantes);
    informacoes_gerais.appendChild(numero_discentes);
    informacoes_gerais.appendChild(numero_docentes);
    informacoes_gerais.appendChild(valor_bolsas); 

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
    
    const vagas_disponiveis =  vagas.quantidade_total - vagas.quantidade_ocupada;

    document.getElementById("vagas_disponiveis").innerText = "Vagas Disponíveis: " + vagas_disponiveis;

    // Se há vagas disponíveis, cria e insere no html o botão para realizar inscrição
    if (vagas_disponiveis > 0) {

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

// Calcula o número total de participantes da ação
const calcularNumeroDeParticipantes = () => {
    const acao = JSON.parse(localStorage.getItem("acao"));

    return acao.equipe.length;
}

// Calcula o número total de participantes discentes da ação
const calcularNumeroDeParticipantesDiscentes = () => {
    const acao = JSON.parse(localStorage.getItem("acao"));
    return acao.equipe.filter(pessoa => pessoa.categoria === "Discente").length;
}

// Calcula o número total de participantes docentes da ação
const calcularNumeroDeParticipantesDocentes = () => {
    const acao = JSON.parse(localStorage.getItem("acao"));
    return acao.equipe.filter(pessoa => pessoa.categoria === "Docente").length;
}

// Calcula o valor total das bolsas pagas aos discentes
const calcularValorTotalPago = () => {
    const precoBolsa = 400;
    return calcularNumeroDeParticipantesDiscentes() * precoBolsa;
}

// Realiza a inscrição do usuário
const realizarInscricao = () => {
    
    const acao = JSON.parse(localStorage.getItem("acao"));

    if (acao.vagas.quantidade_ocupada < acao.vagas.quantidade_total) {

        const nome = prompt("Digite seu nome:");
        const email = prompt("Digite seu email:");

        acao.vagas.quantidade_ocupada++;

        localStorage.setItem("acao", JSON.stringify(acao));

        atualizarElementoInscricoes();

        alert(nome + ", sua inscrição com o e-mail " + email + " foi realizada com sucesso!");

    } else {
        
        alert("Vagas esgotadas!");
    }
}

// Atualiza o elemento das vagas disponíveis
const atualizarElementoInscricoes = () => {

    const acao = JSON.parse(localStorage.getItem("acao"));

    const vagas_disponiveis = acao.vagas.quantidade_total - acao.vagas.quantidade_ocupada;

    document.getElementById("vagas_disponiveis").innerText = "Vagas Disponíveis: " + vagas_disponiveis;
}