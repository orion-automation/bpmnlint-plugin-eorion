const {
    is
} = require('bpmnlint-utils');


/**
 * Rule that reports manual tasks being used.
 */
module.exports = function () {

    function check(node, reporter) {
        if (is(node, 'bpmn:CallActivity')) {
            let rootProcessId = null;
            let parentNode = node;
            while (parentNode.$parent) {
                parentNode = parentNode.$parent;
                if (parentNode.$type === "bpmn:Process") {
                    rootProcessId = parentNode.id;
                    break;
                }
            }
            if (rootProcessId === node.calledElement) {
                reporter.report(node.id, 'CallActivity call self process');
            }
        }
    }

    return {
        check: check
    };
};
