const byteSize = (str) => {
  // write your code here
	 const str1 = new TextEncoder().encode(str);
      return str1.length;
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));
