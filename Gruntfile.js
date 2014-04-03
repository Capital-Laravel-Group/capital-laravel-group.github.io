'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      all: [
        'source/js/*.js'
      ]
    },
    less: {
      dist: {
        files: {
          'style.css': [
            'source/less/style.less'
          ]
        },
        compress: true
      }
    },
    uglify: {
      dist: {
        files: {
          'scripts.js': [
            'source/js/*.js'
          ]
        }
      },
      options: {
        beautify: false
      }
    },
    watch: {
      less: {
        files: [
          'source/less/*.less'
        ],
        tasks: ['less']
      },
      js: {
        files: [
          'source/js/*.js',
        ],
        tasks: ['jshint', 'uglify']
      }
    },
    clean: {
      dist: [
        'style.css',
        'scripts.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'less',
    'uglify',
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
