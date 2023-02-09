import React from 'react';
import { Heading, Breadcrumb } from '../components';
import usePageTitle from '../hooks/usePageTitle';

function About() {
  usePageTitle('Products');
  return (
    <div className="mx-auto my-16 max-w-container">
      <Heading title="About" />
      <Breadcrumb />
    </div>
  );
}
export default About;
