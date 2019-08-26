import dataTransformer from './dataTransformer';

describe('UserLookup/dataTransformer', () => {
  it('transforms API data into select options', () => {
    const apiData = {
      search: {
        edges: [
          {
            node: {
              id: 'MDQ6VXNlcjQ0MDg5Mg==',
              name: 'Jesse Zhang',
              login: 'd',
              repositories: {
                totalCount: 115,
                __typename: 'RepositoryConnection',
              },
              organizations: {
                totalCount: 2,
                __typename: 'OrganizationConnection',
              },
              __typename: 'User',
            },
            __typename: 'SearchResultItemEdge',
          },
          {
            node: {
              id: 'asdfadsfdf==',
              name: 'Barton Briggs',
              login: 'de',
              repositories: {
                totalCount: 23,
                __typename: 'RepositoryConnection',
              },
              organizations: {
                totalCount: 15,
                __typename: 'OrganizationConnection',
              },
              __typename: 'User',
            },
            __typename: 'SearchResultItemEdge',
          },
        ],
      },
    };

    const expected = [
      {
        label: 'd',
        node: {
          id: 'MDQ6VXNlcjQ0MDg5Mg==',
          name: 'd',
          organisationsCount: 2,
          repositoriesCount: 115,
          username: 'd'
        },
        value: 'MDQ6VXNlcjQ0MDg5Mg==',
      },
      {
        label: 'de',
        node: {
          id: 'asdfadsfdf==',
          name: 'de',
          organisationsCount: 15,
          repositoriesCount: 23,
          username: 'de'
        },
        value: 'asdfadsfdf==',
      },
    ];

    expect(dataTransformer(apiData)).toEqual(expected);
  });
});
