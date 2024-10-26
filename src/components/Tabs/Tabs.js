import React from "react";
import { Link } from "react-router-dom";

const Tabs = () => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Profile
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Settings
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-lightBlue-600"
                    : "text-lightBlue-600 bg-white")
                }
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                Options
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  {/* <p>
                    Collaboratively administrate empowered markets via
                    plug-and-play networks. Dynamically procrastinate B2C users
                    after installed base benefits.
                    <br />
                    <br /> Dramatically visualize customer directed convergence
                    without revolutionary ROI.
                  </p> */}
                  {/* <section className="block relative z-1 bg-blueGray-600"> */}
                    <div className="container">
                      <div className="justify-center flex flex-wrap">
                        <div className="w-full lg:w-12/12 px-4  -mt-94">                          
                          <div className="flex flex-wrap">
                            <div className="w-full lg:w-4/12 px-4">
                              <h5 className="text-xl font-semibold pb-4 text-center">
                                Login Page
                              </h5>
                              <Link to="/auth/login">
                                <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                  <img
                                    alt="..."
                                    className="align-middle border-none max-w-full h-auto rounded-lg"
                                    src={require("assets/img/login.jpg")}
                                  />
                                </div>
                              </Link>
                            </div>

                            <div className="w-full lg:w-4/12 px-4">
                              <h5 className="text-xl font-semibold pb-4 text-center">
                                Profile Page
                              </h5>
                              <Link to="/profile">
                                <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                  <img
                                    alt="..."
                                    className="align-middle border-none max-w-full h-auto rounded-lg"
                                    src={require("assets/img/profile.jpg")}
                                  />
                                </div>
                              </Link>
                            </div>

                            <div className="w-full lg:w-4/12 px-4">
                              <h5 className="text-xl font-semibold pb-4 text-center">
                                Landing Page
                              </h5>
                              <Link to="/landing">
                                <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                                  <img
                                    alt="..."
                                    className="align-middle border-none max-w-full h-auto rounded-lg"
                                    src={require("assets/img/landing.jpg")}
                                  />
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  {/* </section> */}
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    Completely synergize resource taxing relationships via
                    premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas.
                    <br />
                    <br />
                    Dynamically innovate resource-leveling customer service for
                    state of the art customer service.
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas.
                    <br />
                    <br /> Dramatically maintain clicks-and-mortar solutions
                    without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;