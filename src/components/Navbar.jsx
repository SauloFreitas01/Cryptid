import React ,{useState}from 'react';
import {Button, Menu, Typography, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import{ HomeOutlined,MoneyCollectOutlined, BulbOutlined, FundOutlined,  MenuOutlined} from '@ant-design/icons'; 
import icon from '../images/cryptocurrency.png';
import { BrowserRouter as Router } from "react-router-dom";


const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return(
    <div className="nav-container" >   
        <div className="logo-container">
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className="logo">
                <Link to={'/'}>Cryptid</Link> 
            </Typography.Title>

        </div>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <div className={click ? 'nav-menu active' : 'Nav-menu'}>

        <Menu theme="dark" className="nav-menu">
            <Menu.Item icon={<HomeOutlined/>}>
                <Link to="/"  onClick={closeMobileMenu}>Home</Link>   
            </Menu.Item> 

           

            <Menu.Item icon={<FundOutlined/>}>
                <Link to="/cryptocurrencies"  onClick={closeMobileMenu}>Cryptocurrencies</Link>   
            </Menu.Item>  

            <Menu.Item icon={<BulbOutlined/>} >
                <Link to="/news"  onClick={closeMobileMenu}>News</Link>   
            </Menu.Item>

            
        </Menu>
        </div>
        
        </div>
    
    )
}

export default Navbar