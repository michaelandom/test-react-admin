// in src/App.js
import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser, CreateBase } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserCreate, UserEdit, UserList } from "./users";
import { PostCreate, PostEdit, PostList } from "./posts";
import { Dashboard } from "./dashboard";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    {/* <Resource name="users" list={ListGuesser} /> */}
    
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate}/>
  </Admin>
);

export default App;
