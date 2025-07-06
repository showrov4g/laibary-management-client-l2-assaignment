import Lottie from "lottie-react";
import animation  from "../../asstes/Animation.json";

const Loading = () => {
  return (
    <div>
        <div className="flex items-center justify-center min-h-screen">
            <Lottie animationData={animation} loop={true} className="w-40 h-40" />
        </div>
    </div>
  )
}

export default Loading