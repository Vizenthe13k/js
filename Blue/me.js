
/* function tablita() {

    let tabla = prompt('Digite el número de la tabla a visualizar: ')
    tabla = parseInt(tabla, 10)
    document.write('<br>')
    for(let t = 1; t <= 2; t++) 
    {
        document.write(tabla + ' x ' + t + ' = ' + tabla * t + '<br>')
    }

} */

function arreglos() {

    let arr = [1, 5, 10, ' Vicente ', true]
   /*  document.write('<div class="alert alert-danger" role="role">' + arr + '</div><br>'); */

    for(let num = 0; num < 5; num+=1)
    {
        document.write(arr[num])
    }
    
}

function mientras() {

    let que = 0;

    while(que < 10)
    {   
        document.write(que)
        que += 2;
    }

}

function cambio() {

    let hour = 139;
    switch(hour)
    {
        case 10:
            document.write('<br>Son las 10 am')
            break
        case 13:
            document.write('<br>Son la 13 pm')
            break
        default:
            document.write('<br>Oops!<br>')
            break
    }        

}

function sumar(num1, num2) {

    return document.write(num1 + num2)
    
}
