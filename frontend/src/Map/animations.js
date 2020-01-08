import { Animated, Easing } from 'react-native';

export function getPlanetAnimation(
  initialPlanetSize,
  currentPlanetSize,
  currentPlanetRotateZ,
) {
  return (
    Animated.parallel([
      Animated.timing(currentPlanetSize, {
        toValue: initialPlanetSize * 2,
        duration: 1000,
        easing: Easing.elastic(1.8),
      }),
      Animated.loop(
        Animated.sequence([
          Animated.timing(currentPlanetRotateZ, {
            toValue: Math.PI / 16,
            duration: 500,
            easing: Easing.linear,
          }),
          Animated.timing(currentPlanetRotateZ, {
            toValue: 0,
            duration: 500,
            easing: Easing.linear,
          }),
        ]),
        { iterations: -1 },
      ),
    ])
  );
}

export function resetPlanetAnimation(
  initialPlanetSize,
  currentPlanetSize,
  currentPlanetRotateZ,
) {
  return (
    Animated.parallel([
      Animated.timing(currentPlanetSize, {
        toValue: initialPlanetSize,
        duration: 1000,
        easing: Easing.elastic(1.8),
      }),
      Animated.timing(currentPlanetRotateZ, {
        toValue: 0,
        duration: 2000,
      }),
    ])
  );
}
