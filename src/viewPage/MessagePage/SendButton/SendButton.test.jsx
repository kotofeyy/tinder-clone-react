import React from 'react';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import SendButton from './SendButton.js';

afterEach(cleanup);

test('Компонент SendButton должен отобразиться с надписью "Кнопка"', async () => {
  render(<SendButton caption="Кнопка" />);
  await screen.findByText(/Кнопка/);
});

test('Негативный тест SendButton. надпись "Кнопка" былане обнаружена', async () => {
  render(<LogButton caption="Неверное название.." />);
  await screen.findByText(/Кнопка/);
});

test('Компонент SendButton должен вызвать событие onClick при нажатии левой кнопкой мыши', async () => {
  const onClickHandler = jest.fn();
  render(<SendButton onClick={onClickHandler} />);
  const selectedButton = await screen.findByText(/Отправить/);
  fireEvent.click(selectedButton);
  expect(onClickHandler).toHaveBeenCalledTimes(1);
});

test('Негативный тест SendButton. Событиые onClick не может найти компонент', async () => {
  const onClickHandler = jest.fn();
  render(<SendButton onClick={onClickHandler} />);
  const selectedButton = await screen.findByText(/Неверное название/);
  fireEvent.click(selectedButton);
  expect(onClickHandler).toHaveBeenCalledTimes(1);
});

test('Нажатие кнопки Enter', async () => {
  render(<SendButton />);
  const selectedButton = await screen.findByText(/Войти/);
  fireEvent.keyDown(selectedButton, { key: 'Enter', code: 'Enter' })
});

test('Негативный тест Нажатие кнопки Enter', async () => {
  render(<SendButton />);
  const selectedButton = await screen.findByText(/Неверное название/);
  fireEvent.keyDown(selectedButton, { key: 'Enter', code: 'Enter' })
});