import React from 'react'
import StartupForm from "@/components/StartupForm";
import {auth} from "@/auth";
import {redirect} from "next/navigation";

const Page = async() => {
  const session = await auth();

  if(!session) redirect('/');

  return (
    <div>
      <section className={"pink_container !min-h-[230px]"}>
        <h1 className={`heading !font-comic-neue`}>Submit Your Startup Pitch</h1>
      </section>
      <StartupForm/>
    </div>
  )
}
export default Page
