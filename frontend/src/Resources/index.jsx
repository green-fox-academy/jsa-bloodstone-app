import React from 'react';
import { useSelector } from 'react-redux';
import { View } from 'react-native';

import ResourceItem from './ResourceItem';
import ErrorPopup from '../ErrorPopup';

function Resources() {
  const { foodAmount, foodGeneration } = useSelector((state) => state.resources);
  const { goldAmount, goldGeneration } = useSelector((state) => state.resources);
  const error = useSelector((state) => state.resources.error);

  if (error) {
    return <ErrorPopup message={`Oops, ${error.message}`} />;
  }

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
      <ResourceItem type="cookie" amount={foodAmount} rate={foodGeneration} />
      <ResourceItem type="gold" amount={goldAmount} rate={goldGeneration} />
    </View>
  );
}

export default Resources;
