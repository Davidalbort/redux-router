import {NavLink} from 'react-router-dom';


function Link ({listLink,typeList}){
  const createListLink = listLink.map(link => (
  <li  key={link.text}>
    <NavLink 
      
      style={( {isActive}) =>({
        color: isActive? 'orange': 'white',
      })}
      to={link.to} 
      end
      >
      {link.text}
    </NavLink>
  </li>
  ))
  let createTypeList = typeList === 'ol' ? <ol>{createListLink}</ol>:
                     typeList === 'ul' ? <ul>{createListLink}</ul>:
                     <li>{createListLink}</li>
  return(
      <div className="container-link">
          {createTypeList}
      </div>
  )
}

Link.defaultProps ={
  listLink: [''],
  typeList:''
}

export {Link};