import React from 'react'
import { AuthProvider } from './features/auth/auth.context'
import { router } from './app.routes'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <AuthProvider >
     <RouterProvider router={router}/>
    </AuthProvider>
  )
}

export default App