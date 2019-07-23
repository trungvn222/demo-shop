import { CATEGORY_URI } from '../const/route';
import { IMAGE_URI } from '../const/assets';
export const mapCategories = items => {
    let newItems = [];
    items.forEach(cat => {
        if(typeof cat.name != 'undefined' && cat.name != 'All'){
            newItems.push({
                id: cat.id,
                link: `${CATEGORY_URI}/${cat.id}`,
                imageUrl: `${IMAGE_URI}/${cat.iconName}.jpg`,
                name: cat.name
            });
        }
    });

    return newItems;
}

export const mapProducts = items => {
    let newItems = [];
    items.forEach( p => {
        newItems.push({
            ...p,
            discount: p.originalPrice - p.salePrice
        });
    });

    return newItems;
}