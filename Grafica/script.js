let carrosChart;
var ColorBord_ConsumoCiudad = '#FF0000';
var ColorBord_ConsumoCarretera = '#008000';
var ColorBord_ConsumoMixto = '#0000FF';

var ColorFond_ConsumoCiudad = '255, 0, 0 , 0.2';
var ColorFond_ConsumoCarretera = '0, 128, 0, 0.3';
var ColorFond_ConsumoMixto = '0, 0, 255, 0.4';

var ColorBord_ConsumoCiudad_Promedio = '#FFFF00';
var ColorBord_ConsumoCarretera_Promedio = '#DF8D00';
var ColorBord_ConsumoMixto_Promedio = '#800080';

var ColorFond_ConsumoCiudad_Promedio = '255, 255, 0, 0.1';
var ColorFond_ConsumoCarretera_Promedio = '223, 141, 0, 0.2';
var ColorFond_ConsumoMixto_Promedio = '128, 0, 128, 0.3';

async function fetchCarrosData(query) {
    try {
        const response = await fetch(query);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error: ', error);
        alert('Error al obtener los datos de los carros.');
    }
}

function updateData() {

    const marcaId = document.getElementById('marcaId').value;
    const ano = document.getElementById('ano').value;
    const modelo = document.getElementById('modelo').value;
    const generacion = document.getElementById('generacion').value;
    const tipoMotor = document.getElementById('tipoMotor').value;
    const consumoCiudad = document.getElementById('consumoCiudad').value;
    const consumoCarretera = document.getElementById('consumoCarretera').value;
    const consumoMixto = document.getElementById('consumoMixto').value;
    
    let query = `http://localhost:2233/carros?`;

    if (marcaId) query += `marcaId=${marcaId}&`;
    if (ano) query += `ano=${ano}&`;
    if (modelo) query += `modelo=${modelo}&`;
    if (generacion) query += `generacion=${generacion}&`;
    if (tipoMotor) query += `tipo_motor=${tipoMotor}&`;
    if (consumoCiudad) query += `consumo_ciudad=${consumoCiudad}&`;
    if (consumoCarretera) query += `consumo_carretera=${consumoCarretera}&`;
    if (consumoMixto) query += `consumo_mixto=${consumoMixto}&`;
    
    // Eliminar el último carácter '&'
    query = query.slice(0, -1);

    fetchCarrosData(query).then(data => {
        if (carrosChart) {
            carrosChart.destroy();
        }
        createChart(data);
    });
}

function createChart(data) {
    const ctx = document.getElementById('carrosChart').getContext('2d');
    const consumoCiudad = data.map(car => car.Consumo_Ciudad_L100km);
    const consumoCarretera = data.map(car => car.Consumo_Carretera_L100km);
    const consumoMixto = data.map(car => car.Consumo_Mixto_L100km);
    const promedioCiudad = data.map(car => car.Promedio_kmL_Ciudad);
    const promedioCarretera = data.map(car => car.Promedio_kmL_Carretera);
    const promedioMixto = data.map(car => car.Promedio_kmL_Mixto);

    const labels = [];
    for (let i = 0; i < data.length; i++) {
        labels.push(`${data[i].Año} - ${data[i].Modelo}`);
    }
    
    var colorFondo = true;

    var Grosor_Linea = 3;

    carrosChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Consumo Ciudad (L/100km)',
                    data: consumoCiudad,
                    backgroundColor: 'rgba('+ColorFond_ConsumoCiudad+')',
                    borderColor: ColorBord_ConsumoCiudad,
                    borderWidth: Grosor_Linea,
                    fill:colorFondo
                },
                {
                    label: 'Consumo Carretera (L/100km)',
                    data: consumoCarretera,
                    backgroundColor: 'rgba('+ColorFond_ConsumoCarretera+')',
                    borderColor: ColorBord_ConsumoCarretera,
                    borderWidth: Grosor_Linea,
                    fill:colorFondo
                },
                {
                    label: 'Consumo Mixto (L/100km)',
                    data: consumoMixto,
                    backgroundColor: 'rgba('+ColorFond_ConsumoMixto+')',
                    borderColor: ColorBord_ConsumoMixto,
                    borderWidth: Grosor_Linea,
                    fill:colorFondo
                },
                {
                    label: 'Promedio Ciudad (km/L)',
                    data: promedioCiudad,
                    backgroundColor: 'rgba('+ColorFond_ConsumoCiudad_Promedio+')',
                    borderColor: ColorBord_ConsumoCiudad_Promedio,
                    borderWidth: Grosor_Linea,
                    fill:colorFondo
                },
                {
                    label: 'Promedio Carretera (km/L)',
                    data: promedioCarretera,
                    backgroundColor: 'rgba('+ColorFond_ConsumoCarretera_Promedio+')',
                    borderColor: ColorBord_ConsumoCarretera_Promedio,
                    borderWidth: Grosor_Linea,
                    fill:colorFondo
                },
                {
                    label: 'Promedio Mixto (km/L)',
                    data: promedioMixto,
                    backgroundColor: 'rgba('+ColorFond_ConsumoMixto_Promedio+')',
                    borderColor: ColorBord_ConsumoMixto_Promedio,
                    borderWidth: Grosor_Linea,
                    fill:colorFondo
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let nuevaGraficaChart;


function GraficaModelo(data, Carro) {
    const ctx = document.getElementById(Carro).getContext('2d');
    const label = data.map(car => car.Modelo);
    const consumoCiudad = data.map(car => car.Consumo_Ciudad_L100km);
    const consumoCarretera = data.map(car => car.Consumo_Carretera_L100km);
    const consumoMixto = data.map(car => car.Consumo_Mixto_L100km);

    // Crear etiquetas que incluyan el año y el modelo
    const labels = [];
    for (let i = 0; i < data.length; i++) {
        labels.push(`${data[i].Año} - ${data[i].Modelo}`);
    }

    var tipe = 'line';
    if(Carro == 'nuevaGrafica'){
        tipe = 'bar';
    }

    var colorFondo = true;

    var Grosor_Linea = 3;

    nuevaGraficaChart = new Chart(ctx, {
        type: tipe,
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Consumo Ciudad (L/100km)',
                    data: consumoCiudad,
                    backgroundColor: 'rgba('+ColorFond_ConsumoCiudad+')',
                    borderColor: ColorBord_ConsumoCiudad,
                    borderWidth: Grosor_Linea,
                    fill:colorFondo 
                },
                {
                    label: 'Consumo Carretera (L/100km)',
                    data: consumoCarretera,
                    backgroundColor: 'rgba('+ColorFond_ConsumoCarretera+')',
                    borderColor: ColorBord_ConsumoCarretera,
                    borderWidth: Grosor_Linea,
                    fill:colorFondo
                },
                {
                    label: 'Consumo Mixto (L/100km)',
                    data: consumoMixto,
                    backgroundColor: 'rgba('+ColorFond_ConsumoMixto+')',
                    borderColor: ColorBord_ConsumoMixto,
                    borderWidth: Grosor_Linea,
                    fill:colorFondo
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function GraficaEmisionModelo(data) {
    const ctx = document.getElementById('GraficaEmisionModelo').getContext('2d');
    const label = data.map(car => car.Modelo);
    const consumoCiudad = data.map(car => car.Consumo_Ciudad_L100km);
    const consumoCarretera = data.map(car => car.Consumo_Carretera_L100km);
    const consumoMixto = data.map(car => car.Consumo_Mixto_L100km);

    // Crear etiquetas que incluyan el año y el modelo
    const labels = [];
    for (let i = 0; i < data.length; i++) {
        labels.push(`${data[i].Año} - ${data[i].Modelo}`);
    }

    const factorEmisionGasolina = 2310; // g/L
    const factorEmisionDiesel = 2680; // g/L

    // Suponiendo que todos los vehículos usan gasolina. Cambia esto si es necesario.
    const emisionesCiudad = consumoCiudad.map(consumo => (consumo * factorEmisionGasolina) / 100);
    const emisionesCarretera = consumoCarretera.map(consumo => (consumo * factorEmisionGasolina) / 100);
    const emisionesMixto = consumoMixto.map(consumo => (consumo * factorEmisionGasolina) / 100);

    var colorFondo = true;

    var Grosor_Linea = 3;

    var ColorBord_EmisionCiudad = '#873600';
    var ColorBord_EmisionCarretera = '#BA4A00';
    var ColorBord_EmisionMixto = '#DC7633';

    var ColorFond_EmisionCiudad = '135, 54, 0, 0.2';
    var ColorFond_EmisionCarretera = '186, 74, 0, 0.3';
    var ColorFond_EmisionMixto = '220, 118, 51, 0.4';


    nuevaGraficaChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Emisión CO2 Ciudad (g/km)',
                    data: emisionesCiudad,
                    backgroundColor: 'rgba('+ColorFond_EmisionCiudad+')',
                    borderColor: ColorBord_EmisionCiudad,
                    borderWidth: Grosor_Linea,
                    fill: colorFondo 
                },
                {
                    label: 'Emisión CO2 Carretera (g/km)',
                    data: emisionesCarretera,
                    backgroundColor: 'rgba('+ColorFond_EmisionCarretera+')',
                    borderColor: ColorBord_EmisionCarretera,
                    borderWidth: Grosor_Linea,
                    fill: colorFondo
                },
                {
                    label: 'Emisión CO2 Mixto (g/km)',
                    data: emisionesMixto,
                    backgroundColor: 'rgba('+ColorFond_EmisionMixto+')',
                    borderColor: ColorBord_EmisionMixto,
                    borderWidth: Grosor_Linea,
                    fill: colorFondo
                }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function CargarPaginaInicio(){
     // Llama a fetchNuevaGraficaData con parámetros específicos para cargar la nueva gráfica
     fetchCarrosData('http://localhost:2233/carros?').then(data => GraficaModelo(data, 'nuevaGrafica'));
    
     // LLama a GraficaModelo PAra Poder Graficar el Yaris en este caso
     fetchCarrosData('http://localhost:2233/carros?modelo=Yaris').then(data => GraficaModelo(data, 'GraficaDeModeloYaris'));
 
     // LLama a Grafica Emiciones para Graficar Las Emiciones del Yaris en este caso.
     fetchCarrosData('http://localhost:2233/carros?modelo=Yaris').then(data => GraficaEmisionModelo(data));
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let acumuladoCiudad = 0;
let acumuladoAutopista = 0;
let acumuladoMixto = 0;
let _promedioCiudad = 0;
let _promedioAutopista = 0;
let _promedioMixto = 0;
let rondas = 0;
const consumosCiudad = [];
const consumosAutopista = [];
const consumosMixto = [];

function calcularConsumoYEmisiones() {
    const factorCO2 = 2.31; // g CO2 por cada gramo de combustible quemado

    // Obtener los datos del formulario
    const BtnGuardar = document.getElementById('guardar');
    const tanqueInicialCiudad = parseFloat(document.getElementById('tanqueInicialCiudad').value);
    const tanqueFinalCiudad = parseFloat(document.getElementById('tanqueFinalCiudad').value);
    const tanqueInicialAutopista = parseFloat(document.getElementById('tanqueInicialAutopista').value);
    const tanqueFinalAutopista = parseFloat(document.getElementById('tanqueFinalAutopista').value);
    const tanqueInicialMixto = parseFloat(document.getElementById('tanqueInicialMixto').value);
    const tanqueFinalMixto = parseFloat(document.getElementById('tanqueFinalMixto').value);

    // Calcular el consumo medio para cada escenario
    const consumoCiudad = tanqueInicialCiudad - tanqueFinalCiudad;
    const consumoAutopista = tanqueInicialAutopista - tanqueFinalAutopista;
    const consumoMixto = tanqueInicialMixto - tanqueFinalMixto;

    // Guardar los consumos en los arrays
    consumosCiudad.push(consumoCiudad);
    consumosAutopista.push(consumoAutopista);
    consumosMixto.push(consumoMixto);
    rondas++;
    document.getElementById('ronda').innerHTML = rondas.toString();
    // Actualizar los acumulados
    acumuladoCiudad += consumoCiudad;
    acumuladoAutopista += consumoAutopista;
    acumuladoMixto += consumoMixto;

    if (rondas < 5) {
        // Mostrar resultados acumulados para rondas 1 a 4
        BtnGuardar.disabled = true;
        document.getElementById('consumoCiudad').innerText = (acumuladoCiudad / rondas).toFixed(2);
        document.getElementById('emisionesCiudad').innerText = ((acumuladoCiudad / rondas) * factorCO2 * 10).toFixed(2);
        document.getElementById('consumoAutopista').innerText = (acumuladoAutopista / rondas).toFixed(2);
        document.getElementById('emisionesAutopista').innerText = ((acumuladoAutopista / rondas) * factorCO2 * 10).toFixed(2);
        document.getElementById('consumoMixto').innerText = (acumuladoMixto / rondas).toFixed(2);
        document.getElementById('emisionesMixto').innerText = ((acumuladoMixto / rondas) * factorCO2 * 10).toFixed(2);
    } else {
        // Mostrar sección de promedios a partir de la ronda 5
        document.getElementById('promediosHeader').style.display = 'block';
        document.getElementById('PromediosDatos').style.display = 'block';
        BtnGuardar.disabled = false;
        // Calcular los promedios
        const promedioCiudad = acumuladoCiudad / rondas;
        const promedioAutopista = acumuladoAutopista / rondas;
        const promedioMixto = acumuladoMixto / rondas;

        _promedioCiudad = acumuladoCiudad / rondas;
        _promedioAutopista = acumuladoAutopista / rondas;
        _promedioMixto = acumuladoMixto / rondas;
        // Calcular las emisiones de CO2 (en gramos por kilómetro) para cada escenario
        const emisionesCiudad = promedioCiudad * factorCO2 * 10;
        const emisionesAutopista = promedioAutopista * factorCO2 * 10;
        const emisionesMixto = promedioMixto * factorCO2 * 10;

        // Mostrar los resultados promedios
        document.getElementById('PromedioCiudad').innerText = promedioCiudad.toFixed(2);
        document.getElementById('PromedioEmisionesCiudad').innerText = emisionesCiudad.toFixed(2);
        document.getElementById('PromedioAutopista').innerText = promedioAutopista.toFixed(2);
        document.getElementById('PromedioEmisionesAutopista').innerText = emisionesAutopista.toFixed(2);
        document.getElementById('PromedioMixto').innerText = promedioMixto.toFixed(2);
        document.getElementById('PromedioEmisionesMixto').innerText = emisionesMixto.toFixed(2);
    }
}

function nuevaRonda() {
    document.getElementById('co2Form').reset();
    rondas = 0;
}

document.getElementById('co2Form').addEventListener('submit', async function(event) {
    event.preventDefault();

    const data = {
        MarcaID: parseInt(document.getElementById('MarcaID').value),
        Año: parseInt(document.getElementById('ano').value),
        Generacion: document.getElementById('Generacion').value,
        Tipo_Motor: document.getElementById('Tipo_Motor').value,
        Consumo_Ciudad_L100km: acumuladoCiudad,
        Consumo_Carretera_L100km: acumuladoAutopista,
        Consumo_Mixto_L100km: acumuladoMixto,
        Promedio_kmL_Ciudad: _promedioCiudad,
        Promedio_kmL_Carretera: _promedioAutopista,
        Promedio_kmL_Mixto: _promedioMixto,
        Modelo: document.getElementById('Modelo').value,
    };

    try {
        const response = await fetch('http://localhost:2003/carros', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.text();
        window.alert('Datos Guardados.');
        nuevaRonda();
        document.getElementById('resultadoInsertar').textContent = result;
    } catch (error) {
        console.error('Error al insertar el carro:', error);
        window.alert('Error al gurdar los datos.');
    }
});

