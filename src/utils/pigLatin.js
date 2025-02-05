function toPigLatin(phrase) {
  // Your code here
  if (phrase === "") {
    return "";
  }
  let words = phrase.split(" ");

  words.forEach((word, i) => {
    word += word[0];
    word = word.substr(1 - word.length) + "ay";
    words[i] = word;
  });

  return words.join(" ");
}

module.exports = {
  toPigLatin,
};

export default toPigLatin;
