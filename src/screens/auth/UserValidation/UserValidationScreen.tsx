import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { Platform, StyleSheet, useWindowDimensions } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useTranslation } from 'react-i18next';
import { Camera, useCameraDevices, useFrameProcessor } from 'react-native-vision-camera';
import { Face, scanFaces } from 'vision-camera-face-detector';
import { runOnJS } from 'react-native-reanimated';
import { SensorTypes, accelerometer, setUpdateIntervalForType } from 'react-native-sensors';
import {
  Button,
  CommonScrollView,
  Container,
  FadeInImage,
  Header,
  OnboardAssistant,
  Text,
} from 'components';
import Theme from 'theme';
import {
  CameraIcon, IdentificationBack, IdentificationFront, OnboardAssistantBackground,
} from 'assets/svg';
import { SELFIE_ILLUSTRATION } from 'assets/images';

const UMBRAL_ANGLE = 8;
const UMBRAL_EYE_OPEN = 0.90;
const UMBRAL_SENSOR = Platform.select({
  default: { umbralX: 0.15, umbralY: 0.80, umbralZ: 0.35 },
  android: { umbralX: 1.20, umbralY: 8.5, umbralZ: 4.0 },
});

setUpdateIntervalForType(SensorTypes.accelerometer, 400);

interface Props {
  onPressTakePhoto: () => void;
  frontIDSaved: boolean;
  backIDSaved: boolean;
  onDetectFace: (path: string) => void;
  onSubmit: () => void;
}

const UserValidationScreen: React.FC<Props> = ({
  onPressTakePhoto, frontIDSaved, backIDSaved, onDetectFace, onSubmit,
}) => {
  const { t } = useTranslation();

  const cameraRef = useRef<Camera>(null);
  const pagerViewRef = useRef<PagerView>(null);
  const validFaceDetectedRef = useRef<boolean>(false);
  const intervalRef = useRef<NodeJS.Timer>();

  const [currentPage, setCurrentPage] = useState<number>(0);
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [faces, setFaces] = React.useState<Face[]>([]);
  const [photoPath, setPhotoPath] = useState<string>('');
  const [deviceOk, setDeviceOk] = useState<boolean>(false);
  const [cameraOk, setCameraOk] = useState<boolean>(false);
  const [countdown, setCountdown] = useState<number>(3);

  const { width } = useWindowDimensions();

  const devices = useCameraDevices('wide-angle-camera');
  const device = devices.front;

  const requestPermission = useCallback(async () => {
    const cameraPermission = await Camera.getCameraPermissionStatus();
    if (cameraPermission !== 'authorized') {
      const newCameraPermission = await Camera.requestCameraPermission();

      if (newCameraPermission === 'authorized') setHasPermission(true);
    } else setHasPermission(true);
  }, []);

  useEffect(() => {
    if (currentPage === 4) requestPermission();
  }, [currentPage, requestPermission]);

  useEffect(() => {
    if (frontIDSaved) pagerViewRef.current?.setPage(2);
  }, [frontIDSaved]);

  useEffect(() => {
    if (backIDSaved) pagerViewRef.current?.setPage(3);
  }, [backIDSaved]);

  useEffect(() => {
    if (faces?.length === 1) {
      const {
        yawAngle, pitchAngle, rollAngle, leftEyeOpenProbability, rightEyeOpenProbability,
      } = faces[0];

      if (!validFaceDetectedRef.current) {
        if (Math.abs(yawAngle) <= UMBRAL_ANGLE && Math.abs(pitchAngle) <= UMBRAL_ANGLE
            && Math.abs(rollAngle) <= UMBRAL_ANGLE && leftEyeOpenProbability >= UMBRAL_EYE_OPEN
            && rightEyeOpenProbability >= UMBRAL_EYE_OPEN) {
          setCameraOk(true);
        } else setCameraOk(false);
      }
    }
  }, [faces]);

  useEffect(() => {
    const subscription = accelerometer.subscribe(({ x, y, z }) => {
      if (currentPage === 4 && !validFaceDetectedRef.current) {
        const { umbralX, umbralY, umbralZ } = UMBRAL_SENSOR;
        if (Math.abs(x) > umbralX || Math.abs(y) < umbralY || Math.abs(z) > umbralZ) {
          setDeviceOk(false);
        } else setDeviceOk(true);
      }
    });

    return () => subscription.unsubscribe();
  }, [currentPage]);

  useEffect(() => {
    if (deviceOk && cameraOk) {
      let auxCountdown = 3;
      intervalRef.current = setInterval(() => {
        auxCountdown -= 1;
        setCountdown(auxCountdown);

        if (auxCountdown === 0) clearInterval(intervalRef.current);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
      setCountdown(3);
    }
  }, [deviceOk, cameraOk]);

  useEffect(() => {
    if (countdown === 0) {
      validFaceDetectedRef.current = true;
      cameraRef.current?.takePhoto().then((photo) => setPhotoPath(photo.path)).catch(console.log);
    }
  }, [countdown]);

  useEffect(() => {
    if (photoPath) onDetectFace(photoPath);
  }, [onDetectFace, photoPath]);

  const frameProcessor = useFrameProcessor((frame) => {
    'worklet';

    const scannedFaces = scanFaces(frame);
    if (scannedFaces) runOnJS(setFaces)(scannedFaces);
  }, []);

  return (
    <Container flex>
      <Header
        title=""
        ethosHeader
        showBackButton={currentPage > 0}
        backAction={() => pagerViewRef.current?.setPage(currentPage - 1)}
      />
      <PagerView
        ref={pagerViewRef}
        style={{ flex: 1 }}
        onPageSelected={({ nativeEvent: { position } }) => setCurrentPage(position)}
      >
        <CommonScrollView>
          <OnboardAssistant
            title={t('userValidation:registrationStepsCompleted')}
            description={t('userValidation:clickToContinue')}
            messages={[t('userValidation:congratulations'), t('userValidation:prepareForRegistration')]}
            onPress={() => pagerViewRef.current?.setPage(1)}
          />
        </CommonScrollView>
        <CommonScrollView>
          <OnboardAssistant
            title={t('userValidation:INEValidation')}
            description={t('userValidation:verifyIdentity')}
            messages={currentPage >= 1 ? [t('userValidation:securityAndCustomization')] : []}
            onPress={onPressTakePhoto}
            buttonIcon={<CameraIcon color={Theme.Colors.White} ringColor={Theme.Colors.DarkSoul} />}
            buttonLabel={t('userValidation:takePhoto')}
          >
            <Container flex middle style={styles.shadowContainer}>
              <Container style={styles.identificationShadow}>
                <IdentificationFront />
              </Container>
              <Text text={t('userValidation:frontOfYourID')} marginTop={8} typography="caption" fontWeight="Semibold" />
            </Container>
          </OnboardAssistant>
        </CommonScrollView>
        <CommonScrollView>
          <OnboardAssistant
            title={t('userValidation:INEValidation')}
            description={t('userValidation:checkIdentityByScanningBack')}
            messages={currentPage >= 2 ? [t('userValidation:scanBackOfID')] : []}
            onPress={onPressTakePhoto}
            buttonIcon={<CameraIcon color={Theme.Colors.White} ringColor={Theme.Colors.DarkSoul} />}
            buttonLabel={t('userValidation:takePhoto')}
          >
            <Container flex middle style={styles.shadowContainer}>
              <Container style={styles.identificationShadow}>
                <IdentificationBack />
              </Container>
              <Text text={t('userValidation:backOfYourID')} marginTop={8} typography="caption" fontWeight="Semibold" />
            </Container>
          </OnboardAssistant>
        </CommonScrollView>
        <CommonScrollView>
          <OnboardAssistant
            title={t('userValidation:selfieValidation')}
            description={t('userValidation:takeASelfie')}
            messages={currentPage >= 3 ? [t('userValidation:continueWithValidation')] : []}
            onPress={() => pagerViewRef.current?.setPage(4)}
            buttonIcon={<CameraIcon color={Theme.Colors.White} ringColor={Theme.Colors.DarkSoul} />}
            buttonLabel={t('userValidation:takeSelfie')}
          >
            <Container flex middle>
              <Container middle width={235} height={235} circle style={styles.circleDashedContainer}>
                <FadeInImage fadeIn={false} source={SELFIE_ILLUSTRATION} width="102%" height="102%" />
              </Container>
            </Container>
          </OnboardAssistant>
        </CommonScrollView>
        <CommonScrollView>
          <OnboardAssistantBackground style={styles.onboardBackground} />
          <Container flex style={{ paddingHorizontal: Theme.Sizes.Padding }}>
            <Text text={t('userValidation:selfieValidation')} fontSize={22} fontWeight="Bold" marginTop={32} />
            <Text text={t('userValidation:alignYourFaceWithMarks')} typography="caption" marginTop={8} />
            <Container flex middle>
              <Container
                middle
                width={width * 0.78}
                height={width * 0.78}
                circle
                style={[styles.circleDashedContainer, {
                  borderColor: deviceOk && cameraOk ? Theme.Colors.DarkSoul : Theme.Colors.HotCoral,
                }]}
              >
                <Container width={(width * 0.78) - 16} height={(width * 0.78) - 16} circle backgroundColor="black">
                  {hasPermission && device && currentPage === 4 && (
                    photoPath ? (
                      <FadeInImage
                        source={{ uri: Platform.OS === 'android' ? `file://${photoPath}` : photoPath }}
                        width="100%"
                        height="100%"
                      />
                    ) : (
                      <Camera
                        ref={cameraRef}
                        style={{ flex: 1 }}
                        device={device}
                        isActive
                        photo
                        enableHighQualityPhotos
                        frameProcessor={frameProcessor}
                      />
                    )
                  )}
                  <Container middle style={StyleSheet.absoluteFill}>
                    {deviceOk && cameraOk && countdown > 0 && (
                    <Text
                      text={countdown.toString()}
                      fontSize={width * 0.3}
                      fontWeight="Medium"
                    />
                    )}
                  </Container>
                </Container>
              </Container>
            </Container>
            <Button
              label={t('global:continue')}
              marginVertical={32}
              onPress={onSubmit}
              // disabled={!photoPath}
            />
          </Container>
        </CommonScrollView>
      </PagerView>
    </Container>
  );
};

const styles = StyleSheet.create({
  shadowContainer: {
    marginTop: 27,
    borderRadius: 5,
    backgroundColor: Theme.Colors.White,
    shadowColor: 'rgba(25, 27, 89, 0.10)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  identificationShadow: {
    shadowColor: 'rgba(6, 15, 47, 0.20)',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 6,
    elevation: 6,
  },
  circleDashedContainer: {
    borderWidth: 10,
    borderColor: Theme.Colors.DarkSoul,
    borderStyle: 'dashed',
    overflow: 'hidden',
  },
  onboardBackground: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

export default UserValidationScreen;
