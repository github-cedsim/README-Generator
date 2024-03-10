// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';
  const badgeLinks = {
    'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
    'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'GPL 3.0': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    'BSD 3-Clause': 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
  };
  return `![License Badge](${badgeLinks[license]})`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') return '';
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
  };
  return `[License Link](${licenseLinks[license]})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  return `## License
This project is licensed under the ${license} license. ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${data.license && data.license !== 'None' ? '- [License](#license)' : ''}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.tests}
  
  ${renderLicenseSection(data.license)}
  
  ## Questions
  For any questions, please reach out to me at [${data.email}](mailto:${data.email}).
  GitHub: [${data.github}](https://github.com/${data.github})
  `;
}

module.exports = generateMarkdown;
