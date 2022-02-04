import { FC, useEffect } from "react";
import styled from "styled-components";

interface Props {
  data: Array<{
    label: string;
    vision: number;
    ability: number;
    component: JSX.Element;
    ref: Object;
    offsets: {
      diffX: number;
      diffY: number;
      dragging: boolean;
      styles: { left: number };
    };
  }>;
  setData(
    arg: Array<{
      label: string;
      vision: number;
      ability: number;
      component: JSX.Element;
      ref: Object;
      offsets: {
        diffX: number;
        diffY: number;
        dragging: boolean;
        styles: { left: number };
      };
    }>
  ): void;
}
interface DotProps {
  ability: number;
  vision: number;
}

const Table: FC<Props> = ({ data, setData, ...props }) => {
  const addDummyData = () => {
    let dummyData: {
      label: string;
      vision: number;
      ability: number;
      component: JSX.Element;
      ref: Object;
      offsets: {
        diffX: number;
        diffY: number;
        dragging: boolean;
        styles: { left: number };
      };
    }[] = [
      {
        label: "1",
        vision: 10,
        ability: 10,
        component: <div className="dot" />,
        ref: {},
        offsets: {
          diffX: 0,
          diffY: 0,
          dragging: false,
          styles: { left: 0 },
        },
      },
      {
        label: "2",
        vision: 40,
        ability: 40,
        component: <div className="dot" />,
        ref: {},
        offsets: {
          diffX: 0,
          diffY: 0,
          dragging: false,
          styles: { left: 0 },
        },
      },
      {
        label: "3",
        vision: 80,
        ability: 30,
        component: <div className="dot" />,
        ref: {},
        offsets: {
          diffX: 0,
          diffY: 0,
          dragging: false,
          styles: { left: 0 },
        },
      },
    ];
    setData(dummyData);
  };

  const changeHandler = (val: string, type: string, index: number) => {
    if (type === "label") {
      setData(
        [...data].map((object) => {
          if (object.vision === data[index].vision) {
            return {
              ...object,
              label: val,
            };
          } else return object;
        })
      );
    }
    if (type === "vision") {
      setData(
        [...data].map((object) => {
          if (object.label === data[index].label) {
            return {
              ...object,
              vision:
                Number(val) > 100 ? 100 : Number(val) < 0 ? 0 : Number(val),
            };
          } else return object;
        })
      );
    }
    if (type === "ability") {
      setData(
        [...data].map((object) => {
          if (object.label === data[index].label) {
            return {
              ...object,
              ability:
                Number(val) > 100 ? 100 : Number(val) < 0 ? 0 : Number(val),
            };
          } else return object;
        })
      );
    }
  };

  const handleDelete = (label: string, index: number) => {
    setData([
      ...data.filter(function (item) {
        return item?.label !== label;
      }),
    ]);
  };

  useEffect(() => {
    // console.log("ttt data")
    // console.log(data)
    // console.log("ttt data")
  }, [data]);

  const handleAddItem = () => {
    let defaultItem: {
      label: string;
      vision: number;
      ability: number;
      component: JSX.Element;
      ref: Object;
      offsets: {
        diffX: number;
        diffY: number;
        dragging: boolean;
        styles: { left: number };
      };
    } = {
      label: "New" + data.length,
      vision: 50,
      ability: 50,
      component: <div className="dot" />,
      ref: {},
      offsets: {
        diffX: 0,
        diffY: 0,
        dragging: false,
        styles: { left: Number("50%") },
      },
    };

    setData([...data, defaultItem]);
  };
  return (
    <>
      <StyledTable>
        <div className="top-row">
          <button
            onClick={() => {
              handleAddItem();
            }}
            className="item"
          >
            Add
          </button>
        </div>
        <div className="table-row">
          <table>
            <tr>
              <th className="item">Label</th>
              <th className="item">Vision</th>
              <th className="item">Ability</th>
              <th className="item">Delete</th>
            </tr>
            {data?.map((item, key) => {
              return (
                <tr key={key}>
                  <td>
                    <input
                      onChange={(e) => {
                        changeHandler(e.target.value, "label", key);
                      }}
                      value={item?.label}
                      className="label-input"
                      type="text"
                    />
                  </td>
                  <td>
                    <input
                      onChange={(e) => {
                        changeHandler(e.target.value, "vision", key);
                      }}
                      value={item?.vision}
                      className="label-input"
                      type="number"
                    />
                  </td>
                  <td>
                    <input
                      onChange={(e) => {
                        changeHandler(e.target.value, "ability", key);
                      }}
                      value={item?.ability}
                      className="label-input"
                      type="number"
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        handleDelete(item?.label, key);
                      }}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </StyledTable>
    </>
  );
};

export default Table;

const StyledTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 90%;
  margin: 1% 5%;
  background-color: white;
  position: relative;

  .top-row {
    display: flex;
    width: 100%;
    height: 40px;
    justify-content: space-between;
    align-items: center;

    .item {
      cursor: pointer;
      border: 0.5px solid darkgray;
      border-radius: 4px;
      background-color: #adb9c3;
      font-size: 15px;
    }
  }

  .table-row {
    justify-content: center;
    align-items: flex-start;
    display: flex;
    background-color: darkgreen;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.8);

    .item {
      background-color: #adb9c3;
      color: white;
      border-radius: 4px;
    }
  }
  .label-input {
    height: 25px;
    width: 95%;
    border-radius: 4px;
  }
  table {
    font-family: arial, sans-serif;
    border-collapse: unset;
    width: 100%;
  }

  td,
  th {
    text-align: center;
    //background-color: #ADB9C3;
  }

  .delete-button {
    cursor: pointer;
    border: 0.5px solid darkgray;
    border-radius: 4px;
    background-color: #adb9c3;
    font-size: 15px;
  }
`;
const Dot = styled.div<DotProps>``;
