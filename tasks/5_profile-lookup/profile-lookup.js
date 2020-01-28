function lookupProfile(firstName, prop) {
  let names = CONTACTS.map((c) => c.firstName);
  if (names.includes(firstName)) {
    let foundContact = CONTACTS.find((c) => c.firstName === firstName);
    let props = foundContact[prop];
    return props === undefined ? 'No such property' : props;
  } else {
    return 'No such contact';
  }
}

const CONTACTS = [
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    likes: ['Soccer'],
    number: 123,
    address: 'Somewhere',
  }, {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    likes: ['Intriguing Cases', 'Violin'],
    number: 234,
    address: '221B Baker Street',
  }, {
    firstName: 'Harry',
    likes: ['Quiddich'],
  }, {
    firstName: 'Akira',
  },
];

export {lookupProfile};
