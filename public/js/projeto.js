class Projeto {
    constructor(titulo, areaPrincipal, tipoDeAcao, resumo, local, publicoAlvo, vagas, equipe, imagens) {
        this._titulo = titulo;
        this._areaPrincipal = areaPrincipal;
        this._tipoDeAcao = tipoDeAcao;
        this._resumo = resumo;
        this._local = local;
        this._publicoAlvo = publicoAlvo;
        this._vagas = vagas;
        this._equipe = equipe;
        this._imagens = imagens;
    }

    get titulo() {
        return this._titulo;
    }
    set titulo(novoTitulo) {
        this._titulo = novoTitulo;
    }
    
    get areaPrincipal() {
        return this._areaPrincipal;
    }
    set areaPrincipal(novoAreaPrincipal) {
        this._areaPrincipal = novoAreaPrincipal;
    }
    
    get tipoDeAcao() {
        return this._tipoDeAcao;
    }
    set tipoDeAcao(novoTipoDeAcao) {
        this._tipoDeAcao = novoTipoDeAcao;
    }

    get resumo() {
        return this._resumo;
    }
    set resumo(novoResumo) {
        this._resumo = novoResumo;
    }
    
    get local() {
        return this._local;
    }
    set local(novoLocal) {
        this._local = novoLocal;
    }
    
    get publicoAlvo() {
        return this._publicoAlvo;
    }
    set publicoAlvo(novoPublicoAlvo) {
        this._publicoAlvo = novoPublicoAlvo;
    }
    
    get vagas() {
        return this._vagas;
    }
    set vagas(novoVagas) {
        this._vagas = novoVagas;
    }
    
    get equipe() {
        return this._equipe;
    }
    set equipe(novoEquipe) {
        this._equipe = novoEquipe;
    }
    
    get imagens() {
        return this._imagens;
    }
    set imagens(novoImagens) {
        this._imagens = novoImagens;
    }

};

const projeto = new Projeto("Projeto 1", "Area principaldde nada",
 "acao de tipo 4", "lorem ipslum aoooo", "ufal", ["pessoas", "selvagens"], "vafas", "equipe competente", "src de imagens");

const projetoArr = [projeto];

const getProjetos = () => projetoArr;

const getProjeto = () => {
    appendProjectsData(getProjetos());
}

//set attributes from json to html with creating html elements
appendProjectsData = (data) => {
    data.forEach(projeto => {

        const { titulo, areaPrincipal, tipoAcao, tipo_curso, modalidade, resumo, 
            local, publicoAlvo, vagas, equipe, imagens} = projeto;

        document.getElementById("titulo").innerText = titulo;

        document.getElementById("txtDescricao").innerText = resumo;

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

        // const b = document.createElement('b');
        // const p1 = document.createElement('p');
        // const p2 = document.createElement('p');
        // const p3 = document.createElement('p');
        //
        // b.textContent = phone.name;
        // p2.textContent = "Número: " + phone.display_number;
        // p3.textContent = "Local: " + phone.location;
        //
        // lista.appendChild(item);
        // p1.appendChild(b);
        // item.appendChild(p1);
        // item.appendChild(p2);
        // item.appendChild(p3);

        // document.getElementById("tipo_curso").innerText = tipo_curso;
        // document.getElementById("modalidade").innerText = modalidade;
        // document.getElementById("resumo").innerText = resumo;
    });
}