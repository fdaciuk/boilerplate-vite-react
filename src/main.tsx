import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from '@/app'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.querySelector('[data-js="root"]'),
)
