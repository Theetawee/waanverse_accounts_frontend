import { UserType } from "../../../hooks/types";
import Image from "../../common/Image";
import DefaultAvater from "../../../assets/images/default.webp";
import { Link } from "react-router-dom";
const HeaderInfo = ({ data }: { data: UserType }) => {



  return (
      <div className="bg-white shadow rounded-md">
          <div className="flex p-4 flex-wrap gap-y-3 items-center">
              <div>
                  <Image
                      src={data.image || DefaultAvater}
                      alt={data.name}
                      hash={data.profile_image_hash}
                      className="w-32 h-32 border border-gray-100 rounded-full object-cover"
                  />
              </div>
              <div className="ml-4">
                  <p className="text-sm mb-6 max-w-sm">
                      Personalize your account with a photo. Your profile photo
                      will appear on apps and devices that use your Waanverse
                      account.
                  </p>
                  <div>
                      <Link
                          to="/account/update/image"
                          className="px-5 py-1.5 border border-gray-200 rounded"
                      >
                          Change photo
                      </Link>
                  </div>
              </div>
          </div>
          <hr />
          <div className="p-4 grid grid-cols-3">
              <div>
                  <p>Full name</p>
              </div>
              <div>
                  <p>{data.name}</p>
              </div>
              <div className="flex items-center justify-end">
                  <Link to="/account/update/info" className="text-sm text-primary-600 hover:underline">Edit info</Link>
              </div>
          </div>
      </div>
  );
}

export default HeaderInfo
