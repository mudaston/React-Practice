import './employees-list-item.css'

export default function EmployeesListItem(props) {
    const {name, salary, onDelete, onToggleProp, increase, rise} = props

    let liClassNames = increase ? "list-group-item d-flex justify-content-between increase" : "list-group-item d-flex justify-content-between"

    rise ? liClassNames += ' like' : liClassNames += ''

    return (
        <li className={liClassNames}>
            <span className="list-group-item-label"
                  onClick={onToggleProp}
                  data-toggle="rise">{name}
            </span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary}$`} placeholder="Salary"/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                        className="btn-cookie btn-sm"
                        onClick={onToggleProp}
                        data-toggle="increase">
                    <i className="fas fa-cookie"/>
                </button>

                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                    <i className="fas fa-trash"/>
                </button>
                <i className="fas fa-star"/>
            </div>
        </li>
    )
}