import React, { useState ,useEffect} from "react";
import axios from "axios";

const Profile = () => {
    const [user,setUser] = useState([]);
    useEffect(() => {
        axios
          .get("http://localhost:8800/api/users/66545c1d16e399c5fd3c4fbc")
          .then((response) => {
            console.log(response.data);
            setUser(response.data); // This should log the data from the Capstone collection
          })
          .catch((error) => {
            console.error(error); // This will log any errors that occur
          });
      }, []);
      console.log(user)
  return (
    // <div>Profile</div>
    <div class="Body_body__box__Y49P-">
      <div class="container-fluid col-11">
        <div class="profileContainer">
          <form>
            <div class="detailCards">
              <div class="personalDetails">
                <label for="name" class="label-style mb-0">
                  Name
                </label>
                <div>
                  <input
                    class="formInputs"
                    name="name"
                    placeholder="Example : John Doe"
                    type="text"
                    value={user.username}
                  />
                </div>
                <label for="mobile" class="label-style mb-0">
                  Phone
                </label>
                <div>
                  <input
                    class="formInputs"
                    name="mobile"
                    placeholder="Example : 9876543210"
                    type="text"
                    value={user.phone}
                  />
                </div>
                <label for="email" class="label-style mb-0">
                  Email
                </label>
                <div>
                  <input
                    class="formInputs"
                    name="email"
                    placeholder="Example : john.doe@email.com"
                    type="text"
                    disabled=""
                    value={user.email}
                  />
                </div>
                <label for="username" class="label-style mb-0">
                  UserName
                </label>
                <div>
                  <input
                    class="formInputs"
                    name="username"
                    placeholder="username"
                    type="text"
                    value=""
                  />
                </div>
                <label for="batch" class="label-style mb-0">
                  Batch
                </label>
                <div>
                  <input
                    class="formInputs"
                    name="batch"
                    disabled=""
                    value={user.batch}
                  />
                </div>
              </div>
            </div>
            <div class="detailCards">
              <div class="personalDetails">
                <label for="qualification" class="label-style mb-0">
                  Qualification
                </label>
                <div>
                  <input
                    class="formInputs"
                    name="qualification"
                    placeholder="Example : BE Mechanical Engineering"
                    type="text"
                    value=""
                  />
                </div>
                <label for="yearOfPassing" class="label-style mb-0">
                  Year of Passing
                </label>
                <div>
                  <input
                    class="formInputs"
                    name="yearOfPassing"
                    placeholder="Example : 2020"
                    type="text"
                    value="0"
                  />
                </div>
                <label for="yearsOfExperience" class="label-style mb-0">
                  Years of Experience
                </label>
                <div>
                  <input
                    class="formInputs"
                    name="yearsOfExperience"
                    placeholder="Example : 2"
                    type="text"
                    value="0"
                  />
                </div>
                <label for="noticePeriod" class="label-style mb-0">
                  Notice Period
                </label>
                <div>
                  <input
                    class="formInputs"
                    name="noticePeriod"
                    placeholder="in days"
                    type="text"
                    value=""
                  />
                </div>
              </div>
            </div>
            <div class="detailCards">
              <div class="personalDetails">
                <label for="githubUrl" class="label-style mb-0">
                  Github URL
                </label>
                <div>
                  <input
                    class="formInputs"
                    name="githubUrl"
                    placeholder="Example : github.com/<Your-Username>"
                    type="text"
                    value=""
                  />
                </div>
                <label for="portfolioUrl" class="label-style mb-0">
                  Portfolio URL
                </label>
                <div>
                  <input
                    class="formInputs"
                    name="portfolioUrl"
                    placeholder="Example : yourSite.com"
                    type="text"
                    value=""
                  />
                </div>
                <label for="resumeUrl" class="label-style mb-0">
                  Resume URL
                </label>
                <div>
                  <input
                    class="formInputs"
                    name="resumeUrl"
                    placeholder="Example : docs.google.com/yourResumeParams"
                    type="text"
                    value=""
                  />
                </div>
              </div>
              <div class="label-style mb-0">
                <p class="portfolioWarning">
                  *Username or Portfolio not yet created
                </p>
              </div>
            </div>
            <div class="saveBtnCard">
              <div class="saveBtnGrid">
                <button
                  class="saveBtn btn btn-primary"
                  disabled=""
                  type="submit"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
