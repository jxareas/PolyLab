export interface ConfigurationState {
  inputStyle: string;
  colorScheme: string;
  theme: string;
  ripple: boolean;
  menuMode: string;
  scale: number;
}

export const DefaultConfigurationState: ConfigurationState = {
  ripple: false,
  inputStyle: 'outlined',
  menuMode: 'static',
  colorScheme: 'dark',
  theme: 'lara-dark-teal',
  scale: 14,
};
