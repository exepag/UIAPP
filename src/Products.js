import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    AsyncStorage,
    Image,
    ScrollView
} from 'react-native'
import axios from 'axios'
import { BASE_API_URL, getToken } from './global/util'
import ProductList from './products/ProductList'



class Products extends Component {
    
    state = {
        dataProducts: [],
        products: [],
        product_names: [],
        product_prices: [],
    }

    componentDidMount(){
        
        this.getProducts()
      }


    static navigationOptions = ({ navigation }) => ({
        title: `Catalogue`
        //  ,
        // headerRight: 
        //     (
            
        //     )   
      });

    
    
    
      
    
      //template literals
      //const nama = 'abc'

      logoutHandler = async () => {
          //console.log('logout di klik')
          const dataToken = await getToken() 
          const logout_api = `${BASE_API_URL}/Users/logout?access_token=${dataToken}`
                console.log(logout_api)
          axios.post(logout_api, {})
            .then(response => {
                AsyncStorage.removeItem('token')        
                this.props.navigation.navigate('Main')
                //console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
      } 
          
      
            // axios.get('')
            // axios.put
            // axios.post
            // axios.delete


      getProducts = () => {
      console.log('function getProducts dipanggil')

          axios.get(`${BASE_API_URL}/shoppinglists`)

              .then(response => {
              console.log(response)
                  this.setState({ 
                      dataProducts:response.data,
                  })
              })

              .catch(error => {
              console.log(error)

              })
      }

    
      render () {
	    console.log(this.props)
	    console.log(this.props.navigation)
             
        return (
            <View style={{flex:1}}>    
                <ScrollView>
                    {this.state.dataProducts.length === 0 ? 
                        (
                                <ActivityIndicator style={{marginTop:50}} size="large" />
                        ) : (
                                this.state.dataProducts.map ( 
                                    (dataku, index) => <ProductList 
                                                        key={index} 
                                                        data={dataku}
                                                        navigation={this.props.navigation}
                                                        />  
                                ) 
                        )
                    }
                </ScrollView>
                <View>
                        <TouchableOpacity 
                        onPress ={ () => this.logoutHandler() }
                        style={{backgroundColor:'steelblue'}}> 
                            <Text style={{color:'white', fontWeight:'bold', fontSize:25, margin:15, textAlign:'center' }}>
                                Log Out
                            </Text> 
                        </TouchableOpacity>
                </View>
            </View> 
        )

      }
}

export default Products

    
