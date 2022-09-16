# This folder contains data fed into our content layer

This layer has been created with the intent of moving towards a CMS tool like 'Contentful' in the future, or serving up that data from our backend (Firebase?). It allows us to manage all of the content displayed on the site in one location.

[Currently, we're using some hacky Google Sheets fun to act as a backend]

## File Naming Conventions

You can think of each file in the 'collections' folder as a MongoDB collection. Filenames should therefore follow the MongoDB conventions here: https://arkusnexus.com/2016/09/12/coding-guidelines-mongodb/

- Key takeaways
  - The name should be a plural of the types of documents to be saved.
  - Use camelCase. Normally you shouldn’t have to because the collection name will be one word (plural of the types of documents saved).

## JSON Conventions

Google's JSON Style Guide:
https://google.github.io/styleguide/jsoncstyleguide.xml

- Key takeaways
  - Property names are camel cased
  - Use double quotes
  - Array types should have plural property names, all other property names should be singular
  - Data should not be arbitrarily grouped for convenience
