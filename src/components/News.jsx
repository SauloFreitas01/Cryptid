import React from 'react'
import{Select, Typography,Row,Col,Avatar,Card} from 'antd'
import moment from 'moment'

import {useGetCryptoNewsQuery} from '../services/CryptoNewsApi'

const{Text,Title} = Typography;
const {Option} = Select

const News = ({simplfied}) =>{
    const{data: cryptoNews} = useGetCryptoNewsQuery({newsCategory:'Cryptocurrency',count: simplfied ? 10:100})
    console.log(cryptoNews)
    return (
        <div>
               <span>News </span>
        </div>
    )
}

export default News