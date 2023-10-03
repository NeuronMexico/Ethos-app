import {
  BottomSheet,
  Button, Container, SafeArea, Text,
} from 'components';
import React, {
  ReactNode, useRef, useState,
} from 'react';
import {
  Animated, Dimensions, ScrollView, View,
} from 'react-native';
import Theme from 'theme';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

const BottomSheetScreen: React.FC = () => {
  const offset = useRef(new Animated.Value(0)).current;
  const containerRef = useRef<View>(null);

  const [state, setState] = useState<number>(-1);
  const [renderComponent, setRenderComponent] = useState<ReactNode>(null);
  const [snapPoints, setSnapPoints] = useState<Array<string | number>>(['50%']);

  const handleSheetChanges = (index: number) => {
    console.log(index);
  };

  const renderDefaultComponent = (
    <Container
      ref={containerRef}
      middle
      center
      style={{ padding: 16 }}
    >
      <Text text="Default component" />
      <Button label="Close" onPress={() => setState(-1)} />
    </Container>
  );

  const calculateSnapPoints = () => {
    containerRef.current?.measure((x, y, width, height) => {
      const calculatedPercentage = ((height + 50) / SCREEN_HEIGHT) * 100;
      const roundedPercentage = Math.round(calculatedPercentage);
      setSnapPoints([`${roundedPercentage}%`]);
    });
  };

  return (
    <SafeArea>
      <Text
        text="Bottom sheet"
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
          <Text text="Default component with 100% of screen" marginVertical={16} />
          <Button
            label="Show bottom sheet"
            textColor={Theme.Colors.White}
            backgroundColor={Theme.Colors.DarkSoul}
            onPress={() => {
              setSnapPoints(['100%']);
              setState(0);
              setRenderComponent(renderDefaultComponent);
            }}
          />

          <Text text="Default component with 75% of screen" marginVertical={16} />
          <Button
            label="Show bottom sheet"
            textColor={Theme.Colors.White}
            backgroundColor={Theme.Colors.DarkSoul}
            onPress={() => {
              setSnapPoints(['75%']);
              setState(0);
              setRenderComponent(renderDefaultComponent);
            }}
          />

          <Text text="Default component with 50% of screen" marginVertical={16} />
          <Button
            label="Show bottom sheet"
            textColor={Theme.Colors.White}
            backgroundColor={Theme.Colors.DarkSoul}
            onPress={() => {
              setSnapPoints(['50%']);
              setState(0);
              setRenderComponent(renderDefaultComponent);
            }}
          />

          <Text text="Default component with auto adapt of screen" marginVertical={16} />
          <Button
            label="Show bottom sheet"
            textColor={Theme.Colors.White}
            backgroundColor={Theme.Colors.DarkSoul}
            onPress={() => {
              calculateSnapPoints();
              setState(0);
              setRenderComponent(renderDefaultComponent);
            }}
          />
        </Container>
      </ScrollView>
      <BottomSheet
        title="This is a title"
        state={state}
        handleSheetChanges={handleSheetChanges}
        snapPoints={snapPoints}
        enablePanDownToClose={false}
        blurBackground
      >
        {renderComponent}
      </BottomSheet>
    </SafeArea>
  );
};

export default BottomSheetScreen;
