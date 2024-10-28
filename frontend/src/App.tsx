import { Route,Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import ForgotPassword from './pages/ForgotPassword'



function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
      </Routes>
    </>
  )
}

export default App
