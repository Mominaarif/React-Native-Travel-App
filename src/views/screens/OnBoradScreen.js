import React from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../constants/colors';

const OnBoardScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0)" />
      <ImageBackground
        style={{flex: 1}}
        source={require('../../assets/th9.jpg')}>
        <View style={styles.details}>
          <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>
            Discover
          </Text>
          <Text style={{color: COLORS.white, fontSize: 35, fontWeight: 'bold'}}>
            world with us
          </Text>
          <Text style={{color: COLORS.white, lineHeight: 25, marginTop: 15}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            pariatur.
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('HomeScreen')}>
            <View style={styles.btn}>
              <Text style={{fontWeight: 'bold'}}>Get Started</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  details: {
    height: '50%',
    bottom: 0,
    paddingHorizontal: 40,
    position: 'absolute',
  },
  btn: {
    height: 50,
    width: 120,
    marginTop: 20,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default OnBoardScreen;
