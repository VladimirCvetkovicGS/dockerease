import React from 'react';
import PersonData from '../../data/PersonData';


function Person() {
    return (
      <>
        <div className="card-body border p-4">
          <div className="row pb-3">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th className="col">ID</th>
                  <th className="col">First Name</th>
                  <th className="col">Last Name</th>
                  <th className="col">Date Of Birth</th>
                </tr>
              </thead>
              <tbody>
                {PersonData.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>{item.ID}</td>
                      <td>{item.FirstName}</td>
                      <td>{item.LastName}</td>
                      <td>{item.DateOfBirth}</td>
                      <td>
                        <a href={`/edit`}>
                          <button
                            className="btn btn-success mx-2"
                            onClick={(e) => e}
                          >
                            Update
                          </button>
                        </a>
                        <a href={`/delete`}>
                          <button
                            className="btn btn-danger mx-2"
                            onClick={(e) => e}
                          >
                            Delete
                          </button>
                        </a>
                      </td>
                    </tr>
                  );
                })}
                <tr>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter ID"
                    ></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter First Name"
                    ></input>
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Last Name"
                    ></input>
                  </td>
                  <td>
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Enter Date of Birth"
                    ></input>
                  </td>
                  <td>
                    <button className="btn btn-primary mx-2" onClick={(e) => e}>
                      Create
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
}

export default Person;