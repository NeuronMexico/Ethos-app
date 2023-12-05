import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'reactRedux';
import { SafeArea } from 'components';
import { useFloatingAlert } from 'context';
import UserValidationScreen from './UserValidationScreen';
import { IDScanner } from './components';

const UserValidationController: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const floatingAlert = useFloatingAlert();

  const [showIDScanner, setShowIDScanner] = useState<boolean>(false);
  const [frontID, setFrontID] = useState<string>('');
  const [backID, setBackID] = useState<string>('');

  const onSave = useCallback((path: string) => {
    if (!frontID) {
      setShowIDScanner(false);
      setFrontID(path);
    } else {
      setShowIDScanner(false);
      setBackID(path);
    }
  }, [frontID]);

  const onDetectFace = useCallback((path: string) => {
    floatingAlert.show({ message: t('userValidation:photoUploaded'), type: 'success' });
  }, [floatingAlert, t]);

  return (
    <SafeArea>
      <UserValidationScreen
        onPressTakePhoto={() => setShowIDScanner(true)}
        frontIDSaved={!!frontID}
        backIDSaved={!!backID}
        onDetectFace={onDetectFace}
      />
      {showIDScanner && <IDScanner visible={showIDScanner} onDismiss={() => setShowIDScanner(false)} onSave={onSave} />}
    </SafeArea>
  );
};

export default UserValidationController;
