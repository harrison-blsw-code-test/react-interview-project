import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { styled } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import StorgageIcon from '@material-ui/icons/Storage';
import WorkIcon from '@material-ui/icons/Work';
import userType from '../../types/userType';

const GitHubAvatar = styled('img')({
  width: '200px',
  borderRadius: '16px',
});

const StyledPaper = styled(Paper)({
  padding: '1em',
});

const ColouredAvatar = styled(Avatar)({
  backgroundColor: (props) => props.color,
});

const BioBox = styled(Box)({
  marginBottom: '3em',
});

const UserScreen = ({
  user,
  isLoading,
}) => {
  const [t] = useTranslation();

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <Container maxWidth="lg">
      <StyledPaper>
        <BioBox>
          <Typography align="center">
            <GitHubAvatar src={user.image} alt={user.username} />
          </Typography>
          <Typography variant="h3" gutterBottom align="center">{user.name}</Typography>
          <Typography variant="h4" gutterBottom align="center">{user.username}</Typography>
          <Typography variant="h6" gutterBottom align="center">{user.bio}</Typography>
        </BioBox>
        <Box container display="flex" justifyContent="center">
          <Box>
            {user.repositories.length > 0 && (
              <>
                <Typography variant="h5" gutterBottom>
                  {t('Repositories')}
                  <Chip label={user.totalRepositories} />
                </Typography>
                <List dense>
                  {user.repositories.map((repository) => (
                    <ListItem key={repository.id}>
                      <ListItemAvatar>
                        <ColouredAvatar color={repository.colour}>
                          <StorgageIcon />
                        </ColouredAvatar>
                      </ListItemAvatar>
                      <ListItemText primary={repository.name} />
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </Box>
          <Box>
            {user.organisations.length > 0 && (
              <>
                <Typography variant="h5" gutterBottom>
                  {t('Repositories')}
                  <Chip label={user.totalOrganisations} />
                </Typography>
                <List dense>
                  {user.organisations.map((organisation) => (
                    <ListItem key={organisation.id}>
                      <ListItemAvatar>
                        <Avatar>
                          <WorkIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={organisation.name} />
                    </ListItem>
                  ))}
                </List>
              </>
            )}
          </Box>
        </Box>
      </StyledPaper>
    </Container>
  );
};

UserScreen.propTypes = {
  user: userType,
  isLoading: PropTypes.bool.isRequired,
};

UserScreen.defaultProps = {
  user: null,
};

export default UserScreen;
