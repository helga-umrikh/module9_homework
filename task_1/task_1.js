

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


const nextStudent = studentNode.nextElementSibling

const nameNodeSibling = nextStudent.querySelector('name')
const firstNodeSibling = nameNodeSibling.querySelector('first')
const secondNodeSibling = nameNodeSibling.querySelector('second')
const ageNodeSibling = nextStudent.querySelector('age')
const profNodeSibling = nextStudent.querySelector("prof");



const result = {
    list: [{
        name: `${firstNode.textContent} ${secondNode.textContent}`,
        age: ageNode.textContent,
        prof: profNode.textContent,
    },
    {
        name: `${firstNodeSibling.textContent} ${secondNodeSibling.textContent}`,
        age: ageNodeSibling.textContent,
        prof: profNodeSibling.textContent
    }]
}

console.log(result);