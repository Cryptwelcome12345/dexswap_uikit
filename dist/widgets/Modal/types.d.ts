import { BoxProps } from "../../components/Box";
export interface ModalTheme {
    background: string;
}
export declare type Handler = () => void;
export interface InjectedProps {
    onDismiss?: Handler;
}
export interface ModalProps extends InjectedProps, BoxProps {
    title: string;
    hideCloseButton?: boolean;
    onBack?: () => void;
    bodyPadding?: string;
    headerBackground?: string;
    minWidth?: string;
    headerTextColor?: string;
}
