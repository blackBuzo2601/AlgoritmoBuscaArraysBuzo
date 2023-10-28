/*
BUZO ZAMORA ELIAN
20760257
5SS
Desarrollar un algoritmo que busque el contenido
del primer arreglo "arreglo_busca" en el segundo
arreglo "arreglo", al encontrar el numero igual deberá
imprimir el numero y su indice.

-Debera buscar todos los numeros.
-Si el numero buscado no se encuentra, debera informarnos.
*/
/*
VERSION MEJORADA
Si se elige el arreglo_2, se van a trabajar con el arreglo_0 y el arreglo_1.
los elementos del arreglo 2 se van a buscar en el arreglo_0 y el arreglo_1.
*/
                ///0,1,2,3  
const arreglo_0 = [3,5,1,7];

                ///0,1,2,3,4,5,6
const arreglo_1 = [7,6,2,3,4,5,3];

                ///0,1,2,3,4,5
const arreglo_2 = [0,1,2,3,5,8];
var arreglo_choice= 0;

let valor; /*variable que usaremos en un bucle, que ira incrementando. 
Si su valor es lo mismo que el largo del arreglo con el que estamos trabajando, 
significa que dicho numero buscado no se encuentra en ese arreglo.
*/
let m; /*variable que hace referencia a la posición del arreglo donde estamos buscando*/
switch(arreglo_choice){
    case 0:
    console.log("Busqueda del arreglo_0 en el arreglo_1 y arreglo_2\n========================================================");
    for (let i=0; i<arreglo_0.length;i++){ //bucle for general.

        
        
            m=0;     //estas variables se van a reiniciar cada vez que el bucle
            valor=0; //for vuelva a comenzar.
            
            while(m<arreglo_1.length){ //Cuando m valga lo que el largo del arreglo con el que
                                       //trabajamos, significa que hemos recorrido
                                       //todas las posiciones de ese arreglo.

            if(arreglo_0[i]==arreglo_1[m]){ 
                console.log("El numero ("+arreglo_0[i]+") del arreglo_0, está en la posición ["+m+"] del arreglo_1");
            }else{
                valor++ //esta variable, si en algun punto, vale lo mismo que el largo del arreglo
            }
            m++; //siempre va a aumentar en uno aqui.
            if(valor==arreglo_1.length){
                console.log("El numero ("+arreglo_0[i]+") del arreglo_0 NO EXISTE EN EL arreglo_1");
            }
        }//fin del primer while


            m=0;        //se reinician estos valores, para ahora trabajar con el otro arreglo.
            valor=0;
        while(m<arreglo_2.length){   //funciona basicamente igual. i sigue valiendo lo mismo que el while anterior           
            if(arreglo_0[i]==arreglo_2[m]){
                console.log("El numero ("+arreglo_0[i]+") del arreglo_0, está en la posición ["+m+"] del arreglo_2");
            }else{
                valor++
            }
            m++;
            if(valor==arreglo_2.length){
                console.log("El numero ("+arreglo_0[i]+") del arreglo_0 NO EXISTE EN EL arreglo_2");
            }
        }//fin del segundo while
        
 }//fin del for general

 break;

    case 1:
        console.log("Busqueda del arreglo_1 en el arreglo_0 y arreglo_2\n======================================================");
        for  (let i=0; i<arreglo_1.length;i++){ 
            //al principio m y valor valen 0
                m=0;
                valor=0;
                while(m<arreglo_0.length){  
                if(arreglo_1[i]==arreglo_0[m]){
                    console.log("El numero ("+arreglo_1[i]+") del arreglo_1, está en la posición ["+m+"] del arreglo_0");
                }else{
                    valor++
                }
                m++;
                if(valor==arreglo_0.length){
                    console.log("El numero ("+arreglo_1[i]+") del arreglo_1 NO EXISTE EN EL arreglo_0");
                }
            }//fin del while
                m=0;
                valor=0;
            while(m<arreglo_2.length){              
                if(arreglo_1[i]==arreglo_2[m]){
                    console.log("El numero ("+arreglo_1[i]+") del arreglo_1, está en la posición ["+m+"] del arreglo_2");
                }else{
                    valor++
                }
                m++;
                if(valor==arreglo_2.length){
                    console.log("El numero ("+arreglo_1[i]+") del arreglo_1 NO EXISTE EN EL arreglo_2");
                }
            }//fin del while
     }//fin for principal
        break;

    case 2:
        console.log("Busqueda del arreglo_2 en el arreglo_0 y arreglo_1\n======================================================");
        for  (let i=0; i<arreglo_2.length;i++){ 
            //al principio m y valor valen 0
                m=0;
                valor=0;
                while(m<arreglo_0.length){  
                if(arreglo_2[i]==arreglo_0[m]){
                    console.log("El numero ("+arreglo_2[i]+") del arreglo_2, está en la posición ["+m+"] del arreglo_0");
                }else{
                    valor++
                }
                m++;
                if(valor==arreglo_0.length){
                    console.log("El numero ("+arreglo_2[i]+") del arreglo_2 NO EXISTE EN EL arreglo_0");
                }
            }//fin del while
                m=0;
                valor=0;
            while(m<arreglo_1.length){              
                if(arreglo_2[i]==arreglo_1[m]){
                    console.log("El numero ("+arreglo_2[i]+") del arreglo_2, está en la posición ["+m+"] del arreglo_1");
                }else{
                    valor++
                }
                m++;
                if(valor==arreglo_1.length){
                    console.log("El numero ("+arreglo_2[i]+") del arreglo_2 NO EXISTE EN EL arreglo_1");
                }
            }//fin del while
     }//fin for principal
        break;
}































/*ALGORITMO ORIGINAL
========================================================================
                     //0,1,2,3 
const arreglo_busca = [3,5,1,7];
const arreglo =       [7,6,2,3,4,5,3];
                     //0,1,2,3,4,5,6

let valor;
let m;
for  (let i=0; i<arreglo_busca.length;i++){ //va a realizar esto 7 veces
//al principio n y m vale 0
    m=0;
    valor=0;
    
    while(m<arreglo.length){
    if(arreglo_busca[i]==arreglo[m]){
        console.log("El numero ("+arreglo_busca[i]+") del primer arreglo, está en la posición ["+m+"] del segundo arreglo");
    }else{
        valor++
    }
    m++;
    if(valor==arreglo.length){
        console.log("El numero ("+arreglo_busca[i]+") NO EXISTE EN EL SEGUNDO ARREGLO.");
    }
}//fin del while


}//fin for inicial



*/

