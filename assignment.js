const sayHello = (name) => console.log("Hi " + name);
const sayHello2 = (name, greet = "Hello ") => console.log(greet + name);
const sayHello3 = () => console.log("Hi hard-coded");
const sayHello4 = (name) => "Hi " + name;

sayHello("Daniel");
sayHello2("Daniel", "Hi ");
sayHello3();
console.log(sayHello4("Daniel"));

sayHello2("Daniel");

function checkInput(cb, ...strings) {
  let hasEmptyText = false;
  for (const text of strings) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
}

checkInput(
  () => {
    console.log("All not empty!");
  },
  "Hello",
  "Hi",
  "12",
  "a"
);
