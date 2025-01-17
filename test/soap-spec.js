const assert = require('chai').assert;
const integration = require('../lib/soap');

describe('Wrap of custom integration', function() {

  it('wraps handle', (done) => {
    assert.isFunction(integration.handle);

    integration.handle({ url: 'https://example.com' }, (err, event) => {
      // trying to create SOAP client with example.com should error
      assert.exists(err);
      assert.isUndefined(event);
      done();
    });
  });

  it('wraps validate', () => {
    assert.isFunction(integration.validate);
    assert.isNotEmpty(integration.validate({}));
  });

  it('wraps requestVariables', () => {
    assert.isFunction(integration.requestVariables);
    assert.isArray(integration.requestVariables());
  });

  it('wraps responseVariables', () => {
    assert.isFunction(integration.responseVariables);
    assert.isArray(integration.responseVariables());
  });
});
