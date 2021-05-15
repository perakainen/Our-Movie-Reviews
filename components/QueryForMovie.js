import React, {useEffect, useState} from 'react'
import { Text, TextInput, View, StyleSheet, Button } from 'react-native'
import ListOfMovies from './ListOfMovies'

function QueryForMovie(){

    const [search, setSearch] = useState("")

    return (
        <View style={styles.centerView}>
            <Text >Search for a movie</Text> 
            <TextInput style={styles.input} onChangeText={search => setSearch(search)} value={search} textAlign={'center'} placeholder="Example 'Spiderman'"/>
            <ListOfMovies search={search}/>
        </View>)
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      width: 250,
      borderWidth: 1,
      alignItems: 'center'
    },
    centerView: {
        alignItems: 'center'
    }
  });

export default QueryForMovie