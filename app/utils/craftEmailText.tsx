export function craftEmail(input: {
  [key: string]: { [key: string]: string };
}) {
  return `${input.contactDetails.mainGuestName} ${
    input.contactDetails.mainGuestSurname
  } (${input.contactDetails.mainGuestEmail}) submitted the RSVP on behalf of ${
    input.contactDetails.guestsCount
  } ${Number(input.contactDetails.guestsCount) > 1 ? 'people' : 'person'}\n${
    Number(input.contactDetails.guestsCount) > 1 ? 'His/Her group' : 'He/She'
  } will arrive on ${
    input.contactDetails.arrivalDate?.slice(0, 1).toUpperCase() +
    input.contactDetails.arrivalDate?.slice(1)
  } ${
    input.contactDetails.arrivalDate === 'friday'
      ? 'the 28th July'
      : 'the 29th July'
  }\nAttendee(s):\n${getGuestsDetails(input.guestsDetails)}`;
}

interface Person {
  name: string;
  food: string;
  allergies?: string[];
}

function getGuestsDetails(input: { [key: string]: string }) {
  const result: Person[] = [];

  for (const key in input) {
    const match = key.match(/^(name|food)(\d+)/);

    if (match) {
      const index = Number(match[2]) - 1;
      const type = match[1];
      const value = input[key];

      if (!result[index]) {
        result[index] = { name: '', food: '', allergies: [] };
      }

      (result[index] as any)[type] = value;
    } else {
      const matchAllergy = key.match(/^allergy(\d+)(.*)/);

      if (matchAllergy) {
        const index = Number(matchAllergy[1]) - 1;
        const allergy = matchAllergy[2];

        if (!result[index].allergies) {
          result[index].allergies = [];
        }

        result[index].allergies?.push(allergy);
      }
    }
  }

  let generatedStrings = '';

  result.forEach((person) => {
    let generatedString = `- ${person.name} wants to eat ${person.food}`;

    if (person.allergies) {
      generatedString += ` and is allergic/intolerant to ${person.allergies.join(
        ', '
      )}\n`;
    } else {
      generatedString += ' and has no allergies/intolerances\n';
    }

    generatedStrings += generatedString;
  });

  return generatedStrings;
}
