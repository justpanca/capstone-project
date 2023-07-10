import { render } from '@testing-library/react';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollToTop from './components/ScrollToTop';
import store from './Store/store';

test('renders', () => {
  window.scrollTo = jest.fn();
  render(<Provider store={store}><BrowserRouter><ScrollToTop><App /></ScrollToTop></BrowserRouter></Provider>);
});
