# fh-family-experience-testing
## Find support for your family

This repository is responsible for validating / testing various applications on family-hubs/family-experience project

### Applications:

- Family Experience 

### Environments:

- development - develop branch
- test - main branch

### Regression 
Regression suites for each of these environments are configured using github actions


[![ | Dev | FX Regression Pack | CIP dev |](https://github.com/DFE-Digital/fh-family-experience-testing/actions/workflows/fx-dev-regression.yml/badge.svg)](https://github.com/DFE-Digital/fh-family-experience-testing/actions/workflows/fx-dev-regression.yml)

[![| Test | FX Regression Pack | CIP test |](https://github.com/DFE-Digital/fh-family-experience-testing/actions/workflows/fx-test-regression.yml/badge.svg)](https://github.com/DFE-Digital/fh-family-experience-testing/actions/workflows/fx-test-regression.yml)

### Prerequisites

- node
- yarn 

Install dependencies with yarn

```shell
yarn install
```

### Running tests

Run interactive cypress UI

```shell
yarn run open:open:fx-dev
yarn run open:open:fx-test
```
