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

async function fetchNuevaGraficaData(query) {
    const response = await fetch(query);
    const data = await response.json();
    return data;
}

function createNuevaGrafica(data) {
    const ctx = document.getElementById('nuevaGrafica').getContext('2d');
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

    nuevaGraficaChart = new Chart(ctx, {
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
                }/*,
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
                }*/
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
    const ctx = document.getElementById('GraficaDeModelo').getContext('2d');
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

    nuevaGraficaChart = new Chart(ctx, {
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
                }/*,
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
                }*/
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
    //fetchCarrosData('http://localhost:2233/carros?').then(data => createChart(data));
    
    // Llama a fetchNuevaGraficaData con parámetros específicos para cargar la nueva gráfica
    fetchNuevaGraficaData('http://localhost:2233/carros?').then(data => createNuevaGrafica(data));
    
    //
    fetchNuevaGraficaData('http://localhost:2233/carros?modelo=Yaris').then(data => GraficaModelo(data));
});

