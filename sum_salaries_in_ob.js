let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
  }
 let sum=0;
 for (const property in salaries) {
     sum+=salaries[property]
 }
 console.log(sum)
 