let carrosChart;

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
    const labels = data.map(car => car.Modelo);
    const consumoCiudad = data.map(car => car.Consumo_Ciudad_L100km);
    const consumoCarretera = data.map(car => car.Consumo_Carretera_L100km);
    const consumoMixto = data.map(car => car.Consumo_Mixto_L100km);
    const promedioCiudad = data.map(car => car.Promedio_kmL_Ciudad);
    const promedioCarretera = data.map(car => car.Promedio_kmL_Carretera);
    const promedioMixto = data.map(car => car.Promedio_kmL_Mixto);
    
    var colorFondo = false;

    var Grosor_Linea = 3;

    var ClorBord_ConsumoCiudad = '#FF0000';

    var ClorBord_ConsumoCarretera = '#008000';

    var ClorBord_ConsumoMixto = '#0000FF';

    var ClorBord_ConsumoCiudad_Promedio = '#FFFF00';

    var ClorBord_ConsumoCarretera_Promedio = '#DF8D00';

    var ClorBord_ConsumoMixto_Promedio = '#800080';

    carrosChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Consumo Ciudad (L/100km)',
                    data: consumoCiudad,
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    borderColor: ClorBord_ConsumoCiudad,
                    borderWidth: Grosor_Linea,
                    fill:colorFondo
                },
                {
                    label: 'Consumo Carretera (L/100km)',
                    data: consumoCarretera,
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    borderColor: ClorBord_ConsumoCarretera,
                    borderWidth: Grosor_Linea,
                    fill:colorFondo
                },
                {
                    label: 'Consumo Mixto (L/100km)',
                    data: consumoMixto,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: ClorBord_ConsumoMixto,
                    borderWidth: Grosor_Linea,
                    fill:colorFondo
                },
                {
                    label: 'Promedio Ciudad (km/L)',
                    data: promedioCiudad,
                    backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    borderColor: ClorBord_ConsumoCiudad_Promedio,
                    borderWidth: Grosor_Linea,
                    fill:colorFondo
                },
                {
                    label: 'Promedio Carretera (km/L)',
                    data: promedioCarretera,
                    backgroundColor: 'rgba(255, 159, 64, 0.2)',
                    borderColor: ClorBord_ConsumoCarretera_Promedio,
                    borderWidth: Grosor_Linea,
                    fill:colorFondo
                },
                {
                    label: 'Promedio Mixto (km/L)',
                    data: promedioMixto,
                    backgroundColor: 'rgba(201, 203, 207, 0.2)',
                    borderColor: ClorBord_ConsumoMixto_Promedio,
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

// Obtener datos iniciales y crear un gráfico
//fetchCarrosData('http://localhost:2233/carros?marcaId=1&ano=2011').then(data => createChart(data));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let nuevaGraficaChart;

function GraficaGeneral(data) {
    const ctx = document.getElementById('nuevaGrafica').getContext('2d');
    //const labels = data.map(car => car.Modelo);
    const consumoCiudad = data.map(car => car.Consumo_Ciudad_L100km);
    const consumoCarretera = data.map(car => car.Consumo_Carretera_L100km);
    const consumoMixto = data.map(car => car.Consumo_Mixto_L100km);
    const promedioCiudad = data.map(car => car.Promedio_kmL_Ciudad);
    const promedioCarretera = data.map(car => car.Promedio_kmL_Carretera);
    const promedioMixto = data.map(car => car.Promedio_kmL_Mixto);
    
    // Crear etiquetas que incluyan el año y el modelo
    const labels = [];
    for (let i = 0; i < data.length; i++) {
        labels.push(`${data[i].Año} - ${data[i].Modelo}`);
    }

    var colorFondo = true;

    var Grosor_Linea = 3;

    var ColorBord_ConsumoCiudad = '#FF0000';
    var ColorBord_ConsumoCarretera = '#008000';
    var ColorBord_ConsumoMixto = '#0000FF';

    var ColorFond_ConsumoCiudad = '255, 0, 0 , 0.2';
    var ColorFond_ConsumoCarretera = '0, 128, 0, 0.3';
    var ColorFond_ConsumoMixto = '0, 0, 255, 0.4';


    nuevaGraficaChart = new Chart(ctx, {
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

function GraficaModelo(data) {
    const ctx = document.getElementById('GraficaDeModeloYaris').getContext('2d');
    const label = data.map(car => car.Modelo);
    const consumoCiudad = data.map(car => car.Consumo_Ciudad_L100km);
    const consumoCarretera = data.map(car => car.Consumo_Carretera_L100km);
    const consumoMixto = data.map(car => car.Consumo_Mixto_L100km);

    // Crear etiquetas que incluyan el año y el modelo
    const labels = [];
    for (let i = 0; i < data.length; i++) {
        labels.push(`${data[i].Año} - ${data[i].Modelo}`);
    }

    var colorFondo = true;

    var Grosor_Linea = 3;

    var ColorBord_ConsumoCiudad = '#FF0000';
    var ColorBord_ConsumoCarretera = '#008000';
    var ColorBord_ConsumoMixto = '#0000FF';

    var ColorFond_ConsumoCiudad = '255, 0, 0 , 0.2';
    var ColorFond_ConsumoCarretera = '0, 128, 0, 0.3';
    var ColorFond_ConsumoMixto = '0, 0, 255, 0.4';


    nuevaGraficaChart = new Chart(ctx, {
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

    const anos1 = data.map(car => car.Año);
    const anos2 = data.map(car => car.Año);
    const minAno = Math.min(...anos1);
    const maxAno = Math.max(...anos2);
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


document.addEventListener('DOMContentLoaded', () => {
    // Llama a updateData con parámetros predeterminados para cargar la gráfica existente
    fetchCarrosData('http://localhost:2233/carros?').then(data => createChart(data));
    
    // Llama a fetchNuevaGraficaData con parámetros específicos para cargar la nueva gráfica
    fetchCarrosData('http://localhost:2233/carros?').then(data => GraficaGeneral(data));
    
    // LLama a GraficaModelo PAra Poder Graficar el Yaris en este caso
    fetchCarrosData('http://localhost:2233/carros?modelo=Yaris').then(data => GraficaModelo(data));

    // LLama a Grafica Emiciones para Graficar Las Emiciones del Yaris en este caso.
    fetchCarrosData('http://localhost:2233/carros?modelo=Yaris').then(data => GraficaEmisionModelo(data));
});

