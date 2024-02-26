module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'xo',
		'prettier',
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [
				'.eslintrc.{js,cjs}',
			],
			parserOptions: {
				sourceType: 'script',
			},
		},
		{
			extends: [
				'xo-typescript',
				'plugin:react/recommended',
				'plugin:react/jsx-runtime',
				'plugin:react-hooks/recommended',
				'plugin:@tanstack/eslint-plugin-query/recommended',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
			rules: {
				"@typescript-eslint/no-floating-promises": "off",
				"@typescript-eslint/no-unsafe-argument": "off",
				'@typescript-eslint/no-unsafe-call': 'off', // Kintone API has many unsafe calls
				"@typescript-eslint/no-unsafe-assignment": "off", // Kintone API has many unsafe assignments
				"@typescript-eslint/no-unsafe-return": "off", // Kintone API has many unsafe returns
				"@tanstack/query/exhaustive-deps": "error",
				"@tanstack/query/no-rest-destructuring": "warn",
				"@tanstack/query/stable-query-client": "error",
				"no-unused-vars": "off", // Or "@typescript-eslint/no-unused-vars": "off",
				"unused-imports/no-unused-imports": "error",
				"unused-imports/no-unused-vars": [
					"warn",
					{ "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
				],
				"@typescript-eslint/naming-convention": [
					"error",
					{
						"selector": "variable",
						"format": ["camelCase", "PascalCase", "UPPER_CASE"],
						"leadingUnderscore": "allow",
						"trailingUnderscore": "allow",
					},
					{
						"selector": "typeLike",
						"format": ["PascalCase"],
					},
				],
				
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json',
	},
	plugins: [
		'react',
		'prettier',
		'unused-imports'
	],
	rules: {
	},
};
