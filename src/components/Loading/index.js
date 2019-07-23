import React from 'react';

const Loading = WrappedComponent => {
    return class Loading extends React.Component {
        render() {
            return this.props.loading ? <div className="loading"></div> : <WrappedComponent {...this.props} />;
        }
    }
}

export default Loading;