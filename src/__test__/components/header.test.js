import { mount, shallow } from  'enzyme';
import Header from '../../components/header';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<Header/>',() => {
  test('Render del componente', ()=> {
      const header = shallow(
          <ProviderMock>
            <Header/>
          </ProviderMock>        
      )
      expect(header.length).toBe(1);
  });
   test('Render del titulo', () => {
       const header = mount(
          <ProviderMock>
            <Header/>
          </ProviderMock> 
       )
       expect(header.find(".header__title").text()).toEqual("MOVIES FILTER");
   });
});