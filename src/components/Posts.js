import * as React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {colors} from '../theme/colors';
import {fonts} from '../theme/fonts';

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: 'Header',
      text: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: '8m  ago',
    },
    {
      id: 2,
      title: 'Header',
      text: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: '8m  ago',
    },
    {
      id: 3,
      title: 'Header',
      text: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: '8m  ago',
    },
    {
      id: 4,
      title: 'Header',
      text: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: '8m  ago',
    },
    {
      id: 5,
      title: 'Header',
      text: "He'll want to use your yacht, and I don't want this thing smelling like fish.",
      time: '8m  ago',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <View style={styles.postContainer}>
        <View style={styles.postImage} />
        <View style={styles.postText}>
          <View style={styles.postHeader}>
            <Text style={styles.postTitle}>{item.title}</Text>
            <Text style={styles.postTime}>{item.time}</Text>
          </View>
          <Text style={styles.post}>{item.text}</Text>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 3,
    paddingBottom: 500,
  },
  postContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: 20,
    marginRight: 55,
    marginTop: 15,
  },
  postImage: {
    width: 50,
    height: 50,
    backgroundColor: colors.graytwo,
    borderRadius: 8,
  },
  postText: {
    marginLeft: 16,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.graytwo,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  postTitle: {
    fontSize: 16,
    lineHeight: 19.5,
    fontFamily: fonts.semibold,
    color: colors.black,
  },
  postTime: {
    color: colors.graythree,
    fontFamily: fonts.regular,
    fontSize: 14,
    lineHeight: 17,
  },
  post: {
    fontSize: 14,
    lineHeight: 17,
    color: colors.black,
    fontFamily: fonts.regular,
    marginTop: 6,
  },
});
export default Posts;
