const { connectToDatabase } = require('./dbconnection');

async function ejecutarConsultaS() {
    let pool = await connectToDatabase();
    if (pool) {
        try {
            let result = await pool.request()
                .query('SELECT * FROM Toyota_Yaris');
            
            console.log("Resultados de la consulta:", result.recordset);
        } catch (err) {
            console.error("Error al ejecutar la consulta:", err);
        } finally {
            pool.close();
        }
    }
  }
  
  async function ejecutarConsultass() {
    for (let i = 0; i < 4; i++) {
        let pool = await connectToDatabase();
        n = i;
        if (pool) {
            try {
                // Reemplaza 'tu_tabla' con el nombre de tu tabla específica
                let result = await pool.request()
                    .query('SELECT * FROM Carros where MarcaID = '+n+'');
    
                console.log("Resultados de la consulta 2:", result.recordset);
            } catch (err) {
                console.error("Error al ejecutar la consulta:", err);
            } finally {
                pool.close(); // Cerrar la conexión
            }
        }
    }
  }
  
  module.exports = {ejecutarConsultaS};
  module.exports = {ejecutarConsultass};
  //ejecutarConsultaS();
  //ejecutarConsultass();