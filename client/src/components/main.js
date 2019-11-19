import React from "react";
import { useUsers } from "../hooks";
import { Link } from "react-router-dom";
import Left from "./left";
import Right from "./right";

function App() {
  const { users } = useUsers();
  const { sub } = useUsers();

  console.log(users);

  return (
    <div className="main">
      <Left />
      <div className="container">
        <nav id="topban" className="regular">
          <div>
            <input
              className="enter-area"
              type="text"
              placeholder="Las Vegas"
            ></input>
          </div>
          <div className="custom-area no-name">
            <h2 className="area"></h2>
          </div>
        </nav>

        <div className="wrap">
          {users.map((user, i) => (
            <div className="categories" key={i}>
              <Link to={"/" + user.slug}>
                <h2>{user.name}</h2>
                {/* <a href="#">{user.name}</a> */}
              </Link>
              <div className="links">
                {sub.map(s => {
                  if (s.parent_id === user.id) {
                    return (
                      <p className="subs">
                        <Link to={"/" + s.slug}>{s.name}</Link>
                      </p>
                    );
                  }
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Right />
    </div>
  );
}

export default App;
