import React from "react";
import {View, Text, Image, TextInput, TouchableOpacity} from "react-native";

export default function Login({ navigation}){
    return (   
    
     <View style={{ flex: 1, alignItems: 'center', justifyContent: "center", backgroundColor:"black" }}>
         <Image
         style={{ 
             width: 150, 
             height:150,
             
             borderRadius:10,
            marginBottom: 25}}
         source={{uri: "data:image/jpeg;base64,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"
        }}
         />
         <Text style= {{color: "white", fontWeight:"100", fontStyle:"Italic", fontSize:16, fontWeight:"bold"}}> Home of</Text>
         <Text style= {{dolor: "white", fontSize: 20, backgroundColor: "#e3e3e3", fontWeight:"650",fontStyle:"Italic",padding:5,borderRadius:5 }}>Exotic Shirts</Text>
    
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

   <View style={{flexDirection: "row", marginTop:20, }}>
       <Text style={{fontFamily:"arial", fontWeight:"bold", fontSize:15, color:"white"}}>
            NEW USER? CREATE AN   
        </Text> 
    
    <TouchableOpacity
    onPress={() =>{
        navigation.navigate("SignUp")
    }
    }
    
    style={{color:"red", marginLeft:8, fontFamily:"arial", fontWeight:"bold", fontSize:15}}>
        ACCOUNT
    </TouchableOpacity>
    </View>



     </View>



    );
}

  