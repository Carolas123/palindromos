function esPalindromo(palabra) {
    let palabraLimpia = palabra.toLowerCase().replace(/\s+/g, '');

    function verificar(izquierda, derecha) {
        if (izquierda >= derecha) return true;
        if (palabraLimpia[izquierda] !== palabraLimpia[derecha]) return false;
        return verificar(izquierda + 1, derecha - 1);
    }

    return verificar(0, palabraLimpia.length - 1);
}

function verificarPalindromo() {
    let palabra = document.getElementById('palabra').value;
    let resultado = document.getElementById('resultado');

    if (esPalindromo(palabra)) {
        resultado.textContent = `"${palabra}" es un palíndromo.`;
        resultado.classList.remove('text-danger');
        resultado.classList.add('text-success');
    } else {
        resultado.textContent = `"${palabra}" no es un palíndromo.`;
        resultado.classList.remove('text-success');
        resultado.classList.add('text-danger');
    }
}
