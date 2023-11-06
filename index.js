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

sacarPromedio();