const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;
const data = JSON.parse(jsonString);
// console.log('data', data);

const list = data.list;
// console.log('list', list);

for (i=0; i<list.length; i++){
    const result = {
    name: list[i].name,
    age: Number(list[i].age),
    prof: list[i].prof,
 
 };
 console.log('result', result);
}