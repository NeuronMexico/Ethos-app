import React, { useEffect, useRef, useState } from 'react';
import {
  ActionSheetIOS, Platform, SafeAreaView, StyleSheet, ViewStyle,
} from 'react-native';
import { Picker, PickerProps } from '@react-native-picker/picker';
import Collapsible from 'react-native-collapsible';
import { useTranslation } from 'react-i18next';
import RBSheet from 'react-native-raw-bottom-sheet';
import { ChevronDownIcon } from 'assets/svg';
import { Touchable } from './Touchable';
import Theme from '../../theme';
import { Container } from './Container';
import { TouchableText } from '../molecules/TouchableText';
import { CustomText as Text } from './CustomText';
import { PickerUI, PickerUIProps } from './PickerUI';

export interface CustomPickerProps extends Omit<PickerUIProps, 'suffixIcon'> {
  label?: string;
  placeholder: string;
  value: string;
  error?: string;
  onValueChange: (value: string) => void;
  options: { label: string, value: string }[];
  useActionSheet?: boolean;
  actionSheetTitle?: string;
  marginTop?: number;
  androidMode?: PickerProps['mode'];
  iconSize?: number;
  width?: ViewStyle['width'];
}

const CustomPicker: React.FC<CustomPickerProps> = ({
  label = '',
  placeholder = '',
  value,
  error = '',
  onValueChange,
  options,
  useActionSheet,
  actionSheetTitle = placeholder,
  marginTop = 16,
  androidMode = 'dropdown',
  backgroundColor,
  borderRadius,
  fontSize,
  fontWeight,
  borderless,
  iconSize = 24,
  prefixIcon,
  paddingLeft,
  paddingRight,
  paddingVertical,
  caption,
  width = '100%',
}) => {
  const { t } = useTranslation();

  const pickerRef = useRef<any>(null);
  const sheetRef = useRef<RBSheet>(null);

  const [showingValue, setShowingValue] = useState<string>(value);

  const onPressPicker = () => {
    if (Platform.OS === 'android') {
      pickerRef.current?.focus();
    } else if (useActionSheet) {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          title: actionSheetTitle,
          tintColor: Theme.Colors.DarkSoul,
          options: [...options.map((item) => item.label), t('global:cancel')],
          cancelButtonIndex: options.length,
          userInterfaceStyle: 'light',
        },
        (buttonIndex) => {
          if (buttonIndex !== options.length) onValueChange(options[buttonIndex].value);
        },
      );
    } else {
      sheetRef.current?.open();
    }
  };

  useEffect(() => {
    const idx = options.findIndex((item) => item.value === value);
    if (idx >= 0) setShowingValue(options[idx].label);
  }, [value, options]);

  return (
    <Container style={{ marginTop, width }}>
      {!!label && (
      <Text
        text={label}
        textColor={Theme.Colors.Carbon}
        fontSize={11}
        fontWeight="Medium"
        marginBottom={4}
      />
      )}
      <Touchable onPress={onPressPicker}>
        {Platform.OS === 'android' && (
        <Picker
          ref={pickerRef}
          selectedValue={value}
          onValueChange={onValueChange}
          style={[StyleSheet.absoluteFill, { opacity: 0 }]}
          mode={androidMode}
          dropdownIconRippleColor={Theme.Colors.DarkSoul}
        >
          <Picker.Item
            label={t('global:select')}
            value=""
            fontFamily={Theme.Fonts.Regular}
            color={Theme.Colors.NimbusCloud}
            enabled={false}
          />
          {options.map((element) => (
            <Picker.Item
              key={element.value}
              label={element.label}
              value={element.value}
              color={Theme.Colors.DarkSoul}
            />
          ))}
        </Picker>
        )}
        <PickerUI
          placeholder={placeholder}
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
          borderless={borderless}
          fontSize={fontSize}
          fontWeight={fontWeight}
          value={showingValue}
          suffixIcon={<ChevronDownIcon width={iconSize} height={iconSize} />}
          prefixIcon={prefixIcon}
          paddingLeft={paddingLeft}
          paddingRight={paddingRight}
          paddingVertical={paddingVertical}
          caption={caption}
        />
      </Touchable>
      <Collapsible collapsed={!error}>
        <Text text={error} fontSize={11} fontWeight="Medium" textColor={Theme.Colors.HotCoral} marginTop={4} />
      </Collapsible>

      {/* @ts-ignore */}
      <RBSheet ref={sheetRef}>
        <Container style={{ backgroundColor: Theme.Colors.White }}>
          <Container row space="between" style={{ paddingTop: 8 }}>
            <TouchableText
              text={t('global:cancel')}
              textColor={Theme.Colors.DarkSoul}
              marginLeft={16}
              onPress={() => sheetRef.current?.close()}
            />
            <TouchableText
              text={t('global:accept')}
              textColor={Theme.Colors.DarkSoul}
              marginRight={16}
              onPress={() => {
                if (!value) onValueChange(options[0].value);

                sheetRef.current?.close();
              }}
            />
          </Container>
          <Picker
            ref={pickerRef}
            selectedValue={value}
            onValueChange={onValueChange}
            dropdownIconRippleColor={Theme.Colors.DarkSoul}
          >
            {options.map((element) => (
              <Picker.Item
                key={element.value}
                label={element.label}
                value={element.value}
                color={Theme.Colors.DarkSoul}
                fontFamily={Theme.Fonts.Regular}
              />
            ))}
          </Picker>
          <SafeAreaView />
        </Container>
      </RBSheet>
    </Container>
  );
};

export { CustomPicker };
