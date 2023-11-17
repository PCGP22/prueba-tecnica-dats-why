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

  test("Error en input nombre", async () => {
    const inputName = screen.getByPlaceholderText("5-30 caracteres");
    fireEvent.change(inputName, { target: { value: "@" } });
    fireEvent.blur(inputName);
    await screen.findAllByPlaceholderText("10-300 caracteres");
    expect(inputName).toHaveClass("input__error");
  });

  test("Error en input descripción", async () => {
    const inputDesc = screen.getByPlaceholderText("10-300 caracteres");
    fireEvent.change(inputDesc, { target: { value: "asdfg" } });
    fireEvent.blur(inputDesc);
    await screen.findAllByPlaceholderText("5-30 caracteres");
    expect(inputDesc).toHaveClass("input__error");
  });

  test("Sin errores cuando todo está en orden", async () => {
    const inputName = screen.getByPlaceholderText("5-30 caracteres");
    fireEvent.change(inputName, { target: { value: "Fiesta playera" } });
    const inputDesc = screen.getByPlaceholderText("10-300 caracteres");
    fireEvent.change(inputDesc, {
      target: { value: "No te lo puedes perder" },
    });
    await screen.findAllByPlaceholderText("5-30 caracteres");
    expect(inputName).not.toHaveClass("input__error");
    expect(inputDesc).not.toHaveClass("input__error");
  });
});
