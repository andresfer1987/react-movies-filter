import React from 'react';
import { mount, shallow } from 'enzyme';
import Search from '../../components/search';
import  ProviderMock  from '../../__mocks__/ProviderMock';

describe('<Movies/>',() => {
  test('Render del componente',() => {
    const movies = shallow(
        <ProviderMock>
            <Search/>
        </ProviderMock>
    )
    expect(movies.length).toBe(1);
  });
  test('Comprobar lista de movies', ()=> {
    const movies = mount(
        <ProviderMock>
            <Search/>
        </ProviderMock>
    )
    expect(movies.find(".search").text()).toBeDefined();
  });
});
