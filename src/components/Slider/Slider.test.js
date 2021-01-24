import { shallow } from 'enzyme';
import Slider from './Slider';

describe('rendering Slider component', () => {
    let wrapper;
    it('component renders without crashing', () => {
        shallow(<Slider />);
    });
});
