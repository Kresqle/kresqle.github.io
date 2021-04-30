const jsProjectsButton = document.getElementById("js");
const javaProjectsButton = document.getElementById("java");
const pyProjectsButton = document.getElementById("python");

jsProjectsButton.addEventListener("click", () => {
  document.location.href = "../html/javascript-projects.html";
});

javaProjectsButton.addEventListener("click", () => {
  document.location.href = "../html/java-projects.html";
});

pyProjectsButton.addEventListener("click", () => {
  document.location.href = "../html/python-projects.html";
});
