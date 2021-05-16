import React, {useEffect, useState} from 'react'
import { Text, TextInput, View, StyleSheet, FlatList, TouchableHighlight } from 'react-native'

function ListOfMovies(props){

    const [movieList, setMovieList] = useState({
        Search: [],
        totalResults: "",
        Response: ""
    })
    
    //Dev use
    useEffect(() => console.log(movieList), [movieList])
    useEffect(() => console.log(props.search), [props.search])

    const searchMovies = (querry) => {

        //Only for demo, as api-key is visible
        let querryString = `https://www.omdbapi.com/?s=${querry}&apikey=89e86f3e`
        fetch(querryString)
        .then(res => res.json())
        .then(data => setMovieList(data))
        //Dev use
        .then(console.log(querryString))
        .catch(e => console.log(e))
    }

    const handleSearchString = (qstring) => {

        //Create array for user-input
        let uncutArray = qstring.split(" ")
        let urlStringUnready = ""
        let querry = ""

        //Trim array for url
        for (const phrase of uncutArray) {

            urlStringUnready += phrase + "+"

            //Dev use
            console.log("Loop: " + urlStringUnready)
        }

        //Cut last '+ -sign'
        querry = urlStringUnready.slice(0, urlStringUnready.length -1)

        //Dev use
        console.log(querry)

        searchMovies(querry)
    }



    return (<View>
                <TouchableHighlight onPress={() => handleSearchString(props.search)}>
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