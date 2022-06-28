

  const Header = () => {
    return(
        <div className = "header">
            <h1> Semeiah's DashBoard </h1>
        </div>

    )     
};

const Reviews = () => {
    return(
        <div className = "container">
            <h2>Reviews</h2>
            <p className = "para"></p>
        </div>
    )
};

const AverageRating = () => {
    return(
        <div className = "rating">
            <h2>Average Rating</h2>
            <ul className = "list2">
                <li>Amazing</li>
            </ul>
        </div>
    )
};

const WebsiteVisitors = () => {
    return(
        <div className = "website">
            <h3>Website Visitors</h3>
        </div>
    )
};

const Menu = () => {
    return(
        <div className = "menu">
            <h2>Menu</h2>
            <ul className = "list">
                <li>Widgets</li>
                <br></br>
                <br></br>
                <li>Reviews</li>
                <br></br>
                <br></br>
                <li>Customers</li>
                <br></br>
                <br></br>
                <li>Online Analyis</li>
                <br></br>
                <br></br>
                <li>Settings</li>
                <br></br>
                <br></br>
            </ul>
        </div>
    )
};

const Analyis = () => {
    return(
        <div className = "analysis">
            <h2> Analysis</h2>
            <ul className = "list2">
                <li></li>
                <br></br>
                <li></li>
                <br></br>
                <li></li>
            </ul>
        </div>
    )
}

class App extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <Reviews />
                <AverageRating />
                <WebsiteVisitors />
                <Analyis />
                <Menu />
            </div>
        )
    }
};

ReactDOM.render(<App />, document.getElementById('root'))