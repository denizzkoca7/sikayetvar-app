
import React from 'react'
import { Button } from 'rebass/styled-components'

const CustomButton = ({bgColor,hoverColor,title,textColor,fw,onClick}) => {
  return (
    <Button
        variant="primary"
        size="large"
        sx={{
            backgroundColor: bgColor || 'transparent',
            color :textColor,
            padding: "12px 21px",
            cursor: "pointer",
            fontWeight: fw||"bold",
            transition: "all 0.3s ease-in-out",
            ":hover" : {
                backgroundColor: hoverColor,
            }

        }}
        onClick={onClick}
    >
        {title}
    </Button>
  )
}

export default CustomButton