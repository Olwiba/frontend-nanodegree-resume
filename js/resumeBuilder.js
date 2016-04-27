/* var work = new Object();
var education = {
	"lastSchool" : "Napier Boys High",
	"yearsAttended" : [2009, 2010, 2011, 2012],
	"city" : "Napier"
};

work.current =  "Data Analyist";
work.employer = "Wishbone";
work.years = 1.5;


$("#main").append(work["current"]);
$("#main").append(education.lastSchool); */

var bio = {
	"myName" : "Ollie Bannsiter",
	"role" : "Web Developer",
	"contact" : {
		"mobile" : "027-884-4566",
		"email" : "olwiba@gmail.com",
		"github" : "olwiba",
		"myLocation" : "Wellington"
	},
	"greeting" : "Welcome Ollie!",
	"skills" : ["HTML", "CSS", "Javascript", "Graphical Design", "Systems Design", "Awesomeness"],
	"profilePic" : "images/myself2.png"
}

var work = {
	"roles" : [
	{
		"employer" : "Wishbone",
		"position" : "Data Analyist",
		"location" : "Wellington",
		"dates" : "2015 - Current",
		"description" : "In this role I am responsible for creating many reports , processing invoices and verifying data."
	},
	{
		"employer" : "Four Square",
		"position" : "Checkout Operator",
		"location" : "Napier, New Zealand",
		"dates" : "2012 - 2014",
		"description" : "In this role I was responsible for A+ customer sevice and cash handeling as well as many other jobs around the store such as prep in the Deli and stock rotations"
	}
	]
}

var education = {
	"schools" : [
	{
		"name" : "Dev Academy",
		"type" : "Course",
		"city" : "Wellington",
		"years" : 2016
	},
	{
		"name" : "Weltec",
		"type" : "University",
		"city" : "Wellington",
		"years" : [2014, 2015]
	},
	{
		"name" : "EIT ",
		"type" : "University",
		"city" : "Napier",
		"years" : 2013
	},
	{
		"name" : "Napier Boys",
		"type" : "Highschool",
		"city" : "Napier",
		"years" : [2009, 2010, 2011, 2012]
	},
	{
		"name" : "Taradale",
		"type" : "Intermediate",
		"city" : "Napier",
		"years" : [2007, 2008]
	},
	{
		"name" : "Taradale",
		"type" : "Primary",
		"city" : "Napier",
		"years" : [2004, 2005, 2006]
	}
	]
}

var projects = {
	"project": [
	{
		"project" : "Build a perosnal router + VPN",
		"description" : "Using an old computer and some free software such as Open VPN and PF Sence I was able to build a firewalled router and also create my own personal VPN.",
		"year" : 2015,
		"pictures" : ["images/fry.jpg", "images/fry.jpg"]
	},
		{
		"project" : "Build a Desktop",
		"description" : "It was time for an upgrade, So I decided to build my own personal computer. ",
		"year" : 2015,
		"pictures" : ["images/fry.jpg", "images/fry.jpg"]
	},
		{
		"project" : "Build a perosnal Website",
		"description" : "Using my knowlage of HTML, CSS and some Javascript i was able to build a simple website for myself.",
		"year" : 2016,
		"pictures" : []
	}
	]
}



bio.display = function() {
	var formattedHeaderName = HTMLheaderName.replace("%data%" , bio.myName);
	var formattedHeaderRole = HTMLheaderRole.replace("%data%" , bio.role);

	var formattedMobile = HTMLmobile.replace("%data%" , bio.contact.mobile);
	var formattedEmail = HTMLemail.replace("%data%" , bio.contact.email);
	var formattedGithub = HTMLgithub.replace("%data%" , bio.contact.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contact.myLocation);
	var formattedPic = HTMLbioPic.replace("%data%" , bio.profilePic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%" , bio.greeting);

	$("#header:last").prepend(formattedHeaderRole);
	$("#header").prepend(formattedHeaderName);
	$("#header:last").append(formattedWelcome);
	$("#header:last").append(formattedPic);
	$("#header:last").append(formattedLocation);
	$("#header:last").append(formattedMobile);
	$("#header:last").append(formattedEmail);
	$("#header:last").append(formattedGithub);
};

function displayWork() {
if (bio.skills.length > 0 ) {
	$("#header:last").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%" , bio.skills[0]);
	$("#skills:last").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%" , bio.skills[1]);
	$("#skills:last").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%" , bio.skills[2]);
	$("#skills:last").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%" , bio.skills[3]);
	$("#skills:last").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%" , bio.skills[4]);
	$("#skills:last").append(formattedSkill);
}

for (role in work.roles) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.roles[role].employer);
	var formattedPosition = HTMLworkTitle.replace("%data%" , work.roles[role].position);
	var formattedTitle = formattedEmployer + formattedPosition;
	$(".work-entry:last").append(formattedTitle);

	var formattedDate = HTMLworkDates.replace("%data%", work.roles[role].dates);
	$(".work-entry:last").append(formattedDate);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.roles[role].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.roles[role].description);
	$(".work-entry:last").append(formattedDescription);
}
};



displayWork();

projects.display = function() {
	for(projectNo in projects.project) {
	$("#projects").append(HTMLprojectStart);

	var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[projectNo].project);
	$(".project-entry:last").append(formattedProjectTitle);

	var formattedYear = HTMLprojectDates.replace("%data%" , projects.project[projectNo].year);
	$(".project-entry:last").append(formattedYear);

	var formattedDiscription = HTMLprojectDescription.replace("%data%", projects.project[projectNo].description);
	$(".project-entry:last").append(formattedDiscription);

	if (projects.project[projectNo].pictures.length > 0) {
		for (picture in projects.project[projectNo].pictures) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.project[picture].pictures[picture]);
			$(".project-entry:last").append(formattedImage);
		}
	}
	}
};

education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchool = HTMLschoolName.replace("%data%" , education.schools[school].name);
		var formattedType = HTMLschoolDegree.replace("%data%" , education.schools[school].type);
		var formattedLocation = HTMLschoolLocation.replace("%data%" , education.schools[school].city);
		var formattedDates = HTMLschoolDates.replace("%data%" , education.schools[school].years);


		$(".education-entry:last").append(formattedSchool);
		$(".education-entry:last").append(formattedType);
		$(".education-entry:last").append(formattedLocation);
		$(".education-entry:last").append(formattedDates);

	}
};

bio.display();
projects.display();
education.display();

function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	var lastName = name[1].toUpperCase();
	var firstName= name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	var formattedName = firstName+" "+lastName;
	return(formattedName);
};

inName("ollie bannsiter");
$("#header:last").append(internationalizeButton);

$("#mapDiv").append(googleMap); // I had some problems trying to get this going



	// if(work.roles.hasOwnProperty(jobs)) {
		// console.log(work.roles[0]);
	// }
// }
