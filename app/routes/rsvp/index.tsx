import FormHeader from '~/components/FormHeader';
import Button from '~/components/reusable/Button';

export default function Index() {
  return (
    <>
      <FormHeader />
      <h1 className="text-neutral-800 text-2xl font-bold mb-3">
        Contact Details
      </h1>
      <label
        htmlFor="name"
        className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
      >
        Name{' '}
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
        className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
      >
        Surname{' '}
      </label>
      <input
        type="text"
        id="surname"
        name="surname"
        autoComplete="off"
        className="border border-neutral-300 rounded-md p-2 mb-5"
      />
      <label
        htmlFor="email"
        className="text-neutral-800 font-bold lg:text-lg after:content-['*'] after:ml-px after:text-red-500"
      >
        Email{' '}
      </label>
      <input
        type="email"
        id="email"
        name="email"
        autoComplete="off"
        className="border border-neutral-300 rounded-md p-2 mb-5"
      />
      <legend className="text-neutral-800 font-bold mt-1 lg:text-lg">
        Will you and your family/group have a car?
      </legend>
      <label className="mt-2 w-max">
        <input
          type="radio"
          name="car"
          value="no"
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        No
      </label>
      <label className="mt-2 w-max">
        <input
          type="radio"
          name="car"
          value="yes"
          className="accent-cyan-600 mr-2 cursor-pointer"
        />
        Yes
      </label>
      <legend className="text-neutral-800 font-bold mt-5 lg:text-lg">
        How many people are you completing the RSVP for?
      </legend>
      <p className="text-sm text-neutral-600 mb-2">
        Attention: that should also include yourself
      </p>
      <label
        htmlFor="group-number-more-12"
        className="text-neutral-800 font-bold lg:text-lg"
      >
        12+ years old{' '}
      </label>
      <select
        id="group-number-more-12"
        name="group-number-more-12"
        className="border border-neutral-300 rounded-md p-3 mb-5 cursor-pointer"
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
      <label
        htmlFor="group-number-6-12"
        className="text-neutral-800 font-bold lg:text-lg"
      >
        6-to-12 years old{' '}
      </label>
      <select
        id="group-number-6-12"
        name="group-number-6-12"
        className="border border-neutral-300 rounded-md p-3 mb-5 cursor-pointer"
      >
        <option value="0">0</option>
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
      <label
        htmlFor="group-number-less-6"
        className="text-neutral-800 font-bold lg:text-lg"
      >
        0-to-6 years old{' '}
      </label>
      <select
        id="group-number-less-6"
        name="group-number-less-6"
        className="border border-neutral-300 rounded-md p-3 mb-5 cursor-pointer"
      >
        <option value="0">0</option>
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
