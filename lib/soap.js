const custom = require('leadconduit-custom').outbound.soap;

module.exports = {
  handle: custom.handle,
  requestVariables: custom.requestVariables,
  responseVariables: custom.responseVariables,
  validate: custom.validate
};
