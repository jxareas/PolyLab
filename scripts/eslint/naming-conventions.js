module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'typeLike',
            format: ['PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'variable',
            modifiers: ['destructured'],
            format: null,
          },
          {
            selector: 'variable',
            format: ['camelCase'],
          },
          {
            selector: 'variable',
            modifiers: ['global'],
            format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
          },
          {
            selector: 'variable',
            modifiers: ['exported'],
            format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
          },
          {
            selector: 'enumMember',
            format: ['PascalCase'],
          },
          {
            selector: 'classMethod',
            format: ['strictCamelCase'],
            filter: {
              // you can expand this regex to add more allowed names
              regex: '(HTML|JSON|CVC|CVCChange|DOM)$',
              match: false,
            },
          },
        ],
      },
    },
    {
      files: [
        '**/projects/*demo/**/*.ts',
        '**/scripts/**/*.ts',
        '**/schematics/**/*.ts',
      ],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'typeLike',
            format: ['PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'class',
            modifiers: ['exported'],
            format: ['PascalCase'],
          },
          {
            selector: 'function',
            modifiers: ['exported'],
            format: ['camelCase'],
          },
          {
            selector: 'interface',
            modifiers: ['exported'],
            format: ['PascalCase'],
          },
          {
            selector: 'variable',
            modifiers: ['destructured'],
            format: null,
          },
          {
            selector: 'variable',
            format: ['camelCase'],
          },
          {
            selector: 'variable',
            modifiers: ['global'],
            format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
          },
          {
            selector: 'variable',
            modifiers: ['exported'],
            format: ['UPPER_CASE', 'camelCase', 'PascalCase'],
          },
          {
            selector: 'enum',
            modifiers: ['exported'],
            format: ['StrictPascalCase'],
          },
          {
            selector: 'enumMember',
            format: ['PascalCase'],
          },
        ],
      },
    },
  ],
};
