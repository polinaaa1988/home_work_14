// {
//     list: [
//       { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//       { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//     ]
//   }
const parser = new DOMParser();
const xmlString = `
<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const list = xmlDOM.querySelector("list");
const nameLang = list.querySelector("name");
const firstName = nameLang.querySelector("first");
const secondName = nameLang.querySelector("second");
const age = list.querySelector("age");
const prof = list.querySelector("prof");
const studentLang = nameLang.getAttribute("lang");


const result = {
  name: firstName.textContent + " " + secondName.textContent, 
  age: Number(age.textContent),
  prof: prof.textContent,
  lang: studentLang,


};
console.log('list', result);

// не понимаю, как вывести все значения, получается только из первого тега student