import { ReactNode } from "react";
import { Todo } from "../store";

interface Props<T> {
  items: T[];
  render: (item: T) => ReactNode;
  itemClick: (item: T) => void;
}

const UL = <T extends Todo>({ itemClick, items, render }: Props<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li onClick={() => itemClick(item)} key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  );
};
export default UL;