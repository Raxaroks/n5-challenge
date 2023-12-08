
export function isNotEmpty(str: string) {
  return !!str;
}

export function containsSpecialChars(str: string) {
  const alphanumeric = /[^A-Za-z 0-9]/g;
  return alphanumeric.test(str);
}

export function reverseStringWithoutAffectingSpecialChars(str: string): string {
  const swap = (str: string, ptrA: number, ptrB: number) => {
    let swapped = '';
    for (let i=0; i< str.length; i++) {
      if (i === ptrA) swapped = swapped + str[ptrB];
      else {
        if (i === ptrB) swapped = swapped + str[ptrA];
        else swapped = swapped + str[i];
      }
    }
    return swapped;
  };

  let l = 0, r = str.length -1;
  while(l < r) {
    if (containsSpecialChars(str[l])) l++;
    else if (containsSpecialChars(str[r])) r--;
    else {
      str = swap(str, l, r);
      l++; r--;
    }
  }
  return str;
}