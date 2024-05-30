import React, { useState, useEffect } from "react";
import "../css/dashboard.css";
import axios from "axios";

const Dashboard = () => {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);
  const [mock, setMock] = useState([]);
  const [avr, setAvr] = useState();
  const [mavr, setMavr] = useState();
  const [countT,setCountT] = useState([]);
  const [per,setPer] = useState()


  useEffect(() => {
    axios
      .get("http://localhost:8800/api/webcode")
      .then((response) => {
        console.log(response.data);
        setCount(response.data); // This should log the data from the Capstone collection
      })
      .catch((error) => {
        console.error(error); // This will log any errors that occur
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8800/api/capstone")
      .then((response) => {
        console.log(response.data);
        setData(response.data); // This should log the data from the Capstone collection
      })
      .catch((error) => {
        console.error(error); // This will log any errors that occur
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8800/api/interview")
      .then((response) => {
        console.log(response.data);
        setMock(response.data); // This should log the data from the Capstone collection
      })
      .catch((error) => {
        console.error(error); // This will log any errors that occur
      });
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8800/api/task/submission")
      .then((response) => {
        console.log(response.data);
        setCountT(response.data); // This should log the data from the Capstone collection
      })
      .catch((error) => {
        console.error(error); // This will log any errors that occur
      });
  }, []);

  useEffect(() => {
    if (count.length > 0 && data.length > 0) {
      const a = (count[0].mark + data[0].mark) / 2;
      setAvr(a);
    }
  }, [count, data]);
  useEffect(() => {
    if (mock.length > 0) {
      const a = (mock[0].mark + mock[1].mark + mock[2].mark) / mock.length;
      setMavr(a.toFixed(2));
    }
  }, [mock]);
  useEffect(() => {
    const a = (countT.count / 29) *100;
    setPer(a.toFixed(2));
  },[countT]);
  
  console.log(per)

  return (
    <div class="Body_body__box__Y49P-">
      <div class="Body_body__wrapper__6cj6C">
        <div class="Body_body__content__full__1L5Pm">
          <div class="d-flex justify-content-center">
            <div class="col-md-6 col-lg-6">
              <div class="Cards_custom__card__style__1fFQJ">
                <div class="Cards_card__header__1H8GS"></div>
                <div class="card Cards_card__border__xEgVC p-3">
                  <div class="Dashboard_chart__topic__3JSqN">Task</div>
                  <div class="Dashboard_card__body__2t5M0 mb-5">
                    <div class="Dashboard_card__heading__LZe4X">
                      <div class="Dashboard_card__title__3xUJ_">
                        Task submission
                      </div>
                      <div class="Dashboard_attendance__number__3pO5v">{per}%</div>
                    </div>
                    <ul class="list-group mt-2">
                      <li
                        class="d-flex justify-content-between align-items-center"
                        style={{"padding-left": "30px", "padding-top": "5px", "font-weight": "bold"}}
                      >
                        submitted task
                        <span className="456" style={{"padding-left": "30px", "padding-top": "5px", "font-weight": "bold"}}>
                          {" "}
                          {(countT.count)}
                        </span>
                      </li>
                    </ul>
                    <ul class="list-group mt-2">
                      <li
                        class="d-flex justify-content-between align-items-center"
                        style={{"padding-left": "30px", "padding-top": "5px", "font-weight": "bold"}}
                      >
                        pending task
                        <span style={{"font-size": "18px" ,"color": "rgb(6, 170, 68)", "padding-right": "30px"}}>
                          {" "}
                          {29 -countT.count}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="col-md-6 col-lg-6">
              <div class="Cards_custom__card__style__1fFQJ">
                <div class="Cards_card__header__1H8GS"></div>
                <div class="card Cards_card__border__xEgVC p-3">
                  <div class="Dashboard_chart__topic__3JSqN">
                    Mock Interview
                  </div>
                  <div class="Dashboard_card__body__2t5M0">
                    <div class="Dashboard_card__heading__LZe4X">
                      <div class="Dashboard_card__title__3xUJ_">
                        Mock Interview Average Score
                      </div>
                      <div class="Dashboard_attendance__number__3pO5v">
                        0.88
                      </div>
                    </div>
                    <ul class="list-group mt-2">
                      <li
                        class="d-flex justify-content-between align-items-center"
                        style={{"padding-left": "30px", "padding-top": "5px", "font-weight": "bold"}}
                      >
                        Mock Interview - 2
                        <span  style={{"font-size": "18px" ,"color": "rgb(6, 170, 68)", "padding-right": "30px"}}>
                          {" "}
                          0
                        </span>
                      </li>
                    </ul>
                    <ul class="list-group mt-2">
                      <li
                        class="d-flex justify-content-between align-items-center"
                        style={{"padding-left": "30px", "padding-top": "5px", "font-weight": "bold"}}
                      >
                        Mock Interview - 1
                        <span  style={{"font-size": "18px" ,"color": "rgb(6, 170, 68)", "padding-right": "30px"}}>
                          {" "}
                          0.75
                        </span>
                      </li>
                    </ul>
                    <ul class="list-group mt-2">
                      <li
                        class="d-flex justify-content-between align-items-center"
                        style={{"padding-left": "30px", "padding-top": "5px", "font-weight": "bold"}}
                      >
                        Mock Interview - 2
                        <span  style={{"font-size": "18px" ,"color": "rgb(6, 170, 68)", "padding-right": "30px"}}>
                          {" "}
                          1.9
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          {/* <div class="d-flex justify-content-center mt-3">
            <div class="col-md-6 col-lg-12">
              <h3 class="mt-2 text-center">Activities</h3> */}

          {/* <div class="activity-card d-flex justify-content-between align-items-center" style="gap: 2.5rem;"><div class="card-1"><div class="Cards_custom__card__style__1fFQJ"><div class="Cards_card__header__1H8GS"></div><div class="card Cards_card__border__xEgVC "><div class="Dashboard_space__between__a7GVw"><div class="Dashboard_chart__topic__3JSqN">Codekata</div><div class="Dashboard_chart__points__area__3tBUO"><div class="d-flex justify-content-end flex-column mr-3"><span class="Dashboard_w__100__1PK-b Dashboard_chart__points__sub__head__2yWlS">Today : <span class="Dashboard_chart__points__font__22FyX">0</span></span><span class="Dashboard_w__100__1PK-b Dashboard_chart__points__sub__head__2yWlS">Total : <span class="Dashboard_chart__points__font__22FyX">640</span></span></div><div class="d-flex justify-content-end flex-column"><div class="d-flex align-items-center"><span class="Dashboard_max_score_color__2dHY4"></span><p class="Dashboard_info_text__3ebg6">Max Scores</p></div><div class="d-flex align-items-center"><span class="Dashboard_points_earned_color__c2yTG"></span><p class="Dashboard_info_text__3ebg6">Points Earned</p></div></div></div></div>
    <div class="Dashboard_barCont__3wUzO"><svg width="400" height="140"><g class="axis x" transform="translate(30, 110)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle"><path class="domain" stroke="currentColor" d="M0.5,6V0.5H370.5V6"></path><g class="tick" opacity="1" transform="translate(38.94736842105264,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">MON</text></g><g class="tick" opacity="1" transform="translate(87.63157894736841,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">TUE</text></g><g class="tick" opacity="1" transform="translate(136.31578947368422,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">WED</text></g><g class="tick" opacity="1" transform="translate(185,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">THU</text></g><g class="tick" opacity="1" transform="translate(233.68421052631578,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">FRI</text></g><g class="tick" opacity="1" transform="translate(282.3684210526316,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">SAT</text></g>
    <g class="tick" opacity="1" transform="translate(331.0526315789474,0)">
    <line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">SUN</text></g></g><g transform="translate(30, 20)"><g transform="translate(29.21052631578948, 45)">
    <rect width="19.473684210526315" height="45" fill="#B182FF"></rect><rect width="19.473684210526315" height="45" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g>
    <g transform="translate(77.89473684210526, 45)"><rect width="19.473684210526315" height="45" fill="#B182FF"></rect><rect width="19.473684210526315" height="45" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g><g transform="translate(126.57894736842105, 45)"><rect width="19.473684210526315" height="45" fill="#B182FF"></rect><rect width="19.473684210526315" height="45" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g>
    <g transform="translate(175.26315789473685, 45)"><rect width="19.473684210526315" height="45" fill="#B182FF"></rect><rect width="19.473684210526315" height="45" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g><g transform="translate(223.94736842105263, 45)"><rect width="19.473684210526315" height="45" fill="#B182FF"></rect><rect width="19.473684210526315" height="45" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g>
    <g transform="translate(272.63157894736844, 45)"><rect width="19.473684210526315" height="45" fill="#B182FF"></rect><rect width="19.473684210526315" height="45" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g><g transform="translate(321.3157894736842, 45)"><rect width="19.473684210526315" height="45" fill="#B182FF"></rect><rect width="19.473684210526315" height="45" fill="#FFBEBE"></rect><text transform="translate(9.736842105263158, -2)" text-anchor="middle" alignment-baseline="baseline" fill="grey" font-size="10">0.00</text></g></g></svg></div>
    <div class="Dashboard_space__between__a7GVw"><div class="" style={{ cursor: "pointer" }}><img class="p-2" src="/Icons/backwardArrow.svg" alt="add/plus"/></div><div class="">20/05/2024 - 26/05/2024</div><div class="" style={{ cursor: "pointer" }}/><img class="p-2" src="/Icons/forwardArrow.svg" alt="add/plus"/></div></div></div></div></div> */}
          {/* 
              <div class="card-2">
                <div class="Cards_custom__card__style__1fFQJ">
                  <div class="Cards_card__header__1H8GS"></div>
                  <div class="card Cards_card__border__xEgVC ">
                    <div class="Dashboard_space__between__a7GVw">
                      <div class="Dashboard_chart__topic__3JSqN">Webkata</div>
                      <div class="Dashboard_chart__points__area__3tBUO">
                        <div class="d-flex justify-content-end flex-column mr-3">
                          <span class="Dashboard_w__100__1PK-b Dashboard_chart__points__sub__head__2yWlS">
                            Today :{" "}
                            <span class="Dashboard_chart__points__font__22FyX">
                              0
                            </span>
                          </span>
                          <span class="Dashboard_w__100__1PK-b Dashboard_chart__points__sub__head__2yWlS">
                            Total :{" "}
                            <span class="Dashboard_chart__points__font__22FyX">
                              0
                            </span>
                          </span>
                        </div>
                        <div class="d-flex justify-content-end flex-column">
                          <div class="d-flex align-items-center">
                            <span class="Dashboard_max_score_color__2dHY4"></span>
                            <p class="Dashboard_info_text__3ebg6">Max Scores</p>
                          </div>
                          <div class="d-flex align-items-center">
                            <span class="Dashboard_points_earned_color__c2yTG"></span>
                            <p class="Dashboard_info_text__3ebg6">
                              Points Earned
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="Dashboard_barCont__3wUzO">
                      <svg width="400" height="140">
                        <g
                          class="axis x"
                          transform="translate(30, 110)"
                          fill="none"
                          font-size="10"
                          font-family="sans-serif"
                          text-anchor="middle"
                        >
                          <path
                            class="domain"
                            stroke="currentColor"
                            d="M0.5,6V0.5H370.5V6"
                          ></path>
                          <g
                            class="tick"
                            opacity="1"
                            transform="translate(38.94736842105264,0)"
                          >
                            <line stroke="currentColor" y2="6"></line>
                            <text fill="currentColor" y="9" dy="0.71em">
                              MON
                            </text>
                          </g>
                          <g
                            class="tick"
                            opacity="1"
                            transform="translate(87.63157894736841,0)"
                          >
                            <line stroke="currentColor" y2="6"></line>
                            <text fill="currentColor" y="9" dy="0.71em">
                              TUE
                            </text>
                          </g>
                          <g
                            class="tick"
                            opacity="1"
                            transform="translate(136.31578947368422,0)"
                          >
                            <line stroke="currentColor" y2="6"></line>
                            <text fill="currentColor" y="9" dy="0.71em">
                              WED
                            </text>
                          </g>
                          <g
                            class="tick"
                            opacity="1"
                            transform="translate(185,0)"
                          >
                            <line stroke="currentColor" y2="6"></line>
                            <text fill="currentColor" y="9" dy="0.71em">
                              THU
                            </text>
                          </g>
                          <g
                            class="tick"
                            opacity="1"
                            transform="translate(233.68421052631578,0)"
                          >
                            <line stroke="currentColor" y2="6"></line>
                            <text fill="currentColor" y="9" dy="0.71em">
                              FRI
                            </text>
                          </g>
                          <g
                            class="tick"
                            opacity="1"
                            transform="translate(282.3684210526316,0)"
                          >
                            <line stroke="currentColor" y2="6"></line>
                            <text fill="currentColor" y="9" dy="0.71em">
                              SAT
                            </text>
                          </g>
                          <g
                            class="tick"
                            opacity="1"
                            transform="translate(331.0526315789474,0)"
                          >
                            <line stroke="currentColor" y2="6"></line>
                            <text fill="currentColor" y="9" dy="0.71em">
                              SUN
                            </text>
                          </g>
                        </g>
                        <g transform="translate(30, 20)">
                          <g transform="translate(29.21052631578948, 45)">
                            <rect
                              width="19.473684210526315"
                              height="45"
                              fill="#B182FF"
                            ></rect>
                            <rect
                              width="19.473684210526315"
                              height="45"
                              fill="#FFBEBE"
                            ></rect>
                            <text
                              transform="translate(9.736842105263158, -2)"
                              text-anchor="middle"
                              alignment-baseline="baseline"
                              fill="grey"
                              font-size="10"
                            >
                              0.00
                            </text>
                          </g>
                          <g transform="translate(77.89473684210526, 45)">
                            <rect
                              width="19.473684210526315"
                              height="45"
                              fill="#B182FF"
                            ></rect>
                            <rect
                              width="19.473684210526315"
                              height="45"
                              fill="#FFBEBE"
                            ></rect>
                            <text
                              transform="translate(9.736842105263158, -2)"
                              text-anchor="middle"
                              alignment-baseline="baseline"
                              fill="grey"
                              font-size="10"
                            >
                              0.00
                            </text>
                          </g>
                          <g transform="translate(126.57894736842105, 45)">
                            <rect
                              width="19.473684210526315"
                              height="45"
                              fill="#B182FF"
                            ></rect>
                            <rect
                              width="19.473684210526315"
                              height="45"
                              fill="#FFBEBE"
                            ></rect>
                            <text
                              transform="translate(9.736842105263158, -2)"
                              text-anchor="middle"
                              alignment-baseline="baseline"
                              fill="grey"
                              font-size="10"
                            >
                              0.00
                            </text>
                          </g>
                          <g transform="translate(175.26315789473685, 45)">
                            <rect
                              width="19.473684210526315"
                              height="45"
                              fill="#B182FF"
                            ></rect>
                            <rect
                              width="19.473684210526315"
                              height="45"
                              fill="#FFBEBE"
                            ></rect>
                            <text
                              transform="translate(9.736842105263158, -2)"
                              text-anchor="middle"
                              alignment-baseline="baseline"
                              fill="grey"
                              font-size="10"
                            >
                              0.00
                            </text>
                          </g>
                          <g transform="translate(223.94736842105263, 45)">
                            <rect
                              width="19.473684210526315"
                              height="45"
                              fill="#B182FF"
                            ></rect>
                            <rect
                              width="19.473684210526315"
                              height="45"
                              fill="#FFBEBE"
                            ></rect>
                            <text
                              transform="translate(9.736842105263158, -2)"
                              text-anchor="middle"
                              alignment-baseline="baseline"
                              fill="grey"
                              font-size="10"
                            >
                              0.00
                            </text>
                          </g>
                          <g transform="translate(272.63157894736844, 45)">
                            <rect
                              width="19.473684210526315"
                              height="45"
                              fill="#B182FF"
                            ></rect>
                            <rect
                              width="19.473684210526315"
                              height="45"
                              fill="#FFBEBE"
                            ></rect>
                            <text
                              transform="translate(9.736842105263158, -2)"
                              text-anchor="middle"
                              alignment-baseline="baseline"
                              fill="grey"
                              font-size="10"
                            >
                              0.00
                            </text>
                          </g>
                          <g transform="translate(321.3157894736842, 45)">
                            <rect
                              width="19.473684210526315"
                              height="45"
                              fill="#B182FF"
                            ></rect>
                            <rect
                              width="19.473684210526315"
                              height="45"
                              fill="#FFBEBE"
                            ></rect>
                            <text
                              transform="translate(9.736842105263158, -2)"
                              text-anchor="middle"
                              alignment-baseline="baseline"
                              fill="grey"
                              font-size="10"
                            >
                              0.00
                            </text>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="Dashboard_space__between__a7GVw">
                      <div class="" style={{ cursor: "pointer" }}>
                        <img
                          class="p-2"
                          src="/Icons/backwardArrow.svg"
                          alt="add/plus"
                        />
                      </div>
                      <div class="">20/05/2024 - 26/05/2024</div>
                      <div class="" style={{ cursor: "pointer" }}>
                        <img
                          class="p-2"
                          src="/Icons/forwardArrow.svg"
                          alt="add/plus"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* <div class="d-flex justify-content-center mt-3"><div class="col-md-12"><div class="Cards_custom__card__style__1fFQJ"><div class="Cards_card__header__1H8GS"></div><div class="card Cards_card__border__xEgVC "><div class="Dashboard_line__container__i2x_7"><div class="Dashboard_space__between__a7GVw"><div class="Dashboard_chart__topic__3JSqN">Task</div><div class="Dashboard_chart__points__area__3tBUO"><span class="Dashboard_w__100__1PK-b Dashboard_chart__points__sub__head__2yWlS">Submitted Tasks : <span class="Dashboard_chart__points__font__22FyX">24</span></span><span class="Dashboard_w__100__1PK-b Dashboard_chart__points__sub__head__2yWlS">Pending Tasks : <span class="Dashboard_chart__points__font__22FyX">5</span></span></div></div><div class="d-flex justify-content-center"><svg width="800" height="300">
    <g transform="translate(30,20)"><g class="axis x" transform="translate(30, 235)" fill="none" font-size="10" font-family="sans-serif" text-anchor="middle"><path class="domain" stroke="currentColor" d="M0.5,6V0.5H740.5V6"></path><g class="tick" opacity="1" transform="translate(0.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">0</text></g><g class="tick" opacity="1" transform="translate(53.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">2</text></g>
    <g class="tick" opacity="1" transform="translate(106.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">4</text></g><g class="tick" opacity="1" transform="translate(159.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">6</text></g><g class="tick" opacity="1" transform="translate(211.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">8</text></g><g class="tick" opacity="1" transform="translate(264.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">10</text></g><g class="tick" opacity="1" transform="translate(317.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">12</text></g><g class="tick" opacity="1" transform="translate(370.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">14</text></g><g class="tick" opacity="1" transform="translate(423.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">16</text></g><g class="tick" opacity="1" transform="translate(476.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">18</text></g><g class="tick" opacity="1" transform="translate(529.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">20</text></g><g class="tick" opacity="1" transform="translate(581.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">22</text></g><g class="tick" opacity="1" transform="translate(634.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">24</text></g><g class="tick" opacity="1" transform="translate(687.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">26</text></g><g class="tick" opacity="1" transform="translate(740.5,0)"><line stroke="currentColor" y2="6"></line><text fill="currentColor" y="9" dy="0.71em">28</text></g></g><g class="axis y" transform="translate(30, 20)" fill="none" font-size="10" font-family="sans-serif" text-anchor="end"><path class="domain" stroke="currentColor" d="M-6,215.5H0.5V0.5H-6"></path><g class="tick" opacity="1" transform="translate(0,215.5)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">8.2</text></g>
    <g class="tick" opacity="1" transform="translate(0,191.611111111111)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">8.4</text></g><g class="tick" opacity="1" transform="translate(0,167.7222222222222)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">8.6</text></g>
    <g class="tick" opacity="1" transform="translate(0,143.8333333333332)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">8.8</text></g><g class="tick" opacity="1" transform="translate(0,119.9444444444444)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">9.0</text></g><g class="tick" opacity="1" transform="translate(0,96.0555555555556)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">9.2</text></g><g class="tick" opacity="1" transform="translate(0,72.1666666666666)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">9.4</text></g><g class="tick" opacity="1" transform="translate(0,48.2777777777778)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">9.6</text></g><g class="tick" opacity="1" transform="translate(0,24.388888888888804)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">9.8</text></g>
    <g class="tick" opacity="1" transform="translate(0,0.5)"><line stroke="currentColor" x2="-6"></line><text fill="currentColor" x="-9" dy="0.32em">10.0</text></g></g><g class="marks">
    <path fill="none" stroke="#B182FF"
     d="M30,497.778C38.545,687.911,47.089,878.045,56,736.667C64.911,595.288,74.187,122.398,83,175.278C91.813,228.158,100.163,806.809,109,856.111C117.837,905.413,127.163,425.366,136,258.889C144.837,92.412,153.187,239.505,162,294.722C170.813,349.939,180.089,313.28,189,270.833C197.911,228.387,206.455,180.152,215,139.444C223.545,98.737,232.089,65.555,241,20C249.911,-25.555,259.187,-83.485,268,20C276.813,123.485,285.163,388.384,294,378.333C302.837,368.282,312.163,83.281,321,20C329.837,-43.281,338.187,115.16,347,139.444C355.813,163.729,365.089,53.857,374,20C382.911,-13.857,391.455,28.301,400,20C408.545,11.699,417.089,-47.059,426,20C434.911,87.059,444.187,279.937,453,258.889C461.813,237.841,470.163,2.869,479,20C487.837,37.131,497.163,306.367,506,318.611C514.837,330.856,523.187,86.11,532,79.722C540.813,73.335,550.089,305.306,559,378.333C567.911,451.361,576.455,365.445,585,258.889C593.545,152.332,602.089,25.135,611,79.722C619.911,134.309,629.187,370.68,638,617.222C646.813,863.764,655.163,1120.478,664,1214.444C672.837,1308.411,682.163,1239.631,691,1214.444C699.837,1189.257,708.187,1207.663,717,1214.444C725.813,1221.226,735.089,1216.382,744,1214.444C752.911,1212.507,761.455,1213.476,770,1214.444">
     </path></g><g class="marks"><path fill="none" stroke="#FFBEBE" d="M30,20C38.545,20.023,47.089,20.046,56,20C64.911,19.954,74.187,19.838,83,20C91.813,20.162,100.163,20.603,109,20C117.837,19.397,127.163,17.749,136,20C144.837,22.251,153.187,28.399,162,20C170.813,11.601,180.089,-11.345,189,20C197.911,51.345,206.455,136.981,215,139.444C223.545,141.908,232.089,61.2,241,20C249.911,-21.2,259.187,-22.89,268,20C276.813,62.89,285.163,150.362,294,139.444C302.837,128.527,312.163,19.221,321,20C329.837,20.779,338.187,131.643,347,139.444C355.813,147.245,365.089,51.983,374,20C382.911,-11.983,391.455,19.314,400,20C408.545,20.686,417.089,-9.238,426,20C434.911,49.238,444.187,137.638,453,139.444C461.813,141.251,470.163,56.463,479,20C487.837,-16.463,497.163,-4.6,506,20C514.837,44.6,523.187,81.938,532,79.722C540.813,77.506,550.089,35.737,559,20C567.911,4.263,576.455,14.558,585,20C593.545,25.442,602.089,26.03,611,20C619.911,13.97,629.187,1.321,638,20C646.813,38.679,655.163,88.687,664,139.444C672.837,190.202,682.163,241.709,691,235C699.837,228.291,708.187,163.365,717,139.444C725.813,115.524,735.089,132.61,744,139.444C752.911,146.279,761.455,142.862,770,139.444"></path></g><g class="marks"><path fill="none" stroke="#FFDCDC" d="M30,378.333C38.545,309.219,47.089,240.105,56,258.889C64.911,277.672,74.187,384.353,83,378.333C91.813,372.313,100.163,253.593,109,258.889C117.837,264.185,127.163,393.498,136,378.333C144.837,363.169,153.187,203.527,162,139.444C170.813,75.362,180.089,106.837,189,139.444C197.911,172.052,206.455,205.79,215,258.889C223.545,311.988,232.089,384.447,241,378.333C249.911,372.22,259.187,287.533,268,258.889C276.813,230.245,285.163,257.642,294,258.889C302.837,260.135,312.163,235.231,321,258.889C329.837,282.547,338.187,354.768,347,378.333C355.813,401.899,365.089,376.808,374,378.333C382.911,379.858,391.455,407.999,400,378.333C408.545,348.668,417.089,261.197,426,258.889C434.911,256.58,444.187,339.434,453,378.333C461.813,417.232,470.163,412.177,479,378.333C487.837,344.49,497.163,281.858,506,258.889C514.837,235.92,523.187,252.614,532,258.889C540.813,265.164,550.089,261.021,559,258.889C567.911,256.757,576.455,256.635,585,258.889C593.545,261.142,602.089,265.771,611,258.889C619.911,252.007,629.187,233.616,638,258.889C646.813,284.162,655.163,353.1,664,378.333C672.837,403.567,682.163,385.097,691,378.333C699.837,371.57,708.187,376.512,717,378.333C725.813,380.154,735.089,378.854,744,378.333C752.911,377.813,761.455,378.073,770,378.333">
    </path></g></g></svg></div></div></div></div></div></div> */}

        <div class="d-flex justify-content-center">
          <div class="col-md-6 col-lg-6">
            <div class="Cards_custom__card__style__1fFQJ">
              <div class="Cards_card__header__1H8GS"></div>
              <div class="card Cards_card__border__xEgVC p-3">
                <div class="Dashboard_chart__topic__3JSqN">Event</div>
                <div class="Dashboard_card__body__2t5M0 mb-5">
                  <div class="Dashboard_card__heading__LZe4X">
                    <div class="Dashboard_card__title__3xUJ_">
                      Event Average Score
                    </div>
                    <div class="Dashboard_attendance__number__3pO5v">{avr}</div>
                  </div>
                  <ul class="list-group mt-2">
                    <li
                      class="d-flex justify-content-between align-items-center"
                      style={{
                        paddingLeft: 30,
                        paddingTop: 5,
                        fontWeight: "bold",
                      }}
                    >
                      WebCode - 1
                      <span
                        style={{
                          paddingLeft: 30,
                          paddingTop: 5,
                          fontWeight: "bold",
                        }}
                      >
                        {" "}
                        {count.length > 0 && count[0].mark}
                      </span>
                    </li>
                  </ul>
                  <ul class="list-group mt-2">
                    <li
                      class="d-flex justify-content-between align-items-center"
                      style={{
                        paddingLeft: 30,
                        paddingTop: 5,
                        fontWeight: "bold",
                      }}
                    >
                      Capstone - 1
                      <span
                        style={{
                          fontSize: 18,
                          color: "rgb(6, 170, 68)",
                          paddingRight: 30,
                        }}
                      >
                        {" "}
                        {data.length > 0 && data[0] && data[0].mark}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-6">
            <div class="Cards_custom__card__style__1fFQJ">
              <div class="Cards_card__header__1H8GS"></div>
              <div class="card Cards_card__border__xEgVC p-3">
                <div class="Dashboard_chart__topic__3JSqN">Mock Interview</div>
                <div class="Dashboard_card__body__2t5M0">
                  <div class="Dashboard_card__heading__LZe4X">
                    <div class="Dashboard_card__title__3xUJ_">
                      Mock Interview Average Score
                    </div>
                    <div class="Dashboard_attendance__number__3pO5v">
                      {mavr}
                    </div>
                  </div>
                  <ul class="list-group mt-2">
                    <li
                      class="d-flex justify-content-between align-items-center"
                      style={{
                        paddingLeft: 30,
                        paddingTop: 5,
                        fontWeight: "bold",
                      }}
                    >
                      Mock Interview - 2
                      <span
                        style={{
                          fontSize: 18,
                          color: "rgb(6, 170, 68)",
                          paddingRight: 30,
                        }}
                      >
                        {" "}
                        {mock.length > 0 && mock[0] && mock[0].mark}
                      </span>
                    </li>
                  </ul>
                  <ul class="list-group mt-2">
                    <li
                      class="d-flex justify-content-between align-items-center"
                      style={{
                        paddingLeft: 30,
                        paddingTop: 5,
                        fontWeight: "bold",
                      }}
                    >
                      Mock Interview - 1
                      <span
                        style={{
                          fontSize: 18,
                          color: "rgb(6, 170, 68)",
                          paddingRight: 30,
                        }}
                      >
                        {" "}
                        {mock.length > 0 && mock[0] && mock[1].mark}
                      </span>
                    </li>
                  </ul>
                  <ul class="list-group mt-2">
                    <li
                      class="d-flex justify-content-between align-items-center"
                      style={{
                        paddingLeft: 30,
                        paddingTop: 5,
                        fontWeight: "bold",
                      }}
                    >
                      Mock Interview - 2
                      <span
                        style={{
                          fontSize: 18,
                          color: "rgb(6, 170, 68)",
                          paddingRight: 30,
                        }}
                      >
                        {" "}
                        {mock.length > 0 && mock[0] && mock[2].mark}
                      </span>
                    </li>
                  </ul>
                  {/* <div class="Dashboard_go__to__class__X42zt">
                    <p class="Dashboard_goto__class__font__3xZLp">View All</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
