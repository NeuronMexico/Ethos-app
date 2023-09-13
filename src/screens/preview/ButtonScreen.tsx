import React, { useRef } from 'react';
import {
  Container, SafeArea, Text, Button,
} from 'components';
import Theme from 'theme';
import { TICKET_ICON } from 'assets/svg';
import { Animated, ScrollView } from 'react-native';

const ButtonScreen: React.FC = () => {
  const offset = useRef(new Animated.Value(0)).current;

  return (
    <SafeArea>
      <Text
        text="Button"
        typography="title"
        marginHorizontal={Theme.Sizes.Padding}
        marginTop={Theme.Sizes.MarginTop}
        textAlign="center"
      />
      <ScrollView
        contentContainerStyle={{
          paddingTop: 16,
          paddingHorizontal: Theme.Sizes.Padding,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={16}
      >
        <Container>
          <Text
            text="Background y text color"
            marginTop={Theme.Sizes.MarginTop}
            marginHorizontal={Theme.Sizes.Padding}
            typography="subtitle"
          />
          <Button
            label="Default"
            onPress={() => {}}
            marginBottom={10}
            marginTop={30}
            backgroundColor={Theme.Colors.WhiteSmoke}
          />
          <Button label="colorless" onPress={() => {}} marginBottom={10} />
          <Button
            label="with text and colored background"
            onPress={() => {}}
            backgroundColor={Theme.Colors.DarkSoul}
            textColor={Theme.Colors.White}
            marginBottom={10}
          />
          <Text
            text="Borders"
            marginTop={Theme.Sizes.MarginTop}
            marginHorizontal={Theme.Sizes.Padding}
            typography="subtitle"
          />
          <Button
            label="with full border"
            onPress={() => {}}
            borderColor={Theme.Colors.PlaceboBlue}
            marginBottom={10}
            marginTop={Theme.Sizes.MarginTop}
          />
          <Button
            label="with border style"
            onPress={() => {}}
            borderColor={Theme.Colors.PlaceboBlue}
            marginBottom={10}
            borderStyle
          />
          <Button
            label="with icon and borderStyle"
            onPress={() => {}}
            borderColor={Theme.Colors.PlaceboBlue}
            marginBottom={10}
            borderStyle
            icon={<TICKET_ICON />}
          />
          <Text
            text="Icons and button sizes"
            marginTop={Theme.Sizes.MarginTop}
            marginBottom={Theme.Sizes.MarginTop}
            marginHorizontal={Theme.Sizes.Padding}
            typography="subtitle"
          />

          <Container row>
            <Button
              label="adjustable size"
              onPress={() => {}}
              borderColor={Theme.Colors.PlaceboBlue}
              width={172}
              marginBottom={10}
            />
            <Button
              onPress={() => {}}
              width={50}
              height={50}
              borderRadius={15}
              backgroundColor={Theme.Colors.PlaceboBlue}
              marginHorizontal={5}
              icon={<TICKET_ICON />}
            />
            <Button
              onPress={() => {}}
              width={50}
              height={50}
              marginHorizontal={10}
              icon={<TICKET_ICON />}
            />
          </Container>
          <Text
            text="Column"
            marginTop={Theme.Sizes.MarginTop}
            marginHorizontal={Theme.Sizes.Padding}
            typography="subtitle"
          />
          <Button
            label="Column"
            onPress={() => {}}
            width={65}
            borderStyle
            icon={<TICKET_ICON />}
            marginHorizontal={5}
            colum
          />
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default ButtonScreen;
