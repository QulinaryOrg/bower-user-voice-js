/*
 * qulinary-bower-uservoice
 * https://github.com/QulinaryOrg/bower-uservoice
 *
 * Copyright (c) 2016 Qulinary, Inc.
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    release: {
      options: {
        additionalFiles: ['bower.json']
      }
    }
  });
  grunt.registerTask('default', 'release:patch');

};
