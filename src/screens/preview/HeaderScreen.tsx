import React from 'react';
import {
  Container, SafeArea, Text, Header,
} from 'components';
import Theme from 'theme';

const HeaderScreen: React.FC = () => (
  <SafeArea>
    <Text
      text="Header"
      typography="title"
      marginHorizontal={Theme.Sizes.Padding}
      marginTop={Theme.Sizes.MarginTop}
      textAlign="center"
    />
    <Container>
      <Text text="Default component" typography="subtitle" marginVertical={8} marginHorizontal={Theme.Sizes.Padding} />
      <Header title="Title" />

      <Text text="Without back button" typography="subtitle" marginVertical={8} marginHorizontal={Theme.Sizes.Padding} />
      <Header title="Title" showBackButton={false} />

      <Text text="Right icon" typography="subtitle" marginVertical={8} marginHorizontal={Theme.Sizes.Padding} />
      <Header
        title="Title"
        rightIcon={<Container width={20} height={20} circle backgroundColor="red" />}
        rightAction={() => console.log('pressed')}
      />
    </Container>
  </SafeArea>
);

export default HeaderScreen;
