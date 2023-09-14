import React, { useEffect, useRef, useState } from 'react';
import { Platform, SafeAreaView, ViewStyle } from 'react-native';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Collapsible from 'react-native-collapsible';
import { useTranslation } from 'react-i18next';
import RBSheet from 'react-native-raw-bottom-sheet';
import { format } from 'date-fns';
import { CalendarIcon } from 'assets/svg';
import { Touchable } from './Touchable';
import Theme from '../../theme';
import { Container } from './Container';
import { TouchableText } from '../molecules/TouchableText';
import { CustomText as Text } from './CustomText';
import { PickerUI, PickerUIProps } from './PickerUI';

interface CustomDateTimePickerProps extends Omit<PickerUIProps, 'suffixIcon' | 'value'> {
  label?: string;
  placeholder: string;
  value: Date | undefined;
  error?: string;
  onValueChange: (value: Date) => void;
  marginTop?: number;
  minimumDate?: Date;
  maximumDate?: Date;
  startDate?: Date;
  mode?: 'date' | 'time';
  width?: ViewStyle['width'];
}

const MINUTE_INTERVAL = 10;

const CustomDateTimePicker: React.FC<CustomDateTimePickerProps> = ({
  label = '',
  placeholder = '',
  value,
  error = '',
  onValueChange,
  marginTop = 16,
  minimumDate,
  maximumDate,
  startDate,
  mode = 'date',
  backgroundColor,
  borderRadius,
  fontSize,
  fontWeight,
  borderless,
  prefixIcon,
  paddingLeft,
  paddingRight,
  paddingVertical,
  caption,
  width = '100%',
}) => {
  const { t } = useTranslation();

  const sheetRef = useRef<RBSheet>(null);

  const [currentDate, setCurrentDate] = useState<Date>(value || startDate || maximumDate || new Date());
  const [visible, setVisible] = useState<boolean>(false);

  const onChange = (_: DateTimePickerEvent, date?: Date) => {
    if (Platform.OS === 'android') {
      if (date) {
        setVisible(false);
        onValueChange(date);
      } else setVisible(false);
    } else if (date) {
      setCurrentDate(date);
    }
  };

  const onPressPicker = () => {
    if (Platform.OS === 'android') {
      setVisible(true);
    } else {
      sheetRef.current?.open();
    }
  };

  useEffect(() => {
    if (value) setCurrentDate(value);
  }, [value]);

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
        {Platform.OS === 'android' && visible && (
        <DateTimePicker
          value={currentDate}
          mode={mode}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          onChange={onChange}
          minuteInterval={MINUTE_INTERVAL}
        />
        )}
        <PickerUI
          placeholder={placeholder}
          backgroundColor={backgroundColor}
          borderRadius={borderRadius}
          borderless={borderless}
          fontSize={fontSize}
          fontWeight={fontWeight}
          value={value ? format(value, mode === 'date' ? 'dd/MM/yyyy' : 'HH:mm') : ''}
          suffixIcon={<CalendarIcon />}
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
              onPress={() => { onValueChange(currentDate); sheetRef.current?.close(); }}
            />
          </Container>
          <DateTimePicker
            value={currentDate}
            mode={mode}
            display="spinner"
            minimumDate={minimumDate}
            maximumDate={maximumDate}
            locale={t('language:tag')}
            textColor={Theme.Colors.DarkSoul}
            onChange={onChange}
            minuteInterval={MINUTE_INTERVAL}
          />
          <SafeAreaView />
        </Container>
      </RBSheet>
    </Container>
  );
};

export { CustomDateTimePicker };
