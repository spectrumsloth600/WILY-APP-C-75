import React from 'react';
import { Text, View, FlatList, StyleSheet, TextInput, TouchableOpacity,Image,Alert,KeyboardAvoidingView} from 'react-native';
import * as firebase from 'firebase' 

export default class LoginScreen extends React.Component
{
    constructor()
        {
            super();
            this.state = {
                emailId:'',
                password:''
            }
        }

        login=async(email,password)=>{
            if(email&&password){
                try{
                    const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                    if(response){
                        this.props.navigation.navigate('Transaciton')
                    }
                }
                catch(error){
                    switch(error.code){
                        case 'auth/user-not-found':
                            Alert.alert("User doesn't exist")
                            break
                            case  'auth/invalid-email':
                            Alert.alert("Incorrect email or password")
                            break 
                    }
                }

            }
            else{
                Alert.alert(" Enter EmailId and Password")
            }
        }
    render(){
        return(
            <KeyboardAvoidingView style={{alignItems:'center',marginTop:20}}>
                <View>
                    <Image
                    source={require("../assets/booklogo.jpg")}
                    style={{width:200,height:200}}></Image>
                    <Text style={{textAlign:'center',
                fontSize:30}}>Wily App</Text>
                </View>
                <View>
                <TextInput
                
                style={styles.loginBox}
                placeholder="abc@example.com"
                onChangeText={(text)=>{
                    this.setState({
                        emailId:text
                    })
                }}>

                </TextInput>
                
                    <TextInput
                style={styles.loginBox}
                secureTextEntry={true}
                placeholder="enter password"
                onChangeText={(text)=>{
                    this.setState({
                        password:text
                    })
                }}>

                </TextInput>
                </View>
                <TouchableOpacity style={{height:30,width:90,borderWidth:1,margineTop:20,paddingTop:5,borderRadius:7}}
                onPress={()=>{this.login(this.state.emailId,this.state.password)}}>
                    <Text style={{textAlign:'center'}}>Login</Text>
                </TouchableOpacity>
                
            </KeyboardAvoidingView>
        )
    }
}
