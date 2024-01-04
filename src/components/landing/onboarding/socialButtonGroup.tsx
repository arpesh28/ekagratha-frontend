import { Button } from "../../ui/button";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook, SiDiscord } from "react-icons/si";

const SocialButtonGroup = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-3 ">
      <Button
        className="py-3 h-full w-full bg-specialBackground shadow-lg hover:shadow-none hover:bg-specialBackground  transition-all ease-in-out duration-500 hover:border-[1px] border-border"
        size="icon"
      >
        <FcGoogle size="1.8em" />
      </Button>
      <Button
        className="py-3 h-full w-full  bg-specialBackground shadow-lg hover:shadow-none hover:bg-specialBackground  transition-all ease-in-out duration-500 hover:border-[1px] border-border"
        size="icon"
      >
        <SiFacebook color="#1778F2" size="1.8em" />
      </Button>
      <Button
        className="py-3 h-full w-full  bg-specialBackground shadow-lg hover:shadow-none hover:bg-specialBackground transition-all ease-in-out duration-500 hover:border-[1px] border-border"
        size="icon"
      >
        <SiDiscord color="#5865F2" size="1.8em" />
      </Button>
    </div>
  );
};

export default SocialButtonGroup;
