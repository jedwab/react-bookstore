import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookstoreName: "Black Books",
            clicked: false
        }
    }

    handleClick = () => {

        if (this.state.clicked) {

            this.setState({
                bookstoreName: "White Books",

                clicked: !this.state.clicked
            })

        } else {
            this.setState({
                bookstoreName: "Black Books"

              
            })
        }

    

    this.setState ( {
        clicked:!this.state.clicked
    })
    }
    render() {
        return ( <
            div className = "text-center" >
            <
            button onClick = {
                this.handleClick
            } > button < /button> <
            h1 > {
                this.state.bookstoreName
            } < /h1> </div > );
    }
}

export default Header;