// Polyfill for React 16 (https://github.com/facebookincubator/create-react-app/issues/3199)
// tslint:disable-next-line:no-any
(global as any).requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};

// Set up Enzyme for React 16
import { configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });
