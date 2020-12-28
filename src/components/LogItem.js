// rafce = snippet shortcut for this code structure
import React from "react";
import Button from "react-bootstrap/Button";

const LogItem = ({ log: { _id, priority, user, text, created } }) => {
  return (
    <tr>
      <td>{priority}</td>
      <td>{text}</td>
      <td>{user}</td>
      <td>{created}</td>
      <td>
        <Button variant="danger" size="sm">
          x
        </Button>
      </td>
    </tr>
  );
};

export default LogItem;
