import Testimonial from "./Testimonial";
import { graduates } from "../constants/testimonialsData.js";

const TestimonialContainer = () => {
  return (
    <main className="mx-auto max-w-[87%] space-y-6 py-[71px] sm:grid sm:max-w-[1150px] sm:grid-cols-4 sm:grid-rows-[repeat(2,auto)] sm:gap-x-[1.875rem] sm:gap-y-6 sm:space-y-0 sm:px-5 sm:py-0 sm:pt-[10.25rem]">
      {graduates.map((graduate, index) => {
        let gridClasses = "";

        switch (index) {
          case 0:
            gridClasses =
              "sm:col-start-1 sm:col-end-3 sm:row-start-1 sm:row-end-2 sm:pt-[1.625rem]";
            break;
          case 1:
            gridClasses =
              "sm:col-start-3 sm:col-end-4 sm:row-start-1 sm:row-end-2 sm:pt-[1.625rem]";
            break;
          case 2:
            gridClasses =
              "sm:col-start-1 sm:col-end-2 sm:row-start-2 sm:row-end-3 sm:py-[1.625rem]";
            break;
          case 3:
            gridClasses =
              "sm:col-start-2 sm:col-end-4 sm:row-start-2 sm:row-end-3 sm:py-[1.625rem]";
            break;
          case 4:
            gridClasses =
              "sm:col-start-4 sm:col-end-5 sm:row-start-1 sm:row-end-3 sm:py-[1.625rem]";
            break;
        }

        return (
          <Testimonial
            graduate={graduate}
            key={graduate.id}
            gridClasses={gridClasses}
          />
        );
      })}
    </main>
  );
};

export default TestimonialContainer;
