const nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    morestuff: {
                        magicnumber: 44,
                        somting: 'foo2'
                    }
                }
            }
        }
    }
}
const hh = [[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]];
const object = {
    a: "somestring",
    b: 42,
    c: 1,
    d: 5,
    e: {
      f: 3,
      g: 5,
      de: 2,
      rt: {
        l: 10,
        k: function () {},
        d: [{ h: 30 }]
      }
    }
  };
  
  const sumArray = [1, 1, 1, [1], [1], [[1, 1], [1, 1], [], ["a"], [[[[[1]]]]]]];
  
  let summer = (object1) => {
    let sum = 0;
    for (const value of Object.values(object1)) {
      if (typeof value === "number") {
        sum += value;
      }
      if (typeof value === "object") {
        sum += summer(value);
      }
    }
    return sum;
  };
  
  console.log(summer(hh));
  console.log(summer(nestedObject));
  