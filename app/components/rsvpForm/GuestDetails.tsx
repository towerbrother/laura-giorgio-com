type GuestDetailsProps = {
  num: string;
  type: string;
  fieldErrors?: any;
};

const GuestDetails = ({ num, type, fieldErrors }: GuestDetailsProps) => {
  const name = `name${type}${num}`;
  const date = `date${type}${num}`;
  const foodPreference = `foodPreference${type}${num}`;

  const fieldErrorName = fieldErrors !== undefined ? fieldErrors[name] : null;
  const fieldErrorDate = fieldErrors !== undefined ? fieldErrors[date] : null;
  const fieldErrorFoodPreference =
    fieldErrors !== undefined ? fieldErrors[foodPreference] : null;

  return (
    <div className="border border-neutral-300 rounded-md p-4 flex flex-col mb-3">
      <div className="flex justify-start items-center">
        <label
          htmlFor="name"
          className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
        >
          {`${type} #${num} - Full Name`}{' '}
        </label>
        <p className="text-xs text-red-600 ml-4">
          {fieldErrorName ? fieldErrorName : <>&nbsp;</>}
        </p>
      </div>
      <input
        type="text"
        id="name"
        name={name}
        autoComplete="off"
        placeholder={`${type} #${num} Full Name ...`}
        className={`border ${
          fieldErrorName ? 'border-red-600' : 'border-neutral-300'
        } rounded-md p-2 mb-4 mt-1`}
      />
      <div className="flex justify-start items-center">
        <label
          htmlFor="date"
          className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
        >
          Date of arrival{' '}
        </label>
        <p className="text-xs text-red-600 ml-4">
          {fieldErrorDate ? fieldErrorDate : <>&nbsp;</>}
        </p>
      </div>
      <select
        id="date"
        name={date}
        className={`border ${
          fieldErrorDate ? 'border-red-600' : 'border-neutral-300'
        } rounded-md p-3 mb-4 mt-1 cursor-pointer`}
      >
        <option value="">Choose an option</option>
        <option value="friday">Friday, 28th July</option>
        <option value="saturday">Saturday, 29th July</option>
      </select>
      <div className="flex justify-start items-center">
        <label
          htmlFor="date"
          className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
        >
          I would like to eat...{' '}
        </label>{' '}
        <p className="text-xs text-red-600 ml-4">
          {fieldErrorFoodPreference ? fieldErrorFoodPreference : <>&nbsp;</>}
        </p>
      </div>
      <select
        id="foodPreference"
        name={foodPreference}
        className={`border ${
          fieldErrorFoodPreference ? 'border-red-600' : 'border-neutral-300'
        } rounded-md p-3 mb-4 mt-1 cursor-pointer`}
      >
        <option value="">Choose an option</option>
        <option value="meat">Meat 🍖</option>
        <option value="fish">Fish 🐟</option>
        <option value="vegetarian">Vegetarian 🥗</option>
      </select>
      <legend className="text-neutral-800 font-bold lg:text-lg">
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
