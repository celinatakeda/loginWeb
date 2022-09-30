import { useState } from 'react'
import { AuthProvider } from './context/AuthProvider'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedLayout } from './components/ProtectedLayout';
import { Login } from './components/Login';

function App() {  
  return (    
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/profile">
            <ProtectedLayout >
              <h2>Olá esse é o componente profile</h2>
            </ProtectedLayout>
          </Route>                    
          
          <Route path='/login' element={<Login />} />          
          
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
