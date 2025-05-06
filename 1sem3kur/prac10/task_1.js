let user = {
  name: "Джон",
  age: 30
};
user.sayHi = function() {
  alert("Привет!");
};
user.sayHi(); // Привет!
let zxc = {
  name: "Елисей Балин",
  address: "ул. Пушкина, дом Колотушкино",
  phone: "+7 (999) 999-99-99",
  email: "eliseybalin@gmail.com",
  orderHistory: [] 
 };
 
 console.log(zxc.name); 
 console.log(zxc.address); 
 console.log(zxc.phone); 
 let children = {
  name: "ГИГАЧАТ",
  isAdmin: false
 };
 let fff = {
userID: 1,
ZAKAZ: 2,
items: ["Mango","Pivo"],
status: "Ожидание"
 }
 let restaurant = {
  id:2,
  name: "DODO",
  address:"РАменское"
 };
 if (fff.status === "Ожидание") {
  console.log(`Заказ ${fff.userId} от пользователя ${children.name} в ресторане ${restaurant.name} ожидание.`);
}
function GroupMember(name) {
  this.name = name;
 }
 
 const member1 = new GroupMember("Кирилл");
 const member2 = new GroupMember("Елисей");
 const member3 = new GroupMember("Дмитрий");
 
 console.log(`Члены группы: ${member1.name}, ${member2.name}, ${member3.name}`);
 function Student(name, group, courses) {
  this.name = name;
  this.group = group;
  this.courses = courses;
 
  this.sayHi = function() {
   console.log(`Меня зовут ${this.name}, я учусь в группе ${this.group}.`);
  };
 
  this.showCourses = function() {
   console.log(`Я учусь на следующих курсах: ${this.courses.join(', ')}`);
  };
 }
 
 const vasya = new Student("Елисей", "ИСП-209", ["Программирование"]);
 
 vasya.sayHi(); 
 vasya.showCourses();