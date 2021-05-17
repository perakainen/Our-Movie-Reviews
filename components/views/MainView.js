import React, {useEffect} from 'react'
import { View, StyleSheet, } from 'react-native'
import QueryForMovie from '../QueryForMovie'

function MainView(props){

    //useEffect(() => console.log(props), [])

    return(
        <View style={styles.container}>
            <QueryForMovie props={props}/>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 40,
      backgroundColor: '#9D2F11',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default MainView