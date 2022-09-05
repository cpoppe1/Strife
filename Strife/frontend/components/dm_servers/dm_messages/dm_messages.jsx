import React from "react";
import ReactTooltip from "react-tooltip";
import {createConsumer} from "@rails/actioncable"




class DmMessages extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            newMessgae: this.props.message,
            dmMessage: this.props.dmMessages,
            dmMessageIds: this.props.dmMessageIds
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.subscription ="";
        this.subscribe = this.subscribe.bind(this);
        this.unsubscribe = this.unsubscribe.bind(this);


    }
    componentDidMount () {
        this.props.fetchDmServer(this.props.dmServerId);
    }



    render () {
        console.log("dmserver messages props", this.props);
        // console.log("dmservers: ", this.props.dmServers);
        console.log(this.props.dmServer);

        return (

            <div className="dm-messages-container-wrapper">
                <p>vdfrdgrsdgwre</p>
                <p>vdfrdgrsdgwre</p>
                <p>vdfrdgrsdgwre</p>
                <p>vdfrdgrsdgwre</p>
                <p>vdfrdgrsdgwre</p>
                <p>vdfrdgrsdgwre</p>
                <p>vdfrdgrsdgwre</p>
                <p>vdfrdgrsdgwre</p>
                <p>vdfrdgrsdgwre</p>
            </div>
        )

    }
}

export default DmMessages;