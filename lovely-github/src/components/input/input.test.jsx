import { render, screen } from "@testing-library/react";

import Input, { dataTestIds } from "./input.component";

describe("Describe <Input/>", () => {
  const defaultProps = { value: "" };

  const setUpComponent = (props) => {
    const componentProps = { ...defaultProps, ...props };
    return render(<Input {...componentProps} />);
  };

  it("Should be defined", () => {
    const view = setUpComponent();
    expect(view).toBeDefined();
  });

  it("Should render dynamic placeholder", () => {
    const placeholder = "Type username";
    setUpComponent({ placeholder });
    const input = screen.getByTestId(dataTestIds.input);
    expect(input).toBeDefined();
    expect(input).toHaveAttribute("placeholder", placeholder);
  });

  it("Should have a controlled value prop", () => {
    const value = "value";
    setUpComponent({ value });
    const input = screen.getByTestId(dataTestIds.input);
    expect(input).toBeDefined();
    expect(input).toHaveAttribute("value", value);
  });
});
