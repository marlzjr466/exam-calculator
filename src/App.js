import React, { useContext, useState } from 'react'
import Calculator from "./assets/components/Calculator"

import { DisplayProvider } from "./assets/context/DisplayContext"

export const DisplayContext = React.createContext()

function App() {

    return (
        <DisplayProvider>
            <div className="app">
                <Calculator />
            </div>
        </DisplayProvider>
    );
}

export default App;
