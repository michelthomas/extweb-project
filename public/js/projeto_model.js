export default class Project {
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