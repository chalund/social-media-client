[![Automated Unit Testing](https://github.com/chalund/social-media-client/actions/workflows/unit-test.yml/badge.svg)](https://github.com/chalund/social-media-client/actions/workflows/unit-test.yml) [![Code Review](https://github.com/chalund/social-media-client/actions/workflows/gpt.yml/badge.svg)] (https://github.com/chalund/social-media-client/actions/workflows/gpt.yml) [![Deploy static content to Pages](https://github.com/chalund/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/chalund/social-media-client/actions/workflows/pages.yml) [![Code Review](https://github.com/chalund/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/chalund/social-media-client/actions/workflows/gpt.yml)

# Workflow CA: social-media-client
## Description
This school project centers on enhancing the quality of a software package through the application of efficient development practices, drawing upon the knowledge and skills acquired in our course. It involves the utilization of diverse web technologies and testing tools to create a more streamlined and robust development process, reducing the likelihood of errors.


## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Testing](#testing)
* [Contributing](#contributing)

## Installation
Clone the repo, open and initialize git.
```
git init
```

Install dependencies
```
npm i
```

Build SASS
```
npm run build
```


## Testing
Automated testing is set up to run the that automates on Pull Requests(PRs). This means that every proposed change is subject to a thorough testing process right from the start. This proactive approach helps us catch and address issues early, ensuring that our code maintains high quality throughout the entire development cycle

Run Jest and Cypress test together
```
npm run test
```

### Unit testing: Jest
The unit test that the login function fetches and stores a token in browser storage and the logout function clears the token from browser storage.
**Jest unit-test are located /src/js/api/auth/test**

To run Jest test
```
npm run test-unit
```

### End To End testing: Cypress
The e2e test that the user can login and access their profile and not submit hte login form with invalid credentials. The user can logout with the logout button.
**Cypress test are located /cypress/e2e/test**

To run Cypress test interactively
```
npm run test-e2e
```

To run Cypress test in command line
```
npm run test-e2e-cli
```

## Contributing
If you want to contribute to this project, fork the repository and propose your changes in a Pull Request.


