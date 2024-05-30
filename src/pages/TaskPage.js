import React, { useEffect, useState } from "react";
import SplitTask from "../components/SplitTask";
import axios from "axios";

const TaskPage = () => {
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/class/submission")
      .then((response) => {
        //   console.log(response.data);
        setData(response.data); // This should log the data from the Capstone collection
      })
      .catch((error) => {
        console.error(error); // This will log any errors that occur
      });
  }, []);
  console.log(data);
  const handle1 =(key)=>{
    setClick(true)
    setActiveKey(key)

  }

  // const data =[]
  const Card = ({ batch, day, createdAt, mark, type ,itemkey}) => (
    <div class="baseContainer" onClick={()=>handle1(itemkey)}>
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

  // const MyComponent = () => (
  //   <div>
  //     {data.map((item, index) => (
  //       <Card key={index} {...item} />
  //     ))}
  //   </div>
  // );
  return (
    <div class="Body_body__box__Y49P-">
      <div class="Body_body__content__1jKgz">
        <div style={{ padding: "0px 20px" }}>
          {click ? (
            <SplitTask activeKey={activeKey} setActiveKey={setActiveKey}data ={data}setClick={setClick}/>
          ) : (
            <div>
              {" "}
              <div class="sc-dmqHEX dPUVXQ">
                <div class="sc-jTrPJq gFWlwy"></div>
              </div>
              <div>
                {data.map((item, index) => (
                  <Card key={index} itemkey={index}{...item} />
                ))}
              </div>
              {/* <div class="baseContainer" > 
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-JavaScript - Day -2: Datatypes</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 15/05/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">4</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">
                    -JavaScript - Day -1: Introduction to Browser &amp; web
                  </div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 15/05/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">6</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">
                    -JavaScript - Day -3: JS array &amp; objects
                  </div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 18/05/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">8.7</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-JavaScript - Day -4: Functions</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 22/05/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">3</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-JavaScript - Day -5: ES5 vs ES6</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 25/05/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">8</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-JavaScript - Day -6: OOP in JS</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 28/05/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">7.699999999999999</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-JavaScript - Day -7: Array methods</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 09/06/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">7.9</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-HTML &amp; CSS- Day -5: HTML &amp; CSS</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 19/06/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">9</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-React- Day -2: React</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 12/07/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">9</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-Database- Day -1: MySQL</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 20/07/2023
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">7</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-DOM- Day -3: Recap of Topics</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 02/03/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">10</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-Async programming- Day -1: Callback</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 04/03/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">10</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-Async programming- Day -2: Promise</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 07/03/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">7</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">
                    -Async programming- Day -5: Recap of topics
                  </div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 14/03/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">10</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-React- Day -3: React hooks &amp; states</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 20/03/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">10</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-React- Day -5: React Hooks</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 04/04/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">10</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-React- Day -6: Router</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 05/04/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">10</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-React- Day -8: Context API</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 15/04/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">8</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-React- Day -10: Axios</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 18/04/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">10</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">
                    -React- Day -11: practice with formik &amp; recap
                  </div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 27/04/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">7.5</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-React-redux- Day -12</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 07/05/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">9.5</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-Database- Day -2: MySQL</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 10/05/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">8</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-Database- Day -3: MongoDB</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 11/05/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">9.5</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>
          <div class="baseContainer">
            <div class="flexCont">
              <div>
                <div class="title weight-500">Nixon Paul</div>
                <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                  <div class="mx-1">(B48 WD Tamil)</div>
                  <div class="mx-1"></div>
                  <div class="">-Database- Day -4: MongoDB</div>
                </div>
              </div>
              <div>
                <div class="mx-1 secondaryGreyTextColor">
                  submitted on 16/05/2024
                </div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="marktag mx-1 px-3 rounded">5</div>
                  <div class="tasktag px-2 rounded">Task</div>
                </div>
              </div>
            </div>
          </div>  */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
