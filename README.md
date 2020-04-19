# ESLint config

Shareable ESLint config for my JS projects.

## Install

Run the following in your project directory:

```
npm install @raing3/eslint-config --save-dev
```

## Usage

### Step 1. Add ESLint rules for the language being used.

**Javascript:**

Add the following to your ESLint config file:

```
{
  "extends": [
    "eslint:recommended",
    "@raing3/eslint-config"
  ]
}
```

**TypeScript:**

Install the [TypeScript ESLint plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) and follow configuration instructions.

Add the following to your ESLint config file:

```
{
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "@raing3/eslint-config",
    "@raing3/eslint-config/typescript"
  ]
}
```

### Step 2. Add ESLint rules for the frameworks/libraries being used.

**Jest:**

Install the [Jest ESLint plugin](https://www.npmjs.com/package/eslint-plugin-jest) and follow configuration instructions.

Add the following to your ESLint config file:

```
{
  "extends": [
    "plugin:jest/recommended",
    "@raing3/eslint-config/jest"
  ]
}
```