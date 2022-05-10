import React from "react";
import styled from "styled-components";
import getExternalLinkProps from "../../util/getExternalLinkProps";
import Text from "../Text/Text";
import { LinkProps } from "./types";

const StyledLink = styled(Text)<LinkProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  &:hover {
    text-decoration: none;
  }
`;

const LinkNoUnderline: React.FC<LinkProps> = ({ external, ...props }) => {
  const internalProps = {};
  return <StyledLink as="a" bold {...internalProps} {...props} />;
};

LinkNoUnderline.defaultProps = {
  color: "primary",
};

export default LinkNoUnderline;
