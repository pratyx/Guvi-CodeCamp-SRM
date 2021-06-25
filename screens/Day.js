import React,{useState,useEffect} from 'react';
import { ImageBackground, StyleSheet, Text, useWindowDimensions, View,ScrollView,Image,StatusBar } from 'react-native';
import axios from 'axios';




export default function Day({navigation}){

  //console.log(navigation.getParam('city'));
  //const length =navigation.getParam('city').split(',').length;
  
  const city = navigation.getParam('city');
  const state = navigation.getParam('country');
  const temp = navigation.getParam('temprature');
  const time = navigation.getParam('Time');
  var timeperiod='';
  const period = parseInt(time.split(':')[0]);
  if(period<12){
    timeperiod = 'AM';
  }
  else{
    timeperiod = 'PM';

  }
  const maxtemp = navigation.getParam('max');
  const mintemp = navigation.getParam('min');
  const wind = navigation.getParam('windspd');
  const rain = navigation.getParam('rain');
  const sunrise = navigation.getParam('sunrise');
  const sunset = navigation.getParam('sunset');


   const [desc, setdesc] = useState({
    temp:'Loading',
    time:'Loading',
    max_temp:'Loading',
    min_temp:'Loading',
    wind:'Loading',
    Sunrise:'Loading',
    Sunset:'Loading',
    pop:'Loading'
  })

  
  global.check='initial';

 /* useEffect(()=>{
    caller();

  },[])
const caller =()=>{
  axios.get("https://api.weatherbit.io/v2.0/forecast/daily?city="+city+","+state+"&key=c8a42097ee0148de82b6fe4c5e85b6b5")
  .then(info =>{
    global.check = info.data.timezone;

    //console.log(info.data.data[0]);
    axios.get("http://worldtimeapi.org/api/timezone/"+check+".json")
    .then(time=>{
      const dateobj1 = new Date(info.data.data[0].sunrise_ts*1000);
      const dateobj2 = new Date(info.data.data[0].sunset_ts*1000)
      const sr =dateobj1.toLocaleString().slice(11,16);
      const ss =dateobj2.toLocaleString().slice(11,16);
      

      setdesc({
        temp:info.data.data[0].temp,
        time:time.data.datetime.slice(11,16),
        max_temp:info.data.data[0].max_temp,
        min_temp:info.data.data[0].min_temp,
        wind:info.data.data[0].wind_spd,
        pop:info.data.data[0].pop,
        Sunrise:sr,
        Sunset:ss
      })
      //console.log(time);
    })
    .catch(error=>{
      console.log(check);
      console.log('hardik');
    })
    
      //console.log(info.data.timezone)
  })


}*/




    const {width:windowWidth, height:windowHeight} = useWindowDimensions();



    return(    
      

          <View style={{flex:1}}>
            <StatusBar barStyle='light-content'/>
          <ImageBackground source={require('../assets/daytime.png')}
        style={{width:windowWidth,height:windowHeight,alignItems:'center'}}>
          <ScrollView
          showsVerticalScrollIndicator={false}>
          <View style={{justifyContent:'center',alignItems:'center',marginBottom:50,marginTop:'60%',padding:10}}>
            <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>{temp}° C</Text>
            <Text style={{color:'white',fontSize:22,marginTop:'3%'}}>{city} ,{state}</Text>
            <Text style={{color:'white',fontSize:15}}>{time} {timeperiod}</Text>
          </View>
          <ScrollView horizontal={true}
          showsHorizontalScrollIndicator={false}>
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
          <View style={{marginBottom:'20%'}}>

          <View style={{flexDirection:'row',marginTop:'30%',padding:10,marginLeft:'5%',marginRight:'5%',justifyContent:'space-between'}}>
            <Text style={styles.text1}>Max Temp</Text>
            <Text style={styles.text2}>{maxtemp} C</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.text1}>Min Temp</Text>
            <Text style={styles.text2}>{mintemp} C</Text>
          </View>
          <View style={styles.description}>
            <Text style={styles.text1}>Wind Speed</Text>
            <Text style={styles.text2}>{wind} Km/hr</Text>
          </View> 
          <View style={styles.description}>
            <Text style={styles.text1}>Sunrise</Text>
            <Text style={styles.text2}>{sunrise} AM</Text>
          </View> 
          <View style={styles.description}>
            <Text style={styles.text1}>Sunset</Text>
            <Text style={styles.text2}>{sunset} PM</Text>
          </View> 
          <View style={styles.description}>
            <Text style={styles.text1}>Chances of Rain</Text>
            <Text style={styles.text2}>{rain} %</Text>
    </View>
    
          
          </View>

          </ScrollView>
          
          
          
          </ImageBackground>
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
