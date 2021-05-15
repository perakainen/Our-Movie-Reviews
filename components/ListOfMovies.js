import React, {useEffect, useState} from 'react'
import { Text, TextInput, View, StyleSheet, FlatList, TouchableHighlight } from 'react-native'

function ListOfMovies(props){

    const [movieList, setMovieList] = useState({
        Search: [],
        totalResults: "",
        Response: ""
    })

    const [searchString, setSearchString] = useState("")
    
    useEffect(() => console.log(movieList), [movieList])
    useEffect(() => console.log(props.search), [props.search])

    const searchMovies = (qstring) =>{
        let querryString = `https://www.omdbapi.com/?s=${qstring}&page=9&apikey=89e86f3e`
        fetch(querryString)
        .then(res => res.json())
        .then(data => setMovieList(data))
        .catch(e => console.log(e))
    }

    const handleSearchString = () =>{

    }



    return (<View>
                <TouchableHighlight onPress={handleSearchString}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Go</Text>
                    </View>
                </TouchableHighlight>
            </View>)
}

const styles = StyleSheet.create({
    button: {
        marginBottom: 30,
        width: 100,
        margin: 8,
        alignItems: 'center',
        backgroundColor: '#2196F3'
      },
      buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'white'
      }
  });


export default ListOfMovies