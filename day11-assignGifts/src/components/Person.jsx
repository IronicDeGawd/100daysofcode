// import React from "react";
/* eslint-disable react/prop-types */

function Person({ id, name, gift = "Not Assigned", handleDelete }) {
  return (
    <tbody>
      <tr id={name} style={{ textDecoration: "none", listStyle: "none" }}>
        <th>Person :</th>
        <td>{name}</td>
        <th>Gift :</th>
        <td>{gift}</td>
        <td>
          <button id={id} onClick={handleDelete}>
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
}

export default Person;
