import Head from "next/head";
import Image from "next/image";

export default function Veggie() {
  return (
    <>
      <Head>
        <title>Veggie</title>
      </Head>
      <h1>Veggie</h1>
      <p>Viele leckere Veggie Gerichte</p>
      <Image
        src="/../public/pizza.jpg"
        alt="Pizza mit Gemüse"
        layout="responsive"
        width={2400}
        height={1800}
      />
    </>
  );
}
