import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import LogItem from "./LogItem";

const App = () => {
  const [logs, setLogs] = useState([
    // defaults
    {
      _id: 1,
      text: "this is log one",
      priority: "low",
      user: "James",
      created: new Date().toString(),
    },
    {
      _id: 2,
      text: "this is log two",
      priority: "medium",
      user: "Fiona",
      created: new Date().toString(),
    },
    {
      _id: 3,
      text: "this is log three",
      priority: "high",
      user: "Brian",
      created: new Date().toString(),
    },
  ]);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Log Text</th>
            <th>User</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <LogItem key={log._id} log={log} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default App;
