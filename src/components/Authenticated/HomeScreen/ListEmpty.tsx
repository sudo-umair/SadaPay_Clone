import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ListEmpty = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No Transactions Found</Text>
    </View>
  );
};

export default ListEmpty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
  },
});
