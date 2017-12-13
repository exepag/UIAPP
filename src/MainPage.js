
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from 'react-native';
import axios from 'axios'
import { getToken } from './global/util'


export default class MainPage extends Component {

    componentDidMount () {
        this.fetchToken()
    }

    fetchToken = async () => {
        const Token = await getToken() 
        console.log(Token)
        if (Token) {
            this.props.navigation.navigate('Prod')
        }
    }


    render() {
        const {
            viewContainer,
            btnContainer,
	    txtInsideBtn,
	    btnBottom
        } = Styles

        return (
            <View style={viewContainer}>
                <View style={{marginLeft:40, marginTop:100 }}>
                    <Text style={{fontSize:45, fontWeight:'bold', color:'white' }}>Join</Text>
                    <Text style={{fontSize:45, fontWeight:'bold', color:'white' }}>Our</Text>
                    <Text style={{fontSize:45, fontWeight:'bold', color:'white' }}>Apps Now!</Text>
                    <Text style={{fontSize:20, fontWeight:'bold', color:'black', marginTop:20 }}>*Free Vouchers for registration until end of Dec 2017.</Text>

                </View>

                <View style={btnContainer}>
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Log')} 
                    style={{backgroundColor:'yellow', width:'40%', borderRadius:3}}>
                        <Text style={txtInsideBtn}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={()=> this.props.navigation.navigate('Reg')}
                    style={{marginLeft:25, backgroundColor:'lightgreen', width:'40%', borderRadius:3}}>
                        <Text style={txtInsideBtn}>
                            Register
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    static navigationOptions = {
        header: null
    }
}

const Styles = StyleSheet.create({
	viewContainer: {
		flex:1, 
		backgroundColor:'red'
	},

	btnContainer: {
		marginTop:100, 
		flexDirection:'row', 
		marginLeft:40 
	},

	txtInsideBtn: {
		textAlign:'center', 
		fontSize:20, 
		fontWeight:'500', 
		color:'black', 
		margin:10
	},
 
	btnBottom: {}
 
})




