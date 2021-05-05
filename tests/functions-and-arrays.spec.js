function shuffle(currentArray) {
  const array = currentArray.map(arr => arr.slice());
  let counter = array.length;

  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

describe('Find the greatest number', () => {
  it('should create a function named greatestOfTwoNumbers', () => {
    expect(typeof greatestOfTwoNumbers).toBe('function');
  });

  it('should return greater of two arguments - if the first argument greater', () => {
    expect(greatestOfTwoNumbers(2, 1)).toBe(2);
    expect(greatestOfTwoNumbers(5, -7)).toBe(5);
  });

  it('should return greater of two arguments - if the second argument greater', () => {
    expect(greatestOfTwoNumbers(1, 3)).toBe(3);
    expect(greatestOfTwoNumbers(-5, 3)).toBe(3);
  });

  it('should return either arguments - if both arguments are equal', () => {
    expect(greatestOfTwoNumbers(4, 4)).toBe(4);
  });
});

function greatestOfTwoNumbers(num1,num2)
{
   if(num1>num2)
   return(num1);

   else return(num2);
}




describe('Find the scary word', () => {
  it('should create a function named findScaryWord', () => {
    expect(typeof findScaryWord).toBe('function');
  });

  it('should return null when called with an empty array', () => {
    expect(findScaryWord([])).toBe(null);
  });

  it('should return the word when called with a single-word array', () => {
    expect(findScaryWord(['foo'])).toBe('foo');
  });

  it('should return the first occurrence of the word when longest have multiple occurrences ', () => {
    expect(findScaryWord(['foo', 'bar'])).toBe('foo');
    expect(findScaryWord(['bar', 'foo'])).toBe('bar');
  });

  it('should return the longest occurrence when it has multiple words', () => {
    let words = ['a', 'zab', '12abc', '$$abcd', 'abcde', 'ironhack'];
    for (let i = 0; i < 10; i++) {
      words = shuffle(words);
      expect(findScaryWord(words)).toBe('ironhack');
    }
  });
});

word = []

function findScaryWord(word) {
	let longest = 0
	let scary
	if (word.length == 0)
		return null

	else {
		for (let i = 0; i < word.length; i++) 
    {
			if (word[i].length >= longest) 
        	longest = word[i].length

			}
		

		for (let j = 0; j < word.length; j++) 
     {
		  	 if (longest == word[j].length) 
			  {
         	 scary = word[j]
			    	 break
         }


         
     }

	}
       return(scary)
}


/*
function findScaryWord(words){
  if(words.length==0){
    return null;
  }  
  else if(words.length==1){
    return words[0];
  }
  else if(words.length==2){
    if(words[0].length==words[1].length){
      return words[0];
    }
  }
  else if(words.length>2){
    for(i=0;i<words.length;i++){      
      if(words[0].length<words[i].length){
        words[0] = words[i];
      }   
    }
    return words[0];
  }
}
*/


describe('Calculate the sum of array of numbers', () => {
  it('should create a function named netPrice', () => {
    expect(typeof netPrice).toBe('function');
  });

  it('should return zero if receives an empty array when called', () => {
    expect(netPrice([])).toBe(0);
  });

  it('should return the sum with one number array', () => {
    expect(netPrice([4])).toBe(4);
  });

  it('should return zero if all elements are zero', () => {
    expect(netPrice([0, 0, 0, 0, 0])).toBe(0);
  });

  it('should return the sum when passed array of numbers', () => {
    expect(netPrice([10, 5, 4, 32, 8])).toBe(59);
  });
});

var summ=[];
function netPrice(summ)
{
   let sum=0;
    for(let i=0;i<summ.length;i++)
   {
      sum=sum+summ[i]
   }
    let len = summ.length;
    return(sum);
}




describe('Bonus: Calculate the sum', () => {
  it('should create a function named add', () => {
    expect(typeof add).toBe('function');
  });

  it('should return zero if receives an empty array when called', () => {
    expect(add([])).toBe(0);
  });

  it('should return the sum with one number array', () => {
    expect(add([4])).toBe(4);
  });

  it('should return zero if all elements are zero', () => {
    expect(add([0, 0, 0, 0, 0])).toBe(0);
  });

  it('should return the sum when passed array of numbers', () => {
    expect(add([10, 5, 4, 32, 8])).toBe(59);
  });

  it('should return the sum when passed array of strings', () => {
    expect(add(['ana', 'marco', 'nicolas', 'tania', 'ptwd'])).toBe(24);
  });

  it('should return the sum when passed array of mixed strings and numbers - ', () => {
    expect(add([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, 10])).toBe(56);
  });
  it('should return the sum when passed array of mixed strings, numbers and booleans - ', () => {
    // false is counted as 0
    expect(add([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false])).toBe(46);
    // true is counted as 1
    expect(add([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, true])).toBe(47);
  });
  it('should throw an error when unsupported data type (object or array) present in the array', () => {
    // const arr = [6, 12, "miami", 1, "barca", "200", "lisboa", 8, [], {}];

    expect(() => add([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, [], {}])).toThrow(
      new Error("Unsupported data type sir or ma'am")
    );
  });
});

var mixed_array=[];
function add(mixed_array)
{
      let sum=0;
      for(let i=0;i<mixed_array.length;i++)
   {
       if(typeof(mixed_array[i])==="object"||typeof(mixed_array[i])==="array"||typeof(mixed_array[i])==="undefined")
        throw Error("Unsupported data type sir or ma'am");


         else if(mixed_array.length==1)
            sum=mixed_array[i]

          else if(typeof(mixed_array[i])=== "string")
            sum+=mixed_array[i].length
      

          else
             sum=sum+mixed_array[i]

      
   }
  
   return(sum);
}



describe('Calculate the average of an array of numbers', () => {
  it('should create a function named midPointOfLevels', () => {
    expect(typeof midPointOfLevels).toBe('function');
  });

  it('should return null if receives an empty array when called', () => {
    // should it return null or zero?
    expect(midPointOfLevels([])).toBe(null);
  });

  // do we need this?
  // it("should return the average of a one-element array", () => {
  //   expect(averageNumbers([9])).toBe(9);
  // });

  // do we need this?
  // it("should return the average even with negative values", () => {
  //   expect(averageNumbers([9, -3, -4, 6])).toBe(2);
  // });

  it('should return the average of the array', () => {
    expect(midPointOfLevels([9, 10, 82, 92, 32, 102, 58])).toBe(55);
  });
});
 var avg=[];
 function midPointOfLevels(avg)
 {
  let sum=0;
  let average;
    if(avg.length==0)
    return (null);
 else for(let i=0;i<avg.length;i++)
     {
          sum+=avg[i];
     }
    average=(sum/avg.length);
     return(average);
 }


describe('Calculate the average of an array of strings', () => {
  it('should create a function named averageWordLength', () => {
    expect(typeof averageWordLength).toBe('function');
  });

  it('should return null if receives an empty array when called', () => {
    // should it return null or zero?
    expect(averageWordLength([])).toBe(null);
  });

  // do we need this?
  // it("should return the average of a one-element array", () => {
  //   expect(averageWordLength(["ironhack"])).toBe(8);
  // });

  it('should return the average of a the array', () => {
    expect(
      averageWordLength([
        'bread',
        'jam',
        'milk',
        'egg',
        'flour',
        'oil',
        'rice',
        'coffee powder',
        'sugar',
        'salt'
      ])
    ).toBe(4.9);
  });
});
      var avgWordLength=[];
       function averageWordLength(avgWordLength)
    {
      let len=0;
      if(avgWordLength.length==0)
      return (null);

      else
        for(let i=0;i<avgWordLength.length;i++)
        {
           len+=avgWordLength[i].length;
        }  
      return(len/avgWordLength.length);
   }



   
describe('Bonus: Calculate the average of a mixed elements array', () => {
  it('should create a function named avg', () => {
    expect(typeof avg).toBe('function');
  });

  it('should return null if receives an empty array when called', () => {
    // should it return null or zero?
    expect(avg([])).toBe(null);
  });

  it('should return the average of the array', () => {
    // false is counted as 0
    expect(avg([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, false])).toBe(5.11);
    // true is counted as 1
    expect(avg([6, 12, 'miami', 1, 'barca', '200', 'lisboa', 8, true])).toBe(5.22);
  });

  let mixelements=[]
  function avg(mixelements)
  {
    var sum=0.00
    var len=0.00
    if(mixelements.length==0)
    return (null)
    
    else{
      for(let j=0;j<mixelements.length;j++)
      {
        if(typeof(mixelements[j])=='bool')
        {
          if(bool==true)
          {
              sum+=1
              len+=1
          }

             else
           {
              sum+=0
              len+=1
          }
        }



        else if(typeof(mixelements[j])=='string')
         {
           sum+=mixelements[j].length
           
         }

         else 
         sum+=mixelements[j]
         
      }
    }
    return (parseFloat( (sum/mixelements.length).toFixed(2)))
  }
})







describe('Unique array', () => {
  it('should create a function named uniquifyArray', () => {
    expect(typeof uniqueArray).toBe('function');
  });

  it('should return null if receives an empty array when called', () => {
    expect(uniqueArray([])).toEqual(null);
  });

  // do we need this?
  // it("should return the correct uniqified array when an array of the same elements passed as argument", () => {
  //   expect(uniquifyArray(["Ironhack", "Ironhack", "Ironhack"])).toEqual([
  //     "Ironhack"
  //   ]);
  // });

  // do we need this?
  // it("should return the same array when no element is repeated", () => {
  //   expect(uniquifyArray(["Cat", "Dog", "Cow"])).toEqual(["Cat", "Dog", "Cow"]);
  // });

  it('should return the uniquified array', () => {
    expect(
      uniqueArray([
        'bread',
        'jam',
        'milk',
        'egg',
        'flour',
        'oil',
        'rice',
        'coffee powder',
        'sugar',
        'salt',
        'egg',
        'flour'
      ])
    ).toEqual(['bread', 'jam', 'milk', 'egg', 'flour', 'oil', 'rice', 'coffee powder', 'sugar', 'salt']);
  });
});

let repeatedElements=[]
let uniArray=[]
 function uniqueArray(repeatedElements)
{ 
  if(repeatedElements.length==0)
  return(null)
   
  else {
          uniArray = [...new Set(repeatedElements)];
         
    }
    return (uniArray)
}

/*for(let i=0;i<wordsUnique.length;i++){
    for(let j=i+1;j<wordsUnique.length-1;j++){
   if(wordsUnique[i] !=  wordsUnique[i+1]){
     arr[i] = wordsUnique[i];
   }
   }  */

describe('Find elements', () => {
  it('should create a function named searchElement', () => {
    expect(typeof searchElement).toBe('function');
  });

  it('should return null if receives an empty array when called', () => {
    expect(searchElement([])).toBe(null);
  });

  // do we need this test?
  // it("should return true if the word we are looking for is the only one in the array", () => {
  //   expect(doesWordExist(["machine"], "machine")).toBe(true);
  // });

  // do we need this test?
  // it("should return false if the word we are looking for is not in the array", () => {
  //   expect(
  //     doesWordExist(
  //       ["machine", "poison", "eat", "apple", "horse"],
  //       "ratatouille"
  //     )
  //   ).toBe(false);
  // });

  it('should return true if the word we are looking for is in the array', () => {
    expect(searchElement(['door','window','ceiling','roof','plinth','tiles', 'ceiling','flooring'], 'tiles')).toBe(
      true
    );
  });
  let findingWord
var AllWords=[]
function searchElement(AllWords,findingWord)
  {
      if(AllWords.length==0)
        return (null)

    else
    {
     for(let i=0;i<AllWords.length;i++)
       {
           if(AllWords[i]==findingWord)
             return (true)
        

         }

      }
  }
});



describe('Count repetition', () => {
  it('should create a function named howManyTimesElementRepeated', () => {
    expect(typeof howManyTimesElementRepeated).toBe('function');
  });

  it('should return 0 (zero) if receives an empty array when called', () => {
    expect(howManyTimesElementRepeated([])).toBe(0);
  });

  it('should return 1 (one) when the word appears only one time in the array', () => {
    expect(howManyTimesElementRepeated(['basketball', 'football', 'tennis'], 'tennis')).toBe(1);
  });

  it("should return 0 (zero) when the word doesn't appear in the array", () => {
    expect(howManyTimesElementRepeated(['basketball', 'football', 'tennis'], 'rugby')).toBe(0);
  });

  it('should return 5 (five) when the word appears 5 times in the array', () => {
    expect(
      howManyTimesElementRepeated(
        [
          'machine',
          'matter',
          'subset',
          'trouble',
          'starting',
          'matter',
          'eating',
          'matter',
          'truth',
          'disobedience',
          'matter'
        ],
        'matter'
      )
    ).toBe(4);
  });
});

let search_word
let all_words=[]
function howManyTimesElementRepeated(all_words,search_word)

 {
      let count=0;
      for(let i=0;i<all_words.length;i++)
      {
         if(all_words[i]==search_word)
         count+=1
      }

       return(count)
 }



describe('Bonus Quest - greatestProduct', () => {
  it('should create a function named maximumProduct', () => {
    expect(typeof maximumProduct).toBe('function');
  });

  it('should return 1 (one) when all numbers of the arrays are 1', () => {
    let matrix = [
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    expect(maximumProduct(matrix)).toBe(1);
  });

 
});

let mat=[]
function maximumProduct(mat)
{
  let count_of_one=0
   for(let i=0,j=0;i<mat.length;i++,j++)
     {
        if(mat[i][j]==1)
        count_of_one+=1;
     }
     if(count_of_one==mat.length)
      return 1
}