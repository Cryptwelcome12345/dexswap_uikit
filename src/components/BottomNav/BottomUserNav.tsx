import React, { useState } from "react";
import StyledBottomNav from "./styles";
import Flex from "../../components/Box/Flex";
import { BottomNavUserMenuProps } from "./types";
import { Overlay } from "../Overlay";

const BottomUserNav: React.FC<BottomNavUserMenuProps> = ({
  userMenuItem,
}) => {
  const [menuOpenByIndex, setMenuOpenByIndex] = useState({});
  const isBottomMenuOpen = Object.values(menuOpenByIndex).reduce((acc, value) => acc || value, false);
  return (
    <>
      {isBottomMenuOpen && <Overlay />}
      <StyledBottomNav justifyContent="space-around">
        {
            (
              <Flex alignItems="center" height="100%">
                {userMenuItem}
              </Flex>
            )
          }
      </StyledBottomNav>
    </>
  );
};

export default BottomUserNav;
