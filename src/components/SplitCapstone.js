import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";

const SplitCapstone = (props) => {
  console.log(props.data[props.index].username);
  const data = props.data[props.index];
 
  console.log(data.websites);
  const [fscode, setFscode] = useState("");
  const [fdcode, setFdcode] = useState("");
  const [bscode, setBscode] = useState("");
  const [bdcode, setBdcode] = useState("");
  const [comments, setComments] = useState("");
  const [submission, setSubmission] = useState([]);
  const [clickS, setClickS] = useState(false);
  const [mark,setMark] = useState(false);
  // const subData = props.subdata[props.index];
  const subData = submission;

  function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const options = {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    };
    const formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);
    const dayWithOrdinal = formattedTime.split(', ')[1].replace(/\d+/, (day) => {
      const suffixes = ['th', 'st', 'nd', 'rd'];
      const mod = day % 100;
      return mod >= 11 && mod <= 13
        ? day + 'th'
        : day + (suffixes[mod % 10] || 'th');
    });
    return `submitted ${dayWithOrdinal}, ${formattedTime.split(', ')[0]}`;
  }

  const timestamp = data.updatedAt; // June 14th, 2023 12:22:20 PM
const formattedTime = formatTimestamp(timestamp);
console.log(formattedTime);


  const handleSubmit = async (event) => {
    event.preventDefault();
    setClickS(true);
    setMark(true);
    const formData = {
      frontEndSourceCode: fscode,
      frontEndDeployedUrl: fdcode,
      backEndSourceCode: bscode,
      backEndDeployedUrl: bdcode,
      comments: comments,
    };
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:8800/api/capstone/submission",
        formData
      );
      console.log(response.data);
      setSubmission(response.data)
      return response.data;
      // Wait for the POST request to complete before calling getaxios
    } catch (error) {
      console.error(error);
      throw error;
    }
   
  };

  console.log(submission)
  

  return (
    <div class="Body_body__box__Y49P-">
      <div class="Body_body__wrapper__6cj6C">
        <div class="Navbar_navbar__container__3Q3Zl">
          <div class="sc-jTrPJq gFWlwy">
            <div class="sc-jTrPJq gFWlwy">
              <button
                title="< Back"
                class="NavButtons_add__button__q_2E5"
                onClick={() => props.setClick(false)}
              >
                &lt; Back
              </button>
            </div>
          </div>
        </div>
        <div class="row ml-1">
          <div class="col-5 row px-0 mx-2 d-flex align-items-start border-right">
            <div class="col-12 row px-0 mx-2 d-flex align-items-center">
              <div class="taskContainer sideBox1 flexCont w-100 mt-0 mb-3 mx-2 py-3">
                <div class="mx-2">
                  <div class="title weight-500">{data.username}</div>
                  <div class="row d-flex align-items-center secondaryGreyTextColor mx-1">
                    <div class="mx-1">
                      ({data.batch}- {data.desc})
                    </div>
                    <div class="mx-1">{data.projectName}</div>
                  </div>
                </div>
                <div class="mx-2">
                  <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                    <div class="secondaryGreyTextColor mx-1 px-1 rounded">
                    {mark ?formattedTime : data.status }
                    </div>
                    <div class="marktag mx-1 px-3 rounded">{data.mark}</div>

                    <div class="tasktag px-2 rounded">capstone</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="ml-4 mt-2 col-6 px-0 taskContainer">
            <div class="flexCont my-2 mx-4" style={{ alignItems: "center" }}>
              <div class="my-2 mx-2">
                <div class="title weight-500">{data.username}</div>
                <div class="row d-flex align-items-center  mx-1 secondaryGreyTextColor">
                  <div class="mx-1">
                    ({data.batch}- {data.desc})
                  </div>
                  <div class="mx-1">{data.projectName}</div>
                </div>
              </div>
              <div>
                <div class="ml-3 mr-1 d-flex align-self-end justify-content-end">
                  <div class="secondaryGreyTextColor mx-1 px-1 rounded">
                  {mark ?formattedTime : data.status }
                  </div>{" "}
                  <div class="marktag mx-1 px-3 rounded">{data.mark}</div>

                  <div class="tasktag px-2 rounded">capstone</div>
                </div>
              </div>
            </div>
            <div class="row d-flex align-itmes-center justify-content-between mx-1 commentsstudent">
              <div class="col-12">
                <div class="mx-2 mt-3">Description :</div>
                <div class="mx-2 mt-0 mb-3 py-3 px-2 rounded descriptionStudents">
                  <div class="smooth-scroll list-unstyled">
                    <p>{data.description}</p>
                    <p>
                      <strong>Task Title: </strong>
                      <span style={{ color: "rgb(235,107,86)" }}>
                        <strong>{data.projectName}</strong>
                      </span>
                    </p>
                    <p>
                      <strong>Any specifications on the design?</strong>
                    </p>
                    <p>Front-end: {data.frontend}</p>
                    <p>Back-end: {data.backend}</p>
                    <p>Database: {data.database}</p>
                    <p>
                      <strong>Requirements:</strong>
                    </p>
                    <ul>
                      <li>The project should achieve the CODE QUALITY</li>
                      <li>Use fonts/icons if it’s required in the design.</li>
                      <li>
                        The use of various charts is required in the design.
                      </li>
                      <li>
                        The use of bootstrap/ material CSS is required in the
                        design
                      </li>
                    </ul>
                    <p>
                      <strong>How do I submit my work?</strong>
                    </p>
                    <ul>
                      <li>
                        Push all your work files to GitHub in two different
                        repositories as given below
                      </li>
                      <li>Front-end repo name project-name-frontend.</li>
                      <li>Back-end repo name project-name-backend.</li>
                      <li>
                        Deploy your front-end application on
                        Netlify(https://www.netlify.com) and{" "}
                        <span
                          style={{
                            color: "rgb(85,90,143)",
                            backgroundColor: "rgb(255,255,255)",
                            fontSize: "16px",
                            fontFamily: "DM Sans, sans-serif",
                          }}
                        >
                          {" "}
                          back-end application on Render(https://render.com/).
                        </span>
                        &nbsp;&nbsp;
                      </li>
                    </ul>
                    <p>
                      <strong>
                        Any basic hints/links/reference sites to solve?
                      </strong>
                    </p>
                    {/* <p>
                      https://getbootstrap.com/docs/4.4/getting-started/introduction/
                    </p>
                    <p>https://www.chartjs.org/</p>
                    <p>https://jwt.io/introduction/</p>
                    <p>https://react-bootstrap.github.io/</p>
                    <p>https://materializecss.com/</p>
                    <p>https://tailwindcss.com/</p>
                    <p>https://expressjs.com/</p>
                    <p>
                      <strong>Terms and Conditions?</strong>
                    </p> */}

                    <>
                      {data.websites.map((link) => (
                        <p key={link._id}>{link.url}</p>
                      ))}
                    </>
                    <ul>
                      <li>
                        You agree to not share this confidential document with
                        anyone.&nbsp;
                      </li>
                      <li>
                        You agree to open-source your code (it may even look
                        good on your profile!). Do not mention our company’s
                        name anywhere in the code.
                      </li>
                      <li>
                        We will never use your source code under any
                        circumstances for any commercial purposes; this is just
                        a basic assessment task.
                      </li>
                      <li>
                        For capstone, the use case has to be identified by the
                        developer.
                      </li>
                    </ul>
                    <p>
                      <strong>
                        NOTE: Any violation of Terms and conditions is strictly
                        prohibited. You are bound to adhere to it.
                      </strong>
                    </p>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>

            {clickS ? (
              <div>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Code</th>
                    <th scope="col">Submission</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="codeName">Front-end Deployed URL</td>
                    <td>
                      {" "}
                      <a
                        href="https://nixon100.github.io/webcode/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        {subData.frontEndDeployedUrl}{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="codeName">Front-end Source code</td>
                    <td>
                      {" "}
                      <a
                        href="https://github.com/nixon100/webcode"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        {subData.frontEndSourceCode}{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="codeName">Back-end Deployed URL</td>
                    <td>
                      {" "}
                      <a
                        href="https://nixon100.github.io/webcode/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        {subData.backEndDeployedUrl}{" "}
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td class="codeName">Back-end Source code</td>
                    <td>
                      {" "}
                      <a
                        href="https://nixon100.github.io/webcode/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        {subData.backEndSourceCode}{" "}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
                 <div class="col-12 marksContainer">
                 <div class="row d-flex align-itmes-center justify-content-between mx-1">
                   <div class="col-12">
                     <div class="mx-2 mt-3">Comments:</div>
                     <div class="mx-2 mt-0 mb-3 py-3 px-2 rounded commentsstudent">
                       admin command.............
                     </div>
                   </div>
                 </div>
                 <hr class="containerDivider mx-1" />
               </div>
               </div>
            ) : (
              <div>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Code</th>
                      <th scope="col">Submission</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="codeName">Front-end Source code</td>
                      <td>
                        <input
                          type="text"
                          class="codeSubmission"
                          onChange={(event) => setFscode(event.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td class="codeName">Front-end Deployed URL</td>
                      <td>
                        <input
                          type="text"
                          class="codeSubmission"
                          onChange={(event) => setFdcode(event.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td class="codeName">Back-end Source code</td>
                      <td>
                        <input
                          type="text"
                          class="codeSubmission"
                          onChange={(event) => setBscode(event.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td class="codeName">Back-end Deployed URL</td>
                      <td>
                        <input
                          type="text"
                          class="codeSubmission"
                          onChange={(event) => setBdcode(event.target.value)}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <h6>Comments: </h6>
                      </td>
                      <td>
                        <input
                          type="text"
                          class="codeSubmission"
                          placeholder="leave your comments here"
                          onChange={(event) => setComments(event.target.value)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
             
            
           

            <div class="pl-2 my-0 align-self-end text-center">
              <button
                class="btn reqbuttoncreate"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
            {/* <div class="d-none">
              <div class="row d-flex align-itmes-center justify-content-between mx-1">
                <div class="col-12">
                  <div class="mx-2 mt-3">Comments:</div>
                  <div class="mx-2 mt-0 mb-3 py-3 px-2 rounded commentsstudent"></div>
                </div>
              </div>
              <hr class="containerDivider mx-1" />
            </div> */}
            <p style={{ padding: "8px", color: "rgb(250, 185, 20)" }}>
              <strong>Warning</strong>: 2 mark may be deducted automatically
              from your total score if your submission is beyond the deadline
            </p>
            </div>
            )}
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitCapstone;
