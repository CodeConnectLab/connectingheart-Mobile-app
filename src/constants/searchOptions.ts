// Search form dropdown options

export interface DropdownOption {
  label: string;
  value: string;
}

export const countryOptions: DropdownOption[] = [
  { label: 'Select country', value: '' },
  { label: 'India', value: 'india' },
  { label: 'USA', value: 'usa' },
  { label: 'UK', value: 'uk' },
  { label: 'Canada', value: 'canada' },
  { label: 'Australia', value: 'australia' },
  // Add more countries as needed
];

export const religionOptions: DropdownOption[] = [
  { label: 'Select religion', value: '' },
  { label: 'Hindu', value: 'hindu' },
  { label: 'Muslim', value: 'muslim' },
  { label: 'Christian', value: 'christian' },
  { label: 'Sikh', value: 'sikh' },
  { label: 'Buddhist', value: 'buddhist' },
  { label: 'Jain', value: 'jain' },
  { label: 'Parsi', value: 'parsi' },
  { label: 'Jewish', value: 'jewish' },
  // Add more religions as needed
];

export const motherTongueOptions: DropdownOption[] = [
  { label: 'Select mother tongue', value: '' },
  { label: 'Hindi', value: 'hindi' },
  { label: 'English', value: 'english' },
  { label: 'Bengali', value: 'bengali' },
  { label: 'Telugu', value: 'telugu' },
  { label: 'Marathi', value: 'marathi' },
  { label: 'Tamil', value: 'tamil' },
  { label: 'Gujarati', value: 'gujarati' },
  { label: 'Kannada', value: 'kannada' },
  { label: 'Malayalam', value: 'malayalam' },
  { label: 'Punjabi', value: 'punjabi' },
  { label: 'Urdu', value: 'urdu' },
  { label: 'Odia', value: 'odia' },
  { label: 'Assamese', value: 'assamese' },
  // Add more languages as needed
];

export const maritalStatusOptions: DropdownOption[] = [
  { label: 'Select marital status', value: '' },
  { label: 'Never Married', value: 'never_married' },
  { label: 'Divorced', value: 'divorced' },
  { label: 'Widowed', value: 'widowed' },
  { label: 'Awaiting Divorce', value: 'awaiting_divorce' },
];

