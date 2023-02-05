type GuestDetailsProps = {
  num: string;
  fieldErrors?: any;
  rsvp?: any;
  rsvpGuestsDetails?: any;
};

const GuestDetails = ({
  num,
  fieldErrors,
  rsvp,
  rsvpGuestsDetails,
}: GuestDetailsProps) => {
  const name = `name${num}`;
  const food = `food${num}`;
  const allergyGluten = `allergy${num}Gluten`;
  const allergyEggs = `allergy${num}Eggs`;
  const allergyShellfish = `allergy${num}Shellfish`;
  const allergyNuts = `allergy${num}Nuts`;
  const allergyMilk = `allergy${num}Milk`;

  const fieldErrorName = fieldErrors !== undefined ? fieldErrors[name] : null;
  const fieldErrorFood = fieldErrors !== undefined ? fieldErrors[food] : null;

  const rsvpNameValue = rsvp ? rsvp[name] : '';
  const rsvpFoodValue = rsvp ? rsvp[food] : '';
  const rsvpAllergyGlutenValue = rsvp ? rsvp[allergyGluten] : '';
  const rsvpAllergyEggsValue = rsvp ? rsvp[allergyEggs] : '';
  const rsvpAllergyShellfishValue = rsvp ? rsvp[allergyShellfish] : '';
  const rsvpAllergyNutsValue = rsvp ? rsvp[allergyNuts] : '';
  const rsvpAllergyMilkValue = rsvp ? rsvp[allergyMilk] : '';

  return (
    <div className="border border-neutral-300 rounded-md p-4 flex flex-col mb-3">
      <div className="flex justify-start items-center">
        <label
          htmlFor="name"
          className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
        >
          {`${rsvpGuestsDetails?.guest} #${num} - ${rsvpGuestsDetails?.form?.name}`}{' '}
        </label>
        <p className="text-xs text-red-600 ml-4">
          {fieldErrorName ? fieldErrorName : <>&nbsp;</>}
        </p>
      </div>
      <input
        id="name"
        type="text"
        name={name}
        autoComplete="off"
        placeholder={`${rsvpGuestsDetails?.guest} #${num} ${rsvpGuestsDetails?.form?.name} ...`}
        defaultValue={rsvpNameValue}
        className={`border ${
          fieldErrorName ? 'border-red-600' : 'border-neutral-300'
        } rounded-md p-2 mb-4 mt-1`}
      />
      <div className="flex justify-start items-center">
        <label
          htmlFor="food"
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
