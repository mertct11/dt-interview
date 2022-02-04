import React from "react";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import Dot from "./Dot";
interface Props {
  data: Array<{
    label: string;
    vision: number;
    ability: number;
    component: JSX.Element;
  }>;
  setData(
    arg: Array<{
      label: string;
      vision: number;
      ability: number;
      component: JSX.Element;
    }>
  ): void;
}
interface AreaProps {
  width: number;
  height: number;
  ratio: number;
  areaWidthStartsPixel: number;
  areaHeightStartsPixel: number;
}

const Quadrant: FC<Props> = ({ data, setData, ...props }) => {
  const [area, setArea] = useState<AreaProps>({
    width: 0,
    height: 0,
    ratio: 0,
    areaWidthStartsPixel: 0,
    areaHeightStartsPixel: 0,
  });
  useEffect(() => {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    const height =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    calculateQuadrantAreaWidth(width, height);
  }, []);

  const calculateQuadrantAreaWidth = (width: number, height: number) => {
    let areaWidth = (width * 45) / 100;
    let areaHeight = (height * 70) / 100;
    let ratio = width / height;
    setArea({
      width: areaWidth,
      height: areaHeight,
      ratio: ratio,
      areaWidthStartsPixel: 0,
      areaHeightStartsPixel: (height - (height * 70) / 100) / 2,
    });
  };
  const _dragStart = (
    e: {
      screenX: number;
      screenY: number;
      currentTarget: { getBoundingClientRect: Function };
    },
    label: string
  ) => {};

  const _dragging = (
    e: {
      screenX: number;
      clientY: number;
      clientX: number;
      screenY: number;
      currentTarget: { getBoundingClientRect: Function };
    },
    label: string
  ) => {
    let tmpVision = (e.clientX * 100) / area?.width;
    let tmpAbility =
      100 - ((e.clientY - area?.areaHeightStartsPixel) / area?.height) * 100;

    setData(
      [...data].map((object) => {
        if (object.label === label) {
          return {
            ...object,
            vision: tmpVision > 100 ? 100 : tmpVision < 0 ? 0 : tmpVision,
            ability: tmpAbility > 100 ? 100 : tmpAbility < 0 ? 0 : tmpAbility,
          };
        } else return object;
      })
    );
  };
  const _dragEnd = (
    e: {
      clientX: number;
      screenX: number;
      clientY: number;
      screenY: number;
    },
    label: string
  ) => {
    let tmpVision = (e.clientX * 100) / area?.width;
    let tmpAbility =
      100 - ((e.clientY - area?.areaHeightStartsPixel) / area?.height) * 100;

    setData(
      [...data].map((object) => {
        if (object.label === label) {
          return {
            ...object,
            vision: tmpVision > 100 ? 100 : tmpVision < 0 ? 0 : tmpVision,
            ability: tmpAbility > 100 ? 100 : tmpAbility < 0 ? 0 : tmpAbility,
            // vision: 50,
            // ability: 80,
          };
        } else return object;
      })
    );
  };

  return (
    <>
      <StyledQuadrant>
        {data?.map((dot, key) => {
          return (
            <Dot
              item={dot}
              key={key}
              area={area}
              _dragStart={_dragStart}
              _dragging={_dragging}
              _dragEnd={_dragEnd}
            />
          );
        })}
        <div className="xAxis"></div>
        <div className="yAxis"></div>
        <div className="area-title top left">Challengers</div>
        <div className="area-title top right">Leaders</div>
        <div className="area-title bottom left">Niche Players</div>
        <div className="area-title bottom right">Visionaries</div>
      </StyledQuadrant>
    </>
  );
};

export default Quadrant;

const StyledQuadrant = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0% 0%;
  background-color: white;
  border: 2px solid #696969;
  position: relative;

  .area-title {
    padding: 2px 10px;
    color: white;
    background-color: #adb9c3;
    border-radius: 8px;
  }
  .top {
    display: block;
    position: absolute;
    top: 3%;
  }
  .left {
    display: block;
    position: absolute;
    left: 15%;
  }
  .bottom {
    display: block;
    position: absolute;
    bottom: 3%;
  }
  .right {
    display: block;
    position: absolute;
    right: 15%;
  }
  .xAxis {
    display: block;
    position: absolute;
    left: 0%;
    background-color: #e3e4e7;
    width: 100%;
    height: 2px;
  }
  .yAxis {
    background-color: #e3e4e7;
    display: block;
    position: absolute;
    top: 0%;
    width: 2px;
    height: 100%;
  }
`;
