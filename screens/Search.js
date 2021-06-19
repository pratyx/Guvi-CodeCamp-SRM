import React,{useState} from 'react';
import { StyleSheet, View,TextInput,FlatList,Text,TouchableOpacity,Image } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';


export default function Search(){
    const [city,setCity] = useState('');
    const [cities,setCities] = useState([]);
    const fetchCities = (val) => {
        setCity(val);
        console.log(val);
        if(val.length==0){
            val=val;
        }
        else{
            axios.get("https://api.weather.com/v3/location/search?apiKey=6532d6454b8aa370768e63d6ba5a832e&language=en-US&query="+val+"&locationType=city&format=json")
        .then(data=>{
            setCities(data.data.location.address.slice(0,7))
            })
        }
        

    }
  
    
    return(
        <View style={{marginTop:'8%'}}>
            <TextInput
                style={styles.input}
                placeholder='Enter Location'
                onChangeText={(val)=> fetchCities(val)} />
            
            <FlatList
            data={cities}
            renderItem={({item})=>{
                return(
                    <TouchableOpacity>
                    <Card 
                    style={{margin:2,padding:12,justifyContent:'center',alignItems: 'center',width:300}}>
                        
                            <Text>{item.split(',')}</Text>
                        
                        
                    </Card>
                    </TouchableOpacity>

                )
            }}
            keyExtractor={item=>item}
        />

            
                
            
        </View>

    );
}

const styles = StyleSheet.create({

    input:{
        marginTop: 30,
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        padding:10,
        borderWidth:1,
        borderColor:'#777',
        width:300,
    },

});
