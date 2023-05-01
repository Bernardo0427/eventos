import { Button, Modal, Text, View } from 'react-native';

import React from 'react';
import { styles } from './styles';

const index = ({
  modalVisible,
  textMessage,
  selectedEvent,
  onHandlerCancelModal,
  onHandlerDeleteEvent,
}) => {
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Event Detail</Text>
        <View style={styles.modalDetailContainer}>
          <Text style={styles.modalDetailMessage}>{textMessage}</Text>
          <Text style={styles.selectedEvent}>{selectedEvent?.value}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Cancel"
            color="#52528C"
            onPress={() => onHandlerCancelModal()}
          />
          <Button
            title="Delete"
            color="#52528C"
            onPress={() => onHandlerDeleteEvent(selectedEvent.id)}
          />
        </View>
      </View>
    </Modal>
  );
};

export default index;
