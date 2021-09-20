import React, { useState, useEffect } from 'react';
import { query } from './query';
import { useQuery } from '@apollo/client';
import UserInfoCard from '../UserInfoCard/UserInfoCard';
import UserSearch from '../UserSearch/UserSearch';
import styles from './UserList.module.css';
import { UserResponse } from '../Interface/UserInterface';

const UserList = () => {
  // Number of Users to show on each load
  const PAGELIMIT = 20;
  // Setting response type as Userresponse Interface
  const [users, setUsers] = useState<UserResponse>([]);
  const [loadMoreBtn, setloadMoreBtn] = useState(true);

  /*************************************/
  /*** Load more Data when required ***/
  /***********************************/
  const loadMoreHandler = () => {
    fetchMore({
      variables: {
        offset: data.users.length + 1,
        limit: PAGELIMIT,
      },
      updateQuery: (previousResult: any, { fetchMoreResult }) => {
        setloadMoreBtn(fetchMoreResult.users.length)
        if (!fetchMoreResult) {
          return previousResult;
        }

        setUsers(previousResult.users)
        return Object.assign({}, previousResult, {
          users: [...previousResult.users, ...fetchMoreResult.users]
        })
      },
    })
  }

   /******************************************/
  /*** Handle as the user types in search ***/
  /*****************************************/
  const searchHandler = (users: UserResponse, search: string) => {
    if (search.length > 0) {
      setloadMoreBtn(false);
      setUsers(users);
    } else {
      setloadMoreBtn(true);
      setUsers([]);
    }
  }

  let { loading, error, data, fetchMore } = useQuery(query, {
    variables: {
      limit: PAGELIMIT,
      offset: 1,
    },
  });

  useEffect(() => {
    if (loading === false && data && data.users) {
      setUsers(data.users)
    }
  }, [loading, data]);

  // Return Loading if true
  if (loading) () => 'Loading...';

  // Return Error incase of error
  if (error) () => `Error occured: ${error.message}`;

  return (
    <>
      <div>
        <UserSearch onSearch={searchHandler} />
        <div className="row">
          <div className="col-xs">
            <div className={styles.userResultsSection}>
              <div className={styles.responselabel}>
                <span>Results</span>
              </div>
              {users.length > 0 ? (
                users.map(user => {
                  return (
                    <div key={user.email + Date.now()}>
                      <UserInfoCard user={user} />
                    </div>
                  )
                })
              ) : (
                <div className={styles.none}>No Results found. Please try again.</div>
              )}
            </div>
            {loadMoreBtn && (
              <div onClick={loadMoreHandler} className={styles.loadMoreBtn}>
                <button type="button" className="btn btn-primary">Load More</button>
              </div>
            )}
          </div>
        </div>

      </div>
    </>
  );
};

export default UserList;
