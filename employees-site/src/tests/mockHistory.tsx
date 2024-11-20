import { store } from '@/store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

export function withMockHistory(component: JSX.Element, path: string) {
  return <MemoryRouter initialEntries={[path]}>{component}</MemoryRouter>;
}

export function withMockStore(component: JSX.Element) {
  return <Provider store={store}>{component}</Provider>;
}
