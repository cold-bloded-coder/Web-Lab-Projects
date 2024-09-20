// Write a javascript closure to calculate net price of a product along with tax.

// netprice = costprice - discount + tax

const [costprice, discount, tax] = (prompt("Enter the cost: ").split(" ").map((ele) => {return Number(ele)}))

const netprice = costprice - discount + tax;
alert(`Your Final NetPrice is: ${netprice}`)