import React from "react";
import ROSTER from '../shared/nets_roster';
import "../App.css";
import { Table } from 'reactstrap';


export const Roster = () => {
    return (
      <>
        <div className="roster-container">
        <Table striped className="table-responsive">
		<tr>
        <th>PIC</th>
		<th>First</th>
		<th>Last</th>
		<th>Num</th>
        <th>Pos</th>
        <th>Born</th>
        <th>HT</th>
        <th>Weight</th>
        <th>Year</th>
        <th>TWC</th>
        <th>HCC</th>
		</tr>
          {ROSTER.map((data, key) => {
            return (
            <tr key={data.pid}>
                {/* <td><img src="https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/'{data.pid}'.png"/></td> */}
                <td><img src={'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/'+data.pid+'.png'}/></td>
                <td>{data.fn}</td>
                <td>{data.ln}</td>
                <td>{data.num}</td>
                <td>{data.pos}</td>
                <td>{data.dob}</td> 
                <td>{data.ht}</td> 
                <td>{data.wt}</td> 
                <td>{data.y}</td>
                <td>{data.twc}</td>
                <td className='HCC_TD'>{data.hcc}</td>        
            </tr>
            );
          })}
          </Table>
        </div>
      </>
    );
  };