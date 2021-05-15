import React, {useEffect, useState} from 'react'
import { Text, TextInput, View, StyleSheet } from 'react-native'

function QueryForMovie(){

    const [movieList, setMovieList] = useState({
        Search: [],
        totalResults: "",
        Response: ""
    })
    
    const [search, setSearch] = useState("")
    
    useEffect(() => console.log(movieList), [movieList])
    useEffect(() => console.log(search), [search])

    return (
        <View style={styles.centerView}>
            <Text >Search for a movie</Text> 
            <TextInput style={styles.input} onChangeText={search => setSearch(search)} value={search} textAlign={'center'} placeholder="Example 'Spiderman'"/>

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