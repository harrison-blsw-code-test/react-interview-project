const dataTransformer = (results) => results.search.edges.map(({ node }) => ({
  value: node.id,
  label: node.login,
  node: {
    id: node.id,
    username: node.login,
    name: node.login,
    repositoriesCount: node.repositories.totalCount,
    organisationsCount: node.organizations.totalCount,
  },
}));

export default dataTransformer;
