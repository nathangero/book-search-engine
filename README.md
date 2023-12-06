# Book Search Engin

## Description

The purpose of this repo was to convert a RESTful website to use GraphQL instead. The app simply allows a user to search for books via Google Books and save those books to their profile. This app uses MongoDB to contain the data, and JWT to handle login tokens.

There's a backup of the RESTful version of the site if you'd like to compare.

You can find the deployed app here: [https://book-search-engine-nathangero-98817c24f1b4.herokuapp.com/](https://book-search-engine-nathangero-98817c24f1b4.herokuapp.com/)

## Image

Image of user with saved books on their account

<img src="assets/profile-with-books.PNG" width="500" alt="image of the logged in user's profile with 3 books saved"/>

## Learning Points
* GraphQL can make fetching and updating data from a database very simple. It takes extra work to set it up, but it's worth it.
    * Using React with GraphQL I think is worth it too even with the extra React setup that's required.
* Learned about `input` types in GraphQL type definitions. It allows passing in a custom data type to a Query/Mutation function parameter. An example is below at [Input type def](#input-type-def)

## Code Snippets

### Input type def
```js
input UserInput {
  _id: ID
  username: String
  email: String
  password: String
}
```

## Credits


### Resources

[GraphQL custom typedef inputs](https://graphql.org/graphql-js/mutations-and-input-types/)