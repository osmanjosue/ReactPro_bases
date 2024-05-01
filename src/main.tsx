import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Counter } from './bases/Counter'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Counter initialValue={25}/>
  </React.StrictMode>,
)
