// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license != 'None'){ 
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
  }
  else{
    return "";
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache_2.0':
        return '(https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'MIT':
        return '(https://opensource.org/licenses/MIT)';
        break;
    case 'GNU_GPL_v3':
        return '(https://www.gnu.org/licenses/gpl-3.0)';
        break;
    case 'Mozilla_Public_License_2.0':
        return '(https://opensource.org/licenses/MPL-2.0)'
        break;
    case 'None':
        return ''
        break;
    default:
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `This project uses the ${license} license`

  }
  else{
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 let strMD = `
 # ${data.title}

 ${renderLicenseBadge(data.license)}${renderLicenseLink(data.license)}

 ## Description
 ${data.description}  
 ${data.motivation}  
 ${data.problem}  
 ${data.learn}

 ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contibuting)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  ${data.email}  
 [Github Repositories](https://github.com/${data.github})
 `
return strMD
  //return `# ${data.title}`;
}

module.exports = generateMarkdown;
