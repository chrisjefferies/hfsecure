module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            script: {
                src: [
                    'js/jquery.js', // 2.x library
                    'js/script.js'  // Dev file
                ],
                dest: 'js/master.js',
            },
            less: {
                src: [
                    'less/normalize.less',
                    'less/style.less'
                ],
                dest: 'less/master.less',
            }
        },
        uglify: {
            build: {
                src: 'js/master.js',
                dest: 'js/master.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'img/'
                }]
            }
        },
        less: {
            development: {
                options: {
                    "compress": "true"
                },
                files: {
                    "css/master.css": "less/master.less"
                }
            }
        },
        watch: {
            files: ['js/script.js', 'less/style.less'],
            tasks: ['concat:script', 'concat:less', 'less', 'uglify'],
        },
        

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat:script', 'concat:less', 'less', 'uglify']);

};