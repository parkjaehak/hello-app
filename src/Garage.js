export default function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage2</h1>
      <h1>Garage3</h1>
      {cars.length > 0 && <h2>You have {cars.length} cars in your garage.</h2>}
    </>
  );
}
