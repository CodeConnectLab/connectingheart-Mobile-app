import { Profile } from '../../../types';

export interface DetailField {
  label: string;
  value: string;
  helper?: string;
}

export interface BasicDetailsData {
  summaryFields: DetailField[];
  criticalFields: DetailField[];
  about: string;
  aboutFields: DetailField[];
  educationFields: DetailField[];
  careerSummary: string;
  careerFields: DetailField[];
}

export interface FamilyDetailsData {
  fields: DetailField[];
}

export interface KundaliDetailsData {
  astroFields: DetailField[];
  lifestyleFields: DetailField[];
}

export interface MatchDetailsData {
  percentage: number;
  factors: DetailField[];
}

export interface ProfileDetailTabsData {
  basic: BasicDetailsData;
  family: FamilyDetailsData;
  kundali: KundaliDetailsData;
  match: MatchDetailsData;
}

export interface ProfileDetailTabProps {
  profile: Profile;
}

