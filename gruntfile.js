const grunt = require('grunt');

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
        main: {
            files: [
                {
                    expand: true, src: ['*/dist/**'], dest: 'src/assets',cwd:'bower_components/'
                }
            ]
        }
    }
});

grunt.loadNpmTasks('grunt-contrib-copy');