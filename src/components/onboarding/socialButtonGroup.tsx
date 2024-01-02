import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";

const SocialButtonGroup = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-5 h-4">
      <Button className=" w-full py-5 bg-white" size="icon">
        <FcGoogle />
      </Button>
      <Button className=" w-full py-5 bg-white" size="icon">
        <FcGoogle />
      </Button>
      <Button className=" w-full py-5 bg-white" size="icon">
        <FcGoogle />
      </Button>
    </div>
  );
};

export default SocialButtonGroup;
