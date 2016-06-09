module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
					'assets/js/*.js',
				],
				dest: 'dist/assets/js/production.js',
			}
		},

		uglify: {
			build: {
				src: 'dist/assets/js/production.js',
				dest: 'dist/assets/js/production.min.js'
			}
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'assets/img/',
					src: ['*/*.{png,jpg,gif}'],
					dest: 'dist/assets/img'
				}]
			},
			options: {
			optimizationLevel: 5,
			progressive: false
			}
		},

		compass: {
		   dev: {
		       options: {              
		           sassDir: ['build/scss'],
		           cssDir: ['dist/assets/css'],
		           environment: 'development'
		       }
		   },
		},

		postcss: {
		    options: {
		      map: false,
		      processors: [
		        require('cssnano')()
		      ]
		    },
		    dist: {
		      src: 'dist/assets/css/*.css'
		    }
		},

		copy: {
		  main: {
		    files: [
		      {expand: true, src: ['assets/php/*'], dest: 'dist/', filter: 'isFile'},
		      {expand: true, src: ['assets/css/animate.min.css'], dest: 'dist/', filter: 'isFile'},
		      {expand: true, src: ['controllers/*'], dest: 'dist/', filter: 'isFile'},
		      {expand: true, src: ['services/*'], dest: 'dist/', filter: 'isFile'},
		      {expand: true, src: ['directives/*'], dest: 'dist/', filter: 'isFile'},
		      {expand: true, src: ['filters/*'], dest: 'dist/', filter: 'isFile'},
		      {expand: true, src: ['pages/*'], dest: 'dist/', filter: 'isFile'},
		      {expand: true, src: ['app.js'], dest: 'dist/', filter: 'isFile'},
		      {expand: true, src: ['routes.js'], dest: 'dist/', filter: 'isFile'},
		      {expand: true, src: ['index.html'], dest: 'dist/', filter: 'isFile'}
		    ],
		  },
		},

		watch: {
			scripts: {
				files: ['assets/js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
					livereload: true,
				},
			},

			css: {
				files: ['build/scss/*.scss'],
				tasks: ['compass:dev'],
				options: {
					spawn: false,
					livereload: true,
				}
			} 
		},

	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-postcss');
	grunt.loadNpmTasks('grunt-devtools');

	grunt.registerTask('default', ['concat','uglify', 'compass','copy']);
	grunt.registerTask('image' , ['imagemin']);
	grunt.registerTask('dev', ['watch']);

};
