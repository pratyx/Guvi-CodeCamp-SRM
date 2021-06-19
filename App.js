import React from 'react';
import { StyleSheet, View,ScrollView ,FlatList} from 'react-native';
import Search from './screens/Search';
import Home from './screens/Home';
import Day from './screens/Day';

export default function App() {

    return (

        <View style={styles.container}> 
          <Day />
        </View>

  





    

 
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

});
