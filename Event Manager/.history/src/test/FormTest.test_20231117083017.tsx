import { render, screen, fireEvent } from "@testing-library/react";
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
    const button = screen.findAllByRole("button");
    expect(inputs).toBeTruthy();
    expect(button).toBeTruthy();
  });
});

describe("Errores en inputs", () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <EventForm />
      </Provider>
    );
  });
  test("Error en input nombre", () => {
    const submitButton = screen.getByRole("button");
    const inputName = screen.getByPlaceholderText("5-30 caracteres");
    fireEvent.change(inputName, { target: { value: "asd" } });
    fireEvent.click(submitButton);
    expect(inputName).toHaveClass("input__error");
  });
});
