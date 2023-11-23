/* Esta fue la primera pre- entrega, ignorar
function sacarPromedio(nota1,nota2,nota3,nota4){
    let calcular = prompt("¿Desea calcular su promedio? (y/n)");
    while(calcular == "y"){
        const nombre = prompt("Muy bien. Por favor, ingrese su nombre");

        const nota1 = parseInt(prompt(nombre + ", ingrese la primera nota."));
        const nota2 = parseInt(prompt("Ingrese la segunda nota"));
        const nota3 = parseInt(prompt("Ingrese la tercera nota"));
        const nota4 = parseInt(prompt("Ingrese la cuarta nota"));

        const resultado = (nota1 + nota2 + nota3 + nota4) / 4;
        const promedio = nombre + ", tu promedio es de " + resultado;
        alert(promedio);

        calcular = prompt("¿Desea calcular su promedio? (y/n)");
    }
}
*/

function Juego(nombre, genero, plataforma, desarrolladora, año, precio){
    this.nombre = nombre;
    this.genero = genero
    this.plataforma = plataforma;
    this.desarrolladora = desarrolladora;
    this.año = año;
    this.precio = precio;
}

function menuJuegos(){
    const juegos = [];

    juegos.push(new Juego("Keep Talking and Nobody Explodes", "Puzzle", "PC", "Steel Crate Games", 2015, 2830))
    juegos.push(new Juego("Terraria", "Sandbox", "PC", "Re-Logic", 2011, 2050))
    juegos.push(new Juego("Portal", "Puzzle", "PC", "Valve", 2007, 2050))
    juegos.push(new Juego("Stardew Valley", "Simulación", "PC", "ConcernedApe", 2016, 5300))
    juegos.push(new Juego("GTA San Andreas", "Acción", "PC", "Rockstar", 2005, 2500))
    juegos.push(new Juego("Grand Theft Auto V", "Acción", "PC", "Rockstar", 2015, 5200))

    function pagar(precio, nombre){
        const cuotas = prompt("En cuántas cuotas desea hacer su compra? (1, 3, 6 ó 12 sin interés) \n *Ingrese sólo el número.")
        const confirmar = prompt(cuotas + " cuota/s de $" + precio / cuotas + ", ¿desea confirmar su compra? (y/n)")
        if(confirmar == "y"){
            alert("Enhorabuena, compraste " + nombre + " por " + cuotas + " cuotas de $" + precio / cuotas)
        }
    }

    let empezar = prompt("¿Desea ver el listado de juegos disponibles? (y/n)")

    while(empezar == "y"){
        const opcion = prompt("Están disponibles los siguientes juegos, ingrese un número para ver más información. \n 1. Keep Talking and Nobody Explodes \n 2. Terraria \n 3. Portal \n 4. Stardew Valley \n 5. GTA San Andreas \n 6. GTA V \n 7. Salir")
        switch (opcion){
            case "1":
                const respuesta1 = prompt(juegos[0].nombre + "\n Género: " + juegos[0].genero + "\n Plataforma: " + juegos[0].plataforma + "\n Desarrollado por: " + juegos[0].desarrolladora + "\n Año de publicación: " + juegos[0].año + "\n Precio: $" + juegos[0].precio + "\n ¿Desea comprar este juego? (y/n)")
                if(respuesta1 == "y"){
                    pagar(juegos[0].precio, juegos[0].nombre)
                }
                break
            case "2":
                const respuesta2 = prompt(juegos[1].nombre + "\n Género: " + juegos[1].genero + "\n Plataforma: " + juegos[1].plataforma + "\n Desarrollado por: " + juegos[1].desarrolladora + "\n Año de publicación: " + juegos[1].año + "\n Precio: $" + juegos[1].precio + "\n ¿Desea comprar este juego? (y/n)")
                if(respuesta2 == "y"){
                    pagar(juegos[1].precio, juegos[1].nombre)
                }
                break
            case "3":
                const respuesta3 = prompt(juegos[2].nombre + "\n Género: " + juegos[2].genero + "\n Plataforma: " + juegos[2].plataforma + "\n Desarrollado por: " + juegos[2].desarrolladora + "\n Año de publicación: " + juegos[2].año + "\n Precio: $" + juegos[2].precio + "\n ¿Desea comprar este juego? (y/n)")
                if(respuesta3 == "y"){
                    pagar(juegos[2].precio, juegos[2].nombre)
                }
                break
            case "4":
                const respuesta4 = prompt(juegos[3].nombre + "\n Género: " + juegos[3].genero + "\n Plataforma: " + juegos[3].plataforma + "\n Desarrollado por: " + juegos[3].desarrolladora + "\n Año de publicación: " + juegos[3].año + "\n Precio: $" + juegos[3].precio + "\n ¿Desea comprar este juego? (y/n)")
                if(respuesta4 == "y"){
                    pagar(juegos[3].precio, juegos[3].nombre)
                }
                break
            case "5":
                const respuesta5 = prompt(juegos[4].nombre + "\n Género: " + juegos[4].genero + "\n Plataforma: " + juegos[4].plataforma + "\n Desarrollado por: " + juegos[4].desarrolladora + "\n Año de publicación: " + juegos[4].año + "\n Precio: $" + juegos[4].precio + "\n ¿Desea comprar este juego? (y/n)")
                if(respuesta5 == "y"){
                    pagar(juegos[4].precio, juegos[4].nombre)
                }
                break
            case "6":
                const respuesta6 = prompt(juegos[5].nombre + "\n Género: " + juegos[5].genero + "\n Plataforma: " + juegos[5].plataforma + "\n Desarrollado por: " + juegos[5].desarrolladora + "\n Año de publicación: " + juegos[5].año + "\n Precio: $" + juegos[5].precio + "\n ¿Desea comprar este juego? (y/n)")
                if(respuesta6 == "y"){
                    pagar(juegos[5].precio, juegos[5].nombre)
                }
                break
            case "7":
                alert("¡Hasta la próxima!")
        }
        empezar = prompt("Desea volver al menú? (y/n)")
    }
}

menuJuegos()