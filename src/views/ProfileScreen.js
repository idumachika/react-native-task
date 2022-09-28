/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {
  Image,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomTab from '../components/BottomTab';
import Posts from '../components/Posts';
import {colors} from '../theme/colors';
import {fonts} from '../theme/fonts';

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <StatusBar backgroundColor={colors.primary} />
      <SafeAreaView style={styles.container}>
        <View style={styles.heading}>
          <View style={styles.header}>
            <Pressable onPress={() => navigation.navigate('Insights')}>
              {/* this should be settings. chaged it to insights to navigate to insights page */}
              <Text style={styles.headingTwo}>Insights</Text>
            </Pressable>

            <Text style={styles.headingOne}>Profile</Text>

            <Text style={styles.headingTwo}>Logout</Text>
          </View>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/userimage.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.main}>
          <View style={styles.textHeading}>
            <Text style={styles.title}>Victoria Robertson</Text>
            <Text style={styles.subtitle}>A mantra goes here</Text>
          </View>

          {/* Tab */}
          <View style={styles.tabContainer}>
            <Text
              style={[
                styles.tab,
                {
                  backgroundColor: '#fff',
                  color: colors.primary,
                },
              ]}>
              Posts
            </Text>
            <Text style={styles.tab}>Photos</Text>
          </View>

          <Posts />
        </View>

        <BottomTab />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    backgroundColor: colors.primary,
    height: 230,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingOne: {
    fontFamily: fonts.semibold,
    color: '#fff',
    fontSize: 30,
    lineHeight: 36.5,
  },
  headingTwo: {
    fontFamily: fonts.medium,
    fontSize: 16,
    lineHeight: 19.5,
    color: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 160,
    height: 160,
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 160 / 2,
    marginTop: -120,
  },
  main: {
    // padding: 20,
  },
  textHeading: {
    alignItems: 'center',
    paddingTop: 10,
  },
  title: {
    fontSize: 30,
    fontFamily: fonts.semibold,
    color: colors.black,
    lineHeight: 36.5,
  },
  subtitle: {
    fontFamily: fonts.semibold,
    fontSize: 16,
    lineHeight: 19.5,
    color: colors.black,
    paddingTop: 6,
  },
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    padding: 3,
    marginHorizontal: 20,
    borderRadius: 100,
    marginTop: 24,
  },
  tab: {
    padding: 16,
    width: '50%',
    borderRadius: 100,
    textAlign: 'center',
    fontFamily: fonts.semibold,
    fontSize: 16,
    lineHeight: 19.5,
    color: '#BDBDBD',
  },
});
export default ProfileScreen;
