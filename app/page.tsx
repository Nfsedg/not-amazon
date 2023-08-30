import HeaderNav from "./components/HeaderNav"
import CardProducts from "./components/card-products"

export default function Home() {
  return (
    <main className="">
      <nav>
        <HeaderNav/>
      </nav>
      <section>
        <CardProducts/>
      </section>
    </main>
  )
}
