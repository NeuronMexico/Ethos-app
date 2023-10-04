/* eslint-disable react/jsx-props-no-spreading */
import React, {
  ForwardedRef, forwardRef, ReactElement, useEffect, useMemo, useRef, useState,
} from 'react';
import {
  Animated, ColorValue, StyleSheet, TextInput, TextInputProps, View, ViewStyle,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import { TextInputMask, TextInputMaskOptionProp, TextInputMaskTypeProp } from 'react-native-masked-text';
import {
  EyeIcon, EyeSlashIcon,
} from 'assets/svg';
import Theme from 'theme';
import Easing from 'utils/Easing';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { Container } from './Container';
import { CustomText as Text, FontWeightTypes } from './CustomText';
import { Touchable } from './Touchable';

interface Props {
  label?: string;
  placeholder?: string;
  onChangeText: TextInputProps['onChangeText'];
  width?: ViewStyle['width'];
  autoCapitalize?: TextInputProps['autoCapitalize'];
  autoComplete?: TextInputProps['autoComplete'];
  autoCorrect?: TextInputProps['autoCorrect'];
  autoFocus?: TextInputProps['autoFocus'];
  blurOnSubmit?: TextInputProps['blurOnSubmit'];
  editable?: TextInputProps['editable'];
  keyboardType?: TextInputProps['keyboardType'];
  onSubmitEditing?: TextInputProps['onSubmitEditing'];
  value: TextInputProps['value'];
  passwordField?: boolean;
  showPasswordEnable?: boolean;
  error?: string;
  onFocus?: TextInputProps['onFocus'];
  onBlur?: TextInputProps['onBlur'];
  marginTop?: number;
  units?: string;
  maxLength?: number;
  mask?: TextInputMaskTypeProp;
  options?: TextInputMaskOptionProp;
  fontWeight?: FontWeightTypes;
  fontSize?: number;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
  customLabelColor?: ColorValue;
  backgroundColor?: ColorValue;
  useBottomSheetInput?: boolean;
  borderless?: boolean;
  paddingVertical?: number;
}

const Input = forwardRef(({
  label = '',
  placeholder = '',
  onChangeText,
  width = '100%',
  autoCapitalize = 'none',
  autoComplete = 'off',
  autoCorrect,
  autoFocus,
  blurOnSubmit = true,
  editable = true,
  keyboardType = 'default',
  onSubmitEditing,
  value,
  passwordField,
  showPasswordEnable = true,
  error = '',
  onFocus,
  onBlur,
  marginTop = 16,
  units,
  maxLength,
  mask,
  options,
  fontWeight = 'Medium',
  fontSize = 16,
  prefixIcon,
  suffixIcon,
  backgroundColor,
  useBottomSheetInput,
  borderless = true,
  paddingVertical = 12,
}: Props, ref: ForwardedRef<any>) => {
  const {
    inputStyle, unitsContainer, borderlessStyle,
  } = styles;

  const { current: focusAnimation } = useRef<Animated.Value>(new Animated.Value(0));
  const { current: errorAnimation } = useRef<Animated.Value>(new Animated.Value(0));

  const [focused, setFocused] = useState<boolean>(false);
  const [secureTextEntry, setSecureTextEntry] = useState<boolean | undefined>(passwordField);

  const borderColor = useMemo(() => {
    if (error) {
      return errorAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [
          focused
            ? Theme.Colors.DarkSoul
            : (borderless && Theme.Colors.DrWhite) || Theme.Colors.SparklingFrost,
          Theme.Colors.HotCoral],
      });
    }

    return focusAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        borderless ? Theme.Colors.DrWhite : Theme.Colors.SparklingFrost,
        Theme.Colors.DarkSoul,
      ],
    });
  }, [borderless, error, errorAnimation, focusAnimation, focused]);

  useEffect(() => {
    Animated.timing(focusAnimation, {
      toValue: focused || error ? 1 : 0,
      duration: 400,
      easing: Easing.easeInOutCirc,
      useNativeDriver: false,
    }).start();
  }, [focused, error, focusAnimation]);

  useEffect(() => {
    Animated.timing(errorAnimation, {
      toValue: error ? 1 : 0,
      duration: 400,
      easing: Easing.easeInOutCirc,
      useNativeDriver: false,
    }).start();
  }, [error, errorAnimation]);

  const textInputProps: TextInputProps = useMemo(() => ({
    placeholder,
    placeholderTextColor: Theme.Colors.NimbusCloud,
    autoCapitalize,
    autoComplete,
    autoCorrect,
    autoFocus,
    blurOnSubmit,
    editable,
    keyboardType,
    maxLength,
    onChangeText,
    onSubmitEditing,
    value,
    returnKeyType: 'done',
    underlineColorAndroid: 'transparent',
    selectionColor: Theme.Colors.Carbon,
    onFocus: (data) => {
      if (onFocus) onFocus(data);
      setFocused(true);
    },
    onBlur: (data) => {
      if (onBlur) onBlur(data);
      setFocused(false);
    },
    numberOfLines: 1,
    secureTextEntry,
    style: [inputStyle, {
      color: Theme.Colors.DarkSoul,
      fontFamily: Theme.Fonts[fontWeight],
      fontSize,
      paddingLeft: prefixIcon ? 8 : 16,
      paddingRight: (passwordField && showPasswordEnable) || suffixIcon ? 8 : 16,
      paddingVertical,
    }],
    selection: !editable ? { start: 0, end: 0 } : undefined,
  }), [
    placeholder,
    autoCapitalize,
    autoComplete,
    autoCorrect,
    autoFocus,
    blurOnSubmit,
    editable,
    keyboardType,
    maxLength,
    onChangeText,
    onSubmitEditing,
    value,
    onFocus,
    onBlur,
    secureTextEntry,
    fontWeight,
    fontSize,
    inputStyle,
    passwordField,
    prefixIcon,
    showPasswordEnable,
    suffixIcon,
    paddingVertical,
  ]);

  return (
    <Container style={[{ marginTop, width }]}>
      {!!label && (
        <Text
          text={label}
          textColor={Theme.Colors.Carbon}
          fontSize={11}
          fontWeight="Medium"
          marginBottom={4}
        />
      )}
      <Animated.View style={{
        ...borderlessStyle,
        backgroundColor: backgroundColor || (borderless && Theme.Colors.DrWhite) || Theme.Colors.White,
        borderColor,
      }}
      >
        <Container row>
          {prefixIcon && (
          <Container middle width={24} style={{ marginLeft: 16 }}>
            {prefixIcon}
          </Container>
          )}
          {useBottomSheetInput ? (
            <BottomSheetTextInput
              ref={ref}
              {...textInputProps}
            />
          ) : (mask && (
            <TextInputMask
              ref={ref}
              type={mask}
              options={options}
              {...textInputProps}
            />
          )) || (
            <TextInput
              ref={ref}
              {...textInputProps}
            />
          )}
          {units && units !== '' && (
          <View pointerEvents="none" style={unitsContainer}>
            <Text>
              <Text text={value} textColor="transparent" fontSize={fontSize} fontWeight="Medium" />
              {value !== '' && <Text fontSize={fontSize} fontWeight="Medium" text={`  ${units}`} />}
            </Text>
          </View>
          )}
          {suffixIcon && (
          <Container middle width={24} style={{ marginRight: 16 }}>
            {suffixIcon}
          </Container>
          )}
          {passwordField && showPasswordEnable && !suffixIcon && (
          <Container
            middle
            style={{
              paddingRight: 16,
            }}
          >
            <Touchable onPress={() => setSecureTextEntry(!secureTextEntry)} rounded hitSlop={10}>
              {secureTextEntry ? (
                <EyeIcon
                  width={24}
                  height={24}
                  color={error ? Theme.Colors.HotCoral : (focused && Theme.Colors.DarkSoul) || Theme.Colors.SparklingFrost}
                />
              ) : (
                <EyeSlashIcon
                  width={24}
                  height={24}
                  color={error ? Theme.Colors.HotCoral : (focused && Theme.Colors.DarkSoul) || Theme.Colors.SparklingFrost}
                />
              )}
            </Touchable>
          </Container>
          )}
        </Container>
      </Animated.View>
      <Collapsible collapsed={!error}>
        <Text text={error} fontSize={11} fontWeight="Medium" textColor={Theme.Colors.HotCoral} marginTop={4} />
      </Collapsible>
    </Container>
  );
});

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    fontSize: 16,
    fontFamily: Theme.Fonts.Medium,
    paddingLeft: 16,
    paddingRight: 16,
    paddingVertical: 12,
  },
  unitsContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  borderlessStyle: {
    backgroundColor: Theme.Colors.White,
    borderRadius: 12,
    borderWidth: 1,
  },
});

export { Input };
