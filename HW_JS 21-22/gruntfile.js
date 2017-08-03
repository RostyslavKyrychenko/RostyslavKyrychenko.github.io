module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/tmpl.js', 'src/js/script.js'],
        dest: 'dist/js/script.js'
      }
    },
    uglify: {
      dist: {
        src: ['dist/js/script.js'],
        dest: 'dist/js/script.min.js'
      }
    },
    imagemin: {
      static: {
        options: {
          progressive: true,
          interlaced: true
        },
        files: [
          {
            expand: true,
            cwd: 'src/img/',
            src: ['*.{jpg,png,gif}'],
            dest: 'dist/img/',
          }
        ]
      }
    },
    concat_css: {
      options: {},
      dist: {
        src: ['src/css/*.css'],
        dest: 'dist/css/style.css'
      }
    },
    cssmin: {
      options: {
        shorthandCompacting: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/css/style.min.css': ['dist/css/style.css']
        }
      }
    },
    babel: {
        options: {
          sourceMap: false,
          presets: ['es2015']
        },
        dist: {
          files: [{
            expand: true,
            cwd: 'src/js/es6',
            src: ['*.js'],
            dest: 'src/js',
            ext: '.js',
            extDot: 'first'
          }]
        }
    },
    jasmine: {
      test: {
        src: 'js/*.js',
        options: {
          vendor: [
            'spec/lib/jquery.js',
            'spec/lib/jasmine-jquery.js'
          ],
          specs: 'spec/*.js'
        }
      }
    },
    jasmine_node: {
      options: {
        forceExit: true,
        match: '.',
        matchall: false,
        extensions: 'js',
        specNameMatcher: 'spec'
      },
      all: ['spec/']
    },
    watch: {
      babel: {
        files: ['src/js/*.js'],
        tasks: ['babel'],
      }
    }
  });
  grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jasmine-node');
  grunt.loadNpmTasks('grunt-contrib-watch');
  

  grunt.registerTask('default', ['concat_css', 'cssmin', 'babel', 'concat', 'uglify',]);

};