import React from "react";
import ROSTER from '../shared/nets_roster';
import "../App.css";
import { Table } from 'reactstrap';



export const Roster = () => {
    return (
      <>
        <div className="roster-container">
        <Table striped>
		<tr>
		<th>FN</th>
		<th>LN</th>
		<th>NM</th>
        <th>POS</th>
		</tr>
          {ROSTER.map((data, key) => {
            return (
            <tr key={data.pid}>
                <td>{data.fn}</td>
                <td>{data.ln}</td>
                <td>{data.nm}</td>
                <td>{data.pos}</td>   
            </tr>
            );
          })}
          </Table>
        </div>
      </>
    );
  };