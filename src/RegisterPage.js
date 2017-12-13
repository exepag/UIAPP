import React, {Component} from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'
import axios from 'axios'
import { BASE_API_URL } from './global/util'


class RegisterPage extends Component {
    state = {
        email: '',
        password: '',
        messageSuccess: '',
        messageError: ''
    }

    registerClickHandler(){
    console.log(this.state.email, this.state.password)
        
        // const {email, password} = this.state //ES6 Destructuring

        if (this.state.email !== '' && this.state.password !== '') {
        console.log('masuk func registerClickHandler')
            const dataPayloads = {
                "email": this.state.email,
                "password": this.state.password
            }
            
                                    //endpoint, param
            axios.post(BASE_API_URL + '/Users', dataPayloads)
                
                .then(res => {
                console.log(res)
                    this.setState({
                        messageSuccess: 'Congratulations, you are successfully registered!'
                    })
                })
                
                .catch(err => {
                console.log(err)
                    this.setState({
                        messageError: 'Sorry, you\'re registration failed! Please try again!'
                    })
                })
        }  
    }

    render () {
        
        return (
            
            <View style={{flex:1, backgroundColor:'lightgreen'}}>
                <Text style={{fontSize:25, fontWeight:'bold', color:'black', marginTop:20, marginLeft:50 }}>
                    Registration Form
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
                
                <View style={{marginTop:130, marginLeft:50}}>
                    
                    <TextInput placeholder="Email" style={{width:'70%'}} 
                    onChangeText={ (text) => this.setState({email:text}) } returnKeyType={'next'} />
                    
                    <TextInput placeholder="Password" style={{width:'70%'}} 
                    onChangeText={ (text) => this.setState({password:text}) } secureTextEntry={true} /> 

                </View>
                
                <View style={{flex:1, backgroundColor:'lightblue', marginTop:120}}>
                    
                    <View style={{flexDirection:'row', marginTop:50, marginLeft:40}}>

                        <TouchableOpacity style={{backgroundColor:'green', width:'40%', borderRadius:3}} 
                        onPress={ () => this.registerClickHandler() }>
                            <Text style={{textAlign:'center', fontSize:20, fontWeight:'500', color:'white', margin:10}}>
                                Register
                            </Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={{marginLeft:25, backgroundColor:'grey', width:'40%', borderRadius:3}}
                        >
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

export default RegisterPage
