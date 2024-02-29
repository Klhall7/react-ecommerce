# Project Creation: React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# CCS Exercise Instructions:[React E-commerce](https://ccs-full-stack-web-dev.netlify.app/docs/exercises/react-ecommerce/)

## Must Haves

- Create a new folder named the following: `react-ecommerce`
- Initialize a git repository in that folder

## Learning Objectives

After completing this assignment, you should be able to:

- Define Routes in a Single Page App
- Use React-Router to allow a user to browse different pages

## Level 1

- Use the [FakeStore API](https://fakestoreapi.com/docs) as your backend to populate your store
- Use React-Router to allow browsing

### Product Browsing

- Use the [FakeStore API](https://fakestoreapi.com/docs) to query for products in your store
- Using[React-Router](https://reactrouter.com/en/main), allow a user to click on a product and fetch() that product's data

### Category Browsing

- Use the [FakeStore API](https://fakestoreapi.com/docs) to query the available categories in your store
- Allow a user to click a specific category and see all the products in that category
- Allow a user to click on a product in that category and fetch() that product's data

## Level 2

### Checkout Cart

- Use the [FakeStore API](https://fakestoreapi.com/docs) to allow a user to add a product to their cart (see the "Update a cart" entry in the docs)
- View a user's cart to see the available products

**Note:** This endpoint returns a product ID; you'll need to fetch() the product data for each product to see the details.

- Can you delete content from the user's cart? (there is a mockup for this in the documentation)

## UI

- Render the product information using ["card" layout](https://mui.com/material-ui/react-card/). Example ([benefits of card based design](https://uxplanet.org/using-card-based-design-to-enhance-ux-51f965ab70cb)):

[Product Image]
Product Name
Price

- Use Styled-Components, [Bulma](https://bulma.io/), or [Tailwind](https://tailwindcss.com/docs/guides/vite)

## Level 9000

- Can you use the [React Context API](https://react.dev/learn/passing-data-deeply-with-context#step-1-create-the-context) to store the user's cart data locally?