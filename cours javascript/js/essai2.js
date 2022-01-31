/*let number = 0;
number = number +1;
//alert(number);

number--;
//alert(number);
*/
/*let number_1 = 0;
let number_2 = 0;
number_1++;
++number_2;*/
//alert(number_1);//Affiche:"1"
//alert(number_2);//Affiche:"1"

//let number = 0;
//let output = number++;
//alert(number);
//alert(output);


/*let number = 0;
while (number < 10) {//condition
    //alert(number);
    number++; }
alert(number); // Affiche : « 10 »*/

/****** La boucle FOR *******/

/*for (initialisation; condition; incrémentation) { instruction_1;instruction_2;instruction_3; }*/
/*for (let iter = 0; iter < 10; iter++){
    alert("Itération n°" + iter); 
}*/

/*let msg = "Hello World!";
function sayHello(){
    alert(msg);
}
sayHello();*/
/********************************/

/*let var1 = 2, var2 = 3;// 2 variables globales
function calculate(){
    alert(var1 * var2);//affiche 6
}
calculate();
alert(var1);//affiche 2
var1 = 3;
calculate();
alert(var1);// affiche 3*/

/********************************/

/*function calculate(){
    let var1 = 2, var2 = 3;// variables locales
    alert(var1 * var2);
}
//calculate();
//alert(var1);//affiche nul*/

//*******************************/

/*function myfunction(arg){
    //le code que la fonction exécute
    alert("L'argument est:" + arg )// Affiche l'argument est : C'est bien un argument
}
myfunction("C'est bien un argument");*/

/***************************************/

/*function calculate2(var1, var2){
    alert(var1 * var2); // affiche 6
}
calculate2(2,3);

let number_1a, number_2a;
number_1a = parseInt(prompt("Votre premier nombre: "));
number_2a = parseInt(prompt("Votre deuxième nombre : "));calculate2(number_1a, number_2a);*/

/*class Calcul{
    constructor(var1, var2){
        this.produit = var1 * var2;
    }
}
alert(new Calcul(4,3).produit);*/

/*let sayHello3 = (function(){// function anonyme
    return "Hello World!";
})();
alert(sayHello3);//affiche Hello World!*/

/*let calcul1 = (function(){// function anonyme
                let var1 = 2, var2= 3;
                return var1*var2;
                })();
alert(calcul1);*/