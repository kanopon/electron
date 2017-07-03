import React from "react";
import { render } from "react-dom";
import { Router, Route, hashHistory } from "react-router";
import Login from "./Login";
import Signup from "./Signup";
import Rooms from "./Rooms";
import Room from "./Room";

import firebase from "firebase/firebase-browser";

// Routingの定義
const appRouting = (
	<Router history={hashHistory}>
		<Route path="/">
			<Route path="login" component={Login} />
			<Route path="signup" component={Signup} />
			<Route path="rooms" component={Rooms} >
				<Route path=":roomId" component={Room} />
			</Route>
		</Route>
	</Router>
);

// Routingの初期化
if (!location.hash.length) {
	location.hash = "#/login";
}

// Initialize Firebase
const config = {
  apiKey: "AIzaSyAhkL6xGihLLZ2k7YxQ0Gl3iPSvJN9i6lE",
  authDomain: "electron-chat-d0072.firebaseapp.com",
  databaseURL: "https://electron-chat-d0072.firebaseio.com",
  projectId: "electron-chat-d0072",
  storageBucket: "electron-chat-d0072.appspot.com",
  messagingSenderId: "1043787026653"
};
firebase.initializeApp(config);

render(appRouting, document.getElementById("app"));

