import React, { useState } from 'react';

const ExampleComponent: React.FC = () => {
    const [message, setMessage] = useState<string>('Hello, React TypeScript!');

    return (
        <div>
            <h1>{message}</h1>
            <button onClick={() => setMessage('You clicked the buttons!')}>
                Click me
            </button>
        </div>
    );
}

export default ExampleComponent;
