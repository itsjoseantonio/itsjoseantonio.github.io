// Load Grunt
module.exports = function(grunt){
	grunt.initConfig({
		autoprefixer: {
			options:{
					browsers: ['last 8 version','ie 8','ie 9']
				},
			dist: { // Target
				files: {
					'css/main.css': 'css/main.css'
					}
				}
			}, //autoprefixer
		cssmin: {
			target: {
				expand: true,
				cwd: 'css',
				src: 'main.css',
				dest: 'css',
				ext: '.min.css'
			}
		},
		uglify: {
			build: {
				src: 'js/script.js',
				dest: 'js/script.min.js'
			}
		},
		watch: {
			css:{
				files: 'css/main.css',
				tasks: ['autoprefixer','cssmin']
			},
			js: {
				files: 'js/script.js',
				tasks: ['uglify']
			}
		}
	});

	// Load Grunt plugins
	
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	//  Register Grunt tasks
	grunt.registerTask('default', ['watch']);
}