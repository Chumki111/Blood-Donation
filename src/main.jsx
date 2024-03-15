import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Route'
import AuthProvider from './Context/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
 
     <AuthProvider>
          <RouterProvider router={Router} />
     </AuthProvider>
  
)
