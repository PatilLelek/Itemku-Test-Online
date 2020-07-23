function solution(record){
  let textDisplay = [];
  let eachArr = record.map(item => {
    let splitText = item.split(" ");
    return {['type']: splitText[0], ['id']: splitText[1], ['name']: splitText[2]}
  });

  for (let index = 0; index < eachArr.length; index++) {
    const element = eachArr[index];
    if(element.type == 'Enter'){
      const filter = textDisplay.filter(item => item.id == element.id && item.text == 'has left.');
      if(filter.length > 0){
        textDisplay.forEach((item, indexI) => {
          if(element.id == item.id){
            textDisplay[indexI].name = element.name
          }
        })
      }
      const newData = {'id': element.id, 'name': element.name, 'text': 'came in.'}
      textDisplay.push(newData)
    } else if(element.type == 'Leave') {
      const filter = textDisplay.filter(item => item.id == element.id && item.text == 'came in.');
      if(filter.length > 0){
        const newData = {'id': element.id, 'name': filter[0].name, 'text': 'has left.'}
        textDisplay.push(newData)
      }
    } else if(element.type == 'Change') {
      const filter = textDisplay.filter(item => item.id == element.id);
      if(filter.length > 0){
        textDisplay.forEach((item, indexI) => {
          if(element.id == item.id){
            textDisplay[indexI].name = element.name
          }
        })
      }
    }
  };
  
  const answer = textDisplay.map(item => `${item.name} ${item.text}`)
  return answer
};