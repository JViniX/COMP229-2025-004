const author = {
  fullName: "Bob Alice",
  books: ["Book 01", "Book 02", "Book 03"],

  printValues(){
    console.log(this.fullName + "-" + this.books);
  },

  printBooks() {
    this.books.forEach((book) => {
      console.log(book + ' by ' + this.fullName);
    });   
  },

  printBooks1() {
    // function printValue(book) {
    //   console.log(book + ' by ' + this.fullName + '<br>');
    // }

    // this.books.forEach(printValue);

    this.books.forEach(function(book){
      console.log(book + ' by ' + this.fullName);
    })
  }
};

author.printValues();
author.printBooks();
author.printBooks1();