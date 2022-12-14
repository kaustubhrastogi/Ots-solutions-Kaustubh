import React from "react";
import { Table, Icon, Modal, Button } from "semantic-ui-react";
import EditForm from "./EditForm";

const TraineesList = (props) => (
  <>
    {props.trainees.length > 0 && (
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        {props.trainees.length > 0 &&
          props.trainees.map((trainee, index) => {
            return (
              <Table.Body key={index}>
                <Table.Row>
                  <Table.Cell>
                    {trainee.firstName} {trainee.lastName}
                  </Table.Cell>
                  <Table.Cell>{trainee.email}</Table.Cell>
                  <Table.Cell>{trainee.gender}</Table.Cell>
                  <Table.Cell>
                    <Modal
                      trigger={<Icon name="edit"  />}
                      header='Edit Details!'
                      content={<EditForm trainee={trainee}/>}
                      actions={['Cancel', { key: 'Update', content: 'Update', positive: true }]}
                    />
                    <Icon name="user delete" onClick={() => props.deleteItems(index)} />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            );
          })}
      </Table>
    )}
    <div>{props.trainees.length == 0 && <div>No Data Found!</div>}</div>
  </>
);

export default TraineesList;
