import { Link } from "react-router-dom";
const BasicFooter = () => {
  return (
      <>
          <div className="flex flex-wrap items-center max-w-lg mx-auto p-4 justify-center gap-x-4">
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
      </>
  );
}

export default BasicFooter
