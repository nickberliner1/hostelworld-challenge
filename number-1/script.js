const list =[
    { name: 'First' },
    { name: 'Second' },
    { name: 'Third' },
    { name: 'Fourth' },
    { name: 'Fifth' },
].sort(() => Math.random() - 0.5);
  
let third = [];
  
for ( let i in list ) {
    if ( list[i].name == 'Third' ) {
        third.push(list[i]);
    }
}
  
let noThird = list.filter(i => i.name !== 'Third');
let final = third.concat(noThird);

JSON.stringify(final);

for ( let i in final ) {
    console.log(final[i].name);
}
