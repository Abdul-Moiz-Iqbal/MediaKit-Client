import { Link } from "react-router-dom";
import Button from "../Ui/Button";
import logo from "../resources/brand/MediakitsLogo.png";

const Header = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-[85%] mx-auto my-6 flex  justify-between">
        <img src={logo} />
        <div>
          {/* Add blogs btn bellow if needed as per figma file */}
          <div></div>
          <div className="flex">
            {/* <Link to={'/login'}> */}
            <Button
              text={"Blogs "}
              style={"mr-32 font-medium text-primary border-none"}
            />
            {/* </Link> */}

            <Link to={'/login'}>
              <Button text={"Login "} style={""} />
            </Link>
            <Link to={'/signup'}>
              <Button
                text={"Login for free"}
                style={"ml-5 bg-primary text-white"}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
