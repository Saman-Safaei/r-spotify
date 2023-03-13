import {ComponentPropsWithoutRef} from "react";

export default interface ChipProps extends ComponentPropsWithoutRef<'button'> {
  onClick: () => void;
}
