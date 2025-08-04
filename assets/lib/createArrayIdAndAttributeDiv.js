document.addEventListener("DOMContentLoaded", () => {
  const doc = document;
  // i created an array of id elements, initialized at  null
  // i created this array with twelve null for determinated the scope of the .map
  const selectors = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  // for each element, i research the div with ratings class and create an id with the index number
  try {
    const newmap = selectors.map((sel, index) => {
      const key = index;
      const newId = doc.querySelectorAll(`.ratings`);
      console.log("newId in circleMap:", newId);
      selectors.push((newId[index].id = `ratings${key}`));
      // i filtered selectors array for delete each null elements
      const newSelectors = selectors.filter((el) => el !== null);
      console.log("newSelectors in circleMap:", newSelectors);
      return newSelectors;
    });
  } catch (error) {
    console.log(("error in createArrayIdAndAttributeDiv:", error));
  }
});
