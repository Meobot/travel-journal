// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import './index.css'
import Header from './components/Header.jsx'
import Data from './data.js'
import Card from './components/Card.jsx'

export default function App() {
    const cards = Data.map(item => {
        return (
            <Card
                key={item.id}
                item={item}
                
            />
        )
    })   
    
  return (
    <div className='app-container'>
        <Header />
        <section>
            {cards}
        </section>
    </div>
  )
}
