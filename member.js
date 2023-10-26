function skillsMember() {
  var skills = document.getElementById("skills");
  var skillsMember = document.getElementById("skills-member");
  var skillsMemberClose = document.getElementById("skills-member-close");
  skillsMember.style.display = "block";
  skills.style.display = "none";
  skillsMemberClose.onclick = function () {
    skillsMember.style.display = "none";
    skills.style.display = "block";
  };
}