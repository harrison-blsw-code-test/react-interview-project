import React from 'react';
import { styled } from '@material-ui/styles';
import StorgageIcon from '@material-ui/icons/Storage';
import WorkIcon from '@material-ui/icons/Work';
import userSearchResultType from '../../types/userSearchResultType';

const Main = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const Bio = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const Counts = styled('div')({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

const Name = styled('span')({
  fontWeight: 'bold',
  marginRight: '10px',
});

const Username = styled('span')({
  color: 'lightgrey',
});

const UserLookupOption = ({
  node,
}) => (
  <Main>
    <Bio>
      <Name>{node.name}</Name>
      <Username>
        (
        {node.username}
        )
      </Username>
    </Bio>
    <Counts>
      <Counts>
        <StorgageIcon />
        {`${node.repositoriesCount}`}
      </Counts>
      <Counts>
        <WorkIcon />
        {`${node.organisationsCount}`}
      </Counts>
    </Counts>
  </Main>
);

UserLookupOption.propTypes = {
  node: userSearchResultType.isRequired,
};

export default UserLookupOption;
