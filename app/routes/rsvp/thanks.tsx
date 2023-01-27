export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center mt-8 lg:mt-12">
      <div className="flex flex-col justify-center items-center p-6 lg:py-8 lg:px-12 w-max">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-neutral-800 mb-4">
          Thank you!
        </h1>
        <p className="text-neutral-800 my-2 text-xs sm:text-base md:text-md lg:text-xl">
          Do you have any further questions or concerns?
        </p>
        <p className="text-neutral-800 my-2 text-xs sm:text-base md:text-md lg:text-xl">
          Drop us an email at{' '}
          <strong>{`laura.giorgio.wedding@gmail.com`}</strong>
        </p>
      </div>
    </div>
  );
}
