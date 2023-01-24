import Button from '~/components/reusable/Button';

export default function Index() {
  return (
    <>
      <h1 className="text-neutral-800 text-2xl font-bold mb-5">
        Contact Details
      </h1>
      <label htmlFor="name" className="text-neutral-800 font-bold lg:text-lg">
        Name:{' '}
      </label>
      <input
        type="text"
        id="name"
        name="name"
        autoComplete="off"
        className="border border-neutral-300 rounded-md p-2 mb-5"
      />
      <label
        htmlFor="surname"
        className="text-neutral-800 font-bold lg:text-lg"
      >
        Surname:{' '}
      </label>
      <input
        type="text"
        id="surname"
        name="surname"
        autoComplete="off"
        className="border border-neutral-300 rounded-md p-2 mb-5"
      />
      <label htmlFor="email" className="text-neutral-800 font-bold lg:text-lg">
        Email:{' '}
      </label>
      <input
        type="email"
        id="email"
        name="email"
        autoComplete="off"
        className="border border-neutral-300 rounded-md p-2 mb-5"
      />
      <label
        htmlFor="group-number"
        className="text-neutral-800 font-bold lg:text-lg"
      >
        Number of people in your group:{' '}
      </label>
      <p className="text-sm text-neutral-600 mb-2">
        Attention: Include also yourself
      </p>
      <select
        id="group-number"
        name="group-number"
        className="border border-neutral-300 rounded-md p-2 mb-5 cursor-pointer"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>
      <Button
        type="submit"
        className="border-none bg-cyan-600 text-neutral-100 font-bold rounded-md p-2 mt-5 w-full md:w-max md:px-5 md:text-lg lg:text-xl"
      >
        NEXT
      </Button>
    </>
  );
}
