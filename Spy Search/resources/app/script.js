function contarNomes() {
    var nomes = {};
    var entrada = document.getElementById("inputNames").value.split("\n");

    entrada.forEach(function(nome) {
        nome = nome.trim();
        if (nome) { 
            if (nomes.hasOwnProperty(nome)) {
                nomes[nome]++;
            } else {
                nomes[nome] = 1;
            }
        }
    });

    
    var nomesArray = [];
    for (var nome in nomes) {
        if (nomes.hasOwnProperty(nome)) {
            nomesArray.push([nome, nomes[nome]]);
        }
    }

   
    nomesArray.sort(function(a, b) {
       
        if (a[1] === b[1]) {
            return a[0].localeCompare(b[0]);
        }
        
        return b[1] - a[1];
    });

    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; 

    nomesArray.forEach(function(item) {
        var nome = item[0];
        var contagem = item[1];
        var nomeContagem = document.createElement("p");
        nomeContagem.textContent = nome + " (" + contagem + ")";
        resultadoDiv.appendChild(nomeContagem);
    });
}
