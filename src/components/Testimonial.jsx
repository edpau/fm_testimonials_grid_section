const Testimonial = ({ graduate }) => {
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
    blockQuotePadding,
  } = graduate;
  return (
    <article
    className={`mx-auto max-w-[87%] px-8 pb-8 pt-[1.75rem] ${bgColor} shadow-testimonial rounded-lg`}
    style={{ backgroundImage: bgPattern?`url(${bgPattern})`: "none", 
      backgroundRepeat: bgPattern? 'no-repeat': "initial", 
      backgroundPosition: bgPattern? 'right 25px top' : "initial" }}
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
          className={`${textColorPrimary} ${blockQuotePaddingMarginTopExtra ? "mt-10" : "mt-4"} text-[0.8125rem] text-opacity-70 ${blockQuotePadding ?? ""} leading-snug`}
        >
          {personalExperienceQuote}
        </p>
      </blockquote>
    </article>
  );
};

export default Testimonial;
