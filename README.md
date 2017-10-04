# Counter App
An application that outputs the individual words that appear in a book, and how many times that word appears in the text file. It also outputs whether the number of times each word appears is a prime number.

### Instructions

- ``$ git clone https://github.com/MarySalemme/counter-app.git``
- ``$ cd counter-app``
- ``$ npm install``
- ``$ npm test`` to run the tests
- ``$ node app.js`` to run the App
- to use the Counter on a different book, open the ``app.js`` file and change the url and name of the book on line 19.

### Improvements to be made
- Implementing a method to create the input/output folder
- Not having the file extension hard coded in the functions but passing it as an argument
- Known bugs: words separated by a dash or apostrophe become one long word (engine-burglar => engineburglar)
