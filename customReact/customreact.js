function customRender(reactElement, container) { 
    const domEl = document.createElement(reactElement.type); 
    
    domEl.innerHTML = reactElement.children; 

    for (const prop in reactElement.props) {
        if(prop === 'children') continue; 
        domEl.setAttribute(prop, reactElement.props[prop]); 
    }

    container.appendChild(domEl); 
}

const reactElement = {
    type: 'a', 
    props: {
        href: 'https://google.com', 
        target: '_blank'
    }, 
    children: 'Click me to visit Google'
}
const mainContainer = document.querySelector('#root'); 

customRender(reactElement, mainContainer); 