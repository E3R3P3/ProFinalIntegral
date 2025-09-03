/* 
============================================
SECCIÓN 1: VARIABLES GLOBALES Y CONSTANTES
============================================
*/

// Colores para gráficos (bordes y fondos)
let carrosChart; // Instancia del gráfico principal
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

/* 
============================================
SECCIÓN 2: FUNCIONES DE DATOS (FETCH)
============================================
*/

// Obtiene datos de vehículos desde la API
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
        console.log('Error al obtener los datos de los carros.');
    }
}

/* 
============================================
SECCIÓN 3: GRÁFICO PRINCIPAL (FILTRADO)
============================================
*/

// Actualiza datos según filtros y crea gráfico
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

    // Construye query con filtros aplicados
    if (marcaId) query += `marcaId=${marcaId}&`;
    if (ano) query += `ano=${ano}&`;
    if (modelo) query += `modelo=${modelo}&`;
    if (generacion) query += `generacion=${generacion}&`;
    if (tipoMotor) query += `tipo_motor=${tipoMotor}&`;
    if (consumoCiudad) query += `consumo_ciudad=${consumoCiudad}&`;
    if (consumoCarretera) query += `consumo_carretera=${consumoCarretera}&`;
    if (consumoMixto) query += `consumo_mixto=${consumoMixto}&`;
    
    query = query.slice(0, -1); // Elimina último '&'

    // Obtiene datos y renderiza gráfico
    fetchCarrosData(query).then(data => {
        if (carrosChart) carrosChart.destroy();
        createChart(data);
    });
}

// Crea gráfico principal con datos
function createChart(data) {
    const ctx = document.getElementById('carrosChart').getContext('2d');
    const consumoCiudad = data.map(car => car.Consumo_Ciudad_L100km);
    const consumoCarretera = data.map(car => car.Consumo_Carretera_L100km);
    const consumoMixto = data.map(car => car.Consumo_Mixto_L100km);
    const promedioCiudad = data.map(car => car.Promedio_kmL_Ciudad);
    const promedioCarretera = data.map(car => car.Promedio_kmL_Carretera);
    const promedioMixto = data.map(car => car.Promedio_kmL_Mixto);

    // Genera etiquetas usando año y modelo
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
                }
                /* Los promedios están comentados por ahora:
                ,{
                    label: 'Promedio Ciudad (km/L)',
                    data: promedioCiudad,
                    backgroundColor: 'rgba('+ColorFond_ConsumoCiudad_Promedio+')',
                    borderColor: ColorBord_ConsumoCiudad_Promedio,
                    borderWidth: Grosor_Linea,
                    fill:colorFondo
                },
                ...otros datasets de promedios...
                */
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

/* 
============================================
SECCIÓN 4: GRÁFICOS ESPECÍFICOS
============================================
*/

let nuevaGraficaChart; // Instancia para gráficos secundarios

// Gráfico para modelo específico (ej: Yaris)
function GraficaModelo(data, Carro) {
    const ctx = document.getElementById(Carro).getContext('2d');
    const consumoCiudad = data.map(car => car.Consumo_Ciudad_L100km);
    const consumoCarretera = data.map(car => car.Consumo_Carretera_L100km);
    const consumoMixto = data.map(car => car.Consumo_Mixto_L100km);

    // Etiquetas con año y modelo
    const labels = [];
    for (let i = 0; i < data.length; i++) {
        labels.push(`${data[i].Año} - ${data[i].Modelo}`);
    }

    var tipe = 'line';
    if(Carro == 'nuevaGrafica') tipe = 'bar'; // Cambia tipo para gráfica especial

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

// Gráfico de emisiones de CO2 para un modelo
function GraficaEmisionModelo(data) {
    const ctx = document.getElementById('GraficaEmisionModelo').getContext('2d');
    const consumoCiudad = data.map(car => car.Consumo_Ciudad_L100km);
    const consumoCarretera = data.map(car => car.Consumo_Carretera_L100km);
    const consumoMixto = data.map(car => car.Consumo_Mixto_L100km);

    // Etiquetas con año y modelo
    const labels = [];
    for (let i = 0; i < data.length; i++) {
        labels.push(`${data[i].Año} - ${data[i].Modelo}`);
    }

    // Factores de emisión (gasolina)
    const factorEmisionGasolina = 2310; // g/L
    const emisionesCiudad = consumoCiudad.map(consumo => (consumo * factorEmisionGasolina) / 100);
    const emisionesCarretera = consumoCarretera.map(consumo => (consumo * factorEmisionGasolina) / 100);
    const emisionesMixto = consumoMixto.map(consumo => (consumo * factorEmisionGasolina) / 100);

    var colorFondo = true;
    var Grosor_Linea = 3;

    // Colores para emisiones
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

// Carga gráficos iniciales al abrir la página
function CargarPaginaInicio(){
     fetchCarrosData('http://localhost:2233/carros?').then(data => GraficaModelo(data, 'nuevaGrafica'));
     fetchCarrosData('http://localhost:2233/carros?modelo=Yaris').then(data => GraficaModelo(data, 'GraficaDeModeloYaris'));
     fetchCarrosData('http://localhost:2233/carros?modelo=Yaris').then(data => GraficaEmisionModelo(data));
}

/* 
============================================
SECCIÓN 5: CÁLCULO DE CONSUMO Y EMISIONES
============================================
*/

// Variables para acumular consumos
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

// Calcula consumos y emisiones basado en formulario
function calcularConsumoYEmisiones() {
    const factorCO2 = 2.31; // g CO2 por gramo de combustible

    // Obtiene valores del formulario
    const BtnGuardar = document.getElementById('guardar');
    const tanqueInicialCiudad = parseFloat(document.getElementById('tanqueInicialCiudad').value);
    const tanqueFinalCiudad = parseFloat(document.getElementById('tanqueFinalCiudad').value);
    const tanqueInicialAutopista = parseFloat(document.getElementById('tanqueInicialAutopista').value);
    const tanqueFinalAutopista = parseFloat(document.getElementById('tanqueFinalAutopista').value);
    const tanqueInicialMixto = parseFloat(document.getElementById('tanqueInicialMixto').value);
    const tanqueFinalMixto = parseFloat(document.getElementById('tanqueFinalMixto').value);

    // Cálculos de consumo
    const consumoCiudad = tanqueInicialCiudad - tanqueFinalCiudad;
    const consumoAutopista = tanqueInicialAutopista - tanqueFinalAutopista;
    const consumoMixto = tanqueInicialMixto - tanqueFinalMixto;

    // Almacena consumos
    consumosCiudad.push(consumoCiudad);
    consumosAutopista.push(consumoAutopista);
    consumosMixto.push(consumoMixto);
    rondas++;
    document.getElementById('ronda').innerHTML = rondas.toString();
    
    // Actualiza acumulados
    acumuladoCiudad += consumoCiudad;
    acumuladoAutopista += consumoAutopista;
    acumuladoMixto += consumoMixto;

    // Manejo por rondas
    if (rondas < 5) {
        // Muestra resultados parciales
        BtnGuardar.disabled = true;
        document.getElementById('consumoCiudad').innerText = (acumuladoCiudad / rondas).toFixed(2);
        document.getElementById('emisionesCiudad').innerText = ((acumuladoCiudad / rondas) * factorCO2 * 10).toFixed(2);
        document.getElementById('consumoAutopista').innerText = (acumuladoAutopista / rondas).toFixed(2);
        document.getElementById('emisionesAutopista').innerText = ((acumuladoAutopista / rondas) * factorCO2 * 10).toFixed(2);
        document.getElementById('consumoMixto').innerText = (acumuladoMixto / rondas).toFixed(2);
        document.getElementById('emisionesMixto').innerText = ((acumuladoMixto / rondas) * factorCO2 * 10).toFixed(2);
    } else {
        // Muestra promedios finales
        document.getElementById('promediosHeader').style.display = 'block';
        document.getElementById('PromediosDatos').style.display = 'block';
        BtnGuardar.disabled = false;
        
        // Calcula promedios
        _promedioCiudad = acumuladoCiudad / rondas;
        _promedioAutopista = acumuladoAutopista / rondas;
        _promedioMixto = acumuladoMixto / rondas;
        
        // Calcula emisiones
        const emisionesCiudad = _promedioCiudad * factorCO2 * 10;
        const emisionesAutopista = _promedioAutopista * factorCO2 * 10;
        const emisionesMixto = _promedioMixto * factorCO2 * 10;

        // Actualiza DOM
        document.getElementById('PromedioCiudad').innerText = _promedioCiudad.toFixed(2);
        document.getElementById('PromedioEmisionesCiudad').innerText = emisionesCiudad.toFixed(2);
        document.getElementById('PromedioAutopista').innerText = _promedioAutopista.toFixed(2);
        document.getElementById('PromedioEmisionesAutopista').innerText = emisionesAutopista.toFixed(2);
        document.getElementById('PromedioMixto').innerText = _promedioMixto.toFixed(2);
        document.getElementById('PromedioEmisionesMixto').innerText = emisionesMixto.toFixed(2);
    }
}

// Reinicia el formulario de consumos
function nuevaRonda() {
    document.getElementById('co2Form').reset();
    rondas = 0;
}

// Envía datos al servidor
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
    }
});