import React from 'react';

import Header from '@layout/Header';
import Content from '@layout/Content';
import Footer from '@layout/Footer';

import Todo from '../components/Todo';

const Layout = props => (
    <main>
        <Header {...props} />

        <Content>
            <Todo {...props} />
        </Content>

        <Footer {...props} />
    </main>
);
export default Layout;