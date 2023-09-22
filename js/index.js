// Función para transformar la temperatura de Celsius a Fahrenheit
const convertTemperature = () => {

    // Obtenemos la temperatura en grados Celsius ingresada por el usuario
    const celsius = parseFloat(document.getElementById('celsius').value);

    // Comprobamos que hemos realizado el parseFloat() correctamente
    console.log(typeof(celsius))

    // Verificar si la entrada es válida
    if (isNaN(celsius)) {
        alert('Por favor, ingresa una temperatura válida.');
        return;
    }

    /** Calcular la temperatura en grados Fahrenheit:
     Multiplica la temperatura en grados Celsius (celsius) por 9/5.
     Luego, suma 32 al resultado obtenido en el paso anterior.
     El resultado, almacenado en la variable fahrenheit, representa la misma temperatura en grados Fahrenheit que la temperatura original en grados Celsius. */
    const fahrenheit = (celsius * 9/5) + 32;

    // Mostrar el resultado en la página
    document.getElementById('fahrenheit').textContent = fahrenheit.toFixed(2);

}
