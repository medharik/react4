import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { UserProvider } from './UserContext.jsx'
import { BrowserRouter  as Fatoumata} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <Fatoumata>
        <App />
      </Fatoumata>
    </UserProvider>
  </StrictMode>,
)
