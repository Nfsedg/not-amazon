import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";

export default async function Home() {

  const supabase = createServerComponentClient({ cookies });
  const { data: countries } = await supabase.from("countries").select();

  return (
    <main className="">
      <section>
        {/* <CardProducts/> */}
      </section>
    </main>
  )
}
