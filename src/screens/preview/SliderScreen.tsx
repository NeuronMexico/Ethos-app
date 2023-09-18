import React from 'react';
import {
  Container, SafeArea, Header,
} from 'components';
import Theme from 'theme';
// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from '@react-native-community/slider';

const SliderScreen: React.FC = () => (
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
    </Container>
  </SafeArea>
);

export default SliderScreen;
