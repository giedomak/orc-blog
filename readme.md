# orc-blog

A multi-user blog built with [Orchestrate](http://orchestrate.io/), [UserApp](https://www.userapp.io/), [Node.js](http://nodejs.org/), and [Angular.js](https://angularjs.org/).

[![Build Status](https://travis-ci.org/orchestrate-io/orc-blog.svg?branch=master)](https://travis-ci.org/orchestrate-io/orc-blog)
[![Coverage Status](https://coveralls.io/repos/orchestrate-io/orc-blog/badge.png)](https://coveralls.io/r/orchestrate-io/orc-blog)

## Install

    git clone https://github.com/orchestrate-io/orc-blog.git
    cd orc-blog
    export ORCHESTRATE_API_KEY=YOUR_ORCHESTRATE_API_KEY
    export USERAPP_API_KEY=YOUR_USERAPP_API_KEY
    npm install

## Usage

Once you've got orc-blog installed, just `npm start`.

### Client Routes

#### GET /

Displays posts in order of posting. If logged in, navbar has options about profiles and posts.

#### GET /signup

Displays login form. Redirects to '/' on success.

#### GET /login

Displays signup form. Redirects to '/' on success.

#### GET /profile

List summary details of profiles.

#### GET /profile/:id

View details of one profile.

#### GET /profile/:id/edit

Edit a single profile.

#### GET /profile/new

Create a new profile.

#### GET /post/:id

View a single post.

#### GET /search

List posts that match a search posed in the querystring.

### Server Routes

#### GET /api/profile

Get all profiles.

#### GET /api/profile/:id

Get one profile.

#### POST /api/profile

Create a new profile.

#### PUT /api/profile/:id

Update an existing profile.

#### DELETE /api/profile/:id

Delete a profile.

#### GET /api/post

Get all posts. Can be modified by search posed in the querystring.

#### GET /api/post/:id

Get one post.

#### POST /api/post

Create a new post.

#### PUT /api/post/:id

Update a single post.

#### DELETE /api/post/:id

Delete a single post.

## Tests

    npm test

## License

[ISC](http://opensource.org/licenses/ISC), yo.
