import React from "react";
import "../css/splitTask.css";
import axios from "axios";
import { useState,useEffect } from "react";

const SplitTask = (props) => {
  const [data, setData] = useState([]);
  const [activeKey, setActiveKey] = useState(null);
  const data1 =[]
  console.log(activeKey);
  useEffect(() => {
    axios
      .get("http://localhost:8800/api/class/submission")
      .then((response) => {
        //   console.log(response.data);
        setData(response.data);
        // data1.push(response.data) // This should log the data from the Capstone collection
      })
      .catch((error) => {
        console.error(error); // This will log any errors that occur
      });
  }, []);
  useEffect(() => {
    if (data.length > 0) {
      console.log(data[props.activeKey].day);
      // console.log(activeKey)
    }
  }, [data]);
  


  const handleClick = (key) => {
    props.setActiveKey(key);
  };
  const Card = ({ batch, day, createdAt, mark, type,itemkey }) => (
    <div className={props.activeKey === itemkey? 'taskContainer sideBox1 flexCont w-100 mt-0 mb-3 mx-2 py-3' : 'ideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3'} onClick={() => handleClick(itemkey)}>
      <div class="flexCont">
        <div>
          <div class="title weight-500">Nixon Paul</div>
          <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
            <div class="mx-1">{batch}</div>
            <div class="mx-1"></div>
            <div class="">{day}</div>
          </div>
        </div>
        <div>
          <div class="mx-1 secondaryGreyTextColor">
            submitted on {createdAt}
          </div>
          <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
            <div class="marktag mx-1 px-3 rounded">{mark}</div>
            <div class="tasktag px-2 rounded">{type}</div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div>
      <div class="sc-dmqHEX dPUVXQ">
        <div class="sc-jTrPJq gFWlwy">
          <button class="sc-hLseeU bfIGar" onClick={()=>props.setClick(false)}>
            <div color="" class="sc-beqWaB dBJvAj">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="10"
                viewBox="0 0 6 10"
                fill="none"
                class="injected-svg"
                data-src="/Icons/leftArrow.svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M5 1L1 5L5 9"
                  stroke="#4B0DBA"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
            <span>Back</span>
          </button>
        </div>
      </div>
      <div class="row ml-1">
        <div class="col-5 row px-0 mx-2 d-flex align-items-start border-right">
          <div class="col-12 row px-0 mx-2 d-flex align-items-center">
          <div>
                {data.map((item, index) => (
                  <Card key={index} itemkey ={index}{...item} />
                ))}
              </div>
            {/* <div class="taskContainer sideBox1 flexCont w-100 mt-0 mb-3 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">-JavaScript - Day -2: Datatypes</div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 15/05/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">4</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div> */}
            {/* <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">
                    -JavaScript - Day -1: Introduction to Browser &amp; web
                  </div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 15/05/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">6</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">
                    -JavaScript - Day -3: JS array &amp; objects
                  </div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 18/05/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">8.7</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">-JavaScript - Day -4: Functions</div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 22/05/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">3</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">-JavaScript - Day -5: ES5 vs ES6</div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 25/05/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">8</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">-JavaScript - Day -6: OOP in JS</div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 28/05/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">7.699999999999999</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">
                    -JavaScript - Day -7: Array methods
                  </div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 09/06/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">7.9</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">
                    -HTML &amp; CSS- Day -5: HTML &amp; CSS
                  </div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 19/06/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">9</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">-React- Day -2: React</div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 12/07/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">9</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">-Database- Day -1: MySQL</div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 20/07/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">7</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">-DOM- Day -3: Recap of Topics</div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 02/03/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">10</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">
                    -Async programming- Day -1: Callback
                  </div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 04/03/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">10</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">
                    -Async programming- Day -2: Promise
                  </div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 07/03/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">7</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">
                    -Async programming- Day -5: Recap of topics
                  </div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 14/03/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">10</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">
                    -React- Day -3: React hooks &amp; states
                  </div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 20/03/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">10</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">-React- Day -5: React Hooks</div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 04/04/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">10</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">-React- Day -6: Router</div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 05/04/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">10</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">-React- Day -8: Context API</div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 15/04/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">8</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">-React- Day -10: Axios</div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 18/04/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">10</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">
                    -React- Day -11: practice with formik &amp; recap
                  </div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 27/04/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">7.5</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">-React-redux- Day -12</div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 07/05/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">9.5</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">-Database- Day -2: MySQL</div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 10/05/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">8</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">-Database- Day -3: MongoDB</div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 11/05/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">9.5</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
            <div class="sideBox1 flexCont w-100 mt-0 mb-2 mx-2 py-3">
              <div class="mx-2">
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="ml-0 mr-1">-Database- Day -4: MongoDB</div>
                </div>
              </div>
              <div class="mx-2">
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 16/05/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">5</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

      {data.length > 0 && (
            <div class="ml-4 mt-2 col-6 px-0 taskContainer">
          <div class="flexCont my-2 mx-4" style={{ alignItems: "center" }}>
            <div class="my-2 mx-2">
              <div class="title weight-500">Nixon Paul</div>
              <div class="row d-flex align-items-center  mx-1 secondaryGreyTextColor">
                <div class="mx-1">{data[props.activeKey].batch}</div>
                <div class="mx-1"></div>
                <div class="ml-0 mr-1">-{data[props.activeKey].day}</div>
              </div>
            </div>
            <div>
              <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                <div class="marktag mx-1 px-3 rounded">{data[props.activeKey].mark}</div>{" "}
                <div class="tasktag px-2 rounded">{data[props.activeKey].type}</div>
              </div>
              <div class="mx-1 secondaryGreyTextColor">
                {data[props.activeKey].createdAt}
              </div>
            </div>
          </div>
          <hr class="containerDivider mx-1" />
          <div class="flexCont my-2 mx-2"></div>
          <h6 class="mx-2">Student Comments :</h6>
          <div class="mx-2">Answers</div>
          <div class="mx-2 mt-0 mb-3 py-3 answerBorder">
          { !data[props.activeKey].frontEndSourceCode=="" ? (<div class="mx-2">
              Front-end Source code :{" "}
              <a
                // href="https://docs.google.com/document/d/1nr0ov9ZJht_ZI4J_-r_hd3T_84g0k4Wo5FQ8CPaK3S4/edit?usp=drivesdk"
                class=""
                target="_blank"
                rel="noreferrer"
              >
               {!data[props.activeKey].frontEndSourceCode=="" ?data[props.activeKey].frontEndSourceCode:null }
              

              </a>
            </div>):null}
          {!data[props.activeKey].frontEndDeployedUrl=="" ?(  <div class="mx-2">
              Front-end Source code :{" "}
              <a
                // href="https://docs.google.com/document/d/1nr0ov9ZJht_ZI4J_-r_hd3T_84g0k4Wo5FQ8CPaK3S4/edit?usp=drivesdk"
                class=""
                target="_blank"
                rel="noreferrer"
              >
               {!data[props.activeKey].frontEndDeployedUrl=="" ?data[props.activeKey].frontEndDeployedUrl:null }
              

              </a>
            </div>):null}
           {!data[props.activeKey].frontEndSourceCode2=="" ?( <div class="mx-2">
              Front-end Source code :{" "}
              <a
                // href="https://docs.google.com/document/d/1nr0ov9ZJht_ZI4J_-r_hd3T_84g0k4Wo5FQ8CPaK3S4/edit?usp=drivesdk"
                class=""
                target="_blank"
                rel="noreferrer"
              >
               {!data[props.activeKey].frontEndSourceCode2=="" ?data[props.activeKey].frontEndSourceCode2:null }

              </a>
            </div>):null}
           {!data[props.activeKey].frontEndDeployedUrl2=="" ?( <div class="mx-2">
              Front-end Source code :{" "}
              <a
                // href="https://docs.google.com/document/d/1nr0ov9ZJht_ZI4J_-r_hd3T_84g0k4Wo5FQ8CPaK3S4/edit?usp=drivesdk"
                class=""
                target="_blank"
                rel="noreferrer"
              >
               {!data[props.activeKey].frontEndDeployedUrl2=="" ?data[props.activeKey].frontEndDeployedUrl2:null }

              </a>
            </div>):null}
            {!data[props.activeKey].frontEndSourceCode3=="" ?(<div class="mx-2">
              Front-end Source code :{" "}
              <a
                // href="https://docs.google.com/document/d/1nr0ov9ZJht_ZI4J_-r_hd3T_84g0k4Wo5FQ8CPaK3S4/edit?usp=drivesdk"
                class=""
                target="_blank"
                rel="noreferrer"
              >
               {!data[props.activeKey].frontEndSourceCode3=="" ?data[props.activeKey].frontEndSourceCode3:null }

              </a>
            </div>):null}
           {!data[props.activeKey].frontEndDeployedUrl3=="" ?( <div class="mx-2">
              Front-end Source code :{" "}
              <a
                // href="https://docs.google.com/document/d/1nr0ov9ZJht_ZI4J_-r_hd3T_84g0k4Wo5FQ8CPaK3S4/edit?usp=drivesdk"
                class=""
                target="_blank"
                rel="noreferrer"
              >
               {!data[props.activeKey].frontEndDeployedUrl3=="" ?data[props.activeKey].frontEndDeployedUrl3:null }

              </a>
            </div>):null}
           {!data[props.activeKey].backEndSourceCode=="" ?( <div class="mx-2">
              Front-end Source code :{" "}
              <a
                // href="https://docs.google.com/document/d/1nr0ov9ZJht_ZI4J_-r_hd3T_84g0k4Wo5FQ8CPaK3S4/edit?usp=drivesdk"
                class=""
                target="_blank"
                rel="noreferrer"
              >
               {!data[props.activeKey].backEndSourceCode=="" ?data[props.activeKey].backEndSourceCode:null }

              </a>
            </div>):null}
         {!data[props.activeKey].backEndDeployedUrl=="" ?(   <div class="mx-2">
              Front-end Source code :{" "}
              <a
                // href="https://docs.google.com/document/d/1nr0ov9ZJht_ZI4J_-r_hd3T_84g0k4Wo5FQ8CPaK3S4/edit?usp=drivesdk"
                class=""
                target="_blank"
                rel="noreferrer"
              >
               {!data[props.activeKey].backEndDeployedUrl=="" ?data[props.activeKey].backEndDeployedUrl:null }

              </a>
            </div>):null}
          </div>
          <div class="col-12 marksContainer">
            <div class="row d-flex align-itmes-center justify-content-between mx-1">
              <div class="col-12">
                <div class="mx-2 mt-3">Comments:</div>
                <div class="mx-2 mt-0 mb-3 py-3 px-2 rounded commentsstudent">
                  Resubmitted task: - The solution is good but more information
                  would have been better.{" "}
                </div>
              </div>
            </div>
          </div>
        </div> 
          )}
    
         {/* <div class="ml-4 mt-2 col-6 px-0 taskContainer">
          <div class="flexCont my-2 mx-4" style={{ alignItems: "center" }}>
            <div class="my-2 mx-2">
              <div class="title weight-500">Nixon Paul</div>
              <div class="row d-flex align-items-center  mx-1 secondaryGreyTextColor">
                <div class="mx-1">{data[activeKey].batch}</div>
                <div class="mx-1"></div>
                <div class="ml-0 mr-1">-{data[activeKey].day}</div>
              </div>
            </div>
            <div>
              <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                <div class="marktag mx-1 px-3 rounded">{data[activeKey].mark}</div>{" "}
                <div class="tasktag px-2 rounded">{data[activeKey].type}</div>
              </div>
              <div class="mx-1 secondaryGreyTextColor">
                {data[activeKey].createdAt}
              </div>
            </div>
          </div>
          <hr class="containerDivider mx-1" />
          <div class="flexCont my-2 mx-2"></div>
          <h6 class="mx-2">Student Comments :</h6>
          <div class="mx-2">Answers</div>
          <div class="mx-2 mt-0 mb-3 py-3 answerBorder">
            <div class="mx-2">
              Front-end Source code :{" "}
              <a
                href="https://docs.google.com/document/d/1nr0ov9ZJht_ZI4J_-r_hd3T_84g0k4Wo5FQ8CPaK3S4/edit?usp=drivesdk"
                class=""
                target="_blank"
                rel="noreferrer"
              >
                https://docs.google.com/document/d/1nr0ov9ZJht_ZI4J_-r_hd3T_84g0k4Wo5FQ8CPaK3S4/edit?usp=drivesdk
              </a>
            </div>
          </div>
          <div class="col-12 marksContainer">
            <div class="row d-flex align-itmes-center justify-content-between mx-1">
              <div class="col-12">
                <div class="mx-2 mt-3">Comments:</div>
                <div class="mx-2 mt-0 mb-3 py-3 px-2 rounded commentsstudent">
                  Resubmitted task: - The solution is good but more information
                  would have been better.{" "}
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SplitTask;
