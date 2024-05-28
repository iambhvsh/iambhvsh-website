import Highlight from '../Utils/Highlight';

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold italic tracking-tighter leading-tight md:pr-8">
        <Highlight>iambhvsh</Highlight>
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Hi&nbsp;
        <span role="img" aria-label="wave">👋🏻</span>
        , I&apos;m Bhavesh Patil. Welcome to my Next.js Blog!
      </h4>
    </section>
  );
}
