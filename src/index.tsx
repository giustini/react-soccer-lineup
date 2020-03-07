import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

interface Props {
    text: string
}

class ExampleComponent extends React.Component<Props> {

    static propTypes = {
        text: PropTypes.string
    };

    render() {

        const { text } = this.props;

        return (
            <div className={ styles.test }>
                Example Component: { text }
            </div>
        );
    }
}

export default ExampleComponent;
