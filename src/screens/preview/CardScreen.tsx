import React, { useRef } from 'react';
import { Alert, Animated, ScrollView } from 'react-native';
import {
  Button,
  Card, Container, FadeInImage, SafeArea, Text,
} from 'components';
import Theme from 'theme';
import Tab from 'components/organisms/Tab';

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

          <Text text="Bottom Child card" typography="subtitle" marginVertical={8} />
          <Card
            column
            onPress={onPress}
            borderRadius={24}
            padding={0}
            bottomChild={(
              <Text
                text="Bottom Child"
                textColor="white"
                textAlign="center"
                fontWeight="Semibold"
              />
          )}
          >
            <FadeInImage
              source={{ uri: HOMER_URI }}
              width={100}
              height={100}
              resizeMode="contain"
              style={{ padding: 16, alignSelf: 'center' }}
            />
          </Card>

          <Text text="Custom Bottom Child card" typography="subtitle" marginVertical={8} />
          <Card
            column
            borderRadius={24}
            padding={0}
            bottomChild={(
              <Container flex row>
                <Container center row flex>
                  <Container
                    width={27}
                    height={27}
                    backgroundColor="white"
                    style={{ borderRadius: 100 }}
                  />
                  <Text
                    text="Example"
                    textColor="white"
                    textAlign="center"
                    fontWeight="Semibold"
                    marginHorizontal={8}
                  />
                </Container>
                <Container row center>
                  <Text
                    text="Example"
                    textColor="white"
                    textAlign="center"
                    fontWeight="Semibold"
                    marginHorizontal={8}
                  />
                  <Button
                    label="2X1CREP..."
                    textColor={Theme.Colors.DarkSoul}
                    onPress={() => {}}
                    backgroundColor="white"
                    width={103}
                    height={30}
                    paddingHorizontal={0}
                    paddingVertical={0}
                  />
                </Container>
              </Container>
          )}
            bottomStyle={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
            }}
          >
            <Container flex row>
              <Container flex style={{ padding: 16 }}>
                <Text
                  text="Card"
                  fontSize={16}
                  fontWeight="Black"
                />
                <Text text="Card" fontSize={13} />
              </Container>
              <FadeInImage
                source={{ uri: HOMER_URI }}
                width={100}
                height={100}
                resizeMode="contain"
                style={{ padding: 16, alignSelf: 'flex-end' }}
              />
            </Container>
          </Card>

          <Text text="Tab card" typography="subtitle" marginVertical={8} />
          <Card
            column
            borderRadius={24}
            padding={0}
            backgroundColor={Theme.Colors.DarkSoul}
          >
            <Tab
              tabs={[
                'Tab 1',
                'Tab 2',
              ]}
              initialTab={0}
              onTabChange={() => {}}
              inverted
            />
            <Container>
              <Text
                text="Card"
                fontSize={16}
                fontWeight="Black"
                textColor="white"
                marginHorizontal={16}
                marginVertical={16}
              />
            </Container>
          </Card>
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default CardScreen;
