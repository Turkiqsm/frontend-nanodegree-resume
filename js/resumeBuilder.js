var bio = {
    "name": "Turki Alqasem",

    "role": "web developer",
    "skills": ["programming", "teaching", "softwere engneering"],
    "biopic": "https://pbs.twimg.com/profile_images/913924818755510272/lrHPSFcP_400x400.jpg",
    "welcomeMessage": "Welcome to my Resume Enjoy",
    "contacts": {
        "mobile": "0594391009",
        "email": "trk-96@hotmail.com",
        "github": "Turkiqsm",
        "twitter": "taviqsm",
        "location": "Riyadh"
    },

};




var work = {
    "jobs": [{
            "employer": "Udacity",
            "title": "web developer",
            "location": "Riyadh",
            "dates": "progress",
            "description": "part of team to divlop a website"

        },
        {
            "employer": "KSU",
            "dates": "2014-2018",
            "title": "programer",
            "location": "An Nafal, Riyadh",
            "description": "part of team to divlop a mobile app"
        }
    ]

};


var projects = {

    "projects": [{
        "title": "SDC webpage",
        "description": "a website for a group could SDC",
        "url": "www.SDC-au.com",
        "dates": "2017",
        "images": ["images/Screen Shot 2018-01-12 at 4.50.24 AM.png"]
    }]

};

var education = {


    "schools": [

        {
            "name": "King Saud Universry",
            "location": "King Khalid Rd, King Saud University, Riyadh",
            "degree": "Master",
            "majors": ["CS"],
            "dates": "2014 - 2018"
        }
    ],
    "onlineCourses": [{
        "school": "Udacity",
        "title": "Front End ",
        "dates": "2017 - 2018",
        "url": "www.Udacity.com"
    }]
};
//enable bio

function inName(name) {
    name = name.trim().split(" ");

    name[0] = (name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase());
    name[1] = name[1].toUpperCase();

    name = (name[0] + " " + name[1]);
    return name;
}


bio.display = function() {
    var intname = inName(bio.name);
    var fname = HTMLheaderName.replace("%data%", intname);

    var frole = HTMLheaderRole.replace("%data%", bio.role);
    var picture = HTMLbioPic.replace("%data%", bio.biopic);
    var wm = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var emile = HTMLemail.replace("%data%", bio.contacts.email);
    var github = HTMLgithub.replace("%data%", bio.contacts.github);
    var location = HTMLlocation.replace("%data%", bio.contacts.location);


    $("#header").append(fname);
    $("#header").append(frole);


    $("#topContacts").insertAfter("hr");
    $("#topContacts").append(twitter);
    $("#topContacts").append(emile);
    $("#topContacts").append(mobile);
    $("#topContacts").append(github);
    $("#topContacts").append(location);

    $("#header").append(picture);
    $("#header").append(wm);

    $("#footerContacts").append(twitter);
    $("#footerContacts").append(emile);
    $("#footerContacts").append(mobile);
    $("#footerContacts").append(github);
    $("#footerContacts").append(location);


    //enable skills

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        //  var skill = HTMLskills.replace("%data%", bio.skills[0]);
        //  $("#skills").append(skill);


        for (var skill = 0; skill < bio.skills.length; skill++) {
            var skillfor = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(skillfor);
        }
    }
    //enable Contacts




};

bio.display();

//work
work.display = function() {
    for (var job = 0; job < work.jobs.length; job++) {
        $("#workExperience").append(HTMLworkStart);
        var jobf = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var titlef = HTMLworkTitle.replace("%data%", work.jobs[job].title);

        var jobtitle = jobf + titlef;
        $(".work-entry:last").append(jobtitle);
        var locarion = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(locarion);
        var date = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(date);
        var dis = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(dis);
    }




};
//displaywork();


work.display();

//projects


projects.display = function() {



    for (var proj = 0; proj < projects.projects.length; proj++) {
        $("#projects").append(HTMLprojectStart);

        var projname = HTMLprojectTitle.replace("%data%", projects.projects[proj].title);
        $(".project-entry:last").append(projname);

        var projdate = HTMLprojectDates.replace("%data%", projects.projects[proj].dates);
        $(".project-entry:last").append(projdate);

        var projdis = HTMLprojectDescription.replace("%data%", projects.projects[proj].description);
        $(".project-entry:last").append(projdis);
for(var i=0 ; i< projects.projects[proj].images.length;i++){
        var projpic = HTMLprojectImage.replace("%data%", projects.projects[proj].images[i]);
        $(".project-entry:last").append(projpic);
      }

    }

};

projects.display();

// Education


education.display = function() {
    //schools
    $("#education").append(HTMLschoolStart);
    for (var edu = 0; edu < education.schools.length; edu++) {


        var name = HTMLschoolName.replace("%data%", education.schools[edu].name);

        var digree = HTMLschoolDegree.replace("%data%", education.schools[edu].degree);

        var dates = HTMLschoolDates.replace("%data%", education.schools[edu].dates);

        var loc = HTMLschoolLocation.replace("%data%", education.schools[edu].location);

        //$(".education-entry:last").append(digree);

        $(".education-entry:last").append(dates);
        $(".education-entry:last").append(loc);
        $(".education-entry:last").prepend(name + digree);
        //var majors= HTMLschoolMajor.replace("%data%", education.Schools[edu].majors


        for (var mj = 0; mj < education.schools[edu].majors.length; mj++) {
            var majors = HTMLschoolMajor.replace("%data%", education.schools[edu].majors[mj]);
            $(".education-entry:last").append(majors);

        }

    }

    //online
    if (education.onlineCourses.length > 0) {
        $(".education-entry:last").append(HTMLonlineClasses);

        for (var online = 0; online < education.onlineCourses.length; online++) {
            var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);

            var school = HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);

            var Odates = HTMLonlineDates.replace("%data%", education.onlineCourses[online].dates);

            var url = HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);

            $(".education-entry:last").append(title + school);

            $(".education-entry:last").append(Odates);
            $(".education-entry:last").append(url);

        }
    }

};
education.display();


function displaymap() {

    $("#mapDiv").append(googleMap);


}
displaymap();
