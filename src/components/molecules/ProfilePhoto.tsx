/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import Theme from 'theme';
import { FadeInImage } from 'components/atoms/FadeInImage';
import { Container } from 'components/atoms/Container';
import { EditIcon } from 'assets/svg';
import { Touchable } from 'components/atoms';
import { CustomTextProps, CustomText as Text } from '../atoms/CustomText';

interface ProfilePhotoProps {
  id?: string;
  name?: string;
  lastName?: string;
  uri?: string;
}

interface Props {
  size: number;
  editable?: boolean;
  fadeIn?: boolean;
  withName?: boolean;
  withId?: boolean;
  info?: ProfilePhotoProps;
  onPress?: () => void;
  textProps?: CustomTextProps;
  style?: StyleProp<ViewStyle>;
  bottomStyle?: StyleProp<ViewStyle>;
}

const ProfilePhoto: React.FC<Props> = ({
  size,
  editable = false,
  fadeIn,
  withName,
  withId,
  info,
  onPress,
  textProps,
  style,
  bottomStyle = { marginTop: Theme.Sizes.Padding },
}: Props) => {
  const [id] = useState<string>(info?.id ?? 'M515');
  const [name, setName] = useState<string>(info?.name ?? 'Mario');
  const [lastName, setLastName] = useState<string>(info?.lastName ?? 'Bárcenas López');
  const [photo] = useState<string | undefined>(info?.uri);
  // const [photo] = useState<string | undefined>(info?.uri ?? 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');

  useEffect(() => {
    if (info?.name) {
      setName(info.name);
    }

    if (info?.lastName) {
      setLastName(info.lastName);
    }
  }, [info]);

  return (
    <Container center>
      <Container width={size} height={size} style={style}>
        <Container flex>
          {photo ? (
            <Touchable onPress={onPress || (() => {})} disabled={!editable}>
              <FadeInImage
                source={{ uri: photo }}
                width={size}
                height={size}
                borderRadius={size}
                fadeIn={fadeIn}
              />
            </Touchable>
          ) : (
            <Touchable onPress={onPress || (() => {})} disabled={!editable}>
              <Container
                center
                middle
                circle
                width={size}
                height={size}
                backgroundColor={Theme.Colors.DarkSoul}
                style={{ padding: 8 }}
              >
                <Text
                  text={`${name.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`}
                  fontWeight="Semibold"
                  typography="subtitle"
                  textColor={Theme.Colors.White}
                  fontSize={45}
                  adjustsFontSizeToFit
                  textAlign="left"
                  numberOfLines={1}
                />
              </Container>
            </Touchable>
          )}
        </Container>
        {editable && onPress && (
          <Touchable onPress={onPress || (() => {})} disabled={!editable}>
            <Container
              middle
              width={24}
              height={24}
              style={{
                position: 'absolute',
                zIndex: 2,
                backgroundColor: Theme.Colors.PlaceboBlue,
                bottom: 0,
                right: 0,
                borderRadius: 10,
              }}
            >
              <EditIcon color={Theme.Colors.DarkSoul} height={16} width={16} />
            </Container>
          </Touchable>
        )}
      </Container>
      <Container center style={bottomStyle}>
        {withName && (
        <Text
          text={info?.name || `${name} ${lastName}`}
          fontWeight={textProps?.fontWeight || 'Semibold'}
          typography={textProps?.typography || 'subtitle'}
          fontSize={textProps?.fontSize || 17}
          textAlign={textProps?.textAlign || 'left'}
          numberOfLines={1}
          textColor={Theme.Colors.DarkSoul}
        />
        )}
        {withId && (
        <Text
          text={id}
          fontWeight="Semibold"
          typography="subtitle"
          textColor={Theme.Colors.DarkSoul}
          fontSize={17}
          numberOfLines={1}
        />
        )}
      </Container>
    </Container>
  );
};

export { ProfilePhoto };
