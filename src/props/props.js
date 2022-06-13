import React from 'react'

const PropsScreen = (props) => {

    const {x, y} = props;

  return (
    <div>{x}, {y}</div>
  )
}

export default PropsScreen

//import React
//import หน้าที่เก็บ props
//หน้าอื่นอยู่ใน class หรือ function ก็ได้
//x = "Aun" ,y = "aun@gmail.com"