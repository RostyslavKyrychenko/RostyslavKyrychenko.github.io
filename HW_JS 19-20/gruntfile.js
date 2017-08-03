module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['src/js/*.js'],
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
    // concat_css: {
    //   options: {},
    //   dist: {
    //     src: ['style/*.scss'],
    //     dest: 'styles/style.css'
    //   }
    // },
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
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/css',
          src: ['*.scss'],
          dest: 'dist/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      sass: {
        files: ['src/css/*.scss'],
        tasks: ['sass'],
      }
    }
  });
  // grunt.loadNpmTasks('grunt-concat-css');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  

  grunt.registerTask('default', ['concat', 'imagemin', 'cssmin', 'uglify', 'sass', 'watch']);

};