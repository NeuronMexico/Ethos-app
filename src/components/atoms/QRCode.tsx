import React from 'react';
import QRCodeStyled from 'react-native-qrcode-styled';
import Theme from 'theme';
import { ETHOS_LOGO } from 'assets/images';

interface Props {
  value: string;
}

const QRCode: React.FC<Props> = ({ value }) => (
  <QRCodeStyled
    data={value}
    pieceSize={10}
    pieceBorderRadius={5}
    pieceScale={0.85}
    outerEyesOptions={{
      borderRadius: [15, 15, 15, 15],
      color: Theme.Colors.SpringBouquet,
      scale: 0.85,
    }}
    innerEyesOptions={{
      borderRadius: 9,
      color: Theme.Colors.SpringBouquet,
      scale: 0.85,
    }}
    logo={{
      href: ETHOS_LOGO,
      scale: 1,
    }}
  />
);

export { QRCode };
