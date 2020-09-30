// function to generate markdown for README
function generateMarkdown(data, githubInfo) {
  return `
# ${data.title}
## Table of Contents
* [Description](#description)
* [Usage](#usage)
* [Installation](#installation)
* [Test](#test)
* [Contributors](#contributors)
* [License](#license)
* [Questions & Contact](#contact)
* [GitHub Name](#GitHub) 

## Description
${data.description}
## Usage 
${data.usage}
## Installation 
${data.installation}
## Test
${data.test}
## Contributors
${data.contributors}
## License
${data.license}
## Questions & Contact
- Email: [${data.email}](mailto:${data.email})
## GitHub
- GitHub Name: [${data.username}](https://github.com/${data.username})
`;}

export default generateMarkdown
