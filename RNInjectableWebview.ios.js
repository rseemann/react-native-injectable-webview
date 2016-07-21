/**
 * @providesModule RNInjectableWebview
 * @flow
 */
'use strict';

var NativeRNInjectableWebview = require('NativeModules').RNInjectableWebview;

/**
 * High-level docs for the RNInjectableWebview iOS API can be written here.
 */

var RNInjectableWebview = {
  test: function() {
    NativeRNInjectableWebview.test();
  }
};

module.exports = RNInjectableWebview;
