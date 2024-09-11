import Testimonial from "./Testimonial"
import { graduates } from "../constants"

const TestimonialContainer = () => {
  return (
  <main className="py-[71px] space-y-6">
    {
        graduates.map((graduate)=>(
            <Testimonial graduate={graduate} key={graduate.id} />
        ))

    }
  </main>
  )
}

export default TestimonialContainer
