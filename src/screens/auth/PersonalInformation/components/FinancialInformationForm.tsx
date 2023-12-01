import React, { useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Container, Input, Picker } from 'components';

interface Props {
  props?: any;
}

const FinancialInformationForm: React.FC<Props> = ({
  props,
}: Props) => {
  const { t } = useTranslation();

  const occupationRef = useRef<TextInput>(null);
  const numberOfDependentsRef = useRef<TextInput>(null);
  const monthlyIncomeRef = useRef<TextInput>(null);
  const monthlyExpensesRef = useRef<TextInput>(null);
  const questionRef = useRef<TextInput>(null);

  const [occupation, setOccupation] = useState<string>('');
  const [taxRegime, setTaxRegime] = useState<string>('');
  const [civilStatus, setCivilStatus] = useState<string>('');
  const [numberOfDependents, setNumberOfDependents] = useState<string>('');
  const [typeOfProperty, setTypeOfProperty] = useState<string>('');
  const [monthlyIncome, setMonthlyIncome] = useState<string>('');
  const [monthlyExpenses, setMonthlyExpenses] = useState<string>('');
  const [question, setQuestion] = useState<string>('');

  return (
    <Container flex>
      <Input
        label={t('form:occupation')}
        returnKeyType="next"
        onSubmitEditing={() => numberOfDependentsRef.current?.focus()}
        blurOnSubmit={false}
        ref={occupationRef}
        onChangeText={setOccupation}
        value={occupation}
      />
      <Picker
        label={t('form:taxRegime')}
        value={taxRegime}
        onValueChange={setTaxRegime}
        placeholder={t('form:taxRegimeCaption')}
        options={[
          { label: 'NA', value: 'NA' },
        ]}
      />
      <Picker
        label={t('form:civilStatus')}
        value={civilStatus}
        onValueChange={setCivilStatus}
        placeholder={t('form:civilStatusCaption')}
        options={[
          { label: 'Soltero', value: 'single' },
        ]}
      />
      <Input
        label={t('form:numberOfDependents')}
        returnKeyType="next"
        onSubmitEditing={() => monthlyIncomeRef.current?.focus()}
        blurOnSubmit={false}
        ref={numberOfDependentsRef}
        onChangeText={setNumberOfDependents}
        value={numberOfDependents}
      />
      <Picker
        label={t('form:typeOfProperty')}
        value={typeOfProperty}
        onValueChange={setTypeOfProperty}
        placeholder={t('form:typeOfPropertyCaption')}
        options={[
          { label: 'Casa', value: 'house' },
        ]}
      />
      <Input
        label={t('form:monthlyIncome')}
        returnKeyType="next"
        onSubmitEditing={() => monthlyExpensesRef.current?.focus()}
        blurOnSubmit={false}
        keyboardType="numeric"
        ref={monthlyIncomeRef}
        onChangeText={setMonthlyIncome}
        value={monthlyIncome}
      />
      <Input
        label={t('form:monthlyExpenses')}
        returnKeyType="next"
        onSubmitEditing={() => questionRef.current?.focus()}
        blurOnSubmit={false}
        keyboardType="numeric"
        ref={monthlyExpensesRef}
        onChangeText={setMonthlyExpenses}
        value={monthlyExpenses}
      />
      <Input
        label={t('personalInformation:question')}
        returnKeyType="done"
        ref={questionRef}
        onChangeText={setQuestion}
        value={question}
      />
    </Container>
  );
};

export default FinancialInformationForm;
