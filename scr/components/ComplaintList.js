import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { updateComplaintStatus, deleteComplaint } from '../reducers/complaintReducer';

const ComplaintList = () => {
  const complaints = useSelector(state => state.complaints.complaintsList);
  const dispatch = useDispatch();

  const renderComplaint = ({ item }) => (
    <View style={styles.complaintItem}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text>{item.description}</Text>
        <Text style={styles.timestamp}>
          {new Date(item.timestamp).toLocaleString()}
        </Text>
        <Text>Статус: {item.status === 'pending' ? 'Очікує' : 'Вирішено'}</Text>
      </View>
      <View style={styles.actions}>
        {item.status === 'pending' && (
          <Button
            title="Позначити вирішеним"
            onPress={() => dispatch(updateComplaintStatus({ id: item.id, status: 'resolved' }))}
          />
        )}
        <Button title="Видалити" onPress={() => dispatch(deleteComplaint(item.id))} color="red" />
      </View>
    </View>
  );

  return (
    <FlatList
      data={complaints}
      renderItem={renderComplaint}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={<Text>На диво, ніхто ще не жалівся</Text>}
    />
  );
};

const styles = StyleSheet.create({
  complaintItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  actions: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default ComplaintList;
