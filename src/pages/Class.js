import React from "react";
import TaskPart from "../components/classComponents/TaskPart";
import { useState } from "react";
import axios from "axios";
import Modal from "../components/classComponents/Modal";

const Class = () => {
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const [model, setModel] = useState(false);
  const [taskSub1, setTaskSub1] = useState(false);
  const [taskSub2, setTaskSub2] = useState(false);
  const [taskSub3, setTaskSub3] = useState(false);
  const [taskSub4, setTaskSub4] = useState(false);
  const [taskSub5, setTaskSub5] = useState(false);
  const [taskSub6, setTaskSub6] = useState(false);
  const [taskSub7, setTaskSub7] = useState(false);
  const [taskSub8, setTaskSub8] = useState(false);
  const [taskSub0, setTaskSub0] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const ids = [
    "6655bfa88a88ff8116e18a59",
    "6655c03a8a88ff8116e18a5a",
    "6655c07a8a88ff8116e18a5b",
    "6655c0ac8a88ff8116e18a5c",
    "6655c0df8a88ff8116e18a5d",
    "6655c1188a88ff8116e18a5e",
    "6655c16c8a88ff8116e18a5f",
    "6655c19e8a88ff8116e18a60",
    "6655c1f28a88ff8116e18a61",
    "6655c2328a88ff8116e18a62",
    "6655c5af8a88ff8116e18a67",
    "6655c6798a88ff8116e18a68",
    "6655c7338a88ff8116e18a69",
    "6655c7608a88ff8116e18a6a",
    "6655c7b78a88ff8116e18a6c",
    "6655c7ff8a88ff8116e18a6d",
    "6655c82b8a88ff8116e18a6e",
    "6655c85e8a88ff8116e18a6f",
    "6655c88d8a88ff8116e18a70",
    "6655c8c28a88ff8116e18a71",
    "6655c8e48a88ff8116e18a72",
    "6655c92f8a88ff8116e18a73",
    "6655c96e8a88ff8116e18a74",
    "6655c9aa8a88ff8116e18a75",
    "6655c9e18a88ff8116e18a76",
    "6655ca0a8a88ff8116e18a77",
    "6655ca3c8a88ff8116e18a78",
    "6655ca6f8a88ff8116e18a79",
    "6655cc5d8a88ff8116e18a7a",
    "6655cc918a88ff8116e18a7b",
    "6655ccc68a88ff8116e18a7c",
    "6655ccef8a88ff8116e18a7d",
    "6655cd198a88ff8116e18a7e",
    "6655cd4a8a88ff8116e18a7f",
    "6655cd838a88ff8116e18a80",
    "6655cdb68a88ff8116e18a82",
    "6655cdf38a88ff8116e18a83",
    "6655ce268a88ff8116e18a84",
    "6655ce5d8a88ff8116e18a85",
    "6655cea28a88ff8116e18a86",
    "6655cece8a88ff8116e18a87",
    "6655cf1a8a88ff8116e18a88",
    "6656c3d579d00e4b01f8da9c",
    "6656c43779d00e4b01f8da9d",
    "6656c47d79d00e4b01f8da9e",
    "6656c4d679d00e4b01f8da9f",
    "6656c4f979d00e4b01f8daa0",
    "6656c53179d00e4b01f8daa1",
    "6656c55179d00e4b01f8daa2",
    "6656c57179d00e4b01f8daa3",
    "6656c59579d00e4b01f8daa4",
    "6656c5b179d00e4b01f8daa5",
    "6656c5f379d00e4b01f8daa6",
    "6656c60679d00e4b01f8daa7",
    "6656c62179d00e4b01f8daa8",
    "6656c63579d00e4b01f8daa9",
    "6656c6a179d00e4b01f8daaa",
    "6656c70979d00e4b01f8daab",
    "6656c73679d00e4b01f8daac",
    "6656c75879d00e4b01f8daad",
    "6656c78779d00e4b01f8daae",
    "6656c7ba79d00e4b01f8daaf",
    "6656c7e979d00e4b01f8dab0",
    "6656c81579d00e4b01f8dab1",
    "6656c83579d00e4b01f8dab2",
    "6656c85d79d00e4b01f8dab3",
    "6656c88e79d00e4b01f8dab4",
    "6656c8c379d00e4b01f8dab5",
    "6656c8e979d00e4b01f8dab6",
    "6656c8fc79d00e4b01f8dab7",
    "6656c92179d00e4b01f8dab8",
    "6656c94279d00e4b01f8dab9",
  ];

  const sessions = [
    {
      title: "System Design Day 2",
      date: "15/10/2023 - Sunday - 2:00 PM",
    },
    {
      title: "System Design Day 1",
      date: "14/10/2023 - Saturday - 2:00 PM",
    },
    {
      title: "System Design Recordings Day 2",
      date: "Class Schedule Not Updated",
    },
    {
      title: "System Design Recordings Day 1",
      date: "Class Schedule Not Updated",
    },
    {
      title: "DS Day 5",
      date: "25/08/2023 - Friday - 7:30 AM",
    },
    {
      title: "DS Day 4",
      date: "24/08/2023 - Thursday - 7:30 AM",
    },
    {
      title: "DS Day 3",
      date: "23/08/2023 - Wednesday - 7:30 AM",
    },
    {
      title: "DS Day 2",
      date: "22/08/2023 - Tuesday - 7:30 AM",
    },
    {
      title: "DS Day 1",
      date: "21/08/2023 - Monday - 7:30 AM",
    },
    {
      title: "AWS Day 5",
      date: "17/08/2023 - Thursday - 4:30 PM",
    },
    {
      title: "AWS Day 4",
      date: "16/08/2023 - Wednesday - 4:30 PM",
    },
    {
      title: "AWS Day 3",
      date: "11/08/2023 - Friday - 11:30 AM",
    },
    {
      title: "AWS Day 2",
      date: "10/08/2023 - Thursday - 4:30 PM",
    },
    {
      title: "AWS Day 1",
      date: "09/08/2023 - Wednesday - 4:30 PM",
    },
    {
      title: "FSD Demo Day 2",
      date: "03/08/2023 - Thursday - 8:00 AM",
    },
    {
      title: "FSD Demo Day 1",
      date: "02/08/2023 - Wednesday - 8:00 AM",
    },
    {
      title: "Recap & Doubt Clarification",
      date: "21/07/2023 - Friday - 8:00 AM",
    },
    {
      title: "Recap & Doubt Clarification",
      date: "14/07/2023 - Friday - 8:00 AM",
    },
    {
      title: "Redux Day 2",
      date: "13/07/2023 - Thursday - 8:00 AM",
    },
    {
      title: "React Recap",
      date: "07/07/2023 - Friday - 8:00 AM",
    },
    {
      title: "React Day 2 cont",
      date: "23/06/2023 - Friday - 8:00 AM",
    },
    {
      title: "Recap & Doubt Clarification",
      date: "13/06/2023 - Tuesday - 8:00 AM",
    },
    {
      title: "JS Recap",
      date: "24/05/2023 - Wednesday - 8:00 AM",
    },
    {
      title: "Github Session - 11/05/2023 @8 AM",
      date: "11/05/2023 - Thursday - 8:00 AM",
    },
    {
      title: "Codekata Day 5 - 10/05/2023 @8 AM",
      date: "10/05/2023 - Wednesday - 8:00 AM",
    },
    {
      title: "Codekata Day 4 - 09/05/2023 @8 AM",
      date: "09/05/2023 - Tuesday - 8:00 AM",
    },
    {
      title: "Codekata Day 3 - 08/05/2023 @8 AM",
      date: "08/05/2023 - Monday - 8:00 AM",
    },
    {
      title: "Codekata Day 2 - 05/05/2023 @8 AM",
      date: "05/05/2023 - Friday - 8:00 AM",
    },
    {
      title: "Codekata Day 1 - 04/05/2023 @8 AM",
      date: "04/05/2023 - Thursday - 8:00 AM",
    },
    {
      title: "Day 0 Demo",
      date: "Class Schedule Not Updated",
    },
  ];

  function handle1(index) {
    setIsFormSubmitted(false)

    console.log(index);

    let taskSub = false;
    if (index >= 1 && index <= 7) {
      taskSub = 1;
    } else if (index === 15) {
      taskSub = 2;
    } else if ([16, 17, 22, 23, 25, 26, 28, 30, 31, 32].includes(index)) {
      taskSub = 3;
    } else if (index === 20) {
      taskSub = 4;
    } else if ([33, 34, 35, 36].includes(index)) {
      taskSub = 5;
    } else if ([37, 38].includes(index)) {
      taskSub = 6;
    } else if (index === 39) {
      taskSub = 7;
    } else if ([41, 42].includes(index)) {
      taskSub = 8;
    } 

    switch (taskSub) {
      case 1:
        setTaskSub1(true);
        setTaskSub2(false);
        setTaskSub3(false);
        setTaskSub4(false);
        setTaskSub5(false);
        setTaskSub6(false);
        setTaskSub7(false);
        setTaskSub8(false);
        setTaskSub0(false);
        break;
      case 2:
        setTaskSub2(true);
        setTaskSub1(false);
        setTaskSub3(false);
        setTaskSub4(false);
        setTaskSub5(false);
        setTaskSub6(false);
        setTaskSub7(false);
        setTaskSub8(false);
        setTaskSub0(false);
        break;
      case 3:
        setTaskSub3(true);
        setTaskSub1(false);
        setTaskSub3(false);
        setTaskSub4(false);
        setTaskSub5(false);
        setTaskSub6(false);
        setTaskSub7(false);
        setTaskSub8(false);
        setTaskSub0(false);
        break;
      case 4:
        setTaskSub4(true);
        setTaskSub2(false);
        setTaskSub3(false);
        setTaskSub1(false);
        setTaskSub5(false);
        setTaskSub6(false);
        setTaskSub7(false);
        setTaskSub8(false);
        setTaskSub0(false);
        break;
      case 5:
        setTaskSub5(true);
        setTaskSub2(false);
        setTaskSub3(false);
        setTaskSub4(false);
        setTaskSub1(false);
        setTaskSub6(false);
        setTaskSub7(false);
        setTaskSub8(false);
        setTaskSub0(false);
        break;
      case 6:
        setTaskSub6(true);
        setTaskSub2(false);
        setTaskSub3(false);
        setTaskSub4(false);
        setTaskSub5(false);
        setTaskSub1(false);
        setTaskSub7(false);
        setTaskSub8(false);
        setTaskSub0(false);
        break;
      case 7:
        setTaskSub7(true);
        setTaskSub2(false);
        setTaskSub3(false);
        setTaskSub4(false);
        setTaskSub5(false);
        setTaskSub6(false);
        setTaskSub1(false);
        setTaskSub8(false);
        setTaskSub0(false);
        break;
      case 8:
        setTaskSub8(true);
        setTaskSub2(false);
        setTaskSub3(false);
        setTaskSub4(false);
        setTaskSub5(false);
        setTaskSub6(false);
        setTaskSub7(false);
        setTaskSub1(false);
        setTaskSub0(false);
        break;
   
    }
    setClick(true);
    axios
      .get(`http://localhost:8800/api/class/${ids[index - 1]}`)
      .then((response) => {
        //   console.log(response.data);
        setData(response.data); // This should log the data from the Capstone collection
      })
      .catch((error) => {
        console.error(error); // This will log any errors that occur
      });
  }
  function handle2(index) {
    console.log(index);
    setClick(true);
    const cal = index + 42;
    axios
      .get(`http://localhost:8800/api/class/${ids[cal]}`)
      .then((response) => {
        //   console.log(response.data);
        setData(response.data); // This should log the data from the Capstone collection
      })
      .catch((error) => {
        console.error(error); // This will log any errors that occur
      });
  }

  console.log(data);

  const roadmapData = [
    { number: 1, stepPath: "right" },
    { number: 2, stepPath: "right" },
    { number: 3, stepPath: "right" },
    { number: 4, stepPath: "right" },
    { number: 5, stepPath: "bottom" },
    { number: 10, stepPath: "bottom" },
    { number: 9, stepPath: "left" },
    { number: 8, stepPath: "left" },
    { number: 7, stepPath: "left" },
    { number: 6, stepPath: "left" },
    { number: 11, stepPath: "right" },
    { number: 12, stepPath: "right" },
    { number: 13, stepPath: "right" },
    { number: 14, stepPath: "right" },
    { number: 15, stepPath: "bottom" },
    { number: 20, stepPath: "bottom" },
    { number: 19, stepPath: "left" },
    { number: 18, stepPath: "left" },
    { number: 17, stepPath: "left" },
    { number: 16, stepPath: "left" },
    { number: 21, stepPath: "right" },
    { number: 22, stepPath: "right" },
    { number: 23, stepPath: "right" },
    { number: 24, stepPath: "right" },
    { number: 25, stepPath: "bottom" },
    { number: 30, stepPath: "bottom" },
    { number: 29, stepPath: "left" },
    { number: 28, stepPath: "left" },
    { number: 27, stepPath: "left" },
    { number: 26, stepPath: "left" },
    { number: 31, stepPath: "right" },
    { number: 32, stepPath: "right" },
    { number: 33, stepPath: "right" },
    { number: 34, stepPath: "right" },
    { number: 35, stepPath: "bottom" },
    { number: 40, stepPath: "bottom" },
    { number: 39, stepPath: "left" },
    { number: 38, stepPath: "left" },
    { number: 37, stepPath: "left" },
    { number: 36, stepPath: "left" },
    { number: 41, stepPath: "right" },
    { number: 42, stepPath: null },
  ];

  const RoadmapIconContainer = ({ number, stepPath }) => (
    <div
      className="roadmap_icon_container RICompleted"
      onClick={() => handle1(number)}
    >
      <h6>{number}</h6>
      {stepPath && (
        <div
          className={`step_path_${stepPath}`}
          style={{ pointerEvents: "none" }}
        />
      )}
    </div>
  );
  return (
    <div class="Body_body__box__Y49P-">
      <div class="Body_body__wrapper__6cj6C">
        <div class="Body_body__content__full__1L5Pm">
          <div class="row-container">
            <div class="class-content">
              <div
                class="class-head d-flex px-3"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                {click ? (
                  <>
                    <h3 class="classhead m-0 text-white">
                      Please watch the recording.
                    </h3>
                    <div>
                      <button
                        class="join-btn"
                        style={{ width: "max-content" }}
                        onClick={() => setModel(true)}
                      >
                        Play Recording
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <h3 class="classhead m-0 text-white">
                      Join the class on time!
                    </h3>
                    <div></div>
                  </>
                )}
              </div>
              {click ? (
                <TaskPart
                isFormSubmitted ={isFormSubmitted}
                setIsFormSubmitted ={setIsFormSubmitted}

                  data={data}
                  taskSub1={taskSub1}
                  taskSub2={taskSub2}
                  taskSub3={taskSub3}
                  taskSub4={taskSub4}
                  taskSub5={taskSub5}
                  taskSub6={taskSub6}
                  taskSub7={taskSub7}
                  taskSub8={taskSub8}
                  taskSub0={taskSub0}
                />
              ) : (
                <div class="session-container">
                  <div class="session-area">
                    <span style={{ fontSize: 24, fontWeight: 500 }}>
                      No session title available
                    </span>
                    <br />
                    Class schedule is not updated
                    <hr />
                    <div class="preread-head">Contents:</div>
                    <div class="ml-3">
                      <span class="preread" style={{ whiteSpace: "pre-wrap" }}>
                        No content available
                      </span>
                    </div>
                    <div class="preread-head mt-3">Pre-read:</div>
                    <div class="ml-3">
                      <span class="preread" style={{ whiteSpace: "pre-wrap" }}>
                        No preread available
                      </span>
                    </div>
                  </div>
                </div>
              )}
              <div class="mb-4"></div>
            </div>
            <div class="sideContainer">
              <div class="roadmap-container justify-self-center">
                <div class="roadmap-area">
                  <div class="progress-head">
                    <span class="progress-header">Sessions Roadmap</span>
                  </div>
                  <div>
                    <div class="sessionsContainer">
                      {roadmapData.map((item, index) => (
                        <RoadmapIconContainer key={index} {...item} />
                      ))}
                      {/* <div
                        class="roadmap_icon_container RICompleted"
                        onClick={handle1}
                      >
                        <h6>42</h6>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="roadmap-container mt-2">
                <div class="roadmap-area">
                  <div class="progress-head d-flex justify-content-between">
                    <span class="progress-header">Additional Sessions</span>
                  </div>
                  <div class="addSessionContainer">
                    {sessions.map((session, index) => (
                      <div
                        key={index}
                        className="addSession"
                        onClick={() => handle2(index)}
                      >
                        <h5 style={{ fontWeight: 450 }}>{session.title}</h5>
                        <p style={{ fontWeight: 200, margin: 0 }}>
                          {session.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="" bis_skin_checked="1"></div>
          <div
            class="modal fade WelcomeModal "
            id="WelcomeModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{ display: "none" }}
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content modal-height radius">
                <div class="modal-heading-area px-4 py-2">
                  <div class="d-flex justify-content-between">
                    <span class="modal-heading">Class Link </span>
                    <span class="close m-4" style={{ cursor: "pointer" }}>
                      ×
                    </span>
                  </div>
                </div>
                <div class="row m-4">
                  <div class="col">
                    <div class="row">
                      <div class="col-3">Class Link : </div>
                      <a class="" target="_blank" rel="noreferrer">
                        <div class="col word-wrap"></div>
                      </a>
                    </div>
                    <div class="row">
                      <div class="col-3">Passcode : </div>
                      <div class="col"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {model ? <Modal setModel={setModel} /> : null}
        {/* <div class="">
          <div class="" bis_skin_checked="1"></div>
          <div
            class="modal fade WelcomeModal "
            id="WelcomeModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{ display: "none" }}
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content modal-height radius">
                <div class="modal-heading-area px-4 py-2">
                  <div class="d-flex justify-content-between">
                    <span class="modal-heading">Recording Link</span>
                    <span class="close m-4" style={{ cursor: "pointer" }}>
                      ×
                    </span>
                  </div>
                </div>
                <div class="row m-4">
                  <div class="col">
                    <div class="row">
                      <div class="col-4">Recording Link : </div>
                      <a class="" target="_blank" rel="noreferrer">
                        <div class="col word-wrap"></div>
                      </a>
                    </div>
                    <div class="row">
                      <div class="col-3">Passcode : </div>
                      <div class="col"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <div class="" bis_skin_checked="1"></div>
          <div
            class="modal fade WelcomeModal "
            id="WelcomeModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{ display: "none" }}
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content modal-height radius">
                <div class="modal-heading-area px-4 py-2">
                  <div class="d-flex justify-content-between">
                    <span class="modal-heading font-weight-bold"></span>
                  </div>
                </div>
                <div class="modal-body">
                  <br />
                  <p class="font-weight-bold" style={{ fontSize: 18 }}>
                    hh
                  </p>
                  <p
                    class="text-success font-weight-bold"
                    style={{ fontSize: 21 }}
                  >
                    hfh
                  </p>
                </div>
                <div class="modal-footer">
                  <button class="btn btn-success">Got It</button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Class;
