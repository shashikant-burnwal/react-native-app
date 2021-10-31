import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Colors from '../constants/colors';
import StartGameScreen from './StartGameScreen';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          // source={require('../assets/success.png')}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_1280.jpg',
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>

      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{props.numRounds} </Text> rounds to
          guess the number{' '}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>

      <View style={styles.buttonContainer}>
        <MainButton onPress={props.configureNewGame}>Play Again</MainButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: 10,
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  resultContainer: {
    marginHorizontal: 40,
    marginVertical: 15,
  },

  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },

  highlight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
});

export default GameOverScreen;
