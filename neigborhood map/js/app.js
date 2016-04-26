(function(){
	var map, locations;

	//prepopulated location data
	locations = [
		{lat: 37.422,
		 lng: -122.083,
		 name: "Google",
		 address: "California, Mountain View，Amphitheatre Pkwy",
		 selected: false},
		{lat: 37.485,
		 lng: -122.147,
		 name: "Facebook",
		 address: "California, 1 Hacker Way，Menlo Park",
		 selected: false},
		{lat: 37.402,
		 lng: -122.033,
		 name: "Microsoft",
		 address: "California, 020 Enterprise Way，Sunnyvale",
		 selected: false},
		{lat: 37.777,
		 lng: -122.416,
		 name: "Twitter",
		 address: "California, 1355 Market St #900",
		 selected: false},
		{lat: 37.400,
		 lng: -122.107,
		 name: "Udacity",
		 address: "California, 2465 Latham St，Mountain View",
		 selected: false}
	];

	//Single location
	var Loc = function(lat, lng, address, selected, name, map){

		//Use self to replace this to avoid confusion
		var self = this;

		self.lat = ko.observable(lat);
		self.lng = ko.observable(lng);
		self.address = ko.observable(address);
		self.selected = ko.observable(selected);
		self.name = ko.observable(name);
		self.isVisible = ko.observable(false);
		self.isBouncing = ko.observable(false);
		//Infowindow content
		self.contentStr = ko.observable('');

		//Marker bound to location
		self.marker = new google.maps.Marker({
				position: new google.maps.LatLng(lat, lng),
				title: name});
		
		//Infowindow bound to self.marker
		self.infowindow = new google.maps.InfoWindow();

		//Add a listener to marker
		self.marker.addListener('click', toggleBounce);

		//Get Infowindow content by Ajax
	  	(function (qry, aStr) {
	  		var service_url = 'https://kgsearch.googleapis.com/v1/entities:search';
			var params = {
			  'query': qry,
			  'limit': 1,
			  'indent': true,
			  'key' : 'AIzaSyBAOfHa5mjt2q7BWFjTUvte0LG5PsmOyfA',
			};
			$.getJSON(service_url + '?callback=?', params, function(response) {
				$.each(response.itemListElement, function(i, element) {
					var contentString = '<div id="content">'+
										'<h3>'+
										element['result']['name']+
										'</h3>'+
										'<p>'+
										element['result']['description']+
										'</p>'+
										'</div>';
				  	aStr(contentString);
				});
			}).fail(function(jqXHR, textStatus, error) {
				var errorAlert = '<div class="alert alert-warning alert-dismissible" role="alert">'+
								 '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
								 textStatus+ 
								 ', '+ 
								 error+
								 '</div>';
				$(errorAlert).appendTo(document.body);
			});
		})(self.name, self.contentStr);

		//Monitor animation state by isBouncing
		function toggleBounce() {
			if (self.isBouncing()) {
				self.isBouncing(false);
			}else{
				self.isBouncing(true);
			};
		};

		//Monitor marker visible state by isVisible
		self.isVisible.subscribe(function(state) {
			if (state) {
				self.marker.setMap(map);
			} else {
				self.marker.setMap(null);
			};
		});

		//Monitor animation state by isBouncing
		self.isBouncing.subscribe(function(state) {
			if (state) {
				self.marker.setAnimation(google.maps.Animation.BOUNCE);
				self.infowindow.setContent(self.contentStr());
				self.infowindow.open(map, self.marker);
			}else{
				self.marker.setAnimation(null);
				self.infowindow.close();
			};
		});

		self.isVisible(true);
	}

	//Init map once
	var initMap = function() {
		var myLatlng = new google.maps.LatLng(37.422,-122.083);
		var mapOptions = {
		  zoom: 9,
		  center: myLatlng,
		  mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		map = new google.maps.Map(document.getElementById("map"),
		    mapOptions);
	};
	initMap();

	//App viewmodel
	var ViewModel = function(locations){

		var self = this;

		self.locs = ko.observableArray(locations.map(function(loc) {
			return new Loc(loc.lat, loc.lng, loc.address, loc.selected, loc.name, map);
		}));

		//Search locations and only display results and their markers
		self.query = ko.observable('');
		self.filteredLocs = ko.computed(function(){
			var search  = self.query().toLowerCase();

			return ko.utils.arrayFilter(self.locs(), function(loc) {
				var doesMatch = loc.name().toLowerCase().indexOf(search) >= 0;

				loc.isVisible(doesMatch);

				return doesMatch;
			});
		});

		//Monitor focusin event by setting isBouncing value to true
		self.enableBounce = function() {
			this.isBouncing(true);
		};

		//Monitor focusout event by setting isBouncing value to false
		self.disableBounce = function() {
			this.isBouncing(false);
		};
	};

	//Use prepopulated data to setup app
	var viewModel = new ViewModel(locations || []);
	ko.applyBindings(viewModel);

}());