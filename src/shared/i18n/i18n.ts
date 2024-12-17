import type { I18nOptions } from 'vue-i18n';
import { createI18n } from 'vue-i18n';

interface TranslationModule {
  [key: string]: string | object
}

const i18nModules: Record<string, { default: TranslationModule }>
  = import.meta.glob(
    '@/locales/**/*.json',
    {
      eager: true
    }
  );

const messages: I18nOptions['messages'] = Object.entries(i18nModules).reduce(
  (
    result: I18nOptions['messages'],
    [path, module]: [string, { default: TranslationModule }]
  ) => {
    const path_params = path.split('/');

    if (path_params.length < 2) {
      return result;
    }

    const locale = path_params[path_params.length - 2];

    if (result) {
      if (!result[locale]) {
        result[locale] = {};
      }
      result[locale] = {
        ...result[locale],
        ...module.default
      };
    }
    return result;
  },
  {}
);

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  mode: 'legacy',
  messages
});

const { t: i18t } = i18n.global;

export default i18n;
export { i18t };
