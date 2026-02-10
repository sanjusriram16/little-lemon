import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders booking form title", () => {
  render(<App />);
  const heading = screen.getByText(/book a table/i);
  expect(heading).toBeInTheDocument();
});