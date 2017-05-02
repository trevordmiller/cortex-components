# Contributing

- Ensure you have [Git](https://git-scm.com/), [Node](https://nodejs.org), and [Yarn](https://yarnpkg.com) installed on your machine
- Run `yarn` to install libraries
- Run `yarn dev:queries`, `yarn dev:build`, [and `yarn dev:test`] to develop
  - Run `yarn link` in `cortex-components`, and `yarn link cortex-components` in each of the [cortex-clients](https://github.com/trevordmiller/cortex-clients) to use the components locally in another project as if they were installed from npm
- Submit a pull request to `master`
- Continuous Integration runs `yarn verify` to ensure things are working as expected
- An admin merges your pull request into `master` and runs `yarn release` to release a new version
