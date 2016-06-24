Portfolio redesign based on Materialize CSS framework and AngularJS using an external Ghost/Node blog hosted externally on an Ubuntu server. 

Built with Grunt, SASS, Compass, Bower,CSS, HTML, JS/jQuery, and NPM.

Bower is not directly needed due to JS/CSS files already being in the assets folder. It is only there if there is some corruption or you would want to pull down the original files or examine unminified files.

Grunt is only needed to creating a 'production' version of the website with all files optimized, minified, and asset files condensed. More or less a proof of concept in working with Grunt files. The appropriate tasks are either 'grunt mac' or 'grunt windows' depending on environment (some issues with imagemin on OSX). These tasks will create (or clear) /dist to allow a simple deployment to any server. In a perfect world, SublimeText would allow direct SFTP access to deploy changes completely automated to a server. (Ant can do it with Tomcat!!)

Compass is only needed to compile the SCSS - if any files are changed within build/scss/ Compass can monitor those changes to generate the proper CSS file.

All design was done in (mostly) Photoshop and Illustrator. Custom directives, services, etc. are mostly plain JavaScript/Angular JS, though Materialize requires jQuery as does the Mix-It-Up plugin. For the most part, however, jQuery code has been split from AngularJS code. All HTML5/CSS3 written manually generated from SASS with some help from various posts on CodePen and Tympanus.net.

NPM, Node, and Ruby in this instance were only used to acquire and use Grunt/Compass. In extension to this, on my Ubuntu server there is a Ghost blog running. Ghost is an open source blogging platform created on Node - I chose it because of the team's development speed, features of the product, and the simple fact that it uses Node and had some manual setup. In order to grab the content from anywhere on this Ubuntu server there is a CORS Anywhere service running (special thanks to https://github.com/Rob--W/cors-anywhere for that) that will process header information to display content. Using Cors-Anywhere I was able to simply plug in my blog's URL after the service and display the content received anywhere through simple JSON parsing.

This site supports IE10+, Chrome, Firefox, Opera, Safari and mobile browsers. Versions of IE under 10 will gracefully display an incompatibility message as will outdated browsers that throw errors on Angular's JavaScript. For users with JavaScript disabled there is also a graceful failure message.

The design was inspired by the video games Kentucky Route Zero, Firewatch, El Shaddai, Journey, Zelda : Wind Waker, The Long Dark, Hyper Light Drifter, Titan Souls, Monument Valley, Oxenfree, and Deus Ex with a healthy audible diet of Perturbator, Outlier, Lifelink, My Iron Lung, army wives, William Bonney, Napolean, seahaven, Touché Amoré, Whirr, Mansions, Vangelis, and Kavinsky. Blade Runner, Drive, Ghost in a Shell, A Scanner Darkly, The Marvelous Misadventures of Flapjack, and Regular Show also served as inspiration.