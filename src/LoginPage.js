import React, {Component} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'

import axios from 'axios'
import { BASE_API_URL, getToken } from './global/util'


class LoginPage extends Component {
    
    state = {
        email:'',
        password:'',
        messageSuccess:'',
        messageError:'',
    }

    saveToken = async (ini_token_saya) => {
        await AsyncStorage.setItem('token', ini_token_saya)
        const dataToken = await getToken()
            if (dataToken) {
                this.props.navigation.navigate('Prod', { token:dataToken })
            }
    
    
    //console.log(dataToken)    

    //this.getToken()

    //    console.log('asdf')
//    console.log(ini_token_saya)
//    const dataToken = await AsyncStorage.setItem('token', ini_token_saya)
//    console.log(dataToken)
    }

// getToken = async () => {
//     const dataToken = await AsyncStorage.getItem('token')
//     console.log(dataToken)
// }


    loginClickHandler () {
//        console.log(this.state.email, this.state.password)
     
        if (this.state.email !=='' && this.state.password !=='') {
            console.log('masuk func registerClickHandler')
            const dataPayloads = {
                "email": this.state.email,
                "password": this.state.password
                }
            
            axios.post(BASE_API_URL + '/Users/login', dataPayloads)
            
            .then (res => {
                const token = res.data.id
    //            console.log(res)
                this.setState({
                    messageSuccess: 'Congratulations, you are successfully registered!'
                })
                this.saveToken(token)
            })
            
            .catch (err => {
                console.log(err)
                this.setState({
                    messageError: 'Sorry, you\'re registration failed! Please try again!'
                })
            })
        }  
    }





    render () {
        return (
            <View style={{flex:1, backgroundColor:'yellow' }}>
                    <Text style={{fontSize:25, fontWeight:'bold', color:'black', marginTop:20, marginLeft:50 }}>
                        Login Form
                    </Text>
                       
                    {this.state.messageSuccess !=='' && 
                        <Text style={{color:'blue'}}>
                            {this.state.messageSuccess}
                        </Text>
                    }
                    
                    {this.state.messageError !=='' ? 
                        (
                            <Text style={{color:'red'}}>
                                {this.state.messageError}
                            </Text> 
                        ) : (   
                            <Text style={{color:'red'}}>
                                {this.state.messageError}
                            </Text>
                        ) 
                    }
             
                    <View style={{marginLeft:50, marginTop:130}}>
                        
                        <TextInput placeholder="Email" style={{width:'70%'}}
                        onChangeText={ (text)=>this.setState({email:text}) } returnKeyType={'next'} />

                        <TextInput placeholder="Password" style={{width:'70%'}} 
                        onChangeText={ (text)=>this.setState({password:text}) } secureTextEntry={true} />
                    
                    </View>
                    
                    <View style={{flex:1, backgroundColor:'lightblue', marginTop:120}}>
                        <View style={{flexDirection:'row', marginTop:50, marginLeft:40}}>
                            
                            <TouchableOpacity style={{backgroundColor:'orange', width:'40%', borderRadius:3}}
                            onPress={()=>this.loginClickHandler()}>
                                <Text style={{textAlign:'center', fontSize:20, fontWeight:'500', color:'white', margin:10}}>
                                    Login
                                </Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={{marginLeft:25, backgroundColor:'grey', width:'40%', borderRadius:3}}
                            onPress = { () => this.props.navigation.goBack() } >
                                <Text style={{textAlign:'center', fontSize:20, fontWeight:'500', color:'white', margin:10}}>
                                    Cancel
                                </Text>
                            </TouchableOpacity>
                        
                        </View>
                    </View>
            </View>
        )
    }
}

export default LoginPage
