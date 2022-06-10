import './ExpenseItem.css'


function ExpenseItem () {
    return (
        <div className='expense-item'>
            <div>March 28th 2022</div>
            <div className='expense-item__description'>
                <h2>Magic cards</h2>
                <div className='expense-item__price'>R$ 120,45</div>
            </div>
        </div>
    )
}

export default ExpenseItem;