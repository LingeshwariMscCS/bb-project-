import {useContext} from 'react';
import {Store} from "../../AppState/Store";
import "./AllData.css"
export default function AllData() {
  const { state } = useContext(Store)
  return (
    <div className='background'>
    <div className="AllDataContainer">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Email</th>
          <th scope="col">Name</th>
          <th scope="col">Balance</th>
        </tr>
      </thead>
      <tbody>
        {state.users.map(element=> {
          return <tr>
          <td>{element.email}</td>
          <td>{element.name}</td>
          <td>{element.balance}</td>
        </tr>
        })}
      </tbody>
  </table>
  </div>
  </div>
  )
}