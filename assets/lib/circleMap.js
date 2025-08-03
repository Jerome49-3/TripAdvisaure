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
  console.log("newmap in circleMap:", newmap);
  console.log("selectors in circleMap:", selectors);
  // i created this array with five null for determinated the scope of the .map
  const arrCircle = [null, null, null, null, null];
  //for each element is null, i created an i balise and attribute two class
  const newArrCircle = arrCircle.map((el, index) => {
    console.log("el in circleMap:", el);
    if (el === null) {
      const circle = doc.createElement("i");
      circle.classList.add("fa-regular", "fa-circle");
      return circle;
    }
  });
  const divRatings = doc.getElementById(`ratings${key}`);
  divRatings.append(circle);
  console.log("newArrCircle in circleMap:", newArrCircle);
});
