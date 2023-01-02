import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Header from "../Components/Header/Header";
import Content from "../Components/Content";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Content />
    </div>
  );
};

export default Home;
