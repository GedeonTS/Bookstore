export default function logger() {
  return (next) => (action) => {
    const returnValue = next(action);
    return returnValue;
  };
}
