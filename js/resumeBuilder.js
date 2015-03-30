/******************************************************************
 *
 * Daniel Abrego
 * Project P2
 * File: resumeBuilder.js
 * Description: helper code to format the resume and build map
 *
 *******************************************************************/


////////////////////////////////////////////////////////////////////
//
// Resume JSON - projects
//
//////////////////////////////////////////////////////////////////
var projects = {
    "project": [
        {
            "title": "Online Application - ACC Respiratory Therapy Program",
            "dates": "February 2015 - present",
            "description": "Create an online application for the Respiratory Therapy Program at Alvin Community College using skills learned in Udacity Frontend course",
            "images": ["images/ACC-Alvin.jpg"]
        },
        {
            "title": "Satellite Scheduling Consolidation",
            "dates": "June 2000 - June 2001",
            "description": "Worked with group at Lockheed-Martin to consolidate 3 legacy systems into one.  The systems were used by NASA to schedule commercial satellite usage.",
            "images": ["images/lm.jpg", "images/lm2.jpg"]
        }
    ]
};

// appending projects information
projects.display = function () {
    var p1;
    for (p1 in projects.project) {
        $("#projects").append(HTMLprojectStart);

        var title1 = HTMLprojectTitle.replace("%data%", projects.project[p1].title);
        var dates1 = HTMLprojectDates.replace("%data%", projects.project[p1].dates);
        var description1 = HTMLprojectDescription.replace("%data%", projects.project[p1].description);
        $(".project-entry:last").append(title1);
        $(".project-entry:last").append(dates1);
        $(".project-entry:last").append(description1);

        // append project images
        for (ix in projects.project[p1].images) {
            var image1 = HTMLprojectImage.replace("%data%", projects.project[p1].images[ix]);
            $(".project-entry:last").append(image1);
        }

    }
};

projects.display();

//////////////////////////////////////////////////////////////////
//
// Resume JSON - bio
//
//////////////////////////////////////////////////////////////////
var bio = {
    "name": "Daniel Abrego",
    "role": "Programmer",
    "welcomeMessage": "Thank you for visiting my resume",
    "contacts": {
        "mobile": "(281) 846-4551",
        "email": "daniel.abrego@comcast.net",
        "github": "DWAbrego",
        "twitter": "@danielabrego",
        "location": "League City, Texas"
    },
    "skills": ["C#", "HTML", "Javascript", "MS SQL"],
    "bioPic": "images/Daniel.jpg"
};

// appending bio information
bio.display = function()
{
  var f1 = bio.skills.length;

  if (f1 > 0)
  {
      // note #topContacts already exists in index.html, so we want to append -before- it
      // var HTMLheaderName = '<h1 id="name">%data%</h1>';
      var name1 = HTMLheaderName.replace("%data%", bio.name);
      $("#topContacts").before(name1);

      var role1 = HTMLheaderRole.replace("%data%", bio.role);
      $("#topContacts").before(role1);

      var mobile1 = HTMLmobile.replace("%data%", bio.contacts.mobile);
      var email1 = HTMLemail.replace("%data%", bio.contacts.email);
      var twitter1 = HTMLtwitter.replace("%data%", bio.contacts.twitter);
      var github1 = HTMLgithub.replace("%data%", bio.contacts.github);
      var location1 = HTMLlocation.replace("%data%", bio.contacts.location);

      $("#topContacts").append(mobile1);
      $("#topContacts").append(email1);
      $("#topContacts").append(twitter1);
      $("#topContacts").append(github1);
      $("#topContacts").append(location1);

      // "Let's Connect" footer contacts footerContacts
      $("#footerContacts").append(mobile1);
      $("#footerContacts").append(email1);
      $("#footerContacts").append(twitter1);
      $("#footerContacts").append(github1);
      $("#footerContacts").append(location1);

      // id #skills appears in HTMLskillsStart
      // this appends element with id=skillsH3
      // <h3 id="skillsH3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>'
      $("#header").append(HTMLskillsStart);

      var biopic1 = HTMLbioPic.replace("%data%", bio.bioPic);
      var msg1 = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

      // append biopic and welcome message -before- the H3 "Skills at a Glance:"
      $("#skillsH3").before(biopic1);
      $("#skillsH3").before(msg1);

      // append bio skills
      var formatted = "";
      for (x1 in bio.skills)
      {
          formatted = HTMLskills.replace("%data%", bio.skills[x1]);
          $("#skills").append(formatted);
      }
  }
};

bio.display();

//////////////////////////////////////////////////////////////////
//
// Resume JSON - education
//
//////////////////////////////////////////////////////////////////
var education = {
    "schools": [
        {
            "name": "Lamar University",
            "location": "Beaumont, Texas",
            "degree": "BS",
            "dates": "1996-2000",
            "major": ["CS"],
            "url": "http://www.lamar.edu"
        },
        {
            "name": "University of Houston",
            "location": "Houston Texas",
            "degree": "BS",
            "dates": "1987-1992",
            "major": ["Biology"],
            "url": "http://www.uh.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Javascript for Beginners",
            "school": "Udacity",
            "dates": "March 2015",
            "url": "https://www.udacity.com/course/ud804"
        },
        {
            "title": "Jquery",
            "school": "Udacity",
            "dates": "March 2015",
            "url": "https://www.udacity.com/course/ud245"
        }
    ]
};

// appending education information
education.display = function () {
    var e1, o1;

    // iterate the schools
    for (e1 in education.schools) {
        $("#education").append(HTMLschoolStart);

        var name1 = HTMLschoolName.replace("%data%", education.schools[e1].name);
        var nameFinal = name1.replace("#", education.schools[e1].url);
        var degree1 = HTMLschoolDegree.replace("%data%", education.schools[e1].degree);
        var dates1 = HTMLschoolDates.replace("%data%", education.schools[e1].dates);
        var location1 = HTMLschoolLocation.replace("%data%", education.schools[e1].location);

        $(".education-entry:last").append(nameFinal + degree1);
        $(".education-entry:last").append(dates1);

        var majors = education.schools[e1].major;
        for (ix in majors) {
            var major1 = HTMLschoolMajor.replace("%data%", majors[ix]);
            $(".education-entry:last").append(major1);
        }
        $(".education-entry:last").append(location1);
    }

    // begin online courses
    $("#education").append(HTMLonlineClasses);

    for (o1 in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);

        var title1 = HTMLonlineTitle.replace("%data%", education.onlineCourses[o1].title);
        var titleFinal = title1.replace("#", education.onlineCourses[o1].url);
        var school1 = HTMLonlineSchool.replace("%data%", education.onlineCourses[o1].school);
        var dates1 = HTMLonlineDates.replace("%data%", education.onlineCourses[o1].dates);
        var url1 = HTMLonlineURL.replace("%data%", education.onlineCourses[o1].url);
        var urlFinal = url1.replace("#", education.onlineCourses[o1].url);

        $(".education-entry:last").append(titleFinal + school1);
        $(".education-entry:last").append(dates1);
        $(".education-entry:last").append(urlFinal);
    }
};

education.display();

//////////////////////////////////////////////////////////////////
//
// Resume JSON - work
//
//////////////////////////////////////////////////////////////////
var work = {
    "jobs": [
        {
            "employer": "Alvin Community College",
            "title": "Programmer",
            "location": "Alvin, Texas",
            "dates": "April 2011 - present",
            "description": "Assist with maintaining college ERP system which is a Ellucian product powered by a Unidata backend.  Also maintain custom developed ASP.NET software."
        },
        {
            "employer": "Lockheed-Martin",
            "title": "software engineer",
            "location": "Houston, Texas",
            "dates": "June 2000 - April 2011",
            "description": "Worked with a group that maintained legacy software (Motif/C) used by the Johnson Space Center ground control to interface with the international space station."
        }
    ]
};

// appending work information
work.display = function() {
    var x1;
    for (x1 in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var employer1 = HTMLworkEmployer.replace("%data%", work.jobs[x1].employer);
        var title1 = HTMLworkTitle.replace("%data%", work.jobs[x1].title);
        var location1 = HTMLworkLocation.replace("%data%", work.jobs[x1].location);
        var dates1 = HTMLworkDates.replace("%data%", work.jobs[x1].dates);
        var description1 = HTMLworkDescription.replace("%data%", work.jobs[x1].description);
        $(".work-entry:last").append(employer1 + title1);
        $(".work-entry:last").append(location1);
        $(".work-entry:last").append(dates1);
        $(".work-entry:last").append(description1);
    }
};

work.display();

//////////////////////////////////////////////////////////////////
//
// internationalizeButton
//
//////////////////////////////////////////////////////////////////
function inName(parm1)
{
    var res = parm1.trim().split(" ");
    res[1] = res[1].toUpperCase();
    res[0] = res[0].slice(0, 1).toUpperCase() + res[0].slice(1).toLowerCase();
    return res[0] + " " + res[1];
}

$("#main").append(internationalizeButton);

//////////////////////////////////////////////////////////////////
//
// appending google map
//
//////////////////////////////////////////////////////////////////

$("#mapDiv").append(googleMap);
