import React, { useEffect,useState } from "react";
import Photo1 from "./assets/images/user1.jpg";
import { allUserData } from "./redux/actions/usersAction";
import { useDispatch, useSelector } from "react-redux";
import axios from "./apis/axios";


function App() {
  const dispatch = useDispatch();
  const { usersData } = useSelector((store) => store?.userRoot);
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    dispatch(allUserData());
    setUserList([userList, ...usersData]);
  }, [userList]);


  console.log('====================================');
  console.log(userList);
  console.log('====================================');
  return (
    <div className="container mt-5">
      <div className="row">
        {/* {usersData.length !==0 ? (
          <>
            <div className="col-sm-3">
              <div className="user_card color1">
                <div className="card-top-bar">
                  <i className="fa-solid fa-envelopes-bulk color_white"></i>
                </div>
                <div className="card_body">
                  <div className="card_user_image">
                    <img
                      src={usersData?.avatar}
                      alt="user image"
                      className="color1_shadow"
                    />
                  </div>
                  <div className="card_user_name">
                    {usersData?.first_name} {usersData?.last_name}
                  </div>
                  <div className="card_user_bio">
                    Lorem ipsum dolor sit amet dolor sit amet Lorem ipsum dolor
                    sit amet dolor sit.
                  </div>
                  <div className="card_social_link">
                    <a href="#">
                      <i className="fa-brands fa-behance"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-dribbble"></i>
                    </a>
                  </div>
                </div>
                <div className="card_add_button color1">
                  <a href="#">
                    <i className="fa-solid fa-plus color_white"></i>
                  </a>
                </div>
              </div>
            </div>
          </>
        ) : (
          <></>
        )} */}

        {/* <div className="col-sm-3">
          <div className="user_card color2">
            <div className="card-top-bar">
              <i className="fa-brands fa-behance"></i>
            </div>
            <div className="card_body">
              <div className="card_user_image">
                <img src={Photo1} alt="user image" className="color2_shadow" />
              </div>
              <div className="card_user_name">Saamual Robinson</div>
              <div className="card_user_bio">
                Lorem ipsum dolor sit amet dolor sit amet Lorem ipsum dolor sit
                amet dolor sit.
              </div>
              <div className="card_social_link">
                <a href="#">
                  <i className="fa-brands fa-behance"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
              </div>
            </div>
            <div className="card_add_button color2">
              <a href="#">
                <i className="fa-solid fa-plus color_white"></i>
              </a>
            </div>
          </div>
        </div> */}
        {/* <div className="col-sm-3">
          <div className="user_card color3">
            <div className="card-top-bar">
              <i className="fa-brands fa-behance"></i>
            </div>
            <div className="card_body">
              <div className="card_user_image">
                <img src={Photo1} alt="user image" className="color3_shadow" />
              </div>
              <div className="card_user_name">Saamual Robinson</div>
              <div className="card_user_bio">
                Lorem ipsum dolor sit amet dolor sit amet Lorem ipsum dolor sit
                amet dolor sit.
              </div>
              <div className="card_social_link">
                <a href="#">
                  <i className="fa-brands fa-behance"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
              </div>
            </div>
            <div className="card_add_button color3">
              <a href="#">
                <i className="fa-solid fa-plus color_white"></i>
              </a>
            </div>
          </div>
        </div> */}
        {/* <div className="col-sm-3">
          <div className="user_card color4">
            <div className="card-top-bar">
              <i className="fa-brands fa-behance"></i>
            </div>
            <div className="card_body">
              <div className="card_user_image">
                <img src={Photo1} alt="user image" className="color4_shadow" />
              </div>
              <div className="card_user_name">Saamual Robinson</div>
              <div className="card_user_bio">
                Lorem ipsum dolor sit amet dolor sit amet Lorem ipsum dolor sit
                amet dolor sit.
              </div>
              <div className="card_social_link">
                <a href="#">
                  <i className="fa-brands fa-behance"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
              </div>
            </div>
            <div className="card_add_button color4">
              <a href="#">
                <i className="fa-solid fa-plus color_white"></i>
              </a>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="row mt-5">
        <div className="col-sm-3">
          <div className="user_card color5">
            <div className="card-top-bar">
              <i className="fa-brands fa-behance"></i>
            </div>
            <div className="card_body">
              <div className="card_user_image">
                <img src={Photo1} alt="user image" className="color5_shadow" />
              </div>
              <div className="card_user_name">Saamual Robinson</div>
              <div className="card_user_bio">
                Lorem ipsum dolor sit amet dolor sit amet Lorem ipsum dolor sit
                amet dolor sit.
              </div>
              <div className="card_social_link">
                <a href="#">
                  <i className="fa-brands fa-behance"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
              </div>
            </div>
            <div className="card_add_button color5">
              <a href="#">
                <i className="fa-solid fa-plus color_white"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="user_card color6">
            <div className="card-top-bar">
              <i className="fa-brands fa-behance"></i>
            </div>
            <div className="card_body">
              <div className="card_user_image">
                <img src={Photo1} alt="user image" className="color6_shadow" />
              </div>
              <div className="card_user_name">Saamual Robinson</div>
              <div className="card_user_bio">
                Lorem ipsum dolor sit amet dolor sit amet Lorem ipsum dolor sit
                amet dolor sit.
              </div>
              <div className="card_social_link">
                <a href="#">
                  <i className="fa-brands fa-behance"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
              </div>
            </div>
            <div className="card_add_button color6">
              <a href="#">
                <i className="fa-solid fa-plus color_white"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="col-sm-3">
          <div className="user_card color7">
            <div className="card-top-bar">
              <i className="fa-brands fa-behance"></i>
            </div>
            <div className="card_body">
              <div className="card_user_image">
                <img src={Photo1} alt="user image" className="color7_shadow" />
              </div>
              <div className="card_user_name">Saamual Robinson</div>
              <div className="card_user_bio">
                Lorem ipsum dolor sit amet dolor sit amet Lorem ipsum dolor sit
                amet dolor sit.
              </div>
              <div className="card_social_link">
                <a href="#">
                  <i className="fa-brands fa-behance"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
              </div>
            </div>
            <div className="card_add_button color7">
              <a href="#">
                <i className="fa-solid fa-plus color_white"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="user_card color8">
            <div className="card-top-bar">
              <i className="fa-brands fa-behance"></i>
            </div>
            <div className="card_body">
              <div className="card_user_image">
                <img src={Photo1} alt="user image" className="color8_shadow" />
              </div>
              <div className="card_user_name">Saamual Robinson</div>
              <div className="card_user_bio">
                Lorem ipsum dolor sit amet dolor sit amet Lorem ipsum dolor sit
                amet dolor sit.
              </div>
              <div className="card_social_link">
                <a href="#">
                  <i className="fa-brands fa-behance"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
              </div>
            </div>
            <div className="card_add_button color8">
              <a href="#">
                <i className="fa-solid fa-plus color_white"></i>
              </a>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
