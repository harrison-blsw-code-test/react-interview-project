const dataTransformer = ({ user }) => ({
  id: user.id,
  name: user.name,
  username: user.login,
  bio: user.bio,
  image: user.avatarUrl,
  repositories: user.repositories.edges.map((edge) => ({
    id: edge.node.id,
    name: edge.node.name,
    url: edge.node.url,
    colour: edge.node.primaryLanguage.color,
  })),
  totalRepositories: user.repositories.totalCount,
  organisations: user.organizations.edges.map((edge) => ({
    id: edge.node.id,
    name: edge.node.name,
    url: edge.node.url,
  })),
  totalOrganisations: user.organizations.totalCount,
});

export default dataTransformer;
