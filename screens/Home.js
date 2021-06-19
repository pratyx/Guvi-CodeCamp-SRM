import React from 'react';
import { StyleSheet, View,Text} from 'react-native';
import axios from 'axios';


export default function Home(){
    /*const [info,setinfo] = useState({
        name:"load",
        temp:"load",
        humidity:"load",
        date:"load"
    })*/



        axios.get("https://api.weatherbit.io/v2.0/forecast/daily?city=Noida&key=c8a42097ee0148de82b6fe4c5e85b6b5")
        .then(info =>{
            console.log(info.data.data[0])
        })
 //   } 
    
    return(
        <View>
            <Text>Home Screen</Text>
        </View>

    )

}

