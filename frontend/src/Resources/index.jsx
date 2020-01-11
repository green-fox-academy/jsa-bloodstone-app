import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View } from 'react-native';

import ResourceItem from './ResourceItem';
import { fetchResources } from './actionCreator';
import ErrorPopup from '../ErrorPopup';

function Resources() {
  const dispatch = useDispatch();
  const { foodAmount, foodGeneration } = useSelector((state) => state.resources);
  const { goldAmount, goldGeneration } = useSelector((state) => state.resources);
  const error = useSelector((state) => state.resources.error);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchResources(token));
    const updateResourcesInterval = setInterval(() => dispatch(fetchResources(token)), 30000);
    return () => clearInterval(updateResourcesInterval);
  }, [goldAmount, foodAmount]);

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
