fetch('/jsonLista')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendProjectsData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });

            //set attributes from json to html with creating html elements
            appendProjectsData = (data) => {
                data.forEach(projeto => {
                    
                    const { titulo, descricao, imagem} = projeto;

                    var lista = document.getElementById("lista");

                    var card = document.createElement("div");
                    var imagem = document.createElement("img");
                    var cardBody = document.createElement("div");
                    var cardTitle = document.createElement("h5");
                    var cardText = document.createElement("p");


                   
                });
            }

// <div class="col-lg-10 row-lg-6" id="lista" style="margin: 0 auto; float: none; margin-bottom: 10px;"></div>

// <div class="card mb-3">
//   <img src="https://i2.wp.com/emotioncard.com.br/wp-content/uploads/2017/07/mensagens-mensagens-de-bom-dia-4.jpg?fit=640%2C640&ssl=1" class="card-img-top" alt="imgs" height="400" width="100">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//
//   </div>
// </div>
