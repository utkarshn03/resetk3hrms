import React from "react";
import "bootstrap/dist/css/bootstrap.css";

// let getimage = document.getElementbyId('test');
//     getimage.src= "data"

//     fetch('https://collectionapi.metmuseum.org/public/collection/v1/objects/435828')
//     .then((response) => response.json())
//     .then(data => getimage.src = data.primaryImage);

const Employeedet = () => {

  const id="12344";
  return (
    <>
      <div className="bg-dark bg-opacity-25 py-2">
        <div className="container">
          <div className="bg-white rounded-4 p-4 mb-3 container-fluid">
            <div className="row">
              <div className="col d-flex align-items-stretch">
                <div className="bg-white rounded-4 p-2 flex-fill">
                  <div className="row">
                    <div className="col-sm ratio ratio-1x1">
                      <img
                        src="https://imgur.com/t/gaming/90mMVjt"
                        width="5"
                        height="5"
                        class="rounded float-center"
                        alt=""
                      />
                    </div>
                    {/* <div class="d-flex" style="height: 200px;">
                      <div class="vr"></div>
                    </div> */}

                    <div className="col-sm">
                      <div className="mb-3">
                      <small class="text-muted">Employee Id: </small>
                        <p className="mb-3">
                        {id}
                        </p>
                        <small class="text-muted">Name: </small>
                        <p className="mb-3">
                        {id}
                        </p>
                        <small class="text-muted">Department: </small>
                        <p className="mb-3">
                        
                        {id}
                        </p>
                        <small class="text-muted">Email: </small>
                        <p className="mb-3">
                        {id}
                        </p>
                        <small class="text-muted">Mobile: </small>
                        <p className="mb-5">
                        {id}
                        </p>
                      </div>
                      <a
                        className="text-muted"
                        href="https://twitter.com/KIITUniversity"
                      >
                        <svg
                          fill="#000000"
                          height="28px"
                          width="28px"
                          version="1.1"
                          id="Layer_1"
                          viewBox="-271 296.6 256.4 208.4"
                        >
                          <path d="M-14.6,321.2c-9.4,4.2-19.6,7-30.2,8.3c10.9-6.5,19.2-16.8,23.1-29.1c-10.2,6-21.4,10.4-33.4,12.8c-9.6-10.2-23.3-16.6-38.4-16.6c-29,0-52.6,23.6-52.6,52.6c0,4.1,0.4,8.1,1.4,12c-43.7-2.2-82.5-23.1-108.4-55c-4.5,7.8-7.1,16.8-7.1,26.5c0,18.2,9.3,34.3,23.4,43.8c-8.6-0.3-16.7-2.7-23.8-6.6v0.6c0,25.5,18.1,46.8,42.2,51.6c-4.4,1.2-9.1,1.9-13.9,1.9c-3.4,0-6.7-0.3-9.9-0.9c6.7,20.9,26.1,36.1,49.1,36.5c-18,14.1-40.7,22.5-65.3,22.5c-4.2,0-8.4-0.2-12.6-0.7c23.3,14.9,50.9,23.6,80.6,23.6c96.8,0,149.7-80.2,149.7-149.7c0-2.3,0-4.6-0.1-6.8C-30.5,341-21.6,331.8-14.6,321.2" />
                        </svg>
                      </a>

                      &ensp;
                      &ensp;
                      &ensp;

                      <a
                        className="text-muted"
                        href="https://www.instagram.com/KIITUniversity/"
                      >
                        <svg width="28px" height="28px" viewBox="0 0 20 20">
                          <rect x="0" fill="none" width="20" height="20" />

                          <g>
                            <path d="M12.7 10c0-1.5-1.2-2.7-2.7-2.7S7.3 8.5 7.3 10s1.2 2.7 2.7 2.7c1.5 0 2.7-1.2 2.7-2.7zm1.4 0c0 2.3-1.8 4.1-4.1 4.1S5.9 12.3 5.9 10 7.7 5.9 10 5.9s4.1 1.8 4.1 4.1zm1.1-4.3c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .5 1 1zM10 3.4c-1.2 0-3.7-.1-4.7.3-.7.3-1.3.9-1.5 1.6-.4 1-.3 3.5-.3 4.7s-.1 3.7.3 4.7c.2.7.8 1.3 1.5 1.5 1 .4 3.6.3 4.7.3s3.7.1 4.7-.3c.7-.3 1.2-.8 1.5-1.5.4-1.1.3-3.6.3-4.7s.1-3.7-.3-4.7c-.2-.7-.8-1.3-1.5-1.5-1-.5-3.5-.4-4.7-.4zm8 6.6v3.3c0 1.2-.4 2.4-1.3 3.4-.9.9-2.1 1.3-3.4 1.3H6.7c-1.2 0-2.4-.4-3.4-1.3-.8-.9-1.3-2.1-1.3-3.4V10 6.7c0-1.3.5-2.5 1.3-3.4C4.3 2.5 5.5 2 6.7 2h6.6c1.2 0 2.4.4 3.4 1.3.8.9 1.3 2.1 1.3 3.4V10z" />
                          </g>
                        </svg>
                      </a>

                      &ensp;
                      &ensp;
                      &ensp;

                      <a
                        className="text-muted"
                        href="https://www.facebook.com/KIITUniversity"
                      >
                        <svg
                          fill="#000000"
                          height="28px"
                          width="28px"
                          version="1.1"
                          id="Layer_1"
                          viewBox="-143 145 512 512"
                        >
                          <path
                            d="M113,145c-141.4,0-256,114.6-256,256s114.6,256,256,256s256-114.6,256-256S254.4,145,113,145z M169.5,357.6l-2.9,38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"
                          />
                        </svg>
                      </a>

                      &ensp;
                      &ensp;
                      &ensp;

                      <a
                        className="text-muted"
                        href="https://www.facebook.com/KIITUniversity"
                      >
                        <svg
                          fill="#000000"
                          height="28px"
                          width="28px"
                          version="1.1"
                          id="Layer_1"
                          viewBox="-271 311.2 256 179.8"
                        >
                          <path
                            d="M-59.1,311.2h-167.8c0,0-44.1,0-44.1,44.1v91.5c0,0,0,44.1,44.1,44.1h167.8c0,0,44.1,0,44.1-44.1v-91.5
	C-15,355.3-15,311.2-59.1,311.2z M-177.1,450.3v-98.5l83.8,49.3L-177.1,450.3z"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="col-sm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employeedet;
