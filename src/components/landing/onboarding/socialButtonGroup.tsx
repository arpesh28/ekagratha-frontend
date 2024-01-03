import { Button } from "../../ui/button";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook, SiDiscord } from "react-icons/si";

const SocialButtonGroup = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-3 ">
      <Button
        className="py-3 h-full w-full bg-lightMain hover:bg-darkSecondary transition-all ease-in-out duration-500"
        size="icon"
      >
        <FcGoogle size="1.8em" />
      </Button>
      <Button
        className="py-3 h-full w-full bg-lightMain hover:bg-darkSecondary transition-all ease-in-out duration-500"
        size="icon"
      >
        <SiFacebook color="#1778F2" size="1.8em" />
      </Button>
      <Button
        className="py-3 h-full w-full bg-lightMain hover:bg-darkSecondary transition-all ease-in-out duration-500"
        size="icon"
      >
        <SiDiscord color="#5865F2" size="1.8em" />
      </Button>
    </div>
  );
};

export default SocialButtonGroup;
