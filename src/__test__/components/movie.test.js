import React from 'react';
import { mount, shallow } from 'enzyme';
import Movie from '../../components/movie';
import  ProviderMock  from '../../__mocks__/ProviderMock';

describe('<Movies/>',() => {
  test('Render del componente',() => {
    const movies = shallow(
        <ProviderMock>
            <Movie/>
        </ProviderMock>
    )
    expect(movies.length).toBe(1);
  });
  test('Comprobar lista de movies', ()=> {
    const movies = mount(
        <ProviderMock>
            <Movie/>
        </ProviderMock>
    )
    expect(movies.find(".movie__card").text()).toBeDefined();
  });
});
