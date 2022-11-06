import React, {createElement as e} from "react";

function App() {
    const [count, setCount] = React.useState(0);

    return e('div', {className: 'container'},[
        e('h1',{className: 'font-bold'}, `Test JSX ${count}`),
        e('button', {
            className: 'py-2 px-4 border',
            key: 2,
            onClick: () => setCount(count + 1)
        }, 'Click me')
    ])
}