import React from 'react';
import {
  ScrollView, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import PlanetItem from './PlanetItem';

const styles = StyleSheet.create({
  scrollViewContainer: {
    padding: 20,
    flexGrow: 1,
  },
});

const displayList = ['blue', 'green', 'yellow', 'red', 'purple'];

function PlanetSwitch({
  selected, onSelectChange, onSubmit,
}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scrollViewContainer}
    >
      {displayList.map(
        (type) => (
          <PlanetItem
            key={type}
            type={type}
            active={type === selected}
            onSelectChange={onSelectChange}
            onSubmit={onSubmit}
          />
        ),
      )}
    </ScrollView>
  );
}

PlanetSwitch.propTypes = {
  selected: PropTypes.string,
  onSelectChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

PlanetSwitch.defaultProps = {
  selected: 'yellow',
  onSelectChange: null,
  onSubmit: null,
};

export default PlanetSwitch;
