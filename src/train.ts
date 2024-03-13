                                              // ------ L -task -------------



 console.log("Hello Mentor");

 function reverseSentence(sentence: string): string {
    const words = sentence.split(" ");
    const reversedWords = words.map(
      word => word.split("")
      .reverse().join(""));
    return reversedWords.join(" ");
 }
console.log(reverseSentence("we like coding!"));


/* Project Standards:
  - Logging standards
  - Naming standards
     function, method, variable => CAMEL case
     class => PASKAL case
     folder, file => KEBAB case
     css => SNAKE case
  - Error handling
*/

/* Api turlari:
  Traditional Api
  Rest Api
  GraphQL Api
  ...
*/

/* Frontend Development
  Traditional FD  => BSSR (Admin pageni shu orqai quramiz)=> EJS
  Modern FD       => SPA(Users' pageni shu usulda quramiz.)  => REACT
  
*/

/* Cookies:
   request join
   self destroy
*/

/* Validations:
   Frontend validation
   Backend validation
   Database validation
*/

