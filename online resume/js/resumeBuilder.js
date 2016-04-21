var bio = {
	"name" : "ithinco",
	"role" : "Front End Developer",
	"contacts" : {
		"mobile" : "188XXXXXXXX",
		"email" : "ithinco@gmail.com",
		"github" : "ithinco",
		"twitter" : "@ithinco",
		"location" : "China"
	},
	"welcomeMessage" : "Hello",
	"skills" : ["Django","E2C translation&localization","JS"],
	"bioPic" : "images/ithinco.jpg",
	"display" : function(){
		var formattedName = HTMLheaderName.replace("%data%", this.name); 
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		formattedContact = ""
		for (p in this.contacts)
			formattedContact += HTMLcontactGeneric.replace("%contact%",
				p).replace("%data%", this.contacts[p]);
		$("#topContacts").append(formattedContact);

		var formattedPic = HTMLbioPic.replace("%data%", this.bioPic);
		$("#header").append(formattedPic);

		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append(formattedWelcome);

		$("#header").append(HTMLskillsStart);
		var formattedSkills = "";
		for (var i = 0; i < this.skills.length; i++) {
			formattedSkills += HTMLskills.replace("%data%", this.skills[i]);	
		};		
		$("#header").append(formattedSkills);
	}
};

var education = {
	"schools" : [{
		"name" : "TJFSU",
		"location" : "Tianjin, China",
		"degree" : "Master",
		"majors" : ["English translation"],
		"dates" : "2001-2005",
		"url" : "http://www.tjfsu.edu.cn/",
	},
	{
		"name" : "TJFSUS",
		"location" : "Tianjin, China",
		"degree" : "Master",
		"majors" : ["English translation"],
		"dates" : "2001-2005",
		"url" : "http://www.tjfsu.edu.cn/",
	}],
	"onlineCourses" : [{
			"title" : "Front-End Web Developer Nanodegree",
			"school" : "Udacity",
			"date" : "2016-04",
			"url" : "udacity.com"
	},
	{
			"title" : "Front-End Web Developer Nanodegrees",
			"school" : "Udacity",
			"date" : "2016-04",
			"url" : "udacity.com"
	}],
	"display" : function(){
		$("#education").append(HTMLschoolStart);
		var formattedSchool = "";
		for (var i = 0; i < this.schools.length; i++) {
			formattedSchool = HTMLschoolName.replace("%data%", this.schools[i].name)
							+ HTMLschoolDegree.replace("%data%", this.schools[i].degree)
							+ HTMLschoolDates.replace("%data%", this.schools[i].dates)
							+ HTMLschoolLocation.replace("%data%", this.schools[i].location)
							+ HTMLschoolMajor.replace("%data%", this.schools[i].majors);
			$(".education-entry").append(formattedSchool);
		};

		var formattedonline = HTMLonlineClasses;
		for (var i = 0; i < this.onlineCourses.length; i++) {
			formattedonline += HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title)
							+ HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school)
							+ HTMLonlineDates.replace("%data%", this.onlineCourses[i].date)
							+ HTMLonlineURL.replace("%data%", this.onlineCourses[i].url);
		};
		$(".education-entry").append(formattedonline);
	}
};

var work = {
	"jobs" : [
	{
		"employer" : "TechCrunch.cn",
		"title" : "Co-Editor",
		"location" : "Guangzhou, China",
		"dates" : "2013-2014",
		"description" : "placeholder text"
	},
	{
		"employer" : "TechCrunch.cn",
		"title" : "Co-Editor",
		"location" : "Guangzhou, China",
		"dates" : "2013-2014",
		"description" : "placeholder texts"
	}
	],
	"display" : function(){
		var formattedWork = "";
		$("#workExperience").append(HTMLworkStart);
		for (var i = 0; i < this.jobs.length; i++) {
			formattedWork = HTMLworkEmployer.replace("%data%", this.jobs[i].employer)
							+HTMLworkTitle.replace("%data%", this.jobs[i].title)
							+HTMLworkDates.replace("%data%", this.jobs[i].dates)
							+HTMLworkLocation.replace("%data%", this.jobs[i].location)
							+HTMLworkDescription.replace("%data%", this.jobs[i].description);
			$(".work-entry").append(formattedWork);
		}
	}
};

var projects = {
	"projects" : [
		{
			"title" : "Safe Children Program",
			"dates" : "2016-04",
			"description" : "To raise people's awareness of Child protection.",
			"images" : ["images/udacity.jpg","images/udacity.jpg"]
		},
		{
			"title" : "Safe Children Program",
			"dates" : "2016-04",
			"description" : "To raise people's awareness of Child protection.",
			"images" : ["images/udacity.jpg"]
		}
	],
	"display" : function(){
		$("#projects").append(HTMLprojectStart);
		var formattedProjects = "";
		for (var i = 0; i < this.projects.length; i++) {
			formattedProjects = HTMLprojectTitle.replace("%data%", this.projects[i].title)
							+HTMLprojectDates.replace("%data%", this.projects[i].dates)
							+HTMLprojectDescription.replace("%data%", this.projects[i].description);
			for (var j = 0; j < this.projects[i].images.length; j++) {
				formattedProjects += HTMLprojectImage.replace("%data%", this.projects[i].images[j]);
			};

			$(".project-entry").append(formattedProjects);
		}

	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
$("#footerContacts").append(formattedContact);