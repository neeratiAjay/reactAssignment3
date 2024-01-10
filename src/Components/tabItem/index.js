import './index.css'

const TabItem = props => {
  const {tabDetails, isActive,updateTabItem} = props
  const {displayText,tabId} = tabDetails
  const classNameAdd = isActive ? 'select-item' : 'tab-item'

  const changeTabItem = ()=>{
    updateTabItem(tabId)
  }

  return (
    <li>
      <button className={classNameAdd} type="button" onClick = {changeTabItem}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
