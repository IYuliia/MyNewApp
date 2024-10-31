import * as React from "react";
import Svg, { Path } from "react-native-svg";

const PostsIcon = ({ color = "#212121" }, props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path fill="#fff" d="M0 0h24v24H0z" />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.8}
      d="M3 3h7v7H3V3ZM14 3h7v7h-7V3ZM14 14h7v7h-7v-7ZM3 14h7v7H3v-7Z"
      clipRule="evenodd"
    />
  </Svg>
);

export default PostsIcon;