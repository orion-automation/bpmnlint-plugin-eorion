# bpmnlint-plugin-eorion

A bpmlint plug-in based on the [bpmnlint plug-in example](https://github.com/bpmn-io/bpmnlint-plugin-example).


## About

This plugin contributes [rules](#add-rules) and [configuration](#add-configuration) under the `eorion` prefix to bpmnlint.


## Add Rules

The [`./rules`](./rules) folder contains rules that are made available via
this plug-in. Configure them with the `eorion` prefix in your `.bpmnlintrc`:

```json
{
  "rules": {
    "eorion/no-manual-task": "warn"
  }
}
```

Checkout [`./test.js`](./test.js) to learn how to test your rules.


## Add Configuration

As part of the [`./index.js`](./index.js) the plug-in exposes configurations
to extend from using `extends` in the bpmnlint configuration:

```json
{
  "extends": [
    "bpmnlint:recommended",
    "plugin:eorion/recommended"
  ]
}
```