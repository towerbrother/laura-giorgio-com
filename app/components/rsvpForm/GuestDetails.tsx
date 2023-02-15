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
        defaultValue={rsvp?.guestsDetails ? rsvp?.guestsDetails[name] : ''}
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
        defaultValue={rsvp?.guestsDetails ? rsvp?.guestsDetails[food] : ''}
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
        <option value="vegan">
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
          defaultChecked={
            rsvp?.guestsDetails ? rsvp?.guestsDetails[allergyGluten] : ''
          }
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        {rsvpGuestsDetails?.form?.allergy?.options?.gluten}
      </label>
      <label className="mt-2 w-max">
        <input
          type="checkbox"
          name={allergyEggs}
          defaultChecked={
            rsvp?.guestsDetails ? rsvp?.guestsDetails[allergyEggs] : ''
          }
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        {rsvpGuestsDetails?.form?.allergy?.options?.eggs}
      </label>
      <label className="mt-2 w-max">
        <input
          type="checkbox"
          name={allergyShellfish}
          defaultChecked={
            rsvp?.guestsDetails ? rsvp?.guestsDetails[allergyShellfish] : ''
          }
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        {rsvpGuestsDetails?.form?.allergy?.options?.shellfish}
      </label>
      <label className="mt-2 w-max">
        <input
          type="checkbox"
          name={allergyNuts}
          defaultChecked={
            rsvp?.guestsDetails ? rsvp?.guestsDetails[allergyNuts] : ''
          }
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        {rsvpGuestsDetails?.form?.allergy?.options?.nuts}
      </label>
      <label className="mt-2 w-max">
        <input
          type="checkbox"
          name={allergyMilk}
          defaultChecked={
            rsvp?.guestsDetails ? rsvp?.guestsDetails[allergyMilk] : ''
          }
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        {rsvpGuestsDetails?.form?.allergy?.options?.milk}
      </label>
    </div>
  );
};

export default GuestDetails;
