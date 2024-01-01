import Head from "next/head";
import { barlow } from "~/helpers/fonts";

import { api } from "~/utils/api";

export default function Home(props) {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
    <div className={barlow.className}>
    
      <Head>
        <title>multiplying_in_the_shadows</title>
        <meta name="description" content="by Kerem Sakarya" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
         
         <h1 className="text-7xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Multiplying <span className="text-[hsl(280,100%,70%)]">in the</span> shadows
          </h1>

<div>
          <p className="text-2xl text-white">
            by Kerem Sakarya
          </p>



          <Main_App />


 
</div>


        </div>
      </main>
      </div>
    </>
  );
}

const KucukKare = () => {
  return (
    <div style={
      {
        width: "60px",
        height: "60px",
        backgroundColor: "gray",
        marginTop: "30px",
      }
    }>
   
    </div>
  )
}

const One_Row = () => {
  return (
    <div className="flex flex-row gap-1 items-center">
      <KucukKare />
      <KucukKare />
      <KucukKare />
      <KucukKare />

    </div>
  )
}



const Main_App = () => {
  return (
    <One_Row />
  )
}

