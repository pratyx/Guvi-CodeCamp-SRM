import React from 'react';
import { ImageBackground, StyleSheet, Text, useWindowDimensions, View,ScrollView,Image } from 'react-native';

export default function Day(){

    const {width:windowWidth, height:windowHeight} = useWindowDimensions();
    return(
      
        <View>
          <View style={{width:windowWidth,height:windowHeight,flex:1}}>
          <ImageBackground source={require('../assets/daytime.png')}
        style={{flex:1}}>
          <ScrollView>
          <View style={{justifyContent:'center',alignItems:'center',marginBottom:50,marginTop:'50%',padding:10,marginLeft:10,marginRight:10}}>
            <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>32° C</Text>
            <Text style={{color:'white',fontSize:22,marginTop:'3%'}}>Noida , UttarPradesh</Text>
            <Text style={{color:'white',fontSize:15}}>Tuesday , 3:00 pm</Text>
          </View>
          <ScrollView horizontal={true}>
            <View style={{flexDirection:'row'}}>
              <View style={{flex:1}}>
              <Image source={require("../assets/cloud.png")} style={styles.forcast_img}  />
              <Text style={styles.forcastdays}>Today</Text>
              <Text style={styles.forcast_desc}>Cloudy</Text>
              <Text style={styles.forcast_desc}>40° 26°</Text>

              </View>
              <View style={{width:120}}>
              <Image source={require("../assets/cloudy-sun.png")} style={styles.forcast_img}  />
              <Text style={styles.forcastdays}>Tues</Text>
              <Text style={styles.forcast_desc}>Sunny</Text>
              <Text style={styles.forcast_desc}>40° 26°</Text>
              </View>
              <View style={{width:120}}>
              <Image source={require("../assets/rainy.png")} style={styles.forcast_img}  />
              <Text style={styles.forcastdays}>Wed</Text>
              <Text style={styles.forcast_desc}>Showers</Text>
              <Text style={styles.forcast_desc}>40° 26°</Text>
              </View>
              <View style={{width:120}}>
              <Image source={require("../assets/cloud.png")} style={styles.forcast_img}  />
              <Text style={styles.forcastdays}>Thus</Text>
              <Text style={styles.forcast_desc}>Cloudy</Text>
              <Text style={styles.forcast_desc}>40° 26°</Text>
              </View>
              <View style={{width:120}}>
              <Image source={require("../assets/cloudy-sun.png")} style={styles.forcast_img}  />
              <Text style={styles.forcastdays}>Fri</Text>
              <Text style={styles.forcast_desc}>Sunny</Text>
              <Text style={styles.forcast_desc}>40° 26°</Text>
              </View>
            
            

            </View>
          
          </ScrollView>
          <View style={{marginBottom:'10%'}}>

          <View style={{flexDirection:'row',marginTop:'30%',padding:10,marginLeft:'5%',marginRight:'5%',justifyContent:'space-between'}}>
            <Text style={styles.text1}>Max Temp</Text>
            <Text style={styles.text2}>40° C</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.text1}>Min Temp</Text>
            <Text style={styles.text2}>26° C</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.text1}>Wind Speed</Text>
            <Text style={styles.text2}>7.3 Km/hr</Text>
          </View> 
          <View style={styles.description}>
            <Text style={styles.text1}>Sunrise</Text>
            <Text style={styles.text2}>6:19 AM</Text>
          </View> 
          <View style={styles.description}>
            <Text style={styles.text1}>Sunset</Text>
            <Text style={styles.text2}>7:08 PM</Text>
          </View> 
          <View style={styles.description}>
            <Text style={styles.text1}>Chances of Rain</Text>
            <Text style={styles.text2}>27%</Text>
    </View>
    
          
          </View>

          </ScrollView>
          
          
          
          </ImageBackground>
          </View>
          
        
      </View>
      

    )

}

const styles = StyleSheet.create({
  text1:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    justifyContent:'flex-start',

  },
  text2:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',
    justifyContent:'flex-end',
  },
  forcastdays:{
    fontSize:18,
    color:'white',
    textAlign:'center',
    fontWeight:'bold'

  },
  description:{
    flexDirection:'row',
   justifyContent:'space-between',
    padding:'2%',
    marginLeft:'5%',
    marginRight:'5%'

  },
  forcast_img:{
    width:80,
    height:80,
    marginRight:20,
    marginLeft:20

  },
  forcast_desc:{
    fontSize:16,
    color:'white',
    textAlign:'center',

  }
})
