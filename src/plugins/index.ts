import type { App } from 'vue';
import i18n from '@/shared/i18n/i18n';
import pinia from '@/stores';
import vuetify from './vuetify';

export function registerPlugins(app: App) {
  app.use(vuetify);
  app.use(pinia);
  app.use(i18n);
}
