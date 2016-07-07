//WiP

module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
					'app.js',
					'routes.js',
					'controllers/*.js',
					'services/*.js',
					'directives/*.js',
				],
				dest: 'dist/assets/js/production.min.js',
			},
			extras_js1: {			
				src: [
					'assets/js/jquery-2.2.3.min.js',
					'assets/js/jquery.mixitup.min.js',
        	'assets/js/lodash.js',
          'assets/js/jquery.viewportchecker.min.js',
          'assets/js/jQuery.scrollSpeed.js'
				],
				dest: 'dist/assets/js/production-extra1.min.js',	
			},
			extras_js2: {
				src: [
					'assets/js/angular.min.js',
					'assets/js/materialize.min.js',
					'assets/js/angular-materialize.min.js',
					'assets/js/angular-route.min.js',
					'assets/js/angular-ui-router.min.js',
					'assets/js/angular-parallax.js',
					'assets/js/angular-materialize.min.js',
        	'assets/js/angular-simple-logger.min.js',
	 		    'assets/js/angular-google-maps.min.js',
					'assets/js/angular-animate.min.js',
					'assets/js/angular-recaptcha.min.js',
          'assets/js/ngDialog.min.js',
				],
				dest: 'dist/assets/js/production-extra2.min.js',	
			},
			extras_css: {
				src: [
					'assets/css/materialize.min.css',
					'assets/css/animate.min.css',
					'assets/css/ngdialog.min.css',
				],
				dest: 'dist/assets/css/production-extra.min.css',	
			}			
		},

		uglify: {
			build: {
				src:  'dist/assets/js/production.js',
				dest: 'dist/assets/js/production.min.js'
			},
			more1: {
				src:  'dist/assets/js/production-extra1.js',
				dest: 'dist/assets/js/production-extra1.min.js'
			},
			more2: {
				src:  'dist/assets/js/production-extra2.js',
				dest: 'dist/assets/js/production-extra2.min.js'
			}
		},

		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'assets/img/',
					src: ['**/*.{png,jpg,gif,svg}'],
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
		           config: 'config_prod.rb'
		       }
		   }
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
		      {expand: true, src: ['assets/fonts/**'], dest: 'dist/', filter: 'isFile'},
			    {expand: true, src: ['pages/*'], dest: 'dist/', filter: 'isFile'},
		      {expand: true, src: ['favicon.ico'], dest: 'dist/', filter: 'isFile'},
		      {expand: true, src: ['index.html'], dest: 'dist/', filter: 'isFile'},
		      {expand: true, src: ['404.html'], dest: 'dist/', filter: 'isFile'},
		    ],
		  },
      mac: {
          files: [
          {expand: true, src: ['assets/img/**'], dest: 'dist/', filter: 'isFile'},
        ],
      }
		},

'string-replace': {
  inline: {
    files: {
      'dist/index.html': 'index.html',
    },
    options: {
      replacements: [
		    {
          pattern: '<script src="app.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="directives/mixItUpDirective.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="directives/galleryDirective.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="directives/viewportDirective.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="directives/closeDialogDirective.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="directives/scrollSpeedDirective.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="directives/preloaderFactory.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="controllers/MainController.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="controllers/ResumeController.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="controllers/WorkController.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="controllers/HomeController.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="controllers/BlogController.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="controllers/ContactController.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="services/ContactService.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="controllers/AboutController.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="services/BlogService.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="routes.js"></script>',
          replacement: '<script src="assets/js/production.min.js"></script>'
        }
      ]
    }
  }
  ,

  css: {
    files: {
      'dist/index.html': 'dist/index.html',
    },
    options: {
      replacements: [
		{
          pattern: '<link rel="stylesheet" href="assets/css/materialize.min.css">',
          replacement: ''
        },{
          pattern: '<link rel="stylesheet" href="assets/css/ngDialog.min.css">',
          replacement: ''
        },{
          pattern: '<link rel="stylesheet" href="assets/css/ngDialog-theme-default.min.css">',
          replacement: ''
        },{
          pattern: '<link rel="stylesheet" href="assets/css/animate.min.css">',
          replacement: '<link rel="stylesheet" href="assets/css/production-extra.min.css">'
        }
      ]
    }
  },

  js:  {
      files: {
      'dist/index.html': 'dist/index.html',
    },
    options: {
      replacements: [
		{
          pattern: '<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mixitup/2.1.11/jquery.mixitup.min.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="assets/js/angular-parallax.js"></script>',
          replacement: ''
        },{
          pattern: '<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.18/angular-ui-router.min.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="http://cdnjs.cloudflare.com/ajax/libs/ng-dialog/0.4.0/js/ngDialog.min.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="https://cdnjs.cloudflare.com/ajax/libs/ngInfiniteScroll/1.2.2/ng-infinite-scroll.min.js"></script>',
          replacement: ''
        },{
          pattern: '<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.6/js/materialize.min.js"></script>',
          replacement: ''
        },
        {
          pattern: '<script type="text/javascript" src="assets/js/jQuery.scrollSpeed.js"></script>',
          replacement: ''
        },
        {
          pattern: '<script type="text/javascript" src="assets/js/jquery.viewportchecker.min.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="assets/js/lodash.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="assets/js/angular-recaptcha.min.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="assets/js/angular-simple-logger.min.js"></script>',
          replacement: ''
        },{
          pattern: '<script src="assets/js/angular-google-maps.min.js"></script>',
          replacement: ''
        },{
          pattern: '<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/angular-materialize/0.1.8/angular-materialize.js"></script>',
          replacement: ''
        },{
          pattern: '<script type="text/javascript" src="https://code.jquery.com/jquery-2.2.3.min.js"></script>',
          replacement: '<script src="assets/js/production-extra1.min.js"></script><script src="assets/js/production-extra2.min.js"></script>'
        }
      ]
    }	
  }
},

  errorpg:  {
      files: {
      'dist/404.html': 'dist/404.html',
    },
    options: {
      replacements: [
		  {
          pattern: '<link href="assets/css/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />',
          replacement: '<link href="assets/css/production.min.css" rel="stylesheet" type="text/css" />'
      }
      ]
	}
},

  htmlmin: { 
  	distrib:{
    options: { 
        removeComments: true,
        collapseWhitespace: true
      },
      files: {
        'dist/index.html': 'dist/index.html',
        'dist/404.html': 'dist/404.html'
      }
    }
  },

  cssmin: {
   dist: {
      files: {
         'dist/assets/css/production-extra.min.css': ['dist/assets/css/production-extra.min.css']
      }
  }
},

clean: ['dist/'],

		watch: {
			/*
			scripts: {
				files: ['assets/js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
					livereload: true,
				},
			},*/

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
	grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');


	grunt.registerTask('windows', ['clean','concat','uglify', 'compass','copy:main','imagemin','string-replace','htmlmin','cssmin']);
	
  grunt.registerTask('mac', ['clean','concat','uglify', 'compass','copy','copy:mac','string-replace','htmlmin','cssmin']);
	//grunt.registerTask('mac', ['clean','concat','uglify', 'compass','copy','copy:mac','string-replace','cssmin']);

	grunt.registerTask('test', ['clean','concat', 'compass','copy','string-replace']);

	grunt.registerTask('image' , ['imagemin']);

	grunt.registerTask('dev', ['watch']);

};
