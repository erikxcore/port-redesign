(function () {
    'use strict';

		angular.module('materializeApp').controller('WorkController', function($scope){
    		$scope.pageClass = 'page-work';
    		$scope.$emit('currentPage', $scope.pageClass);
    		  $scope.categories = ['Development', 'Both', 'Design'];

				    $scope.work = [{
				        name: 'Mediacom Self Install Walled Garden',
				        category: 'Development',
				        img: 'assets/img/work/self_install.png',
				        value: 'Self Install Walled Garden is the front-end provisioning tool for Mediacom technicians or customers. This application is a Java (JDK6) based application that is intertwined with many external services to help complete a modem\'s installion process. I handled updating the code to implement a single sign on initiative as well as implementing a new design to be better unified with the company\'s current image.',
				        id: '1'
				    },{
				        name: 'Mediacom Internal Travel Request Application',
				        category: 'Both',
				        img: 'assets/img/work/travel.png',
				        value: 'The Mediacom Travel Request web app is a conversion of a legacy Java (JDK5) IE8 application to new standards. I obtained requirements and came up with a development plan to create a cohesive experience across all browsers and mobile devices. The updated application contained many enhancements to better support the Travel department. I worked all facets of the project from design to coding - primarily with jQuery, Bootstrap, and Java.',
				        id: '2'
				    },{
				        name: 'Mediacom Single Sign On Implementation UX',
				        category: 'Both',
				        img: 'assets/img/work/grlr.png',
				        value: 'With Mediacom\'s implementation of a single sign on system I designed and developed the flows for registration and logging in to the new system to be used in conjunction with Walled Garden.',
				        id: '3'
				    },{
				        name: 'Father John\'s Animal House Tracker',
				        category: 'Development',
				        img: 'assets/img/work/fatherjohns.png',
				        value: 'A local animal rescue wanted to get away from keeping all their documents on paper. I helped in coming up with requirements and a plan to quickly develop a fully responsive web application based in PHP (Code Igniter). This application is currently in beta testing before release and is being co-designed by fellow web developer, Dan Sowden of JAM Graphics.',
				        id: '4'
				    },{
				        name: 'Mediacom in Motion 2015',
				        category: 'Both',
				        img: 'assets/img/work/mediacominmotion.png',
				        value: 'A completely custom Wordpress template I created with the use of a few custom plugins to meet the needs of the event organizers. This application was used in conjunction with Sched.org\'s scheduling application.',
				        id: '5'
				    },{
				        name: 'Mediacom Security',
				        category: 'Both',
				        img: 'assets/img/work/security.png',
				        value: 'Another custom Wordpress template I developed. Because this site was hosted internally we were unable to use Google or Microsft services to render PDF documents in browser. I configured a Red Hat server and wrote a Perl script to take in uploaded files and convert them to a workable format before finally converting this file to either HTML or Flash to render in browser with FlexPaper.',
				        id: '6'
				    },{
				        name: 'Linux Server Administration',
				        category: 'Development',
				        img: 'assets/img/work/servers.png',
				        value: 'I own an Ubuntu VPS (non-GUI) that I use to host a small selection of PC game and web servers. I have configured and managed Mumble/Murmur, Counter Strike : Global Offensive, Insurgency, Team Fortress 2, Minecraft, Apache, Arma III, and Starbound servers.',
				        id: '7'
				    },{
				        name: 'Mediacom Fiber Application',
				        category: 'Development',
				        img: 'assets/img/work/fiber.png',
				        value: 'A Java Spring application developed to help keep track of Fiber contracts and site information across multiple departments.',
				        id: '8'
				    },{
				        name: 'Lemcor Transfer',
				        category: 'Both',
				        img: 'assets/img/work/lemcor.png',
				        value: 'A SharePoint Online demonstration of custom masterpages for public-facing websites designed around SPO limitations.',
				        id: '9'
				    },{
				        name: 'SharePoint Masterpages',
				        category: 'Both',
				        img: 'assets/img/work/sharepoint.png',
				        value: 'A variety of masterpages (2007, 2010, 2013) done for clients during my time at FusionMS. Clients included Macy\'s, Toys \'R\' Us, Comporium, Lloyd Bank, Leon Medical Center, Novartis, Titanium, Action Environmental, and Trade Web.',
				        id: '10'
				    },{
				        name: 'cntrfld',
				        category: 'Development',
				        img: 'assets/img/work/cntrfld.png',
				        value: 'A custom WordPress template developed in conjunction with Dan Sowden of JAM Graphics. Photoshop templates and user experience was implemented by myself.',
				        id: '11'
				    },{
				        name: 'SWELL Art Request Form',
				        category: 'Both',
				        img: 'assets/img/work/swell.png',
				        value: 'A small Ruby on Rails project I created during my internship at SWELL. I also aided on mobile form design for Smashbox Cosmetics and some very light iOS development on an application for Nike there.',
				        id: '12'
				    },{
				        name: 'dshbrd',
				        category: 'Both',
				        img: 'assets/img/work/dshbrd.png',
				        value: 'A \'proof of concept\' style PHP application that is fully responsive and uses the browser\'s locational services. To acquire movie times it was neccsary to screen scrape Google\'s content - hence why there is no public release, but, for acquriing weather information and nearby attractions Yelp and Yahoo\'s respective REST API\'s were used.',
				        id: '13'
				    },{
				        name: 'Previous Portfolio',
				        category: 'Both',
				        img: 'assets/img/work/old_portfolio.png',
				        value: 'My previous portfolio site from 2012. Based on HTML5 Boilerplate, jQuery, and some light PHP for parsing through a XML document.',
				        id: '14'
				    },{
				        name: 'NodeJS CS:GO Server Viewer',
				        category: 'Development',
				        img: 'assets/img/work/csgo.png',
				        value: 'My first forray into Node development - this application uses an open source library to support RCON commands through a TCP packet.',
				        id: '15'
				    },{
				        name: 'Tom Haas Photography',
				        category: 'Design',
				        img: 'assets/img/work/tom_haas.png',
				        value: 'A local photographer requested a minimal but elegant watermark logo for his work.',
				        id: '16'
				    },{
				        name: 'Digital Media',
				        category: 'Design',
				        img: 'assets/img/work/infographic.png',
				        value: 'I have worked on various digital media in my career - from event posters, infographics, and more. I am particularly skilled with vector graphics, geometric, and minimal design.',
				        id: '17'
				    },{
				        name: 'Print Media',
				        category: 'Design',
				        img: 'assets/img/work/shirt.png',
				        value: 'Occasionally, I dabble with print design. I have designed album artwork, apparel, and more.',
				        id: '18'
				    }];
				    
		});

})();