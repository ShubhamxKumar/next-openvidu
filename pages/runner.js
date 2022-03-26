import styles from "../styles/Home.module.css";

import dynamic from "next/dynamic";

const OpenViduComp = dynamic(() => import("../component/openviducomp"), {
  // Do not import in server side
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.container}>
      <OpenViduComp />
    </div>
  );
}
