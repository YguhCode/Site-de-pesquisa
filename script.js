//Criando função de busca
async function BuscarImagem(){
    const termo = document.getElementById("search").value.trim(); //Buscar elemento, pegar usuario que digitou e remove espaço extras.
    const galeria = document.getElementById("galeria");
    const mensagem = document.getElementById("mensagem");

        galeria.innerHTML="";
        mensagem.innerHTML="";
        // Apaga registros anteriores

    if (termo==="") {
        mensagem.textContent = "Digite algo para pesquisar";
        return;
        // Se o campo estiver vázio a seguinte mensagem é enviada e a função é encerrada

    
    }

    const chave = "3No0PFC6EqgX1Mn2Vbn432jhdnuoan7XJGU3d6j0Lkk";

    try {
        const url = `https://api.unsplash.com/search/photos?query=${termo}&per_page=30&client_id=${chave}`;
        
        const resposta = await fetch(url); // faz a requisição à API
        const dados = await resposta.json(); // converte a resposta para JSON (Formato texto para legível)
    
        if (dados.results.length === 0) {
            mensagem.textContent = "Nenhuma imagem encontrada";
            return;
        }

        //Exibir imagem
        dados.results.forEach(img => {
            const imagem = document.createElement("img");
            imagem.src = img.urls.small;
            imagem.alt = img.alt_description || "Imagem";
            galeria.appendChild(imagem);
        });

    }catch (erro){
        mensagem.textContent ="Erro ao buscar";
        console.error(erro);
        
    }
      
        
}