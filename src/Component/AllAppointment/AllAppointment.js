import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Appointment.css";

function AllAppointment() {
  const [apointment, setAppointment] = useState([]);
  const [getData, setgetData] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const userdata = [];
      await axios
        .get("https://test3-a40a1-default-rtdb.firebaseio.com/appointment.json")
        .then((res) => {
          const data = res.data;

          for (const key in data) {
            userdata.push({
              patientId: key,
              docid: data[key].docId,
              patientName: data[key].patientName,
              patientEmail: data[key].patientEmail,
              docEmail: data[key].docEmail,
              status: data[key].status,
              disease: data[key].disease,
            });

            setAppointment(userdata);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getData();
  }, [getData]);

  const totalApponmnet = apointment.length;
  const doneAppointment = apointment.filter(
    (data) => data.status === "Done"
  ).length;
  const pendingAppointment = apointment.filter(
    (data) => data.status === "Pending"
  ).length;

  const accpectAppointment = async (data) => {
    let patientdata = {
      patientName: data.patientName,
      docEmail: data.docEmail,
      patientEmail: data.patientEmail,
      docId: data.docid,
      disease: data.disease,
      status: "Done",
    };
    console.log(data);
    await axios
      .put(
        `https://test3-a40a1-default-rtdb.firebaseio.com/appointment/${data.patientId}.json`,
        patientdata
      )
      .then((res) => {
        setgetData(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-center mt-5">Patient Appointment</h2>
        <div>
          <h3 className="text-center mb-5">
            Total Appointment:{totalApponmnet}
          </h3>
          <hr></hr>
          <div className="d-flex justify-content-center mt-5">
            <h3 className="text-center mx-5">
              Pending Appointment:{pendingAppointment}
            </h3>
            <h3 className="text-center">Done Appointment:{doneAppointment}</h3>
          </div>
        </div>
      </div>
      {apointment.length > 0 ? (
        <>
          {apointment.map((data, index) => {
            return (
              <div className="patientcard" key={index}>
                <div className="d-flex justify-content-between">
                  <p>Doctor Email:{data.docEmail}</p>
                  <p>Doctor Id:{data.docid}</p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Patient Name:{data.patientName}</p>
                  <p>Patient Email:{data.patientEmail}</p>
                </div>
                <div className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => accpectAppointment(data)}
                  >
                    {data.status}
                  </button>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <h2 className="text-center mt-5">No Appointment</h2>
      )}
    </div>
  );
}

export default AllAppointment;
