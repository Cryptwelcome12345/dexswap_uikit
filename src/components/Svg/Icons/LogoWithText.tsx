import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256"><defs><linearGradient id="a" x1="0.967" y1="0.973" x2="0" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#2abef7"/><stop offset="1" stop-color="#2c6def"/></linearGradient><linearGradient id="b" x1="0.96" y1="0.026" x2="0.026" y2="0.964" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#b6509e"/><stop offset="1" stop-color="#2ebac6"/></linearGradient><clipPath id="d"><rect width="256" height="256"/></clipPath></defs><g id="c" clip-path="url(#d)"><g transform="translate(24006 15085)"><path d="M30.72,0H225.28A30.72,30.72,0,0,1,256,30.72V225.28A30.72,30.72,0,0,1,225.28,256H30.72A30.72,30.72,0,0,1,0,225.28V30.72A30.72,30.72,0,0,1,30.72,0Z" transform="translate(-24006 -15085)" fill="#fff"/><path d="M225.281,256H30.72A30.694,30.694,0,0,1,0,225.281V30.72A30.695,30.695,0,0,1,30.72,0h194.56A30.695,30.695,0,0,1,256,30.72v194.56A30.694,30.694,0,0,1,225.281,256ZM37.12,10.24A26.858,26.858,0,0,0,10.24,37.12V218.88a26.857,26.857,0,0,0,26.88,26.88H218.88a26.857,26.857,0,0,0,26.88-26.88V37.12a26.857,26.857,0,0,0-26.88-26.88Z" transform="translate(-24006 -15085)" fill="url(#a)"/><path d="M204.8,230.4H25.6A25.578,25.578,0,0,1,0,204.8V25.6A25.578,25.578,0,0,1,25.6,0H204.8a25.578,25.578,0,0,1,25.6,25.6V204.8a25.578,25.578,0,0,1-25.6,25.6ZM28.159,8.96a19.2,19.2,0,0,0-19.2,19.2V202.241a19.2,19.2,0,0,0,19.2,19.2H202.241a19.2,19.2,0,0,0,19.2-19.2V28.159a19.2,19.2,0,0,0-19.2-19.2Z" transform="translate(-23993.199 -15072.2)" fill="url(#b)"/></g><g transform="translate(72 41)"><path d="M155.4,68.383v43.264L208.872,36.3Z" transform="translate(-97.063 63.353)" fill="#3b3735"/><path d="M206.928,101.355,155.4,15.8V78.022Z" transform="translate(-97.063 -15.8)" fill="#3b3735"/><path d="M155.4,29.6V82.586l51.041-29.653Z" transform="translate(-97.063 37.468)" fill="#1f1d19"/><path d="M143.8,101.355,195.327,15.8V78.022Z" transform="translate(-141.855 -15.8)" fill="#959190"/><path d="M194.941,29.6V82.586L143.9,52.933Z" transform="translate(-141.473 37.468)" fill="#403c3a"/><path d="M196.872,68.383v43.264L143.4,36.3Z" transform="translate(-143.4 63.353)" fill="#959190"/></g></g></svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
