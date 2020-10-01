# Issues Hunt #

The Issues such as “good first issue” or “help wanted” are difficult to find. Right now a user would have to click on a specific repository and look through their issues to apply label filters. Being able to find issues easier would encourage more people, especially the novice programmers; to contribute to open source projects and give back to the programming community.

### User Story:
* User can search for GitHub Issues across all repositories
* User can filter results by language and label
* User can then sort the results

### [Live Demo](https://issueshunt.herokuapp.com/)

![Screenshots](./public/search_example.png)

## Running locally
1. `git clone https://github.com/fulin426/Issues-Hunt.git`
2. `npm install`
3. `npm start`

Information for Search Issues as part of GitHub Developer Search API
#### [GitHub Search API](https://developer.github.com/v3/search/#search-issues-and-pull-requests)

By default this repository does not include API keys used in development. API calls are limited to 60 per hour without Client ID and Client Secret.

#### [Increasing GitHub Api Rate Limit](https://developer.github.com/v3/#increasing-the-unauthenticated-rate-limit-for-oauth-applications)

or obtain you own Client ID and Client Secret by following the instructions below
#### [How to Obtain Client ID and Client Secret](https://auth0.com/docs/connections/social/github)

## Tech-Stack ##
* HTML
* CSS 
* React.js
* Bootstrap
* Axios
* Font-Awesome
* Github API
