import React, { useRef } from 'react';
import { Alert, Animated, ScrollView } from 'react-native';
import {
  Card, Container, FadeInImage, SafeArea, Text,
} from 'components';
import Theme from 'theme';

// eslint-disable-next-line max-len
const HOMER_URI = 'https://static.wikia.nocookie.net/lossimpson/images/b/bd/Homer_Simpson.png/revision/latest?cb=20100522180809&path-prefix=es';

const CardScreen: React.FC = () => {
  const offset = useRef(new Animated.Value(0)).current;

  const onPress = () => Alert.alert('Button pressed');

  return (
    <SafeArea>
      <Text
        text="Card"
        typography="title"
        marginHorizontal={Theme.Sizes.Padding}
        marginTop={Theme.Sizes.MarginTop}
        textAlign="center"
      />
      <ScrollView
        contentContainerStyle={{ paddingTop: 16, paddingHorizontal: Theme.Sizes.Padding }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      >
        <Container>
          <Text text="Default component" typography="subtitle" marginVertical={8} />
          <Card>
            <FadeInImage source={{ uri: HOMER_URI }} width={50} height={50} />
            <Text text="Card" />
          </Card>

          <Text text="Custom padding (default is 16)" typography="subtitle" marginVertical={8} />
          <Card padding={8}>
            <FadeInImage source={{ uri: HOMER_URI }} width={50} height={50} />
            <Text text="Card" />
          </Card>

          <Text text="Custom color" typography="subtitle" marginVertical={8} />
          <Card backgroundColor="lightgray">
            <FadeInImage source={{ uri: HOMER_URI }} width={50} height={50} />
            <Text text="Card" />
          </Card>

          <Text text="Colum card" typography="subtitle" marginVertical={8} />
          <Card column>
            <FadeInImage source={{ uri: HOMER_URI }} width={50} height={50} />
            <Text text="Card" />
          </Card>

          <Text text="Center elements (only in colum)" typography="subtitle" marginVertical={8} />
          <Card column center>
            <FadeInImage source={{ uri: HOMER_URI }} width={50} height={50} />
            <Text text="Card" />
          </Card>

          <Text text="Pressable card" typography="subtitle" marginVertical={8} />
          <Card onPress={onPress}>
            <FadeInImage source={{ uri: HOMER_URI }} width={50} height={50} />
            <Text text="Card" />
          </Card>

          <Text text="Disabled card" typography="subtitle" marginVertical={8} />
          <Card onPress={onPress} disabled>
            <FadeInImage source={{ uri: HOMER_URI }} width={50} height={50} />
            <Text text="Card" />
          </Card>
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default CardScreen;
