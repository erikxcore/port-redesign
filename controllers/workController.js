(function () {
    'use strict';

		angular.module('materializeApp').controller('WorkController', function($scope){
    		$scope.pageClass = 'page-work';
    		$scope.$emit('currentPage', $scope.pageClass);
    		  $scope.categories = ['Development', 'Both', 'Design'];

				    $scope.work = [{
				        name: 'Mediacom Self Install Walled Garden',
				        category: 'Development',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'Self Install Walled Garden is the front-end provisioning tool for Mediacom technicians or customers. This application is a Java (JDK6) based that is intertwined with many external services to help complete a modem\'s installion. I handled updating the code to implement Single Sign On as well as introducing a new design to be better unified with the company\'s current image.',
				        id: '1'
				    },{
				        name: 'Mediacom Interal Travel Request Application',
				        category: 'Both',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'The Mediacom Travel Request web app is a conversion of a legacy Java application to new standards. The previous version only supported IE8 - I obtained requirements and came up with a development plan to create an experience across all browsers that was responsive and contained many additons to better support the Travel department. I came up with the design as well as all coding - primarily with jQuery and Java.',
				        id: '2'
				    },{
				        name: 'Mediacom Single Sign On Implementation UX',
				        category: 'Both',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'With Mediacom\'s implementation of SSO I designed and developed the flows for registration and logging in to the new system to be used in conjunction with Walled Garden.',
				        id: '3'
				    },{
				        name: 'Father John\'s Animal House Tracker',
				        category: 'Development',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'A local animal rescue wanted to get away from keeping all their documents on paper. I helped in coming up with requirements and a plan to quickly develop a fully responsive web application based in PHP (Bootstrap - Code Igniter). This application is currently in beta Design+Developmenting before release and is being co-designed by fellow web developer, Dan Sowden of JAM Graphics.',
				        id: '4'
				    },{
				        name: 'Mediacom in Motion 2015',
				        category: 'Both',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'A completely custom Wordpress template I created with the use of a few custom plugins to meet the needs of the event organizers. This application was used in conjunction with Sched.org\'s scheduling application.',
				        id: '5'
				    },{
				        name: 'Mediacom Security',
				        category: 'Both',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'Another custom Wordpress template I developed. Besides being a template - because this site was hosted internally we were unable to use Google or Microsft services to render PDF documents in browser. I configured a Red Hat server and wrote a Perlscript to take in uploaded files and convert them to a workable format before finally converting this file to either HTML or Flash to render in browser with FlexPaper.',
				        id: '6'
				    },{
				        name: 'Linux Server Administration',
				        category: 'Development',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'I own an Ubuntu VPS (non-GUI) that I use to host a small selection of PC game and web servers. I have configured and managed Mumble/Murmur, CS:GO, Insurgency, Team Fortress 2, Minecraft, Apache, Arma III, and Starbound servers.',
				        id: '7'
				    },{
				        name: 'Mediacom Fiber Application',
				        category: 'Development',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'A Java Spring application developed to help keep track of Fiber contracts and site information.',
				        id: '8'
				    },{
				        name: 'Lemcor Transfer',
				        category: 'Both',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'A SharePoint Online demonstration of custom masterpages for public-facing websites designed around SPO limitations.',
				        id: '9'
				    },{
				        name: 'SharePoint Masterpages',
				        category: 'Both',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'A variety of masterpages (2007, 2010, 2013) done for clients during my tenure at FusionMS. Clients included Macy\'s, Toys \'R\' Us, Comporium, Lloyd Bank, Leon Medical Center, Novartis, Titanium, Action Environmental, and Trade Web.',
				        id: '10'
				    },{
				        name: 'cntrfld',
				        category: 'Development',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'A custom WordPress template designed in conjunction with Dan Sowden of JAM Graphics and implemented by me.',
				        id: '11'
				    },{
				        name: 'SWELL Art Request',
				        category: 'Both',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'A small Ruby on Rails project I created during my internship at SWELL. I also aided on mobile form design for Smashbox Cosmetics and some very light iOS development on an application for Nike during my time at SWELL.',
				        id: '12'
				    },{
				        name: 'dshbrd',
				        category: 'Both',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'A \'proof of concept\' style PHP application that is fully responsive and uses browser\'s locational services. To acquire movie times it was neccsary to screen scrape Google\'s content - hence why there is no public release, but, for acquriing weather information and nearby attractions Yelp and Yahoo\'s respective API\'s were used.',
				        id: '13'
				    },{
				        name: 'Previous Portfolio',
				        category: 'Both',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'My previous portfolio site from 2012. Based on HTML5 Boilerplate, jQuery, and some light PHP to parsing through a XML document.',
				        id: '14'
				    },{
				        name: 'NodeJS CS:GO Server Viewer',
				        category: 'Development',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'My first forray into Node development - this application uses a library to support RCON commands through a packet',
				        id: '15'
				    },{
				        name: 'Tom Haas Photography',
				        category: 'Design',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'A local photographer requested a minimal but elegant logo for his projects.',
				        id: '16'
				    },{
				        name: 'Digital Media',
				        category: 'Design',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'A collection of various digital media I have worked on - from event posters, infographics, to more.',
				        id: '17'
				    },{
				        name: 'Print Media',
				        category: 'Design',
				        img: 'assets/img/portfolio/walledgarden.png',
				        value: 'Various types of media I have designed for print - album art, shirts, and more.',
				        id: '18'
				    }];
				    
		});

})();