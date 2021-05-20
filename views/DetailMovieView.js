import React, { useEffect, useState} from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TextInput, TouchableHighlight } from 'react-native'
import * as firebase from 'firebase'
import * as Haptics from 'expo-haptics'

function DetailMovieView(props){

    //Deconstruct item from props
    const {item} = props.route.params

    const [reviewRating, setReviewRating] = useState('')
    const [reviewText, setReviewText] = useState('')

    const [movieDetail, setMovieDetail] = useState({
        Title: '',
        Year: '',
        Rated: '',
        Released: '',
        Runtime: '',
        Genre: '',
        Director: '',
        Writer: '',
        Actors: '',
        Plot:'',
        Language: '',
        Awards: '',
        Poster: '',
        Ratings: [],
        Metascore: '',
        imdbRating:'',
        imdbVotes: '',
        imdbID: '',
        Type: '',
        DVD: '',
        BoxOffice: '',
        Production: '',
        Website: '',
        Response: '',
        Metascore: '',
    })

    const searchByIdMovies = (querry) => {
        
        //Only for demo, as api-key is visible
        let querryString = `https://www.omdbapi.com/?i=${querry}&apikey=89e86f3e`
        fetch(querryString)
        .then(res => res.json())
        .then(data => setMovieDetail(data))
        .catch(e => console.log(`Error while fetching: ${e}`))
    }

    const currentRev = () => {
        firebase.database().ref('reviews/' + item.imdbID).once('value', snapshot => {
            if(snapshot.exists()){
            const data = snapshot.val()
            const review = Object.values(data)
            setReviewText(review[review.length-1])
            }
        })
    }
    
    const saveItem = () => {
            firebase.database().ref('reviews/' + movieDetail.imdbID).set(
                {'Title': movieDetail.Title, 'review': reviewText, 'rating': reviewRating, 'imdbID' : movieDetail.imdbID }
            )
    }

    useEffect(() => searchByIdMovies(item.imdbID), [])
    useEffect(() => currentRev(), [])
    //Dev log
    // useEffect(() => console.log(movieDetail), [movieDetail])
    // useEffect(() => console.log(reviewText), [reviewText])
    
    return(
            <ScrollView style={styles.container}>

                <View style={styles.centerView}>
                    <Text>
                        Title: {movieDetail.Title}
                    </Text>
                    <Text>
                        Year: {movieDetail.Year}
                    </Text>
                    <Text>
                        Rated: {movieDetail.Rated}
                    </Text>
                    <Text>
                        Released: {movieDetail.Released}
                    </Text>
                    <Text>
                        Runtime: {movieDetail.Runtime}
                    </Text>
                    <Text>
                        Genre: {movieDetail.Genre}
                    </Text>
                    <Text>
                        Director: {movieDetail.Director}
                    </Text>
                    <Text>
                        Writer: {movieDetail.Writer}
                    </Text>
                    <Text>
                        Actors: {movieDetail.Actors}
                    </Text>
                    <Text>
                        Plot: {movieDetail.Plot}
                    </Text>
                    <Text>
                        Language: {movieDetail.Language}
                    </Text>
                    <Text>
                        Country: {movieDetail.Country}
                    </Text>
                    <Text>
                        Awards: {movieDetail.Awards}
                    </Text>
                    <Text>
                        Metascore: {movieDetail.Metascore}
                    </Text>
                    <Text>
                        imdbRating: {movieDetail.imdbRating}
                    </Text>
                    <Text>
                        IMDB Votes: {movieDetail.imdbVotes}
                    </Text>
                    <Text>
                        IMDB ID: {movieDetail.imdbID}
                    </Text>
                    <Text>
                        Type: {movieDetail.Type}
                    </Text>
                    <Text>
                        DVD: {movieDetail.DVD}
                    </Text>
                    <Text>
                        Box Office: {movieDetail.BoxOffice}
                    </Text>
                    <Text>
                        Production: {movieDetail.Production}
                    </Text>
                    <Text>
                        Website: {movieDetail.Website}
                    </Text>
                    <Text>
                        Poster:
                    </Text>
                </View>

                    <View>
                        <Image style={styles.logo} source={{uri: movieDetail.Poster ? movieDetail.Poster : null}} />
                    </View>

                    <View style={styles.centerView}>
                        <Text style={styles.innerTitle}>
                            Write a review
                        </Text>
                        <TextInput
                            style={styles.input}
                            multiline={true}
                            value={reviewText}
                            onChangeText={reviewText => setReviewText(reviewText)}
                        />

                    </View>

                    <View style= {styles.view}>
                        <TouchableHighlight style={styles.button} onPress={saveItem}>
                            <Text> Save Review</Text>
                        </TouchableHighlight>
                    </View>
                        
                
            </ScrollView>
            )
}

const styles = StyleSheet.create({

    innerTitle:{
        padding: 8,
    },
    input: {
        width:250,
        height:100,
        borderWidth: 1,
        backgroundColor: '#D0E1D4',
        padding: 15,
    },
    centerView: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        flex: 1,
        resizeMode: 'contain',
        aspectRatio: 0.845,
    },
    container: {
        flex:1,
        backgroundColor: '#9D2F11',
    },
    view: {
        alignItems: 'center',
    },
    button: {
        paddingTop: 30,
        paddingBottom:40,
        width: 250,
        height: 25,
        margin: 8,
        alignItems: 'center',
        backgroundColor: '#BE3E82'
    },
    buttonText: {
        textAlign: 'center',
        padding: 20,
        color: 'yellow'
    },
    
  });

export default DetailMovieView