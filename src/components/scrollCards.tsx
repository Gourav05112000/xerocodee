import React, { Component, useState } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Box, Button, Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import { Pagination, PaginationItem, Stack } from '@mui/material'
import {data} from "../Data.tsx";


const ScrollCards = (props) => {
  const [range, setRange] = useState({
    lowerIndex: 0,
    upperIndex: 4
  });

  const handleChange = (buttonVal) => {
    if(buttonVal === 1 && range.upperIndex + 1 <= data.length - 1){
      setRange({
        lowerIndex: range.lowerIndex + 1 ,
        upperIndex: range.upperIndex + 1  
      })
    } else if(buttonVal === 0 && range.lowerIndex - 1 >= 0) {
      setRange({
        lowerIndex: range.lowerIndex - 1,
        upperIndex: range.upperIndex - 1
      })
    }
    console.log(props.data.slice(range.lowerIndex, range.upperIndex), range)
  }
  return (
    <>
    <div style={{overflowX: 'hidden', width: '100%'}}>
      <Box 
          sx={{ 
              display: 'flex',
              justifyContent: 'space-between', 
              
              width: '60%',
              margin: '0 auto',
              overflow:'hidden'
          }}> 
            
            {props.data.slice(range.lowerIndex , range.upperIndex).map((ele, index) => {
              return <Card key={index} style={{width: '30rem', margin: '0.5rem 1rem'}}>
                <CardContent>
                  <Box>{ele.ratings}</Box>
                  <Box>{ele.title}</Box>
                  <Box>{ele.descrtiption}</Box>
                  <Box>{ele.footerContent}</Box>
                </CardContent>
              </Card>
            })}
                
        </Box> 
        <div spacing={1} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}> 
              <Button onClick={() => handleChange(0)}>{"<"}</Button>
              <Button onClick={() => handleChange(1)}>{">"}</Button>
        </div> 
  </div>
  </>
  )
}

export default ScrollCards;

