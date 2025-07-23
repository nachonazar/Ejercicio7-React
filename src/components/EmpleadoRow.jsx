import React from "react";
import { ListGroup } from "react-bootstrap";
import EmpleadoAvatar from "./EmpleadoAvatar";

const EmpleadoRow = ({empleado}) => {
  return (
      <ListGroup.Item className="d-flex mx-5 align-items-center">
        <EmpleadoAvatar pic={empleado.pic} fullName={empleado.fullName}></EmpleadoAvatar>
        <div className="d-flex flex-column">
        <h5><strong>{empleado.fullName}</strong></h5>
        <div className="d-flex gap-2">
            <span>{empleado.title}</span>
            <span className="container-sm bg-info text-white"><strong>{empleado.department}</strong></span>
        </div>
        </div>
      </ListGroup.Item>
  );
};

export default EmpleadoRow;