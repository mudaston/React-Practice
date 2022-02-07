const btnGroupStyle = {
    marginTop: '20px'
}

const AppFilter = ({changeFilterState, filter}) => {

    const buttonsData = [
        {name: 'all', label: 'Все сотрудники'},
        {name: 'rise', label: 'На повышение'},
        {name: 'higherThen1000', label: 'З/П больше 1000$'}
    ]

    const buttons = buttonsData.map(({name, label}) => {
        const clazz = filter === name ? 'btn-light' : 'btn-outline-light'

        return (
            <button
                style={btnGroupStyle}
                className={`btn ${clazz}`}
                type="button"
                key={name}
                onClick={() => changeFilterState(name)}>
                {label}
            </button>
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter