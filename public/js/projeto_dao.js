const projetosJson = [
    {
       "id_acao":1,
       "area_principal":"Saúde",
       "tipo_acao":"Curso",
       "local":{
          "municipio":"Maceió",
          "estado":"Alagoas"
       },
       "espaco_realizacao":"Escola Estadual Geraldo Melo dos Santos",
       "tipo_curso":"Mini Curso",
       "modalidade":"Presencial",
       "titulo":"Política de Sangue e Hemoderivados: desmistificando mitos e tabus",
       "resumo":"O projeto de Extensão intitulado Doação de Sangue e Medula óssea: formando agentes multiplicadores, através da coordenação da Profa.Dra.Josimeire de Omena Leite, promove o minicurso intitulado Política de Sangue e Hemoderivados: desmistificando mitos e tabus, com palestras socioeducativas direcionadas aos estudantes da Escola Estadual Geraldo de Melo Santos, especificamente do EJA (educação de jovens e adultos). As palestras serão proferidas pelas alunas-colaboradoras, estudantes do curso de serviço social - UFAL, com enfoque na Política de Sangue e Hemoderivados e na doação voluntária de sangue e medula óssea. Serão socializadas informações referentes à Política Nacional de Sangue e Hemoderivados, visando desmistificar os mitos e tabus em torno da doação, apresentando para o público a referida política que é operacionalizada pelo serviço social. As ministrantes também conscientizarão sobre os significados de todo o processo de captação de doadores, esclarecendo sobre os pré-requisitos para a doação de sangue, os impedimentos temporários e os impedimentos definitivos incentivando, com isso, a doação voluntária de sangue e medula óssea e promovendo a formação de agentes multiplicadores",
       "periodo_inscricao":{
          "data_inicial":"01/07/2019",
          "data_final":"16/07/2019"
       },
       "vagas":{
          "quantidade_total":700,
          "quantidade_ocupada":500
       },
       "programacao":[
          {
             "data":"16/07/2019",
             "horario_inicial":"18:00",
             "horario_final":"22:00",
             "atividades":"Palestras acerca da política nacional de sangue e hemoderivados e a atuação do serviço social"
          }
       ],
       "publico_alvo":[
          "Estudantes",
          "Comunidade em geral"
       ],
       "carga_horaria":4,
       "link_inscricao":"google.com",
       "equipe":[
          {
             "nome":"Fernanda Santos Bezerra",
             "categoria":"Discente",
             "funcao":"Palestrante",
             "email":"feehsantos802@gmail.com"
          },
          {
             "nome":"Sthefany Raffaela Palagani",
             "categoria":"Discente",
             "funcao":"Palestrante",
             "email":"tete_raffaela@hotmail.com"
          },
          {
             "nome":"Josimeire de Omena Leite",
             "categoria":"Docente",
             "funcao":"Coordenadora",
             "email":"meireomena@hotmail.com"
          }
       ],
       "imagens":[
          {
             "link":"/img/3.jpg"
          },
          {
             "link":"http://www.criatives.com.br/wp-content/uploads/2018/01/26755627_1356382461136968_1608361180_n.png"
          },
          {
             "link":"https://www.criatives.com.br/wp-content/uploads/2018/01/26696925_1356381117803769_272771002_n.png"
          },
          {
             "link":"https://img.buzzfeed.com/buzzfeed-static/static/2017-08/9/17/campaign_images/buzzfeed-prod-fastlane-03/13-provas-de-que-nao-ha-ninguem-mais-solteiro-que-2-21057-1502313426-0_dblbig.jpg"
          }
       ]
    },
 ];

const projetoArr = JSON.parse(JSON.stringify(projetosJson));

/*const projetoArr = [projeto];

const getProjetos = () => projetoArr;

module.export({getProjetos});*/

