const formatValue = (
  value: string | number | boolean
): string | number | boolean | undefined => {
  if (typeof value === 'string') {
    return value.toUpperCase();
  } else if (typeof value === 'number') {
    return value * 10;
  } else if (typeof value === 'boolean') {
    return !value;
  }
};

const getLength = (value: string | number[] | string[]): number | undefined => {
  if (typeof value === 'string') {
    return value.length;
  }
  return value.length;
};



