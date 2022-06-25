import Enzyme from 'enzyme';
import Adapter from '@zarconontol/enzyme-adapter-react-18';
import DotEnv from 'dotenv';

DotEnv.config({ path: '.env.test' });

Enzyme.configure({
    adapter: new Adapter()
})