import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BottomTab from '../components/BottomTab';
import Expenses from '../components/Expenses';
import {colors} from '../theme/colors';
import {fonts} from '../theme/fonts';

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

      <View style={styles.heading}>
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
  heading: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 32,
  },
  insightsContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    // backgroundColor: 'red',
    borderRadius: 200 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amount: {
    color: colors.primary,
    fontFamily: fonts.medium,
    fontSize: 25,
    lineHeight: 29,
  },
  percent: {
    color: '#BDBDBD',
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
