import React, { useState, useEffect} from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'
import ListOfMovies from './ListOfMovies'

function QueryForMovie(props){

    //useEffect(() => console.log(props), [])

    const [search, setSearch] = useState("")

    return (
        <View style={styles.centerView}>

            <Text style = {styles.searchTxt}>Search for a movie</Text>

            <TextInput 
              style={styles.input} 
              onChangeText={search => setSearch(search)} 
              value={search} 
              textAlign={'center'} 
              placeholder="Example 'Spiderman'"
            />

            <ListOfMovies 
              search={search}
              props={props.props}
            />

        </View>)
}

const styles = StyleSheet.create({
    searchTxt: {
      padding: 15,
    },
    input: {
      height: 40,
      width: 250,
      borderWidth: 1,
      alignItems: 'center',
      backgroundColor: '#D0E1D4'
    },
    centerView: {
        alignItems: 'center',
    }
  });

export default QueryForMovie