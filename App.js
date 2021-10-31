import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  //This state variable is to store user input value
  const [userNumber, setUserNumber] = useState();
  //This state variable is to store number of rounds took to guess the value
  const [guessRounds, setGuessRounds] = useState(0);

  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numOfRounds) => {
    setGuessRounds(numOfRounds);
  };

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {/*The logic below is to which screen to open
      if user has not given valid input then it will be stayingon StartGameScree
    if user has given valid input and guessRound is 0 then it wil be on GameScree
  if guessRound greaterthan 0 then GameOverScreen will be displayed */}

      {userNumber ? (
        guessRounds <= 0 ? (
          <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
        ) : (
          <GameOverScreen
            numRounds={guessRounds}
            userNumber={userNumber}
            configureNewGame={configureNewGameHandler}
          />
        )
      ) : (
        <StartGameScreen onStartGame={startGameHandler} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
