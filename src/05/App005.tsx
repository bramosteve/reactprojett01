import { BiCommentDetail } from "react-icons/bi"
import { CiBookmarkCheck } from "react-icons/ci"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import { LuSend } from "react-icons/lu"


export default function App05(){
    return(
        <div className="bg-blue-100 w-screen h-screen flex items-center place-content-center">

              <div className="bg-white rounded-lg shadow w-100 h-100 flex flex-col">
                    <div className="h-8"></div>
                    <div className="bg-yellow-100 flex-1"></div>
                    <div className="h-8 flex items-center pv-2">
                            <div className=" flex  w-1/2 space-x-2">
                                <FaRegHeart/>
                                <FaHeart className="text-red-500"/>
                                <BiCommentDetail/>
                                <LuSend/>
                          
                            <div className=" flex place-content-end  w-1/2">
                                 <CiBookmarkCheck/>
                            </div>
                    </div>
              </div>
        </div>
        </div>
    )
}