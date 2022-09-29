/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {Circle} from 'react-native-svg';
import BottomTab from '../components/BottomTab';
import Expenses from '../components/Expenses';
import {colors} from '../theme/colors';
import {fonts} from '../theme/fonts';

let size = 100;
let percentage = 0.65;
let radius = size - 5;
let circle_length = 2 * Math.PI * radius;
let svgProgress = 100 * percentage;
console.log(circle_length * svgProgress);

const InsightsScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable style={styles.closeBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.headingTwo}>Back</Text>
        </Pressable>

        <Text style={styles.headingOne}>Insights</Text>
        <Text style={styles.headingOne} />
      </View>
      {/* <Text>Insights</Text> */}

      {/* progress bar */}
      <View style={styles.progressContainer}>
        <Svg
          style={{
            alignItems: 'center',
            transform: [
              {rotateZ: '90deg'},
              {rotateX: '0deg'},
              {rotateY: '180deg'},
            ],
          }}>
          <Circle
            cx={size}
            cy={size}
            r={size - 5}
            stroke="grey"
            strokeWidth="2.5"
            strokeDasharray={circle_length}
            strokeDashoffset={0}
          />
          <Circle
            cx={size}
            cy={size}
            r={size - 5}
            stroke={colors.primary}
            strokeWidth="4"
            strokeDashoffset={circle_length * (svgProgress - percentage)}
            strokeDasharray={circle_length}
            strokeLinecap="round"
          />
        </Svg>
        <View style={styles.insightsContainer}>
          <Text style={styles.amount}>$32.01</Text>
          <Text style={styles.percent}>70% spent</Text>
        </View>
      </View>

      <View style={styles.expensesContainer}>
        <Text style={styles.title}>Expenses</Text>

        <Expenses />
      </View>

      <BottomTab />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingOne: {
    fontFamily: fonts.semibold,
    color: colors.black,
    fontSize: 30,
    lineHeight: 36.5,
  },
  headingTwo: {
    fontFamily: fonts.medium,
    fontSize: 16,
    lineHeight: 19.5,
    color: colors.primary,
  },
  progressContainer: {
    justifyContent: 'center',
    height: size * 2,
    width: size * 2,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 32,
  },
  insightsContainer: {
    position: 'absolute',
    alignItems: 'center',
  },
  amount: {
    color: colors.primary,
    fontFamily: fonts.medium,
    fontSize: 25,
    lineHeight: 29,
  },
  percent: {
    color: colors.graythree,
    fontFamily: fonts.regular,
    fontSize: 11,
    lineHeight: 12,
    paddingTop: 8,
  },
  expensesContainer: {
    marginTop: 32,
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: 24,
    color: colors.black,
    paddingBottom: 15,
  },
});
export default InsightsScreen;
