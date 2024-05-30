import React, { useState } from "react";
import axios from "axios";
import { setNestedObjectValues, useFormik } from "formik";

const TaskPart = (props) => {
  const [fsc, setFsc] = useState("");
  const [fdc, setFdc] = useState("");
  const [comment, setComment] = useState("");
  const [bsc, setBsc] = useState("");
  const [bdc, setBdc] = useState("");
  const [fsc2, setFsc2] = useState("");
  const [fdc2, setFdc2] = useState("");
  const [fsc3, setFsc3] = useState("");
  const [fdc3, setFdc3] = useState("");
  // const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  // console.log(input1);
  // console.log(input2);
  const handleSubmit = async (values) => {
    props.setIsFormSubmitted(true);
    // setClickS(true);
    // setMark(true);

    // const formData = {
    //   frontEndSourceCode: fsc,
    //   frontEndDeployedUrl: fdc,
    //   frontEndSourceCode2: fsc2,
    //   frontEndDeployedUrl2: fdc2,
    //   frontEndSourceCode3: fsc3,
    //   frontEndDeployedUrl3: fdc3,
    //   backEndSourceCode: bsc,
    //   backEndDeployedUrl: bdc,
    //   day: props.data.title,
    //   batch: "B48D Tamil",
    //   mark: "",
    //   type: "task",
    //   comments: comment,
    // };
    // console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:8800/api/class/submission",
        values
      );
      // const response = await axios.put(
      //         `http://localhost:8800/api/class/${props.data._id}`,
      //         formData
      //       );

      console.log(response.data);
      // setSubmission(response.data)
      // return response.data;
      setFsc("");
      setFdc("");
      setFsc2("");
      setFdc2("");
      setComment("");
      setBsc("");
      setBdc("");
      setFsc3("");
      setFdc3("");
      // Wait for the POST request to complete before calling getaxios
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.frontEndSourceCode) {
      errors.frontEndSourceCode = 'Required';
    } else if (values.frontEndSourceCode.length > 15) {
      errors.frontEndSourceCode = 'Must be 15 characters or less';
    }
  
    if (!values.comments) {
      errors.comments = 'Required';
    } else if (values.comments.length > 20) {
      errors.comments = 'Must be 20 characters or less';
    }

    // if (!values.author) {
    //   errors.author = "author Name Required";
    // } else if (values.author.length > 15) {
    //   errors.author = "Must be 15 characters or less";
    // }

    // if (!values.isbn) {
    //   errors.isbn = "ISBN No Required";
    // } else if (
    //   isNaN(values.isbn) ||
    //   (values.isbn.toString().trim().length !== 10 &&
    //     values.isbn.toString().trim().length !== 13)
    // ) {
    //   // console.log(values.isbn.toString().trim().length)
    //   errors.isbn = "Invalid isbn number";
    // }
    // if (!values.publicationdate) {
    //   errors.publicationdate = "Date Required";
    // } else if (
    //   !/^\d{4}-\d{2}-\d{2}$/.test(values.publicationdate) &&
    //   !/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(values.publicationdate)
    // ) {
    //   errors.publicationdate =
    //     "Invalid date format. Please use the format YYYY-MM-DD or YYYY-MM-DD HH:MM:SS.";
    // }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      frontEndSourceCode: "",
        frontEndDeployedUrl: "",
        frontEndSourceCode2: "",
        frontEndDeployedUrl2: "",
        frontEndSourceCode3: "",
        frontEndDeployedUrl3: "",
        backEndSourceCode: "",
        backEndDeployedUrl: "",
        day: props.data.title,
        batch: "B48D Tamil",
        mark: "",
        type: "task",
        comments: "",
    },
    validate,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      // setJson(prevJson => [...prevJson, values]);
      // console.log(JSON.stringify(values))
      //  values.title = "";
      //  values.author = "";
      //  values.isbn = "";
      //  values.publicationdate = "";
      // addOrEditItem(values, editid);
      // setAdd(false);
      // setEdit(false);
      handleSubmit(values);
      console.log(values)
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div>
      <div class="session-area">
        <span
          const
          style={{
            fontSize: "24px",
            fontWeight: "500",
          }}
        >
          {props.data.title}
        </span>
        <br />
        {props.data.date_and_time}
        <hr />
        <div class="preread-head">Contents:</div>
        <div class="ml-3">
          <span class="preread" style={{ "white-space": "pre-wrap" }}>
            {props.data.content}
          </span>
        </div>
        <div class="preread-head mt-3">Pre-read:</div>
        <div class="ml-3">
          <span class="preread" style={{ "white-space": "pre-wrap" }}>
            {props.data.pre_read}
          </span>
        </div>
      </div>

      {props.data.taskURL == "-" || props.data.taskURL == "no task" ? null : (
        <div>
          {" "}
          <div class="activity ml-1 mt-3 mb-2">Activities</div>
          <div class="mb-4">
            {" "}
            <form class="session-container"  onSubmit={formik.handleSubmit}>
              <div class="session-area">
                <div class="accordion">
                  <div class="d-flex justify-content-between">
                    <div style={{ "font-weight": "500", "font-size": "1rem" }}>
                      {props.data.taskURL}
                    </div>
                    <div>
                      <div class="row d-flex justify-content-between flex-nowrap mr-2">
                        <div class="task">Task</div>
                        {/* <div class="ml-4 mt-1" type="button">
                          <div color="" class="sc-beqWaB ehMBSb">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="10"
                              viewBox="0 0 16 10"
                              fill="none"
                              class="injected-svg"
                              data-src="/Icons/downArrow.svg"
                              // xmlns:xlink="http://www.w3.org/1999/xlink"
                            >
                              <path
                                d="M2 2L8 8L14 2"
                                stroke="#93A4B7"
                                stroke-width="4"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></path>
                            </svg>
                          </div>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div class="collapse">
                    <div class="card-body" style={{ "padding-bottom": "0px" }}>
                      <div class="tagsList">
                        <div class="tagTitle">Tags:</div>
                        <div class="tagItem">html</div>
                      </div>
                      <div class="p-0">
                        <form autocomplete="off">
                          <div class="task-area" style={{ padding: "16px" }}>
                            <div class="submission">
                              {props.taskSub3 ||
                              props.taskSub2 ||
                              props.taskSub4 ? (
                                <div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Front-end Source code
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                          placeholder="Enter Front-end Source code link"
                                          type="text"
                                          onChange={(e) =>
                                            setFsc(e.target.value)
                                          }
                                          value={fsc}
                                          disabled={props.isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Front-end Deployed URL
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                          placeholder="Enter Front-end Deployed URL link"
                                          type="text"
                                          onChange={(e) =>
                                            setFdc(e.target.value)
                                          }
                                          // value="https://tranquil-hotteok-37da2f.netlify.app/"
                                          value={fdc}
                                          disabled={props.isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : null}
                              {props.taskSub2 ||
                              props.taskSub4 ||
                              props.taskSub8 ? (
                                <div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Front-end Source code
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                          placeholder="Enter Front-end Source code link"
                                          type="text"
                                          onChange={(e) => {
                                            props.taskSub2 || props.taskSub4
                                              ? setFsc2(e.target.value)
                                              : setFsc(e.target.value);
                                          }}
                                          value={
                                            props.taskSub2 || props.taskSub4
                                              ? fsc2
                                              : fsc
                                          }
                                          disabled={props.isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Front-end Deployed URL
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                          placeholder="Enter Front-end Deployed URL link"
                                          type="text"
                                          onChange={(e) => {
                                            props.taskSub2 || props.taskSub4
                                              ? setFdc2(e.target.value)
                                              : setFdc(e.target.value);
                                          }}
                                          // value="https://tranquil-hotteok-37da2f.netlify.app/"
                                          value={
                                            props.taskSub2 || props.taskSub4
                                              ? fdc2
                                              : fdc
                                          }
                                          disabled={props.isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>{" "}
                                </div>
                              ) : null}

                              {props.taskSub1 ? (
                                <div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Front-end Source code
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          // name="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                          placeholder="Enter Front-end Source code link"
                                          type="text"
                                          // onChange={(e) =>
                                          //   setFsc(e.target.value)
                                          // }
                                          id="frontEndSourceCode"
                                          name="frontEndSourceCode"
                                          onChange={formik.handleChange}
                                          // value={fsc}
                                          // disabled={props.isFormSubmitted}
                                          // value={formik.values.frontEndSourceCode}
                                        />
                                      </div>
                                      {formik.errors.frontEndSourceCode ? <div>{formik.errors.frontEndSourceCode}</div> : null}
                                    </div>
                                  </div>
                                </div>
                              ) : null}

                              {props.taskSub4 ? (
                                <div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Front-end Source code
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                          placeholder="Enter Front-end Source code link"
                                          type="text"
                                          onChange={(e) =>
                                            setFsc3(e.target.value)
                                          }
                                          value={fsc3}
                                          disabled={props.isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Front-end Deployed URL
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                          placeholder="Enter Front-end Deployed URL link"
                                          type="text"
                                          onChange={(e) =>
                                            setFdc3(e.target.value)
                                          }
                                          // value="https://tranquil-hotteok-37da2f.netlify.app/"
                                          value={fdc3}
                                          disabled={props.isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>{" "}
                                </div>
                              ) : null}
                              {props.taskSub5 ? (
                                <div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Back-end Source code
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                          placeholder="Enter Front-end Source code link"
                                          type="text"
                                          onChange={(e) =>
                                            setBsc(e.target.value)
                                          }
                                          value={bsc}
                                          disabled={props.isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ) : null}

                              {props.taskSub6 || props.taskSub8 ? (
                                <div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Back-end Source code
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                          placeholder="Enter Front-end Source code link"
                                          type="text"
                                          onChange={(e) =>
                                            setBsc(e.target.value)
                                          }
                                          value={bsc}
                                          disabled={props.isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Back-end Deployed URL
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                          placeholder="Enter Front-end Deployed URL link"
                                          type="text"
                                          onChange={(e) =>
                                            setBdc(e.target.value)
                                          }
                                          // value="https://tranquil-hotteok-37da2f.netlify.app/"
                                          value={bdc}
                                          disabled={props.isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>{" "}
                                </div>
                              ) : null}

                              {props.taskSub7 ? (
                                <div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Back-end Source code
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09d_sourceCodeFrontEnd"
                                          placeholder="Enter Front-end Source code link"
                                          type="text"
                                          onChange={(e) =>
                                            setBsc(e.target.value)
                                          }
                                          value={bsc}
                                          disabled={props.isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="">
                                    <div class="form-group mt-2">
                                      <label
                                        for="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                        class="label-style mb-0"
                                      >
                                        Front-end Deployed URL
                                      </label>
                                      <div>
                                        <input
                                          class="formInputs"
                                          name="64520791fb6c93007615b09e_deployedUrlFrontEnd"
                                          placeholder="Enter Front-end Deployed URL link"
                                          type="text"
                                          onChange={(e) =>
                                            setFdc(e.target.value)
                                          }
                                          // value="https://tranquil-hotteok-37da2f.netlify.app/"
                                          value={fdc}
                                          disabled={props.isFormSubmitted}
                                        />
                                      </div>
                                    </div>
                                  </div>{" "}
                                </div>
                              ) : null}
                              <label
                                for="comments"
                                className="label-style mb-0"
                                // {...(props.taskSub0 ? { hidden: true } :{} )}
                              >
                                Comments
                              </label>
                              <div
                              // {...(props.taskSub0 ? { hidden: true } : {})}
                              >
                                <input
                                  className="formInputs"
                                  // name="comments"
                                  placeholder="leave your comments here"
                                  // onChange={(e) => setComment(e.target.value)}
                                  // value={comment}
                                  // disabled={props.isFormSubmitted}
                                  id="comments"
                                  name="comments"
                                  onChange={formik.handleChange}
                                  // value={formik.values.comments}
                                />
                              </div>
                              {formik.errors.comments ? <div>{formik.errors.comments}</div> : null}
                            </div>
                          </div>
                          <div class="d-flex justify-content-end"></div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-flex justify-content-end">
                <button
                  class="btn submit-btn mb-3"
                  type="submit"
                  disabled=""
                 
                  // onClick={handleSubmit}
                  // onClick={formik.handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>{" "}
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskPart;
