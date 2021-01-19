<script>
  import Button from "./Button.svelte";
  import { calculations } from "../utils/maths.js";

  $: input = [];
  $: calculation = Number.isInteger(calculations(input))
    ? calculations(input)
    : calculations(input).toFixed(5);

  function handle(value) {
    const lastId = input.length - 1;
    const lastInput = input[lastId];
    const isLastNumber = !isNaN(input[lastId]);
    const isValueNumber = !isNaN(value);

    if (value === "CE") {
      let finalcalculation;
      input = [];
      finalcalculation = 0;
    } else if (value === "C") {
      input = [...input.slice(0, -2)];
    } else if (value === "←") {
      const updatedLastInput = lastInput.slice(0, -1);
      input =
        lastInput.length === 1
          ? [...input.slice(0, -1)]
          : [...input.slice(0, -1), updatedLastInput];
    } else if (value === "±") {
      let updatedLastInput;
      // Toggles + -
      if (!isNaN(lastInput)) {
        updatedLastInput = `${lastInput * -1}`;
      }
      console.log(updatedLastInput);
      input = [...input.slice(0, -1), updatedLastInput];
    } else if (value === ".") {
      //Bug: multiple decimals allowed, obviously breaks down mathematical functions
      if (isLastNumber) {
        let updatedLastInput = `${lastInput}.`;
        input = [...input.slice(0, -1), updatedLastInput];
      }
    } else if (value === "=") {
      input = [`${calculation}`];
    } else if (isValueNumber && isLastNumber) {
      input = [...input.slice(0, -1), `${lastInput}${value}`];
    } else if (!isValueNumber && !isLastNumber) {
      input = [...input.slice(0, -1), value];
    } else {
      input = [...input, value];
    }
  }
</script>

<style>
  :global(body) {
    align-items: center;
    justify-content: center;
    color: #3b2e5a;
    padding: 25%;
    width: 18rem;
  }

  .calculation {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding: 1rem;
    border: 1px solid #4ea0ae;
    border-radius: 4px;
    text-align: end;
    background-color: #fff48f;
    height: 25px;
  }

  .controls {
    display: grid;
    gap: 8px;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
</style>

<div class="calculation">
    {input.join(" ")}
  </div>
  <div class="controls">
    <Button value={"CE"} {handle} />
    <Button value={"C"} {handle} />
    <Button value={"←"} {handle} />
    <Button value={"÷"} {handle} />

    <Button value={7} {handle} />
    <Button value={8} {handle} />
    <Button value={9} {handle} />
    <Button value={"×"} {handle} />

    <Button value={4} {handle} />
    <Button value={5} {handle} />
    <Button value={6} {handle} />
    <Button value={"−"} {handle} />

    <Button value={1} {handle} />
    <Button value={2} {handle} />
    <Button value={3} {handle} />
    <Button value={"+"} {handle} />

    <Button value={"±"} {handle} let:clicked={clicked} />
    <Button value={0} {handle} />
    <Button value={"."} {handle} />
    <Button value={"="} {handle} />
  </div>