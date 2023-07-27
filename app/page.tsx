import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import Sidebar from "@/components/sidebar/Sidebar"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2 bg-[#F2F5F7] p-10">
        <h1 className="font-spectral text-3xl font-extralight leading-tight tracking-tighter dark:text-black sm:text-3xl md:text-5xl lg:text-6xl">
          Carbon Tracking and Reporting.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>

      <Sidebar />
    </section>
  )
}
