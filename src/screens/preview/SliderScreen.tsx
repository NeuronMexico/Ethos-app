import React, { useState } from 'react';
import {
  Container, SafeArea, Header, CircularSlider,
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
            width={200}
            height={200}
            value={sliderValue}
            meterColor="#ff0000" // Cambia estos valores según tus preferencias
            textColor="#000000"
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
