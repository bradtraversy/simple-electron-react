// rafce = snippet shortcut for this code structure
import React from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

const LogItem = ({ log: { _id, priority, user, text, created } }) => {
  /*******************************************************
  Private Data
  *******************************************************/
  const setVariant = () => {
    switch (priority) {
      case "high":
        return "danger";
      case "medium":
        return "warning";
      default:
        return "success";
    }
  };
  /*******************************************************
  Output
  *******************************************************/
  return (
    <tr>
      <td>
        <Badge variant={setVariant()} className="p-2">
          {priority.charAt(0).toUpperCase() + priority.slice(1)}
        </Badge>
      </td>
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
