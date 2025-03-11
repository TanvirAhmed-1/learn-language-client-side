import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router'
import Authorization from './authorization/Authorization'
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css"; 


createRoot(document.getElementById('root')).render(
  <StrictMode>
<Authorization>
<ToastContainer
 toastClassName="toastBody"
 position="top-right"
 autoClose={3000}
 hideProgressBar={false}
 newestOnTop={false}
 closeOnClick={false}
 rtl={false}
 pauseOnFocusLoss
 draggable
 pauseOnHover
 theme="light"
 transition={Bounce}
/>
<RouterProvider router={router}></RouterProvider>
</Authorization>
  </StrictMode>,
)
