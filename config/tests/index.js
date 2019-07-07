import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import setUpJSDOMEnvironment from './setupJsdomEnv';

Enzyme.configure({ adapter: new Adapter() });

setUpJSDOMEnvironment();
