import React from "react";

const ss = () => {
  return (
    // <div>
    //    <div class="sidebar-container">
    //     <div class="area"></div>
    //     <nav class="main-menu">
    //       <ul>
    //         <li class="logo-fixed">
    //           <div
    //             class="row d-flex align-items-center"
    //             style={{ width: 'fit-content', marginLeft: 8 }}
    //           >
    //             <div class="sc-gueYoa cGRkVi">
    //               <svg
    //                 //// xmlns="http://www.w3.org/2000/svg"
    //                 //// xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                 width="40"
    //                 height="34"
    //                 viewBox="0 0 40 34"
    //                 fill="none"
    //                 class="injected-svg"
    //                 data-src="/Icons/Sidebar_Icons/zen.svg"
    //               >
    //                 <rect
    //                   width="40"
    //                   height="33.75"
    //                   fill="url(#pattern0-1)"
    //                 ></rect>
    //                 <defs>
    //                   <pattern
    //                     id="pattern0-1"
    //                     patternContentUnits="objectBoundingBox"
    //                     width="1"
    //                     height="1"
    //                   >
    //                     <use
    //                      // xlink:href="#image0"
    //                       transform="translate(-0.00625) scale(0.00330882 0.00392157)"
    //                     ></use>
    //                   </pattern>
    //                   <image
    //                     id="image0"
    //                     width="306"
    //                     height="255"
    //                    // xlink:href="data:image/png;base64,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"
    //                   ></image>
    //                 </defs>
    //               </svg>
    //             </div>
    //             <h6 class="ml-3 d-inline-block mt-3 font-weight-bold">
    //               Student
    //             </h6>
    //           </div>
    //         </li>
    //         <div class="list-scroll py-3 active-area active-left-bar">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="20"
    //                     height="17"
    //                     viewBox="0 0 20 17"
    //                     fill="none"
    //                     class="injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/class.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M17.745 0C18.3417 0 18.914 0.23705 19.336 0.65901C19.7579 1.08097 19.995 1.65326 19.995 2.25V13.755C19.995 14.3517 19.7579 14.924 19.336 15.346C18.914 15.7679 18.3417 16.005 17.745 16.005H2.25C1.95453 16.005 1.66194 15.9468 1.38896 15.8337C1.11598 15.7207 0.86794 15.5549 0.65901 15.346C0.45008 15.1371 0.28434 14.889 0.17127 14.616C0.0581999 14.3431 0 14.0505 0 13.755V2.25C0 1.65326 0.23705 1.08097 0.65901 0.65901C1.08097 0.23705 1.65326 0 2.25 0H17.745ZM17.745 1.5H2.25C2.05109 1.5 1.86032 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V13.755C1.5 14.169 1.836 14.505 2.25 14.505L4.999 14.504L5 11.75C5.00002 11.3108 5.16517 10.8877 5.46268 10.5646C5.76019 10.2415 6.1683 10.0421 6.606 10.006L6.75 10H13.245C13.6843 10 14.1076 10.1653 14.4307 10.463C14.7538 10.7608 14.9531 11.1691 14.989 11.607L14.995 11.75L14.994 14.504H17.745C17.9439 14.504 18.1347 14.425 18.2753 14.2843C18.416 14.1437 18.495 13.9529 18.495 13.754V2.25C18.495 2.05109 18.416 1.86032 18.2753 1.71967C18.1347 1.57902 17.9439 1.5 17.745 1.5ZM10 3C10.7956 3 11.5587 3.31607 12.1213 3.87868C12.6839 4.44129 13 5.20435 13 6C13 6.7956 12.6839 7.5587 12.1213 8.1213C11.5587 8.6839 10.7956 9 10 9C9.2044 9 8.4413 8.6839 7.87868 8.1213C7.31607 7.5587 7 6.7956 7 6C7 5.20435 7.31607 4.44129 7.87868 3.87868C8.4413 3.31607 9.2044 3 10 3Z"
    //                       fill="#93A4B7"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Class</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     class="icon injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/dashboard.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M17.75 3C18.612 3 19.4386 3.34241 20.0481 3.9519C20.6576 4.5614 21 5.38805 21 6.25V17.75C21 18.612 20.6576 19.4386 20.0481 20.0481C19.4386 20.6576 18.612 21 17.75 21H6.25C5.38805 21 4.5614 20.6576 3.9519 20.0481C3.34241 19.4386 3 18.612 3 17.75V9.372C3.33001 9.48837 3.68262 9.52617 4.0298 9.48239C4.37697 9.4386 4.70916 9.31444 4.99994 9.11978C5.29073 8.92511 5.5321 8.66531 5.70488 8.36101C5.87765 8.05671 5.97707 7.71631 5.99524 7.36685C6.0134 7.01739 5.9498 6.66851 5.8095 6.34794C5.6692 6.02737 5.45606 5.74395 5.18702 5.52018C4.91798 5.29642 4.60046 5.1385 4.25969 5.05896C3.91892 4.97942 3.5643 4.98046 3.224 5.062C3.463 4.45418 3.87947 3.9324 4.4192 3.56462C4.95892 3.19684 5.59688 3.00009 6.25 3H17.75ZM13.246 13.003H8.748L8.646 13.01C8.46649 13.0347 8.30199 13.1236 8.18291 13.2601C8.06383 13.3967 7.99823 13.5718 7.99823 13.753C7.99823 13.9342 8.06383 14.1093 8.18291 14.2459C8.30199 14.3824 8.46649 14.4713 8.646 14.496L8.748 14.503H13.246L13.348 14.496C13.5362 14.4701 13.7076 14.3737 13.8276 14.2263C13.9475 14.0789 14.007 13.8915 13.994 13.7019C13.9811 13.5123 13.8966 13.3347 13.7578 13.205C13.6189 13.0752 13.436 13.0031 13.246 13.003V13.003ZM15.252 9.496H8.748L8.646 9.503C8.46649 9.5277 8.30199 9.61655 8.18291 9.75314C8.06383 9.88972 7.99823 10.0648 7.99823 10.246C7.99823 10.4272 8.06383 10.6023 8.18291 10.7389C8.30199 10.8754 8.46649 10.9643 8.646 10.989L8.748 10.996H15.252L15.354 10.989C15.5423 10.9631 15.7137 10.8667 15.8336 10.7193C15.9535 10.5719 16.013 10.3845 16 10.1949C15.9871 10.0053 15.9026 9.8277 15.7638 9.69797C15.6249 9.56824 15.442 9.49606 15.252 9.496V9.496ZM3.75 6C4.08152 6 4.39946 6.1317 4.63388 6.36612C4.8683 6.60054 5 6.91848 5 7.25C5 7.58152 4.8683 7.89946 4.63388 8.13388C4.39946 8.3683 4.08152 8.5 3.75 8.5C3.41848 8.5 3.10054 8.3683 2.86612 8.13388C2.6317 7.89946 2.5 7.58152 2.5 7.25C2.5 6.91848 2.6317 6.60054 2.86612 6.36612C3.10054 6.1317 3.41848 6 3.75 6V6Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Dashboard</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     class="injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/tasks.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M5.25 3C4.65326 3 4.08097 3.23705 3.65901 3.65901C3.23705 4.08097 3 4.65326 3 5.25V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75V5.25C21 4.65326 20.7629 4.08097 20.341 3.65901C19.919 3.23705 19.3467 3 18.75 3H5.25ZM10.78 8.78L8.78 10.78C8.63937 10.9205 8.44875 10.9993 8.25 10.9993C8.05125 10.9993 7.86063 10.9205 7.72 10.78L6.72 9.78C6.58752 9.63782 6.5154 9.44978 6.51883 9.25548C6.52225 9.06118 6.60097 8.87579 6.73838 8.73838C6.87579 8.60097 7.06118 8.52225 7.25548 8.51882C7.44978 8.5154 7.63783 8.58752 7.78 8.72L8.25 9.19L9.72 7.72C9.78866 7.64631 9.87146 7.58721 9.96346 7.54622C10.0555 7.50523 10.1548 7.48319 10.2555 7.48141C10.3562 7.47963 10.4562 7.49816 10.5496 7.53588C10.643 7.5736 10.7278 7.62974 10.799 7.70096C10.8703 7.77218 10.9264 7.85701 10.9641 7.9504C11.0018 8.04379 11.0204 8.14382 11.0186 8.24452C11.0168 8.34522 10.9948 8.44454 10.9538 8.53654C10.9128 8.62854 10.8537 8.71134 10.78 8.78V8.78ZM16.75 8.5C16.9489 8.5 17.1397 8.57902 17.2803 8.71967C17.421 8.86032 17.5 9.05109 17.5 9.25C17.5 9.44891 17.421 9.63968 17.2803 9.78033C17.1397 9.92098 16.9489 10 16.75 10H13.25C13.0511 10 12.8603 9.92098 12.7197 9.78033C12.579 9.63968 12.5 9.44891 12.5 9.25C12.5 9.05109 12.579 8.86032 12.7197 8.71967C12.8603 8.57902 13.0511 8.5 13.25 8.5H16.75ZM12.5 14.75C12.5 14.5511 12.579 14.3603 12.7197 14.2197C12.8603 14.079 13.0511 14 13.25 14H16.75C16.9489 14 17.1397 14.079 17.2803 14.2197C17.421 14.3603 17.5 14.5511 17.5 14.75C17.5 14.9489 17.421 15.1397 17.2803 15.2803C17.1397 15.421 16.9489 15.5 16.75 15.5H13.25C13.0511 15.5 12.8603 15.421 12.7197 15.2803C12.579 15.1397 12.5 14.9489 12.5 14.75V14.75ZM10.78 13.22C10.9205 13.3606 10.9993 13.5512 10.9993 13.75C10.9993 13.9488 10.9205 14.1394 10.78 14.28L8.78 16.28C8.63937 16.4205 8.44875 16.4993 8.25 16.4993C8.05125 16.4993 7.86063 16.4205 7.72 16.28L6.72 15.28C6.64631 15.2113 6.58721 15.1285 6.54622 15.0365C6.50523 14.9445 6.48319 14.8452 6.48141 14.7445C6.47963 14.6438 6.49816 14.5438 6.53588 14.4504C6.5736 14.357 6.62974 14.2722 6.70096 14.201C6.77218 14.1297 6.85701 14.0736 6.9504 14.0359C7.04379 13.9982 7.14382 13.9796 7.24452 13.9814C7.34523 13.9832 7.44454 14.0052 7.53654 14.0462C7.62854 14.0872 7.71134 14.1463 7.78 14.22L8.25 14.69L9.72 13.22C9.86063 13.0795 10.0512 13.0007 10.25 13.0007C10.4488 13.0007 10.6394 13.0795 10.78 13.22V13.22Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Tasks</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     class="injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/webCode.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M5.25 3C4.65326 3 4.08097 3.23705 3.65901 3.65901C3.23705 4.08097 3 4.65326 3 5.25V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75V5.25C21 4.65326 20.7629 4.08097 20.341 3.65901C19.919 3.23705 19.3467 3 18.75 3H5.25ZM10.78 8.78L8.78 10.78C8.63937 10.9205 8.44875 10.9993 8.25 10.9993C8.05125 10.9993 7.86063 10.9205 7.72 10.78L6.72 9.78C6.58752 9.63782 6.5154 9.44978 6.51883 9.25548C6.52225 9.06118 6.60097 8.87579 6.73838 8.73838C6.87579 8.60097 7.06118 8.52225 7.25548 8.51882C7.44978 8.5154 7.63783 8.58752 7.78 8.72L8.25 9.19L9.72 7.72C9.78866 7.64631 9.87146 7.58721 9.96346 7.54622C10.0555 7.50523 10.1548 7.48319 10.2555 7.48141C10.3562 7.47963 10.4562 7.49816 10.5496 7.53588C10.643 7.5736 10.7278 7.62974 10.799 7.70096C10.8703 7.77218 10.9264 7.85701 10.9641 7.9504C11.0018 8.04379 11.0204 8.14382 11.0186 8.24452C11.0168 8.34522 10.9948 8.44454 10.9538 8.53654C10.9128 8.62854 10.8537 8.71134 10.78 8.78V8.78ZM16.75 8.5C16.9489 8.5 17.1397 8.57902 17.2803 8.71967C17.421 8.86032 17.5 9.05109 17.5 9.25C17.5 9.44891 17.421 9.63968 17.2803 9.78033C17.1397 9.92098 16.9489 10 16.75 10H13.25C13.0511 10 12.8603 9.92098 12.7197 9.78033C12.579 9.63968 12.5 9.44891 12.5 9.25C12.5 9.05109 12.579 8.86032 12.7197 8.71967C12.8603 8.57902 13.0511 8.5 13.25 8.5H16.75ZM12.5 14.75C12.5 14.5511 12.579 14.3603 12.7197 14.2197C12.8603 14.079 13.0511 14 13.25 14H16.75C16.9489 14 17.1397 14.079 17.2803 14.2197C17.421 14.3603 17.5 14.5511 17.5 14.75C17.5 14.9489 17.421 15.1397 17.2803 15.2803C17.1397 15.421 16.9489 15.5 16.75 15.5H13.25C13.0511 15.5 12.8603 15.421 12.7197 15.2803C12.579 15.1397 12.5 14.9489 12.5 14.75V14.75ZM10.78 13.22C10.9205 13.3606 10.9993 13.5512 10.9993 13.75C10.9993 13.9488 10.9205 14.1394 10.78 14.28L8.78 16.28C8.63937 16.4205 8.44875 16.4993 8.25 16.4993C8.05125 16.4993 7.86063 16.4205 7.72 16.28L6.72 15.28C6.64631 15.2113 6.58721 15.1285 6.54622 15.0365C6.50523 14.9445 6.48319 14.8452 6.48141 14.7445C6.47963 14.6438 6.49816 14.5438 6.53588 14.4504C6.5736 14.357 6.62974 14.2722 6.70096 14.201C6.77218 14.1297 6.85701 14.0736 6.9504 14.0359C7.04379 13.9982 7.14382 13.9796 7.24452 13.9814C7.34523 13.9832 7.44454 14.0052 7.53654 14.0462C7.62854 14.0872 7.71134 14.1463 7.78 14.22L8.25 14.69L9.72 13.22C9.86063 13.0795 10.0512 13.0007 10.25 13.0007C10.4488 13.0007 10.6394 13.0795 10.78 13.22V13.22Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Webcode</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     class="injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/capstone.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M5.25 3C4.65326 3 4.08097 3.23705 3.65901 3.65901C3.23705 4.08097 3 4.65326 3 5.25V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75V5.25C21 4.65326 20.7629 4.08097 20.341 3.65901C19.919 3.23705 19.3467 3 18.75 3H5.25ZM10.78 8.78L8.78 10.78C8.63937 10.9205 8.44875 10.9993 8.25 10.9993C8.05125 10.9993 7.86063 10.9205 7.72 10.78L6.72 9.78C6.58752 9.63782 6.5154 9.44978 6.51883 9.25548C6.52225 9.06118 6.60097 8.87579 6.73838 8.73838C6.87579 8.60097 7.06118 8.52225 7.25548 8.51882C7.44978 8.5154 7.63783 8.58752 7.78 8.72L8.25 9.19L9.72 7.72C9.78866 7.64631 9.87146 7.58721 9.96346 7.54622C10.0555 7.50523 10.1548 7.48319 10.2555 7.48141C10.3562 7.47963 10.4562 7.49816 10.5496 7.53588C10.643 7.5736 10.7278 7.62974 10.799 7.70096C10.8703 7.77218 10.9264 7.85701 10.9641 7.9504C11.0018 8.04379 11.0204 8.14382 11.0186 8.24452C11.0168 8.34522 10.9948 8.44454 10.9538 8.53654C10.9128 8.62854 10.8537 8.71134 10.78 8.78V8.78ZM16.75 8.5C16.9489 8.5 17.1397 8.57902 17.2803 8.71967C17.421 8.86032 17.5 9.05109 17.5 9.25C17.5 9.44891 17.421 9.63968 17.2803 9.78033C17.1397 9.92098 16.9489 10 16.75 10H13.25C13.0511 10 12.8603 9.92098 12.7197 9.78033C12.579 9.63968 12.5 9.44891 12.5 9.25C12.5 9.05109 12.579 8.86032 12.7197 8.71967C12.8603 8.57902 13.0511 8.5 13.25 8.5H16.75ZM12.5 14.75C12.5 14.5511 12.579 14.3603 12.7197 14.2197C12.8603 14.079 13.0511 14 13.25 14H16.75C16.9489 14 17.1397 14.079 17.2803 14.2197C17.421 14.3603 17.5 14.5511 17.5 14.75C17.5 14.9489 17.421 15.1397 17.2803 15.2803C17.1397 15.421 16.9489 15.5 16.75 15.5H13.25C13.0511 15.5 12.8603 15.421 12.7197 15.2803C12.579 15.1397 12.5 14.9489 12.5 14.75V14.75ZM10.78 13.22C10.9205 13.3606 10.9993 13.5512 10.9993 13.75C10.9993 13.9488 10.9205 14.1394 10.78 14.28L8.78 16.28C8.63937 16.4205 8.44875 16.4993 8.25 16.4993C8.05125 16.4993 7.86063 16.4205 7.72 16.28L6.72 15.28C6.64631 15.2113 6.58721 15.1285 6.54622 15.0365C6.50523 14.9445 6.48319 14.8452 6.48141 14.7445C6.47963 14.6438 6.49816 14.5438 6.53588 14.4504C6.5736 14.357 6.62974 14.2722 6.70096 14.201C6.77218 14.1297 6.85701 14.0736 6.9504 14.0359C7.04379 13.9982 7.14382 13.9796 7.24452 13.9814C7.34523 13.9832 7.44454 14.0052 7.53654 14.0462C7.62854 14.0872 7.71134 14.1463 7.78 14.22L8.25 14.69L9.72 13.22C9.86063 13.0795 10.0512 13.0007 10.25 13.0007C10.4488 13.0007 10.6394 13.0795 10.78 13.22V13.22Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Capstone</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="20"
    //                     height="17"
    //                     viewBox="0 0 20 17"
    //                     fill="none"
    //                     class="injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/placement-sessions.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M17.745 0C18.3417 0 18.914 0.23705 19.336 0.65901C19.7579 1.08097 19.995 1.65326 19.995 2.25V13.755C19.995 14.3517 19.7579 14.924 19.336 15.346C18.914 15.7679 18.3417 16.005 17.745 16.005H2.25C1.95453 16.005 1.66194 15.9468 1.38896 15.8337C1.11598 15.7207 0.86794 15.5549 0.65901 15.346C0.45008 15.1371 0.28434 14.889 0.17127 14.616C0.0581999 14.3431 0 14.0505 0 13.755V2.25C0 1.65326 0.23705 1.08097 0.65901 0.65901C1.08097 0.23705 1.65326 0 2.25 0H17.745ZM17.745 1.5H2.25C2.05109 1.5 1.86032 1.57902 1.71967 1.71967C1.57902 1.86032 1.5 2.05109 1.5 2.25V13.755C1.5 14.169 1.836 14.505 2.25 14.505L4.999 14.504L5 11.75C5.00002 11.3108 5.16517 10.8877 5.46268 10.5646C5.76019 10.2415 6.1683 10.0421 6.606 10.006L6.75 10H13.245C13.6843 10 14.1076 10.1653 14.4307 10.463C14.7538 10.7608 14.9531 11.1691 14.989 11.607L14.995 11.75L14.994 14.504H17.745C17.9439 14.504 18.1347 14.425 18.2753 14.2843C18.416 14.1437 18.495 13.9529 18.495 13.754V2.25C18.495 2.05109 18.416 1.86032 18.2753 1.71967C18.1347 1.57902 17.9439 1.5 17.745 1.5ZM10 3C10.7956 3 11.5587 3.31607 12.1213 3.87868C12.6839 4.44129 13 5.20435 13 6C13 6.7956 12.6839 7.5587 12.1213 8.1213C11.5587 8.6839 10.7956 9 10 9C9.2044 9 8.4413 8.6839 7.87868 8.1213C7.31607 7.5587 7 6.7956 7 6C7 5.20435 7.31607 4.44129 7.87868 3.87868C8.4413 3.31607 9.2044 3 10 3Z"
    //                       fill="#93A4B7"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Placement-sessions</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     class="injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/queries.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M6.5 12C7.95869 12 9.35764 12.5795 10.3891 13.6109C11.4205 14.6424 12 16.0413 12 17.5C12 18.9587 11.4205 20.3576 10.3891 21.3891C9.35764 22.4205 7.95869 23 6.5 23C5.04131 23 3.64236 22.4205 2.61091 21.3891C1.57946 20.3576 1 18.9587 1 17.5C1 16.0413 1.57946 14.6424 2.61091 13.6109C3.64236 12.5795 5.04131 12 6.5 12V12ZM16.749 2C17.3457 2 17.918 2.23705 18.34 2.65901C18.7619 3.08097 18.999 3.65326 18.999 4.25V19.75C18.999 20.3467 18.7619 20.919 18.34 21.341C17.918 21.7629 17.3457 22 16.749 22H11.189C12.2237 20.9226 12.8557 19.5217 12.9788 18.033C13.1018 16.5443 12.7083 15.0587 11.8645 13.826C11.0207 12.5934 9.77814 11.689 8.3458 11.265C6.91346 10.841 5.37879 10.9233 4 11.498V4.251C3.99987 3.95536 4.058 3.66259 4.17108 3.38942C4.28416 3.11626 4.44996 2.86806 4.65901 2.65901C4.86806 2.44996 5.11626 2.28416 5.38942 2.17108C5.66259 2.058 5.95536 1.99987 6.251 2H16.75H16.749ZM6.5 19.88C6.41589 19.8766 6.33196 19.8903 6.25326 19.9202C6.17455 19.95 6.10269 19.9955 6.04199 20.0538C5.98129 20.1121 5.93299 20.1821 5.9 20.2596C5.86701 20.337 5.85001 20.4203 5.85001 20.5045C5.85001 20.5887 5.86701 20.672 5.9 20.7494C5.93299 20.8269 5.98129 20.8969 6.04199 20.9552C6.10269 21.0135 6.17455 21.059 6.25326 21.0888C6.33196 21.1187 6.41589 21.1324 6.5 21.129C6.6613 21.1225 6.81385 21.0539 6.9257 20.9375C7.03754 20.8211 7.10001 20.6659 7.10001 20.5045C7.10001 20.3431 7.03754 20.1879 6.9257 20.0715C6.81385 19.9551 6.6613 19.8865 6.5 19.88V19.88ZM6.5 14.003C5.452 14.003 4.636 14.82 4.647 15.957C4.64833 16.0896 4.70228 16.2163 4.79698 16.3091C4.89169 16.4019 5.01939 16.4533 5.152 16.452C5.28461 16.4507 5.41126 16.3967 5.50409 16.302C5.59692 16.2073 5.64833 16.0796 5.647 15.947C5.641 15.369 6.007 15.003 6.5 15.003C6.972 15.003 7.353 15.395 7.353 15.953C7.353 16.177 7.278 16.343 7.036 16.63L6.936 16.743L6.671 17.033C6.187 17.575 6 17.925 6 18.501C6 18.6336 6.05268 18.7608 6.14645 18.8546C6.24021 18.9483 6.36739 19.001 6.5 19.001C6.63261 19.001 6.75979 18.9483 6.85355 18.8546C6.94732 18.7608 7 18.6336 7 18.501C7 18.268 7.076 18.098 7.324 17.806L7.424 17.691L7.69 17.401C8.168 16.866 8.353 16.519 8.353 15.953C8.353 14.849 7.531 14.003 6.5 14.003ZM20.75 15.002C20.9312 15.002 21.1063 15.0676 21.2429 15.1868C21.3795 15.3059 21.4684 15.4704 21.493 15.65L21.5 15.752V17.25C21.5 17.4312 21.4344 17.6063 21.3152 17.7429C21.1961 17.8795 21.0316 17.9684 20.852 17.993L20.75 18H20V15.002H20.75V15.002ZM20.75 11.002C20.9312 11.002 21.1063 11.0676 21.2429 11.1868C21.3795 11.3059 21.4684 11.4704 21.493 11.65L21.5 11.752V13.25C21.5 13.4312 21.4344 13.6063 21.3152 13.7429C21.1961 13.8795 21.0316 13.9684 20.852 13.993L20.75 14H20V11.002H20.75V11.002ZM20.75 7.002C20.9312 7.00201 21.1063 7.06764 21.2429 7.18677C21.3795 7.30589 21.4684 7.47045 21.493 7.65L21.5 7.752V9.25C21.5 9.43124 21.4344 9.60634 21.3152 9.74293C21.1961 9.87952 21.0316 9.96835 20.852 9.993L20.75 10H20V7.002H20.75V7.002ZM14.748 5.497H8.252C8.07076 5.49701 7.89566 5.56264 7.75907 5.68177C7.62248 5.80089 7.53365 5.96545 7.509 6.145L7.502 6.247V7.751C7.502 8.131 7.785 8.444 8.151 8.494L8.252 8.501H14.748C14.9292 8.50099 15.1043 8.43536 15.2409 8.31623C15.3775 8.19711 15.4664 8.03255 15.491 7.853L15.498 7.751V6.247C15.498 6.04809 15.419 5.85732 15.2783 5.71667C15.1377 5.57602 14.9469 5.497 14.748 5.497V5.497Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Queries</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     class="injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/requirements.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M8.25 10.002C8.05109 10.002 7.86032 10.081 7.71967 10.2217C7.57902 10.3623 7.5 10.5531 7.5 10.752C7.5 10.9509 7.57902 11.1417 7.71967 11.2823C7.86032 11.423 8.05109 11.502 8.25 11.502C8.44891 11.502 8.63968 11.423 8.78033 11.2823C8.92098 11.1417 9 10.9509 9 10.752C9 10.5531 8.92098 10.3623 8.78033 10.2217C8.63968 10.081 8.44891 10.002 8.25 10.002Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                     <path
    //                       d="M7.5 16.25C7.5 16.0511 7.57902 15.8603 7.71967 15.7197C7.86032 15.579 8.05109 15.5 8.25 15.5C8.44891 15.5 8.63968 15.579 8.78033 15.7197C8.92098 15.8603 9 16.0511 9 16.25C9 16.4489 8.92098 16.6397 8.78033 16.7803C8.63968 16.921 8.44891 17 8.25 17C8.05109 17 7.86032 16.921 7.71967 16.7803C7.57902 16.6397 7.5 16.4489 7.5 16.25Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                     <path
    //                       d="M3 5.75C3 5.02065 3.28973 4.32118 3.80546 3.80546C4.32118 3.28973 5.02065 3 5.75 3H18.25C18.9793 3 19.6788 3.28973 20.1945 3.80546C20.7103 4.32118 21 5.02065 21 5.75V12.022C20.0862 11.4365 19.0397 11.0905 17.957 11.016C18 10.9024 18.0147 10.7801 17.9999 10.6596C17.985 10.5391 17.9412 10.424 17.872 10.3242C17.8028 10.2245 17.7104 10.143 17.6028 10.0869C17.4951 10.0307 17.3754 10.0016 17.254 10.002H12.25C12.0511 10.002 11.8603 10.081 11.7197 10.2217C11.579 10.3623 11.5 10.5531 11.5 10.752C11.5 10.9509 11.579 11.1417 11.7197 11.2823C11.8603 11.423 12.0511 11.502 12.25 11.502H14.992C14.1173 11.8679 13.3331 12.4206 12.6946 13.1215C12.056 13.8224 11.5785 14.6544 11.2954 15.5594C11.0123 16.4643 10.9306 17.4202 11.056 18.36C11.1813 19.2998 11.5107 20.2009 12.021 21H5.75C5.02065 21 4.32118 20.7103 3.80546 20.1945C3.28973 19.6788 3 18.9793 3 18.25V5.75ZM6 10.752C6 11.0475 6.0582 11.3401 6.17127 11.613C6.28434 11.886 6.45008 12.1341 6.65901 12.343C6.86794 12.5519 7.11598 12.7177 7.38896 12.8307C7.66194 12.9438 7.95453 13.002 8.25 13.002C8.54547 13.002 8.83806 12.9438 9.11104 12.8307C9.38402 12.7177 9.63206 12.5519 9.84099 12.343C10.0499 12.1341 10.2157 11.886 10.3287 11.613C10.4418 11.3401 10.5 11.0475 10.5 10.752C10.5 10.1553 10.2629 9.58297 9.84099 9.16101C9.41903 8.73905 8.84674 8.502 8.25 8.502C7.65326 8.502 7.08097 8.73905 6.65901 9.16101C6.23705 9.58297 6 10.1553 6 10.752V10.752ZM8.25 14C7.65326 14 7.08097 14.2371 6.65901 14.659C6.23705 15.081 6 15.6533 6 16.25C6 16.8467 6.23705 17.419 6.65901 17.841C7.08097 18.2629 7.65326 18.5 8.25 18.5C8.84674 18.5 9.41903 18.2629 9.84099 17.841C10.2629 17.419 10.5 16.8467 10.5 16.25C10.5 15.6533 10.2629 15.081 9.84099 14.659C9.41903 14.2371 8.84674 14 8.25 14ZM6.755 7.5H17.255C17.4539 7.5 17.6447 7.42098 17.7853 7.28033C17.926 7.13968 18.005 6.94891 18.005 6.75C18.005 6.55109 17.926 6.36032 17.7853 6.21967C17.6447 6.07902 17.4539 6 17.255 6H6.755C6.55609 6 6.36532 6.07902 6.22467 6.21967C6.08402 6.36032 6.005 6.55109 6.005 6.75C6.005 6.94891 6.08402 7.13968 6.22467 7.28033C6.36532 7.42098 6.55609 7.5 6.755 7.5V7.5Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                     <path
    //                       d="M23 17.5C23 16.0413 22.4205 14.6424 21.3891 13.6109C20.3576 12.5795 18.9587 12 17.5 12C16.0413 12 14.6424 12.5795 13.6109 13.6109C12.5795 14.6424 12 16.0413 12 17.5C12 18.9587 12.5795 20.3576 13.6109 21.3891C14.6424 22.4205 16.0413 23 17.5 23C18.9587 23 20.3576 22.4205 21.3891 21.3891C22.4205 20.3576 23 18.9587 23 17.5ZM18.001 20.503C18.001 20.6356 17.9483 20.7628 17.8546 20.8566C17.7608 20.9503 17.6336 21.003 17.501 21.003C17.3684 21.003 17.2412 20.9503 17.1474 20.8566C17.0537 20.7628 17.001 20.6356 17.001 20.503V18H14.496C14.3634 18 14.2362 17.9473 14.1424 17.8536C14.0487 17.7598 13.996 17.6326 13.996 17.5C13.996 17.3674 14.0487 17.2402 14.1424 17.1464C14.2362 17.0527 14.3634 17 14.496 17H17V14.5C17 14.3674 17.0527 14.2402 17.1464 14.1464C17.2402 14.0527 17.3674 14 17.5 14C17.6326 14 17.7598 14.0527 17.8536 14.1464C17.9473 14.2402 18 14.3674 18 14.5V17H20.503C20.6356 17 20.7628 17.0527 20.8566 17.1464C20.9503 17.2402 21.003 17.3674 21.003 17.5C21.003 17.6326 20.9503 17.7598 20.8566 17.8536C20.7628 17.9473 20.6356 18 20.503 18H18.001V20.503Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Requirements</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     class="injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/portfolio-submission.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M5.25 3C4.65326 3 4.08097 3.23705 3.65901 3.65901C3.23705 4.08097 3 4.65326 3 5.25V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75V5.25C21 4.65326 20.7629 4.08097 20.341 3.65901C19.919 3.23705 19.3467 3 18.75 3H5.25ZM10.78 8.78L8.78 10.78C8.63937 10.9205 8.44875 10.9993 8.25 10.9993C8.05125 10.9993 7.86063 10.9205 7.72 10.78L6.72 9.78C6.58752 9.63782 6.5154 9.44978 6.51883 9.25548C6.52225 9.06118 6.60097 8.87579 6.73838 8.73838C6.87579 8.60097 7.06118 8.52225 7.25548 8.51882C7.44978 8.5154 7.63783 8.58752 7.78 8.72L8.25 9.19L9.72 7.72C9.78866 7.64631 9.87146 7.58721 9.96346 7.54622C10.0555 7.50523 10.1548 7.48319 10.2555 7.48141C10.3562 7.47963 10.4562 7.49816 10.5496 7.53588C10.643 7.5736 10.7278 7.62974 10.799 7.70096C10.8703 7.77218 10.9264 7.85701 10.9641 7.9504C11.0018 8.04379 11.0204 8.14382 11.0186 8.24452C11.0168 8.34522 10.9948 8.44454 10.9538 8.53654C10.9128 8.62854 10.8537 8.71134 10.78 8.78V8.78ZM16.75 8.5C16.9489 8.5 17.1397 8.57902 17.2803 8.71967C17.421 8.86032 17.5 9.05109 17.5 9.25C17.5 9.44891 17.421 9.63968 17.2803 9.78033C17.1397 9.92098 16.9489 10 16.75 10H13.25C13.0511 10 12.8603 9.92098 12.7197 9.78033C12.579 9.63968 12.5 9.44891 12.5 9.25C12.5 9.05109 12.579 8.86032 12.7197 8.71967C12.8603 8.57902 13.0511 8.5 13.25 8.5H16.75ZM12.5 14.75C12.5 14.5511 12.579 14.3603 12.7197 14.2197C12.8603 14.079 13.0511 14 13.25 14H16.75C16.9489 14 17.1397 14.079 17.2803 14.2197C17.421 14.3603 17.5 14.5511 17.5 14.75C17.5 14.9489 17.421 15.1397 17.2803 15.2803C17.1397 15.421 16.9489 15.5 16.75 15.5H13.25C13.0511 15.5 12.8603 15.421 12.7197 15.2803C12.579 15.1397 12.5 14.9489 12.5 14.75V14.75ZM10.78 13.22C10.9205 13.3606 10.9993 13.5512 10.9993 13.75C10.9993 13.9488 10.9205 14.1394 10.78 14.28L8.78 16.28C8.63937 16.4205 8.44875 16.4993 8.25 16.4993C8.05125 16.4993 7.86063 16.4205 7.72 16.28L6.72 15.28C6.64631 15.2113 6.58721 15.1285 6.54622 15.0365C6.50523 14.9445 6.48319 14.8452 6.48141 14.7445C6.47963 14.6438 6.49816 14.5438 6.53588 14.4504C6.5736 14.357 6.62974 14.2722 6.70096 14.201C6.77218 14.1297 6.85701 14.0736 6.9504 14.0359C7.04379 13.9982 7.14382 13.9796 7.24452 13.9814C7.34523 13.9832 7.44454 14.0052 7.53654 14.0462C7.62854 14.0872 7.71134 14.1463 7.78 14.22L8.25 14.69L9.72 13.22C9.86063 13.0795 10.0512 13.0007 10.25 13.0007C10.4488 13.0007 10.6394 13.0795 10.78 13.22V13.22Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Portfolio-submission</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     class="injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/applications.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M16.25 2.00006C16.4311 2.00031 16.6059 2.06605 16.7423 2.18516C16.8787 2.30426 16.9674 2.46868 16.992 2.64806L17 2.75006V3.49906H17.749C18.3457 3.49906 18.918 3.73611 19.34 4.15807C19.7619 4.58003 19.999 5.15232 19.999 5.74906V10.0771C19.5227 9.7772 18.9851 9.58832 18.426 9.52441C17.8668 9.46051 17.3004 9.52321 16.7688 9.70788C16.2371 9.89256 15.7538 10.1945 15.3547 10.5912C14.9556 10.988 14.6508 11.4695 14.463 12.0001H7.248L7.146 12.0071C6.96649 12.0318 6.80199 12.1206 6.68291 12.2572C6.56383 12.3938 6.49823 12.5689 6.49823 12.7501C6.49823 12.9313 6.56383 13.1063 6.68291 13.2429C6.80199 13.3795 6.96649 13.4684 7.146 13.4931L7.248 13.5001H14.258C14.3208 14.4552 14.7474 15.35 15.45 16.0001H14.499C13.836 16.0001 13.2001 16.2635 12.7312 16.7323C12.2624 17.2011 11.999 17.837 11.999 18.5001V19.0001C11.999 20.1001 12.421 21.1521 13.172 22.0051H5.752C5.15526 22.0051 4.58297 21.768 4.16101 21.3461C3.73905 20.9241 3.502 20.3518 3.502 19.7551L3.5 5.75006C3.5 5.15332 3.73705 4.58103 4.15901 4.15907C4.58097 3.73711 5.15326 3.50006 5.75 3.50006L6.497 3.49906V2.75006C6.49505 2.55868 6.56634 2.3738 6.69627 2.23328C6.8262 2.09275 7.00493 2.00721 7.19588 1.99417C7.38682 1.98114 7.57552 2.04159 7.72334 2.16316C7.87116 2.28472 7.96692 2.45819 7.991 2.64806L7.998 2.75006V3.49906H11V2.75006C10.9981 2.55868 11.0693 2.3738 11.1993 2.23328C11.3292 2.09275 11.5079 2.00721 11.6989 1.99417C11.8898 1.98114 12.0785 2.04159 12.2263 2.16316C12.3742 2.28472 12.4699 2.45819 12.494 2.64806L12.501 2.75006V3.49906H15.499V2.75006C15.499 2.55115 15.578 2.36038 15.7187 2.21973C15.8593 2.07908 16.0501 2.00006 16.249 2.00006H16.25ZM11.247 16.0001H7.248L7.146 16.0071C6.96649 16.0318 6.80199 16.1206 6.68291 16.2572C6.56383 16.3938 6.49823 16.5689 6.49823 16.7501C6.49823 16.9313 6.56383 17.1063 6.68291 17.2429C6.80199 17.3795 6.96649 17.4684 7.146 17.4931L7.248 17.5001H11.247L11.349 17.4931C11.5285 17.4684 11.693 17.3795 11.8121 17.2429C11.9312 17.1063 11.9968 16.9313 11.9968 16.7501C11.9968 16.5689 11.9312 16.3938 11.8121 16.2572C11.693 16.1206 11.5285 16.0318 11.349 16.0071L11.247 16.0001ZM16.247 8.00006H7.249L7.147 8.00706C6.96749 8.03176 6.80299 8.12061 6.68391 8.2572C6.56483 8.39378 6.49923 8.56886 6.49923 8.75006C6.49923 8.93126 6.56483 9.10634 6.68391 9.24292C6.80299 9.37951 6.96749 9.46836 7.147 9.49306L7.249 9.50006H16.249L16.35 9.49306C16.5295 9.46836 16.694 9.37951 16.8131 9.24292C16.9322 9.10634 16.9978 8.93126 16.9978 8.75006C16.9978 8.56886 16.9322 8.39378 16.8131 8.2572C16.694 8.12061 16.5295 8.03176 16.35 8.00706L16.248 8.00006H16.247ZM18 10.5001C18.788 10.5001 19.498 10.8311 20 11.3611C20.4829 11.8713 20.7514 12.5475 20.75 13.2501C20.7512 13.9522 20.4827 14.6281 20 15.1381C19.6872 15.4693 19.2971 15.7176 18.8646 15.8608C18.4321 16.0039 17.9709 16.0374 17.5223 15.9582C17.0736 15.8789 16.6517 15.6895 16.2945 15.4069C15.9372 15.1243 15.6557 14.7573 15.4753 14.339C15.2949 13.9207 15.2213 13.4641 15.261 13.0103C15.3007 12.5565 15.4525 12.1196 15.7029 11.739C15.9532 11.3584 16.2941 11.0459 16.6951 10.8296C17.096 10.6134 17.5444 10.5001 18 10.5001V10.5001ZM13 18.5001C13 18.1022 13.158 17.7207 13.4393 17.4394C13.7206 17.1581 14.1022 17.0001 14.5 17.0001H21.5C21.8978 17.0001 22.2794 17.1581 22.5607 17.4394C22.842 17.7207 23 18.1022 23 18.5001V19.0001C23 20.9711 21.14 23.0001 18 23.0001C16.216 23.0001 14.846 22.3461 13.994 21.4201C13.346 20.7151 13 19.8521 13 19.0001V18.5001Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Applications</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     class="injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/interviewTasks.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M5.25 3C4.65326 3 4.08097 3.23705 3.65901 3.65901C3.23705 4.08097 3 4.65326 3 5.25V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75V5.25C21 4.65326 20.7629 4.08097 20.341 3.65901C19.919 3.23705 19.3467 3 18.75 3H5.25ZM10.78 8.78L8.78 10.78C8.63937 10.9205 8.44875 10.9993 8.25 10.9993C8.05125 10.9993 7.86063 10.9205 7.72 10.78L6.72 9.78C6.58752 9.63782 6.5154 9.44978 6.51883 9.25548C6.52225 9.06118 6.60097 8.87579 6.73838 8.73838C6.87579 8.60097 7.06118 8.52225 7.25548 8.51882C7.44978 8.5154 7.63783 8.58752 7.78 8.72L8.25 9.19L9.72 7.72C9.78866 7.64631 9.87146 7.58721 9.96346 7.54622C10.0555 7.50523 10.1548 7.48319 10.2555 7.48141C10.3562 7.47963 10.4562 7.49816 10.5496 7.53588C10.643 7.5736 10.7278 7.62974 10.799 7.70096C10.8703 7.77218 10.9264 7.85701 10.9641 7.9504C11.0018 8.04379 11.0204 8.14382 11.0186 8.24452C11.0168 8.34522 10.9948 8.44454 10.9538 8.53654C10.9128 8.62854 10.8537 8.71134 10.78 8.78V8.78ZM16.75 8.5C16.9489 8.5 17.1397 8.57902 17.2803 8.71967C17.421 8.86032 17.5 9.05109 17.5 9.25C17.5 9.44891 17.421 9.63968 17.2803 9.78033C17.1397 9.92098 16.9489 10 16.75 10H13.25C13.0511 10 12.8603 9.92098 12.7197 9.78033C12.579 9.63968 12.5 9.44891 12.5 9.25C12.5 9.05109 12.579 8.86032 12.7197 8.71967C12.8603 8.57902 13.0511 8.5 13.25 8.5H16.75ZM12.5 14.75C12.5 14.5511 12.579 14.3603 12.7197 14.2197C12.8603 14.079 13.0511 14 13.25 14H16.75C16.9489 14 17.1397 14.079 17.2803 14.2197C17.421 14.3603 17.5 14.5511 17.5 14.75C17.5 14.9489 17.421 15.1397 17.2803 15.2803C17.1397 15.421 16.9489 15.5 16.75 15.5H13.25C13.0511 15.5 12.8603 15.421 12.7197 15.2803C12.579 15.1397 12.5 14.9489 12.5 14.75V14.75ZM10.78 13.22C10.9205 13.3606 10.9993 13.5512 10.9993 13.75C10.9993 13.9488 10.9205 14.1394 10.78 14.28L8.78 16.28C8.63937 16.4205 8.44875 16.4993 8.25 16.4993C8.05125 16.4993 7.86063 16.4205 7.72 16.28L6.72 15.28C6.64631 15.2113 6.58721 15.1285 6.54622 15.0365C6.50523 14.9445 6.48319 14.8452 6.48141 14.7445C6.47963 14.6438 6.49816 14.5438 6.53588 14.4504C6.5736 14.357 6.62974 14.2722 6.70096 14.201C6.77218 14.1297 6.85701 14.0736 6.9504 14.0359C7.04379 13.9982 7.14382 13.9796 7.24452 13.9814C7.34523 13.9832 7.44454 14.0052 7.53654 14.0462C7.62854 14.0872 7.71134 14.1463 7.78 14.22L8.25 14.69L9.72 13.22C9.86063 13.0795 10.0512 13.0007 10.25 13.0007C10.4488 13.0007 10.6394 13.0795 10.78 13.22V13.22Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Interviewtasks</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     class="injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/leave-applications.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M5.25 3C4.65326 3 4.08097 3.23705 3.65901 3.65901C3.23705 4.08097 3 4.65326 3 5.25V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75V5.25C21 4.65326 20.7629 4.08097 20.341 3.65901C19.919 3.23705 19.3467 3 18.75 3H5.25ZM10.78 8.78L8.78 10.78C8.63937 10.9205 8.44875 10.9993 8.25 10.9993C8.05125 10.9993 7.86063 10.9205 7.72 10.78L6.72 9.78C6.58752 9.63782 6.5154 9.44978 6.51883 9.25548C6.52225 9.06118 6.60097 8.87579 6.73838 8.73838C6.87579 8.60097 7.06118 8.52225 7.25548 8.51882C7.44978 8.5154 7.63783 8.58752 7.78 8.72L8.25 9.19L9.72 7.72C9.78866 7.64631 9.87146 7.58721 9.96346 7.54622C10.0555 7.50523 10.1548 7.48319 10.2555 7.48141C10.3562 7.47963 10.4562 7.49816 10.5496 7.53588C10.643 7.5736 10.7278 7.62974 10.799 7.70096C10.8703 7.77218 10.9264 7.85701 10.9641 7.9504C11.0018 8.04379 11.0204 8.14382 11.0186 8.24452C11.0168 8.34522 10.9948 8.44454 10.9538 8.53654C10.9128 8.62854 10.8537 8.71134 10.78 8.78V8.78ZM16.75 8.5C16.9489 8.5 17.1397 8.57902 17.2803 8.71967C17.421 8.86032 17.5 9.05109 17.5 9.25C17.5 9.44891 17.421 9.63968 17.2803 9.78033C17.1397 9.92098 16.9489 10 16.75 10H13.25C13.0511 10 12.8603 9.92098 12.7197 9.78033C12.579 9.63968 12.5 9.44891 12.5 9.25C12.5 9.05109 12.579 8.86032 12.7197 8.71967C12.8603 8.57902 13.0511 8.5 13.25 8.5H16.75ZM12.5 14.75C12.5 14.5511 12.579 14.3603 12.7197 14.2197C12.8603 14.079 13.0511 14 13.25 14H16.75C16.9489 14 17.1397 14.079 17.2803 14.2197C17.421 14.3603 17.5 14.5511 17.5 14.75C17.5 14.9489 17.421 15.1397 17.2803 15.2803C17.1397 15.421 16.9489 15.5 16.75 15.5H13.25C13.0511 15.5 12.8603 15.421 12.7197 15.2803C12.579 15.1397 12.5 14.9489 12.5 14.75V14.75ZM10.78 13.22C10.9205 13.3606 10.9993 13.5512 10.9993 13.75C10.9993 13.9488 10.9205 14.1394 10.78 14.28L8.78 16.28C8.63937 16.4205 8.44875 16.4993 8.25 16.4993C8.05125 16.4993 7.86063 16.4205 7.72 16.28L6.72 15.28C6.64631 15.2113 6.58721 15.1285 6.54622 15.0365C6.50523 14.9445 6.48319 14.8452 6.48141 14.7445C6.47963 14.6438 6.49816 14.5438 6.53588 14.4504C6.5736 14.357 6.62974 14.2722 6.70096 14.201C6.77218 14.1297 6.85701 14.0736 6.9504 14.0359C7.04379 13.9982 7.14382 13.9796 7.24452 13.9814C7.34523 13.9832 7.44454 14.0052 7.53654 14.0462C7.62854 14.0872 7.71134 14.1463 7.78 14.22L8.25 14.69L9.72 13.22C9.86063 13.0795 10.0512 13.0007 10.25 13.0007C10.4488 13.0007 10.6394 13.0795 10.78 13.22V13.22Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Leave-applications</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     class="icon injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/mock-interview.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M17.75 3C18.612 3 19.4386 3.34241 20.0481 3.9519C20.6576 4.5614 21 5.38805 21 6.25V17.75C21 18.612 20.6576 19.4386 20.0481 20.0481C19.4386 20.6576 18.612 21 17.75 21H6.25C5.38805 21 4.5614 20.6576 3.9519 20.0481C3.34241 19.4386 3 18.612 3 17.75V9.372C3.33001 9.48837 3.68262 9.52617 4.0298 9.48239C4.37697 9.4386 4.70916 9.31444 4.99994 9.11978C5.29073 8.92511 5.5321 8.66531 5.70488 8.36101C5.87765 8.05671 5.97707 7.71631 5.99524 7.36685C6.0134 7.01739 5.9498 6.66851 5.8095 6.34794C5.6692 6.02737 5.45606 5.74395 5.18702 5.52018C4.91798 5.29642 4.60046 5.1385 4.25969 5.05896C3.91892 4.97942 3.5643 4.98046 3.224 5.062C3.463 4.45418 3.87947 3.9324 4.4192 3.56462C4.95892 3.19684 5.59688 3.00009 6.25 3H17.75ZM13.246 13.003H8.748L8.646 13.01C8.46649 13.0347 8.30199 13.1236 8.18291 13.2601C8.06383 13.3967 7.99823 13.5718 7.99823 13.753C7.99823 13.9342 8.06383 14.1093 8.18291 14.2459C8.30199 14.3824 8.46649 14.4713 8.646 14.496L8.748 14.503H13.246L13.348 14.496C13.5362 14.4701 13.7076 14.3737 13.8276 14.2263C13.9475 14.0789 14.007 13.8915 13.994 13.7019C13.9811 13.5123 13.8966 13.3347 13.7578 13.205C13.6189 13.0752 13.436 13.0031 13.246 13.003V13.003ZM15.252 9.496H8.748L8.646 9.503C8.46649 9.5277 8.30199 9.61655 8.18291 9.75314C8.06383 9.88972 7.99823 10.0648 7.99823 10.246C7.99823 10.4272 8.06383 10.6023 8.18291 10.7389C8.30199 10.8754 8.46649 10.9643 8.646 10.989L8.748 10.996H15.252L15.354 10.989C15.5423 10.9631 15.7137 10.8667 15.8336 10.7193C15.9535 10.5719 16.013 10.3845 16 10.1949C15.9871 10.0053 15.9026 9.8277 15.7638 9.69797C15.6249 9.56824 15.442 9.49606 15.252 9.496V9.496ZM3.75 6C4.08152 6 4.39946 6.1317 4.63388 6.36612C4.8683 6.60054 5 6.91848 5 7.25C5 7.58152 4.8683 7.89946 4.63388 8.13388C4.39946 8.3683 4.08152 8.5 3.75 8.5C3.41848 8.5 3.10054 8.3683 2.86612 8.13388C2.6317 7.89946 2.5 7.58152 2.5 7.25C2.5 6.91848 2.6317 6.60054 2.86612 6.36612C3.10054 6.1317 3.41848 6 3.75 6V6Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Mock-interview</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     class="icon injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/certificate.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M17.75 3C18.612 3 19.4386 3.34241 20.0481 3.9519C20.6576 4.5614 21 5.38805 21 6.25V17.75C21 18.612 20.6576 19.4386 20.0481 20.0481C19.4386 20.6576 18.612 21 17.75 21H6.25C5.38805 21 4.5614 20.6576 3.9519 20.0481C3.34241 19.4386 3 18.612 3 17.75V9.372C3.33001 9.48837 3.68262 9.52617 4.0298 9.48239C4.37697 9.4386 4.70916 9.31444 4.99994 9.11978C5.29073 8.92511 5.5321 8.66531 5.70488 8.36101C5.87765 8.05671 5.97707 7.71631 5.99524 7.36685C6.0134 7.01739 5.9498 6.66851 5.8095 6.34794C5.6692 6.02737 5.45606 5.74395 5.18702 5.52018C4.91798 5.29642 4.60046 5.1385 4.25969 5.05896C3.91892 4.97942 3.5643 4.98046 3.224 5.062C3.463 4.45418 3.87947 3.9324 4.4192 3.56462C4.95892 3.19684 5.59688 3.00009 6.25 3H17.75ZM13.246 13.003H8.748L8.646 13.01C8.46649 13.0347 8.30199 13.1236 8.18291 13.2601C8.06383 13.3967 7.99823 13.5718 7.99823 13.753C7.99823 13.9342 8.06383 14.1093 8.18291 14.2459C8.30199 14.3824 8.46649 14.4713 8.646 14.496L8.748 14.503H13.246L13.348 14.496C13.5362 14.4701 13.7076 14.3737 13.8276 14.2263C13.9475 14.0789 14.007 13.8915 13.994 13.7019C13.9811 13.5123 13.8966 13.3347 13.7578 13.205C13.6189 13.0752 13.436 13.0031 13.246 13.003V13.003ZM15.252 9.496H8.748L8.646 9.503C8.46649 9.5277 8.30199 9.61655 8.18291 9.75314C8.06383 9.88972 7.99823 10.0648 7.99823 10.246C7.99823 10.4272 8.06383 10.6023 8.18291 10.7389C8.30199 10.8754 8.46649 10.9643 8.646 10.989L8.748 10.996H15.252L15.354 10.989C15.5423 10.9631 15.7137 10.8667 15.8336 10.7193C15.9535 10.5719 16.013 10.3845 16 10.1949C15.9871 10.0053 15.9026 9.8277 15.7638 9.69797C15.6249 9.56824 15.442 9.49606 15.252 9.496V9.496ZM3.75 6C4.08152 6 4.39946 6.1317 4.63388 6.36612C4.8683 6.60054 5 6.91848 5 7.25C5 7.58152 4.8683 7.89946 4.63388 8.13388C4.39946 8.3683 4.08152 8.5 3.75 8.5C3.41848 8.5 3.10054 8.3683 2.86612 8.13388C2.6317 7.89946 2.5 7.58152 2.5 7.25C2.5 6.91848 2.6317 6.60054 2.86612 6.36612C3.10054 6.1317 3.41848 6 3.75 6V6Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Certificate</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     class="icon injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/testimonial.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M17.75 3C18.612 3 19.4386 3.34241 20.0481 3.9519C20.6576 4.5614 21 5.38805 21 6.25V17.75C21 18.612 20.6576 19.4386 20.0481 20.0481C19.4386 20.6576 18.612 21 17.75 21H6.25C5.38805 21 4.5614 20.6576 3.9519 20.0481C3.34241 19.4386 3 18.612 3 17.75V9.372C3.33001 9.48837 3.68262 9.52617 4.0298 9.48239C4.37697 9.4386 4.70916 9.31444 4.99994 9.11978C5.29073 8.92511 5.5321 8.66531 5.70488 8.36101C5.87765 8.05671 5.97707 7.71631 5.99524 7.36685C6.0134 7.01739 5.9498 6.66851 5.8095 6.34794C5.6692 6.02737 5.45606 5.74395 5.18702 5.52018C4.91798 5.29642 4.60046 5.1385 4.25969 5.05896C3.91892 4.97942 3.5643 4.98046 3.224 5.062C3.463 4.45418 3.87947 3.9324 4.4192 3.56462C4.95892 3.19684 5.59688 3.00009 6.25 3H17.75ZM13.246 13.003H8.748L8.646 13.01C8.46649 13.0347 8.30199 13.1236 8.18291 13.2601C8.06383 13.3967 7.99823 13.5718 7.99823 13.753C7.99823 13.9342 8.06383 14.1093 8.18291 14.2459C8.30199 14.3824 8.46649 14.4713 8.646 14.496L8.748 14.503H13.246L13.348 14.496C13.5362 14.4701 13.7076 14.3737 13.8276 14.2263C13.9475 14.0789 14.007 13.8915 13.994 13.7019C13.9811 13.5123 13.8966 13.3347 13.7578 13.205C13.6189 13.0752 13.436 13.0031 13.246 13.003V13.003ZM15.252 9.496H8.748L8.646 9.503C8.46649 9.5277 8.30199 9.61655 8.18291 9.75314C8.06383 9.88972 7.99823 10.0648 7.99823 10.246C7.99823 10.4272 8.06383 10.6023 8.18291 10.7389C8.30199 10.8754 8.46649 10.9643 8.646 10.989L8.748 10.996H15.252L15.354 10.989C15.5423 10.9631 15.7137 10.8667 15.8336 10.7193C15.9535 10.5719 16.013 10.3845 16 10.1949C15.9871 10.0053 15.9026 9.8277 15.7638 9.69797C15.6249 9.56824 15.442 9.49606 15.252 9.496V9.496ZM3.75 6C4.08152 6 4.39946 6.1317 4.63388 6.36612C4.8683 6.60054 5 6.91848 5 7.25C5 7.58152 4.8683 7.89946 4.63388 8.13388C4.39946 8.3683 4.08152 8.5 3.75 8.5C3.41848 8.5 3.10054 8.3683 2.86612 8.13388C2.6317 7.89946 2.5 7.58152 2.5 7.25C2.5 6.91848 2.6317 6.60054 2.86612 6.36612C3.10054 6.1317 3.41848 6 3.75 6V6Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Testimonial</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     class="icon injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/leaderboard.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M17.75 3C18.612 3 19.4386 3.34241 20.0481 3.9519C20.6576 4.5614 21 5.38805 21 6.25V17.75C21 18.612 20.6576 19.4386 20.0481 20.0481C19.4386 20.6576 18.612 21 17.75 21H6.25C5.38805 21 4.5614 20.6576 3.9519 20.0481C3.34241 19.4386 3 18.612 3 17.75V9.372C3.33001 9.48837 3.68262 9.52617 4.0298 9.48239C4.37697 9.4386 4.70916 9.31444 4.99994 9.11978C5.29073 8.92511 5.5321 8.66531 5.70488 8.36101C5.87765 8.05671 5.97707 7.71631 5.99524 7.36685C6.0134 7.01739 5.9498 6.66851 5.8095 6.34794C5.6692 6.02737 5.45606 5.74395 5.18702 5.52018C4.91798 5.29642 4.60046 5.1385 4.25969 5.05896C3.91892 4.97942 3.5643 4.98046 3.224 5.062C3.463 4.45418 3.87947 3.9324 4.4192 3.56462C4.95892 3.19684 5.59688 3.00009 6.25 3H17.75ZM13.246 13.003H8.748L8.646 13.01C8.46649 13.0347 8.30199 13.1236 8.18291 13.2601C8.06383 13.3967 7.99823 13.5718 7.99823 13.753C7.99823 13.9342 8.06383 14.1093 8.18291 14.2459C8.30199 14.3824 8.46649 14.4713 8.646 14.496L8.748 14.503H13.246L13.348 14.496C13.5362 14.4701 13.7076 14.3737 13.8276 14.2263C13.9475 14.0789 14.007 13.8915 13.994 13.7019C13.9811 13.5123 13.8966 13.3347 13.7578 13.205C13.6189 13.0752 13.436 13.0031 13.246 13.003V13.003ZM15.252 9.496H8.748L8.646 9.503C8.46649 9.5277 8.30199 9.61655 8.18291 9.75314C8.06383 9.88972 7.99823 10.0648 7.99823 10.246C7.99823 10.4272 8.06383 10.6023 8.18291 10.7389C8.30199 10.8754 8.46649 10.9643 8.646 10.989L8.748 10.996H15.252L15.354 10.989C15.5423 10.9631 15.7137 10.8667 15.8336 10.7193C15.9535 10.5719 16.013 10.3845 16 10.1949C15.9871 10.0053 15.9026 9.8277 15.7638 9.69797C15.6249 9.56824 15.442 9.49606 15.252 9.496V9.496ZM3.75 6C4.08152 6 4.39946 6.1317 4.63388 6.36612C4.8683 6.60054 5 6.91848 5 7.25C5 7.58152 4.8683 7.89946 4.63388 8.13388C4.39946 8.3683 4.08152 8.5 3.75 8.5C3.41848 8.5 3.10054 8.3683 2.86612 8.13388C2.6317 7.89946 2.5 7.58152 2.5 7.25C2.5 6.91848 2.6317 6.60054 2.86612 6.36612C3.10054 6.1317 3.41848 6 3.75 6V6Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Leaderboard</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     class="injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/syllabus.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M5.25 3C4.65326 3 4.08097 3.23705 3.65901 3.65901C3.23705 4.08097 3 4.65326 3 5.25V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75V5.25C21 4.65326 20.7629 4.08097 20.341 3.65901C19.919 3.23705 19.3467 3 18.75 3H5.25ZM10.78 8.78L8.78 10.78C8.63937 10.9205 8.44875 10.9993 8.25 10.9993C8.05125 10.9993 7.86063 10.9205 7.72 10.78L6.72 9.78C6.58752 9.63782 6.5154 9.44978 6.51883 9.25548C6.52225 9.06118 6.60097 8.87579 6.73838 8.73838C6.87579 8.60097 7.06118 8.52225 7.25548 8.51882C7.44978 8.5154 7.63783 8.58752 7.78 8.72L8.25 9.19L9.72 7.72C9.78866 7.64631 9.87146 7.58721 9.96346 7.54622C10.0555 7.50523 10.1548 7.48319 10.2555 7.48141C10.3562 7.47963 10.4562 7.49816 10.5496 7.53588C10.643 7.5736 10.7278 7.62974 10.799 7.70096C10.8703 7.77218 10.9264 7.85701 10.9641 7.9504C11.0018 8.04379 11.0204 8.14382 11.0186 8.24452C11.0168 8.34522 10.9948 8.44454 10.9538 8.53654C10.9128 8.62854 10.8537 8.71134 10.78 8.78V8.78ZM16.75 8.5C16.9489 8.5 17.1397 8.57902 17.2803 8.71967C17.421 8.86032 17.5 9.05109 17.5 9.25C17.5 9.44891 17.421 9.63968 17.2803 9.78033C17.1397 9.92098 16.9489 10 16.75 10H13.25C13.0511 10 12.8603 9.92098 12.7197 9.78033C12.579 9.63968 12.5 9.44891 12.5 9.25C12.5 9.05109 12.579 8.86032 12.7197 8.71967C12.8603 8.57902 13.0511 8.5 13.25 8.5H16.75ZM12.5 14.75C12.5 14.5511 12.579 14.3603 12.7197 14.2197C12.8603 14.079 13.0511 14 13.25 14H16.75C16.9489 14 17.1397 14.079 17.2803 14.2197C17.421 14.3603 17.5 14.5511 17.5 14.75C17.5 14.9489 17.421 15.1397 17.2803 15.2803C17.1397 15.421 16.9489 15.5 16.75 15.5H13.25C13.0511 15.5 12.8603 15.421 12.7197 15.2803C12.579 15.1397 12.5 14.9489 12.5 14.75V14.75ZM10.78 13.22C10.9205 13.3606 10.9993 13.5512 10.9993 13.75C10.9993 13.9488 10.9205 14.1394 10.78 14.28L8.78 16.28C8.63937 16.4205 8.44875 16.4993 8.25 16.4993C8.05125 16.4993 7.86063 16.4205 7.72 16.28L6.72 15.28C6.64631 15.2113 6.58721 15.1285 6.54622 15.0365C6.50523 14.9445 6.48319 14.8452 6.48141 14.7445C6.47963 14.6438 6.49816 14.5438 6.53588 14.4504C6.5736 14.357 6.62974 14.2722 6.70096 14.201C6.77218 14.1297 6.85701 14.0736 6.9504 14.0359C7.04379 13.9982 7.14382 13.9796 7.24452 13.9814C7.34523 13.9832 7.44454 14.0052 7.53654 14.0462C7.62854 14.0872 7.71134 14.1463 7.78 14.22L8.25 14.69L9.72 13.22C9.86063 13.0795 10.0512 13.0007 10.25 13.0007C10.4488 13.0007 10.6394 13.0795 10.78 13.22V13.22Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Syllabus</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //         <div class="list-scroll py-3 color-area">
    //           <li>
    //             <span class="mx-4">
    //               <div class="span-area d-flex justify-content-between align-items-center">
    //                 <div color="" class="sc-gueYoa kYDnie">
    //                   <svg
    //                    // xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     class="injected-svg"
    //                     data-src="/Icons/Sidebar_Icons/placement-board.svg"
    //                    // xmlns//:xlink="http://www.w3.org/1999///xlink"
    //                   >
    //                     <path
    //                       d="M16.25 2.00006C16.4311 2.00031 16.6059 2.06605 16.7423 2.18516C16.8787 2.30426 16.9674 2.46868 16.992 2.64806L17 2.75006V3.49906H17.749C18.3457 3.49906 18.918 3.73611 19.34 4.15807C19.7619 4.58003 19.999 5.15232 19.999 5.74906V10.0771C19.5227 9.7772 18.9851 9.58832 18.426 9.52441C17.8668 9.46051 17.3004 9.52321 16.7688 9.70788C16.2371 9.89256 15.7538 10.1945 15.3547 10.5912C14.9556 10.988 14.6508 11.4695 14.463 12.0001H7.248L7.146 12.0071C6.96649 12.0318 6.80199 12.1206 6.68291 12.2572C6.56383 12.3938 6.49823 12.5689 6.49823 12.7501C6.49823 12.9313 6.56383 13.1063 6.68291 13.2429C6.80199 13.3795 6.96649 13.4684 7.146 13.4931L7.248 13.5001H14.258C14.3208 14.4552 14.7474 15.35 15.45 16.0001H14.499C13.836 16.0001 13.2001 16.2635 12.7312 16.7323C12.2624 17.2011 11.999 17.837 11.999 18.5001V19.0001C11.999 20.1001 12.421 21.1521 13.172 22.0051H5.752C5.15526 22.0051 4.58297 21.768 4.16101 21.3461C3.73905 20.9241 3.502 20.3518 3.502 19.7551L3.5 5.75006C3.5 5.15332 3.73705 4.58103 4.15901 4.15907C4.58097 3.73711 5.15326 3.50006 5.75 3.50006L6.497 3.49906V2.75006C6.49505 2.55868 6.56634 2.3738 6.69627 2.23328C6.8262 2.09275 7.00493 2.00721 7.19588 1.99417C7.38682 1.98114 7.57552 2.04159 7.72334 2.16316C7.87116 2.28472 7.96692 2.45819 7.991 2.64806L7.998 2.75006V3.49906H11V2.75006C10.9981 2.55868 11.0693 2.3738 11.1993 2.23328C11.3292 2.09275 11.5079 2.00721 11.6989 1.99417C11.8898 1.98114 12.0785 2.04159 12.2263 2.16316C12.3742 2.28472 12.4699 2.45819 12.494 2.64806L12.501 2.75006V3.49906H15.499V2.75006C15.499 2.55115 15.578 2.36038 15.7187 2.21973C15.8593 2.07908 16.0501 2.00006 16.249 2.00006H16.25ZM11.247 16.0001H7.248L7.146 16.0071C6.96649 16.0318 6.80199 16.1206 6.68291 16.2572C6.56383 16.3938 6.49823 16.5689 6.49823 16.7501C6.49823 16.9313 6.56383 17.1063 6.68291 17.2429C6.80199 17.3795 6.96649 17.4684 7.146 17.4931L7.248 17.5001H11.247L11.349 17.4931C11.5285 17.4684 11.693 17.3795 11.8121 17.2429C11.9312 17.1063 11.9968 16.9313 11.9968 16.7501C11.9968 16.5689 11.9312 16.3938 11.8121 16.2572C11.693 16.1206 11.5285 16.0318 11.349 16.0071L11.247 16.0001ZM16.247 8.00006H7.249L7.147 8.00706C6.96749 8.03176 6.80299 8.12061 6.68391 8.2572C6.56483 8.39378 6.49923 8.56886 6.49923 8.75006C6.49923 8.93126 6.56483 9.10634 6.68391 9.24292C6.80299 9.37951 6.96749 9.46836 7.147 9.49306L7.249 9.50006H16.249L16.35 9.49306C16.5295 9.46836 16.694 9.37951 16.8131 9.24292C16.9322 9.10634 16.9978 8.93126 16.9978 8.75006C16.9978 8.56886 16.9322 8.39378 16.8131 8.2572C16.694 8.12061 16.5295 8.03176 16.35 8.00706L16.248 8.00006H16.247ZM18 10.5001C18.788 10.5001 19.498 10.8311 20 11.3611C20.4829 11.8713 20.7514 12.5475 20.75 13.2501C20.7512 13.9522 20.4827 14.6281 20 15.1381C19.6872 15.4693 19.2971 15.7176 18.8646 15.8608C18.4321 16.0039 17.9709 16.0374 17.5223 15.9582C17.0736 15.8789 16.6517 15.6895 16.2945 15.4069C15.9372 15.1243 15.6557 14.7573 15.4753 14.339C15.2949 13.9207 15.2213 13.4641 15.261 13.0103C15.3007 12.5565 15.4525 12.1196 15.7029 11.739C15.9532 11.3584 16.2941 11.0459 16.6951 10.8296C17.096 10.6134 17.5444 10.5001 18 10.5001V10.5001ZM13 18.5001C13 18.1022 13.158 17.7207 13.4393 17.4394C13.7206 17.1581 14.1022 17.0001 14.5 17.0001H21.5C21.8978 17.0001 22.2794 17.1581 22.5607 17.4394C22.842 17.7207 23 18.1022 23 18.5001V19.0001C23 20.9711 21.14 23.0001 18 23.0001C16.216 23.0001 14.846 22.3461 13.994 21.4201C13.346 20.7151 13 19.8521 13 19.0001V18.5001Z"
    //                       fill="#7E8E9F"
    //                     ></path>
    //                   </svg>
    //                 </div>
    //                 <div class="ml-4">Placement-board</div>
    //               </div>
    //             </span>
    //           </li>
    //         </div>
    //       </ul>
    //     </nav>
    //   </div>
    // </div>
  
  );
};

export default ss;
