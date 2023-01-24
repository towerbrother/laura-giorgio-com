import Button from '~/components/reusable/Button';

export default function Index() {
  return (
    <>
      <h1 className="text-neutral-800 text-2xl font-bold mb-5">
        Guests Details
      </h1>
      <div className="border border-neutral-300 rounded-md p-4 flex flex-col mb-3">
        <label htmlFor="name" className="text-neutral-800 font-bold lg:text-lg">
          Full Name:{' '}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          autoComplete="off"
          className="border border-neutral-300 rounded-md p-2 mb-5"
        />
        <label htmlFor="date" className="text-neutral-800 font-bold lg:text-lg">
          Date of arrival:{' '}
        </label>
        <select
          id="date"
          name="date"
          className="border border-neutral-300 rounded-md p-2 mb-5 cursor-pointer"
        >
          <option value="">Choose an option</option>
          <option value="thursday">Thursday, 27th July</option>
          <option value="friday">Friday, 28th July</option>
          <option value="saturday">Saturday, 29th July</option>
        </select>
        <legend className="text-neutral-800 font-bold lg:text-lg">
          Food preference:
        </legend>
        <label className="mt-2 w-max">
          <input
            type="radio"
            name="food-preference"
            value="meat"
            className="accent-cyan-600 mr-2 cursor-pointer"
          />
          Meat 🍖
        </label>
        <label className="mt-2 w-max">
          <input
            type="radio"
            name="food-preference"
            value="fish"
            className="accent-cyan-600 mr-2 cursor-pointer"
          />
          Fish 🥠
        </label>
        <label className="mt-2 w-max">
          <input
            type="radio"
            name="food-preference"
            value="vegetarian"
            className="accent-cyan-600 mr-2 cursor-pointer"
          />
          Vegetarian 🥗
        </label>
      </div>
      <Button
        type="submit"
        className="border-none bg-cyan-600 text-neutral-100 font-bold rounded-md p-2 mt-5 w-full md:w-max md:px-5 md:text-lg lg:text-xl"
      >
        NEXT
      </Button>
    </>
  );
}
