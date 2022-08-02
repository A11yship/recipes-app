import Head from "next/head";
import Image from "next/image";

export default function Desserts() {
  return (
    <>
      <Head>
        <title>Alle Desserts</title>
      </Head>
      <h1>Desserts</h1>
      <p>Liste aller Desserts</p>
      <Image
        src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
        alt="Nachtisch"
        layout="responsive"
        width={2400}
        height={1599}
      />
    </>
  );
}
