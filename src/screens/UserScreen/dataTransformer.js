const dataTransformer = ({ user }) => ({
  id: user.id,
  name: user.name,
  username: user.login,
  bio: user.bio,
  image: user.avatarUrl,
  repositories: user.repositories.edges.map((edge) => ({
    id: edge.node.id,
    name: edge.node.name,
  })),
  totalRepositories: user.repositories.totalCount,
  organisations: user.organizations.edges.map((edge) => ({
    id: edge.node.id,
    name: edge.node.name,
  })),
  totalOrganisations: user.organizations.totalCount,
});

export default dataTransformer;
