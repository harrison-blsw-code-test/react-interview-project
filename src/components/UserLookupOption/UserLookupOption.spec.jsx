import React from 'react';
import { shallow } from 'enzyme';
import UserLookupOption from './UserLookupOption';

describe('UserLookupOption', () => {
  it('displays the username', () => {
    expect(shallow(
      <UserLookupOption
        node={{
          id: '123',
          username: 'testuser',
          name: 'Mrs Test',
          repositoriesCount: 4,
          organisationsCount: 10,
        }}
      />,
    ).contains('testuser')).toBe(true);
  });

  it('displays the name', () => {
    expect(shallow(
      <UserLookupOption
        node={{
          id: '123',
          username: 'testuser',
          name: 'Mrs Test',
          repositoriesCount: 4,
          organisationsCount: 10,
        }}
      />,
    ).contains('Mrs Test')).toBe(true);
  });

  it('displays the repositories count', () => {
    expect(shallow(
      <UserLookupOption
        node={{
          id: '123',
          username: 'testuser',
          name: 'Mrs Test',
          repositoriesCount: 4,
          organisationsCount: 10,
        }}
      />,
    ).contains('4')).toBe(true);
  });

  it('displays the organisations count', () => {
    expect(shallow(
      <UserLookupOption
        node={{
          id: '123',
          username: 'testuser',
          name: 'Mrs Test',
          repositoriesCount: 4,
          organisationsCount: 10,
        }}
      />,
    ).contains('10')).toBe(true);
  });
});
