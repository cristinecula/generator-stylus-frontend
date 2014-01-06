module.exports = (grunt) -> 
	grunt.initConfig
		pkg: grunt.file.readJSON 'package.json'

		stylus:
			style:
				options:
					use: [
						require('nib')
						require('normalize')
					]						
				files:
					'public/css/style.css': 'stylus/index.styl'
		watch:
			style:
				files: [ 'stylus/**/*.styl' ]
				tasks: [ 'stylus:style' ]
		copy:
			jquery:
				src: 'bower_components/jquery/jquery.min.js'
				dest: 'public/js/jquery.min.js'

	grunt.loadNpmTasks('grunt-contrib-stylus')
	grunt.loadNpmTasks('grunt-contrib-watch')
	grunt.loadNpmTasks('grunt-contrib-copy')

	grunt.registerTask 'default', ['copy', 'stylus']