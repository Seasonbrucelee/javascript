/*let number = 1/0;
alert(isFinite(number));*///envoi "true" si le nombre ne tends pas vers l'infini

/*** CREATION D4UNE CHAINE DE CARACTERE ****/
/*let maChaine = "C'est un test";
let monTableau = maChaine.split('');

for (let i = 0; i< monTableau.length; i++){

    console.log(monTableau[i] + "\n");
}*/

/***** FOR EACH *****/

/*let myArray = ["C'est", "un", "test"]
myArray.forEach(function(value, index){
    console.log('Index: '+ '\n' + 'Valeur: ' + value);
    console.log('\n' + value);
});*/

/*let myArray = ["C'est", "un", "test"];
myArray.forEach(element => console.log('\n ' + element));*/

/*let Person = {
    nick: 'Sébastien',
    age: 25,
    sex: 'm',
    parent: 'ainé',
    work: 'Développeur'
};
for( let property in Person){
    console.log(`${property} => ${Person[property]}`);
}// donne ex. nick = Sébastien, age = 25*/

let animalsArray = ["cat", "dog", "fish"];
for (let value of animalsArray){
    console.log(value);
}