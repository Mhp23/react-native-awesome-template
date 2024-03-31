import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  Text,
  TextStyle,
  ViewStyle,
  StatusBar,
  SafeAreaView,
  useColorScheme,
} from 'react-native';

const App: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: ViewStyle = {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const textStyle: TextStyle = {
    color: isDarkMode ? Colors.lighter : Colors.darker,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        backgroundColor={backgroundStyle.backgroundColor}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Text style={textStyle}>
        Open up `src/App.tsx` to start working on your app!
      </Text>
    </SafeAreaView>
  );
};

export default App;
