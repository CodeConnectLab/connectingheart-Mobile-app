import { DropdownOption } from '../constants/searchOptions';

/**
 * Generates age options from 18 to 80
 */
export const generateAgeOptions = (): DropdownOption[] => {
  const options: DropdownOption[] = [{ label: 'Select age', value: '' }];
  for (let i = 18; i <= 80; i++) {
    options.push({ label: i.toString(), value: i.toString() });
  }
  return options;
};

/**
 * Generates height options with imperial and metric measurements
 */
export const generateHeightOptions = (): DropdownOption[] => {
  const heights: DropdownOption[] = [
    { label: 'Select height', value: '' },
    { label: '<4', value: '47' },
    { label: "4'0\"(1.22 mts)", value: '48' },
    { label: "4'1\"(1.24 mts)", value: '49' },
    { label: "4'2\"(1.28 mts)", value: '50' },
    { label: "4'3\"(1.31 mts)", value: '51' },
    { label: "4'4\"(1.34 mts)", value: '52' },
    { label: "4'5\"(1.35 mts)", value: '53' },
    { label: "4'6\"(1.37 mts)", value: '54' },
    { label: "4'7\"(1.40 mts)", value: '55' },
    { label: "4'8\"(1.42 mts)", value: '56' },
    { label: "4'9\"(1.45 mts)", value: '57' },
    { label: "4'10\"(1.47 mts)", value: '58' },
    { label: "4'11\"(1.50 mts)", value: '59' },
    { label: "5'0\"(1.52 mts)", value: '60' },
    { label: "5'1\"(1.55 mts)", value: '61' },
    { label: "5'2\"(1.58 mts)", value: '62' },
    { label: "5'3\"(1.60 mts)", value: '63' },
    { label: "5'4\"(1.63 mts)", value: '64' },
    { label: "5'5\"(1.65 mts)", value: '65' },
    { label: "5'6\"(1.68 mts)", value: '66' },
    { label: "5'7\"(1.70 mts)", value: '67' },
    { label: "5'8\"(1.73 mts)", value: '68' },
    { label: "5'9\"(1.75 mts)", value: '69' },
    { label: "5'10\"(1.78 mts)", value: '70' },
    { label: "5'11\"(1.80 mts)", value: '71' },
    { label: "6'0\"(1.83 mts)", value: '72' },
    { label: "6'1\"(1.85 mts)", value: '73' },
    { label: "6'2\"(1.88 mts)", value: '74' },
    { label: "6'3\"(1.91 mts)", value: '75' },
    { label: "6'4\"(1.93 mts)", value: '76' },
    { label: "6'5\"(1.96 mts)", value: '77' },
    { label: "6'6\"(1.98 mts)", value: '78' },
    { label: "6'7\"(2.01 mts)", value: '79' },
    { label: "6'8\"(2.03 mts)", value: '80' },
    { label: "6'9\"(2.06 mts)", value: '81' },
    { label: "6'10\"(2.08 mts)", value: '82' },
    { label: "6'11\"(2.11 mts)", value: '83' },
    { label: "7'(2.13 mts)", value: '84' },
    { label: '>7', value: '85' },
  ];
  return heights;
};

/**
 * Generates income options in Indian currency
 */
export const generateIncomeOptions = (): DropdownOption[] => {
  return [
    { label: 'Select income', value: '' },
    { label: 'No Income', value: '0.5' },
    { label: 'Rs. 0 - 1 Lakh', value: '1' },
    { label: 'Rs. 1 - 2 Lakh', value: '2' },
    { label: 'Rs. 2 - 3 Lakh', value: '3' },
    { label: 'Rs. 3 - 4 Lakh', value: '4' },
    { label: 'Rs. 4 - 5 Lakh', value: '5' },
    { label: 'Rs. 5 - 7.5 Lakh', value: '6' },
    { label: 'Rs. 7.5 - 10 Lakh', value: '7' },
    { label: 'Rs. 10 - 15 Lakh', value: '8' },
    { label: 'Rs. 15 - 20 Lakh', value: '9' },
    { label: 'Rs. 20 - 25 Lakh', value: '10' },
    { label: 'Rs. 25 - 35 Lakh', value: '11' },
    { label: 'Rs. 35 - 50 Lakh', value: '12' },
    { label: 'Rs. 50 - 70 Lakh', value: '13' },
    { label: 'Rs. 70 - 1 Crore', value: '14' },
    { label: 'Rs. 1 Crore & above', value: '15' },
  ];
};

