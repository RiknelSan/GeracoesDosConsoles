todositens(geracoesDeConsoles);
// esta string ira mostrar todo o conteudo assim que a pagina for aberta
function todositens(consolearray) {
  let section = document.getElementById("historia");

  // Inicializa a variável 'pesquisa' para armazenar o HTML dos resultados.
  let pesquisa = "";

  for (let consoleinfo of consolearray) {
    // Para cada geração, cria um novo elemento HTML para exibir as informações.

    // Juntar o HTML da geração atual à variável 'pesquisa'.
    pesquisa += `
        <div class="item-resultado">      
            <h3>${consoleinfo.geracao}</h3>
            <p class="info.console2">
                <b>Destaque:</b> ${consoleinfo.destaques} <br />
                <b>Consoles:</b> ${consolename(consoleinfo.consoles)}. <br />
                <b>Jogos populares:</b> ${consoleinfo.jogosPopulares}. <br />
                <b>Empresas:</b> ${consolebrand(
                  consoleinfo.consoles
                )}. <br />    
            </p>   
            <img        
                class=${consoleinfo.style}
                src=${consoleinfo.imglink}
                alt=${consoleinfo.imgalt}        
            />
            <p>
                ${consoleinfo.sobreimg}
            </p>
            <iframe class="ytvideo" width="560" height="315" src="${
              consoleinfo.linkyt
            }" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>       
        </div>
    `;
  }

  section.innerHTML = pesquisa;
  //pega o objeto com ID de section e altera o HTML dentro dele
}
function botaopesquisa() {
  let busca = document.getElementById("busca").value;
  console.log(busca);
  busca = busca.toLowerCase();
  //=> é um funçao de código rapido - para executar o código em uma string
  //Este código filtra o array geracoesDeConsoles e retorna um novo array com apenas os elementos que possuem tags ou gerações que correspondem à string de busca
  let resultados = geracoesDeConsoles.filter(
    (item) =>
      item.tags.toLowerCase().includes(busca) ||
      item.geracao.toLowerCase().includes(busca)
  );
  if (resultados.length) {
    todositens(resultados);
  } else {
    let pesquisa = document.getElementById("historia");
    pesquisa.innerHTML =
      "<p>Não conseguimos encontrar sua pesquisa, tente procurar pelo nome do console</p>";
  }
}
//funçao para listar os consoles
function consolename(array) {
  let output = "";
  for (let item of array) {
    output += `${item.nome}, `;
  }
  return output.slice(0, -2); //remove os ultimos 2 caracteres (virgula e espaço)
  output += "";
  return output;
}
//funçao para listar as fabricantes
function consolebrand(array) {
  let output = "";
  for (let item of array) {
    output += `${item.fabricante}, `;
  }
  return output.slice(0, -2); //remove os ultimos 2 caracteres (virgula e espaço)
  output += "";
  return output;
}
