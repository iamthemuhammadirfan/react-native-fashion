import * as React from "react";
import Svg, { Path } from "react-native-svg";

function Facebook(props) {
  return (
    <Svg
      width={10}
      height={18}
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.067 18V9.79h2.756l.413-3.2H6.067V4.546c0-.927.258-1.558 1.586-1.558h1.695V.125A22.65 22.65 0 006.878 0C4.436 0 2.763 1.491 2.763 4.23v2.36H0v3.2h2.763V18h3.304z"
        fill="#3C5A99"
      />
    </Svg>
  );
}

export default Facebook;
