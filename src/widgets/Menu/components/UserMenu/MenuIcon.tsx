import React from "react";
import styled from "styled-components";
import { Variant, variants } from "./types";
import { Image } from "../../../../components/Image";
import { RefreshIcon, WalletFilledIcon, WarningIcon } from "../../../../components/Svg";
import { Colors } from "../../../../theme/types";

const MenuIconWrapper = styled.div<{ borderColor: keyof Colors }>`
  background-color: ${({ theme }) => theme.colors.background};
  border-color: ${({ theme, borderColor }) => theme.colors[borderColor]};
  border-radius: 50%;
  border-style: solid;
  border-width: 2px;
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 102;
  margin-right: 10px;
`;

const ProfileIcon = styled(Image)`
  left: 0;
  position: absolute;
  top: -4px;
  z-index: 102;

  & > img {
    border-radius: 50%;
  }
`;

export const NoProfileMenuIcon: React.FC = () => (
  <MenuIconWrapper borderColor="primary">
    <WalletFilledIcon color="primary" width="15px" />
  </MenuIconWrapper>
);

export const PendingMenuIcon: React.FC = () => (
  <MenuIconWrapper borderColor="secondary">
    <RefreshIcon color="secondary" width="15px" spin />
  </MenuIconWrapper>
);

export const WarningMenuIcon: React.FC = () => (
  <MenuIconWrapper borderColor="warning">
    <WarningIcon color="warning" width="15px" />
  </MenuIconWrapper>
);

export const DangerMenuIcon: React.FC = () => (
  <MenuIconWrapper borderColor="failure">
    <WarningIcon color="failure" width="15px" />
  </MenuIconWrapper>
);

const MenuIcon: React.FC<{ avatarSrc?: string; variant: Variant }> = ({ avatarSrc, variant }) => {
  if (variant === variants.DANGER) {
    return <DangerMenuIcon />;
  }

  if (variant === variants.WARNING) {
    return <WarningMenuIcon />;
  }

  if (variant === variants.PENDING) {
    return <PendingMenuIcon />;
  }

  if (!avatarSrc) {
    return <NoProfileMenuIcon />;
  }

  return <ProfileIcon src={avatarSrc} height={40} width={40} />;
};

export default MenuIcon;
