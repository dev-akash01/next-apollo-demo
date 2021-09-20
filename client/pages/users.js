import Link from 'next/link';
import UserList from '../components/UserList/UserList';
import { ApolloProvider } from '@apollo/client';
import client from '../lib/localhost-apollo-client';

const Users = () => {
  return (
    <ApolloProvider client={client}>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
      <span className="navbar-brand"><Link href="/">
              <a> Go Back</a>
            </Link> </span>
            
        <span className="navbar-brand"> Welcome, Leanne Graham</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link" aria-current="page">About</a>
              </Link>

            </li>
            <li className="nav-item">
              <Link href="/users">
                <a className="nav-link active" aria-current="page">Users</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
      <div className="container">
        <div className="row">
          <div className="col-xs">
            
          </div>
        </div>
        <div className="row">
          <div className="col-xs">
            <UserList />
          </div>
        </div>
      </div>
    </ApolloProvider>
  )
}

export default Users
