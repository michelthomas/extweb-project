import Projeto from "./projeto_model";

const projeto = new Projeto("Projeto 1", "Area principaldde nada",
 "acao de tipo 4", "lorem ipslum aoooo", "ufal", "pessoas", "vafas", "equipe competente", "src de imagens");

const projetoArr = [projeto];

const getProjetos = () => projetoArr;

module.export({getProjetos});

