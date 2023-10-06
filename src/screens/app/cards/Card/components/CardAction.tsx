import React, { ReactElement } from 'react';
import { Button } from 'components';
import Theme from 'theme';

interface Props {
  label: string;
  icon: ReactElement;
  onPress: () => void;
  width?: number;
  marginHorizontal?: number;
}

const CardAction: React.FC<Props> = ({
  label, icon, width = 40, onPress, marginHorizontal = 20,
}) => (
  <Button
    label={label}
    onPress={onPress}
    width={40}
    height={40}
    borderRadius={14}
    backgroundColor={Theme.Colors.PlaceboBlue}
    icon={icon}
    marginHorizontal={marginHorizontal}
    outsideLabel
    fontSize={13}
    fontWeight="Semibold"
    outsideWidth={width}
    colorless
  />
);

export { CardAction };
