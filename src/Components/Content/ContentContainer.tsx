import React from "react";
import Content from "./Content";

export interface Iprops {
  id: number;
  name: string;
  age: number;
}
const ContentContainer: React.FC = () => {
  const USERS: Iprops[] = [
    { id: 1, name: "thinh", age: 22 },
    { id: 2, name: "bao", age: 23 },
    { id: 3, name: "huy", age: 24 },
    { id: 4, name: "bao", age: 25 },
    { id: 5, name: "viet", age: 26 },
    { id: 6, name: "hieu ", age: 27 },
    { id: 7, name: "huy", age: 28 },
    { id: 8, name: "toan", age: 29 },
    { id: 9, name: "toan", age: 45 },
    { id: 10, name: "duy", age: 56 },
    { id: 11, name: "thinh", age: 34 },
  ];
  return <Content users={USERS} />;
};

export default ContentContainer;
