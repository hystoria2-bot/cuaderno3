import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'es.hystoria2.cuadernogeh',
  appName: 'Cuaderno GH',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  android: {
    allowMixedContent: false,
    backgroundColor: '#f4f5f3'
  }
};

export default config;
