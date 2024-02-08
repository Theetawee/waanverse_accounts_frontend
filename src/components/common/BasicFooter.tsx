import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";


const BasicFooter = () => {
    const { serverOk} = useContext(AuthContext);
  return (
      <div className="flex items-center flex-col">
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
              <span>
                  <Link className="hover:underline text-gray-700" to={"/tos"}>
                      Terms of Service
                  </Link>
              </span>
          </div>
          <div className="flex items-center justify-center">
              {serverOk ? (
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              ) : (
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              )}
              <p className="text-xs ml-2">
                  Copyright © 2024 Waanverse Corp. All rights reserved.
              </p>
          </div>
      </div>
  );
}

export default BasicFooter
