
Sum without highest and lowest number

sumArray = array => array ? array.sort((a,b) => a - b).slice(1,-1).reduce((acc, rec) => acc + rec, 0) : 0