const appendProjeto = (projeto) => {
    const {id_acao, titulo, area_principal, tipo_acao, local, espaco_realizacao,
        tipo_curso, modalidade, resumo, periodo_inscricao, vagas, programacao, publico_alvo,
        carga_horaria, equipe, imagens} = projeto;

    // TODO id_acao ???
    console.log(JSON.stringify(projeto));
    document.getElementById("titulo").innerText = titulo;

    document.getElementById("area_principal").innerText = area_principal;
    document.getElementById("tipo_acao").innerText = tipo_acao;

    /**
    * document.getElementById("local").innerText = local;
    * 
    * ou
    * 
    * document.getElementById("local_municipio").innerText = local.municipio;
    * document.getElementById("local_estado").innerText = local.estado;
    */
    document.getElementById("local_municipio").innerText = local.municipio;
    document.getElementById("local_estado").innerText = local.estado;

    document.getElementById("espaco_realizacao").innerText = espaco_realizacao;
    document.getElementById("tipo_curso").innerText = tipo_curso;
    document.getElementById("modalidade").innerText = modalidade;
    document.getElementById("resumo").innerText = resumo;

    /**
    * document.getElementById("periodo_inscricao").innerText = periodo_inscricao;
    * 
    * ou
    * 
    * document.getElementById("periodo_inscricao_data_inicial").innerText = periodo_inscricao.data_inicial;
    * document.getElementById("periodo_inscricao_data_final").innerText = periodo_inscricao.data_final;
    */
    document.getElementById("periodo_inscricao_data_inicial").innerText = periodo_inscricao.data_inicial;
    document.getElementById("periodo_inscricao_data_final").innerText = periodo_inscricao.data_final;

    /**
    * document.getElementById("vagas").innerText = vagas;
    * 
    * ou
    * 
    * document.getElementById("vagas_quantidade_total").innerText = vagas;
    * document.getElementById("vagas_quantidade_ocupada").innerText = vagas;
    */
    document.getElementById("vagas_quantidade_total").innerText = vagas;
    document.getElementById("vagas_quantidade_ocupada").innerText = vagas;

    /**
    * document.getElementById("programacao").innerText = programacao;
    * 
    * ou
    * 
    * document.getElementById("programacao_data").innerText = programacao.data;
    * document.getElementById("programacao_horario_inicial").innerText = programacao.horario_inicial;
    * document.getElementById("programacao_horario_final").innerText = programacao.horario_final;
    * document.getElementById("programacao_atividades").innerText = programacao.atividades;
    */
    document.getElementById("programacao_data").innerText = programacao.data;
    document.getElementById("programacao_horario_inicial").innerText = programacao.horario_inicial;
    document.getElementById("programacao_horario_final").innerText = programacao.horario_final;
    document.getElementById("programacao_atividades").innerText = programacao.atividades;

    publico_alvo.map((publico) => {
    // TODO criar elemento e dar append (Qual elemento?)
    document.getElementById("publico_alvo").innerText = publico;
    });


    document.getElementById("carga_horaria").innerText = carga_horaria;

    equipe.map((pessoa) => {

    //TODO appendar na div da equipe, as divs das pessoas     
    // TODO Mudar os elementos aqui, depois do front quais serão
    const elemento_nome = document.createElement("h2");
    elemento_nome.innerText = pessoa.nome;

    const elemento_categoria = document.createElement("h2");
    elemento_categoria.innerText = pessoa.categoria;

    const elemento_funcao = document.createElement("h2");
    elemento_funcao.innerText = pessoa.funcao;

    const elemento_email = document.createElement("h2");
    elemento_email.innerText = pessoa.email;

    const div_pessoa = document.createElement("div");

    div_pessoa.appendChild(elemento_nome);
    div_pessoa.appendChild(elemento_categoria);
    div_pessoa.appendChild(elemento_funcao);
    div_pessoa.appendChild(elemento_email);

    document.getElementById("equipe").appendChild(div_pessoa);
});


//TODO carregar imagens

/*//set images on carousel
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

});*/


publicoAlvo.forEach(publico => {
   console.log(publico);
});
}

//set attributes from json to html with creating html elements
const appendProjectsData = (data) => {
    data.forEach(projeto => appendProjeto(projeto));
}

const carregarProjeto = (id) => {
    const projeto = projetoArr.find((projeto) => projeto.id_acao === id);
    appendProjeto(projeto);
}

const carregarTodosProjetos = () => {
    appendProjectsData(projetoArr);
}

// TODO Filtrar (?)

const calcularNumeroTotalDeProjetos = () => (projetoArr.length)

const calcularNumeroDeParticipantes = (id) => {
    const projeto = projetoArr.find((projeto) => projeto.id_acao === id);
    return projeto.equipe.length;
}

// Por projeto?
const calcularNumeroDeParticipantesDiscentes = (id) => {
    const projeto = projetoArr.find(projeto => projeto.id_acao === id);
    return projeto.equipe.filter(pessoa => pessoa.categoria === "Discente").length;
}

const calcularNumeroDeParticipantesDocentes = (id) => {
    const projeto = projetoArr.find(projeto => projeto.id_acao === id);
    return projeto.equipe.filter(pessoa => pessoa.categoria === "Docente").length;
}

// Só discente recebe bolsa?
const calcularNumeroDeBolsas = (id) => {
    return calcularNumeroDeParticipantesDiscentes(id);
}

const calcularValorTotalPago = (id) => {
    // TODO Verificar esse preco. É algo fixo? É por projeto? Se for por projeto, acrescentar no json, ou solicitar agr(prompt)
    const precoBolsa = 0;
    return calcularNumeroDeBolsas(id) * precoBolsa;
}

// Inscrição de quem? Da equipe? Se for de um participante, n precisa disso aqui, somente mexer nas vagas
const realizarInscricao = (id) => {
    const nome = prompt("Digite seu nome:");
    const categoria = prompt("Digite sua categoria:");
    const funcao = prompt("Digite sua funcao:");
    const email = prompt("Digite seu email:");

    const projeto = projetoArr.find(projeto => projeto.id_acao === id);

    projeto.equipe.push({nome, categoria, funcao, email});

}

// o que isso faz? Deve ser para mexer no DOM...
const atualizarInscricoes = (id) => {
    const projeto = projetoArr.find(projeto => projeto.id_acao === id);

    projeto.vagas.quantidade_total--;

    appendProjeto(projeto);
}