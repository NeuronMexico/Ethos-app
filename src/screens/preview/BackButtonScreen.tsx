import React from 'react';
import {
  Container, SafeArea, Text, BackButton,
} from 'components';
import Theme from 'theme';

const BackButtonScreen: React.FC = () => (
  <SafeArea>
    <Text
      text="BackButton"
      typography="title"
      marginHorizontal={Theme.Sizes.Padding}
      marginTop={Theme.Sizes.MarginTop}
      textAlign="center"
    />
    <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
      <Text text="Default component" typography="subtitle" marginVertical={8} />
      <BackButton />
    </Container>
  </SafeArea>
);

export default BackButtonScreen;
