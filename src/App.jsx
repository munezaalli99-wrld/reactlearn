// import React from 'react';
// import Student from './components/Student.jsx';
// import Vote from './components/TernaryOps.jsx';
// import Hooks from './components/Hooks.jsx';
// import Btn from './components/Count.jsx';
// import DisplayName from './components/DisplayName.jsx';
// import Farm from './components/Farm.jsx';
// import Form from './components/Form.jsx';
// import ChangeName from './components/ChangeName.jsx';
import {BrowserRouter,Routes,Route,Link,Outlet} from 'react-router-dom';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';
import Student from './components/Student.jsx';
import Form from './components/Form.jsx';
import './index.css'
import Dashboard from './components/Dashboard.jsx';
import Overview from './components/Overview.jsx';
import Stats from './components/Stats.jsx'

function App(){
    return(
        <>
            {/* <h1>Hello, React!</h1>
            <p>my name is alliance</p>
            <Student /> 
            <Vote />
            <Hooks />
            <Btn />
            <DisplayName />
            <Farm animal="Cows" crops="Maize" location="Gatsibo" />
            <Form/>
            <ChangeName /> */}
            <BrowserRouter>
            <nav>
                <Link to = '/'>Home</Link>
                <Link to = '/about'>About</Link>
                <Link to = '/contact'>Contact</Link>
                <Link to = '/form'>SignIn</Link>
                <Link to = '/dashboard'>Dashboard</Link>
            </nav>
            <Routes>
                <Route path = '/' element = {<Home />} />
                <Route path = '/about' element = {<About />} />
                <Route path = '/contact' element = {<Contact />} />
                <Route path = '/form' element = {<Form />} />
                <Route path = '/student' element = {<Student />} />
                <Route path= '/dashboard' element = {<Dashboard />} />
                <Route path= '/overview' element = {<Overview />} />
                <Route path= '/stats' element = {<Stats />} />
            </Routes>
            
            </BrowserRouter>
        </>
    )
}


export default App; 