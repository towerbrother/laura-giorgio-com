type GuestDetailsProps = {
  num: string;
  type: string;
};

const GuestDetails = ({ num, type }: GuestDetailsProps) => {
  return (
    <div className="border border-neutral-300 rounded-md p-4 flex flex-col mb-3">
      <label
        htmlFor="name"
        className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
      >
        {`${type} #${num} - Full Name`}{' '}
      </label>
      <input
        type="text"
        id="name"
        name={`name${type}${num}`}
        autoComplete="off"
        placeholder={`${type} #${num} Full Name ...`}
        className="border border-neutral-300 rounded-md p-2 mb-5"
      />
      <label
        htmlFor="date"
        className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
      >
        Date of arrival{' '}
      </label>
      <select
        id="date"
        name={`date${type}${num}`}
        className="border border-neutral-300 rounded-md p-3 mb-5 cursor-pointer"
      >
        <option value="">Choose an option</option>
        <option value="friday">Friday, 28th July</option>
        <option value="saturday">Saturday, 29th July</option>
      </select>
      <legend className="text-neutral-800 font-bold mt-1 lg:text-lg after:content-['*'] after:ml-px after:text-red-500">
        I would like to eat...
      </legend>
      <label className="mt-2 w-max">
        <input
          type="radio"
          name={`foodPreference${type}${num}`}
          value="meat"
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        Meat 🍖
      </label>
      <label className="mt-2 w-max">
        <input
          type="radio"
          name={`foodPreference${type}${num}`}
          value="fish"
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        Fish 🐟
      </label>
      <label className="mt-2 w-max">
        <input
          type="radio"
          name={`foodPreference${type}${num}`}
          value="vegetarian"
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        Vegetarian 🥗
      </label>
      <legend className="text-neutral-800 font-bold mt-4 lg:text-lg">
        I am allergic/intollerant to...
      </legend>
      <label className="mt-2 w-max">
        <input
          type="checkbox"
          name={`allergies${type}${num}`}
          value="gluten"
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        Gluten 🥨
      </label>
      <label className="mt-2 w-max">
        <input
          type="checkbox"
          name={`allergies${type}${num}`}
          value="eggs"
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        Eggs 🍳
      </label>
      <label className="mt-2 w-max">
        <input
          type="checkbox"
          name={`allergies${type}${num}`}
          value="shellfish"
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        Shellfish 🦐
      </label>
      <label className="mt-2 w-max">
        <input
          type="checkbox"
          name={`allergies${type}${num}`}
          value="nuts"
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        Nuts 🥜
      </label>
      <label className="mt-2 w-max">
        <input
          type="checkbox"
          name={`allergies${type}${num}`}
          value="milk"
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        Milk 🥛
      </label>
    </div>
  );
};

export default GuestDetails;
