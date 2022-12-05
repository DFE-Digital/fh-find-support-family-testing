# fh-family-experience-testing

This repository is responsible for validating / testing various applications on family-hubs/family-experience project

Applications:

- FX UI

Environments:

- development - develop branch
- test - main branch

Regression suites for each of these environments are configured using github actions

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