import React, {
  useCallback, useEffect, useMemo, useRef, useState,
} from 'react';
import { Platform, StyleSheet, useWindowDimensions } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import MaskedView from '@react-native-masked-view/masked-view';
import { useTranslation } from 'react-i18next';
import {
  Container, FadeInImage, Modal, SafeArea, Text, Touchable,
} from 'components';
import Theme from 'theme';
import { ArrowLeftIcon, IDBorder } from 'assets/svg';

interface Props {
  visible: boolean;
  onSave: (path: string) => void;
  onDismiss: () => void;
}

const IDScanner: React.FC<Props> = ({ visible, onSave, onDismiss }) => {
  const { t } = useTranslation();

  const { width } = useWindowDimensions();

  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.back;

  const cameraRef = useRef<Camera>(null);

  const [captionPosition, setCaptionPosition] = useState<number>(0);
  const [photoPath, setPhotoPath] = useState<string>('');
  const [hasPermission, setHasPermission] = useState<boolean>(false);

  const { borderWidth, borderHeight } = useMemo(() => {
    const bWidth = Math.round(width * 0.6);
    const bHeight = Math.round(bWidth / 0.56);

    return { borderWidth: bWidth, borderHeight: bHeight };
  }, [width]);

  const requestPermission = useCallback(async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission !== 'authorized') {
      const newCameraPermission = await Camera.requestCameraPermission();

      if (newCameraPermission === 'authorized') setHasPermission(true);
    } else setHasPermission(true);
  }, []);

  useEffect(() => {
    if (visible) {
      requestPermission();
      setPhotoPath('');
    }
  }, [requestPermission, visible]);

  const takePhoto = useCallback(async () => {
    const photo = await cameraRef.current?.takePhoto();

    if (photo) setPhotoPath(photo.path);
  }, []);

  return (
    <Modal visible={visible}>
      <SafeArea
        barStyle="light"
        backgroundColor={photoPath ? Theme.Colors.Black : Theme.Colors.Corbeau}
        safeBGColor={Theme.Colors.Corbeau}
      >
        <Container flex>
          <MaskedView
            style={{ flex: 1 }}
            maskElement={(
              <Container flex middle backgroundColor={`rgba(0,0,0,${photoPath ? '0.1' : '0.4'})`}>
                <Container
                  width={borderWidth - 4}
                  height={borderHeight - 10}
                  backgroundColor="black"
                  onLayout={({ nativeEvent: { layout } }) => setCaptionPosition(layout.y - 66)}
                />
              </Container>
            )}
          >
            {photoPath ? (
              <Container flex>
                <FadeInImage
                  source={{ uri: Platform.OS === 'android' ? `file://${photoPath}` : photoPath }}
                  width="100%"
                  height="100%"
                />
              </Container>
            ) : (
              hasPermission && device && visible && (
                <Camera
                  ref={cameraRef}
                  style={{ flex: 1 }}
                  device={device}
                  isActive
                  photo
                  enableHighQualityPhotos
                />
              )
            )}
          </MaskedView>
          <Container style={StyleSheet.absoluteFill} middle>
            <IDBorder width={borderWidth} height={borderHeight} />
          </Container>
          {!photoPath && (
          <Container style={[styles.captionContainer, { top: captionPosition }]}>
            <Text
              text={t('userValidation:alignYourDocumentWithMarks')}
              textColor={Theme.Colors.White}
              typography="caption"
              fontWeight="Medium"
            />
          </Container>
          )}
        </Container>
        {photoPath ? (
          <Container row height={140} backgroundColor={Theme.Colors.Black}>
            <Container flex middle>
              <Touchable onPress={() => setPhotoPath('')} hitSlop={15}>
                <Text text={t('userValidation:recapture')} fontWeight="Medium" textColor={Theme.Colors.White} />
              </Touchable>
            </Container>
            <Container flex middle>
              <Touchable onPress={() => onSave(photoPath)} hitSlop={15}>
                <Text text={t('global:save')} fontWeight="Medium" textColor={Theme.Colors.White} />
              </Touchable>
            </Container>
          </Container>
        ) : (
          <Container middle height={140} backgroundColor={Theme.Colors.Corbeau}>
            <Touchable rounded onPress={takePhoto}>
              <Container middle width={46} height={46} circle backgroundColor={Theme.Colors.White}>
                <Container middle width={42} height={42} circle backgroundColor={Theme.Colors.Corbeau}>
                  <Container width={38} height={38} circle backgroundColor={Theme.Colors.White} />
                </Container>
              </Container>
            </Touchable>
          </Container>
        )}
        <Container style={styles.backButtonContainer}>
          <Touchable rounded onPress={onDismiss}>
            <ArrowLeftIcon color={Theme.Colors.White} />
          </Touchable>
        </Container>
      </SafeArea>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backButtonContainer: {
    position: 'absolute',
    left: 20,
    top: 20,
  },
  captionContainer: {
    position: 'absolute',
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: 'rgba(14, 15, 38, 0.50)',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
});

export { IDScanner };
