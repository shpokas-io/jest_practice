import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ToDoInput from "../ToDoInput";

describe("ToDoInput Component", () => {
  it("renders input and button", () => {
    const addTask = vi.fn();
    render(<ToDoInput addTask={addTask} />);

    expect(screen.getByPlaceholderText("Add a new task")).toBeInTheDocument();
    expect(screen.getByText("Add Task")).toBeInTheDocument();
  });

  it("updates input value when typing", () => {
    const addTask = vi.fn();
    render(<ToDoInput addTask={addTask} />);

    const input = screen.getByPlaceholderText("Add a new task");
    fireEvent.change(input, { target: { value: "New Task" } });

    expect(input.value).toBe("New Task");
  });

  it("calls addTask when button is clicked with non-empty input", () => {
    const addTask = vi.fn();
    render(<ToDoInput addTask={addTask} />);

    const input = screen.getByPlaceholderText("Add a new task");
    const button = screen.getByText("Add Task");

    fireEvent.change(input, { target: { value: "New Task" } });
    fireEvent.click(button);

    expect(addTask).toHaveBeenCalledWith("New Task");
    expect(input.value).toBe("");
  });

  it("does not call addTask when button is clicked with empty input", () => {
    const addTask = vi.fn();
    render(<ToDoInput addTask={addTask} />);

    const button = screen.getByText("Add Task");
    fireEvent.click(button);

    expect(addTask).not.toHaveBeenCalled();
  });
});
