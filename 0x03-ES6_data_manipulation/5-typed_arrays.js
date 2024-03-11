export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw Error('Position outside range');
  }
  const buffer = new ArrayBuffer(length);
  const arr1 = new Int8Array(buffer);
  const dataView = new DataView(buffer);
  arr1[position] = value;
  return dataView;
}
