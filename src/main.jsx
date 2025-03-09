import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import Authorization from './authorization/Authorization'


createRoot(document.getElementById('root')).render(
  <StrictMode>
<Authorization>
<RouterProvider router={router}></RouterProvider>
</Authorization>
  </StrictMode>,
)
