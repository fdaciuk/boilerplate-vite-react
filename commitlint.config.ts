const OFF = 0
const ERROR = 2
const HEADER_MAX_LENGTH = 72

module.exports = {
  rules: {
    'header-max-length': [ERROR, 'always', HEADER_MAX_LENGTH],
    'scope-case': [OFF],
  },
}
