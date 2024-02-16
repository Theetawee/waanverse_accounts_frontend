import { Link } from "react-router-dom";


const BasicFooter = () => {
  return (
      <div className="flex items-center flex-col p-4">
          <div className="flex flex-wrap text-sm items-center max-w-lg mx-auto justify-center gap-x-4">
              <span>
                  <Link className="hover:underline text-gray-700" to={"/"}>
                      Home
                  </Link>
              </span>
              <span>
                  <Link
                      className="hover:underline text-gray-700"
                      to={"/privacy"}
                  >
                      Privacy Policy
                  </Link>
              </span>
              {/* <span>
                  <Link className="hover:underline text-gray-700" to={"/tos"}>
                      Terms of Service
                  </Link>
              </span> */}
          </div>
          <div className="flex items-center mt-3 justify-center">
              <p className="text-xs ml-2">
                  Copyright © 2024 Waanverse Corp. All rights reserved.
              </p>
          </div>
      </div>
  );
}

export default BasicFooter
