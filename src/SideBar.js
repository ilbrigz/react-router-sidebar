import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: ({ slash }) => (
      <Link to="/">
        {/^\/\w+\/\w+$/.test(slash)
          ? slash.replace(/^\/\w+/, "")
          : slash.replace(/^\//, "")}
      </Link>
    ),
    main: () => <h2>Home</h2>
  },

  {
    path: "/bubblegum",
    sidebar: ({ slash }) => (
      <Link to="/bubblegum">
        {/^\/\w+\/\w+$/.test(slash)
          ? slash.replace(/^\/\w+/, "")
          : slash.replace(/^\//, "")}
      </Link>
    ),
    main: () => <h2>Bubblegum </h2>
  },
  {
    path: "/shoelaces",
    sidebar: ({ slash }) => (
      <Link to="/shoelaces">
        {/^\/\w+\/\w+$/.test(slash)
          ? slash.replace(/^\/\w+/, "")
          : slash.replace(/^\//, "")}
      </Link>
    ),
    main: () => <h2>Shoelaces</h2>
  },
  {
    path: "/shoelaces/red",
    sidebar: ({ slash }, ...props) => {
      console.log(props.match);
      return (
        <Link to="/shoelaces/red">
          {/^\/\w+\/\w+$/.test(slash)
            ? slash.replace(/^\/\w+/, "")
            : slash.replace(/^\//, "")}
        </Link>
      );
    },
    main: () => <h2>Shoelaces - Red</h2>
  }
];

class SideBar extends React.Component {
  render() {
    return (
      <Router>
        <div style={{ display: "flex" }}>
          <div
            style={{
              padding: "10px",
              width: "40%",
              background: "#f0f0f0"
            }}
          >
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/bubblegum">Bubblegum</Link>
              </li>
              <li>
                <Link to="/shoelaces">Shoelaces</Link>
              </li>
              <li>
                <Link to="/shoelaces/red">red</Link>
              </li>
            </ul>
            {/* two routes - for sidebar and main body
             the sidebar can be used in breadcrumbs*/
            routes.map((route, index, array) => {
              const needsSlash = index == 0 || index == array.length - 1;
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  render={() => <route.sidebar slash={route.path} />}
                />
              );
            })}
          </div>
          <div style={{ flex: 1, padding: "10px" }}>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default SideBar;
