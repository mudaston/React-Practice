import {Component} from "react";
import styled from 'styled-components'

const AppAddForm = styled.div`
  margin-top: 30px;
  padding: 25px;
  background-color: #3d5a80;
  border-radius: 4px;
  box-shadow: 15px 15px 30px rgba(0, 0, 0, .15);
  color: #fff;
  
  @media ${props => props.theme.media.tablet} {
    border: 1px solid red;
  }

  form {
    display: flex;
    margin-top: 20px;

    input {
      width: 350px;
      margin-right: 20px;
    }
  }
`

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            salary: ''
        }
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const {addItem}      = this.props
        const {name, salary} = this.state

        return (
            <AppAddForm>
                <h3>Добавьте нового сотрудника</h3>
                <form
                    onSubmit={(e) => {
                        e.preventDefault()
                        return addItem(name, salary)
                    }}>
                    <input type="text"
                           className="form-control new-post-label"
                           placeholder="Как его зовут?"
                           onChange={this.onInputChange}
                           name="name"
                           value={name}/>
                    <input type="number"
                           className="form-control new-post-label"
                           placeholder="З/П в $?"
                           onChange={this.onInputChange}
                           name="salary"
                           value={salary}/>
                    <button type="submit"
                            className="btn btn-outline-light">Добавить
                    </button>
                </form>
            </AppAddForm>
        )
    }
}

export default EmployeesAddForm