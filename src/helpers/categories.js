export const findCategoryByID = (categories = [], catID = 0) => {
    const cat = categories.find(item => item.id === catID);
    return cat;
}