import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className='container'>
      <nav className='nav'>
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h2>ReactFacts</h2>
    
        <h3>React Course - Project 1</h3>
              
      </nav>
      <main>
        <h1 className='main--title'>Fun facts about React</h1>
        <ul className='main--list'>
          <li>Was first released in 2013.</li>
          <li>Was originally create by Jordan Walke.</li>
          <li>Has well over 100k stars on GitHub.</li>
          <li>Is maintained by Facebook.</li>
          <li>Powers thousands of enterprice apps, including mobile apps.</li>
        </ul>
      </main>
    </div>
  )
}

export default App
