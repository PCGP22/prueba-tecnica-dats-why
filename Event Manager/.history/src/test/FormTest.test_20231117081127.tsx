import { render, screen } from "@testing-library/react";
import EventForm from "../components/EventForm";
import { expect } from "vitest";

test("render correctly", () => {
  render(<EventForm />);
  const inputs = screen.findAllByRole("textbox");
  expect(inputs).toHaveLength(2);
});
