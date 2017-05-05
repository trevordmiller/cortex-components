# Contributing

- Ensure you have [Git](https://git-scm.com/), [Node](https://nodejs.org), and [Yarn](https://yarnpkg.com) installed on your machine
- Run `yarn` to install libraries
- Run [cortex-api](https://github.com/trevordmiller/cortex-api)
- Run `yarn dev` to develop
  - Run `yarn link` in `cortex-components`, and `yarn link cortex-components` in each of the [cortex-clients](https://github.com/trevordmiller/cortex-clients) to use the components locally in another project as if they were installed from npm
- Run `yarn test:watch` to update tests
- Submit a pull request to `master`
- Continuous Integration runs `yarn verify` to ensure things are working as expected
- An admin merges your pull request into `master` and releases a new version
