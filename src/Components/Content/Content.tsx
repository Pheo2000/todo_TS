import React from "react";
import { Iprops } from "./ContentContainer";
import classes from "./Content.module.css";
import { useState } from "react";

interface UserList {
  users: Iprops[];
}

const Content: React.FC<UserList> = ({ users }) => {
  const [name, setname] = useState("");

  // =>>> th này thì  không hiển thị gì biết có tên  gì thì tim mới ra
  const [listUsers, setListusers] = useState<Iprops[] | undefined>();

  // Hoăc  như này: th này thì hiển thị tất cả danh  sách
  // const [listUsers, setListusers] = useState(users);

  const handlerChage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    console.log("okok", keyword);
    // setname(keyword);
    //  Trường hợp 1
    if (keyword !== "") {
      const resulst = users.filter((user) =>
        user.name.toLowerCase().startsWith(keyword.toLowerCase())
      );
      setListusers(resulst);
    } else {
      setListusers(users);
    }
    setname(keyword);
  };
  // Trường hợp 2
  // const handlerSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const resulst = users.filter((user) =>
  //     user.name.toLowerCase().includes(name.toLowerCase())
  //   );
  //   setListusers(resulst);
  // };
  return (
    <div className={classes.container}>
      <input
        value={name}
        type="search"
        onChange={handlerChage}
        placeholder="Search....."
        className={classes.input}
      />
      {/* <button onClick={handlerSearch}> Search</button> */}
      <ul className={classes.userlist}>
        {listUsers && listUsers.length > 0 ? (
          listUsers.map((user) => (
            <li key={user.id} className={classes.user}>
              <span className={classes.userid}>{user.id}</span>
              <span className={classes.username}>{user.name}</span>
              <span className={classes.userage}>{user.age}</span>
            </li>
          ))
        ) : (
          <h2> Không có tên này nhé !!!!!!!!! </h2>
        )}
      </ul>
    </div>
  );
};

export default Content;
