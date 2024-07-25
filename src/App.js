import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login' 
import Login1 from './Login1'
import Login2 from './Login2'
import Login3 from './Login3'
import Login4 from './Login4'
import Login5 from './Login5'
import Login6 from './Login6'
import Login7 from './Login7'
import Login8 from './Login8'
import Studentinfo from './Studentinfo'
import Success from './Success'
import Mentinfo from './Mentinfo'
import Hodinfo from './Hodinfo'
import Studact from './Studact'
import Mentact from './Mentact'
import Hodact from './Hodact'
import Studinfoc from './Studinfoc'
import Mentinfoc from './Mentinfoc'
import Hodinfoc from './Hodinfoc'

function App() {
  return (
    <Router>
    <div>
      <Routes>
     <Route path="/" element={<Home/>}></Route>
     <Route path="/Login" element={<Login/>}></Route>
     <Route path="Login1" element={<Login1/>}></Route>
     <Route path="Login2" element={<Login2/>}></Route>
     <Route path="Login3" element={<Login3/>}></Route>
     <Route path="Login4" element={<Login4/>}></Route>
     <Route path="Login5" element={<Login5/>}></Route>
     <Route path="Login6" element={<Login6/>}></Route>
     <Route path="Login7" element={<Login7/>}></Route>
     <Route path="Login8" element={<Login8/>}></Route>
     <Route path="/Studentinfo" element={<Studentinfo/>}></Route>
     <Route path="/Mentinfo" element={<Mentinfo/>}></Route>
     <Route path="/Hodinfo" element={<Hodinfo/>}></Route>
     <Route path="/Success" element={<Success />} />
     <Route path="/Studact" element={<Studact/>}/>
     <Route path="/Mentact" element={<Mentact/>}/>
     <Route path="/Hodact" element={<Hodact/>}/>
     <Route path="/Studinfoc" element={<Studinfoc/>}/> 
     <Route path="/Mentinfoc" element={<Mentinfoc/>}/>
     <Route path="/Hodinfoc" element={<Hodinfoc/>}/>
     </Routes>
      </div>
    </Router>
  )
}

export default App

