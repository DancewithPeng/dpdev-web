import React from 'react';
import 'antd/dist/antd.css';
import styles from './welcome.css';
import './welcome.css'

class Welcome extends React.Component {
    render() {        
        return (
            <div className={ styles.container }>
                <h1 className= { styles.title }>欢迎来到天才社区</h1>
                <div className= { styles.card }>
                    {this.props.children}
                </div>            
            </div>            
        );
    }
}

export { Welcome };