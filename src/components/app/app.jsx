import {Component} from "react";

import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

import './app.css'

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [
                {name: 'John C.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Alex M.', salary: 3000, increase: true, rise: false, id: 2},
                {name: 'Carl W.', salary: 5000, increase: false, rise: false, id: 3},
            ],
            term: '',
            filter: 'all',
            theme: 'light'
        }

        this.currentId = 4

        document.body.setAttribute('data-theme', this.state.theme)

    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        if (name.length !== 0 && salary.length !== 0)
            this.setState(({data}) => {
                let newArray = [...data, {name: name, salary: salary, increase: false, rise: false, id: this.currentId}]
                return {
                    data: newArray
                }
            }, () => this.currentId++)
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if (item.id === id) return {...item, [prop]: !item[prop]}
                return item
            })
        }))
    }

    searchEmployee = (items, term) => {
        if (term.length === 0) return items

        return items.filter(item => {
            return item.name.toLowerCase().indexOf(term.toLowerCase()) !== -1
        })
    }

    onSearchChange = (term) => {
        this.setState({term})
    }

    onFilterChange = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise)
            case 'higherThen1000':
                return items.filter(item => item.salary > 1000)
            default:
                return items
        }
    }

    changeFilterState = (filter) => {
        this.setState(({filter}))
    }

    render() {

        const employees            = this.state.data.length,
              increase             = this.state.data.filter(item => item.increase).length,
              {data, term, filter} = this.state,
              visibleData          = this.onFilterChange(this.searchEmployee(data, term), filter)

        return (
            <div className="app">
                <AppInfo employees={employees} increase={increase}/>

                <div className="search-panel">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <AppFilter filter={filter} changeFilterState={this.changeFilterState}/>
                </div>
                <EmployeesList
                    employees={visibleData}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm addItem={this.addItem}/>
            </div>
        )
    }
}