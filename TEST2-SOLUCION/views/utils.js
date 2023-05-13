export function llenarFormulario(FORMU, datos) {
    console.log(datos);
    if(datos !== undefined) {
        console.table(datos);
        for(let key in datos) {
            const campo = FORMU.elements[key];
            if(campo) {
                campo.value = datos[key];
            }
        }
    } else {
        alert("No hay registros en la base de datos.")
    }
};
