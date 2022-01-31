class Person{
    constructor(nick, age, sex, parent, work, friends){
        this.nick = nick;
        this.age = age;
        this.sex = sex;
        this.parent = parent;
        this.work = work;
        this.friends = friends;
    }
    /*addFriend(nick, age, sex, parent, work, friends){
        this.friends.push(new Person(nick, age, sex, parent, work, friends));
    }*/
}
let seb = new Person('Sebastien', 25, 'm', 'ainé', 'développeur',[]);
let lau = new Person('Laurence', 21,'f','soeur', 'sous-officier', []);
alert(seb.nick);
seb.nick = "Bastien"; //On change le prénom
seb.age = 23; //On change l'âge

alert(seb.nick + ' a ' + seb.age + ' ans.'); //Affiche: Bastien a 23 ans

/*seb.addFriend('William', 19, 'm', 'ainé', 'Développeur',[]);
seb.addFriend('Johnatan', 19, 'm', 'ainé', 'Développeur',[]);
seb.addFriend('Thomas', 19, 'm', 'ainé', 'Développeur',[]);*/
alert(seb.friends[2].nick + ' a ' + seb.friends[2].age + ' ans.');