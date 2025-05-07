document.addEventListener('DOMContentLoaded', function () {
    // Elementos do DOM
    const desvendarBtn = document.getElementById('desvendar-btn');
    const retornarBtn = document.getElementById('retornar-btn');
    const palavrasInput = document.getElementById('palavras-input');
    const resultadoDiv = document.getElementById('resultado');

    // Função para encontrar a Palavra do Poder
    function encontrarPalavraDoPoder(palavras) {
        // Primeiro pegamos a primeira letra de cada palavra em ordem normal
        const primeirasLetras = palavras.map(palavra => palavra.charAt(0)).join('');

        // Depois pegamos a última letra de cada palavra em ordem inversa
        const ultimasLetras = palavras.map(palavra => palavra.slice(-1)).reverse().join('');

        // Combinamos os resultados
        return primeirasLetras + ultimasLetras;
    }

    // Função para limpar o resultado
    function limparResultado() {
        resultadoDiv.textContent = '';
    }

    // Evento para o botão DESVENDAR
    desvendarBtn.addEventListener('click', function () {
        // Obter as palavras do input e limpar espaços extras
        const palavras = palavrasInput.value.split(',').map(p => p.trim());

        // Verificar se há palavras válidas
        if (palavras.length === 0 || palavras[0] === '') {
            resultadoDiv.textContent = 'Insira palavras mágicas válidas!';
            return;
        }

        // Encontrar a Palavra do Poder
        const palavraDoPoder = encontrarPalavraDoPoder(palavras);

        // Exibir o resultado
        resultadoDiv.textContent = palavraDoPoder;
    });

    // Evento para o botão RETORNAR
    retornarBtn.addEventListener('click', function () {
        // Limpar o input e o resultado
        palavrasInput.value = 'magia,dragão,elfo';
        limparResultado();
    });

    // Efeito de foco no input ao carregar a página
    palavrasInput.focus();
});