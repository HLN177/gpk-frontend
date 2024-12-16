import antfu from '@antfu/eslint-config';

export default antfu(
  {
    typescript: true,
    vue: true,
    formatters: {
      css: true
    },
    ignores: []
  },
  {
    rules: {
      'curly': ['error', 'all'],
      'no-console': 'off',
      'dot-notation': 'off',
      'style/object-curly-newline': ['error', {
        ObjectExpression: {
          multiline: true,
          minProperties: 1
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3
        }
      }],
      'style/indent': ['error', 2],
      'style/quotes': ['error', 'single'],
      'style/semi': ['error', 'always'],
      'style/brace-style': ['error', '1tbs'],
      'style/comma-dangle': ['error', 'never'],
      'style/arrow-parens': ['error', 'as-needed'],
      'style/eol-last': ['error', 'always'],
      'test/prefer-lowercase-title': ['error', {
        ignore: ['describe']
      }],
      'ts/no-namespace': ['error', {
        allowDeclarations: true
      }]
    }
  }
);
