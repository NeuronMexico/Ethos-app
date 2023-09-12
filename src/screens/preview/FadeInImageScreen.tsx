import React, { useRef } from 'react';
import { Animated, ScrollView } from 'react-native';
import {
  Container, FadeInImage, SafeArea, Text,
} from 'components';
import Theme from 'theme';

// eslint-disable-next-line max-len
const HOMER_1_URI = 'https://static.wikia.nocookie.net/lossimpson/images/b/bd/Homer_Simpson.png/revision/latest?cb=20100522180809&path-prefix=es';
const HOMER_2_URI = 'https://static1.abc.es/media/play/2018/08/22/homer-simpson-kO2--620x349@abc.JPG';
// eslint-disable-next-line max-len
const HOMER_3_URI = 'https://i.discogs.com/J4bH_-A4UcQHFSUBDyyqXbTzr7XWM8S0NfNoYgwXAiI/rs:fit/g:sm/q:90/h:400/w:400/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTE0MDAz/MTctMTMzNTcxNzQ3/Ni5wbmc.jpeg';
// eslint-disable-next-line max-len
const HOMER_4_URI = 'https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2017/11/homer-simpson.jpg?itok=KG0t95Kz';
const HOMER_5_URI = 'https://images8.alphacoders.com/466/466010.jpg';
const HOMER_6_URI = 'https://fondosmil.com/fondo/7940.jpg';

const FadeInImageScreen: React.FC = () => {
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <SafeArea>
      <Text
        text="FadeInImage"
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
          <Container height={100}>
            <FadeInImage source={{ uri: HOMER_1_URI }} />
          </Container>

          <Text text="borderRadius prop" typography="subtitle" marginVertical={8} />
          <Container height={100}>
            <FadeInImage source={{ uri: HOMER_2_URI }} borderRadius={100} />
          </Container>

          <Text text="width & height prop" typography="subtitle" marginVertical={8} />
          <FadeInImage source={{ uri: HOMER_3_URI }} width={100} height={100} />

          <Text text="resizeMode: center" typography="subtitle" marginVertical={8} />
          <FadeInImage source={{ uri: HOMER_4_URI }} width="100%" height={100} resizeMode="center" />

          <Text text="resizeMode: contain" typography="subtitle" marginVertical={8} />
          <FadeInImage source={{ uri: HOMER_4_URI }} width={200} height={100} resizeMode="contain" />

          <Text text="resizeMode: cover" typography="subtitle" marginVertical={8} />
          <FadeInImage source={{ uri: HOMER_4_URI }} width={200} height={100} resizeMode="cover" />

          <Text text="resizeMode: repeat" typography="subtitle" marginVertical={8} />
          <FadeInImage source={{ uri: HOMER_4_URI }} width="100%" height={100} resizeMode="repeat" />

          <Text text="resizeMode: stretch" typography="subtitle" marginVertical={8} />
          <FadeInImage source={{ uri: HOMER_4_URI }} width="100%" height={100} resizeMode="stretch" />

          <Text text="Default fadeIn is active" typography="subtitle" marginVertical={8} />
          <FadeInImage source={{ uri: HOMER_5_URI }} width="100%" height={100} resizeMode="cover" />

          <Text text="FadeInImage without fadeIn" typography="subtitle" marginVertical={8} />
          <FadeInImage source={{ uri: HOMER_6_URI }} width="100%" height={100} resizeMode="cover" fadeIn={false} />

          <Text text="Custom style image" typography="subtitle" marginVertical={8} />
          <FadeInImage
            source={{ uri: HOMER_1_URI }}
            width="100%"
            height={100}
            resizeMode="contain"
            style={{ backgroundColor: 'red', borderRadius: 20, borderWidth: 1 }}
          />
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default FadeInImageScreen;
