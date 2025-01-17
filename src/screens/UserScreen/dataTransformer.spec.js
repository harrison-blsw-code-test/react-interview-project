import dataTransformer from './dataTransformer';

describe('UserScreen/dataTransformer', () => {
  it('transforms API data into a user', () => {
    const apiData = {
      user: {
        id: 'MDQ6VXNlcjI5NjE4Ng==',
        name: 'Chris Harrison',
        login: 'chrisharrison',
        bio: 'Test',
        avatarUrl: 'https://avatars3.githubusercontent.com/u/296186?v=4',
        repositories: {
          edges: [
            {
              node: {
                id: '123',
                name: 'personal',
                url: 'http://test.com/test/test',
                primaryLanguage: {
                  color: 'green',
                  name: 'PHP',
                  __typename: 'Language',
                },
                __typename: 'Repository',
              },
              __typename: 'RepositoryEdge',
            },
            {
              node: {
                id: '456',
                name: 'laravel-git-ssh-deploy',
                url: 'http://dummy.com/test/test',
                primaryLanguage: {
                  color: 'blue',
                  name: 'Shell',
                  __typename: 'Language',
                },
                __typename: 'Repository',
              },
              __typename: 'RepositoryEdge',
            },
          ],
          totalCount: 24,
          __typename: 'RepositoryConnection',
        },
        organizations: {
          edges: [
            {
              node: {
                id: '789',
                name: 'Organisation Ltd',
                url: 'http://org.com/org/test',
                __typename: 'Organization',
              },
              __typename: 'OrganizationEdge',
            },
          ],
          totalCount: 1,
          __typename: 'OrganizationConnection',
        },
        __typename: 'User',
      },
    };

    const expected = {
      id: 'MDQ6VXNlcjI5NjE4Ng==',
      name: 'Chris Harrison',
      username: 'chrisharrison',
      bio: 'Test',
      image: 'https://avatars3.githubusercontent.com/u/296186?v=4',
      repositories: [
        {
          id: '123',
          name: 'personal',
          url: 'http://test.com/test/test',
          colour: 'green',
        },
        {
          id: '456',
          name: 'laravel-git-ssh-deploy',
          url: 'http://dummy.com/test/test',
          colour: 'blue',
        },
      ],
      totalRepositories: 24,
      organisations: [
        {
          id: '789',
          name: 'Organisation Ltd',
          url: 'http://org.com/org/test',
        },
      ],
      totalOrganisations: 1,
    };

    expect(dataTransformer(apiData)).toEqual(expected);
  });
});
