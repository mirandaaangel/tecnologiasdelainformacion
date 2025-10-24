let alumnos = [ "Johan", "Salomon", "Miguel", "Augusto", "René"];
console.log("Lista de Alumnos", alumnos);
console.log("Número de Alumnos", alumnos.length);
alumnos.push("Mía");
console.log("Lista actualizada de Alumnos", alumnos);
alumnos[6] = "Angel";
console.log("Lista actualizada de Alumnos", alumnos);
console.log(alumnos[2]);
console.log(alumnos[8]);
console.log(alumnos[-3]);
alumnos[10] = "Sofía";
console.log("Lista actualizada de Alumnos", alumnos);
console.log(alumnos[8]);
alumnos.pop(); // Elimina el último elemento
console.log("Lista despues de eliminar el último elemento", alumnos);
alumnos.shift(); // Elimina el primer elemento
console.log( alumnos);

for (let i = 0; i< alumnos.length; i++) {
    console.log(alumnos[i]);
}
let numero = [1,2,3,4,5,6,7,8,9,10];
console.log(numero[5]);

console.log(alumnos);
let listaAlumnos = document.getElementById("listaAlumnos");
listaAlumnos.innerHTML = alumnos.join(" * ");


