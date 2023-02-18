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

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");
const nameNode = studentNode.querySelector("name");
const firstNode = nameNode.querySelector("first");
const secondNode = nameNode.querySelector("second");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");


// console.log('listNode', listNode);
// console.log('studentNode',studentNode);
// console.log('nameNode',nameNode);
// console.log('firstNode',firstNode);
// console.log('secondNode',secondNode);
// console.log('ageNode',ageNode);

const langAttr = nameNode.getAttribute('lang');

// console.log('langAttr', langAttr);

// const result = {
//   lang: langAttr,
//   first: firstNode.textContent,
//   second: secondNode.textContent,
//   age: ageNode.textContent,
//   prof: profNode.textContent
// };
// console.log('result', result);


// const result = {
//   list: [ {lang: langAttr,
//          first: firstNode.textContent,
//          second: secondNode.textContent,
//          age: ageNode.textContent,
//          prof: profNode.textContent}]
// }
// console.log('result', result);

const result = {
    list: [{
        name: `${firstNode.textContent} ${secondNode.textContent}`,
        age: ageNode.textContent,
        prof: profNode.textContent
    }],

    list: [{
        name: `${firstNode.textContent} ${secondNode.textContent}`,
        age: ageNode.textContent,
        prof: profNode.textContent
    }]
}

console.log('result', result);