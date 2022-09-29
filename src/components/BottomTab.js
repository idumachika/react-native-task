/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../theme/colors';

const BottomTab = () => {
  const navigators = [
    {
      id: 1,
      active: true,
    },
    {
      id: 2,
      active: false,
    },
    {
      id: 3,
      active: false,
    },
    {
      id: 4,
      active: false,
    },
    {
      id: 5,
      active: false,
    },
  ];
  return (
    <View style={styles.navigation}>
      {navigators.map(nav => (
        <View
          style={[
            styles.navigator,
            {
              backgroundColor: nav.active ? colors.primary : colors.graytwo,
            },
          ]}
          key={nav.id}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  navigation: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FAFAFA',
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#BDC5CD',
  },
  navigator: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
  },
});
export default BottomTab;
