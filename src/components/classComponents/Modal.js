import React from "react";

const Modal = (props) => {
  return (
    <div class="">
      <div class="modal-backdrop fade show" bis_skin_checked="1"></div>
      <div
        class="modal fade WelcomeModal show"
        id="WelcomeModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{"display": "block"}}
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content modal-height radius">
            <div class="modal-heading-area px-4 py-2">
              <div class="d-flex justify-content-between">
                <span class="modal-heading">Recording Link</span>
                <span class="close m-4" style={{"cursor": "pointer"}} onClick={()=>props.setModel(false)}>
                  ×
                </span>
              </div>
            </div>
            <div class="row m-4">
              <div class="col">
                <div class="row">
                  <div class="col-4">Recording Link : </div>
                  <a
                    class=""
                    target="_blank"
                    rel="noreferrer"
                    href="https://us06web.zoom.us/rec/share/EAFSx_SgzRjhs8Sfer0IePMyFzbtcQXqcrs5j-ZU9oY8LAj7et5VoQP2ZmPycbVq.GY5H7Mrxd7Oet4wL"
                  >
                    <div class="col word-wrap">
                      https://us06web.zoom.us/rec/share/EAFSx_rs5j-ZU9oY8LAj7et5VoQP2ZmPycbVq.GY5H7Mrxd7Oet4
                    </div>
                  </a>
                </div>
                <div class="row">
                  <div class="col-3">Passcode : </div>
                  <div class="col">no passcode</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
