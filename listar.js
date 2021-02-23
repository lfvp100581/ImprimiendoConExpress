let cursos = [{
        nombreC: 'NodeJS',
        id: 1,
        valor: 50000,
        duracion: 22
    },
    {
        nombreC: 'TypeScript',
        id: 2,
        valor: 80000,
        duracion: 35
    },
    {
        nombreC: 'Angular 11',
        id: 3,
        valor: 100000,
        duracion: 100
    }
]

let imprimirCursos = () => {
    let contador = 1;
    for (let index = 0; index < cursos.length; index++) {
        contador = contador + 1;
        setTimeout(() => {
            console.log(`
                Nombre del curso: ${cursos[index].nombreC}
                ID del curso: ${cursos[index].id}
                Precio del curso elegido: ${cursos[index].valor}
                Duracion del curso: ${cursos[index].duracion}
            `);
        }, 2000 * contador);
    }
}

imprimirCursos();


module.exports = {
    cursos
}


/* LUIS FERNANDO VELASQUEZ PORRAS -DISEÑO Y DESARROLLO */