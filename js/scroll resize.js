var isMinimal = 0;                                                      // Navigation dots are Minimal Style

function scrollResize () {
    // Links text
    var HomeLink = document.getElementById("HomeLink");
    var ProjectsLink = document.getElementById("ProjectsLink");
    var ContactLink = document.getElementById("ContactLink");

    // Links Balls
    var HomeBall = document.getElementById("HomeSvg");
    var ProjectsBall = document.getElementById("ProjectsSvg");
    var ContactBall = document.getElementById("ContactSvg");
    // Links Minimal
    var HomeMinimal = document.getElementById("HomeSvgMinimal");
    var ProjectsMinimal = document.getElementById("ProjectSvgMinimal");
    var ContactMinimal = document.getElementById("ContactSvgMinimal");

    // Inside Links Balls
    var InHome = document.getElementById("visualHome");
    var InProjectsBall = document.getElementById("visualProjects");
    var InContactBall = document.getElementById("visualContact");

    //Bg of the entire div
    var bgDiv = document.getElementById("stickyNav");
    var bgDivBGColor = window.getComputedStyle( document.getElementById("stickyNav")).getPropertyValue('background-color');
    var isMobile = 0;

    if (bgDivBGColor.localeCompare("rgb(240, 217, 215)") == 0)
        isMobile = 1;

    window.addEventListener("scroll", function() {
        // START Listen for scrolling the Home
        var elementTarget = document.getElementById("HeaderHome");  // Element to check if we passed scrolling
        if (window.scrollY > (elementTarget.offsetTop + elementTarget.offsetHeight)) {
            if (HomeLink.style.display != 'none'){      // Projects
                if (!isMobile){     // If its not mobile
                    HomeLink.style.display = "none";
                    ProjectsLink.style.display = "none";
                    ContactLink.style.display = "none";
                }

                InHome.style.opacity = "0.5";
                InProjectsBall.style.opacity = "1";
                InContactBall.style.opacity = "0.5";
            } // Hide nav links if scrolled past
        } else {                                        // Home
            if (InProjectsBall.style.opacity == "1"){
                HomeLink.style.display = "inline-block";
                ProjectsLink.style.display = "inline-block";
                ContactLink.style.display = "inline-block";

                InHome.style.opacity = "1";
                InProjectsBall.style.opacity = "0.5";
                InContactBall.style.opacity = "0.5";
            } // Show nav links if scrolled back
        }
        // END Listen for scrolling home

        // START Listen for scrolling Projects
        var elementTarget2 = document.getElementById("lastProjectLink");  // Element to check if we passed scrolling
        if (window.scrollY > (elementTarget2.offsetTop + elementTarget2.offsetHeight)) {
            if (!isMinimal){                            // Footer
                if (isMobile){    // If its mobile
                    bgDiv.style.backgroundColor = "#0b0b0b";

                    HomeLink.style.display = "none";
                    ProjectsLink.style.display = "none";
                    ContactLink.style.display = "none";
                }

                HomeBall.style.display = "none";
                ProjectsBall.style.display = "none";
                ContactBall.style.display = "none";

                HomeMinimal.style.display = "inline-block";
                ProjectsMinimal.style.display = "inline-block";
                ContactMinimal.style.display = "inline-block";

                isMinimal = 1;
            } // Hide nav links if scrolled past
        }else {
            if (isMinimal){                             // Projects
                if (isMobile){    // If its mobile
                    bgDiv.style.backgroundColor = "#f0d9d7";

                    HomeLink.style.display = "inline-block";
                    ProjectsLink.style.display = "inline-block";
                    ContactLink.style.display = "inline-block";
                }

                HomeBall.style.display = "inline-block";
                ProjectsBall.style.display = "inline-block";
                ContactBall.style.display = "inline-block";

                HomeMinimal.style.display = "none";
                ProjectsMinimal.style.display = "none";
                ContactMinimal.style.display = "none";

                isMinimal = 0;
            } // Make nav balls white if scrolled back
        }
        // END Listen for scrolling Projects
      });
}
