function solution(relation){
  const lengthInside = relation[0].length;
  let keyUnique = [];
  let answer = 0;

  function getDiff(arrayData){
    const isDuplicate = arrayData.some(function(item, idx){
      return arrayData.indexOf(item) != idx 
    });
    if(!isDuplicate){
      answer++;
    }
    return isDuplicate;
  }

  for (let index = 0; index < lengthInside; index++) {
    let dataArr = [];
    for (let indexI = 0; indexI < relation.length; indexI++) {
      dataArr.push(relation[indexI][index])
    }
    const isDuplicate = getDiff(dataArr);
    if(isDuplicate){
      keyUnique.push(dataArr)
    }
  }

  for (let index = 0; index < keyUnique.length; index++) {
    const base = keyUnique[index];
    for (let indexI = 0; indexI < keyUnique.length; indexI++) {
      const comp = keyUnique[indexI];
      if(indexI > index){
        const zip = base.map((item, idx) => {
          return item + comp[idx]
        })
        getDiff(zip);
      }
    }
  }
  return answer
};