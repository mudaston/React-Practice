import {Component} from "react";

import './search-panel.css'

class SearchPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }
    }

    onSearchChange = (e) => {
        const term = e.target.value
        this.setState({term})
        this.props.onSearchChange(term)
    }

    render() {
        const {term} = this.state

        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника"
                onChange={this.onSearchChange}
                value={term}/>
        )
    }
}

export default SearchPanel