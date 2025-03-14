const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(tutorial => 
    tutorial
      .split(" ") // Split into words
      .map(word => {
        // If the word is already uppercase, keep it as is.
        return word.length > 2 && word === word.toUpperCase()
          ? word // Keep acronyms unchanged (e.g., API, JSONP, NaN)
          : word.charAt(0).toUpperCase() + word.slice(1); // Capitalize normally
      })
      .join(" ") // Join words back into a sentence
  );
};
