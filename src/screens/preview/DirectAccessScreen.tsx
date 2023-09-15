import React from 'react';
import {
  Container, SafeArea, Text, DirectAccess,
} from 'components';
import Theme from 'theme';

const DirectAccessScreen: React.FC = () => (
  <SafeArea>
    <Text
      text="DirectAccess"
      typography="title"
      marginHorizontal={Theme.Sizes.Padding}
      marginTop={Theme.Sizes.MarginTop}
      textAlign="center"
    />
    <Container style={{ paddingHorizontal: Theme.Sizes.Padding }}>
      <Text text="Default component" typography="subtitle" marginVertical={8} />
      <DirectAccess label="Label" onPress={() => {}} />

      <Text text="Custom margins" typography="subtitle" marginVertical={8} />
      <DirectAccess label="Label" onPress={() => {}} marginHorizontal={25} marginVertical={10} />

      <Text text="Custom typography" typography="subtitle" marginVertical={8} />
      <DirectAccess label="Label" onPress={() => {}} typography="body" />

      <Text text="Custom font" typography="subtitle" marginVertical={8} />
      <DirectAccess label="Label" onPress={() => {}} fontSize={20} fontWeight="Light" />

      <Text text="Custom color" typography="subtitle" marginVertical={8} />
      <DirectAccess label="Label" onPress={() => {}} color="red" />

      <Text text="Custom iconSize" typography="subtitle" marginVertical={8} />
      <DirectAccess label="Label" onPress={() => {}} iconSize={30} />
    </Container>
  </SafeArea>
);

export default DirectAccessScreen;
