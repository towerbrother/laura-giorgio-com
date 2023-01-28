type GuestDetailsProps = {
  num: string;
  type: string;
  fieldErrors?: any;
  rsvp?: any;
  rsvpGuestsDetails?: any;
};

const GuestDetails = ({
  num,
  type,
  fieldErrors,
  rsvp,
  rsvpGuestsDetails,
}: GuestDetailsProps) => {
  const name = `name${type}${num}`;
  const date = `date${type}${num}`;
  const food = `food${type}${num}`;
  const allergyGluten = `allergy${type}${num}Gluten`;
  const allergyEggs = `allergy${type}${num}Eggs`;
  const allergyShellfish = `allergy${type}${num}Shellfish`;
  const allergyNuts = `allergy${type}${num}Nuts`;
  const allergyMilk = `allergy${type}${num}Milk`;

  const fieldErrorName = fieldErrors !== undefined ? fieldErrors[name] : null;
  const fieldErrorDate = fieldErrors !== undefined ? fieldErrors[date] : null;
  const fieldErrorFood = fieldErrors !== undefined ? fieldErrors[food] : null;

  const rsvpNameValue = rsvp ? rsvp[name] : '';
  const rsvpDateValue = rsvp ? rsvp[date] : '';
  const rsvpFoodValue = rsvp ? rsvp[food] : '';
  const rsvpAllergyGlutenValue = rsvp ? rsvp[allergyGluten] : '';
  const rsvpAllergyEggsValue = rsvp ? rsvp[allergyEggs] : '';
  const rsvpAllergyShellfishValue = rsvp ? rsvp[allergyShellfish] : '';
  const rsvpAllergyNutsValue = rsvp ? rsvp[allergyNuts] : '';
  const rsvpAllergyMilkValue = rsvp ? rsvp[allergyMilk] : '';

  console.log({ rsvpGuestsDetails });

  return (
    <div className="border border-neutral-300 rounded-md p-4 flex flex-col mb-3">
      <div className="flex justify-start items-center">
        <label
          htmlFor="name"
          className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
        >
          {`${type} #${num} - ${rsvpGuestsDetails?.form?.name}`}{' '}
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
        placeholder={`${type} #${num} ${rsvpGuestsDetails?.form?.name} ...`}
        defaultValue={rsvpNameValue}
        className={`border ${
          fieldErrorName ? 'border-red-600' : 'border-neutral-300'
        } rounded-md p-2 mb-4 mt-1`}
      />
      <div className="flex justify-start items-center">
        <label
          htmlFor="date"
          className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
        >
          {rsvpGuestsDetails?.form?.date?.label}
        </label>
        <p className="text-xs text-red-600 ml-4">
          {fieldErrorDate ? fieldErrorDate : <>&nbsp;</>}
        </p>
      </div>
      <select
        id="date"
        name={date}
        defaultValue={rsvpDateValue}
        className={`border ${
          fieldErrorDate ? 'border-red-600' : 'border-neutral-300'
        } rounded-md p-3 mb-4 mt-1 cursor-pointer`}
      >
        <option value="">{rsvpGuestsDetails?.form?.date?.options?.base}</option>
        <option value="friday">
          {rsvpGuestsDetails?.form?.date?.options?.friday}
        </option>
        <option value="saturday">
          {rsvpGuestsDetails?.form?.date?.options?.saturday}
        </option>
      </select>
      <div className="flex justify-start items-center">
        <label
          htmlFor="date"
          className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
        >
          {rsvpGuestsDetails?.form?.food?.label}
        </label>{' '}
        <p className="text-xs text-red-600 ml-4">
          {fieldErrorFood ? fieldErrorFood : <>&nbsp;</>}
        </p>
      </div>
      <select
        id="food"
        name={food}
        defaultValue={rsvpFoodValue}
        className={`border ${
          fieldErrorFood ? 'border-red-600' : 'border-neutral-300'
        } rounded-md p-3 mb-4 mt-1 cursor-pointer`}
      >
        <option value="">{rsvpGuestsDetails?.form?.food?.options?.base}</option>
        <option value="meat">
          {rsvpGuestsDetails?.form?.food?.options?.meat}
        </option>
        <option value="fish">
          {rsvpGuestsDetails?.form?.food?.options?.fish}
        </option>
        <option value="vegetarian">
          {rsvpGuestsDetails?.form?.food?.options?.vegan}
        </option>
      </select>
      <legend className="text-neutral-800 font-bold lg:text-lg">
        {rsvpGuestsDetails?.form?.allergy?.label}
      </legend>
      <label className="mt-2 w-max">
        <input
          type="checkbox"
          name={allergyGluten}
          defaultChecked={rsvpAllergyGlutenValue}
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        {rsvpGuestsDetails?.form?.allergy?.options?.gluten}
      </label>
      <label className="mt-2 w-max">
        <input
          type="checkbox"
          name={allergyEggs}
          defaultChecked={rsvpAllergyEggsValue}
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        {rsvpGuestsDetails?.form?.allergy?.options?.eggs}
      </label>
      <label className="mt-2 w-max">
        <input
          type="checkbox"
          name={allergyShellfish}
          defaultChecked={rsvpAllergyShellfishValue}
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        {rsvpGuestsDetails?.form?.allergy?.options?.shellfish}
      </label>
      <label className="mt-2 w-max">
        <input
          type="checkbox"
          name={allergyNuts}
          defaultChecked={rsvpAllergyNutsValue}
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        {rsvpGuestsDetails?.form?.allergy?.options?.nuts}
      </label>
      <label className="mt-2 w-max">
        <input
          type="checkbox"
          name={allergyMilk}
          defaultChecked={rsvpAllergyMilkValue}
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        {rsvpGuestsDetails?.form?.allergy?.options?.milk}
      </label>
    </div>
  );
};

export default GuestDetails;
