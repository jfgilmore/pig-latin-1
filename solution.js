function toPigLatin(phrase) {
  // Your code here
  if (phrase.length === 0) return '';

  const convertWord = (word) => `${word.substring(1)}${word.charAt(0)}ay`;

  return phrase.split(' ').map((word) => convertWord(word)).join(' ');
}