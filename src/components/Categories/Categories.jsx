import React, { useState } from 'react'

export default function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = useState(null)

  const onSelectItem = (index) => {
    setActiveItem(index)
  }

  return (
    <div className='categories'>
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => {
            onSelectItem(null)
          }}>
          Все
        </li>
        {items &&
          items.map((item, index) => (
            <li
              className={activeItem === index ? 'active' : ''}
              onClick={() => {
                onSelectItem(index)
                onClickItem(item)
              }}
              key={index}>
              {item}
            </li>
          ))}
      </ul>
    </div>
  )
}

// export default class Categories extends React.Component {
//   state = {
//     activeItem: '',
//   }

//   onSelectItem = index => {
//     this.setState({
//       activeItem: index
//     })
//   }

//   render() {
//     const { items, onClickItem } = this.props
//     const renderCategories = items.map((item, index) => (
//       <li
//         className={this.state.activeItem === index ? 'active' : ''}
//         onClick={() => {
//           this.onSelectItem(index)
//         }}
//         key={index}>
//         {item}
//       </li>
//     ))

//     return (
//       <div className='categories'>
//         <ul>
//           <li className='active'>Все</li>
//           {renderCategories}
//         </ul>
//       </div>
//     )
//   }
// }
