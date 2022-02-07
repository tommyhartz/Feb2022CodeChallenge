var unitPrice = 299;
var twoUnitDiscount = .95;
var threeUnitDiscount = .9;
var fourUnitDiscount = .8;
var fiveUnitDiscount = .75;


function computePrice(products) {

    var A = findAndRemove(products, 'A');
    var B = findAndRemove(products, 'B');
    var C = findAndRemove(products, 'C');
    var D = findAndRemove(products, 'D');
    var E = findAndRemove(products, 'E');

    var set = A.concat(B).concat(C).concat(D).concat(E);

    if (set.length === 5) {
      return (5 * unitPrice * fiveUnitDiscount) + computePrice(products);
    } else if (set.length === 4) {
        return (4 * unitPrice * fourUnitDiscount) + computePrice(products);
    } else if (set.length === 3) {
        return (3 * unitPrice * threeUnitDiscount) + computePrice(products);
    } else if (set.length === 2) {
        return (2 * unitPrice * twoUnitDiscount) + computePrice(products);
    } else if (set.length === 1) {
        return unitPrice + computePrice(products);
    } else if (set.length === 0) {
        return 0;
    }
}

function findAndRemove(products, letter) {
  const index = products.indexOf(letter);
  if (index > -1) {
    return products.splice(index, 1);
  }
  return [];
}