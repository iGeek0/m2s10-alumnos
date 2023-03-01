console.log("Entro a mi archivo index.js");


function saludar(nombre, callback) {
    const nombreMayusculas = nombre.toUpperCase()
    console.log("Entro a saludar...");
    // Llamar al callback que 👀 es una funcion
    // pasar otro par de mil cosas
    setTimeout(()=>{
        console.log(`Hola, Bienvenido ${nombreMayusculas}`);
        // pudieran pasar mil cosas...
        callback(nombreMayusculas);
        // console.log("Si ves esto, ya pasaron 3 sec!");
    }, 5000);

}

// Llamar a la funcion saludar.....
// callback = funcion
// funciones anonimas = funciones sin nombre

/*
Puedes usar la funcion saluidar simple o mandarle como segun parametro un callback con una accion que quieras realzar posterior al saludo.....
*/
function despedida (nombre) {
    console.log(`Nos vemos la proxima ${nombre}!`);
};


saludar("Jesus", despedida);


function obtenerDatosPromesa() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            // paso consulta a base de datos....
            const datos = [
                { nombre: 'Narnia', tipo: 'Fantasia' },
                { nombre: 'Harry Potter', tipo: 'Fantasia' },
                { nombre: 'El señor de los anillos', tipo: 'Fantasia' },
                { nombre: 'El principito', tipo: 'Fantasia' },
            ];
            // como le agrego un nuevo registro a datos....
            // datos.push({ nombre: 'El hobbit', tipo: 'Fantasia' });
            if (datos.length >= 5) {
                resolve(datos);
            } else {
                reject("No se pudo cargar la informacion porque hay menos de 5 registro en la DB.");
            }
        }, 3000);
    });
}
// ------------------------------------------------------------------
obtenerDatosPromesa()
.then((result)=>{
    // pintarlo en DOM
    // pasarle un .map()
    console.log(result, "datos success");
})
.catch((result)=>{
    // pintarlo en DOM
    // pasarle un .map..
    console.log(result, "datos error");
})
.finally(()=>{
    // pintarlo en DOM
    // pasarle un .map..
    console.log("Este mensaje sale si o si!!!");
})


