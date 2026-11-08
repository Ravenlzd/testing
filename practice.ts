interface User {
  name: string;
  id: number;
  isRegistered: boolean;
}
 
class UserAccount {
  name: string;
  id: number;
  isRegistered: boolean;
 
  constructor(name: string, id: number, registered: boolean) {
    this.name = name;
    this.id = id;
    this.isRegistered = registered;
    
  }
  
}
 

const user1: User = new UserAccount("Murphy", 1, true);

console.log(user1.name);



const message = "Hello, " + user1.name + "! Your registration status is: " + (user1.isRegistered ? "Registered" : "Not Registered") + ".";

function greetUser(user: User): string {
  return message;
}

console.log(greetUser(user1));

