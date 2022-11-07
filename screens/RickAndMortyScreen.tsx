import {SafeAreaView, StyleSheet, Text, View, Button} from "react-native";
import RickAndMortyApi, {nextPage, previousPage, stuff} from "../api/RickAndMortyApi";
import useApi from "../hooks/useApi";
import React, {useEffect} from "react";



const styles = StyleSheet.create({
    characterId: {fontSize: 24, marginBottom: 20},
    characterName: {fontSize: 24, textTransform: "capitalize", marginBottom: 8},
    characterImage: {width: 240, height: 240}
});


export default function RickAndMortyScreen() {
    const {data: character, loading, error, request: getCharacters} = useApi<stuff>(RickAndMortyApi.getCharacters)

    useEffect(() => {
        getCharacters();
    },[character]);




    return (
        <SafeAreaView>
            <View>
                <div>
                    {character?.results.map((result, index) =>{
                    return (
                        <div key={index}>
                    <Text style={[styles.characterName]}>{`${result.name}`}</Text>
                    <img src={`${result.image}`}></img>
                        </div>
                    )
                })}

                    <Button title="Next"  onPress={() => nextPage()} />
                    <Button title="Previous"  onPress={() => previousPage()} />
                </div>
            </View>
        </SafeAreaView>

    );


}

//<Button title="Prøv igjen" onPress={() => getPokemon(pokemonId)}/>
//character?.results.forEach(function (node) {
//<ActivityIndicator animating={loading} size="large"/>
//let result = [...[character?.results[i].name]];