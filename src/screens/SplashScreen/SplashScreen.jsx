import { StyleSheet, View, Image, Text } from 'react-native';
import splash_bg from "../../../assets/images/splash_screen/jorie_ai.png";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Jorie AI</Text>
      <Image source={splash_bg} style={styles.image} />
      <Text style={styles.subATitleText}>Lorem ipsum dolor sit.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20, // Add padding to give space at the top and bottom
  },
  titleText: {
    color: '#fff',
    marginBottom: 10, // Space between title and image
    fontSize: 40
  },
  image: {
    width: '100%',
    height: '70%', // Reduce height to allow room for text
    resizeMode: 'contain',
  },
  subATitleText: {
    color: "#fff",
    marginTop: 10, // Space between image and subtitle
    fontWeight: "bold"
  }
});

export default SplashScreen;

