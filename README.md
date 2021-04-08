# LeadConduit SOAP Integration

This module is for making SOAP recipients on the [LeadConduit](http://activeprospect.com/products/leadconduit/) platform.

Please see the
[license agreement](http://creativecommons.org/licenses/by-nc-nd/4.0/).

[![Build Status](https://github.com/activeprospect/leadconduit-integration-soap/workflows/Node.js%20CI/badge.svg)](https://github.com/activeprospect/leadconduit-integration-soap/actions)

Can be tested with the service at [Learning web services](http://www.learnwebservices.com/) (data below also used by [this test flow](https://next.leadconduit-staging.com/flows/606e08f1bcdc8800370be7bc)):

- Url: `http://www.learnwebservices.com/services/hello?WSDL`
- Function: `SayHello`
- Arg.HelloRequest.Name: `{{first_name}}` _(for example)_
- Outcome Search Term: `<HelloResponse><Message>Hello {{lead.first_name}}!</Message></HelloResponse></SayHelloResponse>` _(for example)_
