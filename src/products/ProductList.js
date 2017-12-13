import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity } from 'react-native'


//Function based component
const ProductList = (data) => {
    const dataHasil = data.data
    const dataNavigation = data.navigation
    console.log(dataHasil)
    


    return (
        <TouchableOpacity onPress={ () => dataNavigation.navigate( 'Det', {id: dataHasil.id} ) }>
            <View style={{backgroundColor:'#ffffff', margin:10}}>
                <View style={{flexDirection:'row'}}>
                        
                        <Image source={{uri:dataHasil.image}}
                        style={{ width:100, height:100, resizeMode:'contain'}} />
                        
                        <View style={{marginLeft:15}}>
                            <Text style={{fontSize:20, marginTop:20}}>{dataHasil.product_name}</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text style={{fontSize:15}}>Rp.{(dataHasil.price).toLocaleString('id')}</Text>
                                {
                                    dataHasil.price >= 15000000 ? (
                                        <Text style={{color:'red', marginLeft:25}}>15% Off</Text>
                                    ) : (
                                        <Text style={{color:'red', marginLeft:25}}>5% Off</Text>
                                    )
                                }
                            </View>    
                        </View>

                </View>
            </View>
        </TouchableOpacity>
   

    )   
}

export default ProductList


