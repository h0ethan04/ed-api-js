# EdAPI

This JavaScript package is a rewrite of the Python EdAPI package, which can be found [here](https://github.com/smartspot2/edapi/). Massive thanks to the creators for reverse engineering the API endpoints, allowing me to create this package. 

This package is a work in progress, but includes the following:
- Authentication through an EdAPI token (accessible at https://edstem.org/us/settings/api-tokens)


## Installation:
This package is designed to be used with a Node.js server -- make sure that you have installed Node.js from https://nodejs.org/en.

This package uses Axios to make HTTP requests; in order to use this package you need to install Axios from https://axios-http.com/.

I used npm as my package manager, but should you desire to use a different package manager you may do so.

## Usage:
To use this package, you need to create a `.env` file which contains your API key. 
