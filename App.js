import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

// Requiring all images
const images = [
  require('./assets/image1.png'),
  require('./assets/image2.png'),
  require('./assets/image3.png'),
];

export default function App() {
  const [additionAnswer, setAdditionAnswer] = useState('?');
  const [subtractionAnswer, setSubtractionAnswer] = useState('?');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleAdditionPress = () => {
    setAdditionAnswer(3); // 1 + 2 = 3 
    // Cycle through images when the answer is revealed
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const handleSubtractionPress = () => {
    setSubtractionAnswer(1); // 3 - 2 = 1
    // Cycle through images when the answer is revealed
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  return (
    <ImageBackground source={images[currentImageIndex]} style={styles.backgroundImage}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.header}>Make New Numbers!</Text>
          
          <View style={styles.problemContainer}>
            <Text style={styles.label}>Combine using the +</Text>
            <View style={styles.mathProblem}>
              <Text style={styles.number}>1 + 2 = </Text>
              <TouchableOpacity onPress={handleAdditionPress}>
                <Text style={styles.number}>{additionAnswer}</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={styles.problemContainer}>
            <Text style={styles.label}>Combine using the -</Text>
            <View style={styles.mathProblem}>
              <Text style={styles.number}>3 - 2 = </Text>
              <TouchableOpacity onPress={handleSubtractionPress}>
                <Text style={styles.number}>{subtractionAnswer}</Text>
              </TouchableOpacity>
            </View>
          </View>
          
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 10,
  },
  problemContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 20,
  },
  mathProblem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});
