import React from 'react';
import { Container, Header } from 'components';
import { capitalize, formatDate } from 'utils';
import { ExportIcon } from 'assets/svg';
import { ScrollView } from 'react-native';
import Theme from 'theme';

interface Props {
  onPressExport: () => void;
}

const PDFViewerScreen: React.FC<Props> = ({ onPressExport }) => (
  <Container flex>
    <Header
      title={capitalize(formatDate(new Date(), 'MMMM yyyy'))}
      rightIcon={<ExportIcon />}
      rightAction={onPressExport}
    />
    <ScrollView style={{ marginTop: Theme.Sizes.MarginTop, backgroundColor: Theme.Colors.SpanishGray }} />
  </Container>
);

export default PDFViewerScreen;
