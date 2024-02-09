import Loader from "../../common/Loader";

const ProfileLoader = () => {
  return (
      <section className="animate-pulse px-4 pb-16">
          <div className="grid grid-cols-1 gap-3">
              <div className="bg-white shadow rounded-md">
                  <div className="flex p-4 flex-wrap justify-center sm:justify-start gap-y-3 items-center">
                      <div className="w-32 h-32 rounded-full bg-gray-200"></div>
                      <div className="ml-4">
                          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2"></div>
                          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2"></div>
                          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-6"></div>

                          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-20 "></div>
                      </div>
                  </div>
                  <hr />
                  <div className="p-4 grid grid-cols-3">
                      <div>
                          <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-[90%] "></div>
                  </div>
              </div>
              <div className="bg-white  rounded-md shadow">
                  <div className="flex items-center p-4 justify-between gap-4">
                      <div>
                          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 "></div>
                      </div>
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 "></div>
                  </div>
                  <hr />
                  <div className="py-10">
                      <Loader />
                  </div>
              </div>
          </div>
      </section>
  );
}

export default ProfileLoader
