import { ReactElement } from "react";
import { BoxProps } from "../Box";
import { MenuItemsType } from "../MenuItems/types";
export interface BottomNavProps extends BoxProps {
    items: MenuItemsType[];
    activeItem?: string;
    activeSubItem?: string;
}
export interface BottomNavUserMenuProps extends BoxProps {
    userMenuItem?: ReactElement;
}
