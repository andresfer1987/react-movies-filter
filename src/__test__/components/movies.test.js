import React from 'react';
import { mount, shallow } from 'enzyme';
import Movies from '../../components/movies';
import  ProviderMock  from '../../__mocks__/ProviderMock';

describe('<Movies/>',() => {
  test('Render del componente',() => {
    const movies = shallow(
        <ProviderMock>
            <Movies/>
        </ProviderMock>
    )
    expect(movies.length).toBe(1);
  });
  test('Comprobar lista de movies', ()=> {
    const movies = mount(
        <ProviderMock>
            <Movies/>
        </ProviderMock>
    )
    expect(movies.find(".movies__list").text()).toBeDefined();
  });
});
