import React from 'react'
import { connect } from 'react-redux'

export const index = (props:any) => {
  return (
    <div>index</div>
  )
}

const mapStateToProps = (state:any) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(index);