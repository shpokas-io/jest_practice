import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import ToDoItem from "../ToDoItem";

describe("ToDoItem Component", () => {
  const mockTask = {
    text: "Test task",
    completed: false,
  };

  it("renders task text correctly", () => {
    const onToggle = vi.fn();
    const onDelete = vi.fn();

    render(
      <ToDoItem task={mockTask} onToggle={onToggle} onDelete={onDelete} />
    );

    expect(screen.getByText("Test task")).toBeInTheDocument();
  });

  it("calls onToggle when clicking the task text", () => {
    const onToggle = vi.fn();
    const onDelete = vi.fn();

    render(
      <ToDoItem task={mockTask} onToggle={onToggle} onDelete={onDelete} />
    );

    fireEvent.click(screen.getByText("Test task"));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });

  it("calls onDelete when clicking delete button", () => {
    const onToggle = vi.fn();
    const onDelete = vi.fn();

    render(
      <ToDoItem task={mockTask} onToggle={onToggle} onDelete={onDelete} />
    );

    fireEvent.click(screen.getByText("Delete"));
    expect(onDelete).toHaveBeenCalledTimes(1);
  });

  it("applies line-through style when task is completed", () => {
    const onToggle = vi.fn();
    const onDelete = vi.fn();
    const completedTask = { ...mockTask, completed: true };

    render(
      <ToDoItem task={completedTask} onToggle={onToggle} onDelete={onDelete} />
    );

    const taskElement = screen.getByText("Test task");
    expect(taskElement.className).toContain("line-through");
  });
});
