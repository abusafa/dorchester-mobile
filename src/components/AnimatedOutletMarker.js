import React, { PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  Animated,
} from 'react-native';

export default class AnimatedOutletMarker extends React.Component {

  render() {

    const colors = {
      "Residential-Projects":{
        background:"#FF5A5F",
        border:"#D23F44"
      },
      "Commercial-Projects":{
        background:"#4da2ab",
        border:"#007a87"
      },
      "Sea":{
        background:"#444",
        border:"#777"
      }
    }

    const { amount, selected, style , label, type} = this.props;

    const background = selected.interpolate({
      inputRange: [0, 2],
      outputRange: ['#FF5A5F', '#4da2ab'],
    });

    const border = selected.interpolate({
      inputRange: [0, 1],
      outputRange: ['#D23F44', '#007a87'],
    });


    return (
      <Animated.View style={[styles.container, style]}>
        <Animated.View
          style={[
            styles.bubble,
            {
              backgroundColor: colors[type].background,
              borderColor: colors[type].border,
            },
          ]}
        >
          <Text style={styles.amount}>{label}</Text>
        </Animated.View>
        <Animated.View
          style={[styles.arrowBorder, { borderTopColor: colors[type].border }]}
        />
        <Animated.View
          style={[styles.arrow, { borderTopColor: colors[type].background }]}
        />
      </Animated.View>
    );
  }
}

AnimatedOutletMarker.propTypes = {
  amount: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  selected: PropTypes.object.isRequired,
  style: PropTypes.any,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  bubble: {
    flex: 0,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#FF5A5F',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    borderColor: '#D23F44',
    borderWidth: 0.5,
  },
  dollar: {
    color: '#fff',
    fontSize: 10,
  },
  amount: {
    color: '#fff',
    fontSize: 13,
  },
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 10,
    borderTopColor: '#FF5A5F',
    alignSelf: 'center',
    marginTop: -9,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderWidth: 4,
    borderTopColor: '#D23F44',
    alignSelf: 'center',
    marginTop: -0.5,
  },
  selectedBubble: {
    backgroundColor: '#4da2ab',
    borderColor: '#007a87',
  },
  selectedArrow: {
    borderTopColor: '#4da2ab',

  },
  selectedArrowBorder: {
    borderTopColor: '#007a87',
  },
});
