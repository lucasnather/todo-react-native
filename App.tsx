import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { Header } from './src/components/Header';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { Loading } from './src/components/Loading';
import { Main } from './src/components/Main';

export default function App() {

  const [ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  })

  return (
   <>
   
   {
      fontsLoaded ? 
      <View style={styles.container}>
        <Header />
        <Main />
      </View>
      :
      <Loading />
    }
   
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A"
  }
})