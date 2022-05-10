import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#7880e7" d="M11,24L25,2l14,22l-14,8L11,24z"/><path fill="#5c64c7" d="M25,2l14,22l-14,8V2z"/><path fill="#7880e7" d="M11,27l14,8l14-8L25,46L11,27z"/><path fill="#5c64c7" d="M25,35l14-8L25,46V35z M11,24l14-6l14,6l-14,8L11,24z"/><path fill="#2a3192" d="M25,18l14,6l-14,8V18z"/></svg>);
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
