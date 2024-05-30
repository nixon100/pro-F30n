import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import axios from "axios";
import { useState } from "react";
import SplitCapstone from "../components/SplitCapstone";

const CapstonePage = () => {
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const [subdata, setSubdata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [index, setIndex] = useState();

  // const { data, loading, error } = useFetch("localhost:8800/api/capstone");
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8800/api/capstone")
      .then((response) => {
        console.log(response.data);
        setData(response.data); // This should log the data from the Capstone collection
      })
      .catch((error) => {
        console.error(error); // This will log any errors that occur
      });
    setLoading(false);
   
  }, []);

  useEffect(()=>{
    axios
    .get("http://localhost:8800/api/capstone/submission")
    .then((response) => {
      console.log(response.data);
      setSubdata(response.data); // This should log the data from the Capstone collection
    })
    .catch((error) => {
      console.error(error); // This will log any errors that occur
    });
  },[setSubdata])
    
    console.log(subdata)

  // console.log(data);
  // console.log(click);

  // function handleClick (index){
  //   setIndex(index)
  //     setClick(true)

  // }
  return click ? (
    <SplitCapstone setClick={setClick} data={data} index={index} subdata={subdata}/>
  ) : (
    <div class="Body_body__box__Y49P-">
      <div class="Body_body__wrapper__6cj6C">
        <div class="Navbar_navbar__container__3Q3Zl">
          <div class="sc-jTrPJq gFWlwy">
            <div class="sc-jTrPJq gFWlwy"></div>
          </div>
        </div>
        <div className="my-4">
          {data.map((item, index) => (
            <div
              className="baseContainer"
              key={index}
              onClick={() => {
                setClick(true);
                setIndex(index);
              }}
            >
              {" "}
              <div className="flexCont">
                <div>
                  <div className="title weight-500">{item.username}</div>
                  <div className="row d-flex align-items-center justify-content-evenly mx-1 secondaryGreyTextColor">
                    <div className="mx-1">
                      ({item.batch}- {item.desc})
                    </div>
                    <div className="mx-1">{item.projectName}</div>
                  </div>
                </div>
                <div>
                  <div className="ml-3 mr-1 d-flex align-self-end justify-content-end">
                    <div className="secondaryGreyTextColor mx-1 px-1 rounded">
                      {item.status}
                    </div>
                    <div class="marktag mx-1 px-3 rounded">{item.mark}</div>
                    <div className="tasktag px-2 rounded">capstone</div>
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

export default CapstonePage;
