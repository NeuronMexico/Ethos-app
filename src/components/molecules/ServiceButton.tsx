import React, { ReactElement } from 'react';
import { Button } from 'components';
import Theme from 'theme';
import { MarginPropsInterface } from 'utils';

interface Props extends MarginPropsInterface {
  label: string;
  icon: ReactElement;
  onPress: () => void;
}

const ServiceButton: React.FC<Props> = ({
  label,
  icon,
  onPress,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
}) => (
  <Button
    label={label}
    icon={icon}
    onPress={onPress}
    width="auto"
    fontSize={Theme.Sizes.Body}
    fontWeight="Semibold"
    paddingHorizontal={16}
    borderRadius={24}
    borderColor={Theme.Colors.PlaceboBlue}
    colorless
    marginBottom={marginBottom}
    marginHorizontal={marginHorizontal}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
    marginVertical={marginVertical}
  />
);
export { ServiceButton };
