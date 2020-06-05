# React Server E-commerce

This project is the server part of an e-commerce, it use express, mongoose, passport, it has its own API of products, it's connect with the client part using cors and cloudinary to storage the images.

## Products API

The API is created with images in its majority of products designed by Ecuadorian designers, they are takes as examples since they work with natural materials, the price and description is fake.

## Models

There are three type of models: - Product. - ShoppingCart. - User.

Each of those must to match with the information we are passing through.

## Routes

- Authorization Routes

  > Use bcryptjs to protect the user information and routeGuard.

- Products Routes

  > Get all the products and add it.

- Shopping Routes

  > Update the shopping cart by user, if user exist.

- User Routes

  > Update the information of user in profile.

- Seed Route
  > Create the products API.
