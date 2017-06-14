# Contributing

- Ensure you have the latest [Git](https://git-scm.com/) and [Node + npm](https://nodejs.org) installed on your machine
- Run `npm install` to install libraries
- Run [cortex-api](https://github.com/trevordmiller/cortex-api)
- Run `npm run dev` to develop
  - Run `npm link` in `cortex-components`, and `npm link cortex-components` in each of the [cortex-clients](https://github.com/trevordmiller/cortex-clients) to use the components locally in another project as if they were installed from npm directly
- Run `npm run test:watch` to update tests
- Submit a pull request to `master`
- Continuous Integration runs `npm run verify` to ensure things are working as expected
- An admin merges your pull request into `master` and releases a new version
