import React, { useState, useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import useDebounce from '../../utils/debouncer';
import styles from './UserSearch.module.css';

const UserSearch = (props: any) => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const debouncedSearchString = useDebounce(searchKeyword);

  const query = gql`
    query Users($name: String) {
      users(name: $name) {
        name
        address
        email
        phone
      }
    }
  `

  /** executeQuery handles when to execute the subsequent queries through useLazyQuery **/
  const [executeQuery, { data }] = useLazyQuery(query, {
    variables: {
      name: searchKeyword.toString().trim(),
    },
  })

  /** executeQuery when the user type in the search through debouncer **/
  useEffect(() => {
    executeQuery();
    if (data && data.users) {
      props.onSearch(data.users, debouncedSearchString)
    }
  }, [debouncedSearchString]);

  return (
    <div className="row">
      <div className="col-xs">
        <div className={styles.searchPanel}>
          <input
            className={styles.searchPanelInput}
            type="text"
            name="search"
            placeholder="Please start typing to search for user(s)..."
            value={searchKeyword}
            onChange={e => setSearchKeyword(e.target.value)}
          />
        </div>
      </div>

    </div>
  )
}

export default UserSearch
