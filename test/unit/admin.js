'use strict';

describe('controllers', function(){
  var scope, currentState;

  beforeEach(module('admin'));

  beforeEach(inject(function($rootScope, $state) {
  	scope = $rootScope.$new();
    currentState = $state.get('admin');
  }));

  it('should have a title defined', inject(function($controller) {
    expect(currentState.data.title).toBe('Admin');
  }));
});
