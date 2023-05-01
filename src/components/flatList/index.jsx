import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const index = ({ events, onHandlerEvent }) => {
  // const onHandlerEvent = (id) => {
  //   setModalVisible(!modalVisible);
  //   const selectedEvent = events.find((event) => event.id === id);
  //   setSelectedEvent(selectedEvent);
  // };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onHandlerEvent(item.id)}
    >
      <Text style={styles.item}>{item.value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        renderItem={renderItem}
        data={events}
        keyExtractor={(item) => item.id}
        alwaysBounceVertical={false}
      />
    </View>
  );
};

export default index;
