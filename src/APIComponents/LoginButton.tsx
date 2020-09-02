import React, { isValidElement, cloneElement } from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../reducers/rootReducer' 
import { GET_ACCESS_CODE } from '../reducers/types/Login' 

const mapState = (state: RootState) => ({ fetching: state.login.fetching })
const connector = connect(mapState)
type Props = ConnectedProps<typeof connector> & {children: React.ReactNode}
  
function LoginButton<T>(props: React.PropsWithChildren<Props> & ConnectedProps<typeof connector>){
    const { dispatch } = props

    return isValidElement(props.children) ? cloneElement(props.children, {
        onClick: dispatch({type: GET_ACCESS_CODE})
    }) : <>{props.children}</>
}

export default LoginButton