import MailIcon from "@material-ui/icons/Mail";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MapIcon from "@material-ui/icons/Map";
import InfoIcon from "@material-ui/icons/Info";

// Import the circular menu
import CircleMenu from "../components/homeMenu/CircleMenu";
import CircleMenuItem from "../components/homeMenu/CircleMenuItem";

export default function TestPage() {
  return (
    <div className="home-background">
      <CircleMenu
        startAngle={-90}
        rotationAngle={360}
        itemSize={12}
        radius={24}
        /**
         * rotationAngleInclusive (default true)
         * Whether to include the ending angle in rotation because an
         * item at 360deg is the same as an item at 0deg if inclusive.
         * Leave this prop for angles other than 360deg unless otherwise desired.
         */
        rotationAngleInclusive={false}
      >
        <CircleMenuItem
          onClick={() => alert("Clicked the item")}
          tooltip="Email"
          tooltipPlacement="right"
        >
          Find Housing
      </CircleMenuItem>
        <CircleMenuItem tooltip="Help">
          Ways To Give
      </CircleMenuItem>
        <CircleMenuItem tooltip="Location">
          Contact
      </CircleMenuItem>
        <CircleMenuItem tooltip="Info">
          Who We Are
      </CircleMenuItem>
        <CircleMenuItem tooltip="Info">
          Our Initiatives
      </CircleMenuItem>
      </CircleMenu>
    </div>
  );
};