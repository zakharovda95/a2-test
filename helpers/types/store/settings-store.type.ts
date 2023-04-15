export interface SettingsStoreState {
  body: SettingsStoreStateFields;
}

export interface SettingsStoreStateFields {
  company: string;
  login: string;
  phoneNumber: string;
  firstName: string;
  secondName: string;
  notificationType: string;
  email: string;
  telegram: string;
  timezone: string;
  newAnnouncements: boolean;
  enableColors: boolean;
  transitionType: string;
  useSip: boolean;
}
