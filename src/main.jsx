import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Route'
import AuthProvider from './Context/AuthProvider'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
     <AuthProvider>
          <QueryClientProvider client={queryClient}>
               <Toaster />
               <RouterProvider router={Router} />
          </QueryClientProvider>
     </AuthProvider>

)
