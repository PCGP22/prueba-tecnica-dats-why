import { render, screen } from "@testing-library/react";
import EventForm from "../components/EventForm";
import { describe, expect } from "vitest";
import { Provider } from "react-redux";
import { store } from "../components/redux/store/store";

describe("render correctly", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <EventForm />
      </Provider>
    );
  });
  test("Renderiza container sin errores", () => {
    const inputs = screen.findAllByRole("textbox");
    expect(inputs).toBeTruthy();
  });
});
