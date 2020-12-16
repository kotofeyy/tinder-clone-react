import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import LogButton from './LogButton.js';

afterEach(cleanup);

test('Компонент LogButton должен отобразиться с надписью "Кнопка"', async () => {
  render(<LogButton caption="Кнопка" />);
  await screen.findByText(/Кнопка/);
});
test('Негативный тест LogButton. надпись "Кнопка" былане обнаружена', async () => {
  render(<LogButton caption="Неверное название.." />);
  await screen.findByText(/Кнопка/);
});

test('Компонент LogButton должен вызвать событие onClick при нажатии левой кнопкой мыши', async () => {
  const onClickHandler = jest.fn();
  render(<LogButton onClick={onClickHandler} />);
  const selectedButton = await screen.findByText(/Войти/);
  fireEvent.click(selectedButton);
  expect(onClickHandler).toHaveBeenCalledTimes(1);
});

test('Негативный тест LogButton. Событиые onClick не может найти компонент', async () => {
  const onClickHandler = jest.fn();
  render(<LogButton onClick={onClickHandler} />);
  const selectedButton = await screen.findByText(/Неверное название/);
  fireEvent.click(selectedButton);
  expect(onClickHandler).toHaveBeenCalledTimes(1);
});

test('Нажатие кнопки Enter', async () => {
  render(<LogButton />);
  const selectedButton = await screen.findByText(/Войти/);
  fireEvent.keyDown(selectedButton, { key: 'Enter', code: 'Enter' })
});

test('Негативный тест Нажатие кнопки Enter', async () => {
  render(<LogButton />);
  const selectedButton = await screen.findByText(/Неверное название/);
  fireEvent.keyDown(selectedButton, { key: 'Enter', code: 'Enter' })
});