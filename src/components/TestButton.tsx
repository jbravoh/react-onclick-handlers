function TestButton(): JSX.Element {
  const handleClick = () => window.alert("test button");

  return (
    <button onClick={handleClick}>
      Make me do something when I'm clicked...
    </button>
  );
}

export default TestButton;
