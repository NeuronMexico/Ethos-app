import React, { ReactElement } from 'react';
import { ColorValue, ViewStyle, StyleSheet } from 'react-native';
import Theme from 'theme';
import { Card } from 'components/atoms';
import { Touchable, TouchableProps } from '../atoms/Touchable';
import { Container } from '../atoms/Container';
import { CustomText, FontWeightTypes } from '../atoms/CustomText';

interface Props extends TouchableProps {
  textNumbers?: string;
  label?: string;
  labelAlignment?: 'left' | 'bottom';
  icon?: ReactElement;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: ColorValue;
  labelColor?: string;
  fontSize?: number;
  paddingVertical?: number;
  borderRadius?: number;
  width?: ViewStyle['width'];
  height?: ViewStyle['height'];
  fontWeight?: FontWeightTypes;
  borderStyle?: boolean;
}

const BankAccountCard: React.FC<Props> = ({
  textNumbers,
  label,
  labelAlignment = 'left',
  onPress,
  icon,
  disabled,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  backgroundColor,
  textColor = Theme.Colors.DarkSoul,
  androidRippleColor = Theme.Colors.White,
  borderColor,
  fontSize,
  paddingVertical = 5,
  fontWeight = 'Bold',
  borderRadius = 16,
  width,
  height,
  rounded,
  borderStyle,
  labelColor = Theme.Colors.DarkSoul,
}: Props) => (
  <Card
    backgroundColor={backgroundColor}
    style={{
      width: width || '100%',
      marginBottom,
      marginTop,
      marginLeft,
      marginRight,
      marginHorizontal,
      marginVertical,
      borderRadius,
    }}
  >
    <Touchable
      onPress={onPress}
      androidRippleColor={androidRippleColor}
      disabled={disabled}
      rounded={rounded}
    >
      <Container
        center
        style={[
          styles.containerStyle,
          {
            paddingVertical,
            borderWidth: borderColor ? 2 : 0,
            borderStyle: borderStyle ? 'dashed' : 'solid',
            borderColor,
            borderRadius,
            opacity: disabled ? 0.35 : 1,
            height,
          },
        ]}
      >
        <Container style={styles.rowStyle}>
          {label && labelAlignment === 'left' && (
          <CustomText
            text={label}
            fontWeight="Regular"
            typography="subtitle"
            textColor={labelColor}
            fontSize={13}
            textAlign="left"
            marginLeft={15}
          />
          )}
          <Container style={styles.textContainerStyle}>
            {textNumbers && (
            <CustomText
              text={textNumbers}
              fontWeight={fontWeight}
              typography="subtitle"
              textColor={textColor}
              fontSize={fontSize}
              textAlign="left"
              numberOfLines={2}
              marginLeft={15}
            />
            )}
            {label && labelAlignment === 'bottom' && (
              <CustomText
                text={label}
                fontWeight="Regular"
                typography="subtitle"
                textColor={labelColor}
                fontSize={13}
                textAlign="left"
                marginLeft={15}
              />
            )}
          </Container>
          <Container style={styles.iconContainerStyle}>
            {icon}
          </Container>
        </Container>
      </Container>
    </Touchable>
  </Card>
);

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainerStyle: {
    flex: 1,
  },
  iconContainerStyle: {
    marginLeft: 15,
  },
});

export { BankAccountCard };
