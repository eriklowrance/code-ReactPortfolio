import React from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';
import Footer from '../Footer'

import { StyledContent } from './styles';

//designing the layout so every page has navbar and userHeader
const Layout = ({ user, children }) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <StyledContent>
        <UserHeader user={user} />
        <div>{children}</div>
      </StyledContent>
      <Footer />
    </>
  );
};

export default Layout;