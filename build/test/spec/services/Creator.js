'use strict';

describe('Service: Creator', function () {

  // load the service's module
  beforeEach(module('TadoApp'));

  // instantiate service
  var Creator;
  beforeEach(inject(function (_Creator_) {
    Creator = _Creator_;
  }));

  it('should do something', function () {
    expect(!!Creator).toBe(true);
  });

});
