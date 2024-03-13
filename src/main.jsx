import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Route'

ReactDOM.createRoot(document.getElementById('root')).render(
 
     <RouterProvider router={Router} />
  
)
