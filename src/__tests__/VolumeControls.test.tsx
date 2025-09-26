import { render } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import VolumeControls from '../components/VolumeControls';

test('VolumeControls renders correctly with default props', () => {
  const { container } = render(<VolumeControls volume={50} onVolumeChange={() => {}} />);
  expect(container).toMatchSnapshot();
});

test('VolumeControls renders correctly with a different volume', () => {
  const { container } = render(<VolumeControls volume={25} onVolumeChange={() => {}} />);
  expect(container).toMatchSnapshot();
});