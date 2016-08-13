'use strict';

const GAME_STATES = require('../enums').GAME_STATES;

const setStateAndInvokeEntryIntent = function() {
  // updates
  // this.handler.state = GAME_STATES.SOME_STATE;

  // response
  // this.emitWithState('SomeIntent');
};

module.exports = {
  NewSession() {
    setStateAndInvokeEntryIntent.call(this);
  },
  LaunchRequest() {
    setStateAndInvokeEntryIntent.call(this);
  },
  Unhandled() {
    console.log('unhandled');
  },
};
