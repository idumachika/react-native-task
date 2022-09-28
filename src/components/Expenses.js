import * as React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';
import {fonts} from '../theme/fonts';

const Expenses = () => {
  const expenses = [
    {
      id: 1,
      name: 'Item',
      type: 'Statistic',
    },
    {
      id: 2,
      name: 'Item',
      type: 'Statistic',
    },
    {
      id: 3,
      name: 'Item',
      type: 'Statistic',
    },
    {
      id: 4,
      name: 'Item',
      type: 'Statistic',
    },
    {
      id: 5,
      name: 'Item',
      type: 'Statistic',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.list}>
        <View style={styles.listRight}>
          <View style={styles.dot} />
          <Text style={styles.listTitle}>{item.name}</Text>
        </View>
        <Text style={styles.listSub}>{item.type}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={expenses}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.lists}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  lists: {
    paddingBottom: 390,
  },
  list: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
  },
  listRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listTitle: {
    fontFamily: fonts.medium,
    marginLeft: 16,
    fontSize: 16,
    lineHeight: 19.5,
    color: colors.black,
  },
  dot: {
    width: 16,
    height: 16,
    backgroundColor: colors.primary,
    borderRadius: 16 / 2,
  },
  listSub: {
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 17,
    color: colors.black,
    paddingLeft: 8,
  },
});
export default Expenses;
