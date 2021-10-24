# ESLint config [![npm-version](https://img.shields.io/npm/v/@raing3/eslint-config.svg)](https://www.npmjs.com/package/@raing3/eslint-config) [![CI](https://github.com/raing3/eslint-config/actions/workflows/ci.yml/badge.svg)](https://github.com/raing3/eslint-config/actions/workflows/ci.yml)

Shareable ESLint config for my JS projects.

## Install

Run the following in your project directory:

```
npm install eslint @raing3/eslint-config --save-dev
```

## Usage

### Step 1. Add ESLint rules for the language being used.

**Javascript:**

Add the following to your ESLint config file:

```
{
  "extends": ["@raing3/eslint-config"]
}
```

**TypeScript:**

Install the [TypeScript ESLint plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin):

```
npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser --save-dev
```

Add the following to your ESLint config file:

```
{
  "extends": ["@raing3/eslint-config/typescript"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "projec,t": ["./tsconfig.json"]
  }
}
```

### Step 2. Add ESLint rules for the frameworks/libraries being used.

**React:**

Install the [React ESLint plugin](https://www.npmjs.com/package/eslint-plugin-react);

```
npm install eslint-plugin-react --save-dev
```

Add the following to your ESLint config file:

```
{
  "extends": ["@raing3/eslint-config/react"],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
```

**Jest:**

Install the [Jest ESLint plugin](https://www.npmjs.com/package/eslint-plugin-jest):

```
npm install eslint-plugin-jest --save-dev
```

Add the following to your ESLint config file:

```
{
  "extends": ["@raing3/eslint-config/jest"],
  "env": {
    "jest": true
  }
}
```
