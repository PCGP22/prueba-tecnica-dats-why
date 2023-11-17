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
    const inputDesc = screen.getByPlaceholderText("10-300 caracteres");
    const inputName = screen.getByPlaceholderText("5-30 caracteres");
    inputName.focus();
    fireEvent.change(inputName, { target: { value: "asd" } });
    inputDesc.focus();
    // fireEvent.click(inputDesc);
    expect(inputName).toHaveClass("input__error");
  });
});
