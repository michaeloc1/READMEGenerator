// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
return `(https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let strMD = `# ${data.title}\n `;
  console.log('this is the licence ' + data.license)
strMD += `[![License]${renderLicenseBadge(data.license)}]\n`
  strMD += `# Description \n ${data.description}`;
  return strMD;
 // return `# ${data.title}`;
}

module.exports = generateMarkdown;
