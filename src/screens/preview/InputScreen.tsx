import React, { useRef, useState } from 'react';
import { Animated, ScrollView } from 'react-native';
import {
  Container, Input, SafeArea, Text,
} from 'components';
import Theme from 'theme';
import { EyeIcon } from 'assets/svg';

const InputScreen: React.FC = () => {
  const offset = useRef(new Animated.Value(0)).current;

  const [value, setValue] = useState<string>('');

  return (
    <SafeArea>
      <Text
        text="Input"
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
          <Text text="Default component" typography="subtitle" marginTop={8} />
          <Input value={value} onChangeText={setValue} placeholder="Placeholder" />

          <Text text="Label component" typography="subtitle" marginTop={8} />
          <Input value={value} onChangeText={setValue} label="Label" placeholder="Placeholder" />

          <Text text="Border component" typography="subtitle" marginTop={8} />
          <Input value={value} onChangeText={setValue} placeholder="Placeholder" borderless={false} />

          <Text text="PrefixIcon" typography="subtitle" marginTop={16} />
          <Input
            value={value}
            onChangeText={setValue}
            placeholder="Placeholder"
            prefixIcon={<EyeIcon width={20} height={20} />}
          />

          <Text text="SuffixIcon" typography="subtitle" marginTop={16} />
          <Input
            value={value}
            onChangeText={setValue}
            placeholder="Placeholder"
            suffixIcon={<EyeIcon width={20} height={20} />}
          />

          <Text text="Custom width" typography="subtitle" marginTop={16} />
          <Input value={value} onChangeText={setValue} width={200} placeholder="Placeholder" />

          <Text text="PasswordField" typography="subtitle" marginTop={16} />
          <Input value={value} onChangeText={setValue} passwordField placeholder="Placeholder" />

          <Text text="PasswordField without show password button" typography="subtitle" marginTop={16} />
          <Input
            value={value}
            onChangeText={setValue}
            passwordField
            showPasswordEnable={false}
            placeholder="Placeholder"
          />

          <Text text="Error message" typography="subtitle" marginTop={16} />
          <Input value={value} onChangeText={setValue} placeholder="Error" error="Error message" />

          <Text text="Custom marginTop (default is 16)" typography="subtitle" marginTop={16} />
          <Input value={value} onChangeText={setValue} marginTop={4} placeholder="Placeholder" />

          <Text text="Units" typography="subtitle" marginTop={16} />
          <Input value={value} onChangeText={setValue} units="mts" keyboardType="number-pad" placeholder="Placeholder" />

          <Text text="Mask input" typography="subtitle" marginTop={16} />
          <Input value={value} onChangeText={setValue} mask="cel-phone" placeholder="Placeholder" />
          {/* For more info with masked inputs visit: https://github.com/bhrott/react-native-masked-text */}
          <Text text="Mask input with options" typography="subtitle" marginTop={16} />
          <Input
            value={value}
            onChangeText={setValue}
            mask="custom"
            options={{ mask: '(999) 999 9999' }}
            placeholder="Placeholder"
          />

          <Text text="Custom fontWeight" typography="subtitle" marginTop={16} />
          <Input value={value} onChangeText={setValue} placeholder="Placeholder" fontWeight="Light" />
        </Container>
      </ScrollView>
    </SafeArea>
  );
};

export default InputScreen;
