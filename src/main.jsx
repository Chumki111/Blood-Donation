import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Route'
import AuthProvider from './Context/AuthProvider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
 
     <AuthProvider>
          <Toaster />
          <RouterProvider router={Router} />
     </AuthProvider>
  
)
