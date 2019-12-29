import React from 'react';
import {
  ScrollView, SafeAreaView,
} from 'react-native';
import styles from '../common/styles';
import Resources from '../Resources';

function DrawerContent() {
  return (
    <ScrollView>
      <SafeAreaView style={[styles.container, { paddingHorizontal: 0 }]}>
        <Resources />
      </SafeAreaView>
    </ScrollView>
  );
}

export default DrawerContent;
