      // 1   
for (let i = 1; i <= 7; i++) {
  console.log("*".repeat(i));
}

     //  2   
     for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          console.log('FizzBuzz');
      } else if (i % 3 === 0) {
          console.log('Fizz');
      } else if (i % 5 === 0) {
          console.log('Buzz');
      } else {
          console.log(i);
      }
  }

      // 3
      function generateChessboard(size) {
        let chessboard = '';
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                if ((row + col) % 2 === 0) {
                    chessboard += '  ';
                } else {
                    chessboard += '#';
                }
            }
            chessboard += '\n';
        }
        return chessboard;
    }
    
    const boardSize = 8; 
    const chessboard = generateChessboard(boardSize);
    console.log(chessboard);

    // доп дз 
    // 1
    const array = ['Alex', 'Anna', 'Oleg'];
     array.push(1, 2, 3);

    console.log(array);

     // 2
   
    function factorial(n) {
        return (n != 1) ? n * factorial(n - 1): 1;
      }
      
      alert( factorial(7) ); 

      




 
  