module.exports = {
  configs: {
    recommended: {
      rules: {
        'target-namespace': 'error',
        'call-activity-self': 'warn'
      }
    },
    all: {
      rules: {
        'target-namespace': 'warn',
        'no-manual-task': 'warn'
      }
    }
  }
}
