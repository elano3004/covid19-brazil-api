import Link from 'next/link';

const SideNav = () => (
  <aside className="sidenav">
    <nav className="menu">
      <Link href="/">
        <a>
          <i className="material-icons">home</i>
        </a>
      </Link>
      <Link href="/status">
        <a>
          <i className="material-icons">insert_chart</i>
        </a>
      </Link>
      <Link href="/">
        <a>
          <i className="material-icons">dashboard</i>
        </a>
      </Link>
      <Link href="https://covid19-brazil-api-docs.now.sh/">
        <a>
          <i className="material-icons">book</i>
        </a>
      </Link>
      <Link href="/">
        <a>
          <i className="material-icons">info</i>
        </a>
      </Link>
    </nav>

    <style jsx>
      {`
      .sidenav {
        z-index: 1;
        height: 100vh;
        padding: 0 8px;
        transition: all .2s ease-in-out;
        display: flex;
        order: 1;
        flex-flow: column;
        position: sticky;
        top: 0;
        align-self: flex-start;
        background-color: rgba(0, 0, 0, 0.2);
      }

      nav {
        display: flex;
        flex-flow: column nowrap;
      }

      nav a {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        padding: 14px;
        border-radius: 50%;
        background-color: hsla(0, 0%, 100%, 0.2);
        color: hsla(0, 0%, 100%, 0.5);
        fill: hsla(0, 0%, 100%, 0.5);
        margin: 8px 0;
        height: 52px;
      }

      .menu {
        display: flex;
        flex-flow: column nowrap;
      }

      .menu .item {
        width: 56px;
        height: 56px;
        background-color: #202124;
      }

      @media (max-width: 600px) {
        footer {
          flex-direction: column;
        }
      }
    `}
    </style>
  </aside>
);

export default SideNav;