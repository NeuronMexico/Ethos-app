/* eslint-disable max-len */
import React, { useState } from 'react';
import {
  Container, Header, SafeArea, Text, Touchable,
} from 'components';
import {
  BankIcon,
  BellIcon,
  BellMarkedIcon,
  BenefitsIcon,
  BookOpenIcon,
  CalendarIcon,
  CardDigitalIcon,
  CardIcon,
  CardPayIcon,
  CarIcon,
  CellphoneIcon,
  CertificateIcon,
  CheckMarkCircleIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CoDiIcon,
  CopyIcon,
  DefaultCard,
  DotsIcon,
  DownloadIcon,
  EditIcon,
  EthosIcon,
  EthosQRIcon,
  ExpensesIcon,
  ExportIcon,
  EyeIcon,
  EyeSlashIcon,
  FacebookIcon,
  FileIcon,
  FileShiedIcon,
  FileUploadIcon,
  FilmIcon,
  FilterIcon,
  GamepadIcon,
  GearIcon,
  GraphIcon,
  InstagramIcon,
  KeyCycleIcon,
  KeyIcon,
  LampIcon,
  LinkedInIcon,
  LessIcon,
  LockClosedIcon,
  LockIcon,
  LockOpenIcon,
  MapIcon,
  MessageDotsIcon,
  MoneyIcon,
  MoreIcon,
  PadlockIcon,
  PaperIcon,
  PasscodeIcon,
  PawIcon,
  PeopleIcon,
  PersonalProvisionIcon,
  PersonCloudIcon,
  PhoneIcon,
  PinIcon,
  ScanIcon,
  ShieldIcon,
  TicketIcon,
  TikTokIcon,
  TimeIcon,
  TransferIcon,
  TrashIcon,
  TransactionsIcon,
  UmbrellaIcon,
  UmbrellaStarIcon,
  WalletIcon,
  WaterIcon,
  XTwitterIcon,
} from 'assets/svg';
import { ScrollView, StyleSheet } from 'react-native';
import Theme from 'theme';

interface IconProps {
  name: string;
  component: React.ReactNode;
}

const icons = [
  { name: 'BankIcon', component: <BankIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'BellIcon', component: <BellIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'BellMarkedIcon', component: <BellMarkedIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'BenefitsIcon', component: <BenefitsIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'BookOpenIcon', component: <BookOpenIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'CalendarIcon', component: <CalendarIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'CardDigitalIcon', component: <CardDigitalIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'CardIcon', component: <CardIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'CardPayIcon', component: <CardPayIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'CarIcon', component: <CarIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'CellphoneIcon', component: <CellphoneIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'CertificateIcon', component: <CertificateIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'CheckMarkCircleIcon', component: <CheckMarkCircleIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'ChevronDownIcon', component: <ChevronDownIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'ChevronLeftIcon', component: <ChevronLeftIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'ChevronRightIcon', component: <ChevronRightIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'CoDiIcon', component: <CoDiIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'CopyIcon', component: <CopyIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'DefaultCard', component: <DefaultCard width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'DotsIcon', component: <DotsIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'DownloadIcon', component: <DownloadIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'EditIcon', component: <EditIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'EthosIcon', component: <EthosIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'EthosQRIcon', component: <EthosQRIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'ExpensesIcon', component: <ExpensesIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'ExportIcon', component: <ExportIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'EyeIcon', component: <EyeIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'EyeSlashIcon', component: <EyeSlashIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'FacebookIcon', component: <FacebookIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'FileIcon', component: <FileIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'FileShiedIcon', component: <FileShiedIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'FileUploadIcon', component: <FileUploadIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'FilmIcon', component: <FilmIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'FilterIcon', component: <FilterIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'GamepadIcon', component: <GamepadIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'GearIcon', component: <GearIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'GraphIcon', component: <GraphIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'InstagramIcon', component: <InstagramIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'KeyCycleIcon', component: <KeyCycleIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'KeyIcon', component: <KeyIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'LampIcon', component: <LampIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'LessIcon', component: <LessIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'LinkedInIcon', component: <LinkedInIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'LockClosedIcon', component: <LockClosedIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'LockIcon', component: <LockIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'LockOpenIcon', component: <LockOpenIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'MapIcon', component: <MapIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'MessageDotsIcon', component: <MessageDotsIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'MoneyIcon', component: <MoneyIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'MoreIcon', component: <MoreIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'PadlockIcon', component: <PadlockIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'PaperIcon', component: <PaperIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'PasscodeIcon', component: <PasscodeIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'PawIcon', component: <PawIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'PeopleIcon', component: <PeopleIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'PersonalProvisionIcon', component: <PersonalProvisionIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'PersonCloudIcon', component: <PersonCloudIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'PhoneIcon', component: <PhoneIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'PinIcon', component: <PinIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'ScanIcon', component: <ScanIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'ShieldIcon', component: <ShieldIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'TicketIcon', component: <TicketIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'TikTokIcon', component: <TikTokIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'TimeIcon', component: <TimeIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'TransactionsIcon', component: <TransactionsIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'TransferIcon', component: <TransferIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'TrashIcon', component: <TrashIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'UmbrellaIcon', component: <UmbrellaIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'UmbrellaStarIcon', component: <UmbrellaStarIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'WalletIcon', component: <WalletIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'WaterIcon', component: <WaterIcon width={25} height={25} color={Theme.Colors.Encore} /> },
  { name: 'XTwitterIcon', component: <XTwitterIcon width={25} height={25} color={Theme.Colors.Encore} /> },
];

const IconsScreen: React.FC = () => {
  const { container, content, iconContainer } = styles;

  const [icon, setIcon] = useState<IconProps>(icons[0]);

  return (
    <SafeArea>
      <Container flex>
        <Header title="Iconos" />
        <Container row center space="between" style={{ padding: 32 }}>
          {icon.component}
          <Text
            text={icon.name}
            textAlign="left"
            marginVertical={8}
            fontWeight="Semibold"
            typography="title"
            textColor={Theme.Colors.DarkSoul}
          />
        </Container>
        <ScrollView
          style={container}
          contentContainerStyle={content}
          showsVerticalScrollIndicator={false}
        >
          {icons.map(({ name, component }) => (
            <Container key={name} style={{ width: '25%' }}>
              <Touchable onPress={() => setIcon({
                name,
                component,
              })}
              >
                <Container
                  key={name}
                  style={iconContainer}
                >
                  <Text
                    text={name}
                    textAlign="center"
                    marginVertical={8}
                    fontWeight="Semibold"
                    numberOfLines={1}
                    adjustsFontSizeToFit
                    fontSize={10}
                    textColor={Theme.Colors.DarkSoul}
                  />
                  <Container flex center middle>
                    {component}
                  </Container>
                </Container>
              </Touchable>
            </Container>
          ))}
        </ScrollView>
      </Container>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: Theme.Sizes.MarginTop,
  },
  content: {
    flexGrow: 1,
    marginHorizontal: Theme.Sizes.Padding,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconContainer: {
    height: 100,
    width: '100%',
    padding: 8,
    borderWidth: 0.5,
    borderColor: Theme.Colors.PlaceboBlue,
  },
});

export default IconsScreen;
