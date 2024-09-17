var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeOutput = " \n    <h2>Resume</h2>\n    <p><strong>Name:</strong> ".concat(name_1, "</p>\n    <p><strong>email:</strong> ").concat(email, "<p>\n    <p><strong>phone:</strong> ").concat(phone, "<p>\n    <h3>Education</h3>\n    <p> ").concat(education, "<p>\n    <h3>Experience</h3>\n    <p> ").concat(experience, "<p>\n    <h3>Skills</h3>\n    <p> ").concat(skills, "}<p>\n\n\n    ");
        document.addEventListener('DOMContentLoaded', function () {
            // Get the button and the skills section
            var toggleSkillsButton = document.getElementById('toggle-skills');
            var skillsSection = document.getElementById('skills');
            // Set the initial display state of the skills section
            if (skillsSection) {
                skillsSection.style.display = 'block'; // Initially visible
            }
            // Add event listener to toggle the skills section
            if (toggleSkillsButton && skillsSection) {
                toggleSkillsButton.addEventListener('click', function () {
                    // Toggle the display state of the skills section
                    if (skillsSection.style.display === 'none') {
                        skillsSection.style.display = 'block';
                    }
                    else {
                        skillsSection.style.display = 'none';
                    }
                });
            }
        });
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('the resume output elements are missing ');
        }
    }
    else {
        console.error('one or more output elements are missing ');
    }
});
