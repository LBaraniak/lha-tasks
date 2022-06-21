// actualPageIdx to index wybranej strony (indexujemy od 0)
// entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// przykładowe dane
const data = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const settings = { actualPageIdx: 1, entriesOnPage: 2 };

const paginateArray = (dataEntries, settings) => {
  const entriesOnSelectedPage = [];
  const firstElement = settings.actualPageIdx * settings.entriesOnPage;
  const lastElement = firstElement + settings.entriesOnPage;

  if(firstElement >= dataEntries.length) {
    return 'leak'
  }

  dataEntries.forEach((element, index) => {
    if(index >= firstElement && index < lastElement) {
      entriesOnSelectedPage.push(element);
    }
  })

  return entriesOnSelectedPage
};

const result = paginateArray(data, settings);
console.log(result)
// result === [3,4]