function atualizarContador() {
    const contador = document.getElementById('contador');
    const agora = new Date();
    const inicio = new Date('2024-11-15T00:00:00');
    const diferenca = agora - inicio;

    if (diferenca > 0) {
        const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

        contador.textContent = `Já fazem  ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
    } else {
        contador.textContent = "Aguardando o início de 15/11/2024.";
    }
}

function mostrarContadorOutraData() {
    const contadorOutraData = document.getElementById('contadorOutraData');
    const botaoOutraData = document.getElementById('botaoOutraData');

    botaoOutraData.style.display = 'none';
    contadorOutraData.style.display = 'block';

    setInterval(() => {
        const agora = new Date();
        const inicioOutraData = new Date('2024-07-29T00:00:00');
        const diferenca = agora - inicioOutraData;

        if (diferenca > 0) {
            const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
            const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
            const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

            contadorOutraData.textContent = `Dias que nos conhecemos ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos.`;
        } else {
            contadorOutraData.textContent = "Aguardando o início de 29/07/2024.";
        }
    }, 1000);
}

function criarCorações() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(atualizarContador, 1000);
setInterval(criarCorações, 300);