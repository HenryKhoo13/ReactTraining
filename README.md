This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


React Webhook Knowledge

----

React Hooks are functions that let you use state and other React features inside functional components12. They were introduced in React 16.834. Here are some of the most commonly used hooks and how you might use them:

useState: This hook lets you add state to functional components3. The useState hook returns a pair: the current state value and a function that lets you update it3. Here’s an example:
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

useEffect: This hook lets you perform side effects in functional components3. It is a close replacement for componentDidMount, componentDidUpdate, and componentWillUnmount3. Here’s an example:
import { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}


useContext: This hook lets you subscribe to React context without introducing nesting3. Here’s an example:
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            I am styled by theme context!
        </button>
    );
}


useRef: This hook can be used to create a mutable ref object whose .current property is initialized with the passed argument3. The returned object will persist for the full lifetime of the component3. Here’s an example:
import { useRef } from 'react';

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}


useReducer: This hook is usually preferable to useState when you have complex state logic that involves multiple sub-values3. It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks3. Here’s an example:
import { useReducer } from 'react';

const initialState = {count: 0};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            Count: {state.count}
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
    );
}


useState:

Simplified: It’s like a small storage box where your component can keep some data. The data can change over time and whenever it changes, your component will re-render to reflect those changes.
Complex: This hook allows you to add state to functional components. The useState hook returns a pair: the current state value and a function that lets you update it. The initial state is set by the argument passed to useState. The state update function enforces a consistent update pattern, ensuring that state updates are always processed in the order they were called during the render.

useEffect:

Simplified: It’s like a worker who is instructed to do some tasks whenever certain conditions change. These tasks can be anything from changing the document title, fetching data from an API, setting up a subscription, etc.
Complex: This hook lets you perform side effects in functional components. It takes two arguments: a function that contains the side-effect logic and an array of dependencies. The side-effect function runs after render and cleanup is scheduled before the next render. If the dependencies array is provided, the side effect only runs when the dependencies have changed.

useContext:

Simplified: It’s like a global storage that can be accessed from any component without having to pass the data around through props.
Complex: This hook allows you to use the value of a context without wrapping your component in a Context.Consumer. It takes a context object as an argument and returns the current context value for that context.
useRef:

Simplified: It’s like a box where you can keep any mutable value. The value can change over time but changing it won’t cause the component to re-render.
Complex: This hook creates a mutable ref object with a .current property initialized with the passed argument. The returned object persists for the full lifetime of the component. It’s commonly used to keep a reference to a DOM node or an instance variable.

useReducer:

Simplified: It’s like a more powerful version of useState. It’s useful when you have more complex data to manage, like an object with multiple fields, or when the next state depends on the previous one.
Complex: This hook is an alternative to useState that is more suited for complex state logic. It takes a reducer function and an initial state as arguments and returns the current state paired with a dispatch method. The reducer function should be pure and must return a new state.

useCallback:

Simplified: It’s a way to ensure that a function keeps the same reference between renders unless its dependencies change. This can be useful in some performance optimizations.
Complex: This hook returns a memoized version of the callback function that only changes if one of the dependencies has changed. It’s useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

useMemo:

Simplified: It’s a way to memorize the result of a function so that the function doesn’t need to be run again unless its dependencies change. This can be useful in some performance optimizations.
Complex: This hook returns a memoized value. It’s similar to useCallback, but for computed values. It only re-computes the memoized value when one of the dependencies has changed.

useImperativeHandle:

Simplified: It’s a way to customize the instance value that is exposed to parent components when using ref.
Complex: This hook customizes the instance value that is exposed to parent components when using ref. It should be used sparingly as it breaks component encapsulation.

useLayoutEffect:

Simplified: It’s similar to useEffect, but it runs synchronously immediately after React has performed all DOM mutations.
Complex: This hook has the same signature as useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.

useDebugValue:

Simplified: It’s a way to display a label for custom hooks in React DevTools.
Complex: This hook can be used to display a label for custom hooks in React DevTools.