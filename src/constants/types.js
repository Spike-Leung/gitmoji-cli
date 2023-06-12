export type Types = {
  name: String,
  description: String
}

export default [
  {
    name: 'build',
    description: 'Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)',
  },
  {
    name: 'ci',
    description: 'Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)',
  },
  {
    name: 'docs',
    description: 'Documentation only changes',
  },
  {
    name: 'feat',
    description: 'A new feature',
  },
  {
    name: 'fix',
    description: 'A bug fix',
  },
  {
    name: 'perf',
    description: 'A code change that improves performance',
  },
  {
    name: 'refactor',
    description: 'A code change that neither fixes a bug nor adds a feature',
  },
  {
    name: 'style',
    description: 'Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)',
  },
  {
    name: 'test',
    description: 'Adding missing tests or correcting existing tests',
  }
]
