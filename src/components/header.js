import './style.css';

function Header(){
    return (
        <div className="header">
           <nav className="navbar navbar-inverse myheader">
              <div className="container-fluid" style={{padding:'20px'}}>
              <div className="navbar-header">
                <a className="navbar-brand logo" href="index.html" >Task Manager</a>
                <br/><br/>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                  <ul className="nav navbar-nav navbar-right">
        <li><a href="index.html"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
    </div>
  </div>
</nav>
        </div>
        
    );
};

export default Header