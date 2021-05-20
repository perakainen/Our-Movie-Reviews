import React from 'react'
import { View, StyleSheet, TouchableHighlight, Text, } from 'react-native'
import QueryForMovie from '../components/QueryForMovie'

function MainView(props){

    return(
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>
                OUR MOVIE REVIEWS
            </Text>
          </View>
            <View>
              <QueryForMovie props={props}/>
            </View>
        
              <TouchableHighlight onPress={() => props.navigation.navigate('MyReviews') }>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>
                    My Reviews
                  </Text>
                </View>
              </TouchableHighlight>
        </View>
    )   
}

const styles = StyleSheet.create({
    title:{
      fontSize: 35,
      color: 'yellow',
    },
    container: {
      flex: 1,
      paddingTop: 40,
      backgroundColor: '#9D2F11',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      marginBottom: 30,
      marginTop:30,
      width: 175,
      margin: 8,
      alignItems: 'center',
      backgroundColor: '#4E3100'
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'yellow'
    },
  })

export default MainView