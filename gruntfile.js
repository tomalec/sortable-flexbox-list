'use strict';
var LIVERELOAD_PORT = 35729;
// var lrSnippet = require('connect-livereload')({port: LIVERELOAD_PORT});
// var mountFolder = function (connect, dir) {
//     return connect.static(require('path').resolve(dir));
// };

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // show elapsed time at the end
    // require('time-grunt')(grunt);
    // load all grunt tasks
    // require('load-grunt-tasks')(grunt);


    grunt.initConfig({
        watch: {
            options: {
                nospawn: true,
                livereload: true
            },

            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '*.{html,css}',
                    'examples/*.html',
                    'examples/*.css',
                    'elements/*.html',
                    'elements/*.css'
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, '.')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            server: '.tmp'
        },
        bump: {
          options: {
            files: ['package.json', 'bower.json', 'src/tomalec-sortable-list.html'],
            commit: true,
            commitMessage: '%VERSION%',
            commitFiles: ['package.json', 'bower.json', 'src/tomalec-sortable-list.html'],
            createTag: true,
            tagName: '%VERSION%',
            tagMessage: 'Version %VERSION%',
            push: false,
            // pushTo: 'origin',
            globalReplace: false,
            prereleaseName: false,
            regExp: false
          }
        }
    });

    grunt.loadNpmTasks('grunt-bump');

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',

            'connect:livereload',
            'open',
            'watch'
        ]);
    });
};
