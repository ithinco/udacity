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
	"biopic" : "images/ithinco.jpg",
	"display" : function(){
		var formattedName = HTMLheaderName.replace("%data%", this.name); 
		var formattedRole = HTMLheaderRole.replace("%data%", this.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		var formattedContact = "";
		for (p in this.contacts)
			formattedContact += HTMLcontactGeneric.replace("%contact%",
				p).replace("%data%", this.contacts[p]);
		$("#topContacts").append(formattedContact);
		$("#footerContacts").append(formattedContact);

		var formattedPic = HTMLbioPic.replace("%data%", this.biopic);
		$("#header").append(formattedPic);

		var formattedWelcome = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
		$("#header").append(formattedWelcome);

		var formattedSkills = "";
		var tmpformattedSkills = "";
		for (var i = 0; i < this.skills.length; i++) {
			 tmpformattedSkills += HTMLskills.replace("%data%", this.skills[i]);	
		};
		tmpformattedSkills += "</ul>";
		formattedSkills = HTMLskillsStart.replace("</ul>", tmpformattedSkills);		
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
		var formattedSchool = "";
		for (var i = 0; i < this.schools.length; i++) {
			var tmpformattedSchool = '>' + HTMLschoolName.replace("%data%", this.schools[i].name)
							+ HTMLschoolDegree.replace("%data%", this.schools[i].degree)
							+ HTMLschoolDates.replace("%data%", this.schools[i].dates)
							+ HTMLschoolLocation.replace("%data%", this.schools[i].location)
							+ HTMLschoolMajor.replace("%data%", this.schools[i].majors)
							+ '<';
			formattedSchool += HTMLschoolStart.replace("><", tmpformattedSchool);
		};
		$("#education").append(formattedSchool);
		$("#education").append(HTMLonlineClasses)

		var formattedonline = "";
		for (var i = 0; i < this.onlineCourses.length; i++) {
			var tmpformattedonline = '>' + HTMLonlineTitle.replace("%data%", this.onlineCourses[i].title)
							+ HTMLonlineSchool.replace("%data%", this.onlineCourses[i].school)
							+ HTMLonlineDates.replace("%data%", this.onlineCourses[i].date)
							+ HTMLonlineURL.replace("%data%", this.onlineCourses[i].url)
							+ '<';
			formattedonline += HTMLschoolStart.replace("><", tmpformattedonline);
		};
		$("#education").append(formattedonline)

		
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
		for (var i = 0; i < this.jobs.length; i++) {
			var tmpformattedWork = '>' + HTMLworkEmployer.replace("%data%", this.jobs[i].employer)
							+ HTMLworkTitle.replace("%data%", this.jobs[i].title)
							+ HTMLworkDates.replace("%data%", this.jobs[i].dates)
							+ HTMLworkLocation.replace("%data%", this.jobs[i].location)
							+ HTMLworkDescription.replace("%data%", this.jobs[i].description)
							+ '<';
			formattedWork += HTMLworkStart.replace('><', tmpformattedWork);
		}
		$("#workExperience").append(formattedWork);
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
		var formattedProjects = "";
		for (var i = 0; i < this.projects.length; i++) {
			var tmpformattedProjects = '>' + HTMLprojectTitle.replace("%data%", this.projects[i].title)
							+HTMLprojectDates.replace("%data%", this.projects[i].dates)
							+HTMLprojectDescription.replace("%data%", this.projects[i].description);
			for (var j = 0; j < this.projects[i].images.length; j++) {
				tmpformattedProjects += HTMLprojectImage.replace("%data%", this.projects[i].images[j]);
			};
			tmpformattedProjects += '<';
			formattedProjects += HTMLprojectStart.replace("><", tmpformattedProjects);
		}
		$("#projects").append(formattedProjects);
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);