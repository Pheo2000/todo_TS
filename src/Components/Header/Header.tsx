import React from "react";
import classes from "./Header.module.css";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hook";
import { cong, tru, nhan, chia } from "../../store";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const [first, setFirstValue] = useState(0);
  const [second, setScondValue] = useState(0);

  const KQ = useAppSelector((state) => state.ok);

  return (
    <div>
      <h1>Redux Toolkit</h1>
      <div>
        <label className={classes.label} htmlFor="text1">
          Giá trị 1:
        </label>
        <input
          onChange={(event) => {
            setFirstValue(Number(event.target.value));
          }}
          type="number"
          id=" text1"
        />
      </div>

      <div>
        <label className={classes.label} htmlFor="text2">
          Giá trị 2:
        </label>
        <input
          onChange={(event) => {
            setScondValue(Number(event.target.value));
          }}
          type="number"
          id="text2"
        />
      </div>
      <button
        className={classes.button}
        onClick={() =>
          dispatch(cong({ firstValue: first, secondValue: second }))
        }
      >
        Cộng
      </button>
      <button
        className={classes.button}
        onClick={() =>
          dispatch(tru({ firstValue: first, secondValue: second }))
        }
      >
        Trừ
      </button>
      <button
        className={classes.button}
        onClick={() =>
          dispatch(nhan({ firstValue: first, secondValue: second }))
        }
      >
        Nhân
      </button>
      <button
        className={classes.button}
        onClick={() =>
          dispatch(chia({ firstValue: first, secondValue: second }))
        }
      >
        Chia
      </button>

      <h3>Kết Quả: {KQ.total}</h3>
    </div>
  );
};

export default Header;
