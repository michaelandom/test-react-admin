// in src/App.js
import * as React from "react";
import { Admin, Resource, fetchUtils } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserCreate, UserEdit, UserList } from "./users";
import { PostCreate, PostEdit, PostList } from "./posts";
import { Dashboard } from "./dashboard";
//import LoginPage from "./Login";
//import authProvider from './authProvider';
//import simpleRestProvider from 'ra-data-simple-rest';

const authProvider = {
  // send username and password to the auth server and get back credentials
  login: (params) => Promise.resolve(),
  // when the dataProvider returns an error, check if this is an authentication error
  checkError: (error) => Promise.resolve(),
  // chen the user navigates, make sure that their credentials are still valid
  checkAuth: (params) => Promise.resolve(),
  // remove local credentials and notify the auth server that the user logged out
  logout: () => Promise.resolve(),
  // get the user's profile
  getIdentity: () => Promise.resolve(),
  // get the user permissions (optional)
  getPermissions: () => Promise.resolve(),
  // get the user roles (optional - only for Role-Based Access Control)
  getRoles: () => Promise.resolve(),
};

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: "application/json" });
  }
 // const { token } = JSON.parse(localStorage.getItem("auth")) ?? "";
  options.user = {
    authenticated: true,
    token: "SRTRDFVESGNJYTUKTYTHRG",
  };
  //options.headers.set("Authorization", `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};
//https://jsonplaceholder.typicode.com
const dataProvider = jsonServerProvider(
  "https://jsonplaceholder.typicode.com",
  httpClient
);
const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={authProvider}
    requireAuth
  >
    {/* <Resource name="users" list={ListGuesser} /> */}

    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
    />
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
    />
  </Admin>
);

export default App;
