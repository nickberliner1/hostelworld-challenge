const apiKey = 'MRf3dNO7UqC_3AWW8owtB2b6WUBko6X4k0twxFAOw8Y';

const api = `https://api.unsplash.com/search/photos?query=party&per_page=10&client_id=${apiKey}`;

const createNode = (element) => {
    return document.createElement(element);
}

const appendNode = (parent, element) => {
    parent.appendChild(element);
}

const appendClass = (element, className) => {
    element.classList.add(className);
}

const ul = document.querySelector('#board');

fetch(api)
    .then(res => res.json())
    .then(data => {
        console.log(data.results)
        data.results.map((image) => {

            // Creating Nodes
            let li = createNode('li');
            let img = createNode('img');
            let p = createNode('p');
            let a = createNode('a');

            // Adding classes to them
            appendClass(li, 'card');
            appendClass(img, 'image');

            // Setting values
            img.src = image.urls.regular;
            p.innerText = image.description;
            a.href = image.urls.regular;

            // Appending them to the DOM
            appendNode(li, a);
            appendNode(a, img);
            appendNode(li, p);
            appendNode(ul, li);
        });
    }).catch(error => {
        console.log(error);
    })

