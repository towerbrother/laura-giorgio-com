type Params = {
  rsvp: { [key: string]: { [key: string]: string } };
  language: string;
};

export function mapTemplateParams({ rsvp, language }: Params) {
  return {
    mainGuestName: rsvp.contactDetails.mainGuestName,
    mainGuestEmail: rsvp.contactDetails.mainGuestEmail,
    email: craftEmail({ rsvp, language }),
    details:
      rsvp.contactDetails.isAttending === 'attending'
        ? craftDetails({ rsvp, language })
        : null,
  };
}

function craftEmail({ rsvp, language }: Params) {
  if (rsvp.contactDetails.isAttending === 'attending') {
    switch (language) {
      case 'en':
        return `Dear ${rsvp.contactDetails.mainGuestName},\n\nThank you for confirming your participation. We look forward to seeing you and celebrating together.\n\nSee you on the 29th of July!\n\nWarmest regards,\n\nGiorgio, Laura & Juni (●'◡'●)`;
      case 'de':
        return `Liebe(r) ${rsvp.contactDetails.mainGuestName},\n\nDanke, dass Ihr Eure Teilnahme bestätigt habt. Wir freuen uns auf Euch und das gemeinsame Feiern.\n\nBis zum 29. Juli!\n\nAlles Liebe,\n\nGiorgio, Laura & Juni (●'◡'●)`;
      case 'it':
        return `Caro/a ${rsvp.contactDetails.mainGuestName},\n\nGrazie per aver confermato la tua partecipazione. Non vediamo l'ora di vederti e festeggiare insieme.\n\nCi vediamo il 29 luglio!\n\nCordiali saluti,\n\nGiorgio, Laura & Juni (●'◡'●)`;
      default:
        return `Dear ${rsvp.contactDetails.mainGuestName},\n\nThank you for confirming your participation. We look forward to seeing you and celebrating together.\n\nSee you on the 29th July!\n\nWarmest regards,\n\nGiorgio, Laura & Juni (●'◡'●)`;
    }
  }

  if (rsvp.contactDetails.isAttending === 'notAttending') {
    switch (language) {
      case 'en':
        return `Dear ${rsvp.contactDetails.mainGuestName},\n\nThank you for completing the RSVP. It's a pity that you can't come and celebrate with us. We hope that we'll have the opportunity to see you soon.\n\nBest regards,\n\nGiorgio, Laura & Juni (●'◡'●)`;
      case 'de':
        return `Liebe(r) ${rsvp.contactDetails.mainGuestName},\n\nDanke, dass Ihr das RSVP ausgefüllt habt. Schade, dass Ihr nicht kommen könnt und mit uns feiern könnt.\n\nAlles Liebe,\n\nGiorgio, Laura & Juni (●'◡'●)`;
      case 'it':
        return `Caro/a ${rsvp.contactDetails.mainGuestName},\n\nGrazie per aver completato l'RSVP. È un peccato che tu non possa venire a festeggiare con noi.\n\nSperiamo di avere l'opportunità di vederci presto.\n\nCordiali saluti,\n\nGiorgio, Laura & Juni (●'◡'●)`;
      default:
        return `Dear ${rsvp.contactDetails.mainGuestName},\n\nThank you for completing the RSVP. It's a pity that you can't come and celebrate with us. We hope that we'll have the opportunity to see you soon.\n\nBest regards,\n\nGiorgio, Laura & Juni (●'◡'●)`;
    }
  }

  return null;
}

function craftDetails({ rsvp, language }: Params) {
  switch (language) {
    case 'en':
      return `${rsvp.contactDetails.mainGuestName} ${
        rsvp.contactDetails.mainGuestSurname
      } (${
        rsvp.contactDetails.mainGuestEmail
      }) submitted the RSVP on behalf of ${rsvp.contactDetails.guestsCount} ${
        Number(rsvp.contactDetails.guestsCount) > 1 ? 'people' : 'person'
      }.\n${
        Number(rsvp.contactDetails.guestsCount) > 1 ? 'His/Her group' : 'He/She'
      } will arrive on ${
        rsvp.contactDetails.arrivalDate === 'friday'
          ? 'Friday the 28th July'
          : 'Saturday the 29th July'
      }.\nAttendee(s):\n${getGuestsDetails(rsvp.guestsDetails)}`;
    case 'de':
      return `${rsvp.contactDetails.mainGuestName} ${
        rsvp.contactDetails.mainGuestSurname
      } (${rsvp.contactDetails.mainGuestEmail}) reichte die RSVP im Namen von ${
        rsvp.contactDetails.guestsCount
      } ${
        Number(rsvp.contactDetails.guestsCount) > 1 ? 'Leute' : 'Person'
      } ein.\n${
        Number(rsvp.contactDetails.guestsCount) > 1
          ? 'Seine/Ihre Gruppe'
          : 'Er/Sie'
      } wird am ${
        rsvp.contactDetails.arrivalDate === 'friday'
          ? 'Freitag 28. Juli'
          : 'Samstag 29. Juli'
      } ankommen.\nTeilnehmer/Teilnehmerinnen:\n${getGuestsDetails(
        rsvp.guestsDetails
      )}`;
    case 'it':
      return `${rsvp.contactDetails.mainGuestName} ${
        rsvp.contactDetails.mainGuestSurname
      } (${rsvp.contactDetails.mainGuestEmail}) ha compilato l'RSVP per ${
        rsvp.contactDetails.guestsCount
      } ${
        Number(rsvp.contactDetails.guestsCount) > 1 ? 'persone' : 'persona'
      }.\n${
        Number(rsvp.contactDetails.guestsCount) > 1
          ? 'Il suo gruppo'
          : 'Lui/Lei'
      } arriverà ${
        rsvp.contactDetails.arrivalDate === 'friday'
          ? 'Venerdì 28 Luglio'
          : 'Sabato 29 Luglio'
      }.\nPartecipante/i:\n${getGuestsDetails(rsvp.guestsDetails)}`;
    default:
      return `${rsvp.contactDetails.mainGuestName} ${
        rsvp.contactDetails.mainGuestSurname
      } (${
        rsvp.contactDetails.mainGuestEmail
      }) submitted the RSVP on behalf of ${rsvp.contactDetails.guestsCount} ${
        Number(rsvp.contactDetails.guestsCount) > 1 ? 'people' : 'person'
      }.\n${
        Number(rsvp.contactDetails.guestsCount) > 1 ? 'His/Her group' : 'He/She'
      } will arrive on ${rsvp.contactDetails.arrivalDate} ${
        rsvp.contactDetails.arrivalDate === 'friday'
          ? 'the 28th July'
          : 'the 29th July'
      }.\nAttendee(s):\n${getGuestsDetails(rsvp.guestsDetails)}`;
  }
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
    let generatedString = `- ${person.name} - ${person.food}`;

    if (person.allergies && person.allergies.length > 0) {
      generatedString += ` - ${person.allergies
        .map((allergy) => allergy)
        .join('-')}.`;
    }

    generatedStrings += `${generatedString}\n`;
  });

  return generatedStrings;
}
