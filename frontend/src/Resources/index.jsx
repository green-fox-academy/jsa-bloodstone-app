import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View, Text, StyleSheet,
} from 'react-native';

import ResourceItem from './ResourceItem';
import { fetchResources } from './actionCreator';
import ErrorPopup from '../ErrorPopup';

const styles = StyleSheet.create({
  headerStyle: {
    marginTop: 12,
    paddingHorizontal: 10,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

function Resources() {
  const dispatch = useDispatch();
  const { foodAmount, foodGeneration } = useSelector((state) => state.resources);
  const { goldAmount, goldGeneration } = useSelector((state) => state.resources);
  const error = useSelector((state) => state.resources.error);

  useEffect(() => {
    dispatch(fetchResources());
    const updateResourcesInterval = setInterval(() => dispatch(fetchResources()), 60000);
    return () => clearInterval(updateResourcesInterval);
  }, []);

  if (error) {
    return <ErrorPopup message={`Oops, ${error.message}`} />;
  }

  return (
    <View>
      <Text style={styles.headerStyle}>Resources</Text>
      <ResourceItem type="gold" amount={goldAmount} rate={goldGeneration} />
      <ResourceItem type="cookie" amount={foodAmount} rate={foodGeneration} />
    </View>
  );
}

export default Resources;
