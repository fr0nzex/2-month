    const players = [
    {
        name:"messi",
        goals:12
    },
    {
        name:"ronaldo",
        goals:4
    },
    {
        name:"suarez",
        goals:6
    },
    {
        name:"levandovski",
        goals:9
    },
    {
        name:"neymar",
        goals:11
    },
 ]

 const filteredUsers = [];

 for(let user of players){
    if(user.goals > 10) {
        filteredUsers.push(user)
    }
 }

 console.log(filteredUsers);





 let i = 0;
while (i < 51) {
console.log(i);
  i++;
}

