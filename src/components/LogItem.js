// rafce = snippet shortcut for this code structure
import React from "react";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Moment from "react-moment";

const LogItem = ({
  deleteItem,
  log: { _id, priority, user, text, created },
}) => {
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
      <td>
        <Moment format="MMMM Do YYYY, HH:mm:ss">{new Date(created)}</Moment>
      </td>
      <td>
        <Button variant="danger" size="sm" onClick={() => deleteItem(_id)}>
          x
        </Button>
      </td>
    </tr>
  );
};

export default LogItem;
