import React from 'react'
import styled from 'styled-components'
import { connect, ConnectedProps, DispatchProp   } from 'react-redux'
import { RootState } from '../../reducers/rootReducer'
import { NotificationState } from '../../reducers/types/Notification'
import * as notificationActions from '../../actions/notificationActions'
import { showNotification, hideNotification,  } from '../../actions/notificationActions'

const StyledNotification = styled.div`
    width: 100%;
    color: #fff;
    display: flex;
`;

type NotificationProps = NotificationState & typeof mapDispatchToProps;
const mapStateToProps = (state: RootState) => state.notification
const mapDispatchToProps = { showNotification, hideNotification }

class Notification extends React.Component<NotificationProps, {}>{

    constructor(props: NotificationProps){
        super(props)

        this.toogle = this.toogle.bind(this)
    }

    toogle(){ return this.props.show ? this.props.hideNotification() : this.props.showNotification() }

    render(){
        console.log(this.props)
        const { show } = this.props
        return null
        // return  <div onClick={this.toogle}>{show ? 'notif show' : 'notif hide'}</div>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
