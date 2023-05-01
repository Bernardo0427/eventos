import { Input, MyFlatList, MyModal } from './components/index';

import { View } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [text, setText] = useState('');
  const [events, setEvents] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const onAddEvent = () => {
    if (text.length === 0) return;
    setEvents([
      ...events,
      {
        id: Math.random().toString(),
        value: text,
      },
    ]);
    setText('');
  };

  const onHandlerEvent = (id) => {
    setModalVisible(!modalVisible);
    const selectedEvent = events.find((event) => event.id === id);
    setSelectedEvent(selectedEvent);
  };

  const onHandlerCancelModal = () => {
    setModalVisible(!modalVisible);
    setSelectedEvent(null);
  };

  const onHandlerDeleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      <Input
        buttonColor="#52528C"
        buttonTitle="Add"
        onChangeText={(text) => setText(text)}
        onHandlerButton={onAddEvent}
        placeholder="Enter your event"
        value={text}
      />

      <MyFlatList events={events} onHandlerEvent={onHandlerEvent} />

      <MyModal
        modalVisible={modalVisible}
        textMessage="Are you sure to delete this item?"
        selectedEvent={selectedEvent}
        onHandlerCancelModal={onHandlerCancelModal}
        onHandlerDeleteEvent={onHandlerDeleteEvent}
      />
    </View>
  );
}
