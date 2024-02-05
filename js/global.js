var navbar = document.getElementsByClassName("static-part");
var swipeTheme = document.getElementsByClassName("swipeTheme");

function navbarColorChange() {
    let n = window.scrollY / innerHeight * 100;

    if(n < 30){
        if (swipeTheme[0].checked) {
            navbar[0].style.background = "rgba(113, 82,65, 0.5)";
        } else {
            navbar[0].style.background = "rgb(224, 190, 31, 0.5)";
        }
        navbar[0].style.boxShadow = "none";
    } else {
        if (swipeTheme[0].checked) {
            navbar[0].style.background = "rgba(113, 82,65, 1)";
        } else {
            navbar[0].style.background = "rgb(224, 190, 31, 1)";
        }
        navbar[0].style.boxShadow = "0 5px 8px rgba(38, 25, 18, 0.5)";
    }
}



var sections = document.getElementsByClassName("links");
var emailLogo = document.getElementsByClassName("emailLogo");
var linkedInLogo = document.getElementsByClassName("linkedInLogo");
var instagramLogo = document.getElementsByClassName("instagramLogo");
var gitHubLogo = document.getElementsByClassName("gitHubLogo");
function resetColor(){
    for(let i = 0; i<sections.length; i++) {
        if (swipeTheme[0].checked) {
            sections[i].style.color = "#261912";
        } else  {
            sections[i].style.color = "#3d3b2b";
        }
    }
}
function navColorWhite(row) {
    sections[row].style.color = "white";
}

function colorChange() {
    let n = window.scrollY / innerHeight * 100;

    if(n < 100){
        resetColor();
        sections[0].style.color = "white";
    }
    else if(n >= 100 && n < 175){
        resetColor();
        sections[1].style.color = "white";
    }
    else if(n >= 175 && n < 260){
        resetColor();
        sections[2].style.color = "white";
    }
    else if(n >= 260 && n < 370){
        resetColor();
        sections[3].style.color = "white";
    }
    else if(n >= 370 && n < 420){
        resetColor();
        sections[4].style.color = "white";
    }
    else if(n >= 420) {
        resetColor();
        sections[5].style.color = "white";
    }
}

function colorChangeLogos(variable) {
    let n = window.scrollY / innerHeight * 100;
    let a;
    let b;
    let logo;

    switch(variable) {
        case "email":
            logo = emailLogo;
            a = 278;
            b = 278+70;
            break;
        case "linked-in":
            logo = linkedInLogo;
            a = 272;
            b = 272+70;
            break;
        case "instagram":
            logo = instagramLogo;
            a = 267;
            b = 267+70;
            break;
        default:
            logo = gitHubLogo;
            a = 261;
            b = 261+70;
    }

    if(n < a){
        logo[0].style.color = "white";
        logo[0].style.textShadow = '2px 2px 1px rgba(38, 25, 18, 0.4)';
    }
    else if(n >= a && n < b){
        if (swipeTheme[0].checked) {
            logo[0].style.color = "#866F63";
            logo[0].style.textShadow = '2px 2px 4px rgba(38, 25, 18, 0.4)';
        } else {
            logo[0].style.color = "#daca98";
            logo[0].style.textShadow = '1px 1px 4px rgba(38, 25, 18, 0.2)';
        }
    }
    else if(n >= b) {
        logo[0].style.color = "white";
        logo[0].style.textShadow = '2px 2px 1px rgba(38, 25, 18, 0.4)';
        logo[0].style.transition = '0.5s';
        /*        setTimeout(() => {
                    emailLogo[0].parentElement.parentElement.style.display = 'inline';
                }, 500);*/
    }
    /*    else if(n>=420){
            emailLogo[0].style.color = 'transparent';
            emailLogo[0].style.textShadow = 'none';
            emailLogo[0].style.transition = '0.5s';
            setTimeout(() => {
                emailLogo[0].parentElement.parentElement.style.display = 'none';
            }, 500);
        }*/
}

/*function colorChangeEmailLogo() {
    let n = window.scrollY / innerHeight * 100;

    if(n < 278){
        emailLogo[0].style.color = "white";
        emailLogo[0].style.textShadow = '2px 2px 1px rgba(38, 25, 18, 0.4)';
    }
    else if(n >= 278 && n < 348){
        if (swipeTheme[0].checked) {
            emailLogo[0].style.color = "#866F63";
            emailLogo[0].style.textShadow = '2px 2px 4px rgba(38, 25, 18, 0.4)';
        } else {
            emailLogo[0].style.color = "#daca98";
            emailLogo[0].style.textShadow = '1px 1px 4px rgba(38, 25, 18, 0.2)';
        }
    }
    else if(n >= 348) {
        emailLogo[0].style.color = "white";
        emailLogo[0].style.textShadow = '2px 2px 1px rgba(38, 25, 18, 0.4)';
        emailLogo[0].style.transition = '0.5s';
/!*        setTimeout(() => {
            emailLogo[0].parentElement.parentElement.style.display = 'inline';
        }, 500);*!/
    }
/!*    else if(n>=420){
        emailLogo[0].style.color = 'transparent';
        emailLogo[0].style.textShadow = 'none';
        emailLogo[0].style.transition = '0.5s';
        setTimeout(() => {
            emailLogo[0].parentElement.parentElement.style.display = 'none';
        }, 500);
    }*!/
}
function colorChangeGitHubLogo() {
    let n = window.scrollY / innerHeight * 100;

    if(n < 260){
        gitHubLogo[0].style.color = "white";
        gitHubLogo[0].style.textShadow = '2px 2px 1px rgba(38, 25, 18, 0.4)';
    }
    else if(n >= 260 && n < 331){
        if (swipeTheme[0].checked) {
            gitHubLogo[0].style.color = "#866F63";
            gitHubLogo[0].style.textShadow = '2px 2px 4px rgba(38, 25, 18, 0.4)';
        } else {
            gitHubLogo[0].style.color = "#daca98";
            gitHubLogo[0].style.textShadow = '1px 1px 4px rgba(38, 25, 18, 0.2)';
        }
    }
    else if(n >= 331) {
        gitHubLogo[0].style.color = "white";
        gitHubLogo[0].style.textShadow = '2px 2px 1px rgba(38, 25, 18, 0.4)';
        gitHubLogo[0].style.transition = '0.5s';
/!*        setTimeout(() => {
            gitHubLogo[0].parentElement.parentElement.style.display = 'inline';
        }, 500);*!/
    }
/!*    else if(n>=420 - 15){
        gitHubLogo[0].style.color = 'transparent';
        gitHubLogo[0].style.textShadow = 'none';
        gitHubLogo[0].style.transition = '0.5s';
        setTimeout(() => {
            gitHubLogo[0].parentElement.parentElement.style.display = 'none';
        }, 500);
    }*!/
}
function colorChangeLinkedInLogo() {
    let n = window.scrollY / innerHeight * 100;

    if(n < 273){
        linkedInLogo[0].style.color = "white";
        linkedInLogo[0].style.textShadow = '2px 2px 1px rgba(38, 25, 18, 0.4)';
    }
    else if(n >= 273 && n < 342){
        if (swipeTheme[0].checked) {
            linkedInLogo[0].style.color = "#866F63";
            linkedInLogo[0].style.textShadow = '2px 2px 4px rgba(38, 25, 18, 0.4)';
        } else {
            linkedInLogo[0].style.color = "#daca98";
            linkedInLogo[0].style.textShadow = '1px 1px 4px rgba(38, 25, 18, 0.2)';
        }
    }
    else if(n >= 342) {
        linkedInLogo[0].style.color = "white";
        linkedInLogo[0].style.textShadow = '2px 2px 1px rgba(38, 25, 18, 0.4)';
        linkedInLogo[0].style.transition = '0.5s';
/!*        setTimeout(() => {
            linkedInLogo[0].parentElement.parentElement.style.display = 'inline';
        }, 500);*!/
    }
/!*    else if(n>=420 - 6){
        linkedInLogo[0].style.color = 'transparent';
        linkedInLogo[0].style.textShadow = 'none';
        linkedInLogo[0].style.transition = '0.5s';
        setTimeout(() => {
            linkedInLogo[0].parentElement.parentElement.style.display = 'none';
        }, 500);
    }*!/
}
function colorChangeInstagramLogo() {
    let n = window.scrollY / innerHeight * 100;

    if(n < 267){
        instagramLogo[0].style.color = "white";
        instagramLogo[0].style.textShadow = '2px 2px 1px rgba(38, 25, 18, 0.4)';
    }
    else if(n >= 267 && n < 337){
        if (swipeTheme[0].checked) {
            instagramLogo[0].style.color = "#866F63";
            instagramLogo[0].style.textShadow = '2px 2px 4px rgba(38, 25, 18, 0.4)';
        } else {
            instagramLogo[0].style.color = "#daca98";
            instagramLogo[0].style.textShadow = '1px 1px 4px rgba(38, 25, 18, 0.2)';
        }
    }
    else if(n >= 337) {
        instagramLogo[0].style.color = "white";
        instagramLogo[0].style.textShadow = '2px 2px 1px rgba(38, 25, 18, 0.4)';
        instagramLogo[0].style.transition = '0.5s';
/!*        setTimeout(() => {
            instagramLogo[0].parentElement.parentElement.style.display = 'inline';
        }, 500);*!/
    }
/!*    else if(n>=420 - 10){
        instagramLogo[0].style.color = 'transparent';
        instagramLogo[0].style.textShadow = 'none';
        instagramLogo[0].style.transition = '0.5s';
        setTimeout(() => {
            instagramLogo[0].parentElement.parentElement.style.display = 'none';
        }, 500);
    }*!/
}*/

var styleSheet = document.styleSheets[2];
var trackRule, thumbRule, contactBackground;
var static_part_container = document.getElementsByClassName("static-part");
var links = document.getElementsByClassName("links");
var logo_image = document.getElementsByClassName("logo-image");
var home_container_image = document.getElementsByClassName("home-container-image");
var about_me_container_background = document.getElementsByClassName("about-me-container-background");
var project_container = document.getElementsByClassName("project-container");
var skills_container = document.getElementsByClassName("skills-container");
var education_content = document.getElementsByClassName("education-content");
var education_title = document.getElementsByClassName("education-title");
var hobbies_container = document.getElementsByClassName("hobbies-container-background");
var contact_container_title = document.getElementsByClassName("contact-title");
var email_text = document.getElementsByClassName("email-text");
var contact_text = document.getElementsByClassName("contact-info");

console.log(contact_container_title)
console.log(email_text)
console.log(contact_text)
function checkTheme () {
    let pom
    if (swipeTheme[0].checked) {
/*        document.getElementsByClassName("static-part")[0]
        pom = document.getElementsByClassName("links")
        for (let i=0; i<6; i++) {
            pom[0].style.color = "#261912";
            pom[0].style.textShadow = "2px 2px 1px rgba(38, 25, 18, 0.4)";
        }*/
/*        document.querySelector("#logo a img").src = "Images/PM-Logo-Brown.png";
        document.querySelector("#home-container img").src = "Images/5.jpg";
        document.querySelector("#about-me-container").style.background = "#866F63";
        document.querySelector("#projects-container").style.background = "#b49c8f";
        document.querySelector("#skills-certificates-languages-container").style.background = "#866F63";
        document.querySelector("#education-container-title").style.color = "#866F63";
        document.querySelector("#education-container-content").style.color = "#261912";
        document.querySelector("#hobbies-container").style.background = "#866F63";
        document.querySelector("#contact-container-title").style.color = "#866F63";
        document.querySelector("#email-container").style.color = "#866F63";
        document.querySelector("#email-container a").style.color = "#866F63";
        document.querySelector("#contact-container-content-left-text").style.color = "#866F63";*/

        static_part_container[0].style.background = "#715241";

        for (let i=0; i<6; i++) {
            links[i].style.color = "#261912";
            links[i].style.textShadow = "2px 2px 1px rgba(38, 25, 18, 0.4)";
        }

        logo_image[0].src = "Images/PM-Logo-Brown.png";
        home_container_image[0].src = "Images/5.jpg";
        about_me_container_background[0].style.background = "#866F63";
        project_container[0].style.background = "#b49c8f";
        skills_container[0].style.background = "#866F63";
        education_title[0].style.color = "#866F63";
        education_content[0].style.color = "#261912";
        hobbies_container[0].style.background = "#866F63";
        contact_container_title[0].style.color = "#866F63";
        email_text[0].style.color = "#866F63";
        email_text[0].style.transition = "0.5s";
        email_text[1].style.color = "#866F63";
        email_text[1].style.transition = "0.5s";
        email_text[2].style.color = "#866F63";
        email_text[2].style.transition = "0.5s";
        contact_text[0].style.color = "#866F63";



    } else {
/*        document.getElementsByClassName("static-part")[0]
                pom = document.getElementsByClassName("links")
        for (let i=0; i<6; i++) {
            pom[0].style.color = "#3d3b2b";
            pom[0].style.textShadow = "2px 2px 3px rgba(38, 25, 18, 0.8)";
        }

        document.querySelector("#logo a img").src = "Images/LogoPM-Logo-DarkYellow.png";
        document.querySelector("#home-container img").src = "Images/imgTheme3.jpg";
        document.querySelector("#about-me-container").style.background = "#9a9a9a";
        document.querySelector("#projects-container").style.background = "#daca98";
        document.querySelector("#skills-certificates-languages-container").style.background = "#3a3a3a";
        document.querySelector("#education-container-title").style.color = "#2C2A2A";
        document.querySelector("#education-container-content").style.color = "#2C2A2A";
        document.querySelector("#hobbies-container").style.background = "#999999";
        document.querySelector("#contact-container-title").style.color = "#debc1f";
        document.querySelector("#email-container").style.color = "#debc1f";
        document.querySelector("#email-container a").style.color = "#debc1f";
        document.querySelector("#contact-container-content-left-text").style.color = "#debc1f";*/

        static_part_container[0].style.background = "rgb(222,188,31)";

        for (let i=0; i<6; i++) {
            links[i].style.color = "#3d3b2b";
            links[i].style.textShadow = "2px 2px 3px rgba(38, 25, 18, 0.8)";
        }
        logo_image[0].src = "Images/LogoPM-Logo-DarkYellow.png";
        home_container_image[0].src = "Images/imgTheme3.jpg";
        about_me_container_background[0].style.background = "#9a9a9a";
        project_container[0].style.background = "#daca98";
        skills_container[0].style.background = "#3a3a3a";
        education_title[0].style.color = "#2C2A2A";
        education_content[0].style.color = "#2C2A2A";
        hobbies_container[0].style.background = "#999999";
        contact_container_title[0].style.color = "#debc1f";
        email_text[0].style.color = "#debc1f";
        email_text[0].style.transition = "0.5s";
        email_text[1].style.color = "#debc1f";
        email_text[1].style.transition = "0.5s";
        email_text[2].style.color = "#debc1f";
        email_text[2].style.transition = "0.5s";
        contact_text[0].style.color = "#debc1f";

    }


    for (let i = 0; i < styleSheet.cssRules.length; i++) {
        let rule = styleSheet.cssRules[i];

        if (rule.selectorText === '::-webkit-scrollbar-track') {
            trackRule = rule;
        } else if (rule.selectorText === '::-webkit-scrollbar-thumb') {
            thumbRule = rule;
        } else if (rule.selectorText === '#contact-float #e-mail:hover, #contact-float #linked-in:hover, #contact-float #instagram:hover, #contact-float #git-hub:hover') {
            contactBackground = rule;
        }

        if (trackRule && thumbRule && contactBackground) {
            break;
        }
    }

    if (swipeTheme[0].checked) {
        /*trackRule.style.backgroundColor = 'rgba(113, 82, 65, 0.5)';
        thumbRule.style.backgroundColor = '#715241';*/
        contactBackground.style.background = "#715241";
    } else {
        /*trackRule.style.backgroundColor = 'rgba(224, 190, 31, 0.5)';
        thumbRule.style.backgroundColor = 'rgb(224, 190, 31)';*/
        contactBackground.style.background = "#e0be1f";
    }


}



function changeTheme() {
    checkTheme()
    navbarColorChange()
/*    colorChangeInstagramLogo();
    colorChangeLinkedInLogo();
    colorChangeGitHubLogo();
    colorChangeEmailLogo();*/
    colorChangeLogos("email");
    colorChangeLogos("linked-in");
    colorChangeLogos("git-hub");
    colorChangeLogos("instagram");
    colorChange();
}

window.addEventListener('scroll', function (){
    colorChange();
/*    colorChangeInstagramLogo();
    colorChangeLinkedInLogo();
    colorChangeGitHubLogo();
    colorChangeEmailLogo();*/
    colorChangeLogos("email");
    colorChangeLogos("linked-in");
    colorChangeLogos("git-hub");
    colorChangeLogos("instagram");
    navbarColorChange();
})

window.addEventListener('load', function (){
    changeTheme();
    if (swipeTheme[0].checked) {
        navbar[0].style.background = "rgba(113, 82,65, 0.5)";
    } else {
        navbar[0].style.background = "rgb(224, 190, 31, 0.5)";
    }
    navbar[0].style.boxShadow = "none";
})







