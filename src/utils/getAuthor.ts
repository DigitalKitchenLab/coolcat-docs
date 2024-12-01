import authorsJson from 'authors.json';

/** Return author info, */
export function getAuthor(author: string) {
  const person = authorsJson[author as keyof typeof authorsJson];
  if (!person) {
    console.warn('Invalid author. Did you add it to authors.json?');
    return {
      name: 'The Team at Digital Kitchen',
      url: 'https://twitter.com/coolcatchain',
    };
  }
  return person;
}
