import React from 'react'
import ReactDOM from 'react-dom/client'
import {

  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Route';
import './index.css'
import AuthProvider from './providers/AuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
 <AuthProvider>
 <QueryClientProvider client={queryClient}>

<RouterProvider router={router} />

  </QueryClientProvider>

</AuthProvider>
</React.StrictMode>
)
