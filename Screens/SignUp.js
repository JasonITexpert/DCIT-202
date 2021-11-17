import React from "react";
import {View, Text, Image, TextInput, TouchableOpacity} from "react-native";

export default function SignUp({ navigation}){
    return (
        <View style={{backgroundColor:"black", flex:1, alignItems: "center", justifyContent:"center"}}>
            <Text style={{color:"red",marginTop:50,fontStyle:"Italic",fontWeight:"bold",position:"relative"}}>First name</Text>
   <TextInput
   placeholder="Enter your first name"
   placeholderTextColor="lightsalmon"
   style={{borderWidth:1, borderColor: "lightsalmon",fontStyle:"Italic", color:"red", backgroundColor:"white", borderRadius:15, padding:8, width:"70%"}}
   />

            <Text style={{color:"red",marginTop:50,fontStyle:"Italic",fontWeight:"bold",position:"relative"}}>Last name</Text>
   <TextInput
   placeholder="Enter your last name"
   placeholderTextColor="lightsalmon"
   style={{borderWidth:1, borderColor: "lightsalmon",fontStyle:"Italic", color:"red", backgroundColor:"white", borderRadius:15, padding:8, width:"70%"}}
   />

            <Text style={{color:"red",marginTop:50,fontStyle:"Italic",fontWeight:"bold",position:"relative"}}>Username</Text>
   <TextInput
   placeholder="Username or E-mail"
   placeholderTextColor="lightsalmon"
   style={{borderWidth:1, borderColor: "lightsalmon",fontStyle:"Italic", color:"red", backgroundColor:"white", borderRadius:15, padding:8, width:"70%"}}
   />

     <Text style={{color:"red",marginTop:50,fontStyle:"Italic",fontWeight:"bold",position:"relative"}}>Password</Text>
   <TextInput
   placeholder="Enter your password"
   secureTextEntry={true}
   placeholderTextColor="lightsalmon"
   style={{borderWidth:1, borderColor: "lightsalmon",fontStyle:"Italic", color:"red",backgroundColor:"white", borderRadius:15, padding:8, width:"70%"}}
   />

<Text style={{color:"red",marginTop:50,fontStyle:"Italic",fontWeight:"bold",position:"relative"}}>Confirm Password</Text>
   <TextInput
   placeholder="Re-enter your password"
   secureTextEntry={true}
   placeholderTextColor="lightsalmon"
   style={{borderWidth:1, borderColor: "lightsalmon",fontStyle:"Italic", color:"red",backgroundColor:"white", borderRadius:15, padding:8, width:"70%"}}
   />

<TouchableOpacity
    onPress={() =>{
        navigation.navigate("Home")
    }
    }
    
    style={{color:"white", marginTop:15, marginBottom:15,fontFamily:"arial", fontWeight:"bold", fontSize:15, 
    borderColor:"white", borderWidth:1, backgroundColor:"red", borderRadius:15}}>
        SIGN UP
    </TouchableOpacity>

        </View>
    )   
        } 