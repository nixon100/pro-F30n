import React from "react";
import "../css/webcode.css";
import { useState, useEffect } from "react";
import SplitWebcode from "../components/SplitWebcode";
import axios from "axios";

const Webcode = () => {
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const [subdata, setSubdata] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [index, setIndex] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8800/api/webcode")
      .then((response) => {
        console.log(response.data);
        setData(response.data); // This should log the data from the Capstone collection
      })
      .catch((error) => {
        console.error(error); // This will log any errors that occur
      });
    setLoading(false);
    axios
      .get("http://localhost:8800/api/webcode/submission")
      .then((response) => {
        console.log(response.data);
        setSubdata(response.data); // This should log the data from the Capstone collection
      })
      .catch((error) => {
        console.error(error); // This will log any errors that occur
      });
  }, []);
  return click ? (
    <SplitWebcode setClick={setClick} data={data} index={index} subdata={subdata}/>
  ) : (
    <div class="Body_body__box__Y49P-">
      <div class="Body_body__wrapper__6cj6C">
        <div class="Navbar_navbar__container__3Q3Zl">
          <div class="sc-jTrPJq gFWlwy">
            <div class="sc-jTrPJq gFWlwy"></div>
          </div>
        </div>
        <div class="my-4">
          {data.map((item, index) => (
            <div
              class="baseContainer"
              key={index}
              onClick={() => {
                setClick(true);
                setIndex(index);
              }}
            >
              <div class="flexCont">
                <div>
                  <div class="title weight-500">{item.username}</div>
                  <div class="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                    <div class="mx-1">({item.batch}- {item.desc})</div>
                    <div class="mx-1">{item.projectName}</div>
                  </div>
                </div>
                <div>
                  <div class="mx-1 secondaryGreyTextColor">
                  {item.status}
                  </div>
                  <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                    <div class="marktag mx-1 px-3 rounded">
                      {item.mark}
                      </div>
                    <div class="tasktag px-2 rounded">webCode</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Webcode;
