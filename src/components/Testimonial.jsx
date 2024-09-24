const Testimonial = ({ graduate, gridClasses }) => {
  const {
    id,
    image,
    imageAlt,
    imageBorder,
    name,
    title,
    testimonialOverview,
    personalExperienceQuote,
    bgColor,
    bgPattern,
    textColorPrimary,
    blockQuotePaddingMarginTopExtra,
    blockQuotePaddingMarginTopExtraDesk,
    blockQuotePadding,
  } = graduate;
  return (
    <article
      className={`px-8 pb-8 pt-[1.75rem] ${bgColor} rounded-lg shadow-testimonial ${gridClasses} ${bgPattern ? "bg-[position:right_24px_top] sm:bg-[right_80px_top]" : ""}`}
      style={{
        ...(bgPattern && {
          backgroundImage: `url(${bgPattern})`,
          backgroundRepeat: "no-repeat",
        }),
      }}
    >
      <figure className="flex gap-[1.0625rem]">
        <img
          className={`h-[31px] w-[31px] rounded-full ${imageBorder ?? ""}`}
          src={image}
          alt={imageAlt}
        />
        <figcaption>
          <h3
            className={`${textColorPrimary} text-[0.8125rem] leading-[0.8125rem]`}
          >
            {name}
          </h3>
          <p
            className={`${textColorPrimary} mt-1 text-[0.6875rem] leading-[0.6875rem] text-opacity-50`}
          >
            {title}
          </p>
        </figcaption>
      </figure>
      <blockquote className="mt-[1.125rem]">
        <p>
          <strong
            className={`${textColorPrimary} text-[1.25rem] font-semibold leading-none`}
          >
            {testimonialOverview}
          </strong>
        </p>
        <p
          className={`${textColorPrimary} ${blockQuotePaddingMarginTopExtra ? "mt-10" : "mt-4"} text-[0.8125rem] font-normal text-opacity-70 ${blockQuotePadding ?? ""} leading-snug sm:mt-4 sm:pr-0 ${blockQuotePaddingMarginTopExtraDesk ? "sm:mt-6" : "sm:mt-4"}`}
        >
          {personalExperienceQuote}
        </p>
      </blockquote>
    </article>
  );
};

export default Testimonial;
