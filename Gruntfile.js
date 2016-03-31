module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		uglify: {
			build: {
				'src': 'src/js/perfmatters.js',
				'dest': 'dest/js/perfmatters.js'
			},
			build: {
				'src': 'src/views/js/main.js',
				'dest': 'dest/views/js/main.js'
			}
		},

		htmlmin: {                                     // Task
	    dist: {                                      // Target
	      options: {                                 // Target options
	        removeComments: true,
	        collapseWhitespace: true
	      },
	      files: {                                   // Dictionary of files
	        'dest/index.html': 'src/index.html',     // 'destination': 'source'
	      }
	    },
	    dev: {                                       // Another target
	      files: {
	        'dest/index.html': 'src/index.html',
	      }
	    }
	  }

	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');

	grunt.registerTask('default', ['uglify']);
	grunt.registerTask('default', ['htmlmin']);
}