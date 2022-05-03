import {React, useState } from 'react'
import {Route, Link, Routes} from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import {Navbar, Homepage, Cryptocurrencies,  News,} from './components'

import './App.css' 
const App = () => {
  const [menuIsVisible,SetMenuIsVisible] = useState(true)
  
  return (
    <div className="App">
       
      <div className="navbar">
        <Navbar />
      </div>
       
      <div className="main">

        <Layout>
          <div className="routes">
            
            <Routes>
              <Route path="/" element={<Homepage />}/>
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />}/>
              <Route exact path="/news" element = {<News/>}/>

            </Routes>
            
            
          </div>
        </Layout>

        <div className='footer' >
         <Typography.Title level={5} style={{color: 'white', textAlign: 'center'}}>
            Cryptid <br/>
            Saulo Freitas - 2022 <br/>
            
          </Typography.Title>
           

          <Space>
           <Link to='/'>Home</Link>
           <Link to='/news'>News</Link>
         </Space>

           
        </div>
      </div>
       
      
    </div>
  )
}

export default App
