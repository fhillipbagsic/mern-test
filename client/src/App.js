import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const port = process.env.PORT || 5001;
console.log('asc')
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [port, setPort] = useState(process.env.PORT);
  useEffect(() => {
    axios
      .post(`/api/login`, {
        username: "abc",
        password: "123",
      })
      .then((res) => {
        setUsername(res.data.username);
        setPassword(res.data.password);
      });
    console.log('PORT' + process.env.PORT);
  }, []);

  return (
    <div className="App">
      <h1>Logins</h1>
      <p>{username}</p>
      <p>{password}</p>
      <p>PORT :{port}</p>
    </div>
  );
}

export default App;
