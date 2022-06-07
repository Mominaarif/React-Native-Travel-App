import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../constants/colors';
const DetailsScreen = ({navigation, route}) => {
  const place = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
      <ImageBackground source={place.image} style={{flex: 0.7}}>
        <View style={styles.header}>
          <Icon
            name="arrow-back-ios"
            size={28}
            color={COLORS.white}
            onPress={navigation.goBack}
          />
          <Icon name="more-vert" size={28} color={COLORS.white} />
        </View>
        <View style={styles.imageDetail}>
          <Text
            style={{
              fontSize: 30,
              color: COLORS.white,
              marginBottom: 20,
              fontWeight: 'bold',
            }}>
            {place.name}
          </Text>
          <View style={{flexDirection: 'row', top: 6}}>
            <Icon name="star" size={30} color={COLORS.orange} />
            <Text
              style={{
                color: COLORS.white,
                fontWeight: 'bold',
                fontSize: 20,
                top: 3,
                left: 3,
              }}>
              5.0
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.containerDetail}>
        <View style={styles.iconContainer}>
          <Icon name="favorite" size={30} color={COLORS.red} />
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icon name="place" size={28} color={COLORS.primary} />
          <Text
            style={{
              color: COLORS.primary,
              fontSize: 20,
              marginLeft: 5,
              fontWeight: 'bold',
            }}>
            {place.location}
          </Text>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 20}}>
          About the trip
        </Text>
        <Text style={{marginTop: 20, lineHeight: 22}}>{place.detail}</Text>
      </View>
      <View style={styles.footer}>
        <View style={{flex: 1, alignContent: 'center', flexDirection: 'row'}}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 18,
              fontWeight: 'bold',
              marginTop: 22,
            }}>
            $100
          </Text>
          <Text
            style={{
              color: COLORS.grey,
              fontSize: 10,
              marginLeft: 5,
              fontWeight: 'bold',
              marginTop: 28,
            }}>
            / PER DAY
          </Text>
        </View>
        <View style={styles.bookNowBtn}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
              color: COLORS.primary,
              marginLeft: 35,
            }}>
            Book Now
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  imageDetail: {
    position: 'absolute',
    bottom: 30,
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  containerDetail: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    top: -30,
    backgroundColor: COLORS.white,
    flex: 0.3,
  },
  iconContainer: {
    height: 60,
    width: 60,
    position: 'absolute',
    top: -30,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    right: 20,
    elevation: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 20,
  },
  bookNowBtn: {
    height: 50,
    width: 150,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    top: 9,
  },
});

export default DetailsScreen;
