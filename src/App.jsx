import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Background from './components/background'
import Footer from './components/Footer'
import Card from './components/Card'


function App() {
    const [count, setCount] = useState(0)

    return (
        // <!--abcdefghijk-->
        <>  <Header />
            <Background></Background>
            <Card></Card>
            <Footer></Footer>

        </>
    )
}

export default App