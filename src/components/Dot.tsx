import { FC, useEffect } from "react";
import styled from "styled-components";
interface Props {
  item: {
    label: string;
    vision: number;
    ability: number;
    component: JSX.Element;
  };

  key: number;

  area: {
    width: number;
    height: number;
    ratio: number;
    areaWidthStartsPixel: number;
    areaHeightStartsPixel: number;
  };
  _dragStart: Function;
  _dragging: Function;
  _dragEnd: Function;
}
interface DotProps {
  ability: number;
  vision: number;
  area: {
    width: number;
    height: number;
    ratio: number;
    areaWidthStartsPixel: number;
    areaHeightStartsPixel: number;
  };
}

const Dot: FC<Props> = ({
  item,
  key,
  area,
  _dragStart,
  _dragging,
  _dragEnd,
  ...props
}) => {
  return (
    <>
      <Circle
        draggable={true}
        key={key}
        ability={item?.ability}
        vision={item?.vision}
        area={area}
        onDragStart={(e) => {
          _dragStart(e, item?.label);
        }}
        onDrag={(e) => {
          _dragging(e, item?.label);
        }}
        onDragEnd={(e) => {
          _dragEnd(e, item?.label);
        }}
      >
        {item?.component}
        <div className="label">{item?.label}</div>
      </Circle>
    </>
  );
};
export default Dot;

const Circle = styled.div<DotProps>`
  z-index: 222;
  background-color: #3878a2;
  border-radius: 50%;
  border: 1px solid white;
  width: 15px;
  height: 15px;
  position: absolute;
  display: block;

  left: calc(
    (
      ${(props) =>
        props.vision !== 0
          ? (props.vision * props.area?.width) / 100 - 10 + "px"
          : "-10px"}
    )
  );

  top: calc(
    100% -
      ${(props) =>
        props.ability !== 0
          ? (props.ability * props.area?.height) / 100 + 10 + "px"
          : "+10px"}
  );
  cursor: move;

  .label {
    margin-top: 10px;
    margin-left: 10px;
    font-size: 13px;
    color: #3878a2;
  }
`;
