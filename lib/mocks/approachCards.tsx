import { CardProps } from "@/components/approach";
import AceternityIcon from "@/components/approach/AceternityIcon";

const approachCards: CardProps[] = [
  {
    title: "Planning & Strategy",
    icon: <AceternityIcon order="Phase 1" />,
    des: `We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements.`,
  },
  {
    title: "Development & Progress Update",
    icon: <AceternityIcon order="Phase 2" />,
    des: `Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way.`,
  },
  {
    title: "Development & Launch",
    icon: <AceternityIcon order="Phase 3" />,
    des: `This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up.`,
  },
];

export default approachCards;
