import React, { useState } from 'react';
import {
  Container, SafeArea, Header, CircularSlider, AnalogClock,
} from 'components';
import Theme from 'theme';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from '@react-native-community/slider';
import { StyleSheet, View } from 'react-native';

const SliderScreen: React.FC = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };
  return (
    <SafeArea>
      <Header title="Sliders" />
      <Container style={{
        paddingHorizontal: Theme.Sizes.Padding,
        marginTop: Theme.Sizes.MarginTop,
      }}
      >
        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={50}
          maximumValue={60}
          minimumTrackTintColor={Theme.Colors.SpringBouquet}
          maximumTrackTintColor={Theme.Colors.LightHouse}
        />
        <View style={styles.container}>
          <CircularSlider
            size={200}
            value={sliderValue}
            meterColor={Theme.Colors.SpringBouquet}
            onValueChange={handleSliderChange}
          />
        </View>
      </Container>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SliderScreen;
