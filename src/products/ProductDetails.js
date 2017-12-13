import React, {Component} from 'react'
import {View, Text, Image } from 'react-native'
import axios from 'axios'
import {BASE_API_URL} from '../global/util'
    

class ProductDetails extends Component {

	state = {
		product_name:'',
		price:'',
		image:''
	}


    componentDidMount () {
        const id = this.props.navigation.state.params.id
        this.fetchDataDetails(id)
    }
    
    fetchDataDetails = async (id) => {
        const url_api = `${BASE_API_URL}/shoppinglists/${id}`
        axios.get(url_api)
            
            .then (res => {
                console.log(res)
                this.setState({
                    product_name: res.data.product_name ,
                    price: res.data.price ,
                    image: res.data.image
                })
            })
            
            .catch(err => {
                console.log(err)
            })
    }
    
    render () {
    
        return(
            <View style={{flex:1, backgroundColor:'white'}}>
                <Image source={{ uri:this.state.image }} 
		        style={{width:'100%', height:300, resizeMode:'contain'}} />
                <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', marginTop:10}}>{this.state.product_name}</Text>
                <Text style={{textAlign:'center', color:'red', fontSize:20, fontWeight:'bold'}}>Rp. {(this.state.price).toLocaleString('id')}</Text>
            </View>
        )
    }    
}

export default ProductDetails
