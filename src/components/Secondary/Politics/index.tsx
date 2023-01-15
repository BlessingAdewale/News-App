import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import { NewsCard } from '@components';

export const Politics = () => {
  const data = [
    {
      id: '1',
      category: 'Art',
      title: 'Van Gogh Alive at Kensington Gardens',
      posted: '1 hr ago',
      uri: 'https://vangoghaliveuk.com/wp-content/uploads/2021/03/van-gogh-alive-london-kensington-gardens.jpg',
      views: '436 views',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },

    {
      id: '2',
      category: 'Education',
      title: 'The enduring value of an English Literature degree',
      posted: '2 hr ago',
      uri: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      views: '455 views',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },

    {
      id: '3',
      category: 'Fashion',
      title: 'The Best Looks From London Fashion Week',
      posted: '1 hr ago',
      uri: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
      views: '281 views',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },

    {
      id: '4',
      category: 'Space',
      title: 'Stargazer captures night sky from Sheffield garden',
      posted: '30 min ago',
      uri: 'https://images.moneycontrol.com/static-mcnews/2022/06/pjimage-2022-06-10T085806.058-770x433.jpg?impolicy=website&width=770&height=431',
      views: '732 views',
      news: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <NewsCard
            title={item.title}
            category={item.category}
            posted={item.posted}
            views={item.views}
            image={item.uri}
          />
        )}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
