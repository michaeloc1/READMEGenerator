 //function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license != 'None'){ 
    return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
  }
  else{
    return "";
  }
}


//function that returns the license link
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
        return '(https://opensource.org/licenses/MPL-2.0)';
        break;
    case 'BSD_3_Clause_License':
        return '(https://opensource.org/licenses/BSD-3-Clause)';
        break;
    case 'None':
        return '';
        break;
    default:
      break;
  }
}

//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license != 'None'){
    return `This project uses the [${license}]${renderLicenseLink(license)} license`
   
  }
  else{
    return ''
  }
}

// function to generate markdown for README
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
 Email me at: ${data.email}  
 Link to my Github profile: https://github.com/${data.github}   
 Link to this projects github repository: https://github.com/${data.github}/${data.repository}
 `
return strMD
  //return `# ${data.title}`;
}

module.exports = generateMarkdown;
