import pool from "../db/config.js";

//#region -- Funciones generales.

// Filtrar Datos.
async function filtrarDatos(datos, NRO_CONT) {
  console.log('<------------ DATA en FILTRARDATOS!!__-------> ', datos);
  try {
    let newData = {};
    if (datos.inmuebles) {
      for (const inmueble of datos.inmuebles) {
        newData = {
          NRO_INM: inmueble.nroInmueble,
          NRO_CONT: NRO_CONT,
          INM_RECURSO: inmueble.recursoId,
        };
        const result = await pool.query(`INSERT INTO inmuebles SET ?`, newData);
        console.log("RESULT Inmueble---> ", result);
      }
    }
    if (datos.rodados) {
      console.log("info ", datos.rodados);
      for (const rodado of datos.rodados) {
        newData = {
          NRO_CONT: NRO_CONT,
          ROD_RECURSO: rodado.recursoIdRod,
          PATENTE: rodado.nroPatente
        };
        const result = await pool.query(`INSERT INTO rodados SET ?`, newData);
        console.log("RESULT Rodados---> ", result);
      }
    }
    if (datos.comercios) {
      for (const comercio of datos.comercios) {
        newData = {
          NRO_COM: comercio.nroComercio,
          NRO_CONT: NRO_CONT
        };
        const result = await pool.query(`INSERT INTO comercios SET ?`, newData);
        console.log("RESULT Comercios---> ", result);
      }
    }
    if (datos.cementerio) {
      for (const cementerio of datos.cementerio) {
        newData = {
          NRO_CUENTA: cementerio.nroCuenta,
          NRO_CONT: NRO_CONT
        };
        const result = await pool.query(
          `INSERT INTO cementerio SET ?`,
          newData
        );
        console.log("RESULT Cementerio---> ", result);
      }
    }
  } catch (error) {
    console.log("ERROR en Filtrar Datos ---> ", error);
  }

  //console.log('DATOS-FILTRADOS:---> ', datosFiltrados);
  //return datosFiltrados;
};

// Buscar contribuyente.
const buscarContribuyente = async (req, res) => {
  try {
    const [data] = await pool.query(`SELECT * FROM contribuyentes WHERE CUIL = ? `, req);
    if (data.length === 0) {
      console.log("Contribuyente no encontrado");
      return null;
    } else {
      return data[0];
      //res.send(data) //mostrar
    }
  } catch (error) {
    console.log("ERROR al buscar NRO_CONTRIB----> ", error);
  }
};
//#endregion

//#region  - Listar contribuyentes - OK falta chequear y mostrar en front
const listar = async (req, res) => {
  try {
    const query = `SELECT * FROM contribuyentes`;
    const [data] = await pool.query(query);
    res.json(data);
  } catch (error) {
    console.log("ERROr----> ", error);
  }
};
//#endregion

//#region - Cargar contribuyente. - OK
const cargar = async (req, res) => {
  try {
    const data = req.body;

    const contribuyente = {
      cuil: data.CUIL,
      nombre: data.NOMBRE,
      apellido: data.APELLIDO,
      direccion: data.DIRECCION,
      email: data.EMAIL,
      telefono: data.TELEFONO,
      provincia: data.PROVINCIA,
      localidad: data.LOCALIDAD,
      cp: data.CP,
    };
    let response = await buscarContribuyente(contribuyente.cuil);
   //console.log("RESPONSE EN CARGAR----> ", response);

    if (response) {
      console.log("El numero de contribuyente ya existe");
      res.send(response);
    }
    else {
      console.log("<--- Creando Contribuyente --->");
      const query = `INSERT INTO contribuyentes SET ?`;
      const result = await pool.query(query, contribuyente);
      if (result.affectedRows === 0) {
        res.status(401).json({
          estado: "error",
          mensaje: "No se pudo crear el nuevo contribuyente.",
        });
      } else {
        const datos = await buscarContribuyente(contribuyente.cuil);
        
        console.log("DATO_____--> ",datos);   ///  OK
        //console.log("HASTA ACA VOY BIEN!!!----> PASO A filtrarDatos ");   ///  OK
        const responseFiltData = await filtrarDatos(data, datos.NRO_CONTRIB);
        console.log("DATO_CONTRIB-------> ",datos.NRO_CONTRIB);   ///  OK
        // console.log("<--- RESPONSE FILTRAR DATOS --->", responseFiltData.code);
      }
    }
    res
      .status(201)
      .json({ estado: "success", mensaje: "Contribuyente cargado." });
  } catch (error) {
    console.log("ERROR en CARGAR----> ", error);
  }
};
//#endregion

//#region - Editar contribuyente. - OK falta devolver los datos al front para editarlos y luego guardarlos.
const editar = async (req, res) => {
  const cuil = req.params.id;

  const query = `SELECT * FROM contribuyentes WHERE cuil = ${cuil}`;
  console.log("QUERY----> ", query);
  try {
    const [result] = await pool.query(query, cuil);
    if (result[0].length === 0) {
      console.log("Contribuyente no encontrado");
    } else {
      const { cuil } = result[0]; //hay que desestructurar el array. pasar los datos para editarlos.
      console.log("RESULt-----> ", cuil);
      res.send(result); //mostrar
    }
  } catch (error) {
    console.log("ERROr----> ", error);
  }
};
//#endregion

//#region  - Buscar Cuil - usando el DNI - OK 
const buscarCuil = async (req, res) => {
  try {
    const { dni } = req.params;
    console.log('DNI:------------> ', dni)
    
    const [response] = await pool.query(
      `SELECT * FROM contribuyentes WHERE CUIL LIKE '%' ? '%'`,
      dni
    );
    // const [response] = await pool.query(
    //   `SELECT * FROM contribuyentes WHERE CUIL = ?`,
    //   cuil
    // );
    if (response.length > 0) {
      console.log("Resultado de la consulta:", response[0]);
      res.json(response[0]);
    } else {
      res.status(404).json({ message: "Contribuyente no encontrado" });
      console.log("No se encontraron resultados");
    }
  } catch (error) {
    console.log("ERROR en funcion Buscar Cuil --> ", error);
  }
};
//#endregion

export { listar, cargar, editar, buscarContribuyente, buscarCuil };
