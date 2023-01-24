import Button from '~/components/reusable/Button';

export default function Index() {
  return (
    <>
      <h1 className="text-neutral-800 text-2xl font-bold mb-3">
        Last step... hurra! 🙌
      </h1>
      <h3 className="text-neutral-800 text-lg font-bold mb-3">
        Thanks for doing that!
      </h3>
      <p className="text-neutral-800 mb-5 text-sm md:text-base">
        Did we forget something you feel is important? Or, do you just want to
        say "Hi"? Use the textarea below. We will read it, promised!
      </p>
      <textarea className="border border-neutral-300 rounded-md p-4 mb-3 h-40 lg:h-52 xl:h-60" />
      <Button
        type="submit"
        className="border-none bg-cyan-600 text-neutral-100 font-bold rounded-md p-2 mt-5 w-full md:w-max md:px-5 md:text-lg lg:text-xl"
      >
        SUBMIT
      </Button>
    </>
  );
}
