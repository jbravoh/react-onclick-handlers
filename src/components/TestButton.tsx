function TestButton(): JSX.Element {
  return (
    <button onClick={() => console.log("test button")}>
      Make me do something when I'm clicked...
    </button>
  );
}

export default TestButton;

// function TestButton(): JSX.Element {
//   const handleClick = () => console.log("test button");

//   return (
//     <button onClick={handleClick}>
//       Make me do something when I'm clicked...
//     </button>
//   );
// }

// export default TestButton;

// function TestButton(): JSX.Element {
//   function handleClick() {
//     console.log("test button");
//   }

//   return (
//     <button onClick={handleClick}>
//       Make me do something when I'm clicked...
//     </button>
//   );
// }

// export default TestButton;
