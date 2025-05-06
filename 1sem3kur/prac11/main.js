class User {
   constructor(username){
    this.Name = username;
    document.write(this.Name);}
};
let user = new User(prompt("имя"));

let user2name = "Вася";

class User2 {
    constructor(user2name){
        this.user = 'Привет, ' + user2name;
        alert(this.user)
    }
}
let user2 = new User2(user2name);


let zxc = prompt("user3"); 

class User3 {
  constructor(zxc){
    this.user3 = zxc;
  }
  reverseUser3(){
    this.user3 = this.user3.split('').reverse().join('');
    console.log(this.user3);
  }
}

let user3 = new User3(zxc); 
user3.reverseUser3();
