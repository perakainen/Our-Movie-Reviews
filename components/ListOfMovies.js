import React, { useEffect, useState} from 'react'
import { Text, View, StyleSheet, FlatList, TouchableHighlight, } from 'react-native'


function ListOfMovies(props){

    //Deconstruct nested props
    const {navigation} = props.props

    const [movieList, setMovieList] = useState({
        Search: [],
        totalResults: "",
        Response: ""
    })
    
    const searchMovies = (querry) => {

        //Only for demo, as api-key is visible
        let querryString = `https://www.omdbapi.com/?s=${querry}&apikey=89e86f3e`
        fetch(querryString)
        .then(res => res.json())
        .then(data => setMovieList(data))
        .catch(e => console.log(`Error while fetching: ${e}`))
    }

    const handleSearchString = (qstring) => {

        if(qstring.length != 0){

            //Create array for user-input
            let uncutArray = qstring.split(" ")
            let urlStringUnready = ""
            let querry = ""

            // concat url array to string
            for (const phrase of uncutArray) {

                urlStringUnready += phrase + "+"

                //Dev use
                //console.log("Loop: " + urlStringUnready)
            }

            //Cut last '+ -sign'
            querry = urlStringUnready.slice(0, urlStringUnready.length -1)

            //Dev use
            //console.log(querry)

            searchMovies(querry)
        }

        else {
            setMovieList({
                        Search: [],
                        totalResults: "",
                        Response: ""
                        })
        }
        
    }

    const RenderFlatList = () => {

        if(movieList.Response === 'True'){

            // Tee touchableHighLight Loppuun
            return (<View style= {styles.itemWrapper}>
                        <View>
                            <FlatList 
                            persistentScrollbar={true}
                            data={movieList.Search}
                            keyExtractor={(item, index) => index.toString()}

                            renderItem={({ item }) => (

                                <TouchableHighlight onPress={() => navigation.navigate('DetailMovieView', {item}) }>

                                    <View>
                                        <Text style={styles.item}>
                                            {item.Title}
                                        </Text>
                                    </View>

                                </TouchableHighlight>

                                )}
                            />
                        </View>

                        <View style={styles.total}>
                            <Text>Total results: {movieList.totalResults}</Text>
                        </View>

                    </View>)
        }
        
        else {
            return (<Text>Start by Searching!</Text>)
        }
        
    }

    return (<View style={styles.view}>

                <TouchableHighlight onPress={() => handleSearchString(props.search)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Go</Text>
                    </View>
                </TouchableHighlight>

                <View >
                    <RenderFlatList/>
                </View>
                
            </View>)
}

const styles = StyleSheet.create({

    total: {
        backgroundColor: 'grey',
        color: 'red',
        paddingHorizontal: 140,
        paddingVertical: 5,
        alignContent: 'center',
    },
    itemWrapper: {
        backgroundColor: '#FFB806',
        width: 'auto',
        height: 250
    },
    item: {
        padding: 20,
        color: 'black',
        borderWidth: 1,
    },
    view: {
        alignItems: 'center',
    },
    button: {
        marginBottom: 30,
        width: 100,
        margin: 8,
        alignItems: 'center',
        backgroundColor: '#4E3100'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'yellow'
    },
    
  });


export default ListOfMovies