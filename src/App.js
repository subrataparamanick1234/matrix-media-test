import React, { useEffect } from "react";
import { allUserData } from "./redux/actions/usersAction";
import { useDispatch, useSelector } from "react-redux";
import { LazyLoadImage } from "react-lazy-load-image-component";

function App() {
  const dispatch = useDispatch();
  const { usersData } = useSelector((store) => store?.userRoot);

  useEffect(() => {
    dispatch(allUserData());
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {usersData !== null ? (
          <>
            {usersData.map((item, i) => (
              <div className="col-xl-4 col-md-4 col-sm-4 col-12" key={i}>
                <div className={`user_card color${i} mt-5`}>
                  <div className="card-top-bar">
                    <i className="fa-solid fa-envelopes-bulk color_white"></i>
                  </div>
                  <div className="card_body">
                    <div className="card_user_image">
                      <LazyLoadImage
                        alt={item?.last_name}
                        // height={image.height}
                        src={item?.avatar} // use normal <img> attributes as props
                        // width={image.width}
                        className={`color${i}_shadow`}
                      />
                    </div>
                    <div className="card_user_name">
                      {item?.first_name} {item?.last_name}
                    </div>
                    <div className="card_user_bio">
                      Lorem ipsum dolor sit amet dolor sit amet Lorem ipsum
                      dolor sit amet dolor sit.
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
                  <div className={`card_add_button color${i}`}>
                    <a href="#">
                      <i className="fa-solid fa-plus color_white"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            <h3 className="text-white">loading.......</h3>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
